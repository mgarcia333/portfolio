"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/i18n/language-context";

export function Work() {
  const { content } = useLanguage();
  const { homeWork, work } = content;
  const featured = work.projects.filter((project) => project.featured);

  return (
    <section id="work" className="border-b-2 border-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title={homeWork.title}
          note={homeWork.note}
          description={homeWork.description}
          squiggle
        />

        {/* On wide screens the right column sits a bit lower, so it doesn't read as a spreadsheet. */}
        <ul className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-20 md:pb-12">
          {featured.map((project) => (
            <li key={project.id} className="md:even:translate-y-12">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/work" variant="ink">
            {homeWork.viewAll} ({work.projects.length})
            <ArrowRight className="size-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
