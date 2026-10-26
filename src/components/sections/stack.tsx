"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { StackList } from "@/components/stack/stack-list";
import { useLanguage } from "@/i18n/language-context";

export function Stack() {
  const { content } = useLanguage();
  const { stack } = content;

  return (
    <section id="stack" className="border-b-2 border-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title={stack.title} description={stack.description} />

        <StackList categories={stack.categories} />

        <div className="mt-12">
          <ButtonLink href="/stack">
            {stack.viewMore}
            <ArrowRight className="size-5" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
