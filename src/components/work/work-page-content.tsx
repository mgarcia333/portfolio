"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/i18n/language-context";

export function WorkPageContent() {
  const { content } = useLanguage();
  const { work } = content;

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          data-cursor-hover
          className="text-tag mb-10 inline-flex items-center gap-2 text-xs text-on-surface-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" />
          {work.backHome}
        </Link>

        <div className="text-tag mb-4 flex items-center gap-3 text-xs text-primary">
          <span className="h-px w-8 bg-primary/50" />
          {work.selectedWork}
        </div>
        <h1 className="font-display text-4xl font-medium tracking-tight text-on-surface sm:text-5xl">
          {work.title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-on-surface-variant">{work.description}</p>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {work.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
