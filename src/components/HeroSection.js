import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaArrowRight, 
  FaQuoteRight, 
  FaRegClock, 
  FaRegMoneyBillAlt, 
  FaChartLine 
} from 'react-icons/fa';
import useAnalytics from '../hooks/useAnalytics';

// Services data
const services = [
  {
    icon: FaRegClock,
    title: "Automate Repetitive Tasks",
    description: "Eliminate Busywork—Focus on Growth"
  },
  {
    icon: FaRegMoneyBillAlt,
    title: "Cut Operational Costs",
    description: "Slash Costs 30-50% with Smart Automation"
  },
  {
    icon: FaChartLine,
    title: "Scale Your Business",
    description: "Grow Seamlessly with Less Staff"
  },
  {
    icon: FaRocket,
    title: "Custom AI Solutions",
    description: "AI Tools Built Just for Your Business"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Maria Rodriguez",
    business: "Coffee Shop Owner",
    quote: "Prince AI Automation helped us set up an inventory system that alerts us before we run out of supplies. We've cut our emergency orders by 90%!"
  },
  {
    name: "David Chen",
    business: "Real Estate Agency",
    quote: "The automated client follow-up system saved our agents 15 hours per week. We now close 30% more deals without adding staff."
  },
  {
    name: "Sarah Johnson",
    business: "E-commerce Store",
    quote: "Their order processing automation reduced our fulfillment time by 65%. Our customers are happier and we've seen a 40% reduction in service tickets."
  }
];

// Optimize ServiceCard component
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border-t-4 border-gold hover:border-orange transition-all duration-300"
      whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="text-gold text-4xl mb-4" aria-hidden="true" />
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </motion.div>
  );
};

// Optimize testimonial rendering
const TestimonialCard = ({ testimonial }) => (
  <motion.div 
    className="bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-gold"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaQuoteRight className="text-gold text-xl mb-3" aria-hidden="true" />
    <p className="text-base italic mb-4">"{testimonial.quote}"</p>
    <p className="font-bold">{testimonial.name}</p>
    <p className="text-sm text-gray-600">{testimonial.business}</p>
  </motion.div>
);

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();
  
  const handleHeroCTAClick = () => {
    trackCTAClick('hero_get_started');
  };
  
  return (
    <section className="hero-section">
      <div 
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark gradient overlay - slightly adjusted for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/75 z-0"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center px-4 sm:px-6"
            >
              <div className="flex items-center justify-center mb-4 flex-wrap">
                <FaRocket className="text-gold text-3xl sm:text-4xl mr-2" />
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-forum font-bold text-white break-words">
                  Revolutionize Your Business with <span className="text-gold">AI Automation</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl mb-4 text-white">
                Save Time, Cut Costs, Scale Smarter with Custom AI Tools
              </p>
              <p className="text-md mb-8 text-white/80">
                Your Partner in AI-Powered Growth
              </p>
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <Link to="/services" onClick={handleHeroCTAClick}>
                <button 
                  className="bg-orange text-white text-lg font-bold py-4 px-8 rounded-lg hover:bg-gold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
                >
                  Get Started Today <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Services Cards Section - Simplified DOM structure */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-forum font-bold mb-10 text-center">How We Help Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          {/* Testimonial Section - Simplified DOM structure */}
          <div className="mt-16">
            <h3 className="text-2xl font-forum font-bold mb-6 text-center">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;