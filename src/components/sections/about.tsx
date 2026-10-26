"use client";

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AboutNote } from "@/components/about/about-note";
import { ButtonLink } from "@/components/ui/button";
import { Marked } from "@/components/ui/marked";
import { useLanguage } from "@/i18n/language-context";

export function About() {
  const { content } = useLanguage();
  const { about, profile } = content;

  return (
    <section id="about" className="border-b-2 border-ink bg-paper-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading title={about.title} />
            <div className="max-w-xl space-y-5 text-xl text-ink-soft">
              {about.bio.map((paragraph) => (
                <p key={paragraph} className="text-pretty">
                  <Marked text={paragraph} />
                </p>
              ))}
            </div>

            <div className="mt-10">
              <ButtonLink href="/about">
                {about.viewMore}
                <ArrowRight className="size-5" />
              </ButtonLink>
            </div>
          </div>

          <AboutNote
            name={profile.name}
            role={profile.role}
            facts={about.facts}
            status={profile.status}
          />
        </div>
      </div>
    </section>
  );
}
