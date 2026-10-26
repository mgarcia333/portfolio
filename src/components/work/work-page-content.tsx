"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { WorkIndex } from "@/components/work/work-index";
import { useLanguage } from "@/i18n/language-context";
import type { ProjectCategory } from "@/i18n/types";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const CATEGORY_ORDER: ProjectCategory[] = ["client", "webapp", "unity", "template"];

export function WorkPageContent() {
  const { content } = useLanguage();
  const { work } = content;
  const [filter, setFilter] = useState<Filter>("all");

  const countFor = (value: Filter) =>
    value === "all"
      ? work.projects.length
      : work.projects.filter((project) => project.category === value).length;

  const options: Filter[] = ["all", ...CATEGORY_ORDER.filter((category) => countFor(category) > 0)];
  const visible =
    filter === "all" ? work.projects : work.projects.filter((project) => project.category === filter);
  const countText = (visible.length === 1 ? work.countOne : work.countMany).replace(
    "{n}",
    String(visible.length)
  );

  return (
    <main id="main" className="pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader backLabel={work.backHome} title={work.title} description={work.description} />

        <div
          role="group"
          aria-label={work.filterLabel}
          className="mb-10 flex flex-wrap gap-x-8 gap-y-2"
        >
          {options.map((option) => {
            const isActive = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex h-11 items-center gap-1.5 border-b-2 font-semibold transition-colors",
                  isActive
                    ? "border-ink text-ink"
                    : "border-transparent text-ink-muted hover:text-ink"
                )}
              >
                {option === "all" ? work.filterAll : work.categories[option]}
                <span className="text-sm font-medium tabular-nums">({countFor(option)})</span>
              </button>
            );
          })}
        </div>

        <p role="status" className="sr-only">
          {countText}
        </p>

        <WorkIndex projects={visible} />
      </div>
    </main>
  );
}
