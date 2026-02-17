
import React from 'react';
import { Rocket, Mail, Globe, Github, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                DevHelp<span className="text-blue-400">Studio</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed text-sm">
              Empowering final year students with industry-grade project support. Our goal is to make learning and project submission stress-free and affordable.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/devhelpstudio", hoverColor: "hover:text-pink-400 hover:border-pink-400" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/devhelpstudio", hoverColor: "hover:text-blue-400 hover:border-blue-400" },
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/devhelpstudio", hoverColor: "hover:text-white hover:border-white" },
                { icon: <Globe className="w-4 h-4" />, href: "#", hoverColor: "hover:text-emerald-400 hover:border-emerald-400" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center text-gray-500 transition-all duration-300 ${social.hoverColor}`}
                  aria-label="Social link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Services", href: "#services" },
                { label: "AI Ideas Generator", href: "#ai-consultant" },
                { label: "Success Stories", href: "#testimonials" },
                { label: "Get Consultation", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:devhelpstudio.team@gmail.com" className="hover:text-blue-400 transition-colors">
                  devhelpstudio.team@gmail.com
                </a>
              </li>
              <li className="text-gray-500 text-xs">
                Available: 10 AM - 8 PM IST
              </li>
              <li>
                <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3 py-1.5 rounded-full text-xs font-bold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  Limited Slots Left!
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} DevHelp Studio. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-1">*Pricing starting from ₹599. Final cost depends on project complexity and domain.</p>
          </div>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
