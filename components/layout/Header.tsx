"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview",   href: "/overview" },
  { label: "Background", href: "/background" },
  { label: "Location",   href: "/location" },
  { label: "Vision",     href: "/vision" },
  { label: "Masterplan", href: "/masterplan" },
  { label: "Investment", href: "/investment" },
  { label: "Community",  href: "/conclusion" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  /* 홈 최상단 → 투명 / 그 외 → 항상 solid */
  const showBar = !isHome || scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showBar
            /* 서브페이지·스크롤: 차콜 다크 — 네이비 본문과 구분 */
            ? "bg-[#1B2535] shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        {/* 하단 골드 라인 — 항상 표시 */}
        {showBar && (
          <div className="h-[2px] w-full bg-gradient-to-r from-[#C9A96E]/0 via-[#C9A96E] to-[#C9A96E]/0" />
        )}

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* 로고 — 굵고 진하게 */}
          <Link
            href="/"
            className="font-display font-extrabold text-white text-lg tracking-widest uppercase hover:text-[#C9A96E] transition-colors shrink-0"
            style={{ letterSpacing: "0.15em" }}
          >
            The Wonder Castle
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-body font-bold text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap
                  after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-[#C9A96E]
                  after:transition-all after:duration-300
                  ${pathname === item.href
                    ? "text-[#C9A96E] after:w-full"
                    : "text-white/75 hover:text-[#C9A96E] after:w-0 hover:after:w-full"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* 모바일 풀스크린 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1B2535] flex flex-col justify-center px-10 gap-0">
          {/* 로고 라인 */}
          <div className="mb-10 pb-6 border-b border-white/10">
            <span className="font-display font-extrabold text-white text-base tracking-widest uppercase">
              The Wonder Castle
            </span>
          </div>

          {/* 메뉴 항목 — 좌측 정렬 */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-4 py-3 border-b border-white/5 transition-all duration-200 ${
                  pathname === item.href ? "text-[#C9A96E]" : "text-white/80 hover:text-[#C9A96E]"
                }`}
              >
                <span className="font-body text-xs text-white/30 w-5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-bold text-2xl tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-200">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/conclusion"
            className="mt-8 self-start px-8 py-3 bg-[#C9A96E] text-[#0F1C2E] font-body font-bold text-sm tracking-widest uppercase hover:bg-white transition-all"
          >
            투자 문의
          </Link>
        </div>
      )}
    </>
  );
}
