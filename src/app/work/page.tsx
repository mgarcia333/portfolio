import type { Metadata } from "next";
import { WorkPageContent } from "@/components/work/work-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";

const defaultWork = contentByLocale[DEFAULT_LOCALE].work;

export const metadata: Metadata = {
  title: defaultWork.metaTitle,
  description: defaultWork.metaDescription,
};

export default function WorkPage() {
  return <WorkPageContent />;
}
