import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaStar, FaQuoteRight, FaShoppingCart, FaCalendar,
  FaFileAlt, FaRobot, FaEnvelope, FaBullhorn, FaDatabase, 
  FaSyncAlt, FaChevronLeft, FaRocket
} from 'react-icons/fa';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'email', name: 'Email Automation' },
    { id: 'social', name: 'Social Media' },
    { id: 'crm', name: 'CRM Integration' },
    { id: 'data', name: 'Data Processing' }
  ];

  // Placeholder images with improved visuals
  const placeholderImages = {
    ecommerce: "https://images.unsplash.com/photo-1468495244123-6c6c332aea4b?w=800&auto=format&fit=crop", // Workflow automation
    chatbot: "https://images.unsplash.com/photo-1635493701752-fb5e65a4be1c?w=800&auto=format&fit=crop", // AI chat interface
    document: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop", // Real estate documents
    marketing: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop", // Marketing analytics
    financial: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop", // Financial dashboard
    healthcare: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop", // Healthcare system
    social: "https://images.unsplash.com/photo-1611162618758-2a29a995354b?w=800&auto=format&fit=crop", // Social media dashboard
    email: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=800&auto=format&fit=crop", // Email marketing
    crm: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop" // CRM system
  };

  // Enhanced projects with more detailed information
  const projects = [
    {
      id: 1,
      title: "E-commerce Email Automation",
      category: "email",
      icon: FaShoppingCart,
      description: "Created a comprehensive order management system that seamlessly connects marketplaces, inventory, and fulfillment for a multi-channel retailer. The system automatically syncs stock levels, generates restock alerts, and sends personalized customer communications.",
      results: "Reduced manual data entry by 85% while ensuring real-time inventory accuracy, cutting order processing time from 45 minutes to just 5 minutes per order.",
      metrics: {
        value: "85%",
        label: "Reduced Manual Work"
      },
      testimonial: {
        quote: "Our staff now processes 4x more orders in the same amount of time!",
        client: "Operations Director, Multi-Channel Retailer"
      },
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop", // Changed to a more reliable workflow/dashboard image
      featured: true
    },
    {
      id: 2,
      title: "Social Media Content Calendar",
      category: "social",
      icon: FaCalendar,
      description: "Created an automated content calendar and posting system for a local restaurant chain.",
      results: "Increased engagement by 45% and saved 20 hours per week on social media management.",
      metrics: {
        value: "45%",
        label: "Increased Engagement"
      },
      testimonial: {
        quote: "Our social media presence has never been stronger or more consistent.",
        client: "Marketing Manager, Restaurant Chain"
      },
      image: placeholderImages.social
    },
    {
      id: 3,
      title: "Real Estate Document Automation System",
      category: "document",
      icon: FaFileAlt,
      description: "Engineered an intelligent document automation solution that extracts and processes information from property listings and contracts. The system uses advanced AI to identify key terms, automatically populate forms, and maintain compliance.",
      results: "Cut document processing time by 75% and virtually eliminated data entry errors.",
      metrics: {
        value: "75%",
        label: "Faster Document Processing"
      },
      testimonial: {
        quote: "The automation has saved us countless hours and improved accuracy.",
        client: "Real Estate Manager"
      },
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&auto=format&fit=crop" // Real estate document organization
    },
    {
      id: 4,
      title: "Marketing Campaign Automation Platform",
      category: "marketing",
      icon: FaBullhorn,
      description: "Built a sophisticated marketing automation platform that orchestrates multi-channel campaigns based on customer behaviors and preferences. The system intelligently segments audiences, schedules content delivery, and analyzes engagement metrics to continuously refine messaging.",
      results: "Increased campaign effectiveness by 40% while reducing the marketing team's workload by over 60%.",
      metrics: {
        value: "40%",
        label: "Increased Campaign Effectiveness"
      },
      testimonial: {
        quote: "Our marketing efforts are now more targeted and efficient.",
        client: "Marketing Director"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" // Marketing analytics dashboard
    },
    {
      id: 5,
      title: "Financial Data Analysis & Reporting Suite",
      category: "data",
      icon: FaDatabase,
      description: "Created an advanced financial data processing system that transforms raw transaction data into actionable business intelligence. The solution automatically reconciles accounts, flags anomalies, and generates customized reports and visualizations.",
      results: "Cut monthly reporting time from 3 days to 2 hours.",
      metrics: {
        value: "98%",
        label: "Faster Reporting"
      },
      testimonial: {
        quote: "We now have unprecedented visibility into our financial operations.",
        client: "CFO"
      },
      image: placeholderImages.financial
    },
    {
      id: 6,
      title: "Healthcare Patient Engagement System",
      category: "workflow",
      icon: FaRobot,
      description: "Implemented a comprehensive patient engagement solution that automates appointment scheduling, reminders, follow-ups, and satisfaction surveys. The system intelligently prioritizes communications based on appointment type and patient history.",
      results: "Reduced no-shows by 35%, increased patient satisfaction scores by 28%, and freed up 25 staff hours per week.",
      metrics: {
        value: "35%",
        label: "Reduced No-Shows"
      },
      testimonial: {
        quote: "Our patients are more engaged and our staff is more efficient.",
        client: "Clinic Manager"
      },
      image: placeholderImages.healthcare
    },
    {
      id: 7,
      title: "Email Automation for SaaS Onboarding",
      category: "email",
      icon: FaEnvelope,
      description: "Set up an intelligent email onboarding sequence that adapts based on user behavior and engagement patterns. The system segments users, delivers personalized content, and automatically adjusts timing to optimize conversion rates.",
      results: "Increased user activation by 40% in the first month and reduced support tickets by 25%.",
      metrics: {
        value: "40%",
        label: "Higher User Activation"
      },
      testimonial: {
        quote: "The automated onboarding sequence has transformed our user activation process.",
        client: "Product Manager, SaaS Platform"
      },
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop" // Email workflow automation
    },
    {
      id: 8,
      title: "Social Media Ad Automation",
      category: "social",
      icon: FaBullhorn,
      description: "Built an automated ad posting and performance tracking system integrating with Facebook, Instagram, and LinkedIn. The system uses AI to optimize ad spend, target audiences, and adjust content timing for maximum engagement across all platforms.",
      results: "Boosted ad ROI by 30% while reducing campaign management time by 60%.",
      metrics: {
        value: "30%",
        label: "Improved Ad ROI"
      },
      testimonial: {
        quote: "Our advertising efficiency has improved dramatically.",
        client: "Digital Marketing Director"
      },
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop" // More reliable Facebook interface image
    },
    {
      id: 9,
      title: "Data Pipeline for E-commerce Analytics",
      category: "data",
      icon: FaDatabase,
      description: "Created a comprehensive data pipeline that processes and analyzes sales data in real-time. The system provides predictive analytics for inventory management, customer behavior insights, and automated reporting for better business decisions.",
      results: "Cut reporting time by 40% and enabled real-time decision making with automated dashboards.",
      metrics: {
        value: "40%",
        label: "Faster Analytics"
      },
      testimonial: {
        quote: "We now have instant access to crucial business insights.",
        client: "E-commerce Analytics Manager"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" // Data analytics dashboard
    },
    {
      id: 10,
      title: "Enterprise CRM Integration Platform",
      category: "crm",
      icon: FaSyncAlt,
      description: "Built a comprehensive CRM integration platform connecting sales, marketing, and customer service departments. The unified system provides real-time customer insights, automates follow-ups, and synchronizes data across all business units.",
      results: "Improved lead conversion by 45% and reduced customer response time by 60%.",
      metrics: {
        value: "45%",
        label: "Higher Lead Conversion"
      },
      testimonial: {
        quote: "The integrated CRM system has revolutionized how we handle customer relationships.",
        client: "VP of Sales, Enterprise Tech Company"
      },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop" // CRM dashboard
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Get featured project (for featured section)
  const featuredProject = projects.find(project => project.featured);
  
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Explore our successful automation projects and the results we've delivered for our clients.
          </p>
          
          {/* Early Secondary CTA - Changed to Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 mb-10"
          >
            <Link 
              to="/contact"
              className="inline-flex items-center text-gold border border-gold bg-transparent hover:bg-gold/10 px-5 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Book Your Consultation Today <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Project Section */}
        {featuredProject && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: "300px" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/800x600/eee/999?text=Featured+Project';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <FaStar className="mr-1" /> Featured Project
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="mb-1">
                    <span className="inline-block px-3 py-1 bg-navy/10 text-navy text-xs font-semibold rounded-full mb-2">
                      {categories.find(c => c.id === featuredProject.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{featuredProject.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm text-gray-500 uppercase mb-2">Results</h4>
                    <div className="flex items-center mb-4">
                      <div className="mr-6">
                        <div className="text-3xl font-bold text-gold">{featuredProject.metrics.value}</div>
                        <div className="text-sm text-gray-500">{featuredProject.metrics.label}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{featuredProject.results}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6 relative">
                    <FaQuoteRight className="absolute top-2 right-2 text-gold/20 text-xl" />
                    <p className="text-gray-700 italic mb-2 text-sm">"{featuredProject.testimonial.quote}"</p>
                    <p className="text-xs text-gray-500">— {featuredProject.testimonial.client}</p>
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-gold text-navy font-bold py-2 px-6 rounded-lg hover:bg-orange transition-colors"
                  >
                    Discuss a Similar Project <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Improved Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-gold text-navy font-medium shadow-md transform -translate-y-0.5'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gold hover:text-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - Regular Projects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects
            .filter(project => !project.featured || activeCategory !== 'all')
            .map((project) => (
              <FlippableProjectCard 
                key={project.id} 
                project={project} 
                categories={categories}
              />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

// New FlippableProjectCard component
const FlippableProjectCard = ({ project, categories }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = project.icon || FaRocket; // Add default icon
  
  return (
    <motion.div 
      className="relative h-[350px] w-full" // Adjusted height here
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="pricing-card-container">
        <div className={`pricing-card ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front side */}
          <div className="pricing-card-face rounded-xl overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/95 p-6 flex flex-col">
                <div className="text-gold text-2xl">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm flex-grow">
                  {project.description}
                </p>
                <button 
                  onClick={() => setIsFlipped(true)}
                  className="mt-4 text-gold hover:text-orange flex items-center justify-center gap-2 transition-colors"
                >
                  Learn More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Back side */}
          <div className="pricing-card-face pricing-card-back rounded-xl overflow-hidden shadow-lg">
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-lg font-bold text-navy mb-3">{project.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-gold">{project.metrics.value}</div>
                  <div className="text-xs text-gray-500">{project.metrics.label}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex-grow overflow-y-auto">
                {project.results}
              </p>
              <button 
                onClick={() => setIsFlipped(false)}
                className="mt-4 text-gray-500 hover:text-gold flex items-center justify-center gap-2 transition-colors"
              >
                <FaChevronLeft /> Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;