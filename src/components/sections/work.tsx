"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { WorkIndex } from "@/components/work/work-index";
import { useLanguage } from "@/i18n/language-context";

export function Work() {
  const { content } = useLanguage();
  const { homeWork, work } = content;
  const featured = work.projects.filter((project) => project.featured);

  return (
    <Section id="work">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading title={homeWork.title} description={homeWork.description} />
        <ButtonLink href="/work" variant="text" className="self-start md:self-auto">
          {homeWork.viewAll} ({work.projects.length})
          <ArrowRight className="size-4" />
        </ButtonLink>
      </div>

      <WorkIndex projects={featured} />
    </Section>
  );
}
