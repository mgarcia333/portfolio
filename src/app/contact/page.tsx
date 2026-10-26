import { ContactPageContent } from "@/components/contact/contact-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";
import { pageMetadata } from "@/lib/seo";

const page = contentByLocale[DEFAULT_LOCALE].contactPage;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
