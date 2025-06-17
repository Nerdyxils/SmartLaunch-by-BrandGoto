import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { useContactForm } from '../SmartLaunchDemo';

const HeroSection: React.FC = () => {
  const { openForm } = useContactForm();

  return (
    <section className="section pt-24 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,95,11,0.1),transparent_50%)]"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 Launch System
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Launch Smart.
            <span className="block gradient-text">Scale Fast.</span>
            <span className="block">Automate Everything.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            SmartLaunch is your done-for-you launch system: branding, website, and AI automation — built to help you scale with speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={openForm}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>50+ Launches Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>7-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AI-Powered Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection; 