

<!-- Start src/cache.adderall.js -->

<!--
 cache.adderall()
 version : 1.0.0
 author  : Tal Ater @TalAter
 license : MIT
 https://github.com/TalAter/cache.adderall
 -->

## addAll(cache, immutableRequests, mutableRequests)

This method takes a cache object, and one or two arrays of URLS, retrieves them, and adds the resulting response objects to the given cache.

It returns a Promise that only resolves if every single url was cached successfully.

In this way it acts similarly to `cache.addAll()`. In fact, if the first array of URLs is empty, `adderall.addAll()` behaves exactly the same as the native implementation of `cache.addAll()`.

````javascript
// Both of these commands do exactly the same thing:
cache.addAll(URLS_TO_CACHE);
adderall.addAll(cache, [], URLS_TO_CACHE);
````

Where `adderall.addAll()` differs, is how it treats the first array of urls it receives.

In order to save bandwidth and speed up your service worker installation, adderall will first go over the urls in the first array, see if they have been cached before, and copy them to the new cache without having to retrieve them from the Web. Urls in the second cache are always retrieved.

##### Examples:

When adderall.addAll() receives a single array of urls, it will check to see which urls already exist in any of the old caches, and simply copy them to the new cache. Any urls not found will be retrieved and stored in the new cache using the native `cache.addAll()`.
````javascript
adderall.addAll(cache, URLS_TO_CACHE);
````

If you would like to force some of the urls to be retrieved from the network, even if they are already cached, pass them in a second array of urls. This is useful for urls that do not change, but their content does.
````javascript
adderall.addAll(cache, URLS_TO_CACHE, ['/index.html', '/css/global.css']);
````

Note: Both `cache.addAll()`, and `adderall.addAll()` treat the HTTP cache the same way. When either of them decide to retrieve a url from the network, they will first check the HTTP cache for them. If the have a `max-age` header that hasn't passed, the browser will return the response from the HTTP cache.

### Params:

* **Cache** *cache* A cache object. Most often retrieved using `caches.open(name)`
* **Array** *immutableRequests* An array of Request objects for immutable requests to add to the cache
* **Array** *mutableRequests* An array of Request objects for mutable requests to add to the cache

### Return:

* **Promise** A promise that resolves to void

<!-- End src/cache.adderall.js -->

