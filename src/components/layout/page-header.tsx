import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  backLabel: string;
  title: string;
  description?: string;
}

export function PageHeader({ backLabel, title, description }: PageHeaderProps) {
  return (
    <header className="mb-14 sm:mb-16">
      <Link
        href="/"
        className="mb-10 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-4" />
        {backLabel}
      </Link>
      <h1 className="display rise text-[clamp(2.75rem,6vw,5rem)] text-balance">{title}</h1>
      {description ? (
        <p className="rise mt-6 max-w-xl text-lg text-pretty text-ink-soft sm:text-xl" style={{ animationDelay: "120ms" }}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
