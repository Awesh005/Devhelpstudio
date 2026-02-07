
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

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Specialized Support In
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We cover a wide range of modern tech domains to ensure your project stands out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = IconMap[service.icon];
            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-bold group cursor-pointer">
                  Learn more
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
