const CACHE = "adding-single-file-example";
const AWAIT_TIME = 1000;

const precache = () => caches.open(CACHE)
  .then(cache => cache.addAll(['with-sw.html', 'load-service-worker.js', 'service-worker.js']));

const fromNetwork = (req, timeout) =>
  new Promise((fulfill, reject) => {
    // Stop execution if takes more than timeout
    const timeoutId = setTimeout(reject, timeout);
    fetch(req).then(res => {
      // But in case we succeeded - clear timeout
      clearTimeout(timeoutId);
      // Resolve fetched data
      fulfill(res);
    }, reject);
  });

const fromCache = request =>
  // Open cache storage
  caches.open(CACHE).then(cache =>
    // Check if the request is already present in cache
    cache.match(request).then(match =>
      // Return cache or reject promise
      (match || Promise.reject("no-match"))
    )
  );

// On install, cache some resource.
self.addEventListener("install", event => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", event =>
  event.respondWith(
    fromNetwork(event.request, AWAIT_TIME).catch(() => fromCache(evt.request))
  )
);