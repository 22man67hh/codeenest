import React from 'react';
import { 
  Check, 
  X, 
  Zap, 
  Clock, 
  DollarSign, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

export const WhyCodeNest: React.FC = () => {
  const comparisons = [
    {
      feature: "Turnaround Time",
      codenest: "72-Hour Rapid Delivery",
      agency: "4 to 8 Weeks of endless meetings",
      highlight: true
    },
    {
      feature: "Pricing Model",
      codenest: "Transparent freelance rates (No retainers)",
      agency: "$2,000+/month mandatory retainers",
      highlight: true
    },
    {
      feature: "Communication Channel",
      codenest: "Direct WhatsApp & Call with developer",
      agency: "Ticket systems & junior account managers",
      highlight: false
    },
    {
      feature: "Asset Ownership",
      codenest: "You 100% own source code & ad accounts",
      agency: "Accounts held hostage or proprietary locks",
      highlight: false
    },
    {
      feature: "Strategy Focus",
      codenest: "Direct inquiries, WhatsApp leads & phone calls",
      agency: "Vanity impressions & complex confusing reports",
      highlight: true
    }
  ];

  const valuePillars = [
    {
      title: "Agile Freelance Speed",
      desc: "No corporate bureaucracy or waiting 2 weeks for a copy change. We execute fast so your campaigns start generating returns immediately.",
      icon: Clock,
    },
    {
      title: "Conversion-First Architecture",
      desc: "Every button, headline, and color is intentionally selected to maximize click-throughs and customer inquiries.",
      icon: Zap,
    },
    {
      title: "Zero Agency Bloat",
      desc: "You never pay for lavish agency offices or 5 account executives. 100% of your budget goes directly into results.",
      icon: DollarSign,
    },
    {
      title: "Direct WhatsApp Line",
      desc: "Have a quick question or a promotion to update? Send a message on WhatsApp and get it implemented directly.",
      icon: MessageSquare,
    }
  ];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-midnight-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800/80 border border-electric/30">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold uppercase tracking-widest text-electric">
              The CodeNest Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Small Businesses <br />
            <span className="text-electric text-glow">Choose CodeNest</span> Over Agencies
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Big agencies overcharge and move at a snail’s pace. We combine Silicon-grade technical craft with nimble freelance agility.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {valuePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-midnight-950/80 border border-slate-800 hover:border-electric/50 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-midnight-800 border border-electric/25 flex items-center justify-center text-electric mb-4 group-hover:scale-110 group-hover:bg-electric group-hover:text-midnight-950 transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-electric/30 bg-midnight-950/90 shadow-[0_20px_50px_-20px_rgba(0,180,216,0.3)] overflow-hidden">
          <div className="px-6 py-6 sm:px-8 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                CodeNest vs Traditional Marketing Agencies
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                A clear, honest comparison of what you get and what you pay for.
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-electric/15 border border-electric/30 text-electric text-xs font-bold uppercase tracking-wider">
              100% Freelance Transparency
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs sm:text-sm uppercase tracking-wider text-slate-400 bg-midnight-900/60">
                  <th className="py-4 px-6 font-semibold">Deliverable</th>
                  <th className="py-4 px-6 font-bold text-electric bg-electric/5">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                      CodeNest (Freelance)
                    </span>
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-400">Traditional Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm">
                {comparisons.map((row, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-100 bg-electric/5">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{row.codenest}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500/80 flex-shrink-0" />
                        <span>{row.agency}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
