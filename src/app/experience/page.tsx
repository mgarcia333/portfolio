import { ExperiencePageContent } from "@/components/experience/experience-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

const page = contentByLocale[DEFAULT_LOCALE].experiencePage;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: "/experience",
});

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
