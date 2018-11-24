importScripts('/workbox.js');
console.log('imported');
if (workbox) {
    // Register by regular expression
    // Enforce strategy
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}