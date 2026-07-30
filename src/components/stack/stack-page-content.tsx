"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { CornerBrackets } from "@/components/ui/corner-brackets";
import { TechChip } from "@/components/ui/tech-chip";
import { useLanguage } from "@/i18n/language-context";

export function StackPageContent() {
  const { content } = useLanguage();
  const { stackPage } = content;

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          data-cursor-hover
          className="text-tag mb-10 inline-flex items-center gap-2 text-xs text-on-surface-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-3.5" />
          {stackPage.backHome}
        </Link>

        <div className="text-tag mb-4 flex items-center gap-3 text-xs text-primary">
          <span className="h-px w-8 bg-primary/50" />
          {stackPage.kicker}
        </div>
        <h1 className="font-display text-4xl font-medium tracking-tight text-on-surface sm:text-5xl">
          {stackPage.title}
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-on-surface-variant">{stackPage.description}</p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {stackPage.categories.map((category) => (
            <TiltCard key={category.id} max={4}>
              <CornerBrackets />
              <div className="flex h-full flex-col p-6">
                <p className="text-tag mb-3 text-xs text-primary">{category.label}</p>
                <p className="text-pretty text-sm text-on-surface-variant">{category.description}</p>
                <div className="mt-5 flex flex-1 flex-wrap content-start gap-2">
                  {category.items.map((item) => (
                    <TechChip key={item.name} icon={item.icon} label={item.name} />
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </main>
  );
}
