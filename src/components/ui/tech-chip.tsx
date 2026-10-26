import type { StackIcon } from "@/i18n";
import { cn } from "@/lib/utils";

interface TechChipProps {
  icon?: StackIcon;
  label: string;
  className?: string;
}

export function TechChip({ icon: Icon, label, className }: TechChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1 text-sm leading-tight text-fg-soft",
        className
      )}
    >
      {Icon ? <Icon className="size-4 shrink-0 text-fg-muted" /> : null}
      {label}
    </span>
  );
}
