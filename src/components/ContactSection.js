import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../contexts/ToastContext';
import LoadingAnimation from './LoadingAnimation';
import { sanitizeInput, checkRateLimit, saveFormProgress, getFormProgress } from '../utils/formUtils';

const ContactSection = () => {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState(() => getFormProgress() || {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    budget: 'Not specified'
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    saveFormProgress(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!checkRateLimit()) {
      showError('Too many submissions. Please try again in an hour.');
      return;
    }

    if (!validateForm()) return;
    setLoading(true);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("https://formspree.io/f/xpwpwwpn", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New contact from ${formData.name}: ${formData.subject}`,
        }),
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        localStorage.removeItem('formProgress');
        showSuccess('Message sent successfully! I will respond within 24 hours.');
        setFormData({
          name: '', email: '', phone: '', 
          subject: '', message: '', budget: 'Not specified'
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      const errorMessage = error.name === 'AbortError' 
        ? 'Request timed out. Please try again.'
        : 'Failed to send message. Please try again or email directly.';
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-20">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form Section */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaEnvelope className="text-gold text-2xl" />
                  </div>
                  <h2 className="text-2xl font-forum font-bold">Send Me a Message</h2>
                  <p className="text-gray-600 mt-2">I'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label htmlFor="name" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                        } bg-white focus:outline-none transition-colors`}
                        placeholder="John Doe"
                        required
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-500 text-sm flex items-center">
                          <span className="mr-1">⚠️</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label htmlFor="email" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                        } bg-white focus:outline-none transition-colors`}
                        placeholder="john@example.com"
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-500 text-sm flex items-center">
                          <span className="mr-1">⚠️</span> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label htmlFor="phone" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gold bg-white focus:outline-none transition-colors"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label htmlFor="subject" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.subject ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                      } bg-white focus:outline-none transition-colors`}
                      placeholder="What's on your mind?"
                      required
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <span className="mr-1">⚠️</span> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label htmlFor="message" className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'
                      } bg-white focus:outline-none transition-colors resize-none`}
                      placeholder="Tell me more about your project!"
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm flex items-center">
                        <span className="mr-1">⚠️</span> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-orange text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ...existing Calendly Section... */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;