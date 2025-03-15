import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = ({ size = 'md', color = 'gold' }) => {
  // Define sizes
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  // Define colors
  const colors = {
    gold: 'border-gold',
    white: 'border-white',
    navy: 'border-navy'
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div 
        className={`rounded-full border-2 ${colors[color]} border-t-2 border-r-2 border-b-2 ${sizes[size]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
