const CACHE_NAME = 'calculadora-de-picking';
const urlsToCache = [
  '/prats/calculadora-picking/',
  '/prats/calculadora-picking/index.html',
  '/prats/calculadora-picking/security.js',
  '/prats/calculadora-picking/sw.js',
  '/prats/calculadora-picking/manifest.json',
  '/prats/calculadora-picking/icon.png'
  '/prats/calculadora-picking/favicon.ico'
];

// Instalação
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// O SEGREDO DO OFFLINE: Interceptar as buscas
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se achou no cache, retorna. Se não, tenta buscar na rede.
        return response || fetch(event.request);
      }).catch(() => {
        // Opcional: retornar uma página de erro offline específica aqui
      })
  );
});
