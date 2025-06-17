import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useContactForm } from '../SmartLaunchDemo';

const FinalCTASection: React.FC = () => {
  const { openForm } = useContactForm();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand Launch?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of successful brands that have revolutionized their launch process with SmartLaunch
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={openForm}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
              onClick={() => window.open('https://calendly.com/silas-brandgoto/let-s-talk-smartlaunch', '_blank')}
            >
              Schedule Demo
            </button>
          </div>

          <div className="final-cta-features">
            <div className="final-cta-feature-item">
              <CheckCircle className="final-cta-feature-icon" />
              <div className="final-cta-feature-content">
                <h3 className="final-cta-feature-title">No Setup Required</h3>
                <p className="final-cta-feature-description">Get started in minutes, not days</p>
              </div>
            </div>
            <div className="final-cta-feature-item">
              <CheckCircle className="final-cta-feature-icon" />
              <div className="final-cta-feature-content">
                <h3 className="final-cta-feature-title">14-Day Free Trial</h3>
                <p className="final-cta-feature-description">Full access to all features</p>
              </div>
            </div>
            <div className="final-cta-feature-item">
              <CheckCircle className="final-cta-feature-icon" />
              <div className="final-cta-feature-content">
                <h3 className="final-cta-feature-title">24/7 Support</h3>
                <p className="final-cta-feature-description">Expert help whenever you need it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 