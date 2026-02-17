
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import AIAssistant from './components/AIAssistant';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsCounter />
        <Features />
        <HowItWorks />
        <Services />
        <AIAssistant />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
