"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { DossierBento } from "@/components/about/dossier-bento";
import { useLanguage } from "@/i18n/language-context";

export function AboutPageContent() {
  const { content } = useLanguage();
  const { aboutPage, profile } = content;

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          data-cursor-hover
          className="text-tag mb-10 inline-flex items-center gap-2 text-xs text-on-surface-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" />
          {aboutPage.backHome}
        </Link>

        <div className="text-tag mb-4 flex items-center gap-3 text-xs text-primary">
          <span className="h-px w-8 bg-primary/50" />
          {aboutPage.kicker}
        </div>
        <h1 className="font-display text-4xl font-medium tracking-tight text-on-surface sm:text-5xl">
          {aboutPage.title}
        </h1>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="space-y-5 text-lg text-on-surface-variant">
            {aboutPage.intro.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <DossierBento
            className="self-start"
            name={profile.name}
            role={profile.role}
            initials={profile.initials}
            fields={aboutPage.fields}
          />
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutPage.principles.map((principle) => (
            <TiltCard key={principle.heading} max={4}>
              <CornerBrackets />
              <div className="flex h-full flex-col p-6">
                <h2 className="font-display text-xl text-on-surface">{principle.heading}</h2>
                <p className="mt-3 text-pretty text-sm text-on-surface-variant">{principle.body}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-16 border-t border-outline-variant pt-12">
          <h2 className="font-display text-2xl text-on-surface">{aboutPage.education.heading}</h2>
          <p className="mt-4 max-w-2xl text-pretty text-on-surface-variant">
            {aboutPage.education.body}
          </p>
        </div>
      </div>
    </main>
  );
}
