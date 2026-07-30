"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { TechChip } from "@/components/ui/tech-chip";
import { useLanguage } from "@/i18n/language-context";

export function Stack() {
  const { content } = useLanguage();
  const { stack } = content;

  return (
    <section id="stack" className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker={stack.kicker} title={stack.title} description={stack.description} />

        <div
          tabIndex={0}
          className="mask-fade-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {stack.categories.map((category) => (
            <TiltCard key={category.id} className="w-64 shrink-0 snap-start sm:w-72" max={4}>
              <CornerBrackets />
              <div className="flex h-full min-h-44 flex-col p-6">
                <p className="text-tag mb-5 text-xs text-primary">{category.label}</p>
                <div className="flex flex-1 flex-wrap content-start gap-2">
                  {category.items.map((item) => (
                    <TechChip key={item.name} icon={item.icon} label={item.name} />
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
