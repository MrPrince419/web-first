import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * ImageWithLazy - A component that provides lazy loading for images
 * with a nice fade-in effect and proper fallback
 */
const ImageWithLazy = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = "https://placehold.co/600x400/eee/999?text=Image",
  width, 
  height,
  objectFit = "cover",
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setLoading(true);
    setError(false);
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setLoading(false);
    };
    
    img.onerror = () => {
      setImgSrc(fallbackSrc);
      setError(true);
      setLoading(false);
    };
    
    return () => {
      // Clean up by removing event listeners
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  const imgStyle = {
    objectFit,
    width: width || '100%',
    height: height || '100%',
    ...(props.style || {})
  };

  return (
    <div className={`relative ${className}`} style={{ overflow: 'hidden' }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse rounded-full h-12 w-12 bg-gray-200"></div>
        </div>
      )}
      
      {!loading && (
        <motion.img
          src={imgSrc}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={error ? 'opacity-80' : ''}
          style={imgStyle}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithLazy;
