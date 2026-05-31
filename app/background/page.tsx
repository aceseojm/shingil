"use client";

import { motion } from "framer-motion";
import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import { Droplets, Building2, Train, Users, Star } from "lucide-react";

const backgrounds = [
  {
    icon: <Droplets size={32} className="text-[#4ECDC4]" />,
    code: "RESOURCE RE-DISCOVERY",
    title: "40년 잠든 온천 자원 재발견",
    desc: "신길온천은 1980년대부터 확인된 온천 자원으로, 40여 년간 개발되지 않은 채 방치되어 왔습니다. 수온 30°C 이상의 알칼리성 온천수는 웰니스 복합 개발의 핵심 자원입니다.",
  },
  {
    icon: <Building2 size={32} className="text-[#4ECDC4]" />,
    code: "URBAN TRANSFORMATION",
    title: "산업도시 한계 극복",
    desc: "안산시는 반월·시화 산업단지 중심의 제조업 도시 이미지를 넘어서야 하는 전환점에 서 있습니다. 웰니스 랜드마크 조성으로 도시 정체성을 재정립할 기회입니다.",
  },
  {
    icon: <Train size={32} className="text-[#4ECDC4]" />,
    code: "ACCESSIBILITY",
    title: "초역세권 접근성",
    desc: "수도권 전철 4호선 신길온천역과 직결되는 부지. 서울 중심부에서 40분, 수원에서 20분 이내 접근 가능한 광역 교통망의 핵심 결절점입니다.",
  },
  {
    icon: <Users size={32} className="text-[#4ECDC4]" />,
    code: "MARKET DEMAND",
    title: "수도권 힐링 수요 증가",
    desc: "코로나 이후 국내 웰니스 시장은 연 15% 성장 중. 수도권 1,200만 배후 인구를 중심으로 품질 높은 힐링·스파 시설에 대한 수요가 급증하고 있습니다.",
  },
  {
    icon: <Star size={32} className="text-[#4ECDC4]" />,
    code: "CITY BRANDING",
    title: "도시 브랜드 재정립",
    desc: "'공업도시 안산'에서 '웰니스 도시 안산'으로의 전환. 글로벌 K-Wellness 트렌드와 결합해 안산을 수도권 대표 관광·휴양 도시로 재브랜딩합니다.",
  },
];

const timeline = [
  { year: "1980s", event: "신길 지역 온천 자원 최초 확인" },
  { year: "1990s", event: "개발 논의 시작 — 수차례 계획 수립 후 무산" },
  { year: "2000s", event: "신길온천역 개통 (4호선), 역세권 개발 기대 고조" },
  { year: "2010s", event: "개발 시도 반복 — 인허가·자금 조달 난항으로 표류" },
  { year: "2020s", event: "웰니스 시장 성장 + 규제 완화 = 최적의 개발 시점 도래" },
  { year: "2026", event: "The Wonder Castle 프로젝트 공식 제안" },
];

export default function BackgroundPage() {
  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Development Background"
        title="개발 배경과 필요성"
        subtitle="왜 지금, 왜 신길온천인가"
        bgImage="/images/hero.jpg"
      />

      {/* Quote */}
      <section className="py-16 px-6 bg-[#0F1C2E]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-display text-2xl md:text-4xl text-white/90 italic leading-relaxed">
              "40년간의 기다림 끝에 마주한 기회,
              <br />
              <span className="text-[#C9A96E]">안산의 새로운 도약을 위한 필연적인 도시 혁신 프로젝트입니다.</span>"
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 5 Backgrounds */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-10">
              5 Key Backgrounds
            </p>
          </FadeUp>
          <div className="space-y-6">
            {backgrounds.map((b, i) => (
              <FadeUp key={b.code} delay={i * 0.08}>
                <div className="flex gap-6 bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex-shrink-0 mt-1">{b.icon}</div>
                  <div>
                    <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-1">{b.code}</p>
                    <h3 className="font-section text-xl text-[#0F1C2E] mb-3 group-hover:text-[#C9A96E] transition-colors">
                      {b.title}
                    </h3>
                    <p className="font-body text-[#0F1C2E]/50 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Development History
            </p>
            <h2 className="font-section text-4xl text-white mb-16">40년 개발 연혁</h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-[88px] md:left-1/2 top-0 bottom-0 w-px bg-[#C9A96E]/20" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <FadeUp key={t.year} delay={i * 0.1}>
                  <div className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      {i % 2 === 0 ? (
                        <p className="font-body text-white/70 text-base">{t.event}</p>
                      ) : (
                        <p className="font-display text-3xl text-[#C9A96E]">{t.year}</p>
                      )}
                    </div>
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-4 h-4 rounded-full bg-[#C9A96E] border-4 border-[#0F1C2E]" />
                    </div>
                    <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                      {i % 2 !== 0 ? (
                        <p className="font-body text-white/70 text-base">{t.event}</p>
                      ) : (
                        <p className="font-display text-3xl text-[#C9A96E]">{t.year}</p>
                      )}
                    </div>
                    <div className="md:hidden">
                      <p className="font-display text-2xl text-[#C9A96E]">{t.year}</p>
                      <p className="font-body text-white/70 text-sm mt-1">{t.event}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageNav current="/background" />
    </div>
  );
}
