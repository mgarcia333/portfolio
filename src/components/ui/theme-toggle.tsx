"use client";

import { useLanguage } from "@/i18n/language-context";
import { useTheme } from "@/theme/theme-context";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { content } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={content.themeToggle}
      aria-pressed={theme === "light"}
      data-cursor-hover
      className={cn(
        "relative inline-flex h-5 w-10 shrink-0 items-center border border-outline bg-surface-container-high transition-colors hover:border-primary",
        className
      )}
    >
      <span
        className={cn(
          "absolute top-1/2 left-0.5 size-3.5 -translate-y-1/2 border border-outline-variant bg-surface-bright shadow-[0_1px_0_0_rgba(0,0,0,0.3)_inset] transition-transform duration-200 ease-out",
          theme === "light" && "translate-x-[22px] border-primary-dim bg-primary"
        )}
      />
    </button>
  );
}
