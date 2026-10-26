"use client";

import { useLanguage } from "@/i18n/language-context";

export function SkipLink() {
  const { content } = useLanguage();

  return (
    <a
      href="#main"
      className="fixed top-3 left-3 z-[100] -translate-y-20 border-2 border-ink bg-accent px-4 py-2 font-bold text-accent-ink shadow-hard focus:translate-y-0"
    >
      {content.ui.skipToContent}
    </a>
  );
}
