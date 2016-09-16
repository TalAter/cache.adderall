importScripts('js/cache.adderall.js');

var STATIC_FILES_TO_CACHE = [
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
];

var FILES_TO_CACHE = [
  'styles/main.css',
  'video/cache.adderall.demo.mp4',
  'index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return adderall.addAll(cache, STATIC_FILES_TO_CACHE, FILES_TO_CACHE);
    })
  );
});
