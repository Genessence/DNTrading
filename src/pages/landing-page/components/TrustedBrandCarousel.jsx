import React from 'react';
import BrandMarquee from 'components/ui/BrandMarquee';

const TrustedBrandCarousel = () => {
  const trustedBrands = [
    {
      id: 1,
      name: "Tata Steel",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "Steel Manufacturing"
    },
    {
      id: 2,
      name: "Reliance Industries",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "Petrochemicals"
    },
    {
      id: 3,
      name: "Mahindra Group",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "Automotive"
    },
    {
      id: 4,
      name: "ITC Limited",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "FMCG"
    },
    {
      id: 5,
      name: "Bajaj Auto",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "Automotive"
    },
    {
      id: 6,
      name: "Asian Paints",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "Chemicals"
    },
    {
      id: 7,
      name: "Godrej Group",
      logo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      industry: "Consumer Goods"
    },
    // Removed L&T Construction per request
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Manufacturers
          </h2>
          <p className="text-xl text-muted-foreground">
            Join 50+ manufacturing companies who trust us with their packaging needs
          </p>
        </div>

        {/* Marquee of brand logos/names */}
        <BrandMarquee
          items={trustedBrands.map(b => ({ name: b.name }))}
          background="transparent"
          loopSeconds={20}
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Trusted Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-muted-foreground">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandCarousel;