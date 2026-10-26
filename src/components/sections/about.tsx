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
  const [lede, ...rest] = about.bio;

  return (
    <Section id="about" tone="alt">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16">
        <SectionHeading title={about.title} />

        <div className="max-w-2xl">
          <p className="text-2xl leading-snug font-medium text-pretty sm:text-[1.65rem]">
            <Marked text={lede} />
          </p>
          <div className="mt-6 space-y-5 text-lg text-ink-soft">
            {rest.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                <Marked text={paragraph} />
              </p>
            ))}
          </div>
          <ButtonLink href="/about" variant="text" className="mt-6">
            {about.viewMore}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
