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
        "inline-flex items-center gap-1.5 border border-outline-variant bg-surface-container px-2.5 py-1 text-xs text-on-surface-variant",
        className
      )}
    >
      {Icon ? <Icon className="size-3.5 text-primary" /> : null}
      {label}
    </span>
  );
}
