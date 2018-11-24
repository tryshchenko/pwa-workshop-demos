if (navigator && navigator.serviceWorker) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "."
    })
    .then(registration =>
      console.log("The service worker has been registered ", registration)
    );
}
