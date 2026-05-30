"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/conclusion") return null;

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <Link
        href="/conclusion"
        className="group flex items-center gap-2 px-5 py-3 bg-[#C9A96E] text-[#0F1C2E] font-body font-bold text-xs tracking-widest uppercase shadow-lg hover:bg-white transition-all duration-200 rounded-full"
      >
        <MessageCircle size={15} className="shrink-0" />
        <span className="hidden sm:inline">투자 문의</span>
        <span className="sm:hidden">문의</span>
      </Link>
    </div>
  );
}
