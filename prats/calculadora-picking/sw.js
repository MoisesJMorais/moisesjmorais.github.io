const CACHE_NAME = 'picking-v1';
const ASSETS = [
  '/prats/calculadora-picking/',
  '/prats/calculadora-picking/index.html',
  '/prats/calculadora-picking/favicon.ico',
  '/prats/calculadora-picking/icon.png',
  '/prats/calculadora-picking/index.html',
  '/prats/calculadora-picking/security.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercepta as requisições: Tenta buscar no cache primeiro
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
