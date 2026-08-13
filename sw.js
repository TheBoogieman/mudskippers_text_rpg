/* MUDSKIPPERS service worker — offline shell, update-friendly */
var CACHE = "mudskippers-v4-19";
var SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-maskable.svg"];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var url = new URL(e.request.url);
  if(url.origin !== location.origin) return; // AI calls go straight to the network, untouched
  if(e.request.mode === "navigate" || url.pathname.endsWith("index.html")){
    // network-first so updates flow; cache fallback so offline works
    e.respondWith(
      fetch(e.request).then(function(r){
        var copy = r.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return r;
      }).catch(function(){
        return caches.match(e.request).then(function(m){ return m || caches.match("./"); });
      })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(m){
      return m || fetch(e.request).then(function(r){
        var copy = r.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return r;
      });
    })
  );
});
