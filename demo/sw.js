// Make sure to include cache.adderall(⚡) in your service worker
importScripts('js/cache.adderall.js');

var CACHE_NAME = 'adderall_v1';

// Files that do not change from version to version.
// When installing a service worker, if any of these exist in a cache, we will just
// copy them over to the new cache.
var IMMUTABLE_FILES = [
  'video/cache.adderall_demo.mp4',
  'img/cache.adderall_demo.png',
  'img/building-progressive-web-apps-book.png',
  'img/bg_texturing.png',
  // 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  // 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/atelier-heath-light.min.css',
  // 'https://fonts.googleapis.com/css?family=Lato:300,700,900'
];

// Files that might change from version to version.
// When installing a service worker, we always ask the browser to try and fetch these.
var MUTABLE_FILES = [
  'styles/main.css',
  'js/main.js',
  'index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // We replace this:
      // cache.addAll(IMMUTABLE_AND MUTABLE_FILES);
      // with this:
      adderall.addAll(cache, IMMUTABLE_FILES, MUTABLE_FILES)
    )
  );
});

// Network falling back to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request.url).then(response => {
          if (response) {
            return response;
          } else if (event.request.headers.get('accept').includes('text/html')) {
            return cache.match('/demo/index.html');
          }
        });
      });
    })
  );
});
