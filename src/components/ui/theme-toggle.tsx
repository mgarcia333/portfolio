"use client";

import { Moon, Sun } from "lucide-react";
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
      title={content.themeToggle}
      className={cn(
        "inline-flex size-10 items-center justify-center border-2 border-ink bg-card transition-colors hover:bg-highlight hover:text-highlight-ink active:translate-y-px",
        className
      )}
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
