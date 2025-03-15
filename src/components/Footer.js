import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Phone number copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-16 mt-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-forum font-bold mb-4 text-gold">Prince AI Automation</h3>
            <p className="mb-4 text-gray-600 max-w-md">
              Transform your business operations with custom AI solutions tailored to your specific needs. 
              We help businesses streamline their processes and boost productivity through intelligent automation.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-forum font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-forum font-bold mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <a href="mailto:uwagboe.o.p@gmail.com" className="hover:text-gold transition-colors flex items-center">
                  <FaEnvelope className="text-gold mt-1 mr-2" />
                  <span>Email Us</span>
                </a>
              </li>
              <li className="flex items-start cursor-pointer" onClick={() => copyToClipboard('+12493564705')}>
                <FaPhone className="text-gold mt-1 mr-2" />
                <span className="hover:text-gold transition-colors">Call Us</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gold mt-1 mr-2" />
                <span className="text-gray-600">
                  Sault Ste. Marie, Ontario, Canada
                  <br />
                  (Remote work available worldwide)
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-sm text-gray-600">
              © {currentYear} Prince AI Automation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-600 hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
