"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { StackList } from "@/components/stack/stack-list";
import { useLanguage } from "@/i18n/language-context";

export function Stack() {
  const { content } = useLanguage();
  const { stack } = content;

  return (
    <Section id="stack">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16">
        <div>
          <SectionHeading title={stack.title} description={stack.description} />
          <ButtonLink href="/stack" className="mt-8">
            {stack.viewMore}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <StackList categories={stack.categories} />
      </div>
    </Section>
  );
}
