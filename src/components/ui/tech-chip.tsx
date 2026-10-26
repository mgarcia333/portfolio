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
        "inline-flex items-center gap-2 border-[1.5px] border-ink bg-card px-2.5 py-1 text-sm leading-tight font-semibold",
        className
      )}
    >
      {Icon ? <Icon className="size-4 shrink-0" /> : null}
      {label}
    </span>
  );
}
