import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-surface-dim">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-xs text-on-surface-muted sm:flex-row sm:justify-between">
        <p className="text-tag">
          © {year} {profile.name.toUpperCase()}
        </p>
        <p className="text-tag text-center">
          BUILT WITH NEXT.JS + TAILWIND — DEPLOYED ON CLOUDFLARE
        </p>
        <MagneticButton href="#" variant="ghost" className="px-3 py-1.5 text-[11px]">
          TOP
          <ArrowUp className="size-3.5" />
        </MagneticButton>
      </div>
    </footer>
  );
}
