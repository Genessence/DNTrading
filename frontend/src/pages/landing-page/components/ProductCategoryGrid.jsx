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

  return null;
};

export default ProductCategoryGrid;