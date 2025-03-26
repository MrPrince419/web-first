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
  const [currentSrc, setCurrentSrc] = useState('');
  const [currentSrcSet, setCurrentSrcSet] = useState('');

  useEffect(() => {
    setIsLoading(true);
    
    const optimizedSources = getOptimizedSrc(src, width || 800);
    const generatedSrcSet = quality === 'high' ? generateSrcSet(src) : '';
    setCurrentSrcSet(generatedSrcSet);
    
    const img = new Image();
    
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = loadingStrategy;
    }
    
    img.onload = () => {
      setCurrentSrc(img.currentSrc);
      setIsLoading(false);
      setError(false);
    };
    
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
      if (fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
    };
    
    // Try WebP first
    if (optimizedSources.webp) {
      img.srcset = generatedSrcSet;
      img.src = optimizedSources.webp;
    } else {
      img.src = optimizedSources.fallback || src;
    }
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc, width, quality, loadingStrategy]);

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
          src={currentSrc}
          srcSet={currentSrcSet}
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
