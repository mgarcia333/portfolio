"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { TechChip } from "@/components/ui/tech-chip";
import { useLanguage } from "@/i18n/language-context";
import type { Project } from "@/i18n";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** Responsive `sizes` hint for the preview, tuned to the grid it sits in. */
  sizes?: string;
}

/**
 * The whole card is one big click target (the title link is stretched over it);
 * the GitHub link sits above it as its own real link.
 */
export function ProjectCard({
  project,
  sizes = "(min-width: 1152px) 540px, (min-width: 768px) 45vw, 100vw",
}: ProjectCardProps) {
  const { content } = useLanguage();
  const { ui, work } = content;
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <article className="group relative flex h-full flex-col border-2 border-ink bg-card shadow-hard transition-[transform,box-shadow] duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_0_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none">
      <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-ink bg-ink">
        <Image
          src={project.preview}
          alt=""
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          className={cn(
            "absolute top-3 left-3 -rotate-2 border-2 border-ink px-2.5 py-1 text-sm leading-none font-bold shadow-hard-sm",
            project.category === "client"
              ? "bg-accent text-accent-ink"
              : "bg-highlight text-highlight-ink"
          )}
        >
          {work.tags[project.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <h3 className="display text-4xl">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-[3px] focus-visible:after:outline-offset-4 focus-visible:after:outline-ink"
          >
            {project.title}
            <span className="sr-only"> ({ui.opensInNewTab})</span>
          </a>
        </h3>

        <p className="text-pretty text-ink-soft">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TechChip label={tech} className="bg-paper text-xs" />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t-2 border-ink pt-4">
          <span className="flex min-w-0 items-center gap-1.5 font-bold" aria-hidden="true" title={displayUrl}>
            <span className="truncate">{displayUrl}</span>
            <ArrowUpRight className="size-5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ui.codeLabel.replace("{title}", project.title)} (${ui.opensInNewTab})`}
              className="relative z-10 inline-flex min-h-10 shrink-0 items-center gap-2 border-2 border-ink bg-card px-3 text-sm font-bold transition-colors hover:bg-highlight hover:text-highlight-ink active:translate-y-px"
            >
              <SiGithub className="size-4" />
              {ui.viewCode}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
