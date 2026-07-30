"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Footer() {
  const { content } = useLanguage();
  const { profile, footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-surface-dim">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-xs text-on-surface-muted sm:flex-row sm:justify-between">
        <p className="text-tag">
          © {year} {profile.name.toUpperCase()}
        </p>
        <p className="text-tag text-center">{footer.builtWith}</p>
        <MagneticButton href="#" variant="ghost" className="px-3 py-1.5 text-[11px]">
          {footer.top}
          <ArrowUp className="size-3.5" />
        </MagneticButton>
      </div>
    </footer>
  );
}
