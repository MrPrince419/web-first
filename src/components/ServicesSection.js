import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCheck, FaEnvelope, FaComments, FaSyncAlt, FaHeadset, 
  FaDatabase, FaChartBar, FaRocket, FaArrowRight, FaChevronLeft,
  FaIndustry, FaStore, FaHospital, FaBriefcase
} from 'react-icons/fa'; // Removed unused FaSearch
import SectionWrapper from './SectionWrapper';

const PricingCard = ({ plan, isPopular, features, price, faq, planId }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="pricing-card-container">
      <div className={`pricing-card ${isFlipped ? 'is-flipped' : ''}`}>
        {/* Front side */}
        <div className={`pricing-card-face pricing-card-front ${isPopular ? 'popular' : ''}`}>
          {isPopular && <div className="popular-badge">Most Popular 🔥</div>}
          <h3 className="plan-title">{plan}</h3>
          <div className="price">
            {typeof price === 'number' ? (
              <>
                <span className="amount">${price}</span>
                <span className="period">CAD/month</span>
              </>
            ) : (
              <span className="amount">{price}</span>
            )}
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
                Learn More <FaArrowRight className="text-sm" />
              </button>
            )}
          </div>
        </div>

        {/* Back side */}
        <div className={`pricing-card-face pricing-card-back ${isPopular ? 'popular' : ''}`}>
          <div className="back-header">
            <h3 className="font-bold text-xl">{plan} Plan FAQ</h3>
          </div>
          <div className="faq-content">
            <h4 className="faq-question">{faq.question}</h4>
            <p className="faq-answer">{faq.answer}</p>
          </div>
          <button 
            onClick={() => setIsFlipped(false)}
            className="back-button"
          >
            <FaChevronLeft className="text-sm" />
            Back to Plan
          </button>
        </div>
      </div>
    </div>
  );
};

// New ServiceFilter component
const ServiceFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'retail', label: 'Retail', icon: FaStore },
    { id: 'healthcare', label: 'Healthcare', icon: FaHospital },
    { id: 'manufacturing', label: 'Manufacturing', icon: FaIndustry }
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center px-4 py-2 rounded-full transition-all ${
              activeFilter === filter.id
                ? 'bg-gold text-navy shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {filter.icon && <filter.icon className="mr-2" />}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Enhanced ServiceCard component
const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="text-gold text-4xl mb-4">
          <service.icon />
        </div>
        <h4 className="text-xl font-bold mb-2">{service.title}</h4>
        <p className="font-medium text-gray-700 mb-4">{service.description}</p>
        <div className="space-y-4">
          <div className="text-sm">
            <div className="font-semibold mb-2">Ideal For:</div>
            <ul className="space-y-1 text-gray-600">
              {service.idealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-sm">
            <div className="font-semibold mb-2">Average Results:</div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-xl font-bold text-gold">{service.results.metric}</div>
              <div className="text-gray-600">{service.results.description}</div>
            </div>
          </div>

          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <Link 
                to="/contact" 
                className="flex items-center justify-center w-full bg-gold text-navy px-4 py-2 rounded-lg hover:bg-orange transition-colors"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const comparisonData = [
    {
      feature: "Email Automation",
      starter: "Basic setup",
      growth: "Advanced features",
      enterprise: "Full automation"
    },
    {
      feature: "Social Media",
      starter: "Basic scheduling",
      growth: "Advanced analytics",
      enterprise: "Full management"
    },
    {
      feature: "Strategy Calls",
      starter: "Monthly",
      growth: "Bi-weekly",
      enterprise: "Weekly"
    },
    {
      feature: "Support Level",
      starter: "Email only",
      growth: "Priority email",
      enterprise: "24/7 priority"
    },
    {
      feature: "Workflow Automation",
      starter: "1 workflow",
      growth: "3 workflows",
      enterprise: "Unlimited"
    },
    {
      feature: "CRM Integration",
      starter: "Basic",
      growth: "Advanced",
      enterprise: "Custom"
    },
    {
      feature: "AI Implementation",
      starter: "✖",
      growth: "Basic",
      enterprise: "Custom"
    },
    {
      feature: "Custom Integrations",
      starter: "✖",
      growth: "✖",
      enterprise: "✓"
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Discovery & Setup",
      duration: "Week 1",
      description: "Understanding your needs and implementing core automations",
      tasks: [
        "Initial consultation and needs analysis",
        "Core system setup and configuration",
        "Basic automation implementation",
        "Initial team training"
      ]
    },
    {
      step: 2,
      title: "Optimization & Launch",
      duration: "Week 2",
      description: "Fine-tuning and full system deployment",
      tasks: [
        "System testing and optimization",
        "Advanced feature implementation",
        "Final team training",
        "Go-live support"
      ]
    }
  ];

  const pricingPlans = [
    {
      plan: "Starter",
      price: 600,  // Changed from 500
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
      price: 1000,  // Changed from 900
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
      price: "Custom",  // Changed from 1500
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

  // Enhanced services data
  const services = [
    {
      title: "Email Automation",
      description: "Automate Emails, Save Hours",
      icon: FaEnvelope,
      idealFor: [
        "Businesses with regular customer communications",
        "Companies looking to scale their outreach",
        "Teams spending too much time on manual emails"
      ],
      results: {
        metric: "70% Time Saved",
        description: "Average reduction in email management time"
      },
      features: [
        "Smart email scheduling",
        "Personalized templates",
        "Trigger-based workflows",
        "Analytics and reporting"
      ],
      integrations: ["Gmail", "Outlook", "HubSpot", "Mailchimp"],
      industries: ["retail", "professional"],
      faq: {
        question: "How quickly can I see results from email automation?",
        answer: "Most clients see significant time savings within the first week. Our email automation typically reduces email management time by 70% and improves response rates by 35%."
      }
    },
    {
      title: "Social Media Management",
      description: "Grow Your Social Presence",
      icon: FaComments,
      idealFor: [
        "Businesses wanting consistent social presence",
        "Marketing teams seeking efficiency",
        "Companies targeting multiple platforms"
      ],
      results: {
        metric: "60% More Engagement",
        description: "Increased social media interaction"
      },
      features: [
        "Content scheduling",
        "Analytics dashboard",
        "Automated responses",
        "Cross-platform posting"
      ],
      integrations: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
      industries: ["retail", "professional"],
      faq: {
        question: "Can I maintain my brand voice with automated social posts?",
        answer: "Absolutely! We customize all automation rules to match your brand voice and style. Our AI learns from your existing content to maintain consistency while saving you time."
      }
    },
    {
      title: "CRM Integration",
      description: "Sync Your CRM Seamlessly",
      icon: FaSyncAlt,
      idealFor: [
        "Businesses with fragmented customer data",
        "Sales teams needing better insights",
        "Companies using multiple CRM tools"
      ],
      results: {
        metric: "50% Efficiency Boost",
        description: "Improved sales and customer management"
      },
      features: [
        "Seamless data sync",
        "Customizable fields",
        "Real-time updates",
        "Advanced reporting"
      ],
      integrations: ["Salesforce", "Zoho", "Pipedrive", "HubSpot"],
      industries: ["professional", "manufacturing"],
      faq: {
        question: "Will this work with my existing CRM system?",
        answer: "Yes! We support all major CRM platforms including Salesforce, HubSpot, and more. Our integration process ensures seamless data flow while maintaining your existing workflows."
      }
    },
    {
      title: "Customer Support",
      description: "Faster Support with AI",
      icon: FaHeadset,
      idealFor: [
        "Businesses with high support volume",
        "Teams looking to reduce response times",
        "Companies wanting to improve customer satisfaction"
      ],
      results: {
        metric: "40% Faster Response",
        description: "Reduced average response time"
      },
      features: [
        "AI chatbots",
        "Automated ticketing",
        "Knowledge base integration",
        "Customer feedback loops"
      ],
      integrations: ["Zendesk", "Freshdesk", "Intercom", "Drift"],
      industries: ["healthcare", "professional"],
      faq: {
        question: "How do you balance automation with personal touch?",
        answer: "Our AI system handles routine inquiries while intelligently routing complex issues to your team. This reduces response time by 40% while maintaining high customer satisfaction."
      }
    },
    {
      title: "Data Entry & Processing",
      description: "Eliminate Manual Data Work",
      icon: FaDatabase,
      idealFor: [
        "Businesses with large data volumes",
        "Teams spending too much time on data entry",
        "Companies needing accurate data processing"
      ],
      results: {
        metric: "80% Time Saved",
        description: "Reduction in manual data entry time"
      },
      features: [
        "Automated data entry",
        "Data validation",
        "Batch processing",
        "Real-time updates"
      ],
      integrations: ["Excel", "Google Sheets", "SAP", "Oracle"],
      industries: ["manufacturing", "healthcare"],
      faq: {
        question: "How accurate is the automated data processing?",
        answer: "Our systems achieve 99.9% accuracy through multiple validation layers. All critical data is verified, and you maintain full control over approval processes."
      }
    },
    {
      title: "Reporting & Analytics",
      description: "Track Performance Easily",
      icon: FaChartBar,
      idealFor: [
        "Businesses needing regular reports",
        "Teams looking for data-driven insights",
        "Companies wanting to track KPIs"
      ],
      results: {
        metric: "90% More Insights",
        description: "Improved decision-making with data"
      },
      features: [
        "Custom dashboards",
        "Automated reporting",
        "Real-time analytics",
        "Data visualization"
      ],
      integrations: ["Tableau", "Power BI", "Google Analytics", "Looker"],
      industries: ["professional", "retail"],
      faq: {
        question: "Can I customize my dashboards and reports?",
        answer: "Yes! We create fully customized dashboards based on your KPIs. Reports can be automated and scheduled, saving hours of manual reporting time each week."
      }
    }
  ];

  // Filter services based on active filter
  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.industries.includes(activeFilter));

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

        <ServiceFilter 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter}
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* Enhanced Comparison Table */}
        <motion.div 
          className="mt-20 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-forum font-bold text-center mb-8">Plan Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Starter</th>
                  <th className="px-6 py-4 text-center">Growth</th>
                  <th className="px-6 py-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">{row.starter}</td>
                    <td className="px-6 py-4 text-center">{row.growth}</td>
                    <td className="px-6 py-4 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        {/* Enhanced Implementation Timeline */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-forum font-bold text-center mb-8">Implementation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </div>
                  <div className="text-sm text-gray-500">{step.duration}</div>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                <ul className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-sm">
                      <FaCheck className="text-gold mt-1 mr-2 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

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