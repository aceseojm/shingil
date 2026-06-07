"use client";

import { useState } from "react";
import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import Masterplan3D from "@/components/ui/Masterplan3D";

const clusters = [
  {
    id: "A",
    zone: "ZONE A",
    name: "주상복합 타워",
    en: "Residential Complex",
    color: "#C9A96E",
    floors: "50F",
    area: "약 28,000㎡",
    tag: "좌측",
    facilities: [
      "50층 주상복합 타워 (다수)",
      "웰니스 레지던스",
      "저층부 상업·커뮤니티 시설",
      "옥상 정원 & 스카이라운지",
    ],
    desc: "신길온천 서측에 위치한 대규모 주거 클러스터. 50층 주상복합 타워가 단지형으로 배치되며, 온천·스파 시설을 일상에서 이용하는 웰니스 주거 브랜드를 구현합니다.",
  },
  {
    id: "B",
    zone: "ZONE B",
    name: "Main Hot Spring Resort",
    en: "Twin Tower & Hot Spring",
    color: "#4ECDC4",
    floors: "50F Twin Tower",
    area: "약 32,000㎡",
    tag: "중앙 (앵커)",
    facilities: [
      "50층 Twin Tower (스카이브릿지 연결)",
      "온천·스파·아쿠아 포디움",
      "인피니티 풀 & 워터폴 파사드",
      "신길온천역 직결 연계 동선",
    ],
    desc: "프로젝트의 핵심 앵커. 50층 Twin Tower가 스카이브릿지로 연결되는 수직 랜드마크. 온천수를 활용한 아쿠아 포디움과 워터폴 파사드가 상징적 정체성을 형성합니다.",
  },
  {
    id: "C",
    zone: "ZONE C",
    name: "족욕 공공파크 & 스파",
    en: "Water Terraces & Public Spa",
    color: "#C9A96E",
    floors: "10F",
    area: "약 12,000㎡",
    tag: "우측 하단",
    facilities: [
      "10층 상업·스파 복합 건물",
      "족욕 체험 공공파크 (노천)",
      "온천수 수경시설 & 테라스",
      "F&B 스트리트 & 리테일",
    ],
    desc: "우측 하단에 위치한 공공 웰니스 허브. 10층 스파·상업 건물과 함께 누구나 즐길 수 있는 족욕 체험 공공파크가 조성됩니다. 테라스형 수경시설이 도시와 자연을 연결합니다.",
  },
  {
    id: "D",
    zone: "ZONE D",
    name: "역사 오피스 타워",
    en: "Station Office Tower",
    color: "#4ECDC4",
    floors: "약 20F",
    area: "약 8,000㎡",
    tag: "우측 상단",
    facilities: [
      "역세권 프리미엄 오피스",
      "전철역 연결 상업 저층부",
      "컨퍼런스 & 비즈니스 센터",
      "옥상 테라스",
    ],
    desc: "신길온천역과 직접 연결되는 업무 거점. 역세권 프리미엄 오피스와 비즈니스 센터로 구성되어 개발 전체의 경제적 기반을 지원합니다.",
  },
];

const timeline = [
  {
    year: "1년차",
    phase: "Phase 1",
    phaseColor: "#C9A96E",
    title: "착공 & 기반 조성",
    items: [
      "인허가·환경영향평가 완료",
      "신길온천역 연결 공사 착수",
      "족욕 공공파크 1단계 착공",
    ],
  },
  {
    year: "2년차",
    phase: "Phase 1",
    phaseColor: "#C9A96E",
    title: "역사·앵커 구축 완료",
    items: [
      "30층 게이트웨이 완공",
      "아쿠아 포디움 & 온천·스파 오픈",
      "족욕 공공파크 1단계 개방",
    ],
  },
  {
    year: "3년차",
    phase: "Phase 2",
    phaseColor: "#4ECDC4",
    title: "Twin Tower 착공",
    items: [
      "50층 Twin Tower 구조 공사 시작",
      "Zone A 주상복합 분양 개시",
      "Zone C 상업·스파 건물 착공",
    ],
  },
  {
    year: "4년차",
    phase: "Phase 2",
    phaseColor: "#4ECDC4",
    title: "주거·상업 완성",
    items: [
      "Twin Tower 스카이브릿지 완공",
      "Zone A 주상복합 입주 시작",
      "Zone C 상업·스파 건물 오픈",
    ],
  },
  {
    year: "5년차~",
    phase: "Phase 3",
    phaseColor: "#C9A96E",
    title: "복합도시 완성",
    items: [
      "Zone D 역사 오피스 타워 완공",
      "공공파크 전체 개방",
      "브랜드 운영 체계 정착",
    ],
  },
];

export default function MasterplanPage() {
  const [active, setActive] = useState("B");
  const current = clusters.find((c) => c.id === active)!;

  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Masterplan & Spatial Strategy"
        title="마스터플랜 및 공간 전략"
        subtitle="신길온천역 직결 — 전철역사에서 Twin Tower로 이어지는 수직 랜드마크"
        bgImage="/images/hero.jpg"
      />

      {/* ── 다이어그램 + 클러스터 ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-8">
              Spatial Configuration
            </p>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── 3D 와이어프레임 다이어그램 ── */}
            <FadeUp className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden w-full">
                <Masterplan3D active={active} onZoneClick={setActive} />
              </div>
            </FadeUp>

            {/* ── 클러스터 상세 ── */}
            <FadeUp delay={0.1} className="lg:w-1/2 flex flex-col gap-3">

              {/* Zone 탭 버튼 */}
              <div className="grid grid-cols-4 gap-2">
                {clusters.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`py-2 rounded text-xs font-body font-bold tracking-widest transition-all duration-200 ${
                      active === c.id
                        ? "text-[#0F1C2E]"
                        : "bg-white/60 text-[#0F1C2E]/50 hover:bg-white"
                    }`}
                    style={active === c.id ? { backgroundColor: c.color } : {}}
                  >
                    {c.zone}
                  </button>
                ))}
              </div>

              {/* 상세 카드 */}
              <div
                className="bg-white rounded-xl p-6 flex-1 border-l-4"
                style={{ borderColor: current.color }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-body text-xs font-bold tracking-widest px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${current.color}20`, color: current.color }}
                      >
                        {current.tag}
                      </span>
                      <span className="font-body text-xs text-[#0F1C2E]/50">{current.floors}</span>
                    </div>
                    <h3 className="font-display font-black text-[#0F1C2E]"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                      {current.name}
                    </h3>
                    <p className="font-body text-xs text-[#0F1C2E]/50 mt-0.5">{current.en}</p>
                  </div>
                  <span className="font-body text-xs text-[#0F1C2E]/50 bg-[#F8F6F2] px-3 py-1 rounded">
                    {current.area}
                  </span>
                </div>

                <p className="font-body text-[#0F1C2E]/50 text-sm leading-relaxed mb-4">
                  {current.desc}
                </p>

                <ul className="space-y-2">
                  {current.facilities.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-sm text-[#0F1C2E]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: current.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Zone 요약 그리드 */}
              <div className="grid grid-cols-2 gap-2">
                {clusters.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`text-left p-3 rounded border transition-all duration-200 ${
                      active === c.id
                        ? "border-current bg-white shadow-sm"
                        : "border-transparent bg-white/60 hover:bg-white"
                    }`}
                    style={active === c.id ? { borderColor: c.color } : {}}
                  >
                    <p className="font-body text-xs font-bold tracking-widest mb-0.5"
                      style={{ color: c.color }}>{c.zone}</p>
                    <p className="font-display font-semibold text-sm text-[#0F1C2E] leading-tight">{c.name}</p>
                    <p className="font-body text-xs text-[#0F1C2E]/50 mt-0.5">{c.floors}</p>
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 연도별 타임라인 로드맵 ── */}
      <section className="py-16 px-6 bg-[#0F1C2E] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-3">
              Development Roadmap
            </p>
            <h2 className="font-display font-black text-white mb-12"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              연도별 개발 로드맵
            </h2>
          </FadeUp>

          {/* Phase 범례 */}
          <FadeUp delay={0.05}>
            <div className="flex gap-6 mb-10">
              {[
                { phase: "Phase 1", color: "#C9A96E", period: "1~2년차" },
                { phase: "Phase 2", color: "#4ECDC4", period: "3~4년차" },
                { phase: "Phase 3", color: "#C9A96E", period: "5년차~" },
              ].map((p) => (
                <div key={p.phase} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                  <span className="font-body text-xs text-white/50">{p.phase} ({p.period})</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* 데스크탑: 수평 타임라인 */}
          <div className="hidden md:block">
            {/* 연결선 */}
            <FadeUp delay={0.1}>
              <div className="relative mb-2">
                <div className="absolute top-5 left-[10%] right-[10%] h-px bg-white/10" />
                <div className="grid grid-cols-5 gap-4">
                  {timeline.map((t, i) => (
                    <div key={t.year} className="flex flex-col items-center">
                      {/* 연도 노드 */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 mb-3 relative"
                        style={{ borderColor: t.phaseColor, backgroundColor: "#0F1C2E" }}
                      >
                        <span className="font-body text-[10px] font-bold" style={{ color: t.phaseColor }}>
                          {i + 1}
                        </span>
                      </div>
                      {/* 연도 라벨 */}
                      <span className="font-body text-xs font-bold text-white mb-1 whitespace-nowrap">
                        {t.year}
                      </span>
                      <span className="font-body text-[10px] tracking-widest mb-4 whitespace-nowrap"
                        style={{ color: t.phaseColor }}>
                        {t.phase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-5 gap-4">
              {timeline.map((t, i) => (
                <FadeUp key={t.year} delay={0.1 + i * 0.08}>
                  <div
                    className="bg-white/5 border border-white/10 p-5 rounded-xl h-full transition-colors hover:bg-white/8"
                    style={{ borderTopColor: t.phaseColor, borderTopWidth: 2 }}
                  >
                    <h3 className="font-display font-bold text-white text-sm mb-4 leading-snug">
                      {t.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {t.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 font-body text-xs text-white/55 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: t.phaseColor }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* 모바일: 수직 타임라인 */}
          <div className="md:hidden space-y-0">
            {timeline.map((t, i) => (
              <FadeUp key={t.year} delay={i * 0.08}>
                <div className="flex gap-4">
                  {/* 세로 연결선 + 노드 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                      style={{ borderColor: t.phaseColor, backgroundColor: "#0F1C2E" }}
                    >
                      <span className="font-body text-[10px] font-bold" style={{ color: t.phaseColor }}>
                        {i + 1}
                      </span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 my-1" style={{ backgroundColor: `${t.phaseColor}30`, minHeight: 32 }} />
                    )}
                  </div>
                  {/* 내용 */}
                  <div className="pb-8 flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-body text-sm font-bold text-white">{t.year}</span>
                      <span className="font-body text-[10px] tracking-widest" style={{ color: t.phaseColor }}>
                        {t.phase}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-white text-base mb-3">{t.title}</h3>
                    <ul className="space-y-2">
                      {t.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 font-body text-sm text-white/55">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: t.phaseColor }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageNav current="/masterplan" />
    </div>
  );
}
