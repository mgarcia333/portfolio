/** Shared by the form (client) and the API route (server), so both agree on the rules. */

export const CONTACT_TOPICS = ["project", "collaboration", "job", "other"] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 3000,
} as const;

export type ContactField = "name" | "email" | "message" | "consent";

export interface ContactInput {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
  consent: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Drops control characters (keeps newlines) and tidies whitespace. */
export function clean(value: string) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Returns the fields that don't pass; an empty list means the input is valid. */
export function invalidFields(input: Partial<Record<keyof ContactInput, unknown>>): ContactField[] {
  const invalid: ContactField[] = [];
  const name = typeof input.name === "string" ? clean(input.name) : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? clean(input.message) : "";

  if (name.length < LIMITS.nameMin || name.length > LIMITS.nameMax) invalid.push("name");
  if (!EMAIL_RE.test(email) || email.length > LIMITS.emailMax) invalid.push("email");
  if (message.length < LIMITS.messageMin || message.length > LIMITS.messageMax) invalid.push("message");
  if (input.consent !== true) invalid.push("consent");
  return invalid;
}

export function isTopic(value: unknown): value is ContactTopic {
  return typeof value === "string" && (CONTACT_TOPICS as readonly string[]).includes(value);
}

/** Response codes the route can send back; the form maps them to translated text. */
export type ContactError = "validation" | "rate" | "unavailable" | "send" | "invalid";
