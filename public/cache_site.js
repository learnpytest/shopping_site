const cacheName = "versionOne";

this.addEventListener("install", () => {
  console.log("Service worker: installed for cache_site");
});

this.addEventListener("activate", (event) => {
  // remove cache that are not current cacheName
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

this.addEventListener("fetch", (event) => {
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