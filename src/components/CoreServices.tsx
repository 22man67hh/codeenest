import React from 'react';
import { CORE_SERVICES } from '../data/content';
import { 
  Code2, 
  Zap, 
  Search, 
  Headphones, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Layers
} from 'lucide-react';

interface CoreServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-7 h-7 text-electric" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-electric" />;
      case 'Search':
        return <Search className="w-7 h-7 text-electric" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-electric" />;
      default:
        return <Layers className="w-7 h-7 text-electric" />;
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-meta-blue/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800/80 border border-electric/30">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold uppercase tracking-wider text-electric">
              Our Core Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Web Solutions Built For <br />
            <span className="text-glow text-electric">Real Business Results.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            We build ultra-fast, mobile-friendly websites that establish your business as the go-to authority in your local market.
          </p>
        </div>

        {/* Services Grid (2x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-300 glass-panel-hover flex flex-col justify-between group ${
                service.popular 
                  ? 'bg-midnight-900/90 border border-electric/40 shadow-[0_15px_40px_-15px_rgba(0,180,216,0.3)]' 
                  : 'bg-midnight-950/70 border border-slate-800'
              }`}
            >
              {/* Glowing Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-2xl group-hover:bg-electric/25 transition-all"></div>

              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-midnight-800 border border-electric/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-electric/20 group-hover:border-electric transition-all shadow-[0_0_20px_rgba(0,180,216,0.2)]">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-midnight-800/90 text-electric-light border border-electric/30">
                    {service.badge}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1 mb-4">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-electric transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Sub-points / Feature Checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3.5 px-6 rounded-xl bg-midnight-800/90 border border-electric/30 hover:border-electric hover:bg-electric hover:text-midnight-950 text-white font-bold text-sm flex items-center justify-center gap-2 group/btn transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[0_0_25px_rgba(0,180,216,0.5)]"
                >
                  <span>Request Proposal for {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
