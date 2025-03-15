import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Only show cursor on desktop
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsVisible(!isMobile);
  }, []);
  
  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const mouseOverHandler = (e) => {
      const target = e.target;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                     target.tagName.toLowerCase() === 'button' ||
                     target.closest('a') ||
                     target.closest('button') ||
                     target.classList.contains('cursor-pointer') ||
                     window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isLink);
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', mouseOverHandler);
    
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', mouseOverHandler);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <>
      <div 
        className="fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div 
          className={`w-8 h-8 rounded-full bg-black/90 transform ${isPointer ? 'scale-[2.5] opacity-30' : 'scale-100 opacity-60'} transition-transform duration-300`}
        />
      </div>
      <div 
        className="fixed pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transitionDuration: '0.1s',
          transitionTimingFunction: 'ease-out',
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-orange" />
      </div>
    </>
  );
};

export default CustomCursor;
