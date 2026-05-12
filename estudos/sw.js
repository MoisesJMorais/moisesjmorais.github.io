const CACHE_NAME = 'estudos-v3';
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
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
