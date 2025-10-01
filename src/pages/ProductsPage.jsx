import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/ui/Header';
import Footer from 'pages/landing-page/components/Footer';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Complete product catalog with all 21 products plus existing ones
  const allProducts = [
    // Existing products from ProductShowcase
    {
      id: 1,
      name: "Biodegradable Packaging",
      category: "packaging",
      image: "/assets/images/2.svg",
      description: "100% industrial biodegradable compostable pouches and bags made from plant-based materials.",
      moq: "MOQ - 250 KG",
      applications: ["Sustainable goods", "E-commerce", "Retail"]
    },
    {
      id: 2,
      name: "Bubble Roll & Pouches",
      category: "packaging",
      image: "/assets/images/4.svg",
      description: "Air bubble roll & bags providing cushioning protection for fragile items during shipping.",
      moq: "MOQ - 10 Rolls",
      applications: ["Fragile goods", "Logistics", "E-commerce"]
    },
    {
      id: 3,
      name: "Stretch Film - Manual & Machine Grade",
      category: "packaging",
      image: "/assets/images/3.svg",
      description: "High cling, puncture resistant stretch film for manual and machine applications.",
      moq: "MOQ - 500 KG",
      applications: ["Pallet wrapping", "Warehouse", "Shipping"]
    },
    {
      id: 4,
      name: "PET Strip",
      category: "packaging",
      image: "/assets/images/5.svg",
      description: "High tensile PET strapping in various widths and thicknesses for unitizing loads.",
      moq: "MOQ - 300 KG",
      applications: ["Unitizing", "Bundling", "Securing loads"]
    },
    {
      id: 5,
      name: "PP Strip",
      category: "packaging",
      image: "/assets/images/6.svg",
      description: "Polypropylene strapping for light-to-medium duty applications.",
      moq: "MOQ - 300 KG",
      applications: ["Carton strapping", "Bundles", "Parcels"]
    },
    {
      id: 6,
      name: "LDPE Pouches - Transparent & Printed",
      category: "packaging",
      image: "/assets/images/s1.webp",
      description: "25–200 microns LDPE pouches with custom sizes and printing options available.",
      moq: "MOQ - 500 KG",
      applications: ["Industrial parts", "Hardware", "Retail"]
    },
    {
      id: 7,
      name: "Sanding Belts",
      category: "abrasives",
      image: "/assets/images/8.svg",
      description: "Aluminum oxide/zirconia sanding belts in multiple grits and sizes for metal finishing.",
      moq: "MOQ - 50 PC",
      applications: ["Metal finishing", "Woodworking", "Fabrication"]
    },
    {
      id: 8,
      name: "Emery Belts",
      category: "abrasives",
      image: "/assets/images/7.svg",
      description: "Emery cloth belts for fine finishing applications in various sizes.",
      moq: "MOQ - 50 PC",
      applications: ["Polishing", "Deburring", "Finishing"]
    },
    // New products from the catalog
    {
      id: 9,
      name: "Nylon Denting Soft Hammers & Mallets",
      category: "tools",
      image: "/assets/productimg/1- Nylon Denting Soft Hammers & Mallets .png",
      description: "Non-marring tools for shaping metal without surface damage. Ideal for automotive and sheet metal work.",
      moq: "MOQ - 10 PC",
      applications: ["Automotive", "Sheet metal work", "Metal shaping"]
    },
    {
      id: 10,
      name: "Flap Wheels",
      category: "abrasives",
      image: "/assets/productimg/2- Flap Wheels.png",
      description: "Flexible abrasive wheels for grinding and finishing. Used on metal, wood, and plastic surfaces.",
      moq: "MOQ - 25 PC",
      applications: ["Grinding", "Finishing", "Surface preparation"]
    },
    {
      id: 11,
      name: "Fibre Discs",
      category: "abrasives",
      image: "/assets/productimg/3- Fibre Discs.png",
      description: "Resin-bonded abrasive discs for aggressive stock removal. Suitable for weld blending and surface preparation.",
      moq: "MOQ - 50 PC",
      applications: ["Weld blending", "Stock removal", "Surface preparation"]
    },
    {
      id: 12,
      name: "Velcro Discs",
      category: "abrasives",
      image: "/assets/productimg/4- Velcro Discs.png",
      description: "Hook-and-loop backed sanding discs for quick change. Used in automotive refinishing and woodworking.",
      moq: "MOQ - 100 PC",
      applications: ["Automotive refinishing", "Woodworking", "Quick change applications"]
    },
    {
      id: 13,
      name: "Grinding Wheels",
      category: "abrasives",
      image: "/assets/productimg/5- Grinding Wheels .png",
      description: "Abrasive wheels for surface and cylindrical grinding. Available in various grits for different materials.",
      moq: "MOQ - 20 PC",
      applications: ["Surface grinding", "Cylindrical grinding", "Material removal"]
    },
    {
      id: 14,
      name: "Cutting Wheels",
      category: "abrasives",
      image: "/assets/productimg/6- Cutting Wheels.png",
      description: "High-speed discs for metal and stainless steel cutting. Precision and durability for fabrication tasks.",
      moq: "MOQ - 50 PC",
      applications: ["Metal cutting", "Stainless steel", "Fabrication"]
    },
    {
      id: 15,
      name: "Reinforced Parting Wheels",
      category: "abrasives",
      image: "/assets/productimg/7- Reinforced Parting Wheels .png",
      description: "Fiberglass-reinforced for strength and safety. Cuts through tough alloys and hardened steel.",
      moq: "MOQ - 25 PC",
      applications: ["Tough alloys", "Hardened steel", "Precision cutting"]
    },
    {
      id: 16,
      name: "SS Cutting Wheels",
      category: "abrasives",
      image: "/assets/productimg/8- SS Cutting Tools.png",
      description: "Specialized for stainless steel with minimal burrs. Long-lasting and consistent under heavy-duty use.",
      moq: "MOQ - 50 PC",
      applications: ["Stainless steel", "Minimal burrs", "Heavy-duty cutting"]
    },
    {
      id: 17,
      name: "Cup Grinding Wheels",
      category: "abrasives",
      image: "/assets/productimg/9- Cup Grinding Wheels.png",
      description: "Surface grinding for concrete, granite, and metal. Double-row segments for aggressive removal.",
      moq: "MOQ - 10 PC",
      applications: ["Concrete grinding", "Granite", "Metal surface grinding"]
    },
    {
      id: 18,
      name: "Green Carbide Wheels",
      category: "abrasives",
      image: "/assets/productimg/10- Green Carbide Wheels.png",
      description: "Green silicon carbide for sharpening carbide tools. Ideal for non-ferrous metals and ceramics.",
      moq: "MOQ - 15 PC",
      applications: ["Carbide sharpening", "Non-ferrous metals", "Ceramics"]
    },
    {
      id: 19,
      name: "Pneumatic Guns",
      category: "tools",
      image: "/assets/productimg/11- Pneumatic Guns .png",
      description: "Rivet and blow guns for fastening and cleaning. Built for high-pressure industrial operations.",
      moq: "MOQ - 5 PC",
      applications: ["Riveting", "Cleaning", "High-pressure operations"]
    },
    {
      id: 20,
      name: "Cutting Tools",
      category: "tools",
      image: "/assets/productimg/12- Cutting Tools.png",
      description: "Includes bolt cutters, pliers, and shears. Precision tools for metal, cable, and plastic.",
      moq: "MOQ - 10 PC",
      applications: ["Metal cutting", "Cable cutting", "Plastic cutting"]
    },
    {
      id: 21,
      name: "Bandsaw Blade",
      category: "tools",
      image: "/assets/productimg/13- Bandsaw Blade.png",
      description: "Bi-metal blades for metal and wood cutting. M42 grade for heat resistance and durability.",
      moq: "MOQ - 20 PC",
      applications: ["Metal cutting", "Wood cutting", "Precision cutting"]
    },
    {
      id: 22,
      name: "Circular Saw Blade",
      category: "tools",
      image: "/assets/productimg/14- Circular Saw Blade.png",
      description: "Carbide-tipped for smooth cuts in wood and metal. Fits table, miter, and chop saws.",
      moq: "MOQ - 15 PC",
      applications: ["Wood cutting", "Metal cutting", "Table saws"]
    },
    {
      id: 23,
      name: "Industrial Tapes - Printed & Transparent",
      category: "packaging",
      image: "/assets/productimg/15- All Types of Industrial Tapes.png",
      description: "Heavy-duty BOPP tapes for sealing and packaging. Available in custom prints and clear variants.",
      moq: "MOQ - 100 ROLLS",
      applications: ["Sealing", "Packaging", "Custom printing"]
    },
    {
      id: 24,
      name: "Electrical Spare Parts",
      category: "components",
      image: "/assets/productimg/16- Electrical Spare Parts.png",
      description: "Connectors, plugs, and control components. Meets industrial standards for automation systems.",
      moq: "MOQ - 50 PC",
      applications: ["Automation systems", "Electrical connections", "Control components"]
    },
    {
      id: 25,
      name: "Mechanical Spare Parts",
      category: "components",
      image: "/assets/productimg/17- Mechanical Spare Parts .png",
      description: "CNC machined components for heavy machinery. Precision-engineered for performance and longevity.",
      moq: "MOQ - 25 PC",
      applications: ["Heavy machinery", "CNC components", "Precision engineering"]
    },
    {
      id: 26,
      name: "Old Clothes (Industrial Use)",
      category: "consumables",
      image: "/assets/productimg/18- Old Cloths.png",
      description: "Recycled cotton rags for cleaning and wiping. Eco-friendly solution for maintenance tasks.",
      moq: "MOQ - 100 KG",
      applications: ["Cleaning", "Wiping", "Maintenance"]
    },
    {
      id: 27,
      name: "Non Loading Sheets",
      category: "abrasives",
      image: "/assets/productimg/19- Non Loading Sheets .png",
      description: "Anti-clog sandpaper sheets for smooth finishing. Used on wood, metal, and composites.",
      moq: "MOQ - 200 PC",
      applications: ["Smooth finishing", "Wood sanding", "Metal sanding"]
    },
    {
      id: 28,
      name: "Waterproof Sheets",
      category: "packaging",
      image: "/assets/productimg/20- Water Proof Sheets.png",
      description: "Polyethylene sheets for moisture protection. Used in construction, painting, and wrapping.",
      moq: "MOQ - 50 KG",
      applications: ["Moisture protection", "Construction", "Painting"]
    },
    {
      id: 29,
      name: "Welding Safety Equipment & Sets",
      category: "safety",
      image: "/assets/productimg/21- Welding Safety Equipments & Sets.png",
      description: "Includes helmets, gloves, aprons, and tools. Protects against heat, sparks, and UV radiation.",
      moq: "MOQ - 10 SETS",
      applications: ["Welding protection", "Heat protection", "UV protection"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', icon: 'Grid3x3' },
    { id: 'packaging', label: 'Packaging', icon: 'Package' },
    { id: 'abrasives', label: 'Abrasives', icon: 'Zap' },
    { id: 'tools', label: 'Tools', icon: 'Wrench' },
    { id: 'components', label: 'Components', icon: 'Cog' },
    { id: 'consumables', label: 'Consumables', icon: 'RefreshCw' },
    { id: 'safety', label: 'Safety', icon: 'Shield' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allProducts, selectedCategory, searchTerm]);

  const handleContactUs = () => {
    navigate('/');
    // Scroll to contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-primary-foreground">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Complete Product Catalog
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Explore our comprehensive range of industrial packaging, tools, abrasives, and safety equipment
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <Icon name={category.icon} className="w-4 h-4" />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-border group flex flex-col h-full"
                >
                  <div className="relative h-48 bg-muted flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-cover ${product.name === 'LDPE Pouches - Transparent & Printed' ? 'scale-[0.8] transform' : ''}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground" style={{ display: 'none' }}>
                      <Icon name="Package" className="w-16 h-16" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app, index) => (
                          <span
                            key={index}
                            className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                          >
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 3 && (
                          <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                            +{product.applications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">MOQ:</span>
                        <span className="text-sm font-medium text-foreground">{product.moq}</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        fullWidth
                        onClick={handleContactUs}
                        iconName="MessageCircle"
                        iconPosition="left"
                        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Search" className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or category filter
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
