"use client";

import { PageHeader } from "@/components/layout/page-header";
import { FactList } from "@/components/about/fact-list";
import { Marked } from "@/components/ui/marked";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

export function AboutPageContent() {
  const { content } = useLanguage();
  const { aboutPage, about } = content;
  const [lede, ...rest] = aboutPage.intro;

  return (
    <main id="main" className="pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader backLabel={aboutPage.backHome} title={aboutPage.title} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,8fr)_minmax(0,5fr)] lg:items-start lg:gap-16">
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
          </div>

          <FactList facts={about.facts} />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-y-10 border-t border-ink md:grid-cols-3">
          {aboutPage.principles.map((principle, index) => (
            <div
              key={principle.heading}
              className={cn(
                "pt-6 md:px-8 md:first:pl-0 md:last:pr-0",
                index > 0 && "md:border-l md:border-line"
              )}
            >
              <h2 className="text-xl font-bold tracking-tight">{principle.heading}</h2>
              <p className="mt-3 text-pretty text-ink-soft">{principle.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-6 border-t border-ink pt-10 md:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] md:gap-16">
          <h2 className="display text-[clamp(2rem,3.6vw,3rem)]">{aboutPage.education.heading}</h2>
          <p className="max-w-2xl text-lg text-pretty text-ink-soft">{aboutPage.education.body}</p>
        </div>
      </div>
    </main>
  );
}
