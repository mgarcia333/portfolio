"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { DossierBento } from "@/components/about/dossier-bento";
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

          <DossierBento
            className="self-start"
            name={profile.name}
            role={profile.role}
            initials={profile.initials}
            fields={dossier.fields}
            signalActive={dossier.signalActive}
          />
        </div>
      </div>
    </section>
  );
}
