"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useLanguage } from "@/i18n/language-context";
import type { Project } from "@/i18n";
import { cn } from "@/lib/utils";

const PREVIEW_SIZES = "(min-width: 1152px) 480px, (min-width: 1024px) 40vw, 100vw";

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * Projects as an index: one ruled row each, and a large preview that follows
 * whichever row is hovered or focused. The whole row is the link; GitHub is a
 * separate real link above it. Below `lg` each row carries its own image.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const { content } = useLanguage();
  const { ui, work } = content;
  const [active, setActive] = useState(0);
  const current = Math.min(active, projects.length - 1);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
      <ol className="border-t border-ink">
        {projects.map((project, index) => {
          const isActive = index === current;
          return (
            <li
              key={project.id}
              onMouseEnter={() => setActive(index)}
              onFocusCapture={() => setActive(index)}
              className={cn(
                "relative border-b border-ink transition-colors duration-200",
                isActive && "lg:bg-ink lg:text-paper"
              )}
            >
              <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] lg:px-5 lg:py-7">
                <span
                  className={cn(
                    "pt-2 text-sm tabular-nums transition-colors",
                    isActive ? "text-ink-muted lg:text-signal" : "text-ink-muted"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="display text-[clamp(1.9rem,3.4vw,2.75rem)] text-balance">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-[var(--focus)]"
                    >
                      {project.title}
                      <span className="sr-only"> ({ui.opensInNewTab})</span>
                    </a>
                  </h3>

                  <p
                    className={cn(
                      "mt-3 max-w-lg text-[0.95rem] text-pretty text-ink-soft transition-colors",
                      isActive && "lg:text-paper/75"
                    )}
                  >
                    {project.description}
                  </p>

                  <p
                    className={cn(
                      "mt-3 text-sm text-ink-muted transition-colors",
                      isActive && "lg:text-paper/60"
                    )}
                  >
                    {work.tags[project.category]} · {project.stack.join(" · ")}
                  </p>

                  <div className="relative mt-5 aspect-[16/10] overflow-hidden border border-ink bg-ink lg:hidden">
                    <Image
                      src={project.preview}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 60vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-6 text-sm font-semibold">
                    <span aria-hidden="true" className="inline-flex min-w-0 items-center gap-1.5">
                      <span className="truncate">{displayUrl(project.url)}</span>
                      <ArrowUpRight className="size-4 shrink-0" />
                    </span>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${ui.codeLabel.replace("{title}", project.title)} (${ui.opensInNewTab})`}
                        className={cn(
                          "relative z-10 inline-flex shrink-0 items-center gap-1.5 underline decoration-2 underline-offset-4 transition-colors hover:text-accent",
                          isActive && "lg:hover:text-signal"
                        )}
                      >
                        <SiGithub className="size-4" />
                        {ui.viewCode}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="hidden lg:block">
        <div className="sticky top-24">
          <div className="relative aspect-[16/10] overflow-hidden border border-ink bg-ink">
            {projects.map((project, index) => (
              <Image
                key={project.id}
                src={project.preview}
                alt=""
                fill
                sizes={PREVIEW_SIZES}
                className={cn(
                  "object-cover object-top transition-opacity duration-300",
                  index === current ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
          </div>
          <p className="mt-3 flex items-center justify-between gap-4 text-sm text-ink-muted">
            <span>{projects[current] ? work.tags[projects[current].category] : null}</span>
            <span className="truncate">{projects[current] ? displayUrl(projects[current].url) : null}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
