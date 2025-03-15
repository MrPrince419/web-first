import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaQuestionCircle } from 'react-icons/fa';
import { serviceImages, defaultImage } from '../utils/unsplashImages';

const PricingCard = ({ plan, isPopular, features, price, faq, onClick }) => {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${
        isPopular ? 'border-2 border-gold' : 'border border-gray-200'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {isPopular && (
        <div className="bg-gold text-navy font-bold py-1 px-4 text-center">
          Most Popular 🔥
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-forum font-bold mb-2">{plan}</h3>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">CAD/month</span>
        </div>
        
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={onClick}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            isPopular 
              ? 'bg-gold text-navy hover:bg-orange' 
              : 'bg-gray-100 text-navy hover:bg-gray-200'
          }`}
        >
          Get Started
        </button>
        
        {faq && (
          <div className="mt-4">
            <button 
              onClick={() => setShowFaq(!showFaq)}
              className="flex items-center text-sm text-gray-500 hover:text-gold"
            >
              <FaQuestionCircle className="mr-1" />
              <span>Frequently Asked Question</span>
            </button>
            
            {showFaq && (
              <motion.div 
                className="mt-2 p-3 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold mb-1">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const pricingPlans = [
    {
      plan: "Starter Automation",
      price: 500,
      features: [
        "1 workflow automation setup",
        "Monthly monitoring",
        "Email support 📧"
      ],
      faq: {
        question: "What happens if I need more workflows?",
        answer: "You can upgrade to a higher plan at any time."
      }
    },
    {
      plan: "Growth Automation",
      price: 900,
      isPopular: true,
      features: [
        "Up to 3 workflow automations",
        "Weekly performance reports 📊",
        "Priority chat support 💬",
        "One-hour training session"
      ],
      faq: {
        question: "Is training included?",
        answer: "Yes, a one-hour training session is provided to help you get started."
      }
    },
    {
      plan: "Enterprise Automation",
      price: 1500,
      features: [
        "Unlimited workflow automations",
        "Bi-weekly strategy calls 🗓️",
        "Dedicated account manager 👨‍💼",
        "Custom integrations",
        "Priority support"
      ],
      faq: {
        question: "Do you offer refunds?",
        answer: "The upfront consultation fee is non-refundable, but monthly plans can be canceled with 30 days' notice."
      }
    }
  ];

  const services = [
    {
      title: "Email Automation",
      description: "Set up automated email sequences for customer onboarding, follow-ups, and marketing campaigns.",
      image: serviceImages.email || defaultImage
    },
    {
      title: "Social Media Management",
      description: "Automate content publishing, engagement tracking, and analytics reporting across platforms.",
      image: serviceImages.social || defaultImage
    },
    {
      title: "CRM Integration",
      description: "Connect and synchronize your customer data across multiple platforms for seamless workflow.",
      image: serviceImages.crm || defaultImage
    },
    {
      title: "Customer Support",
      description: "Implement AI chatbots and ticket routing systems to improve response times.",
      image: serviceImages.chatbot || defaultImage
    },
    {
      title: "Data Entry & Processing",
      description: "Eliminate manual data entry with intelligent document processing and data extraction.",
      image: serviceImages.data || defaultImage
    },
    {
      title: "Reporting & Analytics",
      description: "Generate automated reports and dashboards to track business performance metrics.",
      image: serviceImages.reporting || defaultImage
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Custom automation solutions tailored to your specific business needs
          </p>
        </motion.div>

        {/* Services Grid with Unsplash images */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultImage;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              onClick={scrollToContact}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-forum font-bold mb-4">Important Note</h3>
          <p className="text-lg">
            An upfront consultation fee of $150 CAD is required to secure your spot. This fee covers the initial audit and planning phase and is non-refundable after the consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;