/* global gtag */

const GA_ID = 'G-LBFHMF14F5';

export const initGA = () => {
  if (window.gtag) return;
  
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
};

export const logEvent = (category, action, label = null, value = null) => {
  if (!window.gtag) return;
  
  const eventData = {
    event_category: category,
    ...(label && { event_label: label }),
    ...(value && { value })
  };
  
  window.gtag('event', action, eventData);
};

// Export a single function that handles all analytics
export const trackEvent = (type, data) => {
  switch (type) {
    case 'page_view':
      logEvent('page_view', 'view', data);
      break;
    case 'error':
      logEvent('error', 'error_occurred', data);
      break;
    default:
      logEvent('interaction', type, data);
  }
};
