"use client";

import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltOptions {
  max?: number;
  scale?: number;
  disabled?: boolean;
}

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

export function useTilt<T extends HTMLElement>({ max = 8, scale = 1.015, disabled = false }: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), SPRING);
  const scaleSpring = useSpring(1, SPRING);
  const glowX = useSpring(px, SPRING);
  const glowY = useSpring(py, SPRING);

  function onPointerMove(event: PointerEvent<T>) {
    if (disabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function onPointerEnter() {
    if (disabled) return;
    scaleSpring.set(scale);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
    scaleSpring.set(1);
  }

  return {
    ref,
    rotateX,
    rotateY,
    scale: scaleSpring,
    glowX,
    glowY,
    onPointerMove,
    onPointerEnter,
    onPointerLeave,
  };
}
