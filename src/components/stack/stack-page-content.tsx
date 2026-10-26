"use client";

import { PageHeader } from "@/components/layout/page-header";
import { StackList } from "@/components/stack/stack-list";
import { useLanguage } from "@/i18n/language-context";

export function StackPageContent() {
  const { content } = useLanguage();
  const { stackPage } = content;

  return (
    <main id="main" className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          backLabel={stackPage.backHome}
          title={stackPage.title}
          description={stackPage.description}
        />
        <StackList categories={stackPage.categories} />
      </div>
    </main>
  );
}
