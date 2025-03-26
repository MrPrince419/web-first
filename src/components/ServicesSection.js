import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCheck, FaEnvelope, FaComments, 
  FaSyncAlt, FaHeadset, FaDatabase, FaChartBar, FaRocket, FaArrowRight, FaChevronLeft 
} from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

const PricingCard = ({ plan, isPopular, features, price, faq, planId }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="pricing-card-container">
      <div className={`pricing-card ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front side */}
        <div className={`pricing-card-face pricing-card-front ${isPopular ? 'popular' : ''}`}>
          {isPopular && (
            <div className="popular-badge">Most Popular 🔥</div>
          )}
          
          <h3 className="plan-title">{plan}</h3>
          <div className="price">
            <span className="amount">${price}</span>
            <span className="period">CAD/month</span>
          </div>
          
          <ul className="features">
            {features.map((feature, index) => (
              <li key={index}>
                <FaCheck className="check-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="card-actions">
            <Link to="/contact" className="cta-link">
              <button className={`cta-button ${isPopular ? 'cta-button-popular' : ''}`}>
                Get Started
              </button>
            </Link>
            
            {faq && (
              <button 
                onClick={() => setIsFlipped(true)}
                className="learn-more-button"
              >
                <span>Learn More</span>
                <FaArrowRight className="arrow-icon" />
              </button>
            )}
          </div>
        </div>
        
        {/* Back side */}
        <div className={`pricing-card-face pricing-card-back ${isPopular ? 'popular' : ''}`}>
          <div className="back-content">
            <div className="back-header">
              <h3 className="back-title">{plan} Plan</h3>
              {isPopular && (
                <span className="popular-tag">Popular</span>
              )}
            </div>
            
            <div className="faq-content">
              <h4 className="faq-question">{faq.question}</h4>
              <p className="faq-answer">{faq.answer}</p>
            </div>
            
            <button 
              onClick={() => setIsFlipped(false)}
              className="back-button"
            >
              <FaChevronLeft className="back-icon" />
              <span>Back to Plan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const pricingPlans = [
    {
      plan: "Starter",
      price: 500,
      isPopular: false,
      planId: "starter",
      features: [
        "Email automation setup",
        "Basic social media scheduling",
        "Monthly strategy call",
        "Email support",
        "1 workflow automation"
      ],
      faq: {
        question: "What's included in the Starter Plan?",
        answer: "The Starter Plan is perfect for small businesses beginning their automation journey. It includes email automation setup, basic social media scheduling, a monthly strategy call, email support, and one custom workflow automation."
      }
    },
    {
      plan: "Growth",
      price: 900,
      isPopular: true,
      planId: "growth",
      features: [
        "Everything in Starter",
        "Advanced CRM integration",
        "Customer support automation",
        "Bi-weekly strategy calls",
        "3 workflow automations",
        "Priority email support"
      ],
      faq: {
        question: "How does the Growth Plan help my business scale?",
        answer: "The Growth Plan provides more comprehensive automation capabilities with 3 custom workflows, advanced CRM integration, customer support automation, and bi-weekly strategy calls to ensure your automation systems evolve with your business needs."
      }
    },
    {
      plan: "Enterprise",
      price: 1500,
      isPopular: false,
      planId: "enterprise",
      features: [
        "Everything in Growth",
        "Full marketing automation",
        "Custom AI implementation",
        "Weekly strategy calls",
        "Unlimited workflow automations",
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
      description: "Automate Emails, Save Hours",
      subtext: "Set up sequences for onboarding, follow-ups, and campaigns.",
      icon: FaEnvelope
    },
    {
      title: "Social Media Management",
      description: "Grow Your Social Presence",
      subtext: "Automate posting, tracking, and analytics across platforms.",
      icon: FaComments
    },
    {
      title: "CRM Integration",
      description: "Sync Your CRM Seamlessly",
      subtext: "Connect customer data for a smoother workflow.",
      icon: FaSyncAlt
    },
    {
      title: "Customer Support",
      description: "Faster Support with AI",
      subtext: "Use chatbots and ticketing to cut response times.",
      icon: FaHeadset
    },
    {
      title: "Data Entry & Processing",
      description: "Eliminate Manual Data Work",
      subtext: "Automate entry, processing, and extraction.",
      icon: FaDatabase
    },
    {
      title: "Reporting & Analytics",
      description: "Track Performance Easily",
      subtext: "Get automated reports and dashboards.",
      icon: FaChartBar
    }
  ];

  return (
    <SectionWrapper id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaRocket className="text-gold text-2xl mr-2" />
            <h2 className="text-4xl font-forum font-bold">Our Services</h2>
          </div>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Custom automation solutions tailored to your specific business needs
          </p>
        </motion.div>

        {/* Services Grid with Icons */}
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
                className="bg-white rounded-lg shadow-md overflow-hidden border-transparent flex flex-col h-full"
                whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="text-gold text-4xl mb-4">
                    <service.icon />
                  </div>
                  <h4 className="text-xl font-bold mb-2 break-words">{service.title}</h4>
                  <p className="font-medium text-gray-700 mb-2 break-words">{service.description}</p>
                  <p className="text-gray-600 text-base break-words flex-grow">{service.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
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
          <h3 className="text-xl font-forum font-bold mb-4 break-words">Important Note</h3>
          <p className="break-words">An upfront consultation fee of $150 CAD is required to secure your spot. This fee covers the initial audit and planning phase and is non-refundable after the consultation.</p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;