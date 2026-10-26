"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { Button } from "@/components/ui/button";

function scrollToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

export function Footer() {
  const { content } = useLanguage();
  const { profile, footer } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="on-band bg-footer text-on-band">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 max-w-md text-sm text-on-band-soft">
            © {year} · {footer.note}
          </p>
        </div>
        <Button onClick={scrollToTop} variant="onband" size="sm" className="self-start md:self-auto">
          {footer.top}
          <ArrowUp className="size-4" />
        </Button>
      </div>
    </footer>
  );
}
