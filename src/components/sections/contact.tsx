"use client";

import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LiveClock } from "@/components/ui/live-clock";
import { useLanguage } from "@/i18n/language-context";

export function Contact() {
  const { content } = useLanguage();
  const { profile, contact } = content;

  return (
    <section id="contact" className="scroll-mt-24 border-t border-outline-variant py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          kicker={contact.kicker}
          title={contact.title}
          description={contact.description}
          align="center"
        />

        <a
          href={`mailto:${profile.email}`}
          data-cursor-hover
          className="text-chrome font-display inline-block text-3xl font-medium break-all sm:text-5xl"
        >
          {profile.email}
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`mailto:${profile.email}`} variant="solid">
            <Mail className="size-4" />
            {contact.emailCta}
          </MagneticButton>
          {content.socials.map((social) => (
            <MagneticButton
              key={social.label}
              href={social.href}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              <social.icon className="size-4" />
              {social.label}
            </MagneticButton>
          ))}
        </div>

        <div className="text-tag mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-muted">
          <span>{profile.location}</span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-2">
            {contact.localTime} <LiveClock timeZone={profile.timeZone} className="text-primary" />
          </span>
        </div>
      </div>
    </section>
  );
}
