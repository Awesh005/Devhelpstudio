
import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              DevHelp<span className="text-blue-600">Studio</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#ai-consultant" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">AI Consultant</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Success Stories</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 pb-4">
          <div className="px-4 pt-2 space-y-1">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg">Services</a>
            <a href="#ai-consultant" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg">AI Consultant</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg">Success Stories</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-blue-600 font-bold">Contact Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
