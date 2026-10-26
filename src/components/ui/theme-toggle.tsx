"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { useTheme } from "@/theme/theme-context";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  /** Show the label next to the icon (used inside the mobile menu). */
  withLabel?: boolean;
}

export function ThemeToggle({ className, withLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { content } = useLanguage();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={content.themeToggle}
      title={content.themeToggle}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-full text-fg-soft transition-colors hover:bg-surface-hover hover:text-fg",
        withLabel ? "px-3 font-medium" : "w-10",
        className
      )}
    >
      <Icon className="size-5" />
      {withLabel ? content.themeToggle : null}
    </button>
  );
}
