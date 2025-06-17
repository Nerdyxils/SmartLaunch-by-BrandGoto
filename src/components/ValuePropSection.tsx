import React from 'react';
import { Target, Zap, TrendingUp } from 'lucide-react';

const ValuePropSection: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Branding that attracts",
      description: "Professional brand identity that makes you stand out and builds trust with your audience.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Websites that convert",
      description: "High-converting websites designed to turn visitors into customers and drive results.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "AI workflows that scale",
      description: "Automated systems that handle repetitive tasks and grow with your business.",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Launch System That Actually{' '}
            <span className="gradient-text">Launches You.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop juggling a dozen tools and services. SmartLaunch combines everything you need to launch and scale your business into one seamless system.
          </p>
        </div>

        <div className="value-prop-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="value-prop-card">
              {/* Icon */}
              <div className={`value-prop-icon bg-gradient-to-r ${benefit.color}`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="value-prop-title">{benefit.title}</h3>
              <p className="value-prop-description">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="value-prop-hover-effect">
                <div className="value-prop-hover-line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="value-prop-cta">
          <div className="value-prop-cta-card">
            <h3 className="value-prop-cta-title">
              Ready to launch your business the smart way?
            </h3>
            <p className="value-prop-cta-description">
              Join 50+ founders who've already automated their way to success.
            </p>
            <button 
              className="btn-primary text-lg px-8 py-4" 
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                if (pricingSection) {
                  pricingSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              See Launch Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection; 