"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ButtonLink } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { useLanguage } from "@/i18n/language-context";

const bareUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function ContactPageContent() {
  const { content } = useLanguage();
  const { contactPage, contact, profile } = content;

  const channels = [
    { label: contactPage.channels.github, href: profile.github },
    { label: contactPage.channels.linkedin, href: profile.linkedin },
  ];

  return (
    <main id="main" className="pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PageHeader
          backLabel={contactPage.backHome}
          title={contactPage.title}
          description={contactPage.description}
        />

        <a
          href={`mailto:${profile.email}`}
          className="display block text-[clamp(2rem,7vw,5.5rem)] leading-none break-all normal-case! underline decoration-ink decoration-[0.05em] underline-offset-[0.14em] transition-colors hover:text-accent hover:decoration-accent"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`} variant="solid">
            <Mail className="size-4" />
            {contact.emailCta}
          </ButtonLink>
          <CopyEmail email={profile.email} />
        </div>

        <dl className="mt-20 border-t border-ink">
          {channels.map((channel) => (
            <div
              key={channel.label}
              className="grid grid-cols-1 gap-1 border-b border-line py-5 md:grid-cols-[10rem_minmax(0,1fr)] md:items-baseline md:gap-8"
            >
              <dt className="text-sm text-ink-muted">{channel.label}</dt>
              <dd className="min-w-0">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex max-w-full items-center gap-2 text-xl font-semibold break-all underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent"
                >
                  {bareUrl(channel.href)}
                  <ArrowUpRight className="size-5 shrink-0" />
                </a>
              </dd>
            </div>
          ))}
          <div className="grid grid-cols-1 gap-1 border-b border-line py-5 md:grid-cols-[10rem_minmax(0,1fr)] md:items-baseline md:gap-8">
            <dt className="text-sm text-ink-muted">{contactPage.channels.base}</dt>
            <dd className="text-xl font-semibold">{contactPage.baseValue}</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
