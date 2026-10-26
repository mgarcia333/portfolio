"use client";

import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";

export function NotFoundContent() {
  const { content } = useLanguage();
  const { notFound } = content;

  return (
    <main id="main" className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p aria-hidden="true" className="display rise text-[clamp(5rem,16vw,12rem)] leading-none text-accent">
          404
        </p>
        <h1 className="display rise mt-6 text-[clamp(2.25rem,5vw,4rem)]" style={{ animationDelay: "80ms" }}>
          {notFound.title}
        </h1>
        <p className="rise mt-5 max-w-md text-lg text-pretty text-ink-soft" style={{ animationDelay: "160ms" }}>
          {notFound.description}
        </p>
        <ButtonLink href="/" variant="solid" className="mt-10">
          <ArrowLeft className="size-4" />
          {notFound.cta}
        </ButtonLink>
      </div>
    </main>
  );
}
