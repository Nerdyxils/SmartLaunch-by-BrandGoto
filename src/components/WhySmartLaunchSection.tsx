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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} p-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Traditional vs SmartLaunch
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-red-400">Traditional Approach</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <span className="text-gray-300">Months of development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <span className="text-gray-300">Multiple agencies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <span className="text-gray-300">Manual processes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-sm">✕</span>
                    </div>
                    <span className="text-gray-300">High costs</span>
                  </div>
                </div>
              </div>

              {/* SmartLaunch */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-green-400">SmartLaunch</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">7-21 day delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">One-stop solution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">AI automation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">Fixed pricing</span>
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