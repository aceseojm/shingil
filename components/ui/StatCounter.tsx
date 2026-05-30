"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function StatCounter({ value, label, prefix = "", suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numericValue)) {
      setDisplayed(value);
      return;
    }
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue * 10) / 10;
      setDisplayed(
        current % 1 === 0
          ? current.toLocaleString("ko-KR")
          : current.toLocaleString("ko-KR", { minimumFractionDigits: 1 })
      );
      if (step >= steps) {
        clearInterval(timer);
        setDisplayed(
          numericValue % 1 === 0
            ? numericValue.toLocaleString("ko-KR")
            : numericValue.toLocaleString("ko-KR", { minimumFractionDigits: 1 })
        );
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl text-[#C9A96E] font-light">
        {prefix}{displayed}{suffix}
      </div>
      <div className="font-body text-sm text-[#6B7280] mt-2 tracking-wide">{label}</div>
    </div>
  );
}
