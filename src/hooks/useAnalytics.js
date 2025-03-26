import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook to manage Google Analytics tracking
 */
const useAnalytics = () => {
  const location = useLocation();

  // Track page views automatically
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-LBFHMF14F5', {
        'page_path': location.pathname,
        'page_location': window.location.href,
        'page_title': document.title
      });
    }
  }, [location]);

  // Simplified event tracking without consent check
  const trackEvent = useCallback((action, category, label, value = null) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value,
        'page_path': location.pathname,
        'page_location': window.location.href
      });
      return true;
    } else if (typeof window.trackEvent === 'function') {
      window.trackEvent(category, action, label);
      return true;
    }
    return false;
  }, [location]);

  // Common tracking functions
  const trackContactFormSubmission = useCallback(() => {
    return trackEvent('submit', 'contact', 'contact_form_submission');
  }, [trackEvent]);
  
  const trackCTAClick = useCallback((ctaName) => {
    return trackEvent('click', 'cta', ctaName);
  }, [trackEvent]);
  
  const trackServiceInterest = useCallback((serviceName) => {
    return trackEvent('click', 'service', serviceName);
  }, [trackEvent]);
  
  const trackDownload = useCallback((documentName) => {
    return trackEvent('download', 'resource', documentName);
  }, [trackEvent]);
  
  const trackOutboundLink = useCallback((url) => {
    return trackEvent('click', 'outbound', url);
  }, [trackEvent]);

  return { 
    trackEvent, 
    trackContactFormSubmission, 
    trackCTAClick, 
    trackServiceInterest,
    trackDownload,
    trackOutboundLink
  };
};

export default useAnalytics;
