
import React from 'react';
import { Rocket, Mail, Globe, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                DevHelp<span className="text-blue-600">Studio</span>
              </span>
            </div>
            <p className="text-gray-600 max-w-sm mb-6 leading-relaxed">
              Empowering final year students with industry-grade project support. Our goal is to make learning and project submission stress-free and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-600 hover:text-blue-600">Our Services</a></li>
              <li><a href="#ai-consultant" className="text-gray-600 hover:text-blue-600">AI Ideas</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                devhelpstudio.team@gmail.com
              </li>
              <li className="text-sm">
                Available: 10 AM - 8 PM IST
              </li>
              <li className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full w-fit font-bold">
                Limited Slots Left!
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} DevHelp Studio. All rights reserved.</p>
          <p className="mt-2 text-xs">*Pricing starting from ₹599. Final cost depends on project complexity and domain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
