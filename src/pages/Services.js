import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <main className="min-h-screen">
      <SEO 
        title="AI Automation Services | Prince AI Automation"
        description="Explore our range of AI automation services designed to streamline your business operations and boost productivity."
        url="/services"
      />
      
      {/* Services Hero with Background Image */}
      <section 
        className="py-20 relative flex items-center min-h-[60vh]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/75 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-forum font-bold mb-6 text-white">
              AI-Powered <span className="text-gold">Automation Services</span>
            </h1>
            <p className="text-lg mb-8 text-white/90">
              Streamline your operations, reduce costs, and focus on growth with our custom automation solutions tailored to your unique business needs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <a 
                href="#services" 
                className="bg-gold text-navy font-bold py-3 px-8 rounded-lg hover:bg-orange transition-colors inline-block"
              >
                Explore Our Services Below
              </a>
            </motion.div>
          </motion.div>
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
