import { useState, useCallback } from 'react';

const useRetry = (asyncFn, maxAttempts = 3, delayMs = 1000) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const result = await asyncFn(...args);
        setLoading(false);
        return result;
      } catch (err) {
        if (attempt === maxAttempts) {
          setError(err);
          setLoading(false);
          throw err;
        }
        await new Promise(resolve => setTimeout(resolve, delayMs * attempt));
      }
    }
  }, [asyncFn, maxAttempts, delayMs]);

  return { execute, loading, error };
};

export default useRetry;
