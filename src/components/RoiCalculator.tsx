import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuote: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenQuote }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(600);
  const [avgTicket, setAvgTicket] = useState<number>(120);
  const [includeAdBoost, setIncludeAdBoost] = useState<boolean>(false);

  // Total visitors including optional ad boost
  const effectiveVisitors = monthlyVisitors + (includeAdBoost ? 1200 : 0);
  
  // Standard slow website conversion (~1.5%) vs CodeNest fast 1-page conversion (~6.5%)
  const standardInquiries = Math.max(1, Math.round(effectiveVisitors * 0.015));
  const codeNestInquiries = Math.max(2, Math.round(effectiveVisitors * 0.065));
  const additionalInquiries = codeNestInquiries - standardInquiries;
  
  // Projected revenue from inquiries (assuming 30% close rate on direct WhatsApp leads)
  const newClients = Math.max(1, Math.round(codeNestInquiries * 0.3));
  const estimatedRevenue = newClients * avgTicket;

  return (
    <section className="relative py-20 bg-midnight-900/40 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800 border border-electric/30">
            <Calculator className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold uppercase tracking-wider text-electric">
              Website Value Estimator
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How A Fast Website <br />
            <span className="text-electric text-glow">Transforms Your Revenue</span>
          </h3>
          <p className="text-sm text-slate-300">
            Most slow, outdated websites lose 80% of their mobile visitors before the page even loads. See what a fast 1-page site can do for your business.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="rounded-3xl bg-midnight-950 border border-electric/30 p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(0,180,216,0.25)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Column */}
          <div className="md:col-span-7 space-y-6">
            {/* Slider 1: Monthly Visitors */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-200">Estimated Monthly Visitors:</span>
                <span className="text-xl font-extrabold text-electric">
                  {monthlyVisitors.toLocaleString()} visitors
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full h-2.5 bg-midnight-800 rounded-lg appearance-none cursor-pointer accent-electric"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>100 (Starter)</span>
                <span>1,500 (Moderate)</span>
                <span>3,000 (Active)</span>
              </div>
            </div>

            {/* Slider 2: Average Customer Ticket */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-200">Your Average Customer Sale / Booking:</span>
                <span className="text-xl font-extrabold text-white">
                  ${avgTicket}
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2.5 bg-midnight-800 rounded-lg appearance-none cursor-pointer accent-electric"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>$20 (Cafe / Quick)</span>
                <span>$200 (Clinic / Repair)</span>
                <span>$800 (Contractor)</span>
              </div>
            </div>

            {/* Optional Ad Boost Toggle */}
            <div className="pt-2">
              <label 
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  includeAdBoost 
                    ? 'bg-electric/15 border-electric shadow-[0_0_20px_rgba(0,180,216,0.2)]' 
                    : 'bg-midnight-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={includeAdBoost}
                    onChange={(e) => setIncludeAdBoost(e.target.checked)}
                    className="w-4 h-4 rounded text-electric accent-electric cursor-pointer"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-electric" />
                      Add Optional Meta Ad Boost (+1,200 local visitors)
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Jumpstarts immediate traffic from local Facebook & Instagram feeds.
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-electric px-2.5 py-1 rounded bg-midnight-950 border border-electric/30">
                  Optional
                </span>
              </label>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="md:col-span-5 rounded-2xl bg-gradient-to-b from-midnight-900 via-midnight-800 to-midnight-900 border border-electric/40 p-6 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Projected Monthly Lift</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                  High-Converting
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Total Monthly Visitors</span>
                  <span className="font-bold text-white">{effectiveVisitors.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Inquiries with Slow Site (1.5%)</span>
                  <span className="text-slate-400">~{standardInquiries} leads</span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-700">
                  <span className="text-slate-200 font-semibold">Inquiries with CodeNest Site (6.5%)</span>
                  <span className="font-bold text-electric text-sm">~{codeNestInquiries} leads</span>
                </div>
              </div>

              {/* Highlight Result */}
              <div className="pt-1 text-center bg-midnight-950/90 p-4 rounded-xl border border-electric/30">
                <div className="text-xs text-slate-400 font-medium">
                  Estimated Monthly Client Revenue
                </div>
                <div className="text-3xl font-extrabold text-emerald-400 mt-1">
                  ${estimatedRevenue.toLocaleString()}
                </div>
                <div className="text-xs font-bold text-electric mt-1">
                  +{additionalInquiries} more direct inquiries each month
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-electric w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build My Website (72h)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
