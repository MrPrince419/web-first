/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules.

// Cache names
const CACHE_NAME = 'prince-ai-automation-v1';
const RUNTIME_CACHE = 'runtime-cache';

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/static/css/main.chunk.css',
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/vendors~main.chunk.js',
  // Add other critical assets here
];

// Cache asset extensions
const CACHE_EXTENSIONS = [
  'html', 'css', 'js', 'json', 'woff', 'woff2', 'ttf', 'eot', 'ico', 'png', 'jpg', 'jpeg', 'svg', 'gif'
];

// Resources that should be network-first
const NETWORK_FIRST_PATTERNS = [
  /\/api\//,
  /\/contact\//
];

const CACHE_CONFIG = {
  images: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    maxEntries: 60
  },
  static: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
    maxEntries: 100
  },
  dynamic: {
    maxAge: 24 * 60 * 60, // 1 day
    maxEntries: 50
  }
};

// Install event - precache critical assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// Fetch event - handle caching strategy
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Parse URL to determine caching strategy
  const url = new URL(event.request.url);
  
  // Cache images with network fallback
  if (/\.(jpe?g|png|gif|webp|svg)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request)
          .then(fetchResponse => {
            const cacheCopy = fetchResponse.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => cache.put(event.request, cacheCopy));
            return fetchResponse;
          })
        )
    );
    return;
  }

  // For navigation requests (HTML pages), use network-first approach
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If no cached version, return the offline fallback page
            return caches.match('/offline.html');
          });
        })
    );
    return;
  }
  
  // Check if this is an API or other network-first resource
  const shouldUseNetworkFirst = NETWORK_FIRST_PATTERNS.some(pattern => 
    pattern.test(url.pathname)
  );
  
  // For API requests, use network-first approach
  if (shouldUseNetworkFirst) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Only cache valid responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // For static assets, use cache-first approach
  const fileExtension = url.pathname.split('.').pop();
  if (CACHE_EXTENSIONS.includes(fileExtension)) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(event.request).then(response => {
            // Only cache valid responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
        })
    );
    return;
  }
  
  // Default: Use stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            // Update cache with fresh response
            if (networkResponse && networkResponse.status === 200) {
              caches.open(RUNTIME_CACHE).then(cache => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Network failed, no updating cache
            return null;
          });
          
        // Return cached response immediately, or wait for network
        return cachedResponse || fetchPromise;
      })
  );
});

// Handle service worker updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
