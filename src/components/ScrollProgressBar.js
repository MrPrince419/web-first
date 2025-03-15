import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollDistance = document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (totalHeight > 0) {
        const percentage = (scrollDistance / totalHeight) * 100;
        setScrollProgress(percentage);
      }
    };

    window.addEventListener('scroll', calculateScrollProgress);
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div 
        className="bg-orange"
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          transition: 'width 0.2s ease-out'
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
