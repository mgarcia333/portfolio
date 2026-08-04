import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { TechChip } from "@/components/ui/tech-chip";
import type { Project } from "@/i18n";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const displayUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      className="group block"
    >
      <TiltCard max={3} className="h-full">
        <CornerBrackets />
        <div className="flex items-center gap-2 border-b border-outline-variant px-3 py-2">
          <span className="flex shrink-0 gap-1.5">
            <span className="size-2 rounded-full border border-outline bg-surface-container-high" />
            <span className="size-2 rounded-full border border-outline bg-surface-container-high" />
            <span className="size-2 rounded-full border border-outline bg-surface-container-high" />
          </span>
          <span className="min-w-0 flex-1 truncate border border-outline-variant bg-surface px-2 py-0.5 font-mono text-[10px] text-on-surface-muted">
            {displayUrl}
          </span>
        </div>
        <div className="overflow-hidden border-b border-outline-variant">
          <Image
            src={project.preview}
            alt={`${project.title} preview`}
            width={1280}
            height={800}
            preload={index === 0}
            className="aspect-[16/10] w-full object-cover object-top grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between">
            <p className="text-tag text-xs text-on-surface-muted">{project.tag}</p>
            <ArrowUpRight className="size-4 text-on-surface-muted transition-colors group-hover:text-primary" />
          </div>
          <h2 className="font-display mt-3 text-2xl text-on-surface">{project.title}</h2>
          <p className="mt-3 text-pretty text-sm text-on-surface-variant">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechChip key={tech} label={tech} />
            ))}
          </div>
        </div>
      </TiltCard>
    </a>
  );
}
