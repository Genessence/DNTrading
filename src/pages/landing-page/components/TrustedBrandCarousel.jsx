import React from 'react';
import BrandMarquee from 'components/ui/BrandMarquee';

const TrustedBrandCarousel = () => {
  const trustedBrands = [
    { id: 1, name: "", src: "/assets/images/t1.svg", alt: "Partner t1", scale: 2 },
    { id: 2, name: "", src: "/assets/images/t2.svg", alt: "Partner t2", scale: 1.5 },
    { id: 3, name: "", src: "/assets/images/t3.svg", alt: "Partner t3", scale: 1.5 },
    { id: 4, name: "", src: "/assets/images/t4.svg", alt: "Partner t4", scale: 2 },
    { id: 5, name: "", src: "/assets/images/t5.svg", alt: "Partner t5", scale: 2.5 },
    { id: 6, name: "", src: "/assets/images/t6.svg", alt: "Partner t6", scale: 2.5 },
    { id: 7, name: "", src: "/assets/images/t7.svg", alt: "Partner t7", scale: 2.5 },
    { id: 8, name: "", src: "/assets/images/t8.svg", alt: "Partner t8", scale: 2.5 },
    { id: 9, name: "", src: "/assets/images/t9.svg", alt: "Partner t9", scale: 1.5 },
    { id: 10, name: "", src: "/assets/images/t10.svg", alt: "Partner t10", scale: 2.5 },
    { id: 11, name: "", src: "/assets/images/t11.svg", alt: "Partner t11", scale: 2.5 },
    { id: 12, name: "", src: "/assets/images/t12.svg", alt: "Partner t12", scale: 2.5 },
    { id: 13, name: "", src: "/assets/images/t13.svg", alt: "Partner t13", scale: 1.7 },
    { id: 14, name: "", src: "/assets/images/t14.svg", alt: "Partner t14", scale: 1.5 },
    { id: 15, name: "", src: "/assets/images/t15.svg", alt: "Partner t15", scale: 2 },
    { id: 16, name: "", src: "/assets/images/t16.svg", alt: "Partner t16", scale: 1.5},
    { id: 17, name: "", src: "/assets/images/t17.svg", alt: "Partner t17", scale: 1.75 },
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

    {/* Marquee of brand logos */}
    <BrandMarquee
      items={trustedBrands.map(b => ({ name: b.name, src: b.src, alt: b.alt || b.name, scale: b.scale }))}
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