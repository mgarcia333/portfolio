"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { TechChip } from "@/components/ui/tech-chip";
import { useLanguage } from "@/i18n/language-context";
import type { Project } from "@/i18n";

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
  sizes = "(min-width: 1152px) 360px, (min-width: 768px) 45vw, 100vw",
}: ProjectCardProps) {
  const { content } = useLanguage();
  const { ui, work } = content;
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-brand-text/60 hover:shadow-lift active:translate-y-0">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-canvas-alt">
        <Image
          src={project.preview}
          alt=""
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm font-medium text-brand-text">{work.tags[project.category]}</p>

        <h3 className="h3">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-none after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[var(--focus)]"
          >
            {project.title}
            <span className="sr-only"> ({ui.opensInNewTab})</span>
          </a>
        </h3>

        <p className="text-[0.95rem] text-pretty text-fg-soft">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TechChip label={tech} className="bg-canvas-alt text-xs" />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span
            className="flex min-w-0 items-center gap-1.5 text-sm text-fg-muted transition-colors group-hover:text-fg"
            aria-hidden="true"
            title={displayUrl}
          >
            <span className="truncate">{displayUrl}</span>
            <ArrowUpRight className="size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ui.codeLabel.replace("{title}", project.title)} (${ui.opensInNewTab})`}
              className="relative z-10 inline-flex h-9 shrink-0 items-center gap-2 rounded-full border border-line-strong px-3.5 text-sm font-medium transition-colors hover:border-brand-text hover:bg-surface-hover"
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
