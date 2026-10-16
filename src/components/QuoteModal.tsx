import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  initialService 
}) => {
  const [service, setService] = useState('Standard 1-Page Modern Website');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [contact, setContact] = useState('');
  const [budget, setBudget] = useState('$299 - $500');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp message
    const textMsg = encodeURIComponent(
      `Hello CodeNest! My name is ${name || 'Friend'} from ${businessName || 'my business'}.\n` +
      `Service Needed: ${service}\n` +
      `Budget Range: ${budget}\n` +
      `Contact/Phone: ${contact}\n` +
      `Notes: ${details || 'Looking for fast 72-hour delivery.'}`
    );

    // Optional direct trigger after 1.5 seconds
    setTimeout(() => {
      window.open(`https://wa.me/1234567890?text=${textMsg}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-midnight-950/80 backdrop-blur-md transition-opacity"
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-midnight-900 border-2 border-electric/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,180,216,0.5)] z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-midnight-800 text-slate-400 hover:text-white hover:bg-midnight-700 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Quote Request Prepared!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Redirecting you to our direct WhatsApp line with your pre-filled inquiry. You can also chat right now:
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/1234567890?text=${encodeURIComponent(`Hi CodeNest! I requested a quote for ${service}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Direct Chat
              </a>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-4"
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric/15 border border-electric/30 text-electric text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Free 15-Minute Strategy & Quote
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Start Your Project With <span className="text-electric">CodeNest</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tell us about your business. Get a fixed freelance proposal with 72-hour turnaround and zero agency retainers.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  What Do You Need?
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-electric"
                >
                  <option value="Standard 1-Page Modern Website">Standard 1-Page Modern Website (72h Delivery)</option>
                  <option value="Multi-Section Business Website">Multi-Section Business Website</option>
                  <option value="Local SEO & Google Setup">Local SEO & Google Setup</option>
                  <option value="Website + Meta Ads Launch Bundle">Website + Meta Ads Launch Bundle</option>
                  <option value="Meta Ads Boosting (Add-On)">Meta Ads Boosting (Optional Add-On)</option>
                  <option value="Custom Project Scope">Custom Project Scope</option>
                </select>
              </div>

              {/* Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Miller"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Clinic / Bakery"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              {/* Contact (WhatsApp/Phone/Email) & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    WhatsApp / Phone or Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Approximate Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-electric"
                  >
                    <option value="$200 - $350">$200 - $350 (Starter)</option>
                    <option value="$350 - $600">$350 - $600 (Growth Bundle)</option>
                    <option value="$600 - $1,500">$600 - $1,500 (Full Scale)</option>
                    <option value="Flexible / Undecided">Flexible / Let's Discuss</option>
                  </select>
                </div>
              </div>

              {/* Quick Details / Goals */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Brief Project Goal (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Need more inquiries for our catering business..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-midnight-950 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-electric w-full py-4 rounded-xl text-base font-extrabold flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Request Free Quote & 72h Proposal</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400">
                🔒 No credit card required. We respond directly on WhatsApp or Email within 2 hours.
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
