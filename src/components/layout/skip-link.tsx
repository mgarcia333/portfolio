"use client";

import { useLanguage } from "@/i18n/language-context";

export function SkipLink() {
  const { content } = useLanguage();

  return (
    <a
      href="#main"
      className="fixed top-3 left-3 z-[100] -translate-y-20 bg-ink px-5 py-2.5 font-semibold text-paper focus:translate-y-0"
    >
      {content.ui.skipToContent}
    </a>
  );
}
