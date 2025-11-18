import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import Icon from 'components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
    industry: '',
    companySize: '',
    packagingType: '',
    monthlyVolume: '',
    requirements: '',
    urgency: ''
  });

  const [showDetailedForm, setShowDetailedForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const industryOptions = [
    { value: 'automotive', label: 'Automotive' },
    { value: 'food', label: 'Food & Beverage' },
    { value: 'pharmaceutical', label: 'Pharmaceutical' },
    { value: 'chemicals', label: 'Chemicals' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'textiles', label: 'Textiles' },
    { value: 'construction', label: 'Construction' },
    { value: 'other', label: 'Other' }
  ];

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small (11-50 employees)' },
    { value: 'medium', label: 'Medium (51-200 employees)' },
    { value: 'large', label: 'Large (201-1000 employees)' },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)' }
  ];

  const packagingTypeOptions = [
    { value: 'ldpe-pouches', label: 'LDPE Pouches' },
    { value: 'industrial-wrap', label: 'Industrial Wrapping' },
    { value: 'sustainable', label: 'Sustainable Packaging' },
    { value: 'custom', label: 'Custom Solutions' },
    { value: 'protective', label: 'Protective Packaging' },
    { value: 'bulk-containers', label: 'Bulk Containers' },
    { value: 'multiple', label: 'Multiple Types' }
  ];

  const urgencyOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: 'urgent', label: 'Urgent (Within 1 month)' },
    { value: 'planned', label: 'Planned (1-3 months)' },
    { value: 'future', label: 'Future consideration' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Show detailed form after basic info is filled
    if (['companyName', 'contactPerson', 'email']?.every(f => 
      f === field ? value : formData?.[f]
    )) {
      setShowDetailedForm(true);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      const valueToLabel = (options, val) => options?.find(o => o?.value === val)?.label || val;

      // Map select values to their human-readable labels for email content
      const payload = {
        ...formData,
        industry: valueToLabel(industryOptions, formData?.industry),
        companySize: valueToLabel(companySizeOptions, formData?.companySize),
        packagingType: valueToLabel(packagingTypeOptions, formData?.packagingType),
        urgency: valueToLabel(urgencyOptions, formData?.urgency),
      };

      const response = await fetch('http://localhost:5050/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.ok) {
        setShowSuccessMessage(true);
        
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          message: '',
          industry: '',
          companySize: '',
          packagingType: '',
          monthlyVolume: '',
          requirements: '',
          urgency: ''
        });
        setShowDetailedForm(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        alert('Failed to submit request. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+91-81263-74473';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918126374473?text=Hi, I need packaging solutions for my business', '_blank');
  };

  return (
    <section id="quote-section" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell us about your packaging needs and get a detailed quote within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quote Request Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <Input
                  label="Company Name"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData?.companyName}
                  onChange={(e) => handleInputChange('companyName', e?.target?.value)}
                  required
                />

                <Input
                  label="Contact Person"
                  type="text"
                  placeholder="Your full name"
                  value={formData?.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e?.target?.value)}
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 81263 74473"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={5}
                    placeholder="Write your message..."
                    value={formData?.message}
                    onChange={(e) => handleInputChange('message', e?.target?.value)}
                  />
                </div>
              </div>

              {/* Detailed Requirements (Progressive Disclosure) */}
              {showDetailedForm && (
                <div className="space-y-4 pt-6 border-t border-border">
                  <h4 className="text-lg font-medium text-foreground mb-4">
                    Tell us more about your requirements
                  </h4>

                  <Select
                    label="Industry"
                    options={industryOptions}
                    value={formData?.industry}
                    onChange={(value) => handleInputChange('industry', value)}
                    placeholder="Select your industry"
                    required
                  />

                  <Select
                    label="Company Size"
                    options={companySizeOptions}
                    value={formData?.companySize}
                    onChange={(value) => handleInputChange('companySize', value)}
                    placeholder="Select company size"
                  />

                  <Select
                    label="Packaging Type Needed"
                    options={packagingTypeOptions}
                    value={formData?.packagingType}
                    onChange={(value) => handleInputChange('packagingType', value)}
                    placeholder="Select packaging type"
                    required
                  />

                  <Input
                    label="Monthly Volume (Approximate)"
                    type="text"
                    placeholder="e.g., 10,000 pieces, 500 kg, etc."
                    value={formData?.monthlyVolume}
                    onChange={(e) => handleInputChange('monthlyVolume', e?.target?.value)}
                  />

                  <Select
                    label="Timeline"
                    options={urgencyOptions}
                    value={formData?.urgency}
                    onChange={(value) => handleInputChange('urgency', value)}
                    placeholder="When do you need this?"
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Requirements
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      rows={5}
                      placeholder="Write your requirements..."
                      value={formData?.requirements}
                      onChange={(e) => handleInputChange('requirements', e?.target?.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
            
            {/* Success Message */}
            {showSuccessMessage && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 max-w-md mx-4 transform transition-all duration-300 animate-in slide-in-from-bottom-4 fade-in">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Check" size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Quote Request Submitted!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your interest. We will contact you within 24 hours with a detailed quote.
                    </p>
                    <Button
                      variant="default"
                      onClick={() => setShowSuccessMessage(false)}
                      className="w-full"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Prefer Direct Contact?
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Our Experts</h4>
                    <p className="text-muted-foreground mb-2">
                      Speak directly with our packaging specialists
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleCallNow}
                      iconName="Phone"
                      iconPosition="left"
                    >
                      +91 81263 74473 / +91 81487 85048
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp Support</h4>
                    <p className="text-muted-foreground mb-2">
                      Quick responses via WhatsApp
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleWhatsApp}
                      iconName="MessageCircle"
                      iconPosition="left"
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground mb-2">
                      Send detailed requirements via email
                    </p>
                    <a 
                      href="mailto:admin@dntrading.co.in"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      admin@dntrading.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Location */}
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Business Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Head Office</div>
                    <div className="text-muted-foreground">
                      SIDCUL, Rudrapur, Uttarkhand 263153
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Truck" size={20} className="text-primary" />
                  <div>
                    <div className="font-medium text-foreground">Service Areas</div>
                    <div className="text-muted-foreground">Pan-India delivery available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="bg-primary rounded-xl p-6 text-center">
              <Icon name="Clock" size={32} className="text-primary-foreground mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                24-Hour Response Guarantee
              </h4>
              <p className="text-primary-foreground/80">
                We guarantee to respond to all quote requests within 24 hours during business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;