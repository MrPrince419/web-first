import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts, formatBlogDate, defaultImage } from '../data/blogPosts';
import SEO from '../components/SEO';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    // Redirect to blog page if post not found
    if (!post) {
      navigate('/blog', { replace: true });
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;

  return (
    <main className="pt-24 pb-16">
      <SEO 
        title={`${post.title} | Prince AI Automation Blog`}
        description={post.excerpt}
        image={post.image}
        url={`/blog/${post.id}`}
      />
      
      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-navy hover:text-gold mb-8">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
        
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
              <img 
                src={post.image || defaultImage} 
                alt={post.title} 
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <FaCalendarAlt className="mr-2" />
              <span>{formatBlogDate(post.date)}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-forum font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags && post.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Post Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author & Call to Action */}
          <motion.div
            className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Ready to Get Started with AI Automation?</h3>
            <p className="mb-6">Explore how our custom AI solutions can help your business save time, reduce costs, and scale efficiently.</p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-gold hover:bg-orange text-navy font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
