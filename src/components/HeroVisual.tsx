import React, { useState, useRef } from 'react';
import { 
  Zap, 
  Layers, 
  Headphones, 
  Smartphone,
  Eye,
  MousePointerClick,
  Users
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(6);
  const [rotateY, setRotateY] = useState(-8);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth subtle tilt
    setRotateX(-y * 0.025 + 4);
    setRotateY(x * 0.025 - 6);
  };

  const handleMouseLeave = () => {
    setRotateX(5);
    setRotateY(-6);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-2xl mx-auto py-8 lg:py-4 select-none perspective-[1200px]"
    >
      {/* Background radial glow matching image_6.png */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[340px] bg-electric/25 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-8 w-[240px] h-[200px] bg-meta-blue/25 rounded-full blur-[70px] pointer-events-none -z-10"></div>

      {/* Subtle Floating Upward Accent Arrow (from image_6.png) */}
      <div className="absolute -top-3 right-14 sm:right-24 z-20 animate-float-slow pointer-events-none opacity-80">
        <div className="relative flex items-center justify-center w-12 h-16 sm:w-16 sm:h-20">
          <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,180,216,0.7)]">
            <defs>
              <linearGradient id="blueArrowGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#0077b6" />
                <stop offset="60%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#48cae4" />
              </linearGradient>
            </defs>
            <path
              d="M30 110 L70 110 L70 60 L92 60 L50 10 L8 60 L30 60 Z"
              fill="url(#blueArrowGrad)"
            />
          </svg>
        </div>
      </div>

      {/* Subtle Floating Instagram Accent (from image_6.png) */}
      <div className="absolute -top-3 left-14 sm:left-20 z-20 animate-float-delayed pointer-events-none opacity-75">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] p-0.5 shadow-[0_0_20px_rgba(214,36,159,0.5)] flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
          <div className="w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-500/90 to-purple-600/90 backdrop-blur-sm">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle Floating Meta / Facebook Accent (from image_6.png) */}
      <div className="absolute top-12 right-6 sm:right-8 z-20 animate-float-slow pointer-events-none opacity-75">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0081fb] to-[#0052cc] p-0.5 shadow-[0_0_20px_rgba(0,129,251,0.5)] flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
          <div className="w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-br from-[#1877f2] to-[#0a52be]">
            <span className="text-white font-extrabold text-xl sm:text-2xl font-sans drop-shadow leading-none">f</span>
          </div>
        </div>
      </div>

      {/* 3D Tilted Device Container */}
      <div 
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* LAPTOP MOCKUP */}
        <div className="relative mx-auto rounded-t-2xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-2 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(0,180,216,0.25)] border border-slate-600/60 max-w-[560px]">
          {/* Laptop Web Camera Notch */}
          <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-700"></div>
            <div className="w-1 h-1 rounded-full bg-electric/60"></div>
          </div>

          {/* LAPTOP SCREEN (Faithfully matching image_6.png) */}
          <div className="w-full rounded-xl bg-midnight-950 border border-slate-800 overflow-hidden shadow-inner flex flex-col aspect-[16/10]">
            {/* Screen Header Bar */}
            <div className="px-4 py-2 bg-midnight-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] sm:text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-electric animate-ping"></span>
                  Your Brand
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-400 font-medium">
                <span className="text-white">Home</span>
                <span className="hover:text-white">About</span>
                <span className="hover:text-white">Services</span>
                <span className="hover:text-white">Contact</span>
              </div>
              <div>
                <button className="bg-electric text-midnight-950 font-bold px-3 py-1 rounded-md text-[10px] sm:text-xs shadow-sm hover:brightness-110">
                  Get Started
                </button>
              </div>
            </div>

            {/* Screen Hero Area */}
            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-midnight-950 via-midnight-900 to-[#0c183a]">
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-7 space-y-1.5 sm:space-y-2">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-electric/15 border border-electric/30 text-[9px] font-semibold text-electric">
                    Clean 1-Page Layout • 72h Delivery
                  </div>
                  <h3 className="text-sm sm:text-lg font-extrabold text-white leading-tight tracking-tight">
                    Turn Your Ideas<br />Into Reality
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-300 line-clamp-2">
                    Modern web presence tailored for your business. Fast, responsive, built to impress.
                  </p>
                  <div>
                    <span className="inline-block bg-electric text-midnight-950 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                      Get Started
                    </span>
                  </div>
                </div>

                {/* Abstract Glowing Graphic from image_6.png */}
                <div className="col-span-5 relative h-20 sm:h-28 rounded-xl bg-gradient-to-tr from-midnight-800 to-electric-deep border border-electric/30 p-2 overflow-hidden flex items-end justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-electric/20 to-transparent"></div>
                  {/* Mountain peak shapes */}
                  <div className="relative w-full h-full flex items-end justify-center gap-1">
                    <div className="w-10 h-16 bg-gradient-to-t from-electric-dark to-electric rounded-t-lg opacity-80 transform -rotate-6"></div>
                    <div className="w-12 h-20 bg-gradient-to-t from-royal-blue to-neon-blue rounded-t-lg opacity-90 shadow-lg"></div>
                    <div className="w-9 h-14 bg-gradient-to-t from-electric-dark to-electric-glow rounded-t-lg opacity-75 transform rotate-6"></div>
                  </div>
                </div>
              </div>

              {/* 3 White Feature Cards in Screen Base (Directly matching image_6.png) */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800/80">
                <div className="bg-white rounded-lg p-2 text-center shadow-md flex flex-col items-center">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-900 leading-tight">Fast Performance</span>
                </div>
                <div className="bg-white rounded-lg p-2 text-center shadow-md flex flex-col items-center">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-900 leading-tight">Modern Design</span>
                </div>
                <div className="bg-white rounded-lg p-2 text-center shadow-md flex flex-col items-center">
                  <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-900 leading-tight">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base Hinge & Chassis */}
          <div className="relative w-full h-4 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-xl mt-0.5 shadow-2xl flex items-center justify-center">
            <div className="w-16 h-1 rounded-full bg-slate-900"></div>
          </div>
          {/* Laptop Foot Stand Reflection */}
          <div className="w-[108%] -ml-[4%] h-2 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent blur-[1px]"></div>
        </div>

        {/* FLOATING METRICS CARD (Offset Bottom Right, matching image_6.png) */}
        <div className="absolute -bottom-6 -right-2 sm:-right-8 z-30 w-52 sm:w-60 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_30px_rgba(0,180,216,0.4)] border border-white transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            {/* Rising Bar Chart Graphic */}
            <div className="flex items-end gap-1 h-7">
              <div className="w-1.5 h-3 bg-electric/50 rounded-t"></div>
              <div className="w-1.5 h-4.5 bg-electric/70 rounded-t"></div>
              <div className="w-1.5 h-6 bg-electric rounded-t"></div>
              <div className="w-1.5 h-7.5 bg-electric-dark rounded-t"></div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full">
              Live Metrics
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-electric" />
                Page Views
              </span>
              <span className="text-emerald-600 font-extrabold flex items-center text-[11px]">
                ↑ +320%
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5">
                <MousePointerClick className="w-3.5 h-3.5 text-electric" />
                Load Speed
              </span>
              <span className="text-emerald-600 font-extrabold flex items-center text-[11px]">
                ⚡ 0.68s
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-900">
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-electric" />
                Customer Leads
              </span>
              <span className="text-electric-dark font-extrabold flex items-center text-[11px]">
                Direct WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* FLOATING SMARTPHONE MOCKUP (Offset Left) */}
        <div className="hidden sm:block absolute -bottom-4 -left-6 z-25 w-28 h-52 bg-slate-900 rounded-[24px] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(0,180,216,0.3)] border-2 border-slate-700 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="relative w-full h-full bg-midnight-950 rounded-[18px] overflow-hidden flex flex-col justify-between p-2 border border-slate-800">
            {/* Notch */}
            <div className="w-8 h-2 bg-slate-800 rounded-full mx-auto"></div>
            
            <div className="text-center space-y-1">
              <div className="w-5 h-5 rounded-full bg-electric/20 text-electric mx-auto flex items-center justify-center">
                <Smartphone className="w-3 h-3" />
              </div>
              <div className="text-[8px] font-bold text-white">Mobile Ready</div>
              <div className="text-[7px] text-slate-400">100% Responsive</div>
              <div className="w-full h-1 bg-electric/30 rounded-full mt-1"></div>
            </div>

            <div className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded py-1 px-1 text-[7px] font-bold text-center">
              💬 WhatsApp Chat Ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
