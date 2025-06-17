import React, { useState, createContext, useContext } from 'react';
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
import ContactFormPopup from './components/ContactFormPopup';

// Create context for contact form
interface ContactFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

// Custom hook to use contact form context
export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

const SmartLaunchDemo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openForm = () => {
    setIsContactFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setIsContactFormOpen(false);
    document.body.style.overflow = 'unset';
  };

  const contactFormValue = {
    isOpen: isContactFormOpen,
    openForm,
    closeForm
  };

  return (
    <ContactFormContext.Provider value={contactFormValue}>
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

        {/* Contact Form Popup */}
        <ContactFormPopup 
          isOpen={isContactFormOpen} 
          onClose={closeForm} 
        />
      </div>
    </ContactFormContext.Provider>
  );
};

export default SmartLaunchDemo; 