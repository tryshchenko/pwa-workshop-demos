console.log("08 Service worker has been connected");

self.addEventListener("install", () => {
  console.log("Service worker has been installed");
});

self.addEventListener("fetch", event => {
  const url = event.request.url;
  self.clients.matchAll().then(clients =>
    clients.forEach(client => {
      client.postMessage({
        payload: url
      });
    })
  );
});
