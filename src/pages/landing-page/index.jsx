import React, { useEffect } from 'react';
import Header from 'components/ui/Header';
import HeroSection from './components/HeroSection';
import ProductCategoryGrid from './components/ProductCategoryGrid';
import TrustedBrandCarousel from './components/TrustedBrandCarousel';
import ExpertiseShowcase from './components/ExpertiseShowcase';
import ProductShowcase from './components/ProductShowcase';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.getAttribute('href');
      if (target && target?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks?.forEach(link => {
      link?.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      anchorLinks?.forEach(link => {
        link?.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with CTA */}
        <HeroSection />

        {/* Product Category Grid with Hover Effects */}
        <section id="solutions">
          <ProductCategoryGrid />
        </section>

        {/* Industrial Expertise Showcase */}
        <section id="about">
          <ExpertiseShowcase />
        </section>

        {/* Trusted Brand Carousel */}
        <TrustedBrandCarousel />

        {/* Interactive Product Showcase */}
        <ProductShowcase />

        {/* Testimonials section removed as requested */}

        {/* Contact & Quote Request Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Final Conversion CTA */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;