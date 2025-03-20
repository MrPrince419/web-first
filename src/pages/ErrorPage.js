import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaHome, FaEnvelope } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-navy text-white p-8 text-center">
          <FaExclamationCircle className="text-gold text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="mt-2 text-white/80">The page you're looking for doesn't exist or has been moved.</p>
        </div>
        
        <div className="p-8">
          <p className="text-gray-600 mb-8 text-center">
            We're sorry for the inconvenience. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 px-6 rounded-lg hover:bg-orange transition-colors"
            >
              <FaHome /> Go to Home
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border border-navy text-navy font-bold py-3 px-6 rounded-lg hover:bg-navy/5 transition-colors"
            >
              <FaEnvelope /> Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
