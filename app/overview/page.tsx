"use client";

import { motion } from "framer-motion";
import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import { MapPin, Layers, Zap, TrendingUp } from "lucide-react";

const infoCards = [
  { label: "LOCATION", value: "경기도 안산시 단원구 신길동 일원" },
  { label: "SCALE", value: "약 76,485㎡ / 용적률 500~800%" },
  { label: "IDENTITY", value: "웰니스·문화·상업·주거 복합 도시" },
  { label: "ANCHOR", value: "Bio-Dome + 아쿠아 포디움 (30,000㎡)" },
  { label: "ACCESS", value: "수도권 전철 4호선 신길온천역 직결" },
  { label: "VISION", value: "K-Wellness Landmark & Urban Transformation" },
];

const strategies = [
  {
    num: "01",
    icon: <MapPin size={28} className="text-[#C9A96E]" />,
    title: "희소성 있는 입지 가치",
    desc: "수도권 전철 4호선 직결 초역세권. 배후 인구 1,200만 명의 유일한 대규모 온천 개발 가능지.",
  },
  {
    num: "02",
    icon: <Layers size={28} className="text-[#C9A96E]" />,
    title: "미래형 도시 모델",
    desc: "Bio-Dome & Green Spine 중심의 친환경 복합도시 모델. 도심형 웰니스 랜드마크 구현.",
  },
  {
    num: "03",
    icon: <Zap size={28} className="text-[#C9A96E]" />,
    title: "단계별 개발 전략",
    desc: "Step 1 온천 앵커 구축 → Step 2 문화/상업 확장 → Step 3 복합도시 완성. 리스크 최소화.",
  },
  {
    num: "04",
    icon: <TrendingUp size={28} className="text-[#C9A96E]" />,
    title: "복합 사업 모델",
    desc: "Sale(주거 분양) + Lease(상업·오피스 임대) + Operation(관광·웰니스 운영)의 안정적 수익 구조.",
  },
];

export default function OverviewPage() {
  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Project Overview"
        title="프로젝트 개요"
        subtitle="수도권 전철 4호선 신길온천역과 직결되는 86,000㎡ 초역세권 개발 프로젝트"
        bgImage="/images/hero.jpg"
      />

      {/* Info Cards */}
      <section id="info" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-8">
              Project Information
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {infoCards.map((card, i) => (
              <FadeUp key={card.label} delay={i * 0.08}>
                <div className="bg-white p-6 rounded border-l-2 border-[#C9A96E] shadow-sm">
                  <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-2">{card.label}</p>
                  <p className="font-section text-lg text-[#0F1C2E]">{card.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Strategies */}
      <section id="strategy" className="py-20 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Core Strategy
            </p>
            <h2 className="font-section text-4xl text-white mb-12">
              4대 핵심 전략
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategies.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded hover:border-[#C9A96E]/40 transition-colors group">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-body text-xs text-[#C9A96E] tracking-widest mt-1">{s.num}</span>
                    {s.icon}
                  </div>
                  <h3 className="font-section text-2xl text-white mb-3 group-hover:text-[#C9A96E] transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageNav current="/overview" />
    </div>
  );
}
