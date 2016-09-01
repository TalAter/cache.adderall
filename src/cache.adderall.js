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

var addAll = function(cache, staticAssets = [], versionAssets = []) {
  // @TODO: Verify cache is a cache
  // @TODO: Verify staticAssets is an array
  // @TODO: Verify versionAssets is an array
  var newStaticAssets = [];
  return Promise.all(
    staticAssets.map(function(url) {
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
    return cache.addAll(newStaticAssets.concat(versionAssets));
  });
};

module.exports = {
  addAll:     addAll
};
