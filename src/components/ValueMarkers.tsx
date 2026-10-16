import React from 'react';
import { Target, Megaphone, TrendingUp, ShieldCheck } from 'lucide-react';
import { VALUE_MARKERS } from '../data/content';

export const ValueMarkers: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-electric" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-electric" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-electric" />;
      case 'Shield':
        return <ShieldCheck className="w-6 h-6 text-electric" />;
      default:
        return <Target className="w-6 h-6 text-electric" />;
    }
  };

  return (
    <section className="relative py-12 border-y border-electric/15 bg-midnight-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_MARKERS.map((marker) => (
            <div
              key={marker.id}
              className="group p-5 rounded-2xl bg-midnight-950/60 border border-slate-800 hover:border-electric/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,180,216,0.25)] flex items-start gap-4"
            >
              {/* Icon Container with glowing aura */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-midnight-800 border border-electric/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-electric/20 group-hover:border-electric transition-all shadow-sm">
                {getIcon(marker.iconName)}
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white group-hover:text-electric transition-colors">
                  {marker.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-snug">
                  {marker.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
