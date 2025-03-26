import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import { blogPosts, blogCategories, defaultImage, formatBlogDate } from '../data/blogPosts';
import ImageWithLazy from '../components/ImageWithLazy';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => 
        post.categories.some(cat => 
          cat.toLowerCase().replace(/\s+/g, '-') === activeCategory
        )
      );

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate read time
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/g).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Pagination component
  const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center space-x-2 mt-8">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === number 
                ? 'bg-gold text-navy' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <main className="pt-24 pb-16">
      <SEO 
        title="AI Automation Blog | Prince AI Automation"
        description="Explore our blog for insights on AI automation, productivity tips, and digital transformation strategies for small businesses."
        url="/blog"
      />
      
      <div className="container mx-auto px-4">
        {/* Categories */}
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
        
        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="wait">
            {currentPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <motion.div
                    className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <ImageWithLazy
                        src={post.image || defaultImage}
                        alt={post.title}
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                        loadingStrategy="eager"
                      />
                      {post.icon && (
                        <div className="absolute top-4 right-4 text-gold text-2xl bg-white/80 p-2 rounded-full">
                          <post.icon />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaCalendarAlt className="mr-2" />
                          <span>{formatBlogDate(post.date)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaClock className="mr-2" />
                          <span>{calculateReadTime(post.content)} min read</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags?.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length}
          paginate={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default Blog;