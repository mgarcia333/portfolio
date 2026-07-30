import type { Metadata } from "next";
import { StackPageContent } from "@/components/stack/stack-page-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";

const defaultStack = contentByLocale[DEFAULT_LOCALE].stackPage;

export const metadata: Metadata = {
  title: defaultStack.metaTitle,
  description: defaultStack.metaDescription,
};

export default function StackPage() {
  return <StackPageContent />;
}
