import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Phone number copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <main className="pt-20" id="main-content">
      <SEO 
        title="Contact Us | Prince AI Automation"
        description="Get in touch with us to discuss your automation needs and explore how our AI solutions can transform your business operations and workflow efficiency."
        url="/contact"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&auto=format&fit=crop"
        imageAlt="Prince AI Automation contact and customer service team"
        type="website"
        robots="index, follow"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Prince AI Automation",
          "description": "Get in touch with us to discuss your automation needs and explore how our AI solutions can transform your business operations and workflow efficiency.",
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
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-forum font-bold mb-6">
              Get in <span className="text-gold">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with AI automation? We're here to help you get started.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a 
                      href="mailto:uwagboe.o.p@gmail.com"
                      className="text-gray-600 hover:text-gold transition-colors"
                    >
                      uwagboe.o.p@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <button
                      onClick={() => copyToClipboard('+12493564705')}
                      className="text-gray-600 hover:text-gold transition-colors"
                    >
                      +1 (249) 356-4705
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-gold mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600">
                      Headquartered in Sault Ste. Marie, Ontario, Canada
                      <br />
                      <span className="text-sm">Serving clients worldwide remotely</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-gold focus:border-gold"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-navy font-bold py-3 px-6 rounded-lg hover:bg-orange transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
