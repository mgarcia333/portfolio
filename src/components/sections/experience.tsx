"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ExperienceList } from "@/components/experience/experience-list";
import { useLanguage } from "@/i18n/language-context";

export function Experience() {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <Section id="experience" tone="alt">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16">
        <div>
          <SectionHeading title={experience.title} />
          <ButtonLink href="/experience" className="mt-8">
            {experience.viewMore}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <ExperienceList entries={experience.entries} />
      </div>
    </Section>
  );
}
