/**
 * Utility functions for optimizing image loading
 */

// Calculate srcset dimensions for responsive images
export const generateSrcSet = (imagePath, sizes = [320, 640, 960, 1280, 1920]) => {
  if (!imagePath) return '';
  
  // Don't process external URLs that already have optimization parameters
  if (imagePath.includes('unsplash.com') && imagePath.includes('&w=')) {
    return imagePath;
  }
  
  // For Unsplash images, use their optimization parameters instead
  if (imagePath.includes('unsplash.com')) {
    return sizes
      .map(size => `${imagePath.split('?')[0]}?w=${size}&auto=format&fit=crop&fm=webp ${size}w`)
      .join(', ');
  }
  
  // For local images
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.replace(`.${extension}`, '');
  
  return sizes
    .map(size => `
      ${basePath}-${size}.webp ${size}w,
      ${basePath}-${size}.${extension} ${size}w
    `)
    .join(', ');
};

// Generate optimized image src
export const getOptimizedSrc = (src, width = 800) => {
  if (!src) return '';
  
  // Handle Unsplash images
  if (src.includes('unsplash.com')) {
    // Extract base URL without existing parameters
    const baseUrl = src.split('?')[0];
    return `${baseUrl}?w=${width}&auto=format&fit=crop&fm=webp&q=80`;
  }
  
  // For other external images, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, assume optimized versions exist
  // Prefer WebP with fallback
  const extension = src.split('.').pop();
  const basePath = src.replace(`.${extension}`, '');
  return {
    webp: `${basePath}-${width}.webp`,
    fallback: `${basePath}-${width}.${extension}`
  };
};

// Lazy loading helper
export const lazyLoadImage = (element, options = {}) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, options);
    
    observer.observe(element);
    return () => observer.unobserve(element);
  } else {
    // Fallback for browsers without IntersectionObserver
    element.src = element.dataset.src;
    if (element.dataset.srcset) {
      element.srcset = element.dataset.srcset;
    }
    element.classList.remove('lazy');
    return () => {};
  }
};
