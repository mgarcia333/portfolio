"use client";

import { useLanguage } from "@/i18n/language-context";

export function Marquee() {
  const { content } = useLanguage();
  const loopItems = [...content.heroTicker, ...content.heroTicker];

  return (
    <div className="relative border-y border-outline-variant bg-surface-container-low py-4">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 pr-10 whitespace-nowrap">
          {loopItems.map((item, i) => (
            <span
              key={i}
              className="text-tag inline-flex items-center gap-10 text-xs text-on-surface-variant"
            >
              <span>{item}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
