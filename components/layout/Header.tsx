"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Overview",
    href: "/overview",
    desc: "프로젝트 개요",
    points: [
      { label: "프로젝트 정보", anchor: "info" },
      { label: "4대 핵심 전략", anchor: "strategy" },
    ],
  },
  {
    label: "Background",
    href: "/background",
    desc: "개발 배경",
    points: [
      { label: "왜 지금인가", anchor: "why-now" },
      { label: "40년 개발 연혁", anchor: "history" },
    ],
  },
  {
    label: "Location",
    href: "/location",
    desc: "입지 경쟁력",
    points: [
      { label: "신길온천역 직결", anchor: "map" },
      { label: "수도권 초역세권", anchor: "stats" },
      { label: "경쟁 입지 비교", anchor: "comparison" },
    ],
  },
  {
    label: "Vision",
    href: "/vision",
    desc: "비전 & 콘셉트",
    points: [
      { label: "4대 도시 모델", anchor: "urban-model" },
      { label: "K-Wellness 브랜딩", anchor: "kwellness" },
    ],
  },
  {
    label: "Masterplan",
    href: "/masterplan",
    desc: "마스터플랜",
    points: [
      { label: "Zone A·B·C·D 구성", anchor: "zones" },
      { label: "연도별 개발 로드맵", anchor: "roadmap" },
    ],
  },
  {
    label: "Investment",
    href: "/investment",
    desc: "투자 구조",
    points: [
      { label: "투자 하이라이트", anchor: "highlights" },
      { label: "수익 모델", anchor: "revenue" },
      { label: "리스크 관리", anchor: "risk" },
    ],
  },
  {
    label: "Community",
    href: "/conclusion",
    desc: "커뮤니티 & 문의",
    points: [
      { label: "프로젝트 참여", anchor: "participation" },
      { label: "투자 문의", anchor: "contact" },
    ],
  },
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

  const showBar = !isHome || scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showBar
            ? "bg-[#0F1C2E] shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        {showBar && (
          <div className="h-[2px] w-full bg-gradient-to-r from-[#C9A96E]/0 via-[#C9A96E] to-[#C9A96E]/0" />
        )}

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

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
              <div key={item.href} className="relative group">
                {/* 링크 */}
                <Link
                  href={item.href}
                  className={`relative font-body font-extrabold text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap block py-1
                    after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-[#C9A96E]
                    after:transition-all after:duration-300
                    ${pathname === item.href
                      ? "text-[#C9A96E] after:w-full"
                      : "text-white hover:text-[#C9A96E] after:w-0 hover:after:w-full"
                    }`}
                >
                  {item.label}
                </Link>

                {/* 호버 드롭다운 */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  {/* 화살표 */}
                  <div className="w-2.5 h-2.5 bg-[#0F1C2E] border-l border-t border-[#C9A96E]/30 rotate-45 mx-auto -mb-1.5 relative z-10" />
                  {/* 카드 */}
                  <div className="bg-[#0F1C2E] border border-[#C9A96E]/25 rounded-lg px-3 py-2.5 w-36 shadow-xl">
                    <p className="font-body text-[#C9A96E] text-[11px] tracking-widest uppercase mb-2">
                      {item.desc}
                    </p>
                    <ul className="space-y-1.5">
                      {item.points.map((pt) => (
                        <li key={pt.label}>
                          <Link
                            href={`${item.href}#${pt.anchor}`}
                            className="flex items-start gap-1.5 group/pt hover:text-[#C9A96E] transition-colors"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A96E]/50 flex-shrink-0 group-hover/pt:bg-[#C9A96E] transition-colors" />
                            <span className="font-body text-white/70 text-[13px] leading-snug group-hover/pt:text-[#C9A96E] transition-colors">{pt.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
        <div className="fixed inset-0 z-40 bg-[#0F1C2E] flex flex-col justify-center px-10 gap-0">
          <div className="mb-10 pb-6 border-b border-white/10">
            <span className="font-display font-extrabold text-white text-base tracking-widest uppercase">
              The Wonder Castle
            </span>
          </div>

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
                <div>
                  <span className="font-display font-bold text-2xl tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-200 block">
                    {item.label}
                  </span>
                  <span className="font-body text-xs text-white/30 tracking-wide">{item.desc}</span>
                </div>
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
