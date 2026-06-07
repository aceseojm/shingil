"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import PageNav from "@/components/ui/PageNav";
import { Mail, Phone, MapPin } from "lucide-react";

const conclusions = [
  {
    code: "K-WELLNESS LANDMARK",
    title: "국내 유일의 K-웰니스 랜드마크",
    desc: "신길온천은 40년간 잠든 자원과 초역세권 입지를 결합해 한국 최초의 본격적인 K-Wellness 복합 랜드마크를 탄생시킬 수 있는 유일한 기회입니다.",
  },
  {
    code: "GREEN INFRASTRUCTURE",
    title: "친환경 미래형 도시 인프라",
    desc: "Bio-Dome과 Green Spine을 중심으로 한 친환경 도시 인프라는 탄소중립 시대에 부합하는 지속가능한 개발 모델로서 글로벌 스탠더드를 선도합니다.",
  },
  {
    code: "GOVERNANCE",
    title: "민관·시민 협력 거버넌스",
    desc: "안산시, 민간 개발사, 지역 주민이 함께 설계하고 운영하는 참여형 개발 모델. 지역 수용성과 지속가능성을 동시에 확보합니다.",
  },
  {
    code: "URBAN TRANSFORMATION",
    title: "도시 전환의 핵심 프로젝트",
    desc: "산업도시 안산에서 웰니스 도시 안산으로의 전환. 이 프로젝트는 안산의 미래 40년을 결정하는 도시 혁신의 마지막 퍼즐입니다.",
  },
];

const roadmap = [
  { step: "01", label: "기획", desc: "마스터플랜 확정, 투자 구조 설계" },
  { step: "02", label: "설계", desc: "건축·환경 설계, 인허가 신청" },
  { step: "03", label: "준비", desc: "착공 준비, 분양 마케팅 시작" },
  { step: "04", label: "운영", desc: "단계별 오픈, 브랜드 런칭" },
];

const staticTextLines = [
  "신길온천은",
  "안산을 재도약시킬",
  "마지막 퍼즐입니다."
];

export default function ConclusionPage() {
  return (
    <div className="bg-[#F8F6F2]">
      {/* Community Hero with Image Overlay */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/conclusion-bg.png"
          alt="Community top image"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C2E]/15 via-[#0F1C2E]/30 to-[#0F1C2E]/50" />

        <div className="absolute inset-0 z-10 flex items-center justify-start px-6 md:px-10">
          <div className="w-full max-w-3xl text-left text-white space-y-2 lg:pl-10 xl:pl-16">
            <p className="font-body text-xs tracking-[0.35em] uppercase text-[#C9A96E] mb-4">
              Community & Vision
            </p>
            {staticTextLines.map((line, idx) => (
              <p key={idx} className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight ${idx > 0 ? "mt-2" : ""}`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-10">
              Key Conclusions
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conclusions.map((c, i) => (
              <FadeUp key={c.code} delay={i * 0.1}>
                <div className="bg-white p-8 rounded shadow-sm hover:shadow-md transition-shadow group">
                  <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-3">{c.code}</p>
                  <h3 className="font-section text-xl text-[#0F1C2E] mb-3 group-hover:text-[#C9A96E] transition-colors">
                    {c.title}
                  </h3>
                  <p className="font-body text-[#0F1C2E]/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="participation" className="py-20 px-6 bg-[#0F1C2E]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
              Participation Roadmap
            </p>
            <h2 className="font-section text-4xl text-white mb-12">주민 참여 로드맵</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {roadmap.map((r, i) => (
              <FadeUp key={r.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#C9A96E] flex items-center justify-center mx-auto mb-4">
                    <span className="font-body text-xs text-[#C9A96E] tracking-widest">Step {r.step}</span>
                  </div>
                  <h3 className="font-section text-xl text-white mb-2">{r.label}</h3>
                  <p className="font-body text-white/50 text-sm">{r.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <FadeUp className="flex-1">
              <p className="font-body text-xs text-[#C9A96E] tracking-[0.3em] uppercase mb-4">
                Contact
              </p>
              <h2 className="font-section text-5xl text-[#0F1C2E] mb-6">
                함께<br />시작합니다.
              </h2>
              <p className="font-body text-[#0F1C2E]/50 leading-relaxed mb-2 font-semibold">
                Sohun Development Co., LTD.
              </p>
              <p className="font-body text-[#0F1C2E]/50 leading-relaxed mb-8 max-w-md">
                투자 문의, 협력 제안, 기관 협의 등 어떤 형태의 참여도 환영합니다. 신길온천 Wonder Castle과 함께 수도권 최고의 웰니스 랜드마크를 만들어가세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contact@sohun-dev.com"
                  className="px-8 py-4 bg-[#0F1C2E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-all"
                >
                  투자 문의하기
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border border-[#0F1C2E] text-[#0F1C2E] font-body text-sm tracking-widest uppercase hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
                >
                  제안서 다운로드
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="flex-1">
              <div className="bg-[#0F1C2E] p-10 rounded-2xl space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#C9A96E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-1">ADDRESS</p>
                    <p className="font-body text-white/80 text-sm">경기도 안산시 단원구 신길동 일원</p>
                    <p className="font-body text-white/50 text-xs mt-0.5">수도권 전철 4호선 신길온천역 직결</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[#C9A96E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-1">PHONE</p>
                    <a href="tel:031-704-2262" className="font-body text-white/80 text-sm hover:text-[#C9A96E] transition-colors">
                      031.704.2262
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-[#C9A96E] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-body text-xs text-[#C9A96E] tracking-widest mb-1">EMAIL</p>
                    <a href="mailto:contact@sohun-dev.com" className="font-body text-white/80 text-sm hover:text-[#C9A96E] transition-colors">
                      contact@sohun-dev.com
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-body text-xs text-white/30 leading-relaxed">
                    본 자료는 실제 개발에 따라 변경될 수 있으며, 작성자의 허락 없이 사용할 수 없습니다.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Final Links */}
      <section className="border-t border-[#0F1C2E]/10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Link
              href="/"
              className="font-body text-xs text-[#C9A96E] tracking-widest uppercase hover:text-[#0F1C2E] transition-colors"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
