import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { blogImages, defaultImage } from '../utils/unsplashImages';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "7 Ways AI Automation Can Boost Your Small Business 🚀",
      date: "March 15, 2025",
      excerpt: "Discover how AI automation can help small businesses save time, reduce costs, and improve customer satisfaction...",
      image: blogImages.automation || defaultImage,
      content: `
        <h2>7 Ways AI Automation Can Boost Your Small Business 🚀</h2>
        
        <p>Small businesses often operate with limited resources and staff, making efficiency crucial for success. AI automation offers powerful solutions to these challenges, allowing you to accomplish more with less. Here are seven transformative ways AI automation can benefit your small business:</p>
        
        <h3>1. Streamlined Customer Service</h3>
        
        <p>AI-powered chatbots can handle up to 80% of routine customer inquiries without human intervention. These intelligent assistants:</p>
        <ul>
          <li>Provide instant responses 24/7</li>
          <li>Answer frequently asked questions</li>
          <li>Process simple requests and transactions</li>
          <li>Route complex issues to human agents with relevant context</li>
        </ul>
        <p>This automation reduces response times from hours to seconds while ensuring your customers always receive prompt attention.</p>
        
        <h3>2. Efficient Email Management</h3>
        
        <p>The average small business owner spends 2-3 hours daily managing emails. AI automation can:</p>
        <ul>
          <li>Sort incoming messages by priority</li>
          <li>Auto-respond to common inquiries</li>
          <li>Flag important communications</li>
          <li>Schedule follow-ups to prevent missed opportunities</li>
        </ul>
        <p>By implementing email automation, businesses typically recover 5-10 hours per week per employee.</p>
        
        <!-- More detailed content continues... -->
      `
    },
    {
      id: 2,
      title: "Top 5 Automation Tools for 2025 ⚙️",
      date: "February 22, 2025",
      excerpt: "Looking for the best automation tools? Our comprehensive guide breaks down the top 5 solutions...",
      image: blogImages.tools || defaultImage,
      content: `
        // ...existing content...
      `
    },
    {
      id: 3,
      title: "The Future of AI in Workflow Optimization 🌐",
      date: "January 8, 2025",
      excerpt: "What's coming next in business automation? Discover the emerging trends that will shape workflow optimization...",
      image: blogImages.future || defaultImage,
      content: `
        // ...existing content...
      `
    },
    {
      id: 4,
      title: "How Automating Customer Support Improved Retention by 35% 📈",
      date: "December 12, 2024",
      excerpt: "A case study on how AI-powered support automation led to significant improvements in customer satisfaction and loyalty...",
      image: blogImages.benefits || defaultImage,
      content: `
        // ...existing content...
      `
    },
    {
      id: 5,
      title: "Emerging Automation Trends to Watch in 2025 🔮",
      date: "November 5, 2024",
      excerpt: "Stay ahead of the curve with these innovative automation approaches that are transforming businesses...",
      image: blogImages.trends || defaultImage,
      content: `
        // ...existing content...
      `
    },
    {
      id: 6,
      title: "AI Automation: The Small Business Equalizer 🏆",
      date: "October 18, 2024",
      excerpt: "How small businesses are using automation to compete with larger enterprises and level the playing field...",
      image: blogImages.automation || defaultImage,
      content: `
        // ...existing content...
      `
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-forum font-bold mb-4">Latest Insights</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Explore our latest articles on AI automation trends, best practices, and success stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
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
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="flex items-center text-gold font-medium hover:text-orange transition-colors">
                  <span>Read More</span>
                  <FaChevronRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
