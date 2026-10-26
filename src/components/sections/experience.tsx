"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ExperienceList } from "@/components/experience/experience-list";
import { useLanguage } from "@/i18n/language-context";

export function Experience() {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <section id="experience" className="border-b-2 border-ink bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={experience.title} />

        <ExperienceList entries={experience.entries} />

        <div className="mt-12">
          <ButtonLink href="/experience">
            {experience.viewMore}
            <ArrowRight className="size-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
