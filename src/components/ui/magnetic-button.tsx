"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
}

export function MagneticButton({
  href = "#",
  children,
  variant = "outline",
  className,
  ...rest
}: MagneticButtonProps) {
  const disabled = useMediaQuery("(pointer: coarse)");
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic<HTMLAnchorElement>(0.3, disabled);

  return (
    <motion.a
      {...rest}
      ref={ref}
      href={href}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200",
        variant === "solid" &&
          "bg-primary text-on-primary shadow-[3px_3px_0_0_var(--on-primary)] hover:bg-primary-dim hover:shadow-[1px_1px_0_0_var(--on-primary)]",
        variant === "outline" &&
          "border border-outline text-on-surface hover:border-primary hover:text-primary",
        variant === "ghost" && "text-on-surface-variant hover:text-primary",
        className
      )}
    >
      {children}
    </motion.a>
  );
}
