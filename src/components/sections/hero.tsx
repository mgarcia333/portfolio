"use client";

import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { ButtonLink } from "@/components/ui/button";
import { HandNote, ScribbleArrow, Squiggle } from "@/components/ui/doodles";
import { Marked } from "@/components/ui/marked";

export function Hero() {
  const { content } = useLanguage();
  const { profile, hero } = content;

  return (
    <section id="hero" className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24">
        <HandNote className="inline-block -rotate-3 text-4xl sm:text-5xl">{hero.greeting}</HandNote>

        {/* The name is sized in container units so "MOISÉS GARCÍA" always fills one line. */}
        <div className="mt-3 [container-type:inline-size]">
          <h1 className="display text-[min(15.4cqw,11.5rem)] leading-[0.88]">
            <span className="block">{profile.nameLines[0]}</span>
            <span className="relative inline-block">
              {profile.nameLines[1]}
              <Squiggle className="-bottom-2 sm:-bottom-4" />
            </span>
          </h1>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <p className="text-2xl font-bold sm:text-3xl">
            <span className="block sm:inline">{profile.role}</span>
            <span className="hidden text-ink-muted sm:inline"> · </span>
            <span className="block sm:inline">{profile.location}</span>
          </p>
          <span className="inline-flex rotate-2 items-center gap-2 border-2 border-ink bg-highlight px-3 py-1.5 text-sm font-bold text-highlight-ink shadow-hard-sm">
            <span className="size-2.5 rounded-full border border-ink bg-ok" aria-hidden="true" />
            {profile.status}
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-xl leading-snug text-pretty text-ink-soft sm:text-2xl">
          <Marked text={hero.tagline} />
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-6">
          <ButtonLink href="#work" variant="primary">
            {hero.ctaWork}
            <ArrowDown className="size-5" />
          </ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`}>
            <Mail className="size-5" />
            {hero.ctaContact}
          </ButtonLink>
          <span className="hidden -rotate-2 items-center gap-1 sm:flex" aria-hidden="true">
            <ScribbleArrow className="rotate-90" />
            <HandNote className="text-3xl">{hero.scrollNote}</HandNote>
          </span>
        </div>
      </div>
    </section>
  );
}
