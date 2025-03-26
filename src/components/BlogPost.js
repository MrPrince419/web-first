import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaLink, 
  FaArrowLeft, 
  FaShare 
} from 'react-icons/fa';
import { useToast } from '../contexts/ToastContext';
import ImageWithLazy from '../components/ImageWithLazy';
import { formatBlogDate } from '../data/blogPosts';
import { defaultImage } from '../data/blogPosts';

// Add calculateReadTime helper function
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/g).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const BlogPost = ({ post }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings for table of contents
    const article = document.querySelector('article');
    if (article) {
      const elements = Array.from(article.querySelectorAll('h2, h3'));
      const headingsData = elements.map(element => ({
        id: element.id || element.textContent.toLowerCase().replace(/\W+/g, '-'),
        text: element.textContent,
        level: element.tagName === 'H2' ? 2 : 3
      }));
      setHeadings(headingsData);

      // Add IDs to headings if they don't exist
      elements.forEach(element => {
        if (!element.id) {
          element.id = element.textContent.toLowerCase().replace(/\W+/g, '-');
        }
      });
    }

    // Reading progress handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { showSuccess, showError } = useToast();
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post?.title || 'Check out this article');
  const shareText = encodeURIComponent(post?.excerpt || 'Interesting article about AI automation');

  const handleShare = async (platform) => {
    try {
      const urls = {
        twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      };

      // Try native share API first on mobile
      if (navigator.share && (platform === 'native' || platform === 'mobile')) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
        showSuccess('Shared successfully!');
        return;
      }

      // Fallback to platform-specific sharing
      if (urls[platform]) {
        window.open(urls[platform], '_blank', 'noopener,noreferrer');
        showSuccess(`Shared on ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`);
      }
    } catch (error) {
      showError('Failed to share. Please try again.');
      console.error('Share error:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showSuccess('Link copied to clipboard!');
    } catch (error) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showSuccess('Link copied to clipboard!');
    }
  };

  if (!post) return null;

  return (
    <article className="pt-24 pb-16">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gold z-50"
        style={{ scaleX: readingProgress, transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: readingProgress }}
      />

      <div className="container mx-auto px-4">
        <Link to="/blog" className="inline-flex items-center text-navy hover:text-gold mb-8">
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>

        <div className="relative max-w-4xl mx-auto">
          {/* Table of Contents - Desktop */}
          <div className="hidden xl:block absolute -right-64 top-0 w-56">
            <div className="sticky top-32 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
              <nav className="toc">
                {headings.map(heading => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block py-1 text-gray-600 hover:text-gold transition-colors ${
                      heading.level === 3 ? 'pl-4' : ''
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-[400px]">
              <ImageWithLazy
                src={post.image || defaultImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              {/* Social Share Buttons */}
              <div className="flex items-center space-x-4 mb-6">
                {/* Show native share button on mobile */}
                {navigator.share && (
                  <button
                    onClick={() => handleShare('native')}
                    className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-orange transition-colors flex items-center"
                  >
                    <FaShare className="mr-2" /> Share
                  </button>
                )}
                
                <button
                  onClick={() => handleShare('twitter')}
                  className="text-[#1DA1F2] hover:opacity-80 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={20} />
                </button>
                
                <button
                  onClick={() => handleShare('linkedin')}
                  className="text-[#0077B5] hover:opacity-80 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={20} />
                </button>
                
                <button
                  onClick={() => handleShare('facebook')}
                  className="text-[#4267B2] hover:opacity-80 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={20} />
                </button>
                
                <button
                  onClick={handleCopyLink}
                  className="text-gray-600 hover:text-gold p-2 rounded-full hover:bg-gray-100"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink size={20} />
                </button>
              </div>

              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center text-gray-500 text-sm mb-8">
                <span className="mr-4">{formatBlogDate(post.date)}</span>
                <span>{calculateReadTime(post.content)} min read</span>
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content}
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts?.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform"
                  >
                    <ImageWithLazy
                      src={relatedPost.image || defaultImage}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
