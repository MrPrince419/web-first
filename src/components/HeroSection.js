import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="hero-section"
    >
      <div className="relative min-h-screen flex items-center overflow-x-hidden bg-gradient-to-b from-navy/70 via-navy to-navy">
        {/* Background gradient - more transparent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent z-0"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 z-0 opacity-50">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-3 h-3 bg-gold/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-forum font-bold mb-6 text-white break-words">
              Transform Your Business with <span className="text-gold">AI Automation</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl mb-4 text-white">
              Save time, reduce costs, and scale efficiently with tailored automation solutions.
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              We help businesses streamline operations through custom AI workflows that handle repetitive tasks 
              and data processing, empowering you to focus on growth and innovation.
            </p>
          </motion.div>
          
          {/* 3D Floating Rocket - Centered */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <FaRocket className="text-6xl text-gold" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/about">
              <button 
                className="bg-gold text-navy text-lg font-bold py-3 px-8 rounded-lg hover:bg-orange transition-colors"
              >
                Get Started Today →
              </button>
            </Link>
          </motion.div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20px, -20px); }
            100% { transform: translate(0, 0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;