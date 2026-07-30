import type { Metadata } from "next";
import { ExperiencePageContent } from "@/components/experience/experience-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";

const defaultExperience = contentByLocale[DEFAULT_LOCALE].experiencePage;

export const metadata: Metadata = {
  title: defaultExperience.metaTitle,
  description: defaultExperience.metaDescription,
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
