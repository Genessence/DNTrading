import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';

const ProductShowcase = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const filters = [
    { id: 'all', label: 'All Products', icon: 'Grid3x3' },
    { id: 'food', label: 'Food Grade', icon: 'Apple' },
    { id: 'industrial', label: 'Industrial', icon: 'Factory' },
    { id: 'sustainable', label: 'Sustainable', icon: 'Leaf' },
    { id: 'custom', label: 'Custom', icon: 'Settings' }
  ];

  const products = [
    {
      id: 1,
      name: "Biodegradable Packaging",
      category: "sustainable",
      image: "/assets/images/2.svg",
      specs: "100% industrial biodegradable • Compostable • Custom sizes",
      applications: ["Sustainable goods", "E-commerce", "Retail"],
      moq: "MOQ - 250 KG",
      sustainability: "Compostable"
    },
    {
      id: 2,
      name: "Bubble Roll & Pouches",
      category: "industrial",
      image: "/assets/images/4.svg",
      specs: "Air bubble roll & bags • Cushioning protection • Various widths",
      applications: ["Fragile goods", "Logistics", "E-commerce"],
      moq: "MOQ - 10 Rolls",
      sustainability: "Recyclable"
    },
    {
      id: 3,
      name: "Stretch Film - Manual & Machine Grade",
      category: "industrial",
      image: "/assets/images/3.svg",
      specs: "High cling • Puncture resistant • Manual & machine grade",
      applications: ["Pallet wrapping", "Warehouse", "Shipping"],
      moq: "MOQ - 500 KG",
      sustainability: "Recyclable"
    },
    {
      id: 4,
      name: "PET Strip",
      category: "industrial",
      image: "/assets/images/5.svg",
      specs: "High tensile PET strapping • Various widths & thicknesses",
      applications: ["Unitizing", "Bundling", "Securing loads"],
      moq: "MOQ - 300 KG",
      sustainability: "Recyclable"
    },
    {
      id: 5,
      name: "PP Strip",
      category: "industrial",
      image: "/assets/images/6.svg",
      specs: "Polypropylene strapping • Light-to-medium duty",
      applications: ["Carton strapping", "Bundles", "Parcels"],
      moq: "MOQ - 300 KG",
      sustainability: "Recyclable"
    },
    {
      id: 6,
      name: "Emery Belts",
      category: "industrial",
      image: "/assets/images/7.svg",
      specs: "Emery cloth belts • Fine finishing • Various sizes",
      applications: ["Polishing", "Deburring", "Finishing"],
      moq: "MOQ - 50 PC",
      sustainability: "—"
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products?.filter(product => product?.category === activeFilter);

  const handleAddToQuote = (productId) => {
    if (selectedProducts?.includes(productId)) {
      setSelectedProducts(selectedProducts?.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleRequestQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interactive Product Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of packaging solutions. Filter by application and add products to your quote request.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts?.map((product) => (
            <div
              key={product?.id}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border flex flex-col h-full"
            >
              <div className="relative">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className={`w-full h-48 object-cover ${product?.name === 'LDPE Pouches - Transparent & Printed' ? 'scale-[0.8] transform' : ''}`}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product?.name}</h3>
                <div className="mb-4">
                  {product?.name === 'Biodegradable Packaging' ? (
                    <a
                      href="/products/biodegradable-packaging"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label="View more about Biodegradable Packaging"
                    >
                      View More
                    </a>
                  ) : product?.name === 'Bubble Roll & Pouches' ? (
                    <a
                      href="/products/bubble-bags"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label="View more about Bubble Roll & Pouches"
                    >
                      View More
                    </a>
                  ) : product?.name === 'Stretch Film - Manual & Machine Grade' ? (
                    <a
                      href="/products/stretch-film"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label="View more about Stretch Film"
                    >
                      View More
                    </a>
                  ) : product?.name === 'PP Strip' ? (
                    <a
                      href="/products/pp-strip"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label="View more about PP Strip"
                    >
                      View More
                    </a>
                  ) : product?.name === 'PET Strip' ? (
                    <a
                      href="/products/pet-strip"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label="View more about PET Strip"
                    >
                      View More
                    </a>
                  ) : product?.name === 'Emery Belts' ? (
                    <a
                      href="/products/emery-belts"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label="View more about Emery Belts"
                    >
                      View More
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="text-primary hover:underline text-sm font-medium"
                      aria-label={`View more about ${product?.name}`}
                    >
                      View More
                    </button>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product?.applications?.map((app, index) => (
                      <span
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Min Order (MOQ):</span>
                    <span className="text-sm font-medium text-foreground">{product?.moq}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    variant={selectedProducts?.includes(product?.id) ? "default" : "outline"}
                    fullWidth
                    onClick={() => handleAddToQuote(product?.id)}
                    iconName={selectedProducts?.includes(product?.id) ? "Check" : "Plus"}
                    iconPosition="left"
                  >
                    {selectedProducts?.includes(product?.id) ? "Added to Quote" : "Add to Quote"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/products')}
            iconName="Grid3x3"
            iconPosition="left"
            className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>

        {/* Quote Summary */}
        {selectedProducts?.length > 0 && (
          <div className="bg-primary rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-primary-foreground mb-2">
              {selectedProducts?.length} Product{selectedProducts?.length > 1 ? 's' : ''} Selected
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Ready to get pricing for your selected products?
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleRequestQuote}
              iconName="FileText"
              iconPosition="left"
            >
              Request Detailed Quote
            </Button>
            <div className="mt-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/products')}
                iconName="Grid3x3"
                iconPosition="left"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View All Products
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;