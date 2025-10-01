import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const LDPEPouches = () => {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">LDPE POUCHES - TRANSPARENT & PRINTED</h1>
          <p className="text-muted-foreground max-w-3xl mt-2">High-quality LDPE pouches for industrial and retail use with custom sizing and print options.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">Application-Ready Packaging</h2>
            <p className="text-muted-foreground mb-3">
              LDPE (Low-Density Polyethylene) pouches combine flexibility, clarity, and durability. They are ideal for hardware, spare parts,
              fasteners, and retail goods. Available in transparent and custom printed options, with choices for thickness (25–200 microns),
              sealing styles, and gusseting.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Excellent seal strength and moisture barrier</li>
              <li>Custom sizes, printing, and perforations available</li>
              <li>Food-safe grades and high-clarity films on request</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg" alt="LDPE pouches" className="max-h-64 object-contain" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">COMMON USES</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">INDUSTRIAL</h3>
              <p className="text-muted-foreground">Fasteners, machine components, spares, electronics.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">RETAIL</h3>
              <p className="text-muted-foreground">Stationery, accessories, textiles, hardware.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">FIND BEST LDPE POUCHES FOR YOUR BUSINESS</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LDPEPouches;


