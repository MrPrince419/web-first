import React, { useState } from 'react';

const ImageOptimizer = ({ src, alt, className, width, height }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <>
      {isLoading && (
        <div className={`${className} bg-gray-200 animate-pulse`} 
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        width={width}
        height={height}
      />
      {error && (
        <div className={`${className} bg-gray-200 flex items-center justify-center`}>
          <span className="text-gray-500">Image failed to load</span>
        </div>
      )}
    </>
  );
};

export default ImageOptimizer;
