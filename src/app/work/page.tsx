import { WorkPageContent } from "@/components/work/work-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

const page = contentByLocale[DEFAULT_LOCALE].work;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: "/work",
});

export default function WorkPage() {
  return <WorkPageContent />;
}
