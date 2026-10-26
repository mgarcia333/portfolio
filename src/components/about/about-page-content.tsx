"use client";

import { PageHeader } from "@/components/layout/page-header";
import { ProfileCard } from "@/components/about/profile-card";
import { Marked } from "@/components/ui/marked";
import { useLanguage } from "@/i18n/language-context";

export function AboutPageContent() {
  const { content } = useLanguage();
  const { aboutPage, about } = content;

  return (
    <main id="main" className="pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader backLabel={aboutPage.backHome} title={aboutPage.title} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,5fr)] lg:items-start lg:gap-16">
          <div className="max-w-2xl space-y-5 text-lg text-fg-soft">
            {aboutPage.intro.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                <Marked text={paragraph} />
              </p>
            ))}
          </div>

          <ProfileCard facts={about.facts} />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutPage.principles.map((principle) => (
            <div
              key={principle.heading}
              className="rounded-xl border border-line border-t-[3px] border-t-brand bg-surface p-6"
            >
              <h2 className="h3">{principle.heading}</h2>
              <p className="mt-3 text-pretty text-fg-soft">{principle.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <h2 className="h2">{aboutPage.education.heading}</h2>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-fg-soft">
            {aboutPage.education.body}
          </p>
        </div>
      </div>
    </main>
  );
}
