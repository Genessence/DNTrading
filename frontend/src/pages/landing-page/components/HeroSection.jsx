import React from 'react';
import Button from 'components/ui/Button';
import Image from 'components/AppImage';

const HeroSection = () => {
  const handleGetQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleConsultation = () => {
    window.location.href = 'tel:+91-81263-74473';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/images/s1.webp"
        >
          <source src="/assets/video/stock-video-inside-the-warehouse-of-car-factory-camera-is-moving-between-racks-with-paperboxes-workers-are.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-primary/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Complete Industrial Packaging Solutions for 
            <span className="text-accent"> Manufacturing</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            15+ Years of Proven Expertise • Right-Place-Right-Time Delivery • Cost-Competitive Pricing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={handleGetQuote}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold shadow-xl">

              Get Instant Quote
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleScheduleConsultation}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              iconName="Phone"
              iconPosition="left">

              Schedule Expert Consultation
            </Button>
          </div>
          
          <div className="text-white/80 text-lg">
            <p className="mb-2">Need immediate assistance?</p>
            <a
              href="tel:+91-81263-74473"
              className="text-accent hover:text-accent/80 font-semibold text-xl transition-colors">

              +91 81263 74473 / +91 81487 85048
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;