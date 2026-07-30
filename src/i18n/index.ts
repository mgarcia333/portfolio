import { contentCa } from "./content.ca";
import { contentEn } from "./content.en";
import { contentEs } from "./content.es";
import type { Locale, SiteContent } from "./types";

export * from "./types";

export const DEFAULT_LOCALE: Locale = "es";
export const STORAGE_KEY = "portfolio-locale";

export const contentByLocale: Record<Locale, SiteContent> = {
  es: contentEs,
  ca: contentCa,
  en: contentEn,
};

export interface LocaleMeta {
  code: Locale;
  label: string;
  shortLabel: string;
}

export const locales: LocaleMeta[] = [
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "ca", label: "Català", shortLabel: "CA" },
  { code: "en", label: "English", shortLabel: "EN" },
];

export function isLocale(value: string): value is Locale {
  return value in contentByLocale;
}
