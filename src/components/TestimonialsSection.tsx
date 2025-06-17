import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      image: "👩‍💼",
      quote: "SmartLaunch transformed our business. We went from manual processes to a fully automated system in just 2 weeks. Our conversion rate increased by 300%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, GrowthLab",
      image: "👨‍💼",
      quote: "The AI workflows are incredible. What used to take us hours now happens automatically. It's like having a full-time team working 24/7.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Founder, Creative Studio",
      image: "👩‍🎨",
      quote: "Professional branding, converting website, and automation all in one package. SmartLaunch delivered everything we needed to scale.",
      rating: 5
    }
  ];

  return (
    <section className="section bg-black/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join 50+ founders who've already automated their way to success with SmartLaunch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 relative group">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-500/20">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-400">Launches Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-400">Avg. Conversion Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">7 Days</div>
              <div className="text-gray-400">Average Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 