import React, { useEffect, useRef } from 'react';

// ─── DashainSwing — the traditional "ping" / linge ping ─────────────────────
//
//  Frame:  two tall posts connected by a rope at top
//  Seat:   wooden plank suspended by two ropes
//  Person: silhouette who swings back and forth
//
export const DashainSwing: React.FC = () => {
  const styleRef = useRef(false);

  useEffect(() => {
    if (styleRef.current) return;
    styleRef.current = true;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes swing-arc {
        0%   { transform: rotate(-32deg); }
        50%  { transform: rotate(32deg);  }
        100% { transform: rotate(-32deg); }
      }
      @keyframes swing-rope {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
      }
      @keyframes post-sway {
        0%,100% { transform: scaleY(1); }
        50%     { transform: scaleY(1.003); }
      }
      @keyframes swing-shadow {
        0%   { transform: scaleX(0.6) translateX(-60%); opacity:0.18; }
        50%  { transform: scaleX(1.0) translateX(0%);   opacity:0.10; }
        100% { transform: scaleX(0.6) translateX(60%);  opacity:0.18; }
      }
      @keyframes flag-wave {
        0%,100% { transform: skewY(-4deg) scaleX(1);   }
        50%      { transform: skewY( 4deg) scaleX(0.92); }
      }
      @keyframes marigold-garland {
        0%,100% { transform: rotate(-4deg); }
        50%      { transform: rotate( 4deg); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // swing animation duration (seconds) — nice slow human rhythmic swing
  const SWING_DUR = '3.4s';

  return (
    <div
      className="pointer-events-none fixed bottom-14 right-4 sm:right-8 z-35"
      aria-hidden="true"
      style={{ width: 160, height: 230 }}
    >
      <svg
        viewBox="0 0 160 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        overflow="visible"
      >
        {/* ── Marigold garland between the two posts ── */}
        <g style={{ animation: `marigold-garland ${SWING_DUR} ease-in-out infinite`, transformOrigin: '80px 30px' }}>
          {/* Catenary curve for garland */}
          {Array.from({ length: 11 }).map((_, i) => {
            const x = 14 + i * 13.2;
            const y = 28 + Math.pow((i - 5) * 0.6, 2) * 2.2;
            const colors = ['#f5c542', '#e67e22', '#f5c542', '#e74c3c', '#f5c542'];
            return (
              <circle
                key={i}
                cx={x} cy={y}
                r={5}
                fill={colors[i % colors.length]}
                opacity={0.85}
                stroke="rgba(0,0,0,0.2)"
                strokeWidth={0.5}
              />
            );
          })}
          {/* Garland string */}
          <path
            d="M14 24 Q46 36 80 28 Q114 20 146 24"
            stroke="#a0522d"
            strokeWidth={1}
            opacity={0.5}
            strokeDasharray="2 1"
          />
        </g>

        {/* ── Left post ── */}
        <g style={{ animation: 'post-sway 3.4s ease-in-out infinite', transformOrigin: '14px 120px' }}>
          {/* Post shadow */}
          <rect x={10} y={16} width={8} height={190} rx={3} fill="rgba(0,0,0,0.2)" />
          {/* Post wood grain */}
          <rect x={8} y={14} width={8} height={190} rx={3}
            fill="url(#postGrad)" />
          {/* Post cap */}
          <rect x={5} y={12} width={14} height={6} rx={2} fill="#5d3a1a" />
          {/* Decorative ribbon left */}
          <rect x={7} y={60} width={10} height={4} rx={1} fill="#cc1a1a" opacity={0.8}/>
          <rect x={7} y={90} width={10} height={4} rx={1} fill="#f5c542" opacity={0.8}/>
          <rect x={7} y={120} width={10} height={4} rx={1} fill="#cc1a1a" opacity={0.8}/>
        </g>

        {/* ── Right post ── */}
        <g style={{ animation: 'post-sway 3.4s ease-in-out 0.1s infinite', transformOrigin: '146px 120px' }}>
          <rect x={138} y={16} width={8} height={190} rx={3} fill="rgba(0,0,0,0.2)" />
          <rect x={138} y={14} width={8} height={190} rx={3} fill="url(#postGrad)" />
          <rect x={135} y={12} width={14} height={6} rx={2} fill="#5d3a1a" />
          <rect x={137} y={60} width={10} height={4} rx={1} fill="#cc1a1a" opacity={0.8}/>
          <rect x={137} y={90} width={10} height={4} rx={1} fill="#f5c542" opacity={0.8}/>
          <rect x={137} y={120} width={10} height={4} rx={1} fill="#cc1a1a" opacity={0.8}/>
        </g>

        {/* ── Swing (ropes + seat + person) — all pivot together ── */}
        <g
          style={{
            animation: `swing-arc ${SWING_DUR} ease-in-out infinite`,
            transformOrigin: '80px 24px',     // pivot = top crossbar
          }}
        >
          {/* Left suspension rope */}
          <line x1={55} y1={24} x2={64} y2={130} stroke="#8b6914" strokeWidth={1.8} strokeLinecap="round" />
          {/* Right suspension rope */}
          <line x1={105} y1={24} x2={96} y2={130} stroke="#8b6914" strokeWidth={1.8} strokeLinecap="round" />

          {/* Seat plank */}
          <rect x={57} y={130} width={46} height={7} rx={2.5}
            fill="url(#seatGrad)" stroke="#5d3a1a" strokeWidth={0.8} />

          {/* ── Person silhouette ── */}
          {/* Body */}
          <rect x={73} y={103} width={14} height={28} rx={4}
            fill="#1a237e" />   {/* deep blue daura-suruwal ish */}
          {/* Dupatta / sari flutter effect */}
          <path d="M73 115 Q60 120 63 130 L73 128 Z" fill="#cc1a1a" opacity={0.85} />
          {/* Head */}
          <circle cx={80} cy={97} r={9} fill="#d4936a" />
          {/* Hair */}
          <ellipse cx={80} cy={91} rx={8.5} ry={5.5} fill="#1a0a00" />
          {/* Tika on forehead! */}
          <circle cx={80} cy={93} r={2.5}
            fill="#cc1a1a"
            style={{ filter: 'drop-shadow(0 0 2px rgba(255,50,50,0.7))' }}
          />
          {/* Jamara on head */}
          <path d="M78 89 Q77 82 79 80 M80 89 Q80 81 81 79 M82 89 Q83 82 84 80"
            stroke="#6abf69" strokeWidth={1.2} strokeLinecap="round" />
          {/* Arms out — joyful swing pose */}
          <path d="M73 112 Q60 106 55 100" stroke="#d4936a" strokeWidth={3} strokeLinecap="round" />
          <path d="M87 112 Q100 106 105 100" stroke="#d4936a" strokeWidth={3} strokeLinecap="round" />
          {/* Legs dangling */}
          <path d="M76 137 Q74 148 72 155" stroke="#1a237e" strokeWidth={4} strokeLinecap="round"/>
          <path d="M84 137 Q86 148 88 155" stroke="#1a237e" strokeWidth={4} strokeLinecap="round"/>
          {/* Feet */}
          <ellipse cx={71} cy={157} rx={5} ry={3} fill="#5d3a1a" />
          <ellipse cx={89} cy={157} rx={5} ry={3} fill="#5d3a1a" />
        </g>

        {/* ── Ground shadow ── */}
        <ellipse
          cx={80} cy={208}
          rx={40} ry={6}
          fill="rgba(0,0,0,0.2)"
          style={{ animation: `swing-shadow ${SWING_DUR} ease-in-out infinite` }}
        />

        {/* ── Ground line ── */}
        <line x1={0} y1={207} x2={160} y2={207} stroke="#4a7c59" strokeWidth={2} opacity={0.6}/>

        {/* ── Ground grass tufts ── */}
        {[8, 20, 36, 50, 65, 80, 95, 110, 125, 140, 155].map((x, i) => (
          <path
            key={i}
            d={`M${x} 207 Q${x - 3} 200 ${x - 1} 196 M${x + 2} 207 Q${x + 2} 199 ${x + 4} 195`}
            stroke="#4a7c59"
            strokeWidth={1.2}
            strokeLinecap="round"
            opacity={0.7}
            style={{
              animation: `jamara-sway 3s ease-in-out ${(i * 0.22) % 2}s infinite alternate`,
              transformOrigin: `${x}px 207px`,
            }}
          />
        ))}

        {/* ── Gradient defs ── */}
        <defs>
          <linearGradient id="postGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#7d4b1e" />
            <stop offset="40%"  stopColor="#a0662a" />
            <stop offset="100%" stopColor="#7d4b1e" />
          </linearGradient>
          <linearGradient id="seatGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#a0662a" />
            <stop offset="100%" stopColor="#5d3a1a" />
          </linearGradient>
        </defs>

        {/* ── Small flags on posts ── */}
        {/* Left flag */}
        <g style={{ animation: `flag-wave 2s ease-in-out infinite`, transformOrigin: '14px 22px' }}>
          <path d="M14 18 L30 22 L14 26 Z" fill="#cc1a1a" opacity={0.9} />
        </g>
        {/* Right flag */}
        <g style={{ animation: `flag-wave 2s ease-in-out 0.5s infinite`, transformOrigin: '146px 22px' }}>
          <path d="M146 18 L130 22 L146 26 Z" fill="#f5c542" opacity={0.9} />
        </g>
      </svg>

      {/* Label beneath swing */}
      <div className="text-center mt-1">
        <span
          className="text-[9px] font-bold px-2 py-0.5 rounded-full"
          style={{
            background: 'rgba(196,144,10,0.20)',
            border: '1px solid rgba(196,144,10,0.40)',
            color: '#f5c542',
            backdropFilter: 'blur(6px)',
          }}
        >
          🎡 Dashain Ping
        </span>
      </div>
    </div>
  );
};
