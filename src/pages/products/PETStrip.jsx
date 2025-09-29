import React from 'react';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const PETStrip = () => {
  const handleContact = (e) => {
    e?.preventDefault();
    window.location.href = '#contact';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">PET STRIP</h1>
          <p className="text-muted-foreground max-w-3xl mt-2">High-tensile polyester strapping for medium-to-heavy duty unitizing and palletization.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">RELIABLE HOLD FOR HEAVIER LOADS</h2>
            <p className="text-muted-foreground mb-3">PET strapping provides superior retained tension and minimal elongation, making it an excellent alternative to steel in many applications.</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Great for bricks, timber, metals, and heavy cartons</li>
              <li>Weather and impact resistant; safer handling than steel</li>
              <li>Available in embossed/plain, various widths & thicknesses</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/5.svg" alt="PET strapping" className="max-h-64 object-contain" />
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">FIND BEST PET STRIP FOR YOUR BUSINESS</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PETStrip;


