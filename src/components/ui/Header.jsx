import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';
import SuppliesDropdown from 'components/ui/SuppliesDropdown';
import SolutionsDropdown from 'components/ui/SolutionsDropdown';
import LPDEMmodal from 'components/ui/LPDEPouchCalculatorModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSuppliesOpen, setIsSuppliesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLPDEOpen, setIsLPDEOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGetQuote = () => {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+91-81263-74473';
  };

  const toggleSupplies = (e) => {
    e?.preventDefault?.();
    setIsSolutionsOpen(false);
    setIsSuppliesOpen((v) => !v);
  };

  const toggleSolutions = (e) => {
    e?.preventDefault?.();
    setIsSuppliesOpen(false);
    setIsSolutionsOpen((v) => !v);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/images/1.svg"
                  alt="DN Trading logo"
                  className="h-8 w-auto transform origin-center scale-[1.728]"
                />
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-lg leading-none">DN Trading</span>
                  <span className="text-muted-foreground text-xs leading-none">Industrial Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={toggleSolutions}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              aria-expanded={isSolutionsOpen}
              aria-controls="solutions-dropdown"
            >
              Solutions
            </button>
            <button 
              onClick={toggleSupplies}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Supplies
            </button>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a 
              href="#lpde-pouch-calculator" 
              onClick={(e)=>{ e.preventDefault(); setIsLPDEOpen(true);} }
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              LDPE Pouch Calculator
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCallNow}
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
            >
              Call Now
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={handleGetQuote}
              className="shadow-cta"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3 space-y-3">
              <a 
                href="#solutions" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#supplies" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Supplies
              </a>
              <a 
                href="#services" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#lpde-pouch-calculator" 
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LDPE Pouch Calculator
              </a>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-3 border-t border-border space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  onClick={() => {
                    handleCallNow();
                    setIsMobileMenuOpen(false);
                  }}
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                >
                  Call Now
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  fullWidth
                  onClick={() => {
                    handleGetQuote();
                    setIsMobileMenuOpen(false);
                  }}
                  className="shadow-cta"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Full-width Supplies dropdown */}
      <SuppliesDropdown open={isSuppliesOpen} onClose={() => setIsSuppliesOpen(false)} />
      <div id="solutions-dropdown">
        <SolutionsDropdown open={isSolutionsOpen} onClose={() => setIsSolutionsOpen(false)} />
      </div>
      <LPDEMmodal open={isLPDEOpen} onClose={()=> setIsLPDEOpen(false)} />
    </header>
  );
};

export default Header;