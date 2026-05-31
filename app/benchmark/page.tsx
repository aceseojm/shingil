"use client";

import Image from "next/image";
import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";

const cases = [
  {
    city: "서울, 대한민국",
    name: "롯데월드타워 & 롯데월드",
    visitors: "연 1,300만 명",
    img: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80",
    desc: "도심 복합 엔터테인먼트 + 쇼핑 + 호텔의 결합. 역세권 직결 입지가 만들어낸 수도권 최대 복합 랜드마크. 개장 이후 30년간 안정적인 방문객 유지.",
    highlight: "도심 초역세권 복합 개발의 교과서",
    color: "#C9A96E",
  },
  {
    city: "오사카, 일본",
    name: "아베노 하루카스",
    visitors: "개장 초기 연 4,000만 명",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    desc: "300m 초고층 타워에 백화점·호텔·전망대·오피스를 결합한 수직형 복합도시. 개발 전 쇠퇴했던 아베노 지역을 오사카의 새로운 랜드마크로 재건.",
    highlight: "쇠퇴 지역의 랜드마크 재생 사례",
    color: "#4ECDC4",
  },
  {
    city: "충북 충주·경북 울진",
    name: "수안보·덕구온천 단지",
    visitors: "연 100~150만 명",
    img: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&q=80",
    desc: "한국 대표 온천 관광지. 그러나 교통 불편, 시설 노후화로 성장 정체 중. 신길온천은 이와 대비되는 역세권 + 최신 웰니스 시설로 차별화.",
    highlight: "온천 시장의 업그레이드 필요성 입증",
    color: "#C9A96E",
  },
  {
    city: "싱가포르",
    name: "마리나베이 샌즈",
    visitors: "연 4,000만 명+",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    desc: "카지노·호텔·컨벤션·스카이파크가 결합된 세계적 복합 랜드마크. 싱가포르를 아시아 관광의 허브로 재정립. 단일 개발이 도시 전체 이미지를 바꾼 사례.",
    highlight: "복합 개발의 도시 브랜딩 파급 효과",
    color: "#4ECDC4",
  },
];

export default function BenchmarkPage() {
  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Global Benchmark"
        title="글로벌 벤치마크"
        subtitle="유사 해외 성공 사례와의 비교를 통한 실현 가능성 증명"
        bgImage="/images/hero.jpg"
      />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          {cases.map((c, i) => (
            <FadeUp key={c.name} delay={i * 0.1}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex flex-col md:flex-row">

                  {/* 이미지 */}
                  <div className="relative md:w-72 lg:w-80 flex-shrink-0 overflow-hidden" style={{ minHeight: "200px" }}>
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 320px"
                      unoptimized
                    />
                    {/* 이미지 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    {/* 방문객 수 배지 */}
                    <div
                      className="absolute bottom-3 left-3 px-3 py-1.5 rounded text-xs font-body font-bold text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.visitors}
                    </div>
                  </div>

                  {/* 좌측 컬러 바 */}
                  <div className="w-1 flex-shrink-0 hidden md:block" style={{ backgroundColor: c.color }} />

                  {/* 텍스트 */}
                  <div className="p-7 flex-1 flex flex-col justify-center">
                    <p className="font-body text-xs text-[#0F1C2E]/50 tracking-widest mb-1">{c.city}</p>
                    <h3
                      className="font-display font-bold text-[#0F1C2E] mb-3 group-hover:transition-colors"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                    >
                      {c.name}
                    </h3>
                    <p className="font-body text-[#0F1C2E]/50 text-sm leading-relaxed mb-4">{c.desc}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded self-start" style={{ backgroundColor: `${c.color}18` }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                      <p className="font-body text-xs font-semibold" style={{ color: c.color }}>{c.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Insight */}
      <section className="py-16 px-6 bg-[#0F1C2E]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-6">
              Key Insight
            </p>
            <p className="font-display font-light text-white leading-relaxed"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}>
              "신길온천 목표 <span className="text-[#C9A96E] font-bold">300만 명</span>은
              <br />
              전체 배후 수요의 20% 수준의
              <br />
              보수적이고 달성 가능한 목표입니다."
            </p>
          </FadeUp>
        </div>
      </section>

      <PageNav current="/benchmark" />
    </div>
  );
}
