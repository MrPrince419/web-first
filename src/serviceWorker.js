function handleError(error) {
  if (error.status === 404) {
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
          registration.addEventListener('error', handleError);
        })
        .catch(handleError);
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => registration.unregister())
      .catch(error => console.error(error.message));
  }
}
