import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'email', name: 'Email Automation' },
    { id: 'social', name: 'Social Media' },
    { id: 'crm', name: 'CRM Integration' },
    { id: 'data', name: 'Data Processing' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Email Automation",
      category: "email",
      description: "Implemented an abandoned cart recovery system that increased sales by 15% for an online retailer.",
      results: "15% increase in recovered sales, 30% time savings for marketing team",
      technologies: ["Zapier", "Mailchimp", "Shopify"]
    },
    {
      id: 2,
      title: "Social Media Content Calendar",
      category: "social",
      description: "Created an automated content calendar and posting system for a local restaurant chain.",
      results: "40% increase in engagement, 10 hours saved weekly",
      technologies: ["Buffer", "Canva", "Google Sheets"]
    },
    {
      id: 3,
      title: "CRM Lead Scoring System",
      category: "crm",
      description: "Developed an AI-powered lead scoring system for a B2B software company.",
      results: "25% higher conversion rate, 50% faster lead qualification",
      technologies: ["HubSpot", "Python", "TensorFlow"]
    },
    {
      id: 4,
      title: "Invoice Processing Automation",
      category: "data",
      description: "Built an automated invoice processing system for an accounting firm.",
      results: "90% reduction in manual data entry, 60% faster processing time",
      technologies: ["UiPath", "Google Cloud Vision", "QuickBooks"]
    },
    {
      id: 5,
      title: "Customer Support Chatbot",
      category: "crm",
      description: "Implemented an AI chatbot that handles 70% of customer inquiries for an online service provider.",
      results: "70% reduction in support tickets, 24/7 customer assistance",
      technologies: ["Dialogflow", "Node.js", "Zendesk"]
    },
    {
      id: 6,
      title: "Automated Report Generation",
      category: "data",
      description: "Created an automated reporting system for a marketing agency to deliver client analytics.",
      results: "8 hours saved weekly per account manager, improved client satisfaction",
      technologies: ["Power BI", "Google Analytics API", "Python"]
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Explore our successful automation projects and the results we've delivered for our clients.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-gold text-navy font-medium'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-4 text-gold">
                <FaCheckCircle className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <button
                      className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                      onClick={() => setSelectedProject(null)}
                    >
                      ✕
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2">Results:</h4>
                    <p className="text-gray-600">{selectedProject.results}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-lg mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="mt-4 inline-flex items-center bg-gold text-navy px-4 py-2 rounded-lg font-medium hover:bg-orange transition-colors"
                    onClick={() => {
                      setSelectedProject(null);
                      window.location.href = '/contact';
                    }}
                  >
                    <span>Discuss a similar project</span>
                    <FaExternalLinkAlt className="ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;