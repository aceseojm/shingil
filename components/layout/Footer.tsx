import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1C2E] text-white/60 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="font-display text-2xl text-white tracking-widest uppercase mb-2">
              The Wonder Castle
            </p>
            <p className="font-body text-sm text-[#C9A96E]">
              신길온천 스프링 개발 프로젝트
            </p>
          </div>
          <div className="space-y-1 text-sm font-body">
            <p className="text-white/80 font-medium">Sohun Development Co., LTD.</p>
            <p>경기도 안산시 단원구 신길동 일원</p>
            <p>수도권 전철 4호선 신길온천역 직결</p>
            <a href="tel:031-704-2262" className="text-[#C9A96E] hover:text-white transition-colors">T. 031.704.2262</a>
            <a href="mailto:contact@sohun-dev.com" className="block text-[#C9A96E] hover:text-white transition-colors">E. contact@sohun-dev.com</a>
          </div>
          <div className="flex flex-col gap-2 text-sm font-body">
            <Link href="/overview" className="hover:text-white transition-colors">Project Overview</Link>
            <Link href="/investment" className="hover:text-white transition-colors">Investment</Link>
            <Link href="/conclusion" className="hover:text-white transition-colors">투자 문의</Link>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs font-body leading-relaxed">
            본 사이트는 프로젝트 제안 단계에서 작성되었으며, 실제 서비스 제공 일부 내용이 다를 수 있습니다.
          </p>
          <p className="text-xs font-body mt-2">
            © 2026 The Wonder Castle — Singil Spring Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
