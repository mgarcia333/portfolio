"use client";

import { locales } from "@/i18n";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      role="group"
      aria-label={content.ui.language}
      className={cn("inline-flex border-2 border-ink bg-card", className)}
    >
      {locales.map((item) => {
        const isActive = item.code === locale;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code)}
            aria-label={item.label}
            aria-pressed={isActive}
            lang={item.code}
            title={item.label}
            className={cn(
              "h-10 min-w-10 px-2 text-sm font-bold transition-colors",
              isActive ? "bg-ink text-paper" : "hover:bg-highlight hover:text-highlight-ink"
            )}
          >
            {item.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
