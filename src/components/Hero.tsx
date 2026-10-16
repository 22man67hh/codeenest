import React from 'react';
import { HeroVisual } from './HeroVisual';
import { BRAND } from '../data/content';
import { 
  ArrowRight, 
  Calendar, 
  Code2, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Infinity,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const websiteBadges = [
    { icon: Code2, label: "Custom Websites" },
    { icon: Smartphone, label: "Responsive Design" },
    { icon: Search, label: "SEO Friendly" },
    { icon: ShieldCheck, label: "Fast & Secure Performance" },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-meta-blue/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: High-Converting Hero Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Accent Line & High-Impact Kicker (from image_6.png) */}
            <div className="inline-flex flex-col items-center lg:items-start space-y-2">
              <div className="w-14 h-1.5 bg-electric rounded-full shadow-[0_0_12px_#00b4d8]"></div>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800/90 border border-electric/30 shadow-[0_0_20px_rgba(0,180,216,0.2)]">
                <Sparkles className="w-4 h-4 text-electric" />
                <span className="text-xs sm:text-sm font-bold tracking-wide uppercase text-electric-light">
                  {BRAND.heroBadge}
                </span>
                <span className="hidden sm:inline text-[10px] text-slate-400 border-l border-slate-700 pl-2">
                  72h Delivery
                </span>
              </div>
            </div>

            {/* Main Headline with natural modern human font */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              Turn Your Ideas <br className="hidden sm:inline" />
              <span className="text-white">Into Reality. </span>
              <span className="bg-gradient-to-r from-electric via-neon-blue to-electric-glow bg-clip-text text-transparent text-glow">
                Get A Website That Sells.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {BRAND.heroSubheadline}
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="btn-electric w-full sm:w-auto px-8 py-4 rounded-full text-base font-extrabold flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Launch My Website</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#contact"
                className="btn-outline-electric w-full sm:w-auto px-7 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5 text-electric" />
                <span>Book Free Consultation</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-electric" />
                Fast 72-Hour Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-electric" />
                Zero Agency Retainers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-electric" />
                100% Asset Ownership
              </span>
            </div>

            {/* 4 Feature Badges from image_6.png (under website development) */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {websiteBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-midnight-900/80 border border-electric/20 hover:border-electric/50 hover:bg-midnight-800/80 transition-all flex flex-col items-center lg:items-start text-center lg:text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-electric/15 text-electric flex items-center justify-center mb-2 group-hover:scale-110 group-hover:text-neon-blue transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-200 group-hover:text-white leading-tight">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive 3D Visual Mockup */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Visual Kicker Badge */}
            <div className="w-full flex justify-end mb-2 pr-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-midnight-900/90 border border-electric/30 shadow-sm text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-slate-200">Interactive 3D Preview</span>
                <span className="text-slate-500">•</span>
                <span className="text-electric font-semibold flex items-center gap-1">
                  <Infinity className="w-3.5 h-3.5" /> Ad Boost Ready
                </span>
              </div>
            </div>

            {/* The 3D Mockup Visual Component */}
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
