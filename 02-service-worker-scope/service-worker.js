// Uncomment those logs and check what is available in the scope!
// console.log('Service worker scope:');
// console.log('self', self);
// console.log('window', window); // exception
// console.log('document', document); // exception
// console.log('XMLHttpRequest', XMLHttpRequest); // exception
// console.log('Scope equality', self.caches === caches);
// console.log('caches', caches);
// console.log('fetch', fetch);
self.addEventListener("install", event => console.log("Install event", event));
self.addEventListener("fetch", event => console.log("Fetch event", event));
