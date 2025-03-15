/* global gtag */

export const initGA = () => {
  const script = document.createElement('script');
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-LBFHMF14F5";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-LBFHMF14F5');
};

export const logPageView = (path) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path
    });
  }
};

export const logEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
};
