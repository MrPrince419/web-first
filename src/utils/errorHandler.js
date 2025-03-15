export const handleError = (error, fallback = null) => {
  // Log error
  console.error('Error occurred:', error);

  // Handle specific error types
  if (error.name === 'NetworkError' || error.message.includes('network')) {
    return {
      message: 'Network error. Please check your internet connection.',
      code: 'NETWORK_ERROR'
    };
  }

  if (error.name === 'TimeoutError' || error.message.includes('timeout')) {
    return {
      message: 'Request timed out. Please try again.',
      code: 'TIMEOUT_ERROR'
    };
  }

  // Return fallback or default error
  return fallback || {
    message: 'An unexpected error occurred. Please try again.',
    code: 'UNKNOWN_ERROR'
  };
};

export const isNetworkError = (error) => {
  return error.name === 'NetworkError' || 
         error.message.includes('network') ||
         !navigator.onLine;
};

export const retryOperation = async (operation, maxAttempts = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
};
