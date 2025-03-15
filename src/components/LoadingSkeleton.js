import React from 'react';

const LoadingSkeleton = ({ width = 'w-full', height = 'h-4' }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${width} ${height}`} />
  );
};

export const CardSkeleton = () => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <LoadingSkeleton height="h-48" className="mb-4" />
    <LoadingSkeleton width="w-3/4" className="mb-2" />
    <LoadingSkeleton width="w-1/2" />
  </div>
);

export default LoadingSkeleton;
