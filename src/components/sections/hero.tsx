"use client";

import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { FactList } from "@/components/about/fact-list";
import { ButtonLink } from "@/components/ui/button";
import { Marked } from "@/components/ui/marked";

/** The headline is the positioning statement; the name stays small, as a byline. */
export function Hero() {
  const { content } = useLanguage();
  const { profile, hero, about } = content;

  return (
    <section id="hero">
      <div className="mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-24">
        <p className="rise text-sm font-medium text-ink-soft">
          <span className="font-bold text-ink">{profile.name}</span> — {profile.role},{" "}
          <span className="whitespace-nowrap">{profile.location}</span>
        </p>

        <h1
          className="display rise mt-8 text-[clamp(2.75rem,8.4vw,7.25rem)] text-balance"
          style={{ animationDelay: "80ms" }}
        >
          {hero.statement.split("\n").map((line) => (
            <span key={line} className="block">
              <Marked text={line} tone="accent" />
            </span>
          ))}
        </h1>

        <div className="mt-14 grid gap-12 border-t border-ink pt-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="rise" style={{ animationDelay: "240ms" }}>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-ink-soft sm:text-xl">
              {hero.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="#work" variant="solid">
                {hero.ctaWork}
                <ArrowDown className="size-4" />
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="text">
                <Mail className="size-4" />
                {hero.ctaContact}
              </ButtonLink>
            </div>
          </div>

          <div className="rise hidden lg:block" style={{ animationDelay: "320ms" }}>
            <FactList facts={about.facts} className="border-t-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
