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
      data-cursor-hover
      className={cn("text-on-surface transition-colors hover:text-primary", className)}
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
