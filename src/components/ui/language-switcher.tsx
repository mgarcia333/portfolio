"use client";

import { locales } from "@/i18n";
import { useLanguage } from "@/i18n/language-context";
import { flagByLocale } from "@/components/ui/flags";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div role="group" aria-label="Language" className={cn("flex items-center gap-3", className)}>
      {locales.map((item) => {
        const Flag = flagByLocale[item.code];
        const isActive = item.code === locale;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code)}
            aria-label={item.label}
            aria-pressed={isActive}
            data-cursor-hover
            className={cn(
              "block size-5 overflow-hidden transition-all duration-200",
              isActive
                ? "scale-110 opacity-100"
                : "scale-100 opacity-45 hover:scale-105 hover:opacity-80"
            )}
          >
            <Flag className="size-full object-cover" />
          </button>
        );
      })}
    </div>
  );
}
