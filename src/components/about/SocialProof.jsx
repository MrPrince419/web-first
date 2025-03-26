import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './SocialProof.css';

const SocialProof = () => {
  // Updated testimonials to match those on the Home page
  const testimonials = [
    {
      text: "Prince AI Automation helped us set up an inventory system that alerts us before we run out of supplies. We've cut our emergency orders by 90%!",
      author: "Maria Rodriguez",
      position: "Owner",
      company: "Coffee Shop"
    },
    {
      text: "The automated client follow-up system saved our agents 15 hours per week. We now close 30% more deals without adding staff.",
      author: "David Chen",
      position: "Manager",
      company: "Real Estate Agency"
    },
    {
      text: "Their order processing automation reduced our fulfillment time by 65%. Our customers are happier and we've seen a 40% reduction in service tickets.",
      author: "Sarah Johnson",
      position: "Owner",
      company: "E-commerce Store"
    }
  ];

  return (
    <section className="mb-20">
      <motion.div
        className="bg-gray-50 py-16 px-4 rounded-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-forum font-bold mb-10 text-center text-primary">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-gold text-2xl mb-4 flex justify-center">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">Join hundreds of satisfied businesses that have transformed their operations with our AI solutions.</p>
          <div className="flex justify-center">
            <a href="/contact" className="bg-gold text-navy font-bold py-3 px-6 rounded-lg hover:bg-orange transition-colors inline-block">Get Started Today</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialProof;
