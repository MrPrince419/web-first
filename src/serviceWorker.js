function handleError(error) {
  if (error.status === 404) {
    console.warn('Resource not found:', error.url);
    return new Response('Resource not found', {
      status: 404,
      statusText: 'Not Found'
    });
  }
  throw error;
}

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('SW registered: ', registration);
          
          // Add error handling
          registration.addEventListener('error', event => {
            handleError(event.error);
          });
        })
        .catch(error => {
          console.error('SW registration failed: ', error);
          handleError(error);
        });
    });
  }
}

export function unregister() {
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
