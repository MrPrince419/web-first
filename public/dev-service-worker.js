// This is a simplified service worker for development only
// It handles message channel errors without providing full caching

// Skip waiting and claim clients
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Handle messages to prevent channel errors
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'PING') {
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage({ type: 'PONG' });
    }
  }
});

// Simple passthrough fetch
self.addEventListener('fetch', event => {
  // No caching in development - just pass through
});

console.log('Development service worker registered');
