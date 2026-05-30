"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/images/3.jpg",
    alt: "신길온천 Wonder Castle 전경",
    caption: "수도권 유일의 미래형 웰니스 복합도시",
  },
  {
    src: "/images/1.jpg",
    alt: "신길온천 Wonder Castle 메인뷰",
    caption: "온천·스파·주거·상업의 완전한 통합",
  },
  {
    src: "/images/2.jpg",
    alt: "신길온천 Wonder Castle Zone 구성",
    caption: "4개 Zone으로 구성된 복합 도시 클러스터",
  },
  {
    src: "/images/4.jpg",
    alt: "신길온천 Wonder Castle 야경",
    caption: "40년간 잠든 온천 자원의 재탄생",
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#0F1C2E]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority={current === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/80 via-[#0F1C2E]/30 to-[#0F1C2E]/40" />
        </motion.div>
      </AnimatePresence>

      {/* Center text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-[#4ECDC4] text-xs tracking-[0.4em] uppercase mb-5"
        >
          Singil Spring Development Project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-light text-white leading-none mb-4"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.03em" }}
        >
          The Wonder Castle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-white/60 text-lg md:text-xl mb-3"
        >
          신길온천 스프링 개발 프로젝트
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-[#C9A96E] text-base md:text-lg mb-10"
          >
            {slides[current].caption}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/overview"
            className="px-8 py-4 bg-[#C9A96E] text-[#0F1C2E] font-body text-sm font-semibold tracking-widest uppercase hover:bg-white transition-colors"
          >
            프로젝트 보기 →
          </Link>
          <Link
            href="/conclusion"
            className="px-8 py-4 border border-white/40 text-white font-body text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
          >
            투자 문의하기
          </Link>
        </motion.div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all bg-black/20 backdrop-blur-sm"
        aria-label="이전"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all bg-black/20 backdrop-blur-sm"
        aria-label="다음"
      >
        <ChevronRight size={20} />
      </button>

      {/* Thumbnail strip — bottom */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-4">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative overflow-hidden rounded transition-all duration-300 ${
              i === current
                ? "w-20 h-12 ring-2 ring-[#C9A96E]"
                : "w-14 h-10 opacity-50 hover:opacity-80"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          >
            <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>

      {/* Dot progress bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-500 ${
              i === current ? "w-10 bg-[#C9A96E]" : "w-4 bg-white/30"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-white/40"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={20} />
      </motion.div>

      {/* Slide counter */}
      <div className="absolute top-24 right-6 md:right-10 z-20 font-body text-xs text-white/40 tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
