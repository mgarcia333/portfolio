"use client";

import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { useLanguage } from "@/i18n/language-context";

export function Contact() {
  const { content } = useLanguage();
  const { profile, contact } = content;

  return (
    <section id="contact" className="on-band bg-band py-20 text-on-band sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] lg:gap-16">
        <div>
          <h2 className="h2">{contact.title}</h2>
          <p className="mt-4 max-w-sm text-lg text-on-band-soft">{contact.description}</p>
        </div>

        <div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block text-2xl font-semibold tracking-tight break-all underline decoration-signal decoration-2 underline-offset-8 transition-[text-decoration-thickness] hover:decoration-4 sm:text-4xl"
          >
            {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
      </div>
    </section>
  );
}
