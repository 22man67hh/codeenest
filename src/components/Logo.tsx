import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showTagline = true,
  size = 'md' 
}) => {
  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }[size];

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  }[size];

  const tagSizeClasses = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[11px] tracking-widest',
    lg: 'text-xs tracking-widest'
  }[size];

  return (
    <a href="#home" className={`group flex items-center gap-3 select-none ${className}`}>
      {/* Code bracket + Nest concept icon */}
      <div className={`relative flex items-center justify-center ${iconSizeClasses}`}>
        {/* Glow ambient background */}
        <div className="absolute inset-0 bg-electric/30 blur-md rounded-xl group-hover:bg-electric/60 transition-all duration-300"></div>
        
        {/* SVG Icon */}
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full drop-shadow-[0_0_10px_rgba(0,180,216,0.8)]"
        >
          {/* Outer nest cradle curve base */}
          <path 
            d="M8 28C10 38 18 42 24 42C30 42 38 38 40 28" 
            stroke="#00b4d8" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            className="opacity-90 transition-all duration-300 group-hover:stroke-neon-blue"
          />
          {/* Inner nest weave accent */}
          <path 
            d="M13 33C17 38 21 39 24 39C27 39 31 38 35 33" 
            stroke="#48cae4" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            className="opacity-75"
          />
          {/* Left bracket < */}
          <path 
            d="M18 14L10 23L18 32" 
            stroke="#00b4d8" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Center slash / */}
          <path 
            d="M27 12L21 34" 
            stroke="#38bdf8" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          />
          {/* Right bracket > */}
          <path 
            d="M30 14L38 23L30 32" 
            stroke="#00b4d8" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight leading-none ${textSizeClasses}`}>
          <span className="text-white">Code</span>
          <span className="text-electric group-hover:text-neon-blue transition-colors">Nest</span>
        </span>
        {showTagline && (
          <span className={`font-semibold text-slate-400 group-hover:text-electric-light transition-colors uppercase mt-0.5 ${tagSizeClasses}`}>
            Build • Grow • Succeed
          </span>
        )}
      </div>
    </a>
  );
};
