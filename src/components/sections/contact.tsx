"use client";

import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { useLanguage } from "@/i18n/language-context";

export function Contact() {
  const { content } = useLanguage();
  const { profile, contact } = content;

  return (
    <section id="contact" className="on-band border-t border-ink bg-band py-24 text-on-band sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="display text-[clamp(2.25rem,4.6vw,3.75rem)]">{contact.title}</h2>
          <p className="max-w-sm text-lg text-on-band-soft">{contact.description}</p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="display mt-14 block text-[clamp(2rem,8vw,5.5rem)] leading-none break-all normal-case! underline decoration-signal decoration-[0.06em] underline-offset-[0.14em] transition-[text-decoration-thickness] hover:decoration-[0.14em]"
        >
          {profile.email}
        </a>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`} variant="signal">
            <Mail className="size-4" />
            {contact.emailCta}
          </ButtonLink>
          <CopyEmail email={profile.email} variant="onband" />
          {content.socials.map((social) => (
            <ButtonLink
              key={social.label}
              href={social.href}
              variant="onband"
              target="_blank"
              rel="noreferrer"
            >
              <social.icon className="size-4" />
              {social.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
