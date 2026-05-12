const CACHE_NAME = 'estudos-v4';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.delete(CACHE_NAME).then(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(ASSETS);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
