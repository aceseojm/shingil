"use client";

import { motion } from "framer-motion";
import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import { Layers, Globe, Leaf, Sparkles } from "lucide-react";

const models = [
  {
    icon: <Layers size={32} className="text-[#C9A96E]" />,
    title: "복합 기능의 통합",
    sub: "Integrated Mixed-Use",
    desc: "웰니스 + 문화 + 라이프스타일 + 주거의 유기적 연결. 하나의 공간에서 체류·소비·경험이 순환하는 자기완결형 도시 모델.",
  },
  {
    icon: <Globe size={32} className="text-[#C9A96E]" />,
    title: "역세권 도시형 관광",
    sub: "Transit-Oriented Wellness Tourism",
    desc: "전철로 접근해서 하루 이상 머무는 새로운 관광 패턴. 서울·수원·인천의 도시민이 당일·1박 여행으로 즐기는 수도권형 리조트.",
  },
  {
    icon: <Leaf size={32} className="text-[#C9A96E]" />,
    title: "그린 인프라 네트워크",
    sub: "Green Spine Infrastructure",
    desc: "부지 중앙을 관통하는 Green Spine 보행축. 모든 클러스터를 연결하는 친환경 오픈 스페이스와 Bio-Dome 생태 랜드마크 통합.",
  },
  {
    icon: <Sparkles size={32} className="text-[#C9A96E]" />,
    title: "체류형 소비 유도",
    sub: "Extended Dwell-Time Economy",
    desc: "방문 → 체험 → 식사 → 쇼핑 → 숙박의 풀사이클 소비 유도. 1인당 소비단가를 극대화하는 체류형 경제 모델.",
  },
];

export default function VisionPage() {
  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Vision & Development Concept"
        title="비전과 개발 콘셉트"
        subtitle="From Hidden Hot Spring to the Future Wellness City"
        bgImage="/images/hero.jpg"
      />

      {/* Vision Declaration */}
      <section className="relative py-32 px-6 bg-[#0F1C2E] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, #4ECDC4 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #C9A96E 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          {[
            { text: "From Hidden",    color: "text-white",       delay: 0 },
            { text: "Hot Spring",     color: "text-[#4ECDC4]",   delay: 0.35 },
            { text: "to the Future",  color: "text-white",       delay: 0.7 },
            { text: "Wellness City",  color: "text-[#C9A96E]",   delay: 1.05 },
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: line.delay, ease: [0.22, 1, 0.36, 1] }}
              className={`font-display font-bold text-5xl md:text-7xl leading-tight block ${line.color}`}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* 4 Urban Models */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Urban Development Model
            </p>
            <h2 className="font-section text-4xl text-[#0F1C2E] mb-12">4대 도시 모델 개념</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((m, i) => (
              <FadeUp key={m.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded shadow-sm hover:-translate-y-1 hover:shadow-md transition-all group">
                  <div className="mb-4">{m.icon}</div>
                  <p className="font-body text-xs text-[#0F1C2E]/50 tracking-widest mb-2">{m.sub}</p>
                  <h3 className="font-section text-2xl text-[#0F1C2E] mb-3 group-hover:text-[#C9A96E] transition-colors">
                    {m.title}
                  </h3>
                  <p className="font-body text-[#0F1C2E]/50 leading-relaxed">{m.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* K-Wellness Brand */}
      <section className="py-20 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <FadeUp className="flex-1">
              <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
                Brand Identity
              </p>
              <h2 className="font-section text-4xl text-white mb-6">K-Wellness<br />Brand Positioning</h2>
              <p className="font-body text-white/60 leading-relaxed mb-6">
                "The Wonder Castle"은 단순한 시설명이 아닙니다. 온천이라는 자연 자원과 도시 인프라, 문화 콘텐츠가 결합한 대한민국 고유의 웰니스 브랜드입니다.
              </p>
              <p className="font-body text-white/60 leading-relaxed">
                글로벌 웰니스 시장은 2025년 7조 달러를 돌파했으며, K-컬처의 확장과 함께 K-Wellness는 새로운 한류의 축으로 부상 중입니다. The Wonder Castle은 그 중심에 서고자 합니다.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="flex-shrink-0">
              <div className="bg-white/5 border border-[#C9A96E]/20 p-12 rounded-2xl text-center">
                <p className="font-display text-6xl text-[#C9A96E] mb-4">TWC</p>
                <p className="font-body text-xs text-white/40 tracking-[0.3em] uppercase mb-2">
                  The Wonder Castle
                </p>
                <p className="font-body text-xs text-[#4ECDC4] tracking-widest">
                  K-WELLNESS LANDMARK
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <PageNav current="/vision" />
    </div>
  );
}
