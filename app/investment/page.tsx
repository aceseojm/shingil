"use client";

import SectionHero from "@/components/ui/SectionHero";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import StatCounter from "@/components/ui/StatCounter";
import { Shield, TrendingUp, Calendar, Award } from "lucide-react";

const highlights = [
  {
    icon: <Shield size={28} className="text-[#C9A96E]" />,
    title: "희소 자산 프리미엄",
    desc: "수도권 유일의 대규모 온천 개발 가능지. 대체 불가능한 자연 자원 + 전철 직결 입지의 결합은 시장 내 독점적 포지션을 보장합니다.",
  },
  {
    icon: <Award size={28} className="text-[#C9A96E]" />,
    title: "랜드마크 차별화",
    desc: "50층 Twin 타워와 인피니티 풀의 시각적 아이코닉함. 미디어 노출 및 자연 마케팅 효과로 광고비 절감 + 브랜드 가치 지속 상승.",
  },
  {
    icon: <Calendar size={28} className="text-[#C9A96E]" />,
    title: "사계절 수익 포트폴리오",
    desc: "온천·스파(연중), 문화·이벤트(계절), 주거·오피스(연간) — 계절 리스크를 분산하는 복합 수익원으로 안정적 현금흐름 확보.",
  },
  {
    icon: <TrendingUp size={28} className="text-[#C9A96E]" />,
    title: "장기적 미래 가치",
    desc: "개발 완성 후 지역 부동산 가치 상승 기대. K-Wellness 브랜드 파워의 글로벌 확장 가능성. 2차 개발(인근 부지)로 이어지는 선점 효과.",
  },
];

const effects = [
  { value: "300", suffix: "만 명", label: "연간 방문객" },
  { value: "15000", suffix: "명", label: "고용 창출" },
  { value: "3500", suffix: "억+", label: "지역 가치 상승" },
  { value: "3", suffix: "위", label: "도시 브랜드 목표" },
];

const risks = [
  {
    category: "규제·인허가",
    level: "중",
    mitigation: "사전 환경영향평가 완료, 안산시 협력 MOU 추진, 단계별 인허가 로드맵 수립",
  },
  {
    category: "자원·환경",
    level: "저",
    mitigation: "온천 자원 정밀 시추 조사 선행, 환경 영향 최소화 설계 (Bio-Dome 생태 보호)",
  },
  {
    category: "시장·수요",
    level: "저",
    mitigation: "배후 인구 1,200만 대비 20% 목표로 보수적 계획, 다양한 수익원 분산",
  },
  {
    category: "실행·재무",
    level: "중",
    mitigation: "단계별 개발로 초기 투자 분산, 앵커 시설 선개발 후 재원 조달 구조",
  },
];

export default function InvestmentPage() {
  return (
    <div className="bg-[#F8F6F2]">
      <SectionHero
        label="Business & Investment Structure"
        title="사업 및 투자 구조"
        subtitle="안정적 복합 수익 모델과 장기 투자 가치"
        bgImage="/images/hero.jpg"
      />

      {/* Investment Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-10">
              Investment Highlights
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h, i) => (
              <FadeUp key={h.title} delay={i * 0.08}>
                <div className="bg-white p-8 rounded shadow-sm hover:-translate-y-1 hover:shadow-md transition-all group">
                  <div className="mb-4">{h.icon}</div>
                  <h3 className="font-section text-xl text-[#0F1C2E] mb-3 group-hover:text-[#C9A96E] transition-colors">
                    {h.title}
                  </h3>
                  <p className="font-body text-[#6B7280] leading-relaxed text-sm">{h.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-20 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Revenue Model
            </p>
            <h2 className="font-section text-4xl text-white mb-12">수익 모델</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "SALE", label: "주거 분양", desc: "웰니스 레지던스 아파트 분양. 초기 자금 회수 + 브랜드 가치 상승 연동", color: "#C9A96E" },
              { type: "LEASE", label: "임대 수익", desc: "상업·오피스·F&B 공간 장기 임대. 안정적이고 예측 가능한 연간 수익", color: "#4ECDC4" },
              { type: "OPERATION", label: "운영 수익", desc: "온천·스파·관광·이벤트 시설 직접 운영. 방문객 수에 연동되는 성장형 수익", color: "#C9A96E" },
            ].map((r, i) => (
              <FadeUp key={r.type} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-8 rounded hover:border-[#C9A96E]/40 transition-colors text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center border-2" style={{ borderColor: r.color }}>
                    <span className="font-body text-xs tracking-widest" style={{ color: r.color }}>{r.type}</span>
                  </div>
                  <h3 className="font-section text-xl text-white mb-3">{r.label}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Effects */}
      <section className="py-16 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-10 text-center">
              Economic Impact
            </p>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {effects.map((e, i) => (
              <FadeUp key={e.label} delay={i * 0.1}>
                <StatCounter value={e.value} label={e.label} suffix={e.suffix} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Matrix */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Risk Management
            </p>
            <h2 className="font-section text-4xl text-[#0F1C2E] mb-10">리스크 관리 매트릭스</h2>
          </FadeUp>
          <div className="space-y-4">
            {risks.map((r, i) => (
              <FadeUp key={r.category} delay={i * 0.08}>
                <div className="bg-white p-6 rounded shadow-sm flex flex-col md:flex-row gap-4">
                  <div className="md:w-40 flex-shrink-0">
                    <p className="font-section text-lg text-[#0F1C2E]">{r.category}</p>
                    <span className={`font-body text-xs px-2 py-1 rounded mt-1 inline-block ${
                      r.level === "저" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      리스크 {r.level}
                    </span>
                  </div>
                  <div className="flex-1 border-l border-[#F8F6F2] pl-6">
                    <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-1">대응 전략</p>
                    <p className="font-body text-[#6B7280] text-sm leading-relaxed">{r.mitigation}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PageNav current="/investment" />
    </div>
  );
}
