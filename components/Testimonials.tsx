
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[activeIndex] as HTMLElement;
      if (card) {
        scrollRef.current.scrollTo({
          left: card.offsetLeft - 16,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hear from Our Students
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Join 200+ students who successfully completed their degree projects with us.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="min-w-[85vw] snap-center">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[number] }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-lg transition-all duration-300 gradient-border">
    <Quote className="absolute top-6 right-8 w-10 h-10 text-gray-100" />
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
    <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
      "{testimonial.content}"
    </p>
    <div className="flex items-center gap-4">
      <img 
        src={testimonial.avatar} 
        alt={testimonial.name} 
        className="w-14 h-14 rounded-full border-2 border-blue-100 shadow-sm object-cover" 
        loading="lazy"
      />
      <div>
        <div className="flex items-center gap-1.5">
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <BadgeCheck className="w-4 h-4 text-blue-500" />
        </div>
        <p className="text-blue-600 text-sm font-semibold">{testimonial.project}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
