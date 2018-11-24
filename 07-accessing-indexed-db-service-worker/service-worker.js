importScripts("https://unpkg.com/dexie@2.0.3/dist/dexie.js");

const db = new Dexie("demo06");
db.version(1).stores({
  users: "name,surname"
});

db.table("users")
  .toArray()
  .then(console.log);
console.log("Dexie", Dexie);
