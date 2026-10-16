import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-800/80 border border-electric/30">
            <HelpCircle className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold uppercase tracking-widest text-electric">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-electric text-glow">Questions</span>
          </h2>

          <p className="text-base text-slate-300">
            Clear, straightforward answers without jargon or sales fluff.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-midnight-900 border-electric/60 shadow-[0_10px_30px_-10px_rgba(0,180,216,0.3)]'
                    : 'bg-midnight-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-electric' : 'text-slate-100 hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-electric text-midnight-950' : 'bg-midnight-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra FAQ Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-midnight-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question about your project?</h4>
            <p className="text-xs text-slate-400">Ask us directly on WhatsApp and receive a response within 15 minutes.</p>
          </div>
          <a
            href="https://wa.me/1234567890?text=Hi%20CodeNest!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
