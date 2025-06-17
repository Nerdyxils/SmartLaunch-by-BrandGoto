import React from 'react';
import { ArrowRight, Mail, Database, MessageSquare, Bell } from 'lucide-react';

const WorkflowDemoSection: React.FC = () => {
  const workflowSteps = [
    {
      icon: Mail,
      title: "Form Filled",
      description: "Customer submits contact form",
      color: "bg-blue-500"
    },
    {
      icon: ArrowRight,
      title: "Trigger",
      description: "Make.com activates workflow",
      color: "bg-orange-500"
    },
    {
      icon: MessageSquare,
      title: "GPT Email",
      description: "AI generates personalized response",
      color: "bg-purple-500"
    },
    {
      icon: Database,
      title: "HubSpot Contact",
      description: "Contact created in CRM",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email Sent",
      description: "Automated email delivered",
      color: "bg-blue-500"
    },
    {
      icon: Bell,
      title: "Slack Alert",
      description: "Team gets notified",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="demo" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Smart AI{' '}
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how our AI workflows automatically handle your entire customer journey from first contact to conversion.
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="card p-8">
            {/* Workflow Steps */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Visual Flow */}
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-orange-500 via-purple-500 via-green-500 via-blue-500 to-red-500"></div>
              
              {/* Animated Dots */}
              <div className="hidden lg:flex justify-between items-center">
                {workflowSteps.map((_, index) => (
                  <div key={index} className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Placeholder */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card p-8 text-center">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Workflow Demo</h3>
                <p className="text-gray-400">Watch our AI system in real-time</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-2">2.3s</div>
                <div className="text-sm text-gray-400">Average Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Automated Operation</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4">
            Get This Built For You
          </button>
          <p className="text-gray-400 mt-4">
            Book a free consultation to see how we can automate your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemoSection; 