import React from 'react';
import { Check, Star } from 'lucide-react';
import { useContactForm } from '../SmartLaunchDemo';

const PricingSection: React.FC = () => {
  const { openForm } = useContactForm();

  const packages = [
    {
      name: "Starter Launch",
      price: "$2,500",
      description: "Perfect for solo entrepreneurs getting started",
      features: [
        "Logo + brand guide",
        "1-page website",
        "1 AI Workflow (lead → CRM → follow-up)",
        "Delivery in 7 days",
        "7-Day Support Window"
      ],
      popular: false,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Pro Launch",
      price: "$4,000",
      description: "Complete launch system for growing businesses",
      features: [
        "Full branding suite",
        "5-page website",
        "2 AI workflows",
        "HubSpot CRM or Notion setup",
        "Lead nurturing automation",
        "Priority Slack/Email Access",
        "30-Day Conversion Optimization Plan"
      ],
      popular: true,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Ultimate SmartLaunch",
      price: "$7,500",
      description: "Enterprise-grade automation for serious scale",
      features: [
        "All in Pro +",
        "Booking system",
        "GPT-trained email responder",
        "Content automation system",
        "1-month optimization support",
        "Custom integrations",
        "Launch Success Partner"
      ],
      popular: false,
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="pricing" className="section bg-black/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{' '}
            <span className="gradient-text">Launch Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From solo founder to enterprise scale, we have the perfect launch system for your business.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="popular-badge">
                  <div className="popular-badge-content">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="pricing-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <div className="pricing-price">{pkg.price}</div>
                <p className="pricing-description">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="pricing-features">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="pricing-feature-item">
                    <div className="pricing-feature-icon">
                      <Check size={12} className="text-green-400" />
                    </div>
                    <span className="pricing-feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA - Hidden for Starter Launch */}
              {index !== 0 && (
                <button className={`pricing-cta ${pkg.popular ? 'popular' : 'standard'}`}>
                  Book This Package
                </button>
              )}

              {/* Delivery Time - Enhanced for each package */}
              <div className="pricing-delivery">
                {index === 0 ? (
                  <div className="pricing-delivery-enhanced">
                    <span className="pricing-delivery-text">🚀 Quick Launch</span>
                    <span className="pricing-delivery-subtext">Express delivery in 7 days</span>
                  </div>
                ) : index === 1 ? (
                  <div className="pricing-delivery-enhanced">
                    <span className="pricing-delivery-text">⚡ Pro Delivery</span>
                    <span className="pricing-delivery-subtext">Complete system in 14 days</span>
                  </div>
                ) : (
                  <div className="pricing-delivery-enhanced">
                    <span className="pricing-delivery-text">🎯 Ultimate Setup</span>
                    <span className="pricing-delivery-subtext">Enterprise ready in 21 days</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="pricing-bottom-note">
          <div className="pricing-bottom-card">
            <p className="text-gray-300">
              <strong className="text-white">Need something custom?</strong> <br/> We can build a custom launch package tailored to your specific needs. <br/> Starts at $10K+
            </p>
            <button className="btn-secondary mt-4" onClick={openForm}>
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 