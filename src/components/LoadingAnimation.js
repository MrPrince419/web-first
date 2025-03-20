import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

/**
 * LoadingAnimation - A simple loading animation component
 */
const LoadingAnimation = ({ 
  size = 'medium', 
  text = null,
  color = 'gold',
  centered = false
}) => {
  // Size configurations
  const sizes = {
    small: {
      container: 'h-6 w-6',
      icon: 'text-lg',
      dots: 'h-1.5 w-1.5',
      textClass: 'text-xs mt-1',
    },
    medium: {
      container: 'h-10 w-10',
      icon: 'text-2xl',
      dots: 'h-2 w-2',
      textClass: 'text-sm mt-2',
    },
    large: {
      container: 'h-16 w-16',
      icon: 'text-4xl',
      dots: 'h-3 w-3',
      textClass: 'text-base mt-3',
    }
  };
  
  // Color configurations
  const colors = {
    gold: 'text-gold',
    navy: 'text-navy',
    white: 'text-white'
  };
  
  const { container, icon, dots, textClass } = sizes[size] || sizes.medium;
  const colorClass = colors[color] || colors.gold;

  // Animation variants
  const bounceTransition = {
    y: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeOut"
    }
  };
  
  // Dots animation with staggered delays
  const dotsAnimation = {
    initial: { y: 0 },
    animate: { y: [-8, 0] }
  };

  return (
    <div className={centered ? "flex flex-col items-center justify-center" : ""}>
      <div className="relative flex flex-col items-center">
        <motion.div
          className={`${container} ${colorClass} flex items-center justify-center relative`}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <FaRocket className={icon} />
        </motion.div>
        
        <div className="flex space-x-1 mt-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`${dots} rounded-full ${colorClass} bg-current`}
              initial="initial"
              animate="animate"
              transition={{
                ...bounceTransition,
                delay: index * 0.15
              }}
              variants={dotsAnimation}
            />
          ))}
        </div>
        
        {text && (
          <motion.p 
            className={`${textClass} ${colorClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default LoadingAnimation;
