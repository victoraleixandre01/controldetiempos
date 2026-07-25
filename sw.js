// Service worker mínimo: solo existe para que el navegador considere la
// app "instalable". No cachea nada, deja pasar todas las peticiones a la red.
self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { self.clients.claim(); });
self.addEventListener("fetch", () => {});
