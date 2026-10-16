import React, { useEffect, useRef } from 'react';

// ─── Individual floating tika dot ─────────────────────────────────────────────
interface TikaProps {
  style: React.CSSProperties;
}

const TikaDot: React.FC<TikaProps> = ({ style }) => (
  <div
    className="pointer-events-none absolute rounded-full"
    style={{
      background: 'radial-gradient(circle at 35% 35%, #ff6b6b, #cc1a1a 60%, #8b0000)',
      boxShadow: '0 0 6px 2px rgba(204,26,26,0.6), inset 0 -2px 4px rgba(0,0,0,0.4)',
      ...style,
    }}
  />
);

// ─── Jamara strand (single blade of sacred grass) ─────────────────────────────
interface JamaraProps {
  left: string;
  height: number;
  delay: number;
  opacity: number;
}

const JamaraStrand: React.FC<JamaraProps> = ({ left, height, delay, opacity }) => (
  <div
    className="pointer-events-none absolute bottom-0"
    style={{ left, opacity }}
  >
    <svg
      width="10"
      height={height}
      viewBox={`0 0 10 ${height}`}
      style={{
        transformOrigin: 'bottom center',
        animation: `jamara-sway 3s ease-in-out ${delay}s infinite alternate`,
      }}
    >
      {/* Blade shape */}
      <path
        d={`M5 ${height} C4 ${height * 0.7} 2 ${height * 0.5} 3 ${height * 0.2} C3.5 0 6.5 0 7 ${height * 0.2} C8 ${height * 0.5} 6 ${height * 0.7} 5 ${height}`}
        fill="url(#jamaraGrad)"
      />
      <defs>
        <linearGradient id="jamaraGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4a7c59" />
          <stop offset="50%" stopColor="#6abf69" />
          <stop offset="100%" stopColor="#d4e157" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// ─── Floating petal / marigold decoration ─────────────────────────────────────
interface PetalProps {
  style: React.CSSProperties;
  delay: number;
}

const FloatingPetal: React.FC<PetalProps> = ({ style, delay }) => (
  <div
    className="pointer-events-none absolute text-2xl sm:text-3xl select-none"
    style={{
      animation: `petal-fall 10s ease-in ${delay}s infinite`,
      ...style,
    }}
  >
    {['🌸', '🌼', '🌺', '🍂'][Math.floor(delay * 3) % 4]}
  </div>
);

// ─── Main Decorations Component ────────────────────────────────────────────────
export const DashainDecorations: React.FC = () => {
  const styleRef = useRef(false);

  // Inject keyframes once into <head>
  useEffect(() => {
    if (styleRef.current) return;
    styleRef.current = true;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes jamara-sway {
        0%   { transform: rotate(-8deg) scaleX(1); }
        100% { transform: rotate(8deg)  scaleX(0.95); }
      }

      @keyframes petal-fall {
        0%   { transform: translateY(-80px) rotate(0deg)   scale(1);    opacity: 0; }
        10%  { opacity: 0.9; }
        80%  { opacity: 0.7; }
        100% { transform: translateY(110vh) rotate(360deg) scale(0.6);  opacity: 0; }
      }

      @keyframes tika-float {
        0%,100% { transform: translateY(0px)   scale(1); }
        50%      { transform: translateY(-8px)  scale(1.08); }
      }

      @keyframes tika-glow {
        0%,100% { box-shadow: 0 0 6px 2px rgba(204,26,26,0.5); }
        50%      { box-shadow: 0 0 14px 5px rgba(204,26,26,0.8); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // ── Tika positions (random-feeling but deterministic) ──────────────────────
  const tikas = [
    { top: '12%',  left: '3%',  size: 14, delay: 0 },
    { top: '28%',  right: '4%', size: 10, delay: 1.2 },
    { top: '55%',  left: '5%',  size: 18, delay: 0.6 },
    { top: '72%',  right: '3%', size: 12, delay: 1.8 },
    { top: '40%',  left: '2%',  size: 8,  delay: 2.4 },
    { top: '85%',  left: '8%',  size: 16, delay: 0.3 },
    { top: '18%',  right: '6%', size: 20, delay: 1.5 },
  ];

  // ── Jamara grass at bottom ─────────────────────────────────────────────────
  const jamaraStrands = Array.from({ length: 28 }, (_, i) => ({
    left:    `${(i / 27) * 100}%`,
    height:  30 + Math.sin(i * 1.7) * 20,
    delay:   (i * 0.15) % 3,
    opacity: 0.55 + Math.cos(i * 0.8) * 0.25,
  }));

  // ── Falling petals ─────────────────────────────────────────────────────────
  const petals = [
    { left: '8%',   delay: 0 },
    { left: '22%',  delay: 2.5 },
    { left: '38%',  delay: 5.0 },
    { left: '52%',  delay: 1.2 },
    { left: '67%',  delay: 3.8 },
    { left: '80%',  delay: 0.7 },
    { left: '92%',  delay: 4.3 },
    { left: '14%',  delay: 7.0 },
    { left: '75%',  delay: 6.1 },
    { left: '44%',  delay: 8.5 },
  ];

  return (
    <>
      {/* ─── Full-page fixed decoration layer ───────────────────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
        aria-hidden="true"
      >
        {/* Floating tika dots on left & right edges */}
        {tikas.map((t, i) => (
          <TikaDot
            key={i}
            style={{
              top:    t.top,
              left:   (t as { left?: string }).left,
              right:  (t as { right?: string }).right,
              width:  t.size,
              height: t.size,
              animation: `tika-float 4s ease-in-out ${t.delay}s infinite, tika-glow 4s ease-in-out ${t.delay}s infinite`,
            }}
          />
        ))}

        {/* Falling petals */}
        {petals.map((p, i) => (
          <FloatingPetal
            key={i}
            style={{ left: p.left, top: '-60px' }}
            delay={p.delay}
          />
        ))}

        {/* Jamara grass strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-14 flex items-end">
          {jamaraStrands.map((j, i) => (
            <JamaraStrand key={i} {...j} />
          ))}
        </div>

        {/* Subtle warm dashain colour wash — top strip */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{
            background: 'linear-gradient(90deg, #8b1a1a 0%, #c4900a 30%, #f5c542 50%, #c4900a 70%, #8b1a1a 100%)',
            opacity: 0.85,
          }}
        />
        {/* Bottom strip mirror */}
        <div
          className="absolute bottom-14 left-0 right-0 h-0.5"
          style={{
            background: 'linear-gradient(90deg, #8b1a1a 0%, #c4900a 30%, #f5c542 50%, #c4900a 70%, #8b1a1a 100%)',
            opacity: 0.55,
          }}
        />

        {/* Tika vermilion ambient glow — left edge */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-80 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(196,30,30,0.12) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        {/* Marigold glow — right edge */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-80 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(245,197,66,0.10) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* ─── Dashain greeting banner (subtle, top-right) ──────────────────── */}
      <div
        className="pointer-events-none fixed top-16 right-4 z-40 hidden sm:flex flex-col items-end gap-1 opacity-90"
        aria-hidden="true"
      >
        <div
          className="px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-lg border"
          style={{
            background: 'linear-gradient(135deg, rgba(139,26,26,0.85), rgba(196,144,10,0.85))',
            borderColor: 'rgba(245,197,66,0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          🎉 शुभ दशैं २०८२ 🎉
        </div>
        <div className="text-[10px] text-[#f5c542] font-semibold pr-1 opacity-80">
          Vijaya Dashami ko Shubhakamana!
        </div>
      </div>
    </>
  );
};
