"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";

function scrollToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

export function Footer() {
  const { content } = useLanguage();
  const { profile, footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="on-ink border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-3xl">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm text-paper/70">
            © {year} · {footer.note}
          </p>
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex min-h-12 items-center gap-2 self-start border-2 border-paper px-5 font-bold transition-colors hover:bg-accent hover:text-accent-ink active:translate-y-px md:self-auto"
        >
          {footer.top}
          <ArrowUp className="size-4" />
        </button>
      </div>
    </footer>
  );
}
