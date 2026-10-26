import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  backLabel: string;
  title: string;
  description?: string;
}

export function PageHeader({ backLabel, title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 sm:mb-14">
      <Link
        href="/"
        className="mb-8 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        {backLabel}
      </Link>
      <h1 className="h1 text-balance">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-xl text-lg text-pretty text-fg-soft">{description}</p>
      ) : null}
    </header>
  );
}
