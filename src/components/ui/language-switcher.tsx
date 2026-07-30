"use client";

import { locales } from "@/i18n";
import { useLanguage } from "@/i18n/language-context";
import { flagByLocale } from "@/components/ui/flags";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("flex items-center gap-1 border border-outline-variant p-1", className)}
    >
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
              "flex size-7 items-center justify-center overflow-hidden rounded-sm border transition-all duration-200",
              isActive
                ? "border-primary opacity-100"
                : "border-transparent opacity-50 hover:opacity-90"
            )}
          >
            <Flag className="size-full object-cover" />
          </button>
        );
      })}
    </div>
  );
}
