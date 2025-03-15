import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <SEO 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist. Return to Prince AI Automation's homepage."
        url="/404"
      />
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl font-bold text-gold mb-4">404</h1>
          <h2 className="text-3xl font-forum font-bold mb-6">Page Not Found</h2>
          <p className="mb-8 text-lg text-gray-600">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <motion.button 
                className="w-full bg-gold text-navy font-bold py-3 px-6 rounded-lg hover:bg-orange transition-colors flex justify-center items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHome className="mr-2" />
                Back to Home
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                className="w-full bg-gray-100 text-navy font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex justify-center items-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEnvelope className="mr-2" />
                Contact Support
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
