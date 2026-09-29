const FONT = "var(--font-lobster), cursive";

const SWASH = "M462 262 C506 272 550 262 560 232 C568 206 544 192 528 204 C516 214 524 232 540 226";

const sticks = [
  { x1: 430, y1: 80, x2: 398, y2: 232 },
  { x1: 506, y1: 120, x2: 462, y2: 238 },
];

const words = [
  { text: "Doces", x: 28, y: 150, size: 132 },
  { text: "Pietra", x: 178, y: 268, size: 122 },
];

// Espiral do pirulito (arquimediana), do centro até a borda
function spiral(r: number, turns = 3) {
  const pts: string[] = [];
  const max = turns * Math.PI * 2;
  for (let t = 0; t <= max; t += 0.2) {
    const k = (r * t) / max;
    pts.push(`${(Math.cos(t) * k).toFixed(1)},${(Math.sin(t) * k).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

function Lollipop({ cx, cy, r, color, base }: { cx: number; cy: number; r: number; color: string; base: string }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <circle r={r} fill={base} />
      <path d={spiral(r)} fill="none" stroke={color} strokeWidth={r / 5} strokeLinecap="round" />
      <ellipse cx={-r * 0.35} cy={-r * 0.45} rx={r * 0.28} ry={r * 0.14} fill="#fff" opacity="0.55" transform="rotate(-30)" />
    </g>
  );
}

// Silhueta usada só para gerar os contornos (preto, branco e cinza) de adesivo
function Silhouette() {
  return (
    <>
      {sticks.map((l, i) => (
        <line key={i} {...l} />
      ))}
      <circle cx="506" cy="120" r="32" />
      <circle cx="430" cy="80" r="46" />
      <path d={SWASH} fill="none" />
      {words.map((w) => (
        <text key={w.text} x={w.x} y={w.y} fontSize={w.size} fontFamily={FONT}>
          {w.text}
        </text>
      ))}
      <path d="M78 206 Q72 178 96 176 Q104 158 122 166 Q144 162 146 184 Q160 196 146 208 L136 250 H90 Z" />
      <circle cx="116" cy="154" r="11" />
    </>
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 -12 600 334" className={className} role="img" aria-label="Doces Pietra">
      <defs>
        <linearGradient id="logo-text" x1="40" y1="0" x2="540" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d3141d" />
          <stop offset="0.45" stopColor="#e5281c" />
          <stop offset="0.62" stopColor="#f3700f" />
          <stop offset="1" stopColor="#ff9b1f" />
        </linearGradient>
        <linearGradient id="logo-shine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <g id="logo-silhouette" strokeLinejoin="round" strokeLinecap="round">
          <Silhouette />
        </g>
      </defs>

      <g transform="rotate(-5 300 165)">
        {/* contornos de adesivo: cinza > branco > preto */}
        <use href="#logo-silhouette" fill="#b9bcc2" stroke="#b9bcc2" strokeWidth="40" />
        <use href="#logo-silhouette" fill="#fff" stroke="#fff" strokeWidth="35" />
        <use href="#logo-silhouette" fill="#16101c" stroke="#16101c" strokeWidth="20" />

        {/* palitos */}
        {sticks.map((l, i) => (
          <line key={i} {...l} stroke="#f4efe6" strokeWidth="7" strokeLinecap="round" />
        ))}

        <Lollipop cx={506} cy={120} r={27} base="#ffd23a" color="#a8561b" />
        <Lollipop cx={430} cy={80} r={40} base="#fff" color="#e3202a" />

        {/* texto com degradê + brilho */}
        {words.map((w) => (
          <g key={w.text} fontSize={w.size} fontFamily={FONT}>
            <text x={w.x} y={w.y} fill="url(#logo-text)">
              {w.text}
            </text>
            <text x={w.x} y={w.y} fill="url(#logo-shine)">
              {w.text}
            </text>
          </g>
        ))}

        {/* arabesco no fim de "Pietra" */}
        <path d={SWASH} fill="none" stroke="#ff941c" strokeWidth="9" strokeLinecap="round" />

        {/* cupcake */}
        <g>
          <path d="M84 206 H142 L132 246 H94 Z" fill="#7a3d1c" />
          <path d="M98 206 L102 246 M113 206 V246 M128 206 L124 246" stroke="#5a2a10" strokeWidth="3" />
          <path d="M80 206 Q76 184 98 182 Q106 166 122 172 Q140 170 140 188 Q152 196 142 206 Z" fill="#f59ab5" />
          <path d="M92 190 Q104 184 112 192 M118 184 Q128 180 134 190" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M116 158 Q120 146 130 142" stroke="#3d7a1f" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="116" cy="160" r="8" fill="#e3202a" />
          <circle cx="113" cy="157" r="2.5" fill="#fff" opacity="0.8" />
        </g>
      </g>
    </svg>
  );
}
