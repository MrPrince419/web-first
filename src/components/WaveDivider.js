import React from 'react';

const WaveDivider = ({ color = 'var(--primary)' }) => (
  <div className="relative h-16 w-full overflow-hidden">
    <svg 
      className="absolute bottom-0 w-full h-full"
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
    >
      <path 
        d="M0,0 C300,120 900,0 1200,120 V0 H0 Z" 
        fill={color}
      />
    </svg>
  </div>
);

export default WaveDivider;
