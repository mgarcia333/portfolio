import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({ title, description, as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Tag className={cn(Tag === "h1" ? "h1" : "h2", "text-balance")}>{title}</Tag>
      {description ? (
        <p className="mt-4 max-w-xl text-lg text-pretty text-fg-soft">{description}</p>
      ) : null}
    </div>
  );
}
