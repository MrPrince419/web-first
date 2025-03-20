import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaBuilding, FaStore, FaIndustry } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Owner",
      industry: "E-commerce Store",
      quote: "Prince transformed our order fulfillment process with custom automation. What used to take my team 12 hours per week now takes just 4 hours. The ROI has been incredible!",
      rating: 5,
      icon: FaStore
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Partner",
      industry: "Law Firm",
      quote: "After implementing Prince's document automation solutions, our paralegals can focus on more complex tasks instead of paperwork. Document processing time dropped by 60%!",
      rating: 5,
      icon: FaBuilding
    },
    {
      id: 3,
      name: "Jasmine Patel",
      position: "Operations Manager",
      industry: "Manufacturing Company",
      quote: "Prince's inventory tracking automation saved us from costly production delays. The systems are reliable, the support is excellent, and the impact on our efficiency is undeniable.",
      rating: 4,
      icon: FaIndustry
    }
  ];
  
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const timeout = setTimeout(nextTestimonial, 5000);
    return () => clearTimeout(timeout);
  }, [nextTestimonial, currentIndex]);

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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
            See how our automation solutions have transformed businesses across industries
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Cards - Fixed Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="h-2 bg-gold"></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gold mr-4 flex-shrink-0">
                      <testimonial.icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 text-gold">
                    <FaQuoteLeft className="text-xl opacity-50" />
                  </div>
                  
                  <p className="text-gray-700 italic mb-4 flex-grow">{testimonial.quote}</p>
                  
                  <div className="flex mt-auto">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;