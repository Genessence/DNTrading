import React from 'react';
import Icon from 'components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Solutions', href: '#solutions' },
    { name: 'Quality Assurance', href: '#quality' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Case Studies', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'LDPE Pouches', href: '#ldpe-pouches' },
    { name: 'Industrial Wrapping', href: '#industrial-wrap' },
    { name: 'Sustainable Packaging', href: '#sustainable' },
    { name: 'Custom Solutions', href: '#custom' },
    { name: 'Protective Packaging', href: '#protective' },
    { name: 'Bulk Containers', href: '#bulk-containers' }
  ];

  const industries = [
    'Automotive',
    'Food & Beverage',
    'Pharmaceutical',
    'Chemicals',
    'Electronics',
    'Textiles',
    'Construction',
    'Manufacturing'
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'HACCP Certified',
    'BIS Approved',
    'FDA Compliant',
    'Export Quality'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">DN</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none">DN Trading</span>
                  <span className="text-primary-foreground/80 text-sm leading-none">Industrial Packaging</span>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Your trusted partner for complete industrial packaging solutions. 
                15+ years of expertise in delivering quality, reliability, and innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <a href="tel:+91-81263-74473" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    +91 81263 74473
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <a href="mailto:admin@dntrading.co.in" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    admin@dntrading.co.in
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-accent mt-1" />
                  <div className="text-primary-foreground/80">
                    Industrial Area, Phase-II<br />
                    Chandigarh, Punjab 160002
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks?.map((link) => (
                  <li key={link?.name}>
                    <a 
                      href={link?.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services?.map((service) => (
                  <li key={service?.name}>
                    <a 
                      href={service?.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {service?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries & Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Industries Served</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {industries?.map((industry) => (
                  <div key={industry} className="text-primary-foreground/80 text-sm">
                    {industry}
                  </div>
                ))}
              </div>

              <h4 className="font-semibold mb-3">Certifications</h4>
              <div className="space-y-2">
                {certifications?.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-accent" />
                    <span className="text-primary-foreground/80 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated with Industry Insights</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Get the latest packaging trends, cost-saving tips, and industry news delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80">Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Facebook" size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Twitter" size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Linkedin" size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon name="Instagram" size={18} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm text-center md:text-right">
              <p>© {currentYear} DN Trading. All rights reserved.</p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-2">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="py-4 border-t border-primary-foreground/20">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-primary-foreground/60 text-xs">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={14} />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={14} />
              <span>Data Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={14} />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={14} />
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;