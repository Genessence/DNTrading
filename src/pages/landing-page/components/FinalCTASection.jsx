import React, { useState, useEffect } from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('final-cta');
    if (element) {
      observer?.observe(element);
    }

    return () => {
      if (element) {
        observer?.unobserve(element);
      }
    };
  }, []);

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev?.seconds > 0) {
          return { ...prev, seconds: prev?.seconds - 1 };
        } else if (prev?.minutes > 0) {
          return { ...prev, minutes: prev?.minutes - 1, seconds: 59 };
        } else if (prev?.hours > 0) {
          return { hours: prev?.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGetQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+91-81263-74473';
  };

  const handleDownloadGuide = () => {
    // Simulate guide download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'DN-Trading-Packaging-Guide-2024.pdf';
    link?.click();
    
    alert('Thank you! Your comprehensive packaging guide is being prepared. Check your email in 5 minutes.');
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-accent"> Packaging Operations?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join 500+ manufacturing companies who've reduced packaging costs by 25% while improving quality and reliability
            </p>
          </div>

          {/* Urgency Timer */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                Limited Time: Free Packaging Audit
              </h3>
              <div className="flex justify-center space-x-4 text-primary-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft?.hours)?.padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">Hours</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft?.minutes)?.padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">Minutes</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{String(timeLeft?.seconds)?.padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button
                variant="secondary"
                size="xl"
                onClick={handleGetQuote}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-200"
                iconName="FileText"
                iconPosition="left"
              >
                Get Your Free Quote Now
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                onClick={handleCallNow}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                iconName="Phone"
                iconPosition="left"
              >
                Call Expert: +91 81263 74473 / +91 81487 85048
              </Button>
            </div>
          </div>

          {/* Value Propositions */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">24-Hour Response</h3>
                <p className="text-primary-foreground/80">Guaranteed quote within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Risk-Free Trial</h3>
                <p className="text-primary-foreground/80">30-day satisfaction guarantee</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingDown" size={32} className="text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">Cost Savings</h3>
                <p className="text-primary-foreground/80">Average 25% cost reduction</p>
              </div>
            </div>
          </div>

          {/* Bonus Offer */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Bonus: Free Packaging Optimization Guide
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Download our comprehensive 50-page guide on industrial packaging optimization, 
                cost reduction strategies, and sustainability best practices.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadGuide}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                iconName="Download"
                iconPosition="left"
              >
                Download Free Guide (Worth ₹5,000)
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={20} />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={20} />
                  <span>99.8% On-Time Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={20} />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;