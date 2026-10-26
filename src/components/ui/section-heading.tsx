import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="display text-[clamp(2.25rem,4.6vw,3.75rem)] text-balance">{title}</h2>
      {description ? (
        <p className={cn("mt-5 max-w-md text-lg text-pretty text-ink-soft")}>{description}</p>
      ) : null}
    </div>
  );
}
