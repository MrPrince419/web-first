import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../contexts/ToastContext';
import { sanitizeInput, saveFormProgress, getFormProgress } from '../utils/formUtils';
import { validateForm, handleFormSubmit } from '../utils/formHandlers';

const FormField = ({ label, id, error, ...props }) => (
  <div className="relative">
    <label htmlFor={id} className="absolute -top-2.5 left-2 bg-white px-2 text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      id={id}
      className={`w-full px-4 py-3 rounded-lg border-2 ${error ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'} bg-white focus:outline-none transition-colors`}
      {...props}
    />
    {error && (
      <p className="mt-1 text-red-500 text-sm flex items-center">
        <span className="mr-1">⚠️</span> {error}
      </p>
    )}
  </div>
);

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
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) return;

    const result = await handleFormSubmit(
      "https://formspree.io/f/xpwpwwpn", 
      { ...formData, _subject: `New contact from ${formData.name}: ${formData.subject}` }
    );

    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      showSuccess('Message sent successfully! I will respond within 24 hours.');
    } else {
      showError(result.error);
    }
  };

  const calculateProgress = () => {
    const totalFields = 5;
    const filledFields = Object.values(formData).filter(value => value.trim() !== '').length;
    return (filledFields / totalFields) * 100;
  };

  return (
    <main className="pt-20">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto"
          >
            {/* Contact Form Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              {/* Business Hours Display */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-3 text-gray-900">Business Hours (EST)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Monday - Friday</p>
                    <p className="font-medium">9:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Response Time</p>
                    <p className="font-medium">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              {/* Form Progress Indicator */}
              <div className="mb-6 bg-gray-100 h-2 rounded-full">
                <div
                  className="h-full bg-gold rounded-full transition-all duration-300"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>

              <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <FormField
                    label="Name"
                    id="name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    error={errors.name}
                  />

                  {/* Email Field */}
                  <FormField
                    label="Your Email"
                    id="email"
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    error={errors.email}
                  />

                  {/* Phone Field */}
                  <FormField
                    label="Phone Number (Optional)"
                    id="phone"
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                  />

                  {/* Subject Field */}
                  <FormField
                    label="Subject"
                    id="subject"
                    name="subject"
                    type="text" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    required
                    error={errors.subject}
                  />
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
                    className={`w-full px-4 py-3 rounded-lg border-2 ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-gold'} bg-white focus:outline-none transition-colors resize-none`}
                    placeholder="Tell me more about your project!"
                    rows="5"
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm flex items-center">
                      <span className="mr-1">⚠️</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
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

            {/* ...existing Calendly Section... */}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactSection;