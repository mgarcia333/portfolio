"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "@/i18n/language-context";
import type { Project } from "@/i18n";

// Colours the card text takes on when the cell inverts (hover or keyboard focus).
const SOFT = "group-hover:text-paper/75 group-focus-within:text-paper/75";
const MUTED = "group-hover:text-paper/60 group-focus-within:text-paper/60";

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Projects as a ruled grid (three across), like a contact sheet. The whole cell
 * is the link and inverts to ink on hover/focus; GitHub is a separate real link.
 */
export function ProjectGrid({
  projects,
  headingAs: Heading = "h3",
}: {
  projects: Project[];
  /** Heading level for each title, so the page keeps a clean outline. */
  headingAs?: "h2" | "h3";
}) {
  const { content } = useLanguage();
  const { ui, work } = content;

  return (
    <ul className="grid grid-cols-1 border-t border-l border-ink md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li
          key={project.id}
          className="group relative flex border-r border-b border-ink transition-colors duration-200 hover:bg-ink hover:text-paper focus-within:bg-ink focus-within:text-paper"
        >
          <article className="flex w-full flex-col">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-ink bg-ink">
              <Image
                src={project.preview}
                alt={ui.previewAlt.replace("{title}", project.title)}
                fill
                sizes="(min-width: 1152px) 384px, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className={`text-sm text-ink-muted transition-colors ${MUTED}`}>
                {work.tags[project.category]}
              </p>

              <Heading className="display mt-2 text-[clamp(1.9rem,2.6vw,2.25rem)] text-balance">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-[var(--focus)]"
                >
                  {project.title}
                  <span className="sr-only"> ({ui.opensInNewTab})</span>
                </a>
              </Heading>

              <p className={`mt-3 text-[0.95rem] text-pretty text-ink-soft transition-colors ${SOFT}`}>
                {project.description}
              </p>

              <p className={`mt-3 text-sm text-ink-muted transition-colors ${MUTED}`}>
                {project.stack.join(" · ")}
              </p>

              <div className="mt-auto pt-6">
                <div className="flex items-center justify-between gap-4 border-t border-line pt-5 text-sm font-semibold transition-colors group-hover:border-paper/20 group-focus-within:border-paper/20">
                  <span aria-hidden="true" className="inline-flex min-w-0 items-center gap-1.5">
                    <span className="truncate">{displayUrl(project.url)}</span>
                    <ArrowUpRight className="size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${ui.codeLabel.replace("{title}", project.title)} (${ui.opensInNewTab})`}
                      className="relative z-10 inline-flex shrink-0 items-center gap-1.5 underline decoration-2 underline-offset-4 transition-colors hover:text-accent group-hover:hover:text-signal group-focus-within:hover:text-signal"
                    >
                      <SiGithub className="size-4" />
                      {ui.viewCode}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
