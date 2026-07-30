"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/i18n/language-context";

export function Work() {
  const { content } = useLanguage();
  const { homeWork, work } = content;

  return (
    <section id="work" className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker={homeWork.kicker}
          title={homeWork.title}
          description={homeWork.description}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {work.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="/work" variant="outline">
            {homeWork.viewAll}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
