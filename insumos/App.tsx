
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PartnersSection from './components/PartnersSection';
import MarketStatsSection from './components/MarketStatsSection';
import AdvantagesSection from './components/AdvantagesSection';
import WhyChooseKnowRiskSection from './components/WhyChooseKnowRiskSection';
import IndustrySolutionsSection from './components/PlatformToolsSection';
import CustomAIDevelopment from './components/CustomAIDevelopment';
import UseCasesSection from './components/UseCasesSection';
import KnowYouIntegration from './components/KnowYouIntegration';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-slate-800">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className={`scroll-container ${isMenuOpen ? 'h-screen overflow-hidden' : ''}`}>
        <div className="scroll-section">
          <Hero />
        </div>
        <PartnersSection />
        <MarketStatsSection />
        <AdvantagesSection />
        <WhyChooseKnowRiskSection />
        <IndustrySolutionsSection />
        <CustomAIDevelopment />
        <UseCasesSection />
        <KnowYouIntegration />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
