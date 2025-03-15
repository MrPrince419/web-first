const SUBMISSION_LIMIT = 3;
const SUBMISSION_WINDOW = 3600000; // 1 hour in milliseconds

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[^\w\s@.-]/gi, '') // Allow only words, spaces, @, dots, and hyphens
    .substring(0, 500); // Limit length
};

export const checkRateLimit = () => {
  const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
  const now = Date.now();
  
  // Remove submissions older than 1 hour
  const recentSubmissions = submissions.filter(
    time => now - time < SUBMISSION_WINDOW
  );
  
  if (recentSubmissions.length >= SUBMISSION_LIMIT) {
    return false;
  }
  
  localStorage.setItem('formSubmissions', JSON.stringify([...recentSubmissions, now]));
  return true;
};

export const saveFormProgress = (formData) => {
  localStorage.setItem('formProgress', JSON.stringify({
    data: formData,
    timestamp: Date.now()
  }));
};

export const getFormProgress = () => {
  const saved = localStorage.getItem('formProgress');
  if (!saved) return null;
  
  const { data, timestamp } = JSON.parse(saved);
  // Clear if older than 24 hours
  if (Date.now() - timestamp > 86400000) {
    localStorage.removeItem('formProgress');
    return null;
  }
  return data;
};
