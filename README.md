# cache.adderall(⚡)

[![Greenkeeper badge](https://badges.greenkeeper.io/TalAter/cache.adderall.svg)](https://greenkeeper.io/)
> the impatient version of cache.addAll() 

cache.adderall(⚡) speeds up your service worker installations, and saves bandwidth for you and your users.

It is a drop-in replacement for `cache.addAll()`, but unlike `cache.addAll()` it is just too lazy to go to the network every time you update your service worker. Instead, `cache.adderall(⚡)` always looks for files in existing caches first, and only goes to the network if it has no other choice… such a lazy bastard.

### What does cache.adderall(⚡) do?

When your site installs a new service worker, you are probably using `cache.addAll()` to cache all the URLs it needs. Then, every time you make any change to the service worker, or change the list of files to cache, the install event runs again and fetches every single file again… This can be terribly inefficient and wasteful.

`cache.adderall(⚡)` is very much like the browser's native `cache.addAll()`. The only difference is that when you call it, `cache.adderall(⚡)` first looks for the files you are trying to cache in the user's existing caches. If any of these files are found, they will be copied over to the new cache, so that your service worker only needs to download new files. Any file that isn't already cached will be fetched as usual using the native `cache.addAll()`.

This saves bandwidth, speeds up your service worker installation, and saves your users from downloading the same files over and over again, every time your service worker changes.

### How do I use it

Simple, just include the script in your service worker, and replace calls to `cache.addAll()` with `adderall.addAll()`.

````javascript
// In your service worker
importScripts('https://cdnjs.cloudflare.com/ajax/libs/cache.adderall/0.1.0/cache.adderall.js');

var STATIC_FILES = [
  'video/cache.adderall.demo.mp4',
  '/bootstrap/3.3.7/css/bootstrap.min.css',
  '/js/2.6.0/annyang.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cache-v1').then(cache =>
      adderall.addAll(cache, STATIC_FILES)
    )
  );
});
````

### What about...

If you are going to keep asking questions, you might as well just visit the [cache.adderall(⚡) homepage](https://www.talater.com/adderall/).

See you there.

### Author

Tal Ater: [@TalAter](https://twitter.com/TalAter)

### License

Licensed under [MIT](https://github.com/TalAter/Progressive-UI-KITT/blob/master/LICENSE).
