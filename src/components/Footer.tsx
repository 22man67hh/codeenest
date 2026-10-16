import React from 'react';
import { Logo } from './Logo';
import { BRAND } from '../data/content';
import { 
  ArrowRight, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Github, 
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-16 pb-12 overflow-hidden bg-midnight-950 border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-electric/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HIGH-CONTRAST FINAL CTA BANNER (Directly matching image_6.png) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-midnight-900 via-midnight-800 to-midnight-900 border-2 border-electric/40 p-8 sm:p-12 mb-16 shadow-[0_20px_50px_-15px_rgba(0,180,216,0.4)] overflow-hidden">
          {/* Glowing particle accents */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-electric/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-meta-blue/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/15 border border-electric/30 text-electric text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Ready To Expand Your Reach?
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Stop Losing Customers To <br />
                Competitors With Better Websites.
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Let's launch your lightning-fast 1-page site and laser-targeted Meta ads in just 72 hours.
              </p>
            </div>

            {/* Glowing CTA Button & Sub-text (Matching image_6.png) */}
            <div className="flex flex-col items-center lg:items-end space-y-3 flex-shrink-0">
              <button
                onClick={onOpenQuoteModal}
                className="btn-electric px-10 py-5 rounded-full text-lg sm:text-xl font-black flex items-center gap-3 cursor-pointer group shadow-[0_0_35px_rgba(0,180,216,0.6)]"
              >
                <span>Let’s Grow Together</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Sub-text from image_6.png */}
              <div className="text-xs sm:text-sm font-semibold text-electric-light tracking-wide flex items-center gap-1.5">
                <span className="text-white">Your Website</span>
                <span className="text-electric">+</span>
                <span className="text-white">Meta Ads</span>
                <span className="text-electric">=</span>
                <span className="text-neon-blue font-bold">More Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER NAVIGATION & DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              CodeNest is a boutique tech freelance brand dedicated to building ultra-fast, mobile-optimized business websites and high-ROI Meta ad campaigns for local brands and growing companies.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-2 pt-2 text-sm text-slate-300">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: +1 (234) 567-890</span>
              </a>

              <a 
                href={`mailto:${BRAND.email}`} 
                className="flex items-center gap-2.5 hover:text-electric transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-electric/20 text-electric flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{BRAND.email}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-electric transition-colors">1-Page Website Launch</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Meta Ads Boosting (FB/IG)</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Local SEO & Google Maps</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Speed & Conversion Optimization</a></li>
              <li><a href="#services" className="hover:text-electric transition-colors">Managed Cloud Hosting</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-electric transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-electric transition-colors">Why Choose Us</a></li>
              <li><a href="#portfolio" className="hover:text-electric transition-colors">Portfolio & Results</a></li>
              <li><a href="#pricing" className="hover:text-electric transition-colors">Pricing Plans</a></li>
              <li><a href="#faq" className="hover:text-electric transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 5: Social Channels & Direct WhatsApp Button */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Connect</h4>
            <p className="text-xs text-slate-400">
              Direct freelance communication with no middleman delays.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-midnight-900 border border-slate-800 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-midnight-900 border border-slate-800 hover:border-meta-blue hover:text-meta-blue flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-midnight-900 border border-slate-800 hover:border-electric hover:text-electric flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-midnight-900 border border-slate-800 hover:border-white hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <a
              href="https://wa.me/1234567890?text=Hi%20CodeNest!%20I'd%20like%20to%20get%20started%20with%20a%20website%20and%20Meta%20boost."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} CodeNest. All rights reserved. Built with precision for small business growth.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Freelance Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
