import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="Blog | Prince AI Automation"
        description="Stay updated with the latest in AI automation, industry insights, and success stories."
        url="/blog"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-forum font-bold mb-6">
              Coming <span className="text-gold">Soon</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our blog is currently under development. Check back soon for insights into AI automation, industry trends, and success stories.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
