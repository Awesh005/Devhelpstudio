
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#ai-consultant", label: "AI Consultant" },
  { href: "#testimonials", label: "Success Stories" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full bg-white/80 backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'border-b border-gray-100'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="DevHelp Studio Home">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">
              DevHelp<span className="text-blue-600">Studio</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919304203985?text=Hi%2C%20I%20need%20help%20with%20my%20final%20year%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-b border-gray-100 pb-4 px-4 pt-2 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 text-gray-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919304203985?text=Hi%2C%20I%20need%20help%20with%20my%20final%20year%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2.5 text-green-600 font-bold hover:bg-green-50 rounded-lg"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="block px-3 py-2.5 text-blue-600 font-bold"
          >
            🚀 Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
