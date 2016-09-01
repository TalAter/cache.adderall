importScripts('/dist/cache.adderall.js');

var STATIC_FILES_TO_CACHE = [
  '/demo/assets/fullpage-background.mp4',
  '/demo/assets/logo.a3ffd16.png',
  '/demo/assets/style_v34.css'
];

var FILES_TO_CACHE = [
  '/demo/assets/weather.js',
  '/demo/assets/index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return adderall.addAll(cache, STATIC_FILES_TO_CACHE, FILES_TO_CACHE);
    })
  );
});
