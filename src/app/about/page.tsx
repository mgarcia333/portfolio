import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";

const defaultAbout = contentByLocale[DEFAULT_LOCALE].aboutPage;

export const metadata: Metadata = {
  title: defaultAbout.metaTitle,
  description: defaultAbout.metaDescription,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
