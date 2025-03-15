import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';
import { serviceImages, defaultImage } from '../utils/unsplashImages';

const Services = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="AI Automation Services | Prince AI Automation"
        description="Explore our range of AI automation services designed to streamline your business operations and boost productivity."
        url="/services"
      />
      
      {/* Services Hero */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-forum font-bold mb-6">
                AI-Powered <span className="text-gold">Automation Services</span>
              </h1>
              <p className="text-lg mb-8">
                Streamline your operations, reduce costs, and focus on growth with our custom automation solutions tailored to your unique business needs.
              </p>
            </motion.div>
            
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={serviceImages.automation || defaultImage} 
                  alt="AI Automation Services" 
                  className="w-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Content */}
      <ServicesSection />
      
      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
};

export default Services;
