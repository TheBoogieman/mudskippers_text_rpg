/* MUDSKIPPERS service worker — offline shell, update-friendly */
// BUMP THIS EVERY RELEASE. The browser only reinstalls a service worker whose
// BYTES changed, so a cache name left behind keeps serving the shell it was named
// for: this said v4-36-0 while the game inside it was six releases further on, and
// every offline player was reading the old build.
var CACHE = "mudskippers-v5-2-0";
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
        // only a good reply becomes the offline shell. Caching unconditionally meant
        // one bad deploy - or a Pages 404 during one - installed itself permanently,
        // and every later visit was served the error from cache before the network
        // was ever consulted.
        if(r.ok){
          var copy = r.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
          return r;
        }
        // ...and a bad reply is not served either. Refusing to CACHE the 404 stopped
        // it sticking forever, but the visitor still got the error page while a
        // working shell sat in the cache one line away.
        return caches.match(e.request).then(function(m){ return m || caches.match("./").then(function(m2){ return m2 || r; }); });
      }).catch(function(){
        return caches.match(e.request).then(function(m){ return m || caches.match("./"); });
      })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(m){
      return m || fetch(e.request).then(function(r){
        if(r.ok){
          var copy = r.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return r;
      });
    })
  );
});
