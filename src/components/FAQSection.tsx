import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's the delivery time?",
      answer: "Starter Launch: 7 days, <br/> Pro Launch: 14 days, <br/> Ultimate SmartLaunch: 21 days. <br/> We work fast to get you launched quickly!"
    },
    {
      question: "Do I need to know any tech?",
      answer: "Not at all! We handle all the technical setup. You just need to provide content and feedback. We'll train you on how to use your new systems."
    },
    {
      question: "Can I add more workflows later?",
      answer: "Absolutely! We can add new AI workflows anytime. Most clients start with basic automation and expand as their business grows."
    },
    {
      question: "Will this replace my VA?",
      answer: "SmartLaunch complements your VA by handling repetitive tasks. Your VA can focus on high-value activities while AI handles the routine work."
    },
    {
      question: "What if I need changes after launch?",
      answer: "We include 30 days of optimization support. After that, we offer ongoing maintenance packages to keep everything running smoothly."
    },
    {
      question: "Do you provide training?",
      answer: "Yes! We provide comprehensive training on all systems and workflows. Plus, you get access to our knowledge base and support team."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-black/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about SmartLaunch and how we can help you scale your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors rounded-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-orange-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-block card p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you understand how SmartLaunch can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule a Call
              </button>
              <button className="btn-secondary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 