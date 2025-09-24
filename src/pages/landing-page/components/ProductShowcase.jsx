import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import Button from 'components/ui/Button';

const ProductShowcase = () => {
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
      name: "LDPE Food Grade Pouches",
      category: "food",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      specs: "25-200 microns • FDA approved • Custom printing available",
      applications: ["Food packaging", "Pharmaceutical", "Retail"],
      price: "₹2.50 - ₹15.00 per piece",
      minOrder: "1000 pieces",
      sustainability: "Recyclable"
    },
    {
      id: 2,
      name: "Industrial Stretch Wrap",
      category: "industrial",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      specs: "High tensile strength • Weather resistant • Multiple widths",
      applications: ["Pallet wrapping", "Construction", "Machinery"],
      price: "₹180 - ₹350 per roll",
      minOrder: "50 rolls",
      sustainability: "Recyclable"
    },
    {
      id: 3,
      name: "Biodegradable Packaging",
      category: "sustainable",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      specs: "100% compostable • Plant-based materials • Custom sizes",
      applications: ["Organic products", "E-commerce", "Retail"],
      price: "₹5.00 - ₹25.00 per piece",
      minOrder: "500 pieces",
      sustainability: "Compostable"
    },
    {
      id: 4,
      name: "Custom Printed Bags",
      category: "custom",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      specs: "Multi-color printing • Various materials • Brand customization",
      applications: ["Branding", "Retail", "Promotional"],
      price: "₹8.00 - ₹45.00 per piece",
      minOrder: "2000 pieces",
      sustainability: "Recyclable"
    },
    {
      id: 5,
      name: "Anti-Static Pouches",
      category: "industrial",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      specs: "ESD protection • Transparent • Heat sealable",
      applications: ["Electronics", "Components", "Medical devices"],
      price: "₹12.00 - ₹35.00 per piece",
      minOrder: "1000 pieces",
      sustainability: "Recyclable"
    },
    {
      id: 6,
      name: "Vacuum Packaging Bags",
      category: "food",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
      specs: "Barrier properties • Extended shelf life • Various sizes",
      applications: ["Food preservation", "Medical", "Industrial"],
      price: "₹4.00 - ₹20.00 per piece",
      minOrder: "1500 pieces",
      sustainability: "Recyclable"
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setActiveFilter(filter?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              <Icon name={filter?.icon} size={20} />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts?.map((product) => (
            <div
              key={product?.id}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border"
            >
              <div className="relative">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product?.sustainability}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product?.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product?.specs}</p>

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

                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Price Range:</span>
                    <span className="text-sm font-medium text-foreground">{product?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Min Order:</span>
                    <span className="text-sm font-medium text-foreground">{product?.minOrder}</span>
                  </div>
                </div>

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
          ))}
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
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;