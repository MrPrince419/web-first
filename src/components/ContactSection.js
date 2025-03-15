import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../contexts/ToastContext';
import LoadingAnimation from './LoadingAnimation';

const ContactSection = () => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: 'Not specified'
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xpwpwwpn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const responseData = await response.json();
      console.log('Formspree response:', responseData); // Debug log

      if (response.ok) {
        showSuccess('Thank you! Your message has been received. I will get back to you within 24 hours.');
        
        // Reset form with a proper initial state
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          budget: 'Not specified'
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      showError('Oops! Something went wrong. Please try again or contact me directly via email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-forum font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg mx-auto">
              Schedule a consultation today and discover how AI automation can transform your business operations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Your Phone Number (Optional)"
                />
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="What's on your mind?"
                  required
                />
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder="Tell me more about your project!"
                  required
                ></textarea>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget (Optional)</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="Not specified">Not specified</option>
                  <option value="$500 - $1,000">$500 - $1,000 CAD</option>
                  <option value="$1,000 - $2,500">$1,000 - $2,500 CAD</option>
                  <option value="$2,500 - $5,000">$2,500 - $5,000 CAD</option>
                  <option value="$5,000+">$5,000+ CAD</option>
                </select>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="bg-gold hover:bg-orange text-navy font-bold py-3 px-6 rounded-lg transition-colors w-full md:w-auto flex justify-center items-center"
              >
                {loading ? <LoadingAnimation size="sm" color="navy" /> : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;