/*
 <!--
 cache.adderall()
 version : 0.1.0
 author  : Tal Ater @TalAter
 license : MIT
 https://github.com/TalAter/cache.adderall
 -->
 */

"use strict";

var addAll = function(cache, immutableRequests = [], mutableRequests = []) {
  // @TODO: Verify cache is a cache
  // @TODO: Verify immutableRequests is an array
  // @TODO: Verify mutableRequests is an array
  var newStaticAssets = [];
  return Promise.all(
    immutableRequests.map(function(url) {
      return caches.match(url).then(function(response) {
        if (response) {
          return cache.put(url, response);
        } else {
          newStaticAssets.push(url);
          return Promise.resolve();
        }
      });
    })
  ).then(function() {
    return cache.addAll(newStaticAssets.concat(mutableRequests));
  });
};

module.exports = {
  addAll
};
