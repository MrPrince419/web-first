import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaChartLine, FaRegHandshake, FaArrowRight } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Hero background with AI visual and gradient overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488229297570-58520851e868?w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Neural network animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-white">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-gold/30 rounded-full"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatAbout ${Math.random() * 10 + 5}s linear infinite`
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i + 15}
              className="absolute bg-transparent border border-gold/20"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `pulse ${Math.random() * 10 + 10}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-forum font-bold mb-4">
            Hi, I'm Prince—Your AI Automation Expert
            <span className="inline-block ml-2 animate-pulse"><FaRocket className="text-gold" /></span>
          </h3>
          <p className="text-lg mb-10">
            Based in Sault Ste. Marie, Ontario, I help small businesses like yours 
            <span className="text-gold font-medium"> save time and money </span> 
            with custom AI solutions. From social media automation to CRM updates, 
            I'll streamline your operations so you can focus on growth. Let's unlock 
            the power of AI for your business!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card sections with icons */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="text-gold text-5xl mb-6" />
            <h4 className="text-xl font-bold mb-3">I Live for AI Innovation</h4>
            <p className="text-base text-gray-600">
              I'm always exploring new AI tools to bring cutting-edge solutions to your business.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <FaChartLine className="text-gold text-5xl mb-6" />
            <h4 className="text-xl font-bold mb-3">Real Results, Real Impact</h4>
            <p className="text-base text-gray-600">
              My solutions save 30-50% on time with clear, measurable ROI.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <FaRegHandshake className="text-gold text-5xl mb-6" />
            <h4 className="text-xl font-bold mb-3">Your Success, My Priority</h4>
            <p className="text-base text-gray-600">
              I tailor solutions to your needs and provide ongoing support.
            </p>
          </motion.div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link to="/contact">
            <button className="bg-gold text-navy text-lg font-bold py-4 px-8 rounded-lg hover:bg-orange transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
              Get Started Today <FaArrowRight className="ml-2" />
            </button>
          </Link>
          <div className="mt-4">
            <Link to="/services" className="text-gold hover:text-orange transition-colors inline-flex items-center">
              Learn How I Can Help <FaArrowRight className="ml-1 text-sm" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;