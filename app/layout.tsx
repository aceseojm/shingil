import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";

export const metadata: Metadata = {
  title: "The Wonder Castle — 신길온천 스프링 개발 프로젝트",
  description: "수도권 유일의 미래형 웰니스 복합도시. 경기도 안산시 신길온천역 직결 86,000㎡ 초역세권 개발 프로젝트.",
  openGraph: {
    title: "The Wonder Castle — 신길온천 스프링 개발 프로젝트",
    description: "40년간 잠든 온천 자원 + 초역세권 입지 = 수도권 유일의 미래형 웰니스 랜드마크",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
