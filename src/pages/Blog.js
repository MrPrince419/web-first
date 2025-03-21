import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';  // Add this import
import SEO from '../components/SEO';
import { blogPosts, blogCategories, defaultImage, formatBlogDate } from '../data/blogPosts';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => 
        post.categories.some(cat => 
          cat.toLowerCase().replace(/\s+/g, '-') === activeCategory
        )
      );

  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="AI Automation Blog | Prince AI Automation"
        description="Explore our blog for insights on AI automation, productivity tips, and digital transformation strategies for small businesses."
        url="/blog"
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-forum font-bold mb-4">Our Blog</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Insights, guides, and success stories about AI automation for businesses.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-orange text-white'
                    : 'bg-white text-navy border border-orange hover:bg-orange/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" // Reduced gap
          layout
        >
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="h-40 overflow-hidden"> {/* Reduced height */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = defaultImage;
                        }}
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <span>{formatBlogDate(post.date)}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3> {/* Reduced font size */}
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p> {/* Reduced font size and margin */}
                      <div className="flex flex-wrap gap-1 mb-3"> {/* Reduced margin */}
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center text-gold hover:text-orange text-sm"> {/* Reduced font size */}
                        <span>Learn More</span>
                        <FaArrowRight className="ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default Blog;
