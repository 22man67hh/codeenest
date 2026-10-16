import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueMarkers } from './components/ValueMarkers';
import { CoreServices } from './components/CoreServices';
import { WhyCodeNest } from './components/WhyCodeNest';
import { Portfolio } from './components/Portfolio';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingPlans } from './components/PricingPlans';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DashainDecorations } from './components/DashainDecorations';
import { DashainSwing } from './components/DashainSwing';
import { DashainMusic } from './components/DashainMusic';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-midnight-950 text-slate-100 flex flex-col relative selection:bg-electric selection:text-midnight-950 font-sans">
      
      {/* Top Fixed Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section & Interactive 3D Visual */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. 4 Value Markers from image_6.png */}
        <ValueMarkers />

        {/* 3. Core Services Grid with glowing effects */}
        <CoreServices onSelectService={(service) => handleOpenQuoteModal(service)} />

        {/* 4. Why Us / Comparison with Agencies */}
        <WhyCodeNest />

        {/* 5. Portfolio: Interactive 1-Page Website Preview & Meta Ads Dashboard */}
        <Portfolio />

        {/* 6. Interactive ROI & Growth Estimator */}
        <RoiCalculator onOpenQuote={() => handleOpenQuoteModal('Standard 1-Page Modern Website')} />

        {/* 7. Budget-Friendly Plans & Freelance Pricing */}
        <PricingPlans onSelectPlan={(plan) => handleOpenQuoteModal(plan)} />

        {/* 8. FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* 9. High-Contrast Footer & Final CTA Banner */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />

      {/* ─── Dashain Festival Vibes ─────────────────────────────────────────── */}
      {/* Tika dots + jamara grass + falling petals + greeting banner */}
      <DashainDecorations />

      {/* Traditional linge ping / swing — bottom-right corner */}
      <DashainSwing />

      {/* Malashree Dhun player — bottom-left corner */}
      <DashainMusic />

      {/* Interactive Free Quote & Proposal Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={selectedService}
      />

    </div>
  );
};

export default App;
