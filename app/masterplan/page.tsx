"use client";

import { useState } from "react";
import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";

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

const steps = [
  {
    step: "Step 1",
    period: "1~2년차",
    title: "역사·앵커 구축",
    items: [
      "신길온천역 연결 30층 게이트웨이 완공",
      "아쿠아 포디움 & 온천·스파 오픈",
      "족욕 공공파크 1단계 조성",
    ],
  },
  {
    step: "Step 2",
    period: "3~4년차",
    title: "Twin Tower & 주거 완성",
    items: [
      "50층 Twin Tower 스카이브릿지 완공",
      "Zone A 주상복합 타워 분양·입주",
      "Zone C 상업·스파 건물 오픈",
    ],
  },
  {
    step: "Step 3",
    period: "5년차~",
    title: "복합도시 완성",
    items: [
      "Zone D 오피스 타워 완공",
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

            {/* ── SVG 다이어그램 ── */}
            <FadeUp className="lg:w-1/2">
              <div className="bg-[#0F1C2E] rounded-2xl p-5 w-full">
                <svg viewBox="0 0 560 410" className="w-full" style={{ fontFamily: "DM Sans, sans-serif" }}>

                  {/* ── 지면 ── */}
                  <line x1="8" y1="385" x2="552" y2="385" stroke="#ffffff20" strokeWidth="1" />

                  {/* ══════════════════════════════
                      ZONE A  좌측 주상복합 50F ×3
                  ══════════════════════════════ */}
                  <g onClick={() => setActive("A")} style={{ cursor: "pointer" }}>
                    {/* 라벨 */}
                    <text x="88" y="80" fill={active === "A" ? "#C9A96E" : "#C9A96E88"} fontSize="9" textAnchor="middle" fontWeight="bold">ZONE A</text>
                    <text x="88" y="92" fill="#ffffff44" fontSize="7.5" textAnchor="middle">주상복합 50F</text>
                    {/* 타워 1 */}
                    <rect x="12" y="100" width="46" height="285" rx="3"
                      fill={active === "A" ? "#C9A96E55" : "#C9A96E1A"} stroke="#C9A96E" strokeWidth={active === "A" ? "2" : "1.5"} />
                    {/* 타워 2 */}
                    <rect x="64" y="114" width="46" height="271" rx="3"
                      fill={active === "A" ? "#C9A96E55" : "#C9A96E15"} stroke="#C9A96E" strokeWidth={active === "A" ? "2" : "1.5"} />
                    {/* 타워 3 */}
                    <rect x="116" y="128" width="46" height="257" rx="3"
                      fill={active === "A" ? "#C9A96E55" : "#C9A96E12"} stroke="#C9A96E" strokeWidth={active === "A" ? "2" : "1.5"} />
                    {/* 포디움 */}
                    <rect x="8" y="355" width="160" height="30" rx="3"
                      fill={active === "A" ? "#C9A96E33" : "#C9A96E20"} stroke="#C9A96E" strokeWidth="1" />
                  </g>

                  {/* ══════════════════════════════
                      ZONE B  50층 Twin Tower
                  ══════════════════════════════ */}
                  <g onClick={() => setActive("B")} style={{ cursor: "pointer" }}>
                    {/* 라벨 */}
                    <text x="228" y="68" fill={active === "B" ? "#4ECDC4" : "#4ECDC488"} fontSize="9" textAnchor="middle" fontWeight="bold">ZONE B</text>
                    <text x="228" y="80" fill="#ffffff44" fontSize="7.5" textAnchor="middle">50F Twin Tower</text>
                    {/* Twin Tower Left */}
                    <rect x="183" y="88" width="52" height="267" rx="3"
                      fill={active === "B" ? "#4ECDC455" : "#4ECDC420"} stroke="#4ECDC4" strokeWidth={active === "B" ? "2.5" : "1.5"} />
                    {/* Twin Tower Right */}
                    <rect x="246" y="88" width="52" height="267" rx="3"
                      fill={active === "B" ? "#4ECDC455" : "#4ECDC420"} stroke="#4ECDC4" strokeWidth={active === "B" ? "2.5" : "1.5"} />
                    {/* 스카이브릿지 */}
                    <rect x="183" y="116" width="115" height="13" rx="2"
                      fill={active === "B" ? "#4ECDC4" : "#4ECDC444"} stroke="#4ECDC4" strokeWidth="1" />
                    {/* 아쿠아 포디움 */}
                    <rect x="175" y="355" width="132" height="30" rx="3"
                      fill={active === "B" ? "#4ECDC433" : "#4ECDC418"} stroke="#4ECDC4" strokeWidth="1" />
                    {/* 워터폴 점선 */}
                    {[208, 228, 248, 268, 288].map((x) => (
                      <line key={x} x1={x} y1="355" x2={x} y2="385"
                        stroke="#4ECDC466" strokeWidth="1.5" strokeDasharray="3,3" />
                    ))}
                  </g>

                  {/* ══════════════════════════════
                      신길온천 역사 30층  (독립 건물)
                  ══════════════════════════════ */}
                  <g onClick={() => setActive("B")} style={{ cursor: "pointer" }}>
                    {/* 역사 건물 30F */}
                    <rect x="313" y="223" width="58" height="162" rx="3"
                      fill={active === "B" ? "#4ECDC433" : "#4ECDC415"} stroke="#4ECDC4" strokeWidth="1.5" strokeDasharray={active === "B" ? "none" : "0"} />
                    {/* 연결 브릿지 (역사 ↔ 트윈타워) */}
                    <rect x="298" y="260" width="17" height="8" rx="1"
                      fill="#4ECDC433" stroke="#4ECDC4" strokeWidth="1" />
                    {/* 라벨 배경 */}
                    <rect x="308" y="200" width="72" height="24" rx="3"
                      fill="#0F1C2E" stroke="#4ECDC4" strokeWidth="1" />
                    <text x="344" y="210" fill="#4ECDC4" fontSize="7.5" textAnchor="middle" fontWeight="bold">신길온천 역사</text>
                    <text x="344" y="221" fill="#ffffff66" fontSize="7" textAnchor="middle">30층</text>
                  </g>

                  {/* ══════════════════════════════
                      ZONE D  오피스 타워 20F
                  ══════════════════════════════ */}
                  <g onClick={() => setActive("D")} style={{ cursor: "pointer" }}>
                    {/* 라벨 */}
                    <text x="392" y="186" fill={active === "D" ? "#4ECDC4" : "#4ECDC488"} fontSize="9" textAnchor="middle" fontWeight="bold">ZONE D</text>
                    <text x="392" y="197" fill="#ffffff44" fontSize="7.5" textAnchor="middle">오피스 20F</text>
                    {/* 오피스 타워 */}
                    <rect x="368" y="203" width="52" height="152" rx="3"
                      fill={active === "D" ? "#4ECDC455" : "#4ECDC418"} stroke="#4ECDC4" strokeWidth={active === "D" ? "2" : "1.5"} />
                    {/* 저층부 */}
                    <rect x="363" y="345" width="62" height="40" rx="2"
                      fill={active === "D" ? "#4ECDC433" : "#4ECDC415"} stroke="#4ECDC4" strokeWidth="1" />
                  </g>

                  {/* ══════════════════════════════
                      ZONE C  10층 + 족욕 공공파크
                  ══════════════════════════════ */}
                  <g onClick={() => setActive("C")} style={{ cursor: "pointer" }}>
                    {/* 라벨 */}
                    <text x="466" y="290" fill={active === "C" ? "#C9A96E" : "#C9A96E88"} fontSize="9" textAnchor="middle" fontWeight="bold">ZONE C</text>
                    <text x="466" y="302" fill="#ffffff44" fontSize="7.5" textAnchor="middle">족욕파크 & 스파</text>
                    {/* 10층 건물 */}
                    <rect x="432" y="330" width="54" height="55" rx="3"
                      fill={active === "C" ? "#C9A96E55" : "#C9A96E20"} stroke="#C9A96E" strokeWidth={active === "C" ? "2" : "1.5"} />
                    {/* 10층 라벨 */}
                    <text x="459" y="362" fill={active === "C" ? "#C9A96E" : "#C9A96E88"} fontSize="8" textAnchor="middle" fontWeight="bold">10층</text>
                    {/* 테라스 step 1 */}
                    <rect x="490" y="348" width="28" height="37" rx="2"
                      fill={active === "C" ? "#C9A96E44" : "#C9A96E18"} stroke="#C9A96E" strokeWidth="1" />
                    {/* 테라스 step 2 */}
                    <rect x="521" y="360" width="22" height="25" rx="2"
                      fill={active === "C" ? "#C9A96E33" : "#C9A96E14"} stroke="#C9A96E" strokeWidth="1" />
                    {/* 족욕 물 표시 */}
                    <ellipse cx="532" cy="383" rx="16" ry="5"
                      fill="#4ECDC430" stroke="#4ECDC4" strokeWidth="1" />
                    {/* 공원 라벨 */}
                    <text x="504" y="378" fill={active === "C" ? "#C9A96E" : "#C9A96E88"} fontSize="7.5" textAnchor="middle" fontWeight="bold">공원</text>
                  </g>

                  {/* ── 신길온천역 표시 (하단 중앙) ── */}
                  <rect x="175" y="370" width="138" height="13" rx="2"
                    fill="#C9A96E22" stroke="#C9A96E88" strokeWidth="1" strokeDasharray="5,3" />
                  <text x="244" y="379" fill="#C9A96Ecc" fontSize="7.5" textAnchor="middle" fontWeight="bold">신길온천역 (4호선)</text>

                </svg>

                <p className="text-center font-body text-xs text-white/25 mt-2 tracking-widest">
                  각 Zone을 클릭하면 상세 정보를 볼 수 있습니다
                </p>
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
                        : "bg-white/60 text-[#6B7280] hover:bg-white"
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
                      <span className="font-body text-xs text-[#6B7280]">{current.floors}</span>
                    </div>
                    <h3 className="font-display font-black text-[#0F1C2E]"
                      style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                      {current.name}
                    </h3>
                    <p className="font-body text-xs text-[#6B7280] mt-0.5">{current.en}</p>
                  </div>
                  <span className="font-body text-xs text-[#6B7280] bg-[#F8F6F2] px-3 py-1 rounded">
                    {current.area}
                  </span>
                </div>

                <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-4">
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
                    <p className="font-body text-xs text-[#6B7280] mt-0.5">{c.floors}</p>
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 3단계 로드맵 ── */}
      <section className="py-16 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-3">
              Development Roadmap
            </p>
            <h2 className="font-display font-black text-white mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              3단계 개발 로드맵
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.step} delay={i * 0.12}>
                <div className="bg-white/5 border border-white/10 p-7 rounded-xl hover:border-[#C9A96E]/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full border border-[#C9A96E] flex items-center justify-center font-body text-xs text-[#C9A96E] font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-body text-xs text-[#C9A96E] tracking-widest">{s.step}</p>
                      <p className="font-body text-xs text-white/40">{s.period}</p>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-4">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-body text-sm text-white/60">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A96E] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
