"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";
import GallerySlider from "@/components/sections/GallerySlider";
import FadeUp from "@/components/ui/FadeUp";

const sections = [
  { label: "01", title: "Project Overview", sub: "프로젝트 개요", href: "/overview", desc: "프로젝트의 정체성과 4대 핵심 전략" },
  { label: "02", title: "Background",       sub: "개발 배경",     href: "/background", desc: "왜 지금, 왜 신길온천인가" },
  { label: "03", title: "Location",         sub: "입지 경쟁력",   href: "/location",   desc: "수도권 초역세권 독보적 입지" },
  { label: "04", title: "Vision",           sub: "비전 & 콘셉트", href: "/vision",     desc: "미래형 웰니스 복합도시 비전" },
  { label: "05", title: "Masterplan",       sub: "마스터플랜",    href: "/masterplan", desc: "4개 클러스터와 공간 배치 전략" },
  { label: "06", title: "Investment",       sub: "투자 구조",     href: "/investment", desc: "수익 모델과 자본 구조 전략" },
  { label: "07", title: "Community",        sub: "커뮤니티 & 문의", href: "/conclusion", desc: "최종 메시지와 투자 문의" },
];

const metrics = [
  { value: "86000",  suffix: "㎡",   label: "부지 규모" },
  { value: "300",    prefix: "연간 ", suffix: "만 명", label: "예상 방문객" },
  { value: "15000",  suffix: "명",   label: "고용 창출" },
  { value: "3500",   suffix: "억+",  label: "지역 가치 상승" },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════
          HERO — 고정 메인 커버 (hero.jpg)
      ════════════════════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* 배경 이미지 — Ken Burns 줌인/아웃 */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: 1.08 }}
          initial={{ scale: 1 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Image
            src="/images/hero.jpg"
            alt="신길온천 Wonder Castle 조감도"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/85 via-[#0F1C2E]/35 to-[#0F1C2E]/20" />

        {/* 텍스트 */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[#4ECDC4] text-xs tracking-[0.45em] uppercase mb-6"
          >
            Singil Spring Development Project
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="font-display font-extrabold text-white leading-none mb-5"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.04em" }}
          >
            The Wonder Castle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-display font-bold text-white text-xl md:text-2xl mb-12 tracking-wide"
          >
            수도권 유일의 미래형 웰니스 복합도시
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/overview"
              className="px-8 py-4 bg-[#C9A96E] text-[#0F1C2E] font-body text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors"
            >
              프로젝트 보기
            </Link>
            <Link
              href="/conclusion"
              className="px-8 py-4 border border-white/40 text-white font-body text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
            >
              투자 문의하기
            </Link>
          </motion.div>
        </div>

        {/* 스크롤 유도 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* ════════════════════════════════
          KEY METRICS
      ════════════════════════════════ */}
      <section className="bg-[#0F1C2E] border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <StatCounter value={m.value} label={m.label} prefix={m.prefix} suffix={m.suffix} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          GALLERY SLIDER (4장 + 위성지도)
      ════════════════════════════════ */}
      <GallerySlider />

      {/* ════════════════════════════════
          SECTION GRID
      ════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-3">
              Navigate the Project
            </p>
            <h2 className="font-display font-bold text-[#0F1C2E] text-3xl md:text-4xl mb-10">
              프로젝트 전체 보기
            </h2>
          </FadeUp>

          {/* 모바일: 수평 스냅 캐러셀 / 데스크톱: 그리드 */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  href={s.href}
                  className="group block bg-white p-6 rounded shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200 h-full border border-transparent hover:border-[#C9A96E]/30"
                >
                  <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-3">{s.label}</p>
                  <h3 className="font-display font-bold text-lg text-[#0F1C2E] mb-1 group-hover:text-[#C9A96E] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-xs text-[#6B7280] mb-3">{s.sub}</p>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
                  <div className="mt-4 text-[#C9A96E] text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기 →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* 모바일 전용 수평 캐러셀 */}
          <div className="sm:hidden -mx-6 px-6">
            <div
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex-shrink-0 w-[72vw] bg-white p-6 rounded shadow-sm border border-transparent active:border-[#C9A96E]/30 snap-start"
                >
                  <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-3">{s.label}</p>
                  <h3 className="font-display font-bold text-lg text-[#0F1C2E] mb-1">{s.title}</h3>
                  <p className="font-body text-xs text-[#6B7280] mb-3">{s.sub}</p>
                  <p className="font-body text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
                  <div className="mt-4 text-[#C9A96E] text-sm font-body">자세히 보기 →</div>
                </Link>
              ))}
            </div>
            {/* 스와이프 힌트 점 */}
            <div className="flex justify-center gap-1.5 mt-2">
              {sections.map((s) => (
                <span key={s.href} className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]/30" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          TAGLINE
      ════════════════════════════════ */}
      <section className="bg-[#0F1C2E] py-24 px-6 text-center">
        <FadeUp className="max-w-4xl mx-auto">
          <p
            className="font-display font-bold text-white leading-relaxed mb-8"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            "40년간 잠든 온천 자원 + 초역세권 입지 =
            <br />
            <span
              className="font-extrabold"
              style={{
                color: "#C9A96E",
                textShadow: "0 0 18px rgba(201,169,110,0.8), 0 0 40px rgba(201,169,110,0.5), 0 0 70px rgba(201,169,110,0.25)",
              }}
            >수도권 유일의 미래형 웰니스 랜드마크</span>"
          </p>
          <Link
            href="/overview"
            className="inline-block px-10 py-4 border border-[#C9A96E] text-[#C9A96E] font-body text-sm font-bold tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-all duration-200"
          >
            프로젝트 살펴보기
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
