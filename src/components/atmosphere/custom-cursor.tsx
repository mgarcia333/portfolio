"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = isFinePointer && !reduceMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.4 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    function handleMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      setHovering(Boolean((event.target as HTMLElement).closest?.("a, button, [data-cursor-hover]")));
    }

    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("pointermove", handleMove);
    document.documentElement.addEventListener("pointerleave", handleLeave);

    return () => {
      document.body.style.cursor = previousCursor;
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x, y, translate: "-50% -50%", opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed top-0 left-0 z-[100] size-2.5 transition-opacity duration-300"
      >
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-primary" />
        <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-primary" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY, translate: "-50% -50%", opacity: visible ? 1 : 0 }}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[100] transition-[width,height,opacity] duration-300 ease-out",
          hovering ? "size-11" : "size-5"
        )}
      >
        <span className="absolute top-0 left-0 size-2 border-t border-l border-primary/80" />
        <span className="absolute top-0 right-0 size-2 border-t border-r border-primary/80" />
        <span className="absolute bottom-0 left-0 size-2 border-b border-l border-primary/80" />
        <span className="absolute bottom-0 right-0 size-2 border-b border-r border-primary/80" />
      </motion.div>
    </>
  );
}
