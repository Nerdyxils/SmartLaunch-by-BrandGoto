import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const packages = [
    {
      name: "Starter Launch",
      price: "$500",
      description: "Perfect for solo entrepreneurs getting started",
      features: [
        "Logo + brand guide",
        "1-page website",
        "1 AI Workflow (lead → CRM → follow-up)",
        "Delivery in 7 days",
        "Basic support"
      ],
      popular: false,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Pro Launch",
      price: "$1,200",
      description: "Complete launch system for growing businesses",
      features: [
        "Full branding suite",
        "5-page website",
        "2 AI workflows",
        "HubSpot CRM or Notion setup",
        "Lead nurturing automation",
        "Priority support",
        "30-day optimization"
      ],
      popular: true,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Ultimate SmartLaunch",
      price: "$2,500",
      description: "Enterprise-grade automation for serious scale",
      features: [
        "All in Pro +",
        "Booking system",
        "GPT-trained email responder",
        "Content automation system",
        "1-month optimization support",
        "Custom integrations",
        "Dedicated success manager"
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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                <p className="text-gray-400">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all ${
                pkg.popular 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}>
                Book This Package
              </button>

              {/* Delivery Time */}
              <div className="text-center mt-4">
                <span className="text-sm text-gray-400">
                  {index === 0 ? '7 days' : index === 1 ? '14 days' : '21 days'} delivery
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <div className="inline-block card p-6">
            <p className="text-gray-300">
              <strong className="text-white">Need something custom?</strong> We can build a custom launch package tailored to your specific needs.
            </p>
            <button className="btn-secondary mt-4">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 