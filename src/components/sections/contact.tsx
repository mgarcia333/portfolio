"use client";

import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { LiveClock } from "@/components/ui/live-clock";
import { useLanguage } from "@/i18n/language-context";

export function Contact() {
  const { content } = useLanguage();
  const { profile, contact } = content;

  return (
    <section
      id="contact"
      className="border-b-2 border-ink bg-accent py-20 text-accent-ink sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="[container-type:inline-size]">
          <h2 className="display text-[min(19cqw,13rem)] leading-[0.88]">{contact.title}</h2>
        </div>
        <p className="mt-6 text-xl font-medium sm:text-2xl">{contact.description}</p>

        <a
          href={`mailto:${profile.email}`}
          className="display mt-10 block text-[clamp(1.9rem,6.4vw,5.25rem)] leading-none break-all normal-case! underline decoration-[0.07em] underline-offset-[0.14em] transition-[text-decoration-thickness] hover:decoration-[0.2em]"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href={`mailto:${profile.email}`} variant="ink">
            <Mail className="size-5" />
            {contact.emailCta}
          </ButtonLink>
          <CopyEmail email={profile.email} />
          {content.socials.map((social) => (
            <ButtonLink
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <social.icon className="size-5" />
              {social.label}
            </ButtonLink>
          ))}
        </div>

        <p className="mt-14 font-bold">
          {contact.localTime}{" "}
          <LiveClock timeZone={profile.timeZone} className="border-b-[3px] border-ink tabular-nums" />
        </p>
      </div>
    </section>
  );
}
