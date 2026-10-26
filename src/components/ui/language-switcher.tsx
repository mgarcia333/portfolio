"use client";

import { Fragment } from "react";
import { locales } from "@/i18n";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

/** Plain text switch (ES / CA / EN): the active language is just underlined. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      role="group"
      aria-label={content.ui.language}
      className={cn("flex items-center", className)}
    >
      {locales.map((item, index) => {
        const isActive = item.code === locale;
        return (
          <Fragment key={item.code}>
            {index > 0 ? (
              <span aria-hidden="true" className="text-ink-muted">
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLocale(item.code)}
              aria-label={item.label}
              aria-pressed={isActive}
              lang={item.code}
              title={item.label}
              className={cn(
                "h-10 min-w-9 px-1.5 text-sm font-semibold underline-offset-[7px] decoration-2 transition-colors",
                isActive ? "text-ink underline" : "text-ink-muted hover:text-ink"
              )}
            >
              {item.shortLabel}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
