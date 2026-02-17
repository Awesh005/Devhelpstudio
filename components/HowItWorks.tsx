
import React from 'react';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From idea to delivery in 4 simple steps. We make the entire process smooth and stress-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200" />

          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={idx}
              className="relative text-center group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Step number circle */}
              <div className="relative z-10 mx-auto mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  {item.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full border-2 border-gray-100 flex items-center justify-center text-xs font-black text-gray-900 shadow-sm">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-300"
          >
            Start Your Project Now
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
