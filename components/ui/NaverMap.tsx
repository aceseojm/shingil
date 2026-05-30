"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    naver: {
      maps: {
        Map: new (el: HTMLElement, opts: object) => object;
        LatLng: new (lat: number, lng: number) => object;
        Marker: new (opts: object) => object;
        InfoWindow: new (opts: object) => { open: (map: object, marker: object) => void };
      };
    };
  }
}

/* 신길온천역 좌표 */
const LAT = 37.32205;
const LNG = 126.84180;

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !mapRef.current || !window.naver) return;

    const map = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(LAT, LNG),
      zoom: 16,
      mapTypeId: "normal",
    });

    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(LAT, LNG),
      map,
      title: "The Wonder Castle — 신길온천",
    });

    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="padding:12px 16px;font-family:'DM Sans',sans-serif;min-width:180px;">
          <p style="font-size:11px;color:#C9A96E;letter-spacing:0.15em;margin:0 0 4px;">THE WONDER CASTLE</p>
          <p style="font-size:14px;font-weight:600;color:#0F1C2E;margin:0 0 2px;">신길온천역</p>
          <p style="font-size:12px;color:#6B7280;margin:0;">경기도 안산시 단원구 신길동</p>
        </div>
      `,
    });

    infoWindow.open(map, marker);
  }, [loaded]);

  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID ?? "";

  if (!clientId) {
    return (
      <div className="w-full aspect-video bg-[#0F1C2E] flex flex-col items-center justify-center gap-4 rounded-xl">
        <p className="font-body text-white/50 text-sm">네이버 지도 API 키 필요</p>
        <a
          href={`https://map.naver.com/p/search/신길온천역?c=15,0,0,0,dh`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#C9A96E] text-[#C9A96E] font-body text-xs tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#0F1C2E] transition-all"
        >
          네이버 지도에서 보기 →
        </a>
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`}
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />
      <div ref={mapRef} className="w-full rounded-xl overflow-hidden" style={{ height: "450px" }} />
    </>
  );
}
