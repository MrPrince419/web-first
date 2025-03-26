import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaStar, FaQuoteRight, FaShoppingCart, FaCalendar,
  FaChevronLeft, FaRocket, FaCogs, FaChartBar, FaUserPlus, 
  FaHeadset, FaBoxes, FaEnvelope, FaSyncAlt, FaDatabase
} from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import ProjectStatsDashboard from './portfolio/ProjectStatsDashboard';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'automation', name: 'Business Automation' },
    { id: 'email', name: 'Email Systems' },
    { id: 'crm', name: 'CRM Integration' },
    { id: 'data', name: 'Data Processing' },
    { id: 'workflow', name: 'Workflow Automation' }
  ];

  // Updated projects array with more relevant images
  const projects = [
    {
      id: 1,
      title: "Automated Social Media Posting System",
      category: "social",
      date: "2024-12-15",
      icon: FaCalendar,
      technologies: ["Buffer", "Zapier", "Google Sheets", "Later"],
      description: "Set up an automated system to schedule and post content across multiple social media platforms, saving hours of manual work weekly.",
      results: "Achieved 40% faster turnaround time for campaigns while maintaining content quality.",
      metrics: {
        value: "40%",
        label: "Faster Campaigns"
      },
      testimonial: {
        quote: "Our social media management is now seamless and efficient.",
        client: "Marketing Manager"
      },
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop" // Social media dashboard with multiple screens
    },
    {
      id: 2,
      title: "Email Campaign Workflow Optimization",
      category: "email",
      date: "2024-11-20",
      icon: FaEnvelope,
      technologies: ["Mailchimp", "HubSpot", "Google Analytics", "Zapier"],
      description: "Streamlined email campaign creation by integrating templates and automating follow-ups for small businesses.",
      results: "Increased open rates by 35% through automated personalization and timing optimization.",
      metrics: {
        value: "35%",
        label: "Higher Open Rates"
      },
      testimonial: {
        quote: "Our email campaigns are now more effective with much less manual work.",
        client: "Small Business Owner"
      },
      image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=800&auto=format&fit=crop" // Email marketing campaign visualization
    },
    {
      id: 3,
      title: "CRM Data Sync Automation",
      category: "crm",
      date: "2024-10-25",
      icon: FaSyncAlt,
      technologies: ["Airtable", "Integromat", "HubSpot", "Zapier"],
      description: "Created a seamless integration between customer data in spreadsheets and their CRM platform, reducing errors from manual entry.",
      results: "Reduced data discrepancies by 50% while improving data accuracy and consistency.",
      metrics: {
        value: "50%",
        label: "Fewer Errors"
      },
      testimonial: {
        quote: "Data sync is now seamless and error-free across all our platforms.",
        client: "Sales Manager"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" // Data visualization dashboard
    },
    {
      id: 4,
      title: "Expense Tracking & Reporting Tool",
      category: "automation",
      date: "2024-09-15",
      icon: FaChartBar,
      technologies: ["Wave", "Google Forms", "Trello", "Zapier"],
      description: "Built a custom expense tracker that pulls receipts from emails and categorizes them automatically into reports.",
      results: "Saved clients 60% of time spent on bookkeeping tasks through automated categorization.",
      metrics: {
        value: "60%",
        label: "Time Saved"
      },
      testimonial: {
        quote: "Bookkeeping that used to take days now happens automatically.",
        client: "Finance Director"
      },
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 5,
      title: "Lead Nurturing Automation Funnel",
      category: "crm",
      date: "2024-08-20",
      icon: FaRocket,
      technologies: ["ActiveCampaign", "Typeform", "Google Tag Manager", "Zapier"],
      description: "Designed a lead nurturing funnel using personalized email sequences triggered by user actions.",
      results: "Boosted conversion rates by 25% through automated personalized follow-ups.",
      metrics: {
        value: "25%",
        label: "Higher Conversions"
      },
      testimonial: {
        quote: "Our leads are converting at higher rates with less manual intervention.",
        client: "Marketing Director"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Inventory Management Dashboard",
      category: "data",
      date: "2024-07-15",
      icon: FaBoxes,
      technologies: ["Google Data Studio", "Notion", "Shopify", "Zapier"],
      description: "Developed a real-time inventory dashboard pulling stock levels from multiple sources to streamline restocking decisions.",
      results: "Decreased out-of-stock incidents by 45% while optimizing inventory levels.",
      metrics: {
        value: "45%",
        label: "Fewer Stockouts"
      },
      testimonial: {
        quote: "We've eliminated stockouts while keeping less inventory on hand.",
        client: "Operations Manager"
      },
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Task Assignment Workflow Builder",
      category: "workflow",
      date: "2024-06-10",
      icon: FaCogs,
      technologies: ["ClickUp", "Slack", "Google Calendar", "Zapier"],
      description: "Automated repetitive task assignments within teams using conditional logic based on project stages.",
      results: "Improved team productivity by 30% through automated task management.",
      metrics: {
        value: "30%",
        label: "More Productive"
      },
      testimonial: {
        quote: "Task management is now seamless and our team is more productive.",
        client: "Project Manager"
      },
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Customer Feedback Collection System",
      category: "automation",
      date: "2024-05-05",
      icon: FaHeadset,
      technologies: ["Google Forms", "Microsoft Power Automate", "Hootsuite"],
      description: "Implemented a feedback collection process that aggregates reviews from various channels into one central database.",
      results: "Increased response rate by 55% through automated collection and analysis.",
      metrics: {
        value: "55%",
        label: "Higher Response Rate"
      },
      testimonial: {
        quote: "We're getting more feedback than ever and actually using it effectively.",
        client: "Customer Success Manager"
      },
      image: "https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?w=800&auto=format&fit=crop"
    },
    {
      id: 9,
      title: "E-commerce Order Fulfillment Pipeline",
      category: "automation",
      date: "2024-04-01",
      icon: FaShoppingCart,
      technologies: ["WooCommerce", "Asana", "ShipStation", "Zapier"],
      description: "Automated order processing steps such as payment confirmation, shipping notifications, and tracking updates.",
      results: "Reduced fulfillment delays by 40% while improving customer satisfaction.",
      metrics: {
        value: "40%",
        label: "Faster Fulfillment"
      },
      testimonial: {
        quote: "Orders are now processed and shipped faster than we ever thought possible.",
        client: "E-commerce Manager"
      },
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop"
    },
    {
      id: 10,
      title: "Employee Onboarding Workflow",
      category: "workflow",
      date: "2024-03-01",
      icon: FaUserPlus,
      technologies: ["DocuSign", "Monday.com", "Gmail", "Slack"],
      description: "Simplified the onboarding process by creating automated workflows for document signing and training schedules.",
      results: "Shortened onboarding duration by 35% while improving new hire satisfaction.",
      metrics: {
        value: "35%",
        label: "Faster Onboarding"
      },
      testimonial: {
        quote: "New hires are productive faster and the HR team saves countless hours.",
        client: "HR Director"
      },
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop"
    },
    {
      id: 11,
      title: "Sales Pipeline Status Tracker",
      category: "crm",
      date: "2024-02-01",
      icon: FaChartBar,
      technologies: ["Pipedrive", "Google Sheets", "Slack", "Zapier"],
      description: "Built a dynamic sales pipeline tracker that updates deal statuses automatically based on CRM interactions.",
      results: "Enhanced sales forecasting accuracy by 50% through automated tracking.",
      metrics: {
        value: "50%",
        label: "More Accurate"
      },
      testimonial: {
        quote: "Our sales forecasting is now consistently accurate and always up-to-date.",
        client: "Sales Director"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
    },
    {
      id: 12,
      title: "Bulk Data Cleanup Script",
      category: "data",
      date: "2024-01-15",
      icon: FaDatabase,
      technologies: ["Python", "OpenRefine", "Google Drive", "Pandas"],
      description: "Wrote scripts to clean and organize large datasets stored in spreadsheets, ensuring consistency and usability.",
      results: "Reduced data cleanup effort by 70% while improving data quality.",
      metrics: {
        value: "70%",
        label: "Less Effort"
      },
      testimonial: {
        quote: "Data cleanup that took weeks now happens in hours with perfect accuracy.",
        client: "Data Analyst"
      },
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&auto=format&fit=crop"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Get featured project (for featured section)
  const featuredProject = projects.find(project => project.featured);
  
  return (
    <SectionWrapper id="portfolio" className="py-20 bg-gray-50">
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

        <ProjectStatsDashboard projects={projects} />

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
              <div className="lg:flex min-h-[400px]"> {/* Added min-height */}
                <div className="lg:w-1/2 relative min-h-[400px]"> {/* Added min-height */}
                  <img 
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
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

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
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
    </SectionWrapper>
  );
};

// Optimize FlippableProjectCard to reduce DOM nesting
const FlippableProjectCard = ({ project, categories }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = project.icon || FaRocket; 
  
  return (
    <motion.div 
      className="relative h-[350px] w-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="pricing-card-container">
        <div className={`pricing-card ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front side - Simplified DOM structure */}
          <div className="pricing-card-face rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x600/eee/999?text=Project';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/95 p-6 flex flex-col">
                <Icon className="text-gold text-2xl" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm flex-grow">
                  {project.description}
                </p>
                <button 
                  onClick={() => setIsFlipped(true)}
                  className="mt-4 text-sm bg-gold hover:bg-orange text-navy py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn More <FaArrowRight className="text-navy" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Back side - Simplified DOM structure */}
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
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setIsFlipped(false)}
                className="mt-4 text-gray-500 hover:text-gold flex items-center justify-center gap-2 transition-colors"
                aria-label="Go back to project summary"
              >
                <FaChevronLeft aria-hidden="true" /> Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;