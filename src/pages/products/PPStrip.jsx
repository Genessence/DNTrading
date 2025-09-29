import React from 'react';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const PPStrip = () => {
  const handleContact = (e) => {
    e?.preventDefault();
    window.location.href = '#contact';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">PP STRIP</h1>
          <p className="text-muted-foreground max-w-3xl mt-2">Polypropylene strapping for light-to-medium duty unitizing, bundling, and carton sealing.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">LIGHTWEIGHT, COST-EFFECTIVE STRAPPING</h2>
            <p className="text-muted-foreground mb-3">PP strip offers good tensile strength and elasticity at an economical price point. Ideal for general packaging and shipping.</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Compatible with manual tools and semi-automatic machines</li>
              <li>Available in multiple widths, thicknesses, and core sizes</li>
              <li>Custom colors and printing on request</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/6.svg" alt="PP strapping" className="max-h-64 object-contain" />
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">FIND BEST PP STRIP FOR YOUR BUSINESS</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PPStrip;


