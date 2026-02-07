
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>Starting at just ₹599*</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Final Year Project <br />
          <span className="gradient-text">Solved with Confidence.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
          Confused about your project? DevHelp Studio provides end-to-end support for Website Development, AI/ML, and Automation projects. Full source code and viva-ready explanations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl transition-all flex items-center justify-center gap-2 group">
            Book Your Slot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
            Explore Services
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400 font-medium grayscale opacity-70">
          <span className="flex items-center gap-2">React.js</span>
          <span className="flex items-center gap-2">Python</span>
          <span className="flex items-center gap-2">TensorFlow</span>
          <span className="flex items-center gap-2">Node.js</span>
          <span className="flex items-center gap-2">PostgreSQL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
