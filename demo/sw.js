importScripts('js/cache.adderall.js');

var IMMUTABLE_FILES = [
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
];

var MUTABLE_FILES = [
  'styles/main.css',
  'video/cache.adderall_demo.mp4',
  'index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache =>
      adderall.addAll(cache, IMMUTABLE_FILES, MUTABLE_FILES)
    )
  );
});
