import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const BubbleBags = () => {
  const navigate = useNavigate();
  
  const handleContact = (e) => {
    e?.preventDefault();
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('quote-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Hero */}
        <section className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">BUBBLE BAGS</h1>
          <p className="text-primary font-semibold uppercase">BUBBLE BAGS | BUBBLE PACKAGING SUPPLIES</p>
        </section>

        {/* Introduction */}
        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Company Introduction</h2>
            <p className="text-muted-foreground">
              DN TRADING provides a wide variety of packaging supplies, including bubble bags and pouches. When you need bubble bags for
              packaging or shipping, choose DN TRADING as your bubble packaging supplier.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/4.svg" alt="Clear bubble bag with cushioning" className="max-h-64 object-contain" />
          </div>
        </section>

        {/* What are bubble bags */}
        <section className="mb-12">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-3">WHAT ARE BUBBLE BAGS</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Bubble bags are protective packaging designed to safeguard contents from shock, abrasion, and vibration during storage and transit.
              Available as self-seal mailers or open-top pouches, they are made from flexible film with evenly spaced air pockets that provide
              consistent cushioning around the product.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              DN TRADING offers bubble bags and pouches in a variety of sizes and formats to match different product dimensions and fragility
              levels—helping your team select the right protection with minimal material use.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Options in anti-static, self-seal, and custom sizes</li>
              <li>Ideal for electronics, documents, accessories, and fragile items</li>
              <li>Lightweight cushioning helps reduce overall shipping costs</li>
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">BENEFITS OF BUBBLE BAGS</h2>
          <p className="text-muted-foreground mb-4">
            The consistent air pockets forming the bubble bag provide cushioning and protection for storage and shipping. The cushioning effect
            allows for the protection of fragile items without the risk of breaking or tearing. Bubble bags are a great choice for fragile items,
            electronics, documents, and artwork when selecting from protective packaging supplies.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Excellent shock absorption during transit and handling</li>
            <li>Lightweight protection reduces shipping costs</li>
            <li>Available as self-seal pouches, anti-static variants, and custom sizes</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">FIND BEST BUBBLE BAGS FOR YOUR BUSINESS</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BubbleBags;


