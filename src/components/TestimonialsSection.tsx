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
    <section className="section testimonials-section">
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

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* Quote Icon */}
              <div className="testimonial-quote-icon">
                <Quote size={24} />
              </div>

              {/* Rating */}
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="testimonial-star" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.image}</div>
                <div className="testimonial-author-info">
                  <div className="testimonial-author-name">{testimonial.name}</div>
                  <div className="testimonial-author-role">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="testimonial-hover-border"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          <div className="testimonials-stats-grid">
            <div className="testimonial-stat-item">
              <div className="testimonial-stat-value orange">50+</div>
              <div className="testimonial-stat-label">Launches Completed</div>
            </div>
            <div className="testimonial-stat-item">
              <div className="testimonial-stat-value blue">4.9/5</div>
              <div className="testimonial-stat-label">Average Rating</div>
            </div>
            <div className="testimonial-stat-item">
              <div className="testimonial-stat-value green">300%</div>
              <div className="testimonial-stat-label">Avg. Conversion Increase</div>
            </div>
            <div className="testimonial-stat-item">
              <div className="testimonial-stat-value purple">7 Days</div>
              <div className="testimonial-stat-label">Average Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 