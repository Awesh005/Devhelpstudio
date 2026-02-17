
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Students Choose DevHelp Studio
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group gradient-border hover:shadow-lg hover:shadow-blue-50"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-gray-50 p-3 rounded-xl w-fit mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
