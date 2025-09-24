import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ExpertiseShowcase = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const certifications = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('expertise-showcase');
    if (element) {
      observer?.observe(element);
    }

    return () => {
      if (element) {
        observer?.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && yearsCount < 15) {
      const timer = setTimeout(() => {
        setYearsCount(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, yearsCount]);

  return (
    <section id="expertise-showcase" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center">
          {/* Left Column - Experience Counter */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="text-8xl sm:text-9xl font-bold text-primary mb-4">
                {yearsCount}
                <span className="text-4xl sm:text-5xl text-secondary">+</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Years of Industrial Leadership
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our primary objective is to establish a trusted outlet for delivering industrial consumables,
                hardware, and solutions of the highest quality, ensuring supply at the right place and at the
                right time.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mt-4">
                We are equally committed to maintaining cost competitiveness, enabling our customers to achieve
                maximum value without compromising on quality or reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">SKU's Available</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">factory’s served</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">&gt;25hrs</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
            </div>
          </div>

          {/* Right column removed; left content now spans full width */}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;