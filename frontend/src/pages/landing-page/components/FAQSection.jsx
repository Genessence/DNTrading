import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What are the risks of switching packaging suppliers?",
      answer: `We understand supplier switching concerns. That's why we offer:\n\n• Risk-free trial orders to test quality\n• Gradual transition plans to minimize disruption\n• Quality matching guarantees for existing packaging\n• Dedicated account manager for smooth onboarding\n\nOur 98% client retention rate speaks to our commitment to long-term partnerships.`
    },
    {
      id: 2,
      question: "How do your prices compare to other suppliers?",
      answer: `Our pricing strategy focuses on total value, not just unit cost:\n\n• Competitive base pricing with volume discounts\n• No hidden fees or surprise charges\n• Cost savings through optimized packaging design\n• Reduced waste and improved efficiency\n\nMost clients see 15-35% total cost reduction within 6 months through our optimization approach.`
    },
    
    {
      id: 4,
      question: "What are your delivery timelines and reliability?",
      answer: `We pride ourselves on reliable, on-time delivery:\n\n• Standard orders: 7-14 business days\n• Custom solutions: 14-21 business days\n• Emergency orders: 3-5 business days (subject to availability)\n• 99.8% on-time delivery success rate\n• Real-time tracking for all shipments\n• Pan-India delivery network\n• Backup inventory at multiple locations\n\nWe also offer scheduled delivery programs for regular requirements.`
    },
    {
      id: 5,
      question: "Do you offer sustainable packaging options?",
      answer: `Sustainability is core to our business:\n\n• 100% recyclable packaging materials\n• Biodegradable and compostable options\n• Plant-based packaging alternatives\n• Carbon-neutral shipping options\n• Packaging optimization to reduce material usage\n• Take-back programs for used packaging\n• Sustainability reporting and certifications\n\nWe help clients achieve their environmental goals while maintaining cost efficiency.`
    },
    {
      id: 6,
      question: "Can you handle custom packaging requirements?",
      answer: `Custom solutions are our specialty:\n\n• In-house design and engineering team\n• Custom dimensions, shapes, and specifications\n• Brand printing and customization\n• Specialized materials for unique applications\n• Prototype development and testing\n• Small batch custom orders accepted\n• Technical consultation and optimization\n\nFrom concept to delivery, we handle the entire custom packaging process.`
    },
    {
      id: 7,
      question: "What support do you provide after order placement?",
      answer: `Comprehensive post-order support includes:\n\n• Dedicated account manager for ongoing support\n• Real-time order tracking and updates\n• Technical support for packaging optimization\n• Quality issue resolution within 24 hours\n• Regular business reviews and improvement suggestions\n• Training for your team on packaging best practices\n• Emergency support hotline\n\nOur relationship doesn't end with delivery - we're your long-term packaging partner.`
    },
    {
      id: 8,
      question: "Do you provide packaging consultation services?",
      answer: `Yes, our expert consultation services include:\n\n• Packaging audit and optimization analysis\n• Cost reduction strategies and implementation\n• Sustainability assessment and recommendations\n• Compliance guidance for industry regulations\n• Supply chain optimization consulting\n• New product packaging development\n• Training workshops for your procurement team\n\nConsultation is complimentary for potential clients and ongoing for existing customers.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Common concerns about switching packaging suppliers - answered by our experts
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset rounded-lg"
              >
                <h3 className="text-lg font-medium text-foreground pr-4">
                  {faq?.question}
                </h3>
                <div className="flex-shrink-0">
                  <Icon
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-muted-foreground"
                  />
                </div>
              </button>

              {openFAQ === faq?.id && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq?.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <div className="bg-muted rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our packaging experts are here to help with any specific concerns about your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+91-81263-74473"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Call Expert: +91 81263 74473 / +91 81487 85048
              </a>
              <a
                href="mailto:admin@dntrading.co.in"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Email: admin@dntrading.co.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;