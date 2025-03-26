import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, 
  FaArrowRight, 
  FaQuoteRight, 
  FaRegClock, 
  FaRegMoneyBillAlt, 
  FaChartLine,
  FaMapMarkerAlt,
  FaLightbulb,
  FaCheck,
  FaTimes
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
  },
  {
    name: "Alex Williams",
    business: "Marketing Agency",
    quote: "The social media automation tools Prince implemented for us increased our content output by 3x while maintaining quality. Our engagement rates have improved by 45%."
  }
];

// Business metrics data
const businessMetrics = [
  {
    value: "30-50%",
    label: "Cost Reduction",
    description: "Average operational cost reduction our clients experience"
  },
  {
    value: "15+",
    label: "Hours Saved Weekly",
    description: "Typical time savings per week for small business teams"
  },
  {
    value: "40%",
    label: "Productivity Boost",
    description: "Average increase in team productivity after implementation"
  }
];

// Problem-Solution data
const businessChallenges = [
  "Manual repetitive tasks consuming valuable time",
  "Inconsistent customer follow-up processes",
  "Data scattered across multiple systems",
  "High error rates in manual data entry",
  "Difficulty scaling operations with growth"
];

const ourSolutions = [
  "Custom automation workflows that eliminate busywork",
  "Automated, timely communications with perfect consistency",
  "Centralized data systems with seamless integration",
  "AI-powered data processing with minimal errors",
  "Scalable systems that grow with your business"
];

// Optimize ServiceCard component
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6"
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
    className="bg-gray-50 rounded-xl p-6 shadow-sm"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaQuoteRight className="text-gold text-xl mb-3" aria-hidden="true" />
    <p className="text-base italic mb-4">"{testimonial.quote}"</p>
    <p className="font-bold">{testimonial.name}</p>
    <p className="text-sm text-gray-600">{testimonial.business}</p>
  </motion.div>
);

// Metric Card component
const MetricCard = ({ value, label, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 text-center"
    whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-3xl font-bold text-gold mb-2">{value}</div>
    <h3 className="text-lg font-bold mb-2">{label}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const HeroSection = () => {
  const { trackCTAClick } = useAnalytics();
  
  const handleHeroCTAClick = (buttonType) => {
    trackCTAClick(`hero_${buttonType}`);
  };
  
  return (
    <section className="hero-section">
      <div 
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop')",
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
                <FaRocket className="text-gold text-3xl sm:text-4xl mr-2 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-forum font-bold text-white break-words hyphens-auto">
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
              <p className="text-xl md:text-2xl mb-4 text-white px-4">
                Save Time, Cut Costs, Scale Smarter with Custom AI Tools
              </p>
              <p className="text-md mb-4 text-white/80 px-4">
                Your Partner in AI-Powered Growth
              </p>
              <p className="flex justify-center items-center gap-2 text-white/80 text-sm mb-8 px-4 text-center flex-wrap">
                <FaMapMarkerAlt className="text-gold flex-shrink-0" />
                <span className="break-words">Headquartered in Sault Ste. Marie, Ontario, Canada • Serving clients worldwide remotely</span>
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center flex justify-center px-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" onClick={() => handleHeroCTAClick('get_started')}>
                  <button 
                    className="bg-orange text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-gold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center w-full max-w-[160px] whitespace-nowrap"
                  >
                    <span className="flex items-center">
                      Get Started <FaArrowRight className="ml-2 flex-shrink-0" />
                    </span>
                  </button>
                </Link>
                <Link to="/services" onClick={() => handleHeroCTAClick('learn_more')}>
                  <button 
                    className="bg-transparent text-white border-2 border-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center w-full max-w-[160px] whitespace-nowrap"
                  >
                    <span className="flex items-center">
                      Learn More <FaArrowRight className="ml-2 flex-shrink-0" />
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Business Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-forum font-bold mb-10 text-center">The Impact of Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessMetrics.map((metric, index) => (
              <MetricCard 
                key={index}
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Problem-Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-forum font-bold mb-10 text-center">How We Solve Your Challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Challenges Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <FaTimes className="text-orange text-xl mr-2" />
                <h3 className="text-xl font-bold">Common Business Challenges</h3>
              </div>
              <ul className="space-y-3">
                {businessChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <FaTimes className="text-orange mt-1 mr-2 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Solutions Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-gold text-xl mr-2" />
                <h3 className="text-xl font-bold">Our AI-Powered Solutions</h3>
              </div>
              <ul className="space-y-3">
                {ourSolutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
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