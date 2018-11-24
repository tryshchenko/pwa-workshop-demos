const interceptFetch = async event => {
  return fetch(event.request.url.replace("kitten", "fake-kitten"));
};

self.addEventListener("fetch", event => {
  console.log('Intercepted', event.request.url);
  if (event.request.url && event.request.url.indexOf("jpg") > -1) {
    event.respondWith(interceptFetch(event));
  }
});
