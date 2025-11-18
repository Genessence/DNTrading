import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Manufacturing Manager",
      company: "Steel Dynamics Ltd",
      companyLogo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      testimonial: `DN Trading has been our packaging partner for over 3 years. Their LDPE pouches have reduced our packaging costs by 25% while maintaining superior quality. The on-time delivery is exceptional - 99.8% success rate in our experience.`,
      metrics: {
        costSaving: "25%",
        timeReduction: "40%",
        qualityImprovement: "99.2%"
      },
      videoThumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Procurement Head",
      company: "FoodTech Industries",
      companyLogo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      testimonial: `The sustainable packaging solutions from DN Trading helped us achieve our environmental goals. Our customers love the eco-friendly packaging, and we've seen a 30% increase in customer satisfaction scores.`,
      metrics: {
        costSaving: "15%",
        timeReduction: "35%",
        qualityImprovement: "96.8%"
      },
      videoThumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Operations Director",
      company: "AutoParts Manufacturing",
      companyLogo: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      testimonial: `Custom packaging solutions for our automotive parts have been game-changing. DN Trading understood our unique requirements and delivered exactly what we needed. ROI was achieved within 6 months.`,
      metrics: {
        costSaving: "35%",
        timeReduction: "50%",
        qualityImprovement: "98.5%"
      },
      videoThumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentTestimonial((prev) => 
          prev === testimonials?.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials?.length]);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from manufacturing companies who trust DN Trading
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video/Image Section */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={testimonials?.[currentTestimonial]?.videoThumbnail}
                    alt={`${testimonials?.[currentTestimonial]?.name} testimonial video`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                    >
                      <Icon name="Play" size={24} className="text-primary ml-1" />
                    </button>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">
                      {testimonials?.[currentTestimonial]?.metrics?.costSaving}
                    </div>
                    <div className="text-xs text-muted-foreground">Cost Saving</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">
                      {testimonials?.[currentTestimonial]?.metrics?.timeReduction}
                    </div>
                    <div className="text-xs text-muted-foreground">Time Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {testimonials?.[currentTestimonial]?.metrics?.qualityImprovement}
                    </div>
                    <div className="text-xs text-muted-foreground">Quality Score</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div>
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonials?.[currentTestimonial]?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonials?.[currentTestimonial]?.testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonials?.[currentTestimonial]?.avatar}
                    alt={testimonials?.[currentTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {testimonials?.[currentTestimonial]?.name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials?.[currentTestimonial]?.position}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonials?.[currentTestimonial]?.companyLogo}
                      alt={testimonials?.[currentTestimonial]?.company}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="text-right">
                      <div className="font-medium text-foreground">
                        {testimonials?.[currentTestimonial]?.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  currentTestimonial === index
                    ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Metrics Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25%</div>
            <div className="text-muted-foreground">Avg Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-muted-foreground">Delivery Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6 Months</div>
            <div className="text-muted-foreground">Avg ROI Timeline</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;