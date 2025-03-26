import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaRobot } from 'react-icons/fa';
import Timeline from './Timeline';
import FAQ from './FAQ';
import SocialProof from './SocialProof';
import './AboutContent.css';

const AboutContent = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const stats = [
    { icon: <FaRobot />, value: '50+', label: 'Business Processes Automated' },
    { icon: <FaChartLine />, value: '40%', label: 'Average Cost Reduction' },
    { icon: <FaUsers />, value: '25+', label: 'Satisfied Clients' }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section 
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-forum font-bold mb-4 text-primary">About Prince AI Automation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Empowering businesses through intelligent automation solutions since 2024.</p>
      </motion.section>

      <motion.section 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-forum font-bold mb-6 text-primary">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          At Prince AI Automation, we're dedicated to transforming how businesses operate through 
          cutting-edge AI and automation technologies. We believe in creating solutions that not only 
          streamline operations but fundamentally enhance how businesses serve their customers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/services" className="bg-gold text-navy font-bold py-3 px-6 rounded-lg hover:bg-orange transition-colors">Explore Our Services</a>
          <a href="/contact" className="border-2 border-gold text-gold hover:bg-gold/10 font-bold py-3 px-6 rounded-lg transition-colors">Get in Touch</a>
        </div>
      </motion.section>

      <motion.section 
        className="mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-forum font-bold mb-10 text-center text-primary">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center"
              whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-gold text-4xl mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Timeline />

      <SocialProof />

      <FAQ />
    </div>
  );
};

export default AboutContent;
