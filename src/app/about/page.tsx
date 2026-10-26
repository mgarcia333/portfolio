import { AboutPageContent } from "@/components/about/about-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

const page = contentByLocale[DEFAULT_LOCALE].aboutPage;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
