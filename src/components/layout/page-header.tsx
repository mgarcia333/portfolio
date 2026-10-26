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
      <Link href="/" className="link mb-10 inline-flex min-h-10 items-center gap-2 font-bold">
        <ArrowLeft className="size-4" />
        {backLabel}
      </Link>
      <h1 className="display text-[clamp(3.4rem,11vw,9rem)] text-balance">{title}</h1>
      {description ? (
        <p className="mt-6 max-w-xl text-lg text-pretty text-ink-soft sm:text-xl">{description}</p>
      ) : null}
    </header>
  );
}
