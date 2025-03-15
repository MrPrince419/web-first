import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const timeoutRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      industry: "E-commerce Retail",
      quote: "Prince transformed our marketing operations with his custom email automation. What used to take my team 15 hours per week now takes just 2 hours. The ROI has been incredible!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      industry: "SaaS Technology",
      quote: "After implementing Prince's CRM automation solutions, our sales team can focus on building relationships instead of data entry. Lead qualification time dropped by 60%!",
      rating: 5,
    },
    {
      id: 3,
      name: "Jasmine Patel",
      position: "Operations Manager",
      industry: "Management Consulting",
      quote: "Prince's data processing automation saved us from hiring an additional team member. The systems are reliable, the support is excellent, and the impact on our business efficiency is undeniable.",
      rating: 4,
    }
  ];
  
  const nextTestimonial = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]); // Added missing dependency

  const prevTestimonial = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const startTimeout = () => {
      timeoutRef.current = setTimeout(() => {
        nextTestimonial();
      }, 8000); // Change testimonial every 8 seconds
    };

    startTimeout();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  // Reset the timer when manually changing testimonials
  const handleManualChange = (callback) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    callback();
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-gold' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextTestimonial]); // Added missing dependency

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about our automation solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute top-0 left-0 w-full h-full flex flex-col md:flex-row bg-white rounded-xl shadow-md p-8 ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                initial={{ 
                  x: direction === 'right' ? 100 : -100, 
                  opacity: 0 
                }}
                animate={{ 
                  x: index === currentIndex ? 0 : direction === 'right' ? -100 : 100,
                  opacity: index === currentIndex ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="flex mb-2">
                    {renderStars(testimonial.rating)}
                  </div>

                  <FaQuoteLeft className="text-gold text-3xl mb-4" />
                </div>

                <div className="flex-1">
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-lg">- {testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.industry}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons and indicators */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-0 md:-mx-12">
            <button
              onClick={() => handleManualChange(prevTestimonial)}
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => handleManualChange(nextTestimonial)}
              className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  handleManualChange(() => setCurrentIndex(index));
                }}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gold' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;