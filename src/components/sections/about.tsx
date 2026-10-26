"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Marked } from "@/components/ui/marked";
import { useLanguage } from "@/i18n/language-context";

export function About() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <Section id="about" tone="alt">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16">
        <SectionHeading title={about.title} />

        <div>
          <div className="max-w-2xl space-y-5 text-lg text-fg-soft">
            {about.bio.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                <Marked text={paragraph} />
              </p>
            ))}
          </div>
          <ButtonLink href="/about" className="mt-8">
            {about.viewMore}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
