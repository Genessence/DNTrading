import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ExpertiseShowcase = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "Award"
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      description: "Environmental Management",
      icon: "Leaf"
    },
    {
      id: 3,
      name: "HACCP Certified",
      description: "Food Safety Standards",
      icon: "Shield"
    },
    {
      id: 4,
      name: "BIS Approved",
      description: "Bureau of Indian Standards",
      icon: "CheckCircle"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('expertise-showcase');
    if (element) {
      observer?.observe(element);
    }

    return () => {
      if (element) {
        observer?.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && yearsCount < 15) {
      const timer = setTimeout(() => {
        setYearsCount(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, yearsCount]);

  return (
    <section id="expertise-showcase" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Experience Counter */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <div className="text-8xl sm:text-9xl font-bold text-primary mb-4">
                {yearsCount}
                <span className="text-4xl sm:text-5xl text-secondary">+</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Years of Industrial Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Since 2008, we've been the trusted packaging partner for manufacturing companies across India, 
                delivering innovative solutions that drive operational efficiency and cost savings.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Units Delivered</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">States Served</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quality Assurance & Certifications
              </h3>
              <p className="text-muted-foreground mb-6">
                Our commitment to excellence is backed by industry-leading certifications and quality standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {certifications?.map((cert) => (
                <div
                  key={cert?.id}
                  className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={cert?.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert?.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Manufacturing Facility Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg"
                alt="Modern manufacturing facility with quality control processes"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseShowcase;