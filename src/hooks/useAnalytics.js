import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook to manage Google Analytics tracking with fallback options
 */
const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    // Track page view (handled by AnalyticsWrapper to avoid duplication)
  }, [location]);

  // Track custom events with fallback support
  const trackEvent = useCallback((action, category, label, value) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value
      });
      return true;
    } else if (typeof window.trackEvent === 'function') {
      window.trackEvent(category, action, label);
      return true;
    }
    return false;
  }, []);
  
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
