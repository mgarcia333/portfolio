"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TechChip } from "@/components/ui/tech-chip";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export function ExperiencePageContent() {
  const { content } = useLanguage();
  const { experiencePage } = content;

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          data-cursor-hover
          className="text-tag mb-10 inline-flex items-center gap-2 text-xs text-on-surface-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" />
          {experiencePage.backHome}
        </Link>

        <div className="text-tag mb-4 flex items-center gap-3 text-xs text-primary">
          <span className="h-px w-8 bg-primary/50" />
          {experiencePage.kicker}
        </div>
        <h1 className="font-display text-4xl font-medium tracking-tight text-on-surface sm:text-5xl">
          {experiencePage.title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-on-surface-variant">
          {experiencePage.description}
        </p>

        <ol className="relative mt-16 border-l border-outline-variant pl-8">
          {experiencePage.entries.map((entry) => (
            <li key={entry.org} className="relative mb-16 last:mb-0">
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

              <h2 className="font-display text-xl text-on-surface sm:text-2xl">{entry.org}</h2>
              <p className="text-tag mt-1 text-xs text-on-surface-variant">{entry.role}</p>
              <p className="mt-3 max-w-xl text-pretty text-on-surface-variant">{entry.description}</p>

              <ul className="mt-5 space-y-2">
                {entry.highlights.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-on-surface-variant">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <TechChip key={tech} label={tech} />
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
