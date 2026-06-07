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

const roleColors = {
  안산시: {
    accent: "#C9A96E",
    bg: "rgba(201,169,110,0.07)",
    border: "rgba(201,169,110,0.25)",
    tag: "rgba(201,169,110,0.15)",
  },
  온천발견자: {
    accent: "#4ECDC4",
    bg: "rgba(78,205,196,0.07)",
    border: "rgba(78,205,196,0.25)",
    tag: "rgba(78,205,196,0.15)",
  },
};

type EventItem = { title: string; desc: string; highlight?: boolean };

const yearGroups: Array<{ year: number; 안산시: EventItem[]; 온천발견자: EventItem[] }> = [
  {
    year: 1982,
    안산시: [{ title: "굴착 허가 후 온천발견 신고수리 거부", desc: "안산시(시흥군)에 굴착 허가 및 온천수 발견. 안산시 온천발견 신고수리 거부" }],
    온천발견자: [{ title: "토지주와 공동사업약정 및 굴착 투자", desc: "토지주와 토지분할 공동사업약정, 토지 지장물 3년치 보상. 굴착하가 후 당시 약 32억 투자 (면적 약 98,000평)" }],
  },
  {
    year: 1985,
    안산시: [{ title: "신길온천 토지 수자원공사 수용", desc: "신길온천 토지가 수자원공사에 의해 수용됨" }],
    온천발견자: [],
  },
  {
    year: 1988,
    안산시: [],
    온천발견자: [{ title: "대법원 온천발견자 승소", desc: "신길온천 발견신고수리 거부 부당판결 — 대법원에서 온천발견자 승소" }],
  },
  {
    year: 1992,
    안산시: [{
      title: "온천발견 신고수리 — 온천개발 법적 의무 발생",
      desc: "법률적·행정적으로 온천개발의무 토지가 됨. 안산시의 온천 지구지정 및 개발계획수립 법적 의무 발생 — 2026년 현재까지 미이행",
      highlight: true,
    }],
    온천발견자: [],
  },
  {
    year: 1993,
    안산시: [],
    온천발견자: [{ title: "수자원공사로부터 사업토지 매수 완료", desc: "안산시 온천개발을 위해 수자원공사로부터 본 사업토지매수 완료" }],
  },
  {
    year: 1998,
    안산시: [],
    온천발견자: [{ title: "정창술 박사 타계 — 상속자 관리승계", desc: "12월 온천발견자 정창술 박사 타계. 상속자들 관리승계" }],
  },
  {
    year: 2000,
    안산시: [{ title: "지하철 4호선 신길온천역 개통", desc: "수도권 전철 4호선 신길온천역으로 역명 지정 및 개통" }],
    온천발견자: [],
  },
  {
    year: 2005,
    안산시: [],
    온천발견자: [{ title: "국토부와 협의 → 국민임대주택 해제", desc: "국토부와 발견자 간 상호협의로 국민임대주택 지정 해제" }],
  },
  {
    year: 2006,
    안산시: [{ title: "국토부 → 국민임대주택 지정", desc: "국토부로부터 신길온천 부지 국민임대주택 지정" }],
    온천발견자: [],
  },
  {
    year: 2016,
    안산시: [],
    온천발견자: [{ title: "국민권익위원회 상속인정 및 온천개발구 의결", desc: "국민권익위원회 상속인정과 온천개발구 의결" }],
  },
  {
    year: 2020,
    안산시: [],
    온천발견자: [{ title: "경기도 행정심판 — 지위승계 인정 승소", desc: "경기도 행정심판위원회 온천발견자 지위승계 인정(승소)" }],
  },
  {
    year: 2023,
    안산시: [{ title: "소송 및 온천개발협의 진행 중", desc: "안산시와 소송 및 온천개발협의 진행 중" }],
    온천발견자: [{ title: "집행정지 가처분 2건 승소", desc: "온천공 원상회복 소송에서 2건의 집행정지 가처분 승소" }],
  },
  {
    year: 2024,
    안산시: [{ title: "대법원 — 온천발견자 승소 2, 패소 1", desc: "대법원 처분사유 중, 온천발견자 승소 2 패소 1", highlight: true }],
    온천발견자: [],
  },
  {
    year: 2025,
    안산시: [],
    온천발견자: [{
      title: "온천공 원상회복 소송 집행정지 가처분 2건 승소",
      desc: "온천발견자 측 온천공 원상회복 소송에서 2건의 집행정지 가처분 승소. 신길온천부지 소송 종료로 온천개발 본래 용도로의 개발 재개 동기 확보",
      highlight: true,
    }],
  },
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
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Development History
            </p>
            <h2 className="font-section text-4xl text-white mb-3">40년 개발 연혁</h2>
            <p className="font-body text-sm text-white/40 mb-12">신길온천 추진현황 — 사실에 입각한 기록</p>
          </FadeUp>

          {/* 역할 범례 */}
          <FadeUp delay={0.05}>
            <div className="flex gap-6 mb-14">
              {(["안산시", "온천발견자"] as const).map((role) => (
                <div key={role} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: roleColors[role].accent }} />
                  <span className="font-body text-sm font-bold" style={{ color: roleColors[role].accent }}>{role}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* 두 줄 타임라인 */}
          <div className="relative">
            {/* 중앙 세로선 (데스크탑) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-6">
              {yearGroups.map((group, gi) => (
                <FadeUp key={group.year} delay={gi * 0.05}>
                  {/* 데스크탑: 좌(안산시) | 연도 | 우(온천발견자) */}
                  <div className="hidden md:grid grid-cols-[1fr_64px_1fr] items-start gap-0">
                    {/* 안산시 (left, right-aligned) */}
                    <div className="pr-8 flex justify-end">
                      {group.안산시.length > 0 ? (
                        <div
                          className="p-4 rounded-lg border max-w-sm w-full"
                          style={{
                            backgroundColor: group.안산시[0].highlight ? "rgba(232,137,60,0.14)" : roleColors.안산시.bg,
                            borderColor: roleColors.안산시.border,
                          }}
                        >
                          <div className="flex items-center justify-end gap-2 mb-1.5 flex-wrap">
                            <p className="font-body text-sm font-semibold text-white/90 text-right">{group.안산시[0].title}</p>
                            <span className="font-body text-[10px] px-2 py-0.5 rounded font-bold flex-shrink-0"
                              style={{ backgroundColor: roleColors.안산시.tag, color: roleColors.안산시.accent }}>
                              안산시
                            </span>
                          </div>
                          <p className="font-body text-xs text-white/45 leading-relaxed text-right">{group.안산시[0].desc}</p>
                        </div>
                      ) : <div />}
                    </div>

                    {/* 연도 (center) */}
                    <div className="flex flex-col items-center pt-3 flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-[#0F1C2E] border border-white/20 flex items-center justify-center z-10">
                        <span className="font-body text-[11px] text-white/55 font-bold leading-tight text-center">{group.year}</span>
                      </div>
                    </div>

                    {/* 온천발견자 (right) */}
                    <div className="pl-8">
                      {group.온천발견자.length > 0 ? (
                        <div
                          className="p-4 rounded-lg border max-w-sm w-full"
                          style={{
                            backgroundColor: group.온천발견자[0].highlight ? "rgba(74,158,214,0.15)" : roleColors.온천발견자.bg,
                            borderColor: roleColors.온천발견자.border,
                          }}
                        >
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className="font-body text-[10px] px-2 py-0.5 rounded font-bold flex-shrink-0"
                              style={{ backgroundColor: roleColors.온천발견자.tag, color: roleColors.온천발견자.accent }}>
                              온천발견자
                            </span>
                            <p className="font-body text-sm font-semibold text-white/90">{group.온천발견자[0].title}</p>
                          </div>
                          <p className="font-body text-xs text-white/45 leading-relaxed">{group.온천발견자[0].desc}</p>
                        </div>
                      ) : <div />}
                    </div>
                  </div>

                  {/* 모바일: 세로 쌓기 */}
                  <div className="md:hidden">
                    <div className="font-body text-base font-bold text-white/30 mb-3">{group.year}</div>
                    <div className="space-y-2 pl-4 border-l-2 border-white/10">
                      {group.안산시.map((ev) => (
                        <div key={ev.title} className="p-3 rounded-lg border"
                          style={{ backgroundColor: roleColors.안산시.bg, borderColor: roleColors.안산시.border }}>
                          <span className="font-body text-[10px] px-2 py-0.5 rounded font-bold mb-1.5 inline-block"
                            style={{ backgroundColor: roleColors.안산시.tag, color: roleColors.안산시.accent }}>
                            안산시
                          </span>
                          <p className="font-body text-sm font-semibold text-white/90 mb-1">{ev.title}</p>
                          <p className="font-body text-xs text-white/45 leading-relaxed">{ev.desc}</p>
                        </div>
                      ))}
                      {group.온천발견자.map((ev) => (
                        <div key={ev.title} className="p-3 rounded-lg border"
                          style={{ backgroundColor: roleColors.온천발견자.bg, borderColor: roleColors.온천발견자.border }}>
                          <span className="font-body text-[10px] px-2 py-0.5 rounded font-bold mb-1.5 inline-block"
                            style={{ backgroundColor: roleColors.온천발견자.tag, color: roleColors.온천발견자.accent }}>
                            온천발견자
                          </span>
                          <p className="font-body text-sm font-semibold text-white/90 mb-1">{ev.title}</p>
                          <p className="font-body text-xs text-white/45 leading-relaxed">{ev.desc}</p>
                        </div>
                      ))}
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
