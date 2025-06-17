import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ValuePropSection from './components/ValuePropSection';
import PricingSection from './components/PricingSection';
import WorkflowDemoSection from './components/WorkflowDemoSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhySmartLaunchSection from './components/WhySmartLaunchSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Navbar from './components/Navbar';

const SmartLaunchDemo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropSection />
        <PricingSection />
        <WorkflowDemoSection />
        <TestimonialsSection />
        <WhySmartLaunchSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default SmartLaunchDemo; 