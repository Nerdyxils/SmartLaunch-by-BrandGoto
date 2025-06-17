import React from 'react';
import { Rocket, Zap, TrendingUp, Clock } from 'lucide-react';

const WhySmartLaunchSection: React.FC = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Done-for-you launch system",
      description: "Complete branding, website, and automation delivered in days, not months.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "AI integrations that save hours",
      description: "Automated workflows handle customer communication, lead nurturing, and follow-ups.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Built for growth",
      description: "Scalable systems that grow with your business and handle increased demand.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Fast delivery, zero tech stress",
      description: "Professional results delivered quickly without the technical complexity.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why{' '}
            <span className="gradient-text">SmartLaunch?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've combined the best of branding, web development, and AI automation into one powerful launch system.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="why-smartlaunch-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="why-benefit-item">
              {/* Icon */}
              <div className={`why-benefit-icon ${benefit.color.replace('from-', '').replace(' to-', '-').replace('-500', '')}`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="why-benefit-title">{benefit.title}</h3>
              <p className="why-benefit-description">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="why-benefit-hover-effect">
                <div className="why-benefit-hover-line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="why-comparison-container">
          <div className="why-comparison-card">
            <h3 className="why-comparison-title">
              Traditional vs SmartLaunch
            </h3>
            
            <div className="comparison-grid">
              {/* Traditional */}
              <div className="comparison-item">
                <h4 className="comparison-title traditional">Traditional Approach</h4>
                <div className="comparison-list">
                  <div className="comparison-list-item">
                    <div className="comparison-icon traditional">✕</div>
                    <span className="comparison-text">Months of development</span>
                  </div>
                  <div className="comparison-list-item">
                    <div className="comparison-icon traditional">✕</div>
                    <span className="comparison-text">Multiple agencies</span>
                  </div>
                  <div className="comparison-list-item">
                    <div className="comparison-icon traditional">✕</div>
                    <span className="comparison-text">Manual processes</span>
                  </div>
                  <div className="comparison-list-item">
                    <div className="comparison-icon traditional">✕</div>
                    <span className="comparison-text">High costs</span>
                  </div>
                </div>
              </div>

              {/* SmartLaunch */}
              <div className="comparison-item">
                <h4 className="comparison-title smartlaunch">SmartLaunch</h4>
                <div className="comparison-list">
                  <div className="comparison-list-item">
                    <div className="comparison-icon smartlaunch">✓</div>
                    <span className="comparison-text">7-21 day delivery</span>
                  </div>
                  <div className="comparison-list-item">
                    <div className="comparison-icon smartlaunch">✓</div>
                    <span className="comparison-text">One-stop solution</span>
                  </div>
                  <div className="comparison-list-item">
                    <div className="comparison-icon smartlaunch">✓</div>
                    <span className="comparison-text">AI automation</span>
                  </div>
                  <div className="comparison-list-item">
                    <div className="comparison-icon smartlaunch">✓</div>
                    <span className="comparison-text">Fixed pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySmartLaunchSection; 