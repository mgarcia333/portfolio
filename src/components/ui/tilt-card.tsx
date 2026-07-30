"use client";

import type { ReactNode } from "react";
import { motion, useTransform } from "framer-motion";
import { useTilt } from "@/hooks/use-tilt";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  max?: number;
}

export function TiltCard({ children, className, glow = true, max = 6 }: TiltCardProps) {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const disabled = reduceMotion || coarsePointer;

  const { ref, rotateX, rotateY, scale, glowX, glowY, onPointerMove, onPointerEnter, onPointerLeave } =
    useTilt<HTMLDivElement>({ disabled, max });

  const glowXPercent = useTransform(glowX, (v) => `${v * 100}%`);
  const glowYPercent = useTransform(glowY, (v) => `${v * 100}%`);

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, scale, perspective: 800 }}
      className={cn(
        "group relative overflow-hidden border border-outline-variant bg-surface-container-low transition-colors duration-300 hover:border-primary/50",
        className
      )}
    >
      {glow ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 size-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ left: glowXPercent, top: glowYPercent, translate: "-50% -50%" }}
        >
          <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-primary/70" />
          <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-primary/70" />
        </motion.div>
      ) : null}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
