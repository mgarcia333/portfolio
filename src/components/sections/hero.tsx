"use client";

import { ArrowDown, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { ProfileCard } from "@/components/about/profile-card";
import { ButtonLink } from "@/components/ui/button";
import { Marked } from "@/components/ui/marked";

export function Hero() {
  const { content } = useLanguage();
  const { profile, hero, about } = content;

  return (
    <section id="hero" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
        <div>
          <h1 className="h1">{profile.name}</h1>
          <p className="mt-3 text-xl font-medium text-brand-text sm:text-2xl">
            {profile.role}
            <span className="text-fg-muted"> · </span>
            {profile.location}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-fg-soft sm:text-xl">
            <Marked text={hero.tagline} />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work" variant="primary">
              {hero.ctaWork}
              <ArrowDown className="size-4" />
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`}>
              <Mail className="size-4" />
              {hero.ctaContact}
            </ButtonLink>
          </div>
        </div>

        <div className="hidden lg:block">
          <ProfileCard facts={about.facts} />
        </div>
      </div>
    </section>
  );
}
