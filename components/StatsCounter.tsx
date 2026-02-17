
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-gray-900 counter-number mb-2">
                {isVisible ? <AnimatedNumber value={stat.value} isDecimal={stat.isDecimal} /> : '0'}
                <span className="text-blue-600">{stat.suffix}</span>
              </div>
              <p className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber: React.FC<{ value: number; isDecimal?: boolean }> = ({ value, isDecimal }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(isDecimal ? parseFloat((increment * step).toFixed(1)) : Math.floor(increment * step));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isDecimal]);

  return <>{isDecimal ? current.toFixed(1) : current}</>;
};

export default StatsCounter;
