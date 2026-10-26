"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import {
  CONTACT_TOPICS,
  LIMITS,
  invalidFields,
  type ContactField,
  type ContactTopic,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "success" | "error";
type ServerError = "generic" | "rate" | "unavailable" | "network";

interface Values {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
  consent: boolean;
  website: string; // honeypot: real people never see it
}

const EMPTY: Values = { name: "", email: "", topic: "project", message: "", consent: false, website: "" };
const FIELD_ORDER: ContactField[] = ["name", "email", "message", "consent"];

const inputClass = (invalid: boolean) =>
  cn(
    "block w-full rounded-none border-0 border-b bg-transparent px-0 py-3 text-lg text-ink transition-colors placeholder:text-ink-muted/70 focus:border-accent",
    invalid ? "border-danger" : "border-ink"
  );

function Field({
  id,
  label,
  error,
  aside,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
        {aside}
      </div>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm({ email: to }: { email: string }) {
  const { content, locale } = useLanguage();
  const f = content.contactForm;

  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<ContactField, boolean>>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<ServerError | null>(null);
  const [sent, setSent] = useState<{ name: string; email: string } | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    // Clear a field's error as soon as it becomes valid.
    if (key in errors && errors[key as ContactField]) {
      const next = { ...values, [key]: value };
      if (!invalidFields(next).includes(key as ContactField)) {
        setErrors((current) => ({ ...current, [key]: false }));
      }
    }
  }

  function validateOne(field: ContactField) {
    setErrors((current) => ({ ...current, [field]: invalidFields(values).includes(field) }));
  }

  function focusField(field: ContactField) {
    (formRef.current?.elements.namedItem(field) as HTMLElement | null)?.focus();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const invalid = invalidFields(values);
    if (invalid.length > 0) {
      setErrors(Object.fromEntries(invalid.map((field) => [field, true])));
      setShowSummary(true);
      focusField(FIELD_ORDER.find((field) => invalid.includes(field))!);
      return;
    }

    setShowSummary(false);
    setServerError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale, startedAt: startedAt.current }),
      });
      const data: { ok?: boolean; error?: string } | null = await response.json().catch(() => null);

      if (response.ok && data?.ok) {
        setSent({ name: values.name.trim(), email: values.email.trim() });
        setStatus("success");
        return;
      }

      setServerError(
        response.status === 429 ? "rate" : response.status === 503 ? "unavailable" : "generic"
      );
    } catch {
      setServerError("network");
    }
    setStatus("error");
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setServerError(null);
    setSent(null);
    setStatus("idle");
    startedAt.current = Date.now();
  }

  if (status === "success" && sent) {
    return (
      <div ref={successRef} tabIndex={-1} className="border-t border-ink pt-8 outline-none">
        <h3 className="display text-[clamp(2rem,3.4vw,2.75rem)]">{f.success.title}</h3>
        <p className="mt-4 max-w-lg text-lg text-pretty text-ink-soft">
          {f.success.text.replace("{name}", sent.name).replace("{email}", sent.email)}
        </p>
        <Button variant="outline" className="mt-8" onClick={reset}>
          {f.success.again}
        </Button>
      </div>
    );
  }

  const sending = status === "sending";
  const mailto = `mailto:${to}?subject=${encodeURIComponent(
    `${f.topics[values.topic]} — ${values.name.trim()}`.trim()
  )}&body=${encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`.slice(0, 1500))}`;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="relative space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field id="name" label={f.fields.name} error={errors.name ? f.errors.name : undefined}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.nameMax}
            value={values.name}
            placeholder={f.placeholders.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => values.name && validateOne("name")}
            aria-invalid={errors.name || undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field id="email" label={f.fields.email} error={errors.email ? f.errors.email : undefined}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            maxLength={LIMITS.emailMax}
            value={values.email}
            placeholder={f.placeholders.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => values.email && validateOne("email")}
            aria-invalid={errors.email || undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold">{f.fields.topic}</legend>
        <div className="mt-1 flex flex-wrap gap-x-7">
          {CONTACT_TOPICS.map((topic) => (
            <label key={topic} className="relative cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={topic}
                checked={values.topic === topic}
                onChange={() => set("topic", topic)}
                className="peer sr-only"
              />
              <span className="inline-flex h-11 items-center border-b-2 border-transparent font-semibold text-ink-muted transition-colors hover:text-ink peer-checked:border-ink peer-checked:text-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--focus)]">
                {f.topics[topic]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        id="message"
        label={f.fields.message}
        error={errors.message ? f.errors.message : undefined}
        aside={
          <span
            className={cn(
              "text-sm tabular-nums",
              values.message.length > LIMITS.messageMax - 100 ? "text-danger" : "text-ink-muted"
            )}
          >
            {f.counter
              .replace("{n}", String(values.message.length))
              .replace("{max}", String(LIMITS.messageMax))}
          </span>
        }
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={LIMITS.messageMax}
          value={values.message}
          placeholder={f.placeholders.message}
          onChange={(e) => set("message", e.target.value)}
          onBlur={() => values.message && validateOne("message")}
          aria-invalid={errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputClass(!!errors.message), "min-h-40 resize-y leading-relaxed")}
        />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 py-1">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={errors.consent || undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 size-5 shrink-0 cursor-pointer accent-[var(--ink)]"
          />
          <span className="text-[0.95rem] text-ink-soft">{f.consent}</span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-1 pl-8 text-sm font-medium text-danger">
            {f.errors.consent}
          </p>
        ) : null}
        <p className="mt-2 pl-8 text-sm text-ink-muted">{f.privacy}</p>
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting for bots. */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => set("website", e.target.value)}
          />
        </label>
      </div>

      {showSummary && Object.values(errors).some(Boolean) ? (
        <p role="alert" className="border-l-2 border-danger pl-4 text-sm font-semibold text-danger">
          {f.errors.summary}
        </p>
      ) : null}

      {status === "error" && serverError ? (
        <div role="alert" className="border-l-2 border-danger pl-4 text-sm">
          <p className="font-semibold text-danger">{f.errors[serverError]}</p>
          {serverError !== "rate" ? (
            <>
              <p className="mt-3 text-ink-soft">{f.fallback}</p>
              <ButtonLink href={mailto} variant="outline" size="sm" className="mt-3">
                <Mail className="size-4" />
                {f.fallbackCta}
              </ButtonLink>
            </>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="solid" disabled={sending} aria-busy={sending} className="min-w-48 disabled:cursor-wait disabled:opacity-70">
          {sending ? (
            <>
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              />
              {f.sending}
            </>
          ) : (
            <>
              {f.submit}
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
        <p role="status" className="sr-only">
          {sending ? f.sending : ""}
        </p>
      </div>
    </form>
  );
}
