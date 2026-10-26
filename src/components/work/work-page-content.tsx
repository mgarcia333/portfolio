"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/i18n/language-context";
import type { ProjectCategory } from "@/i18n/types";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const CATEGORY_ORDER: ProjectCategory[] = ["client", "webapp", "unity", "template"];
const CARD_SIZES = "(min-width: 1152px) 360px, (min-width: 640px) 45vw, 100vw";

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

        <div role="group" aria-label={work.filterLabel} className="flex flex-wrap gap-2">
          {options.map((option) => {
            const isActive = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.97]",
                  isActive
                    ? "border-brand bg-brand text-on-brand"
                    : "border-line-strong text-fg-soft hover:border-brand-text hover:bg-surface-hover hover:text-fg"
                )}
              >
                {option === "all" ? work.filterAll : work.categories[option]}
                <span className="tabular-nums opacity-70">{countFor(option)}</span>
              </button>
            );
          })}
        </div>

        <p role="status" className="sr-only">
          {countText}
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} sizes={CARD_SIZES} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
