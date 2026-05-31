"use client";

import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import StatCounter from "@/components/ui/StatCounter";
import NaverMap from "@/components/ui/NaverMap";

const competitors = [
  { name: "신길온천 (Wonder Castle)", visitors: "300만 목표", size: "76,485㎡", access: "전철 직결", note: "계획" },
  { name: "롯데월드 (서울)", visitors: "연 1,300만", size: "대규모", access: "전철 직결", note: "운영중" },
  { name: "덕구온천 단지", visitors: "연 100~150만", size: "중규모", access: "차량", note: "운영중" },
  { name: "수안보 온천", visitors: "연 50~80만", size: "소규모", access: "차량", note: "운영중" },
  { name: "도심 스파 (서울)", visitors: "연 50만 내외", size: "소규모", access: "전철 접근", note: "운영중" },
];

const stats = [
  { value: "150", suffix: "만 명", label: "1차 배후 인구 (직접 권역)" },
  { value: "1200", suffix: "만 명", label: "2차 배후 인구 (수도권 전역)" },
  { value: "40", suffix: "분", label: "서울 도심 접근 시간" },
  { value: "20", suffix: "분", label: "수원 접근 시간" },
];

export default function LocationPage() {
  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Location & Market Competitiveness"
        title="입지 및 시장 경쟁력"
        subtitle="신길온천역 직결 — 수도권 1,200만 배후 인구를 가진 독보적 입지"
        bgImage="/images/hero.jpg"
      />

      {/* Naver Map */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-6">
              Location Map
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <NaverMap />
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-4 flex flex-wrap gap-6 text-sm font-body text-[#0F1C2E]/50">
              <span>📍 경기도 안산시 단원구 신길동 일원</span>
              <span>🚇 수도권 전철 4호선 신길온천역 직결</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <StatCounter value={s.value} label={s.label} suffix={s.suffix} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Competitive Table */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Market Comparison
            </p>
            <h2 className="font-section text-4xl text-[#0F1C2E] mb-12">
              시장 비교 분석
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded shadow-sm">
                <thead>
                  <tr className="bg-[#0F1C2E] text-white">
                    <th className="p-4 text-left font-body text-xs tracking-widest">시설명</th>
                    <th className="p-4 text-left font-body text-xs tracking-widest">방문객</th>
                    <th className="p-4 text-left font-body text-xs tracking-widest">규모</th>
                    <th className="p-4 text-left font-body text-xs tracking-widest">교통</th>
                    <th className="p-4 text-left font-body text-xs tracking-widest">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <tr
                      key={c.name}
                      className={`border-b border-[#F8F6F2] ${i === 0 ? "bg-[#C9A96E]/10" : ""}`}
                    >
                      <td className={`p-4 font-body text-sm ${i === 0 ? "text-[#0F1C2E] font-medium" : "text-[#0F1C2E]/50"}`}>
                        {c.name}
                      </td>
                      <td className="p-4 font-body text-sm text-[#0F1C2E]/50">{c.visitors}</td>
                      <td className="p-4 font-body text-sm text-[#0F1C2E]/50">{c.size}</td>
                      <td className="p-4 font-body text-sm text-[#0F1C2E]/50">{c.access}</td>
                      <td className="p-4">
                        <span className={`font-body text-xs px-2 py-1 rounded ${
                          c.note === "계획" ? "bg-[#C9A96E]/20 text-[#C9A96E]" : "bg-[#6B7280]/10 text-[#0F1C2E]/50"
                        }`}>
                          {c.note}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8 bg-[#0F1C2E] text-white p-6 rounded">
              <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-2">INSIGHT</p>
              <p className="font-body text-white/80 leading-relaxed">
                신길온천 목표 300만 명 = 전체 배후 수요의 <strong className="text-[#C9A96E]">20% 수준</strong>의 보수적 목표.
                역세권 직결·대규모 복합 개발이라는 차별화 포인트로 충분히 달성 가능한 목표입니다.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <PageNav current="/location" />
    </div>
  );
}
