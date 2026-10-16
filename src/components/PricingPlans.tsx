import React from 'react';
import { PRICING_PLANS } from '../data/content';
import { 
  Check, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface PricingPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 overflow-hidden bg-midnight-950/80 border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-electric/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800/80 border border-electric/30">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold uppercase tracking-widest text-electric">
              Simple, Honest Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Freelance Rates. <br className="hidden sm:inline" />
            <span className="text-electric text-glow">Zero Agency Retainers.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Fair freelance pricing with no monthly agency retainers or hidden fees. We build your website right the first time, delivered in 72 hours.
          </p>

          {/* Guarantee Pill */}
          <div className="inline-flex items-center gap-4 pt-2 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1.5 text-electric">
              <Clock className="w-4 h-4" /> Fast 72-Hour Delivery
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> 100% Code & Asset Ownership
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-midnight-900 border-2 border-electric shadow-[0_0_40px_rgba(0,180,216,0.35)] -translate-y-2'
                  : 'bg-midnight-950/70 border border-slate-800 hover:border-electric/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-electric to-neon-blue text-midnight-950 shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Title & Tagline */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-extrabold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-snug">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    / {plan.period}
                  </span>
                </div>

                {/* Turnaround Badge */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-electric/10 border border-electric/25 mb-6 text-xs font-bold text-electric">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>{plan.turnaround}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-electric/20 text-electric flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-electric" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    plan.isPopular
                      ? 'btn-electric text-midnight-950'
                      : 'btn-outline-electric text-white hover:border-electric'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center mt-3 text-[11px] text-slate-500 font-medium">
                  Ideal for: {plan.idealFor}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Agency vs CodeNest Retainer Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-midnight-900/60 border border-slate-800 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need a Custom Scope or Ongoing Monthly Sprint?</div>
              <div className="text-xs text-slate-400">We offer custom packages for multi-page web applications and higher Meta ad budgets.</div>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan("Custom Scope Proposal")}
            className="btn-outline-electric px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer"
          >
            Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
};
