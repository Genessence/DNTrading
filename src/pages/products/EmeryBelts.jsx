import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const EmeryBelts = () => {
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
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">EMERY BELTS</h1>
          <p className="text-muted-foreground max-w-3xl mt-2">Fine-finish emery cloth belts designed for polishing, deburring, and surface prep.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">SMOOTH, CONSISTENT FINISHES</h2>
            <p className="text-muted-foreground mb-3">Ideal for light stock removal and final finishing on metals and alloys. Clean cutting with controlled scratch pattern.</p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Available in multiple grits for progressive finishing</li>
              <li>Stable backing prevents edge fraying and maintains flatness</li>
              <li>Custom sizes available for different belt sanders</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/7.svg" alt="Emery belts" className="max-h-64 object-contain" />
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">FIND BEST EMERY BELTS FOR YOUR OPERATIONS</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EmeryBelts;


