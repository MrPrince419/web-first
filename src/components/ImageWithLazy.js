import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getOptimizedSrc, generateSrcSet } from '../utils/imageOptimizer';

/**
 * ImageWithLazy - A component that provides lazy loading for images
 * with a nice fade-in effect and proper fallback
 */
const ImageWithLazy = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc,
  width,
  height,
  objectFit = 'cover',
  sizes = '100vw',
  loadingStrategy = 'lazy', // Changed parameter name from 'loading' to 'loadingStrategy'
  quality = 'high',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true); // Changed state variable name from 'loading' to 'isLoading'
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [srcSet, setSrcSet] = useState('');
  
  useEffect(() => {
    setIsLoading(true);
    
    // Create a new image to preload
    const img = new Image();
    
    // Optimize src and srcset
    const optimizedSrc = getOptimizedSrc(src, width || 800);
    const optimizedSrcSet = quality === 'high' ? generateSrcSet(src) : '';
    
    img.src = optimizedSrc;
    img.onload = () => {
      setImgSrc(optimizedSrc);
      setSrcSet(optimizedSrcSet);
      setIsLoading(false);
      setError(false);
    };
    
    img.onerror = () => {
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
        setSrcSet('');
      } else {
        setImgSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23eee"/%3E%3Cpath d="M30 50 L70 50 M50 30 L50 70" stroke="%23999" stroke-width="4"/%3E%3C/svg%3E');
      }
      setIsLoading(false);
      setError(true);
    };
    
    return () => {
      // Clean up by removing event listeners
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc, width, quality]);

  const imgStyle = {
    objectFit,
    width: width || '100%',
    height: height || '100%',
    ...(props.style || {})
  };

  return (
    <div className={`relative ${className}`} style={{ overflow: 'hidden' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100" aria-hidden="true">
          <div className="animate-pulse rounded-full h-12 w-12 bg-gray-200"></div>
        </div>
      )}
      
      {!isLoading && (
        <motion.img
          src={imgSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={error ? 'opacity-80' : ''}
          style={imgStyle}
          loading={loadingStrategy} // Use the renamed parameter
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithLazy;
