import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaLinkedin, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Phone number copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, url: "https://linkedin.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaInstagram, url: "https://instagram.com" },
    { icon: FaFacebookF, url: "https://facebook.com" },
  ];

  return (
    <footer className="bg-gray-50 py-10 mt-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-2">
              <FaRocket className="text-gold text-lg mr-2" />
              <h3 className="text-lg font-forum font-bold text-gold">Prince AI Automation</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Your Partner in AI-Powered Growth</p>
            <p className="text-xs text-gray-600 max-w-md">
              Transform your business operations with custom AI solutions tailored to your specific needs.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:mx-auto"
          >
            <h3 className="text-sm font-forum font-bold mb-2 text-gold">Quick Links</h3>
            <nav>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
                <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
                <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-gold transition-colors">Terms</Link></li>
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-forum font-bold mb-2 text-gold">Contact Us</h3>
            <ul className="space-y-1 text-xs mb-3">
              <li className="flex items-center">
                <Link to="/contact" className="hover:text-gold transition-colors flex items-center">
                  <FaEnvelope className="text-gold mr-1" />
                  <span>Email Us</span>
                </Link>
              </li>
              <li className="flex items-center cursor-pointer" onClick={() => copyToClipboard('+12493564705')}>
                <FaPhone className="text-gold mr-1" />
                <span className="hover:text-gold transition-colors">Call Us</span>
              </li>
              <li className="flex items-start">
                <a 
                  href="https://www.google.com/maps/place/Sault+Ste.+Marie,+ON,+Canada" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors flex items-start"
                >
                  <FaMapMarkerAlt className="text-gold mr-1 mt-0.5" />
                  <span className="text-gray-600">
                    Worldwide
                  </span>
                </a>
              </li>
            </ul>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <span
                  key={index}
                  className="text-gold hover:text-orange transition-colors cursor-not-allowed"
                  title="Coming Soon"
                >
                  <social.icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-4">
          <p className="text-xs text-gray-500 text-center">
            © {currentYear} Prince AI Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
