
import React from 'react';
import { ArrowRight, Sparkles, Shield, FileText, Headphones } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50 animate-float delay-300" />
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] bg-violet-100 rounded-full blur-3xl opacity-30 animate-float delay-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 py-2 rounded-full text-sm font-bold mb-8 border border-blue-100 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Starting at just ₹599* — Limited Slots!</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100">
          Final Year Project <br />
          <span className="gradient-text">Solved with Confidence.</span>
        </h1>
        
        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-10 leading-relaxed animate-fade-in-up delay-200">
          Confused about your project? DevHelp Studio provides end-to-end support for 
          Website Development, AI/ML, and Automation projects. Full source code and viva-ready explanations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 flex items-center justify-center gap-2 group animate-pulse-glow"
          >
            Book Your Slot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 animate-fade-in-up delay-500">
          {[
            { icon: <Shield className="w-4 h-4" />, text: "100% Plagiarism-Free" },
            { icon: <FileText className="w-4 h-4" />, text: "Full Documentation" },
            { icon: <Headphones className="w-4 h-4" />, text: "Post-Delivery Support" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400 text-sm font-medium bg-white/60 backdrop-blur-sm border border-gray-100 px-4 py-2 rounded-full">
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up delay-600">
          {["React.js", "Python", "TensorFlow", "Node.js", "PostgreSQL", "Django", "Flutter"].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Lottie Animation (Desktop/Tablet) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block pointer-events-none opacity-40 -z-5">
         <DotLottieReact
            src="https://lottie.host/17b3eb6c-733e-473a-b8e7-0331070b4353/7jB7i9kQG0.lottie"
            loop
            autoplay
         />
      </div>

    </section>
  );
};

export default Hero;
