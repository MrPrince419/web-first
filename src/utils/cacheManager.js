export const CACHE_CONFIG = {
  images: { maxAge: 2592000, maxEntries: 60 }, // 30 days
  static: { maxAge: 604800, maxEntries: 100 }, // 7 days
  dynamic: { maxAge: 86400, maxEntries: 50 } // 1 day
};

export const handleImageCache = async (request, cache) => {
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  return response;
};

export const cleanupCache = async (cacheName, config) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  const now = Date.now();

  return Promise.all(
    keys
      .filter(key => now - new Date(key.headers.get('date')).getTime() > config.maxAge * 1000)
      .map(key => cache.delete(key))
  );
};
