"use client";

import { PageHeader } from "@/components/layout/page-header";
import { ExperienceList } from "@/components/experience/experience-list";
import { useLanguage } from "@/i18n/language-context";

export function ExperiencePageContent() {
  const { content } = useLanguage();
  const { experiencePage } = content;

  return (
    <main id="main" className="pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          backLabel={experiencePage.backHome}
          title={experiencePage.title}
          description={experiencePage.description}
        />
        <ExperienceList entries={experiencePage.entries} headingAs="h2" />
      </div>
    </main>
  );
}
