import { getCloudflareContext } from "@opennextjs/cloudflare";
import { profileShared } from "@/i18n/shared";
import { clean, invalidFields, isTopic, type ContactError } from "@/lib/contact";

// Delivery is done with Resend over plain HTTP, which works from a Worker on
// workers.dev without owning a domain. Setup is documented in the README.
const DEFAULT_API_URL = "https://api.resend.com/emails";
const DEFAULT_FROM = "Portafolio <onboarding@resend.dev>";

const TOPIC_LABEL = {
  project: "Proyecto",
  collaboration: "Colaboración",
  job: "Oferta de trabajo",
  other: "Otro",
} as const;

// Bot friction that costs real people nothing.
const MIN_FILL_MS = 2000; // nobody types a message in under two seconds
const MAX_FILL_MS = 24 * 60 * 60 * 1000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const recent = new Map<string, number[]>(); // per isolate: best effort, not a guarantee

function readEnv(name: keyof CloudflareEnv): string | undefined {
  try {
    const value = getCloudflareContext().env[name];
    if (typeof value === "string" && value) return value;
  } catch {
    // Not running inside the Worker (for example `next start`): fall back below.
  }
  return process.env[name] || undefined;
}

function reply(body: { ok: true } | { ok: false; error: ContactError }, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function clientKey(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function tooMany(key: string, now: number) {
  const hits = (recent.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (hits.length >= MAX_PER_WINDOW) {
    recent.set(key, hits);
    return true;
  }
  recent.set(key, [...hits, now]);
  return false;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (typeof parsed !== "object" || parsed === null) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return reply({ ok: false, error: "invalid" }, 400);
  }

  const now = Date.now();
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;
  const elapsed = now - startedAt;
  const looksLikeBot =
    (typeof body.website === "string" && body.website.trim() !== "") ||
    !(elapsed >= MIN_FILL_MS && elapsed <= MAX_FILL_MS);
  // Bots get a success so they have nothing to adapt to.
  if (looksLikeBot) return reply({ ok: true });

  if (invalidFields(body).length > 0 || !isTopic(body.topic)) {
    return reply({ ok: false, error: "validation" }, 422);
  }

  if (tooMany(clientKey(request), now)) return reply({ ok: false, error: "rate" }, 429);

  const apiKey = readEnv("RESEND_API_KEY");
  if (!apiKey) return reply({ ok: false, error: "unavailable" }, 503);

  const name = clean(String(body.name)).replace(/\s+/g, " ");
  const email = String(body.email).trim();
  const message = clean(String(body.message));
  const topic = TOPIC_LABEL[body.topic as keyof typeof TOPIC_LABEL];
  const locale = typeof body.locale === "string" ? body.locale.slice(0, 5) : "es";

  const text = [
    "Nuevo mensaje desde el portafolio",
    "",
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Motivo: ${topic}`,
    `Idioma de la web: ${locale}`,
    "",
    message,
  ].join("\n");

  const html = `<div style="font-family:system-ui,sans-serif;font-size:16px;line-height:1.6;color:#15121d">
  <p style="margin:0 0 16px"><strong>Nuevo mensaje desde el portafolio</strong></p>
  <table style="border-collapse:collapse;margin:0 0 20px">
    <tr><td style="padding:2px 16px 2px 0;color:#6e687c">Nombre</td><td>${escapeHtml(name)}</td></tr>
    <tr><td style="padding:2px 16px 2px 0;color:#6e687c">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
    <tr><td style="padding:2px 16px 2px 0;color:#6e687c">Motivo</td><td>${escapeHtml(topic)}</td></tr>
    <tr><td style="padding:2px 16px 2px 0;color:#6e687c">Idioma</td><td>${escapeHtml(locale)}</td></tr>
  </table>
  <div style="white-space:pre-wrap;border-left:3px solid #5a2d9c;padding-left:14px">${escapeHtml(message)}</div>
</div>`;

  try {
    const response = await fetch(readEnv("RESEND_API_URL") ?? DEFAULT_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: readEnv("CONTACT_FROM") ?? DEFAULT_FROM,
        to: [readEnv("CONTACT_TO") ?? profileShared.email],
        reply_to: email,
        subject: `Portafolio · ${topic}: ${name}`.slice(0, 200),
        text,
        html,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("contact: delivery service answered", response.status, await response.text());
      return reply({ ok: false, error: "send" }, 502);
    }
    return reply({ ok: true });
  } catch (error) {
    console.error("contact: delivery failed", error);
    return reply({ ok: false, error: "send" }, 502);
  }
}
