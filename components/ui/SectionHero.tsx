"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SectionHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  bgImage?: string;   // 배경 이미지 경로 (선택)
}

export default function SectionHero({ label, title, subtitle, bgImage }: SectionHeroProps) {
  return (
    <div className={`relative pt-[80px] pb-8 px-6 overflow-hidden ${bgImage ? "" : "bg-[#0F1C2E]"}`}>

      {/* 배경 이미지 (bgImage prop이 있을 때만) */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* 밝고 연한 그라디언트 오버레이 — 텍스트 가독성 확보 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/35 via-[#0F1C2E]/20 to-[#0F1C2E]/45" />
        </>
      )}

      {/* 컨텐츠 */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 라벨 */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-body text-xs tracking-[0.35em] uppercase text-[#4ECDC4] mb-3"
        >
          {label}
        </motion.p>

        {/* 골드 액센트 바 */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{ originX: 0 }}
          className="h-0.5 bg-gradient-to-r from-[#C9A96E] to-transparent mb-4 max-w-16"
        />

        {/* 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-white leading-tight mb-3"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
            letterSpacing: "-0.03em",
            textShadow: bgImage
              ? "0 2px 32px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)"
              : "0 2px 24px rgba(201,169,110,0.15)",
          }}
        >
          {title}
        </motion.h1>

        {/* 서브타이틀 */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="font-body text-white/70 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
