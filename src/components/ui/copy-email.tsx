"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";

type CopyState = "idle" | "copied" | "failed";

/** Fallback for browsers/contexts without the async clipboard API. */
function legacyCopy(text: string) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  try {
    return document.execCommand("copy");
  } finally {
    document.body.removeChild(field);
  }
}

export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const { content } = useLanguage();
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      ok = legacyCopy(email);
    }
    setState(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }

  const label =
    state === "copied"
      ? content.ui.emailCopied
      : state === "failed"
        ? content.ui.copyFailed
        : content.ui.copyEmail;

  return (
    <>
      <Button onClick={copy} className={className ?? "min-w-44"}>
        {state === "copied" ? <Check className="size-4" /> : <Copy className="size-4" />}
        {label}
      </Button>
      <span role="status" className="sr-only">
        {state === "idle" ? "" : label}
      </span>
    </>
  );
}
