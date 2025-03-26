import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { ToastContext } from '../contexts/ToastContext';
import { FaEnvelope, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import useAnalytics from '../hooks/useAnalytics';
import FAQSection from '../components/FAQSection';

// Component constants defined at the file level
const CONTACT_FAQS = [
  {
    question: "How quickly will I receive a response?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can book an instant consultation through our calendar."
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "You'll receive an immediate confirmation email. Then, we'll review your inquiry and get back to you with a personalized response within 24 hours."
  },
  {
    question: "What should I prepare for the consultation?",
    answer: "Just have a general idea of your business challenges and automation goals. We'll guide the conversation and help identify the best opportunities for your business."
  },
  {
    question: "Is the consultation really free?",
    answer: "Yes! The initial 30-minute consultation is completely free. We only charge the $150 CAD consultation fee for comprehensive business audits, which is credited toward your first invoice if you proceed with our services."
  }
];

const Contact = () => {
  // Ensure we're using the context correctly
  const { showToast } = useContext(ToastContext);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { trackContactFormSubmission, trackCTAClick } = useAnalytics();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Updated with the correct Formspree endpoint
      const response = await fetch('https://formspree.io/f/xnnpqydr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target)
      });
      
      if (response.ok) {
        // Using the correct context function
        showToast('Message sent successfully! I\'ll be in touch soon.', 'success');
        
        // Track successful form submission
        trackContactFormSubmission();
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      // Using the correct context function
      showToast('There was an error sending your message. Please try again.', 'error');
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Track calendly click
  const handleCalendlyClick = () => {
    trackCTAClick('calendly_consultation');
  };

  return (
    <main className="pt-20" id="main-content">
      <SEO 
        title="Contact Me | Prince AI Automation"
        description="Get in touch or book a free consultation to see how AI automation can transform your business operations and improve efficiency."
        url="/contact"
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&auto=format&fit=crop" 
        imageAlt="Prince AI Automation business consultation and customer service"
        type="website"
        robots="index, follow"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Prince AI Automation",
          "description": "Get in touch or book a free consultation to see how AI automation can transform your business operations and improve efficiency.",
          "url": "https://princeaiautomation.netlify.app/contact",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://princeaiautomation.netlify.app/contact"
          },
          "provider": {
            "@type": "Organization",
            "name": "Prince AI Automation",
            "url": "https://princeaiautomation.netlify.app"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+12493564705",
            "contactType": "customer service",
            "email": "uwagboe.o.p@gmail.com",
            "availableLanguage": "English"
          }
        }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-forum font-bold mb-4">Let's Work Together</h1>
            <p className="text-xl text-gold">
              Get in touch or book a free consultation to see how AI automation can transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Calendly Section */}
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
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-center mb-8">
                  <FaEnvelope className="text-gold text-4xl mx-auto mb-4" />
                  <h2 className="text-2xl font-forum font-bold">Send Me a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} aria-label="Contact form">
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                      placeholder="John Doe"
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                      placeholder="john@example.com"
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>}
                  </div>
                  
                  <div className="my-4 sm:my-6">
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your Phone Number (Optional)"
                      aria-required="false"
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                      placeholder="What's on your mind?"
                      required
                      aria-required="true"
                      aria-invalid={errors.subject ? "true" : "false"}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && <p id="subject-error" className="text-red-500 text-sm mt-1" role="alert">{errors.subject}</p>}
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-gold`}
                      placeholder="Tell me more about your project!"
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-orange text-navy font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    disabled={submitting}
                    aria-disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
            
            {/* Vertical Divider for Desktop */}
            <div className="hidden lg:block w-px bg-gray-200 mx-4"></div>
            
            {/* Calendly Section with Link Button */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="text-center mb-8">
                  <FaCalendarAlt className="text-gold text-4xl mx-auto mb-4" />
                  <h2 className="text-2xl font-forum font-bold">Book a Free Consultation</h2>
                  <p className="text-gray-600 mt-4 mb-6">
                    Pick a time that works for you to discuss how AI automation can transform your business.
                  </p>
                  
                  <div className="flex items-center justify-center mt-10">
                    <a 
                      href="https://calendly.com/princeaiautomation/1hour" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={handleCalendlyClick}
                      className="inline-flex items-center bg-gold hover:bg-orange text-navy font-bold py-4 px-8 rounded-lg transition-colors shadow-md hover:shadow-xl"
                    >
                      Schedule a 1-Hour Consultation <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                  
                  <div className="mt-12">
                    <div className="flex items-center justify-center space-x-4 text-gray-600">
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-gold">1</span>
                        <span className="text-sm mt-1">Choose a Date</span>
                      </div>
                      <div className="h-px w-8 bg-gray-300"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-gold">2</span>
                        <span className="text-sm mt-1">Select a Time</span>
                      </div>
                      <div className="h-px w-8 bg-gray-300"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-gold">3</span>
                        <span className="text-sm mt-1">Confirm Details</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-lg mb-3">What to Expect</h3>
                    <ul className="text-left text-gray-600 space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-gold text-navy flex items-center justify-center text-xs mr-3 mt-0.5">1</div>
                        <span>Discuss your business challenges and automation goals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-gold text-navy flex items-center justify-center text-xs mr-3 mt-0.5">2</div>
                        <span>Explore potential automation solutions tailored to your needs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-gold text-navy flex items-center justify-center text-xs mr-3 mt-0.5">3</div>
                        <span>Get a clear roadmap for implementing AI automation in your business</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact FAQ Section */}
      <section className="py-16 bg-gray-50">
        <FAQSection title="Contact FAQs" faqs={CONTACT_FAQS} />
      </section>
    </main>
  );
};

export default Contact;
