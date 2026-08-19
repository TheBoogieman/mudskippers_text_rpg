/* MUDSKIPPERS service worker — offline shell, update-friendly */
// BUMP THIS EVERY RELEASE. The browser only reinstalls a service worker whose
// BYTES changed, so a cache name left behind keeps serving the shell it was named
// for: this said v4-36-0 while the game inside it was six releases further on, and
// every offline player was reading the old build.
var CACHE = "mudskippers-v6-32-0";
/* THE SKIN IS PART OF THE SHELL (v5.34.0). The fetch handler below is cache-first
   then network and caches what it fetches, so these two would eventually cache
   themselves - but only after one successful online load. A fresh install that goes
   offline before that gets the game unskinned, which is a silent, confusing failure
   rather than a loud one. They are two shipped assets; they belong in addAll. */
/* ...AND corpus.js IS NOT OPTIONAL (v5.39.0). The skin degrades gracefully if it is
   missing; the corpus does not. Every authored word in the game is in it, and without
   it index.html loads into a game with no beats, no cards and no bible. It is the one
   entry here whose absence is not a cosmetic failure. */
var SHELL = ["./", "./index.html", "./corpus.js", "./veldt-skin.css", "./veldt-menu.js",
             "./manifest.webmanifest", "./icon.svg", "./icon-maskable.svg"];

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
  /* ---- THE SHELL GOES NETWORK-FIRST TOO (v6.24.0) ----
     index.html was network-first so updates flow, and EVERY OTHER FILE was cache-first so
     the game opens offline. Both are right alone and together they open a window where the
     PAGE is new and the stylesheet, the corpus and the skin beside it are whatever the
     outgoing worker still had. v6.10.2 met this as a title screen drawing a cast that the
     same build had already fixed, and answered it by reloading once when the new worker
     claims - which works, and shows the player one stale render first. Six releases in an
     hour turned that one render into the only thing the author could see: he was reading a
     brand new index.html through the previous release's CSS and reporting fixes as broken.

     THE HALF-UPDATED BUILD IS THE BUG, so this closes it rather than papering it. The game
     is five small files that always change together; fetching them costs a moment on a live
     connection and buys a build that is never a mixture. OFFLINE IS UNTOUCHED: a failed
     fetch still falls back to the cache, which is the whole of what cache-first was for. */
  e.respondWith(
    fetch(e.request).then(function(r){
      if(r.ok){
        var copy = r.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        return r;
      }
      /* a bad reply is never served over a good cached one, and never cached */
      return caches.match(e.request).then(function(m){ return m || r; });
    }).catch(function(){
      return caches.match(e.request);      /* offline: the shell is still here */
    })
  );
});
