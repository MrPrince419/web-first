/**
 * This function registers a service worker for production environment
 * to enable offline capabilities and resource caching.
 */
export function registerServiceWorker() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support service workers
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    
    // Our service worker won't work if PUBLIC_URL is on a different origin
    // from what our page is served on. This might happen if a CDN is used to
    // serve assets; see https://github.com/facebook/create-react-app/issues/2374
    if (publicUrl.origin !== window.location.origin) {
      console.log('Public URL is on different origin than page - skipping service worker registration');
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Check if service worker still exists
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost
        navigator.serviceWorker.ready.then(() => {
          console.log('This application is being served by a service worker');
        });
      } else {
        // Not localhost. Just register service worker
        registerValidSW(swUrl);
      }
    });

    // Handle service worker updates
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  } else {
    console.log('Service worker not supported or development environment');
  }
}

// Check if the current host is localhost
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

// Register valid service worker
function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      // Check for updates on page load
      registration.update();
      
      // Set up periodic updates
      setInterval(() => {
        registration.update();
        console.log('Checking for service worker updates');
      }, 1000 * 60 * 60); // Check every hour
      
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Service worker updated - prompt for refresh
              console.log('New content is available; please refresh the page');
              
              // Show notification to user
              if (window.confirm('New version available! Click OK to refresh.')) {
                window.location.reload();
              }
            } else {
              // Service worker first time install
              console.log('Content is cached for offline use');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

// Verify service worker health
function checkValidServiceWorker(swUrl) {
  // Check if service worker can be found
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then(response => {
      const contentType = response.headers.get('content-type');
      
      // Ensure response is JavaScript
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log('No internet connection found. App is running in offline mode.');
    });
}

// Function to unregister service worker
export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
