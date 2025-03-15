import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Button component that can be either a button or a Link component
 * @param {object} props - Component props
 * @param {string} props.to - URL to navigate to (if Link)
 * @param {function} props.onClick - Click handler function
 * @param {string} props.variant - Button style variant ('primary', 'secondary', 'outline')
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {string} props.size - Button size ('sm', 'md', 'lg')
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {node} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 */
const Button = ({
  to,
  onClick,
  variant = 'primary',
  fullWidth = false,
  size = 'md',
  disabled = false,
  children,
  className = '',
  ...rest
}) => {
  // Define button sizes
  const sizes = {
    sm: 'py-1.5 px-4 text-sm',
    md: 'py-2.5 px-6',
    lg: 'py-3 px-8 text-lg'
  };
  
  // Define button variants
  const variants = {
    primary: 'bg-gold text-navy hover:bg-orange',
    secondary: 'bg-gray-100 dark:bg-navy text-navy dark:text-white hover:bg-gray-200 dark:hover:bg-navy-light',
    outline: 'bg-transparent border border-gold text-gold dark:text-gold hover:bg-gold hover:text-navy',
  };
  
  // Common button classes
  const buttonClasses = `
    ${sizes[size]}
    ${variants[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    rounded-lg font-medium transition-colors
    ${className}
  `;

  // Handle click when disabled
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) onClick(e);
  };

  // Define motion props
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  // If "to" prop is provided, render Link, otherwise render button
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className={buttonClasses}
          onClick={handleClick}
          {...rest}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
