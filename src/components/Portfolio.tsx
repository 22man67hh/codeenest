import React, { useState } from 'react';
import { PORTFOLIO_CASES } from '../data/content';
import { 
  Laptop, 
  Smartphone, 
  TrendingUp, 
  MessageCircle, 
  Eye, 
  Sparkles,
  Share2,
  Heart,
  MessageSquare,
  Bookmark
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'website' | 'meta_ads'>('all');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [metaAdFormat, setMetaAdFormat] = useState<'instagram' | 'facebook'>('instagram');

  const filteredCases = PORTFOLIO_CASES.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-electric/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800/80 border border-electric/30">
              <Sparkles className="w-4 h-4 text-electric" />
              <span className="text-xs font-bold uppercase tracking-widest text-electric">
                Proven Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Real Work. <span className="text-electric text-glow">Real Results.</span>
            </h2>
            <p className="text-base text-slate-300">
              Explore recent 1-page websites we crafted and Meta ad boosting sprints that drove actual customer leads and revenue.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-midnight-900/80 p-1.5 rounded-full border border-slate-800">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-electric text-midnight-950 shadow-[0_0_15px_rgba(0,180,216,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setFilter('website')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'website'
                  ? 'bg-electric text-midnight-950 shadow-[0_0_15px_rgba(0,180,216,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1-Page Websites
            </button>
            <button
              onClick={() => setFilter('meta_ads')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'meta_ads'
                  ? 'bg-electric text-midnight-950 shadow-[0_0_15px_rgba(0,180,216,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Meta Ads Boosting
            </button>
          </div>
        </div>

        {/* FEATURED INTERACTIVE SHOWCASE: SPLIT SCREEN (1-Page Site Mockup vs Meta Ads Dashboard) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* 1. MOCKUP OF "MODERN 1-PAGE BUSINESS WEBSITE" */}
          <div className="lg:col-span-6 rounded-3xl bg-midnight-950 border border-electric/30 p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,180,216,0.25)]">
            <div>
              {/* Header with Switcher */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Interactive Preview: 1-Page Website
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-midnight-900 rounded-lg p-1 border border-slate-800">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      deviceMode === 'desktop' ? 'bg-electric text-midnight-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Desktop Preview"
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      deviceMode === 'mobile' ? 'bg-electric text-midnight-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Mobile Responsive Preview"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* The Interactive Mockup Window */}
              <div className="w-full rounded-2xl bg-slate-900 border border-slate-700/80 p-2 shadow-2xl mb-6">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-950 rounded-t-xl border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-3 px-3 py-0.5 rounded-full bg-slate-800/80 text-slate-300 w-full max-w-[200px] truncate">
                    https://apex-dental-clinic.com
                  </span>
                </div>

                {/* Mockup Screen Viewport */}
                <div className={`transition-all duration-300 overflow-hidden bg-slate-950 text-white rounded-b-xl ${
                  deviceMode === 'desktop' ? 'h-[280px]' : 'w-64 mx-auto h-[320px] border-x border-slate-700'
                }`}>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
                      <span className="font-extrabold text-electric">Apex Dental</span>
                      <span className="text-[10px] bg-electric/20 text-electric font-bold px-2 py-0.5 rounded">
                        Open Today • 9 AM - 7 PM
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                        Specialist Clinic
                      </span>
                      <h4 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                        Gentle Dental Care For Your Whole Family
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-2">
                        Pain-free modern dental implants, cleanings, and smile transformations with transparent pricing.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button className="bg-electric text-midnight-950 font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-lg shadow-sm">
                        Book Online (72h Slot)
                      </button>
                      <button className="border border-slate-700 text-slate-300 font-medium text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg">
                        WhatsApp Us
                      </button>
                    </div>

                    {/* Stats pills */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                      <div className="p-1 rounded bg-slate-900 border border-slate-800">
                        <div className="text-[11px] font-bold text-electric">4.9 ★</div>
                        <div className="text-[8px] text-slate-400">380+ Reviews</div>
                      </div>
                      <div className="p-1 rounded bg-slate-900 border border-slate-800">
                        <div className="text-[11px] font-bold text-white">0.68s</div>
                        <div className="text-[8px] text-slate-400">Speed Score</div>
                      </div>
                      <div className="p-1 rounded bg-slate-900 border border-slate-800">
                        <div className="text-[11px] font-bold text-emerald-400">+88%</div>
                        <div className="text-[8px] text-slate-400">Bookings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                Apex Dental & Aesthetics — Modern 1-Page Business Site
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Delivered in 72 hours. Features immediate mobile click-to-WhatsApp booking, full local SEO schema, and sub-second load times.
              </p>
            </div>
          </div>

          {/* 2. SCREENSHOT & DASHBOARD OF "SUCCESSFUL BOOSTING CAMPAIGNS" */}
          <div className="lg:col-span-6 rounded-3xl bg-midnight-950 border border-meta-blue/30 p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_-15px_rgba(0,129,251,0.25)]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-meta-blue animate-ping"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Meta Ads Manager Campaign Dashboard
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-midnight-900 rounded-lg p-1 border border-slate-800">
                  <button
                    onClick={() => setMetaAdFormat('instagram')}
                    className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors ${
                      metaAdFormat === 'instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Instagram Ad
                  </button>
                  <button
                    onClick={() => setMetaAdFormat('facebook')}
                    className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors ${
                      metaAdFormat === 'facebook' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Facebook Feed
                  </button>
                </div>
              </div>

              {/* Meta Live Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-midnight-900/90 border border-meta-blue/30">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span>Ad Reach</span>
                    <Eye className="w-3.5 h-3.5 text-electric" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-white">148,200</div>
                  <div className="text-[10px] font-bold text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" /> +420% vs benchmark
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-midnight-900/90 border border-meta-blue/30">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span>Direct Messages</span>
                    <MessageCircle className="w-3.5 h-3.5 text-meta-blue" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-white">624 Leads</div>
                  <div className="text-[10px] font-bold text-emerald-400">
                    $0.48 / message
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-midnight-900/90 border border-meta-blue/30">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span>Return (ROAS)</span>
                    <span className="text-[10px] font-mono text-electric">⚡ 5.8x</span>
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-400">5.8x ROAS</div>
                  <div className="text-[10px] font-bold text-slate-400">
                    Verified Revenue
                  </div>
                </div>
              </div>

              {/* Live Ad Creative Mockup */}
              <div className="rounded-2xl bg-midnight-900/95 border border-slate-700/80 p-3.5 shadow-xl mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-bold text-xs">
                      🍕
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        Artisan Woodfire Pizzeria
                        <span className="text-[9px] text-slate-400 font-normal">• Sponsored</span>
                      </div>
                      <div className="text-[9px] text-electric">Target: 8km Radius Around Downtown</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">...</span>
                </div>

                {/* Ad Visual Body */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-amber-950/60 via-slate-900 to-midnight-900 border border-slate-800 p-4 text-center">
                  <div className="space-y-1">
                    <span className="inline-block text-[9px] font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                      WEEKEND EXCLUSIVE OFFER
                    </span>
                    <h5 className="text-sm sm:text-base font-extrabold text-white">
                      Craving Authentic Neapolitan Sourdough?
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      Get 20% OFF your first table reservation or WhatsApp takeaway order this week!
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between bg-slate-950/90 rounded-xl p-2 border border-slate-800">
                    <div className="text-left">
                      <div className="text-[9px] text-slate-400">DIRECT WHATSAPP RESERVATION</div>
                      <div className="text-xs font-bold text-white">Claim 20% Voucher Now</div>
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-midnight-950 font-extrabold text-[11px] px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Send Message
                    </button>
                  </div>
                </div>

                {/* Social engagement row */}
                <div className="flex items-center justify-between pt-2 px-1 text-slate-400 text-xs">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-[11px] hover:text-white">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> 1,420
                    </span>
                    <span className="flex items-center gap-1 text-[11px] hover:text-white">
                      <MessageSquare className="w-3.5 h-3.5" /> 624
                    </span>
                    <span className="flex items-center gap-1 text-[11px] hover:text-white">
                      <Share2 className="w-3.5 h-3.5" /> 188
                    </span>
                  </div>
                  <Bookmark className="w-3.5 h-3.5 hover:text-white" />
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                Artisan Woodfire Pizzeria — Meta Ads Boosting Campaign
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Generated 624 direct WhatsApp dining inquiries at $0.48 per lead, achieving an explosive 5.8x verified Return on Ad Spend (ROAS).
              </p>
            </div>
          </div>

        </div>

        {/* ADDITIONAL PORTFOLIO CASES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((item) => (
            <div 
              key={item.id}
              className="p-6 rounded-2xl bg-midnight-900/60 border border-slate-800 hover:border-electric/40 transition-all hover:bg-midnight-900/90 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      item.type === 'website' 
                        ? 'bg-electric/20 text-electric border border-electric/30' 
                        : 'bg-meta-blue/20 text-blue-300 border border-meta-blue/30'
                    }`}>
                      {item.type === 'website' ? '1-Page Website' : 'Meta Boosting Sprint'}
                    </span>
                    <span className="text-xs text-slate-400">• {item.industry}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-electric transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-300 font-semibold">Client: {item.client}</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Metrics pill row */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-midnight-950/80 border border-slate-800 mb-4">
                {item.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">{metric.label}</div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5">{metric.value}</div>
                    {metric.growth && (
                      <div className="text-[10px] font-bold text-emerald-400">{metric.growth}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] px-2.5 py-1 rounded-md bg-midnight-800 text-slate-300 border border-slate-700/60 font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
