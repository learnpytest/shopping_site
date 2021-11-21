const cacheName = "versionTwo";

this.addEventListener("install", () => {
  console.log("Service worker: installed for cache_site");
});

this.addEventListener("activate", (event) => {
  console.log("Service worker: activated for cache_site");
  // remove cache that are not current cacheName
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: clear cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

this.addEventListener("fetch", (event) => {
  console.log("Service worker: fetch for cache_site");
  event.respondWith(
    // fetch initial request and get the copy of response from promise from server
    fetch(event.request)
    .then((res) => {
      const resClone = res.clone();
      caches.open(cacheName).then((cache) => {
        cache.put(event.request, resClone);
      });
      return res;
    })
    .catch(() => {
      caches.match(event.request).then((res) => res);
    })
  );
});