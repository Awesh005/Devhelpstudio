
import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Bot, 
  Database, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICES } from '../constants';

const IconMap: Record<string, any> = {
  Code2,
  BrainCircuit,
  Bot,
  Database,
  ShieldCheck
};

const GRADIENT_COLORS = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-purple-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-rose-500 to-pink-400",
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Specialized Support In
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We cover a wide range of modern tech domains to ensure your project stands out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = IconMap[service.icon];
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Popular badge on first item */}
                {idx === 0 && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                    🔥 Popular
                  </div>
                )}
                
                <div className={`w-14 h-14 bg-gradient-to-br ${GRADIENT_COLORS[idx]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <a href="#contact" className="flex items-center text-blue-600 font-bold group/link cursor-pointer text-sm">
                  Get Started
                  <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
