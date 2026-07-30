"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export function Experience() {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading kicker={experience.kicker} title={experience.title} />

        <ol className="relative border-l border-outline-variant pl-8">
          {experience.entries.map((entry) => (
            <li key={entry.org} className="relative mb-12 last:mb-0">
              <span
                className={cn(
                  "absolute -left-10 top-1 flex size-4 items-center justify-center rounded-full border",
                  entry.current ? "border-primary bg-primary/20" : "border-outline bg-surface-container"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    entry.current ? "animate-pulse bg-primary" : "bg-outline"
                  )}
                />
              </span>

              <div className="text-tag mb-2 flex flex-wrap items-center gap-3 text-xs">
                <span className="text-on-surface-muted">{entry.tag}</span>
                <span
                  className={cn(
                    "border px-2 py-0.5",
                    entry.current
                      ? "border-primary/40 text-primary"
                      : "border-outline-variant text-on-surface-muted"
                  )}
                >
                  {entry.status}
                </span>
              </div>

              <h3 className="font-display text-xl text-on-surface sm:text-2xl">{entry.org}</h3>
              <p className="text-tag mt-1 text-xs text-on-surface-variant">{entry.role}</p>
              <p className="mt-3 max-w-xl text-pretty text-on-surface-variant">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex justify-center">
          <MagneticButton href="/experience" variant="outline">
            {experience.viewMore}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
