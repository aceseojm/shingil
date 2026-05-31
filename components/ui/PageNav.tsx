import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  { label: "Overview", href: "/overview" },
  { label: "Background", href: "/background" },
  { label: "Location", href: "/location" },
  { label: "Vision", href: "/vision" },
  { label: "Masterplan", href: "/masterplan" },
  { label: "Investment", href: "/investment" },
  { label: "Community",  href: "/conclusion" },
];

interface PageNavProps {
  current: string;
}

export default function PageNav({ current }: PageNavProps) {
  const idx = pages.findIndex((p) => p.href === current);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <div className="border-t border-[#0F1C2E]/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {prev ? (
          <Link
            href={prev.href}
            className="flex items-center gap-2 font-body font-bold text-sm text-[#0F1C2E]/50 hover:text-[#0F1C2E] transition-colors group"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="tracking-widest uppercase">{prev.label}</span>
          </Link>
        ) : (
          <div />
        )}
        <Link
          href="/"
          className="font-body font-bold text-xs text-[#C9A96E] tracking-widest uppercase hover:text-[#0F1C2E] transition-colors"
        >
          Home
        </Link>
        {next ? (
          <Link
            href={next.href}
            className="flex items-center gap-2 font-body font-bold text-sm text-[#0F1C2E]/50 hover:text-[#0F1C2E] transition-colors group"
          >
            <span className="tracking-widest uppercase">{next.label}</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
