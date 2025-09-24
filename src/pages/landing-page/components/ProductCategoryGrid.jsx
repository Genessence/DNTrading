import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ProductCategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "LDPE Pouches",
      icon: "Package",
      description: "Flexible packaging solutions for various industrial applications",
      specs: "Thickness: 25-200 microns • Custom sizes available • Food grade options",
      applications: ["Food packaging", "Chemical storage", "Retail products"]
    },
    {
      id: 2,
      name: "Sustainable Packaging",
      icon: "Leaf",
      description: "Eco-friendly packaging solutions for environmentally conscious businesses",
      specs: "100% recyclable • Biodegradable options • Carbon neutral shipping",
      applications: ["Green manufacturing", "Organic products", "Export packaging"]
    },
    {
      id: 3,
      name: "Custom Solutions",
      icon: "Settings",
      description: "Tailored packaging designed specifically for your unique requirements",
      specs: "Custom dimensions • Brand printing • Specialized materials",
      applications: ["Automotive parts", "Electronics", "Pharmaceutical"]
    },
    {
      id: 4,
      name: "Industrial Wrapping",
      icon: "Wrap",
      description: "Heavy-duty wrapping materials for industrial and construction use",
      specs: "High tensile strength • Weather resistant • Multiple thickness options",
      applications: ["Construction materials", "Machinery wrapping", "Bulk storage"]
    },
    {
      id: 5,
      name: "Protective Packaging",
      icon: "Shield",
      description: "Advanced protection for fragile and sensitive industrial products",
      specs: "Anti-static options • Cushioning materials • Temperature resistant",
      applications: ["Electronics", "Medical devices", "Precision instruments"]
    },
    {
      id: 6,
      name: "Bulk Containers",
      icon: "Container",
      description: "Large-scale storage and transportation solutions for industrial use",
      specs: "1000L+ capacity • Stackable design • Chemical resistant",
      applications: ["Chemical storage", "Food processing", "Waste management"]
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete Packaging Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic supplies to custom sustainable packaging, we deliver the right solution for every industrial need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories?.map((category) => (
            <div
              key={category?.id}
              className="relative bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-border"
              onMouseEnter={() => setHoveredCategory(category?.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Icon name={category?.icon} size={24} color="white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category?.name}</h3>
              </div>

              <p className="text-muted-foreground mb-4">{category?.description}</p>

              {/* Hover Overlay */}
              {hoveredCategory === category?.id && (
                <div className="absolute inset-0 bg-primary/95 rounded-xl p-6 flex flex-col justify-center transition-all duration-300">
                  <h4 className="text-white font-semibold mb-3">Key Specifications</h4>
                  <p className="text-white/90 text-sm mb-4">{category?.specs}</p>
                  
                  <h4 className="text-white font-semibold mb-2">Applications</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    {category?.applications?.map((app, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Check" size={16} className="mr-2 text-accent" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryGrid;