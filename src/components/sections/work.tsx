"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ProjectCard } from "@/components/work/project-card";
import { useLanguage } from "@/i18n/language-context";

export function Work() {
  const { content } = useLanguage();
  const { homeWork, work } = content;
  const featured = work.projects.filter((project) => project.featured);

  return (
    <Section id="work">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading title={homeWork.title} description={homeWork.description} />
        <ButtonLink href="/work" className="self-start md:self-auto">
          {homeWork.viewAll} ({work.projects.length})
          <ArrowRight className="size-4" />
        </ButtonLink>
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
