"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/images/hero.jpg", label: "Wonder Castle 전체 조감" },
  { src: "/images/3.jpg",    label: "Master View" },
  { src: "/images/1.jpg",    label: "Main Tower 야경" },
  { src: "/images/2.jpg",    label: "Zone A·B·C·D" },
  { src: "/images/4.jpg",    label: "Site View" },
];

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="bg-[#0F1C2E] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* 헤더 */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="font-body text-xs text-[#4ECDC4] tracking-[0.35em] uppercase mb-1">
              Project Visualization
            </p>
            <h2 className="font-display font-bold text-white text-xl md:text-2xl">
              신길온천 Wonder Castle
            </h2>
          </div>
          {/* 우측 슬라이더 화살표 */}
          <div className="flex gap-2">
            <button onClick={prev} aria-label="이전"
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} aria-label="다음"
              className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* 2열 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* 왼쪽: 위성 지도 (고정) */}
          <div className="relative overflow-hidden rounded" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/map.jpg"
              alt="신길온천 사업 부지 위성지도"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-[#C9A96E] text-xs tracking-widest uppercase mb-0.5">Site Map</p>
              <p className="font-display font-semibold text-white text-base">신길온천 사업 부지</p>
            </div>
          </div>

          {/* 오른쪽: 이미지 슬라이더 */}
          <div className="flex flex-col gap-2">
            {/* 메인 이미지 */}
            <div className="relative overflow-hidden rounded flex-1" style={{ aspectRatio: "4/3" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[current].src}
                    alt={slides[current].label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-12">
                    <p className="font-body text-[#C9A96E] text-xs tracking-widest uppercase mb-0.5">
                      조감도 레퍼런스
                    </p>
                    <p className="font-display font-semibold text-white text-base truncate">
                      {slides[current].label}
                    </p>
                  </div>
                  {/* 카운터 */}
                  <div className="absolute top-3 right-4 font-body text-xs text-white/50 tracking-widest">
                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 썸네일 */}
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={s.label}
                  className={`relative flex-1 overflow-hidden rounded transition-all duration-250 ${
                    i === current
                      ? "ring-2 ring-[#C9A96E] opacity-100"
                      : "opacity-35 hover:opacity-65"
                  }`}
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image src={s.src} alt={s.label} fill className="object-cover" sizes="120px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
