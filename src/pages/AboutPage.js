import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaCogs } from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: FaRocket,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI automation."
    },
    {
      icon: FaUsers,
      title: "Client Focus",
      description: "Your success is our success. We're committed to delivering solutions that work for you."
    },
    {
      icon: FaLightbulb,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do."
    },
    {
      icon: FaCogs,
      title: "Efficiency",
      description: "We believe in smart solutions that maximize your resources."
    }
  ];

  return (
    <main className="pt-20">
      <SEO 
        title="About Us | Prince AI Automation"
        description="Learn about Prince AI Automation and our mission to revolutionize businesses through custom AI solutions."
        url="/about"
      />
      
      {/* Hero Section */}
      <section 
        className="py-20 relative bg-navy"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/80"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-forum font-bold mb-6 text-white">
              About <span className="text-gold">Prince AI Automation</span>
            </h1>
            <p className="text-xl text-white/90">
              Empowering businesses through intelligent automation solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg mb-6">
              Prince AI Automation is a leading provider of custom AI automation solutions, dedicated to helping businesses streamline their operations and achieve unprecedented efficiency.
            </p>
            <p className="text-lg mb-6">
              Our team of experts combines deep technical knowledge with practical business experience to deliver automation solutions that drive real results. We work closely with each client to understand their unique challenges and develop tailored solutions that make a real impact.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">To empower businesses with intelligent automation solutions that save time, reduce costs, and drive growth. We're committed to making advanced AI technology accessible and practical for organizations of all sizes.</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">To become the global leader in business process automation, setting new standards for efficiency and innovation in how businesses operate in the digital age.</p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <value.icon className="text-gold text-3xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
