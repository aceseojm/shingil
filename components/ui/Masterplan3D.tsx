"use client";

// Oblique 3D projection: x=east, y=depth(south), z=height(up)
function proj(x: number, y: number, z: number): [number, number] {
  return [70 + x * 7 - y * 5, 425 + x * 2 + y * 3 - z * 7];
}

function pts(...c: [number, number, number][]): string {
  return c.map(([x, y, z]) => proj(x, y, z).join(",")).join(" ");
}

function Box(
  x0: number, y0: number, z0: number,
  w: number, d: number, h: number,
  color: string, active: boolean,
  gridH = 5
): React.ReactNode {
  const fo = active ? 0.22 : 0.07;
  const sw = active ? 1.5 : 0.8;
  const so = active ? 1 : 0.4;
  const gso = active ? 0.48 : 0.16;
  const lines: React.ReactNode[] = [];

  for (let iz = gridH; iz < h; iz += gridH) {
    const [ax, ay] = proj(x0, y0, z0 + iz);
    const [bx, by] = proj(x0 + w, y0, z0 + iz);
    lines.push(<line key={`h${iz}`} x1={ax} y1={ay} x2={bx} y2={by} stroke={color} strokeWidth="0.5" strokeOpacity={gso} />);
  }
  const vs = Math.max(1, Math.round(w / 3));
  for (let ix = vs; ix < w; ix += vs) {
    const [ax, ay] = proj(x0 + ix, y0, z0);
    const [bx, by] = proj(x0 + ix, y0, z0 + h);
    lines.push(<line key={`v${ix}`} x1={ax} y1={ay} x2={bx} y2={by} stroke={color} strokeWidth="0.5" strokeOpacity={gso} />);
  }

  return (
    <>
      {/* right face */}
      <polygon points={pts([x0+w,y0,z0],[x0+w,y0+d,z0],[x0+w,y0+d,z0+h],[x0+w,y0,z0+h])}
        fill={color} fillOpacity={fo*0.3} stroke={color} strokeWidth={sw*0.6} strokeOpacity={so*0.5} />
      {/* top face */}
      <polygon points={pts([x0,y0,z0+h],[x0+w,y0,z0+h],[x0+w,y0+d,z0+h],[x0,y0+d,z0+h])}
        fill={color} fillOpacity={fo*0.6} stroke={color} strokeWidth={sw*0.8} strokeOpacity={so*0.75} />
      {/* front face */}
      <polygon points={pts([x0,y0,z0],[x0+w,y0,z0],[x0+w,y0,z0+h],[x0,y0,z0+h])}
        fill={color} fillOpacity={fo} stroke={color} strokeWidth={sw} strokeOpacity={so} />
      {lines}
    </>
  );
}

interface Props {
  active: string;
  onZoneClick: (id: string) => void;
}

export default function Masterplan3D({ active, onZoneClick }: Props) {
  const CA = "#C9A96E";
  const CB = "#4ECDC4";
  const ia = (id: string) => active === id;

  // Bridge cross-bracing
  const bridgeLines: React.ReactNode[] = [];
  for (let i = 0; i < 6; i++) {
    const [ax, ay] = proj(16 + i * 2, 0, 43);
    const [bx, by] = proj(16 + i * 2 + 2, 0, 48);
    const [cx2, cy2] = proj(16 + i * 2 + 2, 0, 43);
    const [dx2, dy2] = proj(16 + i * 2, 0, 48);
    bridgeLines.push(
      <line key={`ba${i}`} x1={ax} y1={ay} x2={bx} y2={by} stroke={CB} strokeWidth={ia("B") ? "1.2" : "0.6"} strokeOpacity={ia("B") ? 0.85 : 0.35} />,
      <line key={`bb${i}`} x1={cx2} y1={cy2} x2={dx2} y2={dy2} stroke={CB} strokeWidth={ia("B") ? "1.2" : "0.6"} strokeOpacity={ia("B") ? 0.85 : 0.35} />
    );
  }
  // Bridge top grid
  const bridgeTopLines: React.ReactNode[] = [];
  for (let ix = 0; ix <= 12; ix += 2) {
    const [ax, ay] = proj(16 + ix, 0, 48); const [bx, by] = proj(16 + ix, 4, 48);
    bridgeTopLines.push(<line key={`btx${ix}`} x1={ax} y1={ay} x2={bx} y2={by} stroke={CB} strokeWidth="0.6" strokeOpacity={ia("B") ? 0.55 : 0.22} />);
  }
  for (let iy = 0; iy <= 4; iy++) {
    const [ax, ay] = proj(16, iy, 48); const [bx, by] = proj(28, iy, 48);
    bridgeTopLines.push(<line key={`bty${iy}`} x1={ax} y1={ay} x2={bx} y2={by} stroke={CB} strokeWidth="0.6" strokeOpacity={ia("B") ? 0.55 : 0.22} />);
  }

  // Label helper
  const label = (x: number, y: number, z: number, zoneText: string, subText: string, color: string, offsetX = 0) => {
    const [lx, ly] = proj(x, y, z);
    return (
      <>
        <text x={lx + offsetX} y={ly - 14} fill={color} fillOpacity={ia(zoneText.slice(-1)) ? 1 : 0.7}
          fontSize="9.5" fontWeight="bold" textAnchor="middle"
          style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "0.18em" }}>
          {zoneText}
        </text>
        <text x={lx + offsetX} y={ly - 3} fill="#ffffff" fillOpacity="0.4"
          fontSize="7.5" textAnchor="middle"
          style={{ fontFamily: "DM Sans, sans-serif" }}>
          {subText}
        </text>
      </>
    );
  };

  return (
    <svg viewBox="0 0 660 560" className="w-full select-none" style={{ display: "block" }}>
      {/* Background */}
      <rect width="660" height="560" fill="#0B1426" rx="12" />

      {/* Subtle star dots */}
      {[...Array(25)].map((_, i) => (
        <circle key={i} cx={15 + i * 26} cy={12 + (i % 4) * 9} r="0.8" fill="#ffffff" fillOpacity={0.08 + (i % 3) * 0.06} />
      ))}

      <defs>
        <filter id="mp-glow-b" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="mp-glow-a" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ground grid lines */}
      {[0, 1, 2, 3, 4].map(iy => {
        const [ax, ay] = proj(0, iy, 0); const [bx, by] = proj(55, iy, 0);
        return <line key={iy} x1={ax} y1={ay} x2={bx} y2={by} stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.05" />;
      })}

      {/* ── ZONE A ── */}
      <g onClick={() => onZoneClick("A")} style={{ cursor: "pointer" }} filter={ia("A") ? "url(#mp-glow-a)" : undefined}>
        {Box(1, 0, 0, 3, 3, 38, CA, ia("A"), 5)}
        {Box(5, 0, 0, 3, 3, 33, CA, ia("A"), 5)}
        {Box(9, 0, 0, 3, 3, 28, CA, ia("A"), 5)}
        {Box(1, 0, 0, 11, 3, 3, CA, ia("A"), 999)}
        {label(6, 0, 42, "ZONE A", "주상복합 50F", CA)}
      </g>

      {/* ── ZONE B ── */}
      <g onClick={() => onZoneClick("B")} style={{ cursor: "pointer" }} filter={ia("B") ? "url(#mp-glow-b)" : undefined}>
        {Box(16, 0, 0, 5, 4, 50, CB, ia("B"), 4)}
        {Box(23, 0, 0, 5, 4, 50, CB, ia("B"), 4)}
        {/* Sky bridge body */}
        {Box(16, 0, 43, 12, 4, 5, CB, ia("B"), 999)}
        {bridgeLines}
        {bridgeTopLines}
        {Box(14, 0, 0, 16, 4, 3, CB, ia("B"), 999)}
        {label(22, 0, 57, "ZONE B", "50F Twin Tower", CB)}
      </g>

      {/* ── ZONE D ── */}
      <g onClick={() => onZoneClick("D")} style={{ cursor: "pointer" }} filter={ia("D") ? "url(#mp-glow-b)" : undefined}>
        {Box(35, 0, 0, 4, 3, 25, CB, ia("D"), 4)}
        {Box(33, 0, 0, 8, 3, 4, CB, ia("D"), 999)}
        {/* Connector platform from B to D */}
        {Box(30, 2, 0, 12, 2, 2, CB, ia("D") || ia("B"), 999)}
        {label(37, 0, 29, "ZONE D", "신길온천 역사 30층", CB, 16)}
      </g>

      {/* ── ZONE C ── */}
      <g onClick={() => onZoneClick("C")} style={{ cursor: "pointer" }} filter={ia("C") ? "url(#mp-glow-a)" : undefined}>
        {Box(44, 0, 0, 6, 3, 12, CA, ia("C"), 3)}
        {Box(35, 3, 0, 16, 2, 2, CA, ia("C"), 999)}
        {Box(35, 5, 0, 16, 2, 2, CA, ia("C"), 999)}
        {label(49, 0, 16, "ZONE C", "족욕파크 & 스파", CA)}
      </g>

      {/* 신길온천역 station label */}
      {(() => {
        const [lx, ly] = proj(20, 0, 0);
        return (
          <g>
            <rect x={lx - 55} y={ly + 5} width={110} height={14} rx="2"
              fill="#C9A96E18" stroke="#C9A96E" strokeWidth="0.7" strokeOpacity="0.45" strokeDasharray="5,3" />
            <text x={lx} y={ly + 14} fill="#C9A96E" fillOpacity="0.75" fontSize="7.5"
              textAnchor="middle" fontWeight="bold" style={{ fontFamily: "DM Sans, sans-serif" }}>
              신길온천역 (4호선)
            </text>
          </g>
        );
      })()}

      {/* Hint */}
      <text x="330" y="548" fill="#ffffff" fillOpacity="0.18" fontSize="8"
        textAnchor="middle" style={{ fontFamily: "DM Sans, sans-serif" }}>
        각 Zone을 클릭하면 상세 정보를 볼 수 있습니다
      </text>
    </svg>
  );
}
