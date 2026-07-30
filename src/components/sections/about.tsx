"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLanguage } from "@/i18n/language-context";

export function About() {
  const { content } = useLanguage();
  const { dossier, profile } = content;

  return (
    <section id="about" className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <SectionHeading kicker={dossier.kicker} title={dossier.title} />
            <div className="space-y-5 text-lg text-on-surface-variant">
              {dossier.bio.map((paragraph) => (
                <p key={paragraph} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <MagneticButton href="/about" variant="outline">
                {dossier.viewMore}
              </MagneticButton>
            </div>
          </div>

          <TiltCard className="self-start" max={4}>
            <CornerBrackets />
            <div className="flex items-center gap-4 border-b border-outline-variant p-6">
              <div className="text-tag flex size-12 shrink-0 items-center justify-center border border-outline text-sm text-primary">
                {profile.initials}
              </div>
              <div>
                <p className="font-display text-on-surface">{profile.name}</p>
                <p className="text-tag text-xs text-on-surface-muted">{profile.role}</p>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-5 p-6">
              {dossier.fields.map((field) => (
                <div key={field.label}>
                  <dt className="text-tag text-[10px] text-on-surface-muted">{field.label}</dt>
                  <dd className="mt-1 text-sm text-on-surface">{field.value}</dd>
                </div>
              ))}
            </dl>

            <div className="text-tag flex items-center gap-2 border-t border-outline-variant px-6 py-4 text-[11px] text-primary">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              {dossier.signalActive}
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
