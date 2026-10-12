const CACHE_NAME = 'fit-tracker-v9'; 
const ASSETS = [
    './',
    './index.html',
    './app.js',
    './manifest.json',
    './icon.png',
    'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS.map(url => new Request(url, { mode: 'no-cors' })));
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => {
            return cached || fetch(e.request).catch(() => {});
        })
    );
});
