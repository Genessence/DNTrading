import React from 'react';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const BiodegradablePackaging = () => {
  const handleContact = (e) => {
    e?.preventDefault();
    window.location.href = '#contact';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            100% INDUSTRIAL BIODEGRADABLE COMPOSTABLE POUCHES/BAGS
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Eco-friendly, high-performance packaging designed for modern industrial needs. Built from plant-based, compostable materials that
            safely break down without harmful residues while maintaining strength, durability, and product safety.
          </p>
        </section>

        {/* Section 1 */}
        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">What Are Biodegradable Compostable Pouches/Bags</h2>
            <p className="text-muted-foreground mb-4">
              DN TRADING is pioneer in supply of Industrial biodegradable compostable pouches and bags are sustainable alternatives to traditional
              plastic packaging. Made from plant-based and compostable materials, they are designed to safely break down into natural compost
              without leaving harmful residues. Strong, durable, and food-safe, these eco-friendly bags are ideal for industries such as food,
              retail, e-commerce, and agriculture—helping businesses reduce their carbon footprint while supporting a cleaner, greener future.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Industrial-grade strength with consistent sealing and printability</li>
              <li>Available in custom sizes, gussets, and thickness options</li>
              <li>Complies with common compostable standards where applicable</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/2.svg" alt="Biodegradable compostable pouches and bags" className="max-h-64 object-contain" />
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">Biodegradable vs Compostable</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Biodegradable bags</h3>
              <p className="text-muted-foreground">
                Break down naturally into smaller components (like water, carbon dioxide, and biomass) through the action of microorganisms.
                However, the timeline for degradation can vary and may leave some residue if not properly processed.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Compostable bags</h3>
              <p className="text-muted-foreground">
                A subset of biodegradable bags, but with stricter standards. They break down completely into non-toxic, natural elements
                (compost) within a specific timeframe under industrial or home composting conditions. Compostable bags leave no harmful residues.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Find best biodegradable bags for your business</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BiodegradablePackaging;


