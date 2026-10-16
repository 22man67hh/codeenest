import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-midnight-950/80 backdrop-blur-xl border-b border-electric/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Logo size="md" />

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-midnight-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-electric/15 hover:text-electric-glow transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="btn-electric px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-midnight-950 group-hover:rotate-12 transition-transform" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="btn-electric px-3 py-1.5 rounded-full text-xs font-bold"
            >
              Free Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-midnight-800/80 border border-electric/20 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-electric" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-b border-electric/30 px-6 py-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-medium text-slate-200 hover:text-electric hover:bg-midnight-800/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn-electric w-full py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Get Free Quote
            </button>
            <a
              href="tel:+1234567890"
              className="btn-outline-electric w-full py-2.5 rounded-xl text-center text-sm font-medium flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-electric" />
              Direct Phone Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
