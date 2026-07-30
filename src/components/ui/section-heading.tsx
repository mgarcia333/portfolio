import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <div
        className={cn(
          "text-tag mb-4 flex items-center gap-3 text-xs text-primary",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-primary/50" />
        {kicker}
      </div>
      <h2 className="font-display text-4xl font-medium tracking-tight text-balance text-on-surface sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-pretty text-on-surface-variant",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
