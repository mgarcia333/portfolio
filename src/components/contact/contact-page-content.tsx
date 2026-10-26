"use client";

import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { CopyEmail } from "@/components/ui/copy-email";
import { useLanguage } from "@/i18n/language-context";

const bareUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const rowClass = "grid grid-cols-1 gap-1 border-b border-line py-5";
const linkClass =
  "inline-flex min-h-11 max-w-full items-center gap-2 text-xl font-semibold [overflow-wrap:anywhere] underline decoration-2 underline-offset-[6px] transition-colors hover:text-accent";

export function ContactPageContent() {
  const { content } = useLanguage();
  const { contactPage, contactForm, profile } = content;

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

        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* The form is the main action, so it comes first on small screens. */}
          <section aria-labelledby="contact-form-title" className="order-1 lg:order-2">
            <h2 id="contact-form-title" className="display text-[clamp(2rem,3.4vw,2.75rem)]">
              {contactForm.title}
            </h2>
            <p className="mt-4 mb-10 max-w-lg text-lg text-pretty text-ink-soft">
              {contactForm.description}
            </p>
            <ContactForm email={profile.email} />
          </section>

          <dl className="order-2 self-start border-t border-ink lg:order-1">
            <div className={rowClass}>
              <dt className="text-sm text-ink-muted">{contactPage.channels.email}</dt>
              <dd className="min-w-0">
                <a href={`mailto:${profile.email}`} className={linkClass}>
                  {profile.email}
                </a>
                <div className="mt-2">
                  <CopyEmail email={profile.email} size="sm" className="min-w-40" />
                </div>
              </dd>
            </div>
            {channels.map((channel) => (
              <div key={channel.label} className={rowClass}>
                <dt className="text-sm text-ink-muted">{channel.label}</dt>
                <dd className="min-w-0">
                  <a href={channel.href} target="_blank" rel="noreferrer" className={linkClass}>
                    {bareUrl(channel.href)}
                    <ArrowUpRight className="size-5 shrink-0" />
                  </a>
                </dd>
              </div>
            ))}
            <div className={rowClass}>
              <dt className="text-sm text-ink-muted">{contactPage.channels.base}</dt>
              <dd className="text-xl font-semibold">{contactPage.baseValue}</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
