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
  return cache.addAll(staticAssets.concat(versionAssets));
};

module.exports = {
  addAll:     addAll
};
