"use client";

import { useEffect, useState } from "react";

interface LiveClockProps {
  timeZone: string;
  className?: string;
}

export function LiveClock({ timeZone, className }: LiveClockProps) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    function tick() {
      setTime(formatter.format(new Date()));
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  if (!time) return null;

  return <span className={className}>{time}</span>;
}
