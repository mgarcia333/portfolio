"use client";

import { PageHeader } from "@/components/layout/page-header";
import { AboutNote } from "@/components/about/about-note";
import { Marked } from "@/components/ui/marked";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

const PRINCIPLE_TILT = ["md:-rotate-1", "md:rotate-1", "md:-rotate-[0.5deg]"];

export function AboutPageContent() {
  const { content } = useLanguage();
  const { aboutPage, about, profile } = content;

  return (
    <main id="main" className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader backLabel={aboutPage.backHome} title={aboutPage.title} />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="max-w-xl space-y-5 text-xl text-ink-soft">
            {aboutPage.intro.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                <Marked text={paragraph} />
              </p>
            ))}
          </div>

          <AboutNote
            name={profile.name}
            role={profile.role}
            facts={about.facts}
            status={profile.status}
          />
        </div>

        <div className="mt-28 grid grid-cols-1 gap-8 md:grid-cols-3">
          {aboutPage.principles.map((principle, index) => (
            <div
              key={principle.heading}
              className={cn(
                "border-2 border-ink bg-card p-6 shadow-hard",
                PRINCIPLE_TILT[index % PRINCIPLE_TILT.length]
              )}
            >
              <h2 className="display text-3xl sm:text-4xl">{principle.heading}</h2>
              <p className="mt-4 text-pretty text-ink-soft">{principle.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t-2 border-ink pt-12">
          <h2 className="display text-4xl sm:text-5xl">{aboutPage.education.heading}</h2>
          <p className="mt-5 max-w-2xl text-lg text-pretty text-ink-soft">
            {aboutPage.education.body}
          </p>
        </div>
      </div>
    </main>
  );
}
