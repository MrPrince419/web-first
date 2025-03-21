import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A component that tracks page views in Google Analytics with
 * fallback for cases where tracking might be blocked
 */
const AnalyticsWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    // Track pageview with Google Analytics or fallback
    const trackPageView = () => {
      try {
        // Try official Google Analytics tracking
        if (typeof window.gtag === 'function') {
          window.gtag('config', 'G-LBFHMF14F5', {
            'page_path': location.pathname + location.search,
            'page_title': document.title
          });
          
          console.log(`📊 Analytics: Page view tracked for ${location.pathname}`);
          return false; // Don't indicate async response - prevents message channel error
        } 
        // Use fallback if available
        else if (typeof window.trackPageView === 'function') {
          window.trackPageView(location.pathname + location.search);
          console.log(`📊 Fallback Analytics: Page view tracked for ${location.pathname}`);
          return false; // Don't indicate async response
        }
        // No tracking available
        else {
          console.warn('Neither primary nor fallback analytics available');
          return false;
        }
      } catch (error) {
        console.error('Error tracking page view:', error);
        return false;
      }
    };

    // Delay tracking slightly to ensure everything is loaded
    const trackingTimeout = setTimeout(trackPageView, 500);
    
    return () => {
      clearTimeout(trackingTimeout);
    };
  }, [location]);

  return null; // This component doesn't render anything
};

export default AnalyticsWrapper;
