import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft, FaShare } from 'react-icons/fa';
import { useToast } from '../contexts/ToastContext';
import SEO from '../components/SEO';
import LoadingAnimation from '../components/LoadingAnimation';
import { blogPosts, defaultImage } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showSuccess } = useToast();

  useEffect(() => {
    setLoading(true);
    const findPost = blogPosts.find(post => post.id === id);
    
    if (findPost) {
      setPost(findPost);
      document.title = `${findPost.title} | Prince AI Automation`;
    } else {
      document.title = "Blog Post Not Found | Prince AI Automation";
    }
    
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  // Share button handler
  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt || 'Check out this interesting article!',
          url: url
        });
      } catch (error) {
        console.error('Error sharing:', error);
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      showSuccess('Link copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <LoadingAnimation />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog" className="bg-gold text-navy px-6 py-3 rounded-lg font-medium hover:bg-orange transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Find index of current post for navigation
  const currentIndex = blogPosts.findIndex(p => p.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <main className="pt-24 pb-16">
      {post && (
        <SEO 
          title={post.title}
          description={post.excerpt || `Read about ${post.title} on Prince AI Automation's blog.`}
          image={post.image}
          url={`/blog/${id}`}
        />
      )}
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link to="/blog" className="inline-flex items-center text-gold hover:text-orange transition-colors mb-8">
            <FaArrowLeft className="mr-2" />
            <span>Back to Blog</span>
          </Link>

          {/* Post Header */}
          <motion.h1 
            className="text-3xl md:text-4xl font-forum font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {post.title}
          </motion.h1>

          <div className="flex items-center text-sm text-gray-600 mb-8">
            <FaCalendarAlt className="mr-2" />
            <span className="mr-4">{post.date}</span>
            <span>By {post.author}</span>
          </div>

          {/* Featured Image */}
          <motion.div 
            className="rounded-xl overflow-hidden mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage; // Use defaultImage instead of potentially undefined post.placeholderImage
              }}
            />
          </motion.div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Post Content */}
          <motion.div 
            className="prose prose-lg max-w-none prose-headings:font-forum prose-a:text-gold hover:prose-a:text-orange prose-img:rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share & Contact */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <button 
                className="flex items-center bg-gray-100 hover:bg-gray-200 text-navy font-medium py-2 px-4 rounded-lg transition-colors mb-4 md:mb-0"
                onClick={handleShare}
              >
                <FaShare className="mr-2" />
                <span>Share This Post</span>
              </button>
              
              <Link 
                to="/contact"
                className="bg-gold text-navy hover:bg-orange font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <Link 
                to={`/blog/${prevPost.id}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-sm text-gray-500 mb-2">Previous Post</p>
                <h3 className="font-bold text-lg">{prevPost.title}</h3>
              </Link>
            )}
            
            {nextPost && (
              <Link 
                to={`/blog/${nextPost.id}`}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${!prevPost ? 'md:col-start-2' : ''}`}
              >
                <p className="text-sm text-gray-500 mb-2">Next Post</p>
                <h3 className="font-bold text-lg">{nextPost.title}</h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
