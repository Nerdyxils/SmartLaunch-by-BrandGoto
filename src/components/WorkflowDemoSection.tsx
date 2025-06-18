import React from 'react';
import { ArrowRight, Mail, Database, MessageSquare, Bell } from 'lucide-react';
import { useContactForm } from '../SmartLaunchDemo';

const WorkflowDemoSection: React.FC = () => {
  const { openForm } = useContactForm();
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
      icon: Database,
      title: "HubSpot Contact",
      description: "Contact created in CRM",
      color: "bg-green-500"
    },
    {
      icon: MessageSquare,
      title: "GPT Email",
      description: "AI generates personalized response",
      color: "bg-purple-500"
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
        <div className="workflow-demo-container">
          <div className="workflow-demo-card">
            {/* Workflow Steps */}
            <div className="workflow-steps-grid">
              {workflowSteps.map((step, index) => (
                <div key={index} className="workflow-step-item">
                  <div className={`workflow-step-icon ${step.color.replace('bg-', '')}`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="workflow-step-title">{step.title}</h4>
                  <p className="workflow-step-description">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Visual Flow */}
            <div className="workflow-flow-container">
              {/* Connection Lines */}
              <div className="workflow-connection-line"></div>
              
              {/* Animated Dots */}
              <div className="workflow-animated-dots">
                {workflowSteps.map((_, index) => (
                  <div key={index} className="workflow-dot"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Placeholder */}
        <div className="workflow-demo-video-container">
          <div className="workflow-demo-video-card">
            <div className="workflow-video-placeholder">
              <div className="text-center">
                <div className="workflow-play-button">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="workflow-video-title">Live Workflow Demo</h3>
                <p className="workflow-video-subtitle">Watch our AI system in real-time</p>
              </div>
            </div>
            
            <div className="workflow-stats-grid">
              <div>
                <div className="workflow-stat-value green">2.3s</div>
                <div className="workflow-stat-label">Average Response Time</div>
              </div>
              <div>
                <div className="workflow-stat-value blue">99.9%</div>
                <div className="workflow-stat-label">Uptime Reliability</div>
              </div>
              <div>
                <div className="workflow-stat-value purple">24/7</div>
                <div className="workflow-stat-label">Automated Operation</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="workflow-cta-section">
          <button
            className="btn-primary text-lg px-8 py-4"
            onClick={openForm}
          >
            Get This Built For You
          </button>
          <p className="workflow-cta-description">
            Book a free consultation to see how we can automate your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemoSection; 