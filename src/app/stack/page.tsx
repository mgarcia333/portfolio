import { StackPageContent } from "@/components/stack/stack-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

const page = contentByLocale[DEFAULT_LOCALE].stackPage;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: "/stack",
});

export default function StackPage() {
  return <StackPageContent />;
}
