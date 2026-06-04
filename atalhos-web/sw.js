// 1. Sempre que alterar a index.html, mude o número da versão aqui (ex: v1 para v2)
const CACHE_NAME = 'atalhos-web-v2'; 
const ASSETS = [
  '/atalhos-web/',
  '/atalhos-web/index.html',
  '/security.js'
];

// Instalação - Cria o novo cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting()) // Força o SW novo a se tornar ativo imediatamente
  );
});

// Ativação - Remove caches antigos automaticamente
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Assume o controle das páginas abertas imediatamente
  );
});

// Estratégia: Stale-While-Revalidate (Serve o cache, mas atualiza em segundo plano)
self.addEventListener('fetch', (event) => {
  // Executa apenas para requisições do próprio site (evita erros com extensões)
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          
          // Busca a versão nova na rede
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            // Se a resposta for válida, atualiza o cache em segundo plano
            if (networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Se estiver totalmente offline, não faz nada, apenas falha a rede silenciosamente
          });

          // Retorna o que estava no cache imediatamente (rápido), ou espera a rede se não tiver no cache
          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});
