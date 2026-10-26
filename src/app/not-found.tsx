import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/not-found-content";
import { contentByLocale, DEFAULT_LOCALE } from "@/i18n";

export const metadata: Metadata = {
  title: contentByLocale[DEFAULT_LOCALE].notFound.metaTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
