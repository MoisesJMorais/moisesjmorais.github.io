const CACHE_NAME = 'ferramentas-camara-fria';
const ASSETS = [
  './',
  'index.html',
  'manifest.json'
];

// 1. Instalação: Limpa o cache 'estudos-v3' antigo antes de criar o novo
self.addEventListener('install', (e) => {
  console.log('PWA: Iniciando instalação do ' + CACHE_NAME);
  e.waitUntil(
    caches.delete(CACHE_NAME).then(() => {
      console.log('PWA: Cache anterior removido com sucesso.');
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(ASSETS);
      });
    })
  );
  self.skipWaiting();
});

// 2. Ativação: Garante que o Service Worker assuma o controle sem interferir em outros caches
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
  console.log('PWA: ' + CACHE_NAME + ' ativo e operante.');
});

// 3. Fetch: Estratégia de Cache First para o conteúdo do leitor
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
