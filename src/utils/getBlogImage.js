/**
 * This utility ensures we only use images in the blog section
 * It will return a placeholder URL for non-blog sections
 */

export const getPlaceholderImage = (title) => {
  // Create a URL for a colored placeholder based on the title
  const formattedTitle = encodeURIComponent(title || 'Blog Post');
  return `https://via.placeholder.com/800x400?text=${formattedTitle}`;
};

export const getServiceImage = (title) => {
  // Create a URL for a colored placeholder based on the service title
  const formattedTitle = encodeURIComponent(title || 'Service');
  return `https://via.placeholder.com/600x400?text=${formattedTitle}`;
};
