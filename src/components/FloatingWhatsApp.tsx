import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(BRAND.whatsappDefaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Helper Tooltip Bubble */}
      {showTooltip && (
        <div className="relative mb-3 bg-midnight-900 border border-emerald-500/40 rounded-2xl p-3 shadow-2xl max-w-xs animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-slate-400 hover:text-white rounded-full"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-bold text-white">CodeNest Direct Chat</span>
          </div>
          <p className="text-xs text-slate-300 pr-3">
            👋 Need a website built or Meta ads boosted? Chat directly with us on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_10px_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Radar pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white border-2 border-emerald-500 rounded-full"></span>
      </a>

    </div>
  );
};
