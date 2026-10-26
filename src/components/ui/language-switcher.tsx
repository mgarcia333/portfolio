"use client";

import { Fragment } from "react";
import { locales } from "@/i18n";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

/** Plain text switch (ES / CA / EN): no boxes, the active one is underlined in green. */
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
              <span aria-hidden="true" className="text-line-strong">
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
                "relative h-10 min-w-9 px-1.5 text-sm font-semibold transition-colors",
                isActive ? "text-fg" : "text-fg-muted hover:text-fg"
              )}
            >
              {item.shortLabel}
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-1.5 bottom-1.5 h-0.5 rounded-full bg-signal"
                />
              ) : null}
            </button>
          </Fragment>
        );
      })}
    </div>
  );
}
