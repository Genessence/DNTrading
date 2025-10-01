import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';

const StretchFilm = () => {
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
        {/* Main Heading */}
        <section className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">STRETCH FILM</h1>
        </section>

        {/* Section 1: Source for Hand & Machine Stretch Film */}
        <section className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-3">YOUR SOURCE FOR HAND & MACHINE STRETCH FILM</h2>
            <p className="text-muted-foreground">
              DN Trading is a trusted stretch film supplier, serving businesses across North India with reliable stretch wrap solutions for all
              packaging and shipping needs. Whether you're wrapping pallets manually, semi-automatically, or with fully automatic machines,
              DN Trading offers the right stretch film for your application—available in a wide range of hand films and machine films with
              various lengths, widths, and gauges.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="/assets/images/3.svg" alt="Stretch film rolls" className="max-h-64 object-contain" />
          </div>
        </section>

        {/* Section 2 removed as requested */}

        {/* Section 3: What is Stretch Film */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">WHAT IS STRETCH FILM?</h2>
          <p className="text-muted-foreground">
            Stretch film, often referred to as stretch wrap, is a flexible plastic film widely used for securing and protecting goods. It is most
            commonly applied to stabilize items on pallets for storage or transport, as well as for bundling smaller products together. Manufactured
            primarily from linear low-density polyethylene (LLDPE), stretch film combines strength with flexibility. Its ability to stretch tightly
            around products ensures a secure hold while accommodating slight movement without tearing.
          </p>
          <p className="text-muted-foreground mt-3">
            Recognized for its efficiency and reliability, stretch film is a cost-effective packaging solution used across industries such as
            manufacturing, logistics, and retail to safeguard goods during handling, shipping, and storage.
          </p>
        </section>

        {/* Section 4: Machine vs Hand */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">MACHINE STRETCH FILM VS HAND FILM</h2>
          <p className="text-muted-foreground mb-3">
            Stretch film can be applied either manually by hand or with the help of a semi-automatic or automatic stretch wrapping machine.
            Machine-applied stretch film uses a stretch wrap machine that secures the film and rotates the pallet or package, ensuring an even,
            consistent wrap. This method is faster and more efficient than manual application.
          </p>
          <p className="text-muted-foreground">
            Hand-applied stretch film, on the other hand, is wrapped by manually stretching the film around the load. While more time-consuming,
            it is practical for smaller items or when a stretch wrap machine is not available.
          </p>
        </section>

        {/* Section 5: Important Attributes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-3">IMPORTANT ATTRIBUTES OF STRETCH FILM</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            <li><strong>Thickness (Gauge):</strong> Determines the film's strength and durability.</li>
            <li><strong>Elasticity:</strong> Ability to stretch and conform to shapes; eases application.</li>
            <li><strong>Clarity:</strong> Clear film supports easy identification of wrapped goods.</li>
            <li><strong>UV Resistance:</strong> Protects film from sunlight during outdoor storage.</li>
            <li><strong>Tackiness:</strong> Sticky film grips loads more securely.</li>
            <li><strong>Temperature Resistance:</strong> Maintains integrity in hot or cold conditions.</li>
            <li><strong>Recyclability:</strong> Choose recyclable options to support sustainability goals.</li>
            <li><strong>Cost:</strong> Balance protection needs with budget considerations.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4">FIND BEST STRETCH FILM FOR YOUR BUSINESS</h2>
          <Button variant="default" size="lg" onClick={handleContact}>CONTACT DN TRADING</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StretchFilm;


