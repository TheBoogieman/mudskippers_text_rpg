/* VELDT MENU — the pixel-art title art from "MUDSKIPPERS Main Menu.dc.html",
   lifted out of the component runtime and mounted onto the real #titlescreen.
   The drawing code below is verbatim; only the mount at the bottom is new. */
(function(){
  if (window.__veldtMenu) return;
  window.__veldtMenu = true;

  // --- minimal shims so the authored class runs outside its runtime ---
  const React = { createRef: () => ({current:null}) };
  class DCLogic {
    constructor(p){ this.props = p || {}; this.state = {}; }
    setState(o){ Object.assign(this.state, typeof o === 'function' ? o(this.state) : o); this.sync && this.sync(); }
    forceUpdate(){ this.sync && this.sync(); }
  }

const W = 720, H = 280;
const GROUND = 254, WATER_TOP = 208, LEDGE = 240;
const QUAY = 194; // the quay road runs QUAY..WATER_TOP, in front of the warehouses
const OFF = 40; // left margin on pre-rendered layers so parallax never exposes an edge

function mix(a, b, k){
  const pa = [1,3,5].map(i => parseInt(a.substr(i,2),16));
  const pb = [1,3,5].map(i => parseInt(b.substr(i,2),16));
  return '#' + pa.map((v,i) => Math.round(v + (pb[i]-v)*k).toString(16).padStart(2,'0')).join('');
}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296};}

const WEATHER = {
  rain:     {label:'HEAVY RAIN', drops:230, speed:1.0, wind:-0.30, fog:0.10, neon:1.00, haze:0.55, bolt:0},
  downpour: {label:'DOWNPOUR',   drops:430, speed:1.5, wind:-0.44, fog:0.22, neon:0.86, haze:0.40, bolt:0.004},
  drizzle:  {label:'DRIZZLE',    drops:110, speed:0.7, wind:-0.16, fog:0.08, neon:1.05, haze:0.60, bolt:0},
  mist:     {label:'MIST',       drops:45,  speed:0.4, wind:-0.10, fog:0.44, neon:0.70, haze:0.50, bolt:0},
  storm:    {label:'STORM',      drops:520, speed:1.9, wind:-0.56, fog:0.26, neon:0.74, haze:0.30, bolt:0.014},
  clear:    {label:'CLEAR',      drops:0,   speed:0,   wind:0,     fog:0.04, neon:1.15, haze:0.72, bolt:0}
};

const CAST = {
  hesta:   {x:26,  d:0.88, h:76, kind:'human', facing:'back', hat:'bun',   accent:'#d8c8a8', coat:'#3a362e', dark:'#1c1a16', leg:'#2e2b24', skin:'#c0a184', hair:'#4d443a', apron:'#565143', build:1.12},
  three:   {x:48,  d:0.93, h:78, kind:'human', facing:'back', hat:null,    accent:'#b39ddb', coat:'#332a3d', dark:'#1a1520', leg:'#2a2533', skin:'#b08f78', hair:'#2b2434', build:0.95},
  vic:     {x:72,  d:1.02, h:78, kind:'human', facing:'back', hat:'cap',   accent:'#e8a13c', coat:'#3a2e20', dark:'#1d1710', leg:'#2f2a22', skin:'#c2a184', hair:'#7a7166', apron:'#5a4728', build:1.18},
  seven:   {x:96,  d:0.90, h:80, kind:'chassis', facing:'back', hat:null,  accent:'#8fc98a', coat:'#314036', dark:'#18201b', leg:'#2b3830', plate:'#465648', build:1.05},
  marek:   {x:118, d:0.97, h:77, kind:'human', facing:'back', hat:null,    accent:'#7fb3d5', coat:'#28323e', dark:'#141a21', leg:'#242c37', skin:'#bb9b80', hair:'#3a4049', build:0.92},
  pia:     {x:140, d:1.08, h:56, kind:'human', facing:'back', hat:'beanie',accent:'#ff9e6d', coat:'#42302a', dark:'#211714', leg:'#332822', skin:'#b98a6a', hair:'#3a281f', build:1.22},
  courier: {x:163, d:1.06, h:80, kind:'human', facing:'back', hat:'hood',  accent:'#cdd68a', coat:'#a3ad2e', dark:'#4a5313', leg:'#2b333f', skin:'#bb9b80', hair:'#4a5464', build:0.96}
};
const ORDER = ['hesta','three','vic','seven','marek','pia','courier'];
const STAGES = {
  day1:  ['courier'],
  early: ['vic','courier','pia'],
  mid:   ['vic','three','seven','courier','pia'],
  full:  ORDER
};

class Component extends DCLogic {
  constructor(p){
    super(p);
    this.cv = React.createRef();
    this.menu = React.createRef();
    this.mark = React.createRef();
    this.state = {low:false, weather:'rain'};
    this.par = {x:0, tx:0};
    this.flash = 0;
    this.trans = null;
  }

  componentDidMount(){
    let low = false;
    try { low = localStorage.getItem('mud-menu-lowpower') === '1'; } catch(e){}
    this.low = low;
    if (low) this.setState({low:true});
    this.build();
    /* A HIDDEN TITLE SCREEN HAS A ZERO-WIDTH CANVAS, AND THIS LISTENER IS ON WINDOW.
       While a run is playing the game sets #titlescreen to display:none, so the rect
       is 0x0 - and this divided by r.width. One mouse movement during a run made tx
       Infinity; the next frame computed par.x = Infinity + (tx - Infinity) * 0.055,
       which is NaN; and NaN is absorbing, so the parallax never recovered. Back at the
       menu every pre-rendered layer blitted to drawImage(buf, NaN, 0) and silently drew
       nothing - the city, the warehouses, the cranes and the cobbles all vanished while
       the live-drawn rain, traffic and cast stayed, which is why it read as "mangled"
       rather than "blank". Measured: 55,087 skyline pixels came back the instant par.x
       was set to 0. */
    this.onMove = e => {
      const c = this.cv.current;
      if (!c) return;
      const r = c.getBoundingClientRect();
      if (!r.width) return;          /* hidden: keep the last good parallax */
      this.par.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    };
    window.addEventListener('mousemove', this.onMove);
    this.t0 = performance.now();
    this.loop();
  }
  componentWillUnmount(){
    cancelAnimationFrame(this.raf);
    window.removeEventListener('mousemove', this.onMove);
    clearTimeout(this.tTimer);
  }
  componentDidUpdate(pp){
    if (pp.weather !== this.props.weather || pp.castStage !== this.props.castStage) this.build();
  }

  wx(){ return WEATHER[this.props.weather || this.state.weather] || WEATHER.rain; }

  build(){
    const rnd = mulberry32(20260816);
    const w = this.wx();

    this.towers = [
      {x:14,  wd:44, top:-18}, {x:62,  wd:26, top:26}, {x:94,  wd:48, top:-30},
      {x:540, wd:50, top:-26}, {x:596, wd:26, top:22}, {x:628, wd:46, top:-12}
    ].map(t => {
      const rows = [];
      for (let y = t.top + 14; y < 200 - 6; y += 7)
        for (let x = t.x + 4; x < t.x + t.wd - 4; x += 6)
          if (rnd() > 0.24) rows.push({x, y, f: rnd() > 0.86 ? rnd()*3+1 : 0});
      return Object.assign({}, t, {win: rows});
    });

    // Four receding layers. Each is lit — a faded building still has windows in it,
    // it just has fewer, dimmer, and smaller ones.
    const mkLayer = (o) => {
      const arr = []; let lx = -26;
      while (lx < W + 26){
        const wd = o.wMin + Math.floor(rnd()*(o.wMax - o.wMin));
        const ht = o.hMin + Math.floor(rnd()*(o.hMax - o.hMin));
        const b = {x:lx, wd, top: o.base - ht, cap: o.caps[Math.floor(rnd()*o.caps.length)], win: []};
        if (b.cap === 'step' || b.cap === 'setback'){ b.sbw = Math.max(4, Math.round(wd*0.44)); b.sbh = 8 + Math.floor(rnd()*20); }
        if (b.cap === 'mast') b.mastH = 8 + Math.floor(rnd()*16);
        for (let yy = b.top + 4; yy < o.base - 3; yy += o.gy)
          for (let xx = lx + 2; xx < lx + wd - 2; xx += o.gx)
            if (rnd() < o.winC)
              b.win.push({x:xx, y:yy, w:o.ww, h:o.wh, c: rnd() > 0.8 ? '#6fd3e0' : (rnd() > 0.94 ? '#ff9e6d' : '#e8a13c'), a: o.winA * (0.45 + rnd()*0.75)});
        arr.push(b);
        lx += wd + (rnd() > 0.82 ? 2 + Math.floor(rnd()*3) : 1);
      }
      return arr;
    };
    this.layers = [
      {base:196, b: mkLayer({base:196, hMin:70, hMax:172, wMin:5,  wMax:34, gy:9, gx:4, ww:1, wh:1, winC:0.20, winA:0.15, caps:['flat','flat','flat','step','mast']}), c:'#212a3a', a:0.34, p:1.8, haze:0.16},
      {base:199, b: mkLayer({base:199, hMin:56, hMax:150, wMin:7,  wMax:20, gy:8, gx:4, ww:1, wh:1, winC:0.26, winA:0.20, caps:['flat','flat','step','mast']}),  c:'#1e2635', a:0.46, p:2.5, haze:0.14},
      {base:202, b: mkLayer({base:202, hMin:46, hMax:118, wMin:9,  wMax:25, gy:7, gx:5, ww:1, wh:2, winC:0.34, winA:0.34, caps:['flat','step','mast','setback']}), c:'#1b2331', a:0.64, p:3.5, haze:0.10},
      {base:205, b: mkLayer({base:205, hMin:38, hMax:98,  wMin:11, wMax:29, gy:6, gx:5, ww:2, wh:2, winC:0.42, winA:0.52, caps:['flat','step','mast','tank','setback']}), c:'#171f2c', a:0.82, p:4.5, haze:0.07},
      // the near-middle block: the layer that gives the centre of the frame its bulk
      {base:207, b: mkLayer({base:207, hMin:30, hMax:82, wMin:15, wMax:40, gy:6, gx:6, ww:3, wh:2, winC:0.50, winA:0.62, caps:['flat','step','setback','tank','mast']}), c:'#131a26', a:0.95, p:5.3, haze:0.035}
    ];

    // weighted toward the caps that actually change a silhouette
    const caps = ['mast','mast','tank','tank','billboard','billboard','pitch','setback','setback','step','flat'];
    this.mid = [];
    let x = -14;
    while (x < W + 14){
      const wd = 13 + Math.floor(rnd()*32);
      const ht = 36 + Math.floor(rnd()*72);
      const b = {x, wd, top: 208 - ht, cap: caps[Math.floor(rnd()*caps.length)], win: [], seed: rnd()};
      if (b.cap === 'setback'){ b.sbw = Math.max(5, Math.round(wd * (0.38 + rnd()*0.2))); b.sbh = 16 + Math.floor(rnd()*30); }
      if (b.cap === 'step')   { b.sbw = Math.max(5, Math.round(wd * 0.48)); b.sbh = 8 + Math.floor(rnd()*14); }
      if (b.cap === 'billboard'){ b.bbw = wd + 4 + Math.floor(rnd()*10); b.bbh = 9 + Math.floor(rnd()*8); }
      const grid = rnd() > 0.5 ? 5 : 7, gv = rnd() > 0.6 ? 5 : 6;
      for (let yy = b.top + 5; yy < 204; yy += gv)
        for (let xx = x + 2; xx < x + wd - 2; xx += grid)
          if (rnd() > 0.5) b.win.push({x:xx, y:yy, w: grid > 5 ? 3 : 2, c: rnd() > 0.72 ? '#6fd3e0' : (rnd() > 0.9 ? '#ff9e6d' : '#e8a13c'), a: 0.2 + rnd()*0.55});
      this.mid.push(b);
      x += wd + (rnd() > 0.75 ? 3 + Math.floor(rnd()*4) : 1);
    }

    // THE WATERFRONT — what actually connects the city to the river
    this.near = [];
    x = -10;
    while (x < W + 10){
      const wd = 26 + Math.floor(rnd()*44);
      const ht = 16 + Math.floor(rnd()*26);
      const roof = ['flat','pitch','saw','pitch'][Math.floor(rnd()*4)];
      const win = [];
      for (let xx = x + 4; xx < x + wd - 5; xx += 7)
        if (rnd() > 0.4) win.push({x:xx, y: QUAY - ht + 7 + (rnd() > 0.7 ? 7 : 0), a: 0.32 + rnd()*0.4});
      this.near.push({x, wd, ht, top: QUAY - ht, roof, win, door: rnd() > 0.55});
      x += wd + 1 + Math.floor(rnd()*3);
    }

    this.cranes = [];
    for (let i = 0; i < 5; i++)
      this.cranes.push({x: 40 + i * 148 + Math.floor(rnd()*50), hh: 26 + Math.floor(rnd()*22), jib: 20 + Math.floor(rnd()*22), dir: rnd() > 0.5 ? 1 : -1});

    this.piers = [];
    for (let i = 0; i < 11; i++){
      const px = 8 + i * 66 + Math.floor(rnd()*26);
      this.piers.push({x: px, wd: 18 + Math.floor(rnd()*30), len: 2 + Math.floor(rnd()*3), bollard: rnd() > 0.4});
    }

    // ---- traffic on the quay road: two lanes, the near one running right
    const VT = ['lorry','lorry','flatbed','tanker','machine','lorry','machine','flatbed'];
    const bodies = ['#414d5e','#4d4238','#3a5046','#4a4053','#455040','#54483a'];
    // Each lane is a RING with one shared speed and pre-measured gaps. Independent
    // per-vehicle speeds meant the quick ones caught the slow ones and drove through
    // them; a uniform lane speed makes the spacing permanent by construction.
    const RING = W + 220, MINGAP = 22;
    this.vehicles = [];
    [{y:195, h:6, s:-0.30, lo:15, hi:12}, {y:201, h:8, s:0.44, lo:20, hi:17}].forEach(lane => {
      let cur = 0;
      while (true){
        const len = lane.lo + Math.floor(rnd() * lane.hi);
        const gap = MINGAP + Math.floor(rnd() * 78);
        if (cur + len + gap > RING - MINGAP) break;
        this.vehicles.push({
          x: cur - 110, y: lane.y, h: lane.h, len, s: lane.s, ring: RING,
          type: VT[Math.floor(rnd()*VT.length)],
          body: bodies[Math.floor(rnd()*bodies.length)],
          trim: ['#e8a13c','#6fd3e0','#ff9e6d','#8fc98a'][Math.floor(rnd()*4)],
          ph: rnd() * 6
        });
        cur += len + gap;
      }
    });

    // Barges run in two depth lanes, each a ring with one shared speed and pre-measured
    // gaps. The FAR lane is drawn before the waterfront blit, so it passes behind the
    // moored ships and the pier pilings; the near lane passes in front.
    const SRING = W + 200;
    this.ships = [];
    [{lane:'far',  y: WATER_TOP + 6,  h:2, drift:  0.05,  lo:12, hi:10, cabLo:3, cabHi:3, gapLo:70},
     {lane:'near', y: WATER_TOP + 21, h:3, drift: -0.075, lo:18, hi:24, cabLo:5, cabHi:6, gapLo:56}].forEach(L => {
      let cur = 0;
      while (true){
        const sw = L.lo + Math.floor(rnd() * L.hi);
        const gap = L.gapLo + Math.floor(rnd() * 130);
        if (cur + sw + gap > SRING - L.gapLo) break;
        this.ships.push({
          lane: L.lane, x: cur - 100, y: L.y + Math.floor(rnd()*3), w: sw, h: L.h,
          cab: L.cabLo + Math.floor(rnd()*L.cabHi), mast: rnd() > 0.45,
          drift: L.drift, ring: SRING,
          lamp: rnd() > 0.3 ? (rnd() > 0.5 ? '#ff9e6d' : '#8fc98a') : null, ph: rnd()*6
        });
        cur += sw + gap;
      }
    });

    // ---- container terminal: portal cranes, stacked boxes, moored ships
    this.bigCranes = [];
    for (let i = 2; i < 3; i++)
      this.bigCranes.push({
        x: 66 + i * 232 + Math.floor(rnd()*40),
        span: 24 + Math.floor(rnd()*14),
        hh: 62 + Math.floor(rnd()*20),
        jib: 44 + Math.floor(rnd()*20),
        trolley: 0.52 + rnd()*0.34,
        load: rnd() > 0.3
      });
    this.stacks = [];
    for (let i = 0; i < 10; i++)
      this.stacks.push({x: 14 + i * 72 + Math.floor(rnd()*26), cols: 2 + Math.floor(rnd()*3), rows: 1 + Math.floor(rnd()*3), seed: rnd()});
    this.moored = [];
    for (let i = 0; i < 3; i++)
      this.moored.push({x: 74 + i * 226 + Math.floor(rnd()*54), len: 58 + Math.floor(rnd()*42), flip: rnd() > 0.5, boxes: rnd() > 0.35});
    this._crewRnd = rnd;

    // ---- dockers: 5px silhouettes. Some walk the quayside on a ring, the rest stand
    // where there is work to stand at — pier decks and the moored ships' decks.
    const WRING = W + 200;
    this.workers = [];
    let wcur = 0;
    while (true){
      wcur += 16 + Math.floor(rnd() * 66);
      if (wcur > WRING - 30) break;
      const walk = rnd() > 0.42;
      this.workers.push({
        x: wcur - 100, y: 207, ring: WRING, ph: rnd() * 9,
        s: walk ? (rnd() > 0.5 ? 1 : -1) * (0.09 + rnd() * 0.13) : 0,
        hi: rnd() > 0.58
      });
    }

    this.quayLamps = [];
    for (let lx2 = 16; lx2 < W; lx2 += 46 + Math.floor(rnd()*22)) this.quayLamps.push({x: lx2, hh: 9 + Math.floor(rnd()*5)});

    // crews standing on the pier decks and aboard the moored ships
    for (const p of this.piers){
      const n = Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++)
        this.workers.push({x: p.x + 3 + Math.floor(rnd()*Math.max(1, p.wd - 8)), y: WATER_TOP + p.len, ring: WRING, ph: rnd()*9, s: 0, hi: rnd() > 0.5});
    }
    for (const m of this.moored){
      const n = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < n; i++)
        this.workers.push({x: m.x + 10 + Math.floor(rnd()*Math.max(1, m.len - 20)), y: WATER_TOP + 10, ring: WRING, ph: rnd()*9, s: 0, hi: rnd() > 0.4});
    }

    const nc = ['#6fd3e0','#ff9e6d','#8fc98a','#e8a13c','#b39ddb','#6fd3e0','#ff9e6d','#e8a13c','#8fc98a','#7fb3d5'];
    this.signs = [];
    for (let i = 0; i < 22; i++){
      const b = this.mid[Math.floor(rnd()*this.mid.length)];
      if (!b) continue;
      const vert = rnd() > 0.45;
      this.signs.push({
        x: b.x + 2 + Math.floor(rnd()*Math.max(1, b.wd - 8)),
        y: b.top + 6 + Math.floor(rnd()*24),
        w: vert ? 3 : 12 + Math.floor(rnd()*12),
        h: vert ? 12 + Math.floor(rnd()*16) : 3,
        c: nc[i % nc.length],
        ph: rnd()*9,
        bad: rnd() > 0.62
      });
    }

    this.drops = [];
    for (let i = 0; i < w.drops; i++) this.drops.push(this.mkDrop(rnd, true));
    this.rnd = rnd;

    this.traffic = [];
    for (let i = 0; i < 14; i++)
      this.traffic.push({x: rnd()*W, y: 128 + Math.floor(rnd()*3)*13, s: (0.1 + rnd()*0.22) * (rnd() > 0.5 ? 1 : -1), c: rnd() > 0.5 ? '#ff9e6d' : '#f4e6c8'});

    const stage = this.props.castStage || 'full';
    const want = STAGES[stage] || STAGES.full;
    // interlaced: each figure carries a depth, scaling its height and dropping its feet
    // toward the viewer, then they're drawn far-to-near so the group overlaps
    this.cast = ORDER.filter(k => want.indexOf(k) >= 0)
      .map((k, i) => {
        const c = Object.assign({key:k, ph: i * 1.7}, CAST[k]);
        c.h = Math.round(c.h * c.d);
        c.footY = GROUND + Math.round((c.d - 1) * 30);
        return c;
      })
      .sort((a, b) => a.d - b.d);
    this.courier = this.cast.find(c => c.key === 'courier');
    this.splashes = [];
    this.steam = [];
    this.manholes = [
      {x: 606, y: 265, holes: [-10, -4, 3, 9]}
    ];
    this.prerender();
  }

  // ---- PRE-RENDER -------------------------------------------------------
  buf(){
    const c = document.createElement('canvas');
    c.width = W + OFF * 2; c.height = H;
    const x = c.getContext('2d');
    x.imageSmoothingEnabled = false;
    x.translate(OFF, 0);
    return c;
  }
  glowSprite(color, radius, strength){
    const c = document.createElement('canvas');
    c.width = 52; c.height = 52;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(26, 26, 0, 26, 26, radius);
    const rgb = [1,3,5].map(i => parseInt(color.substr(i,2),16)).join(',');
    g.addColorStop(0, 'rgba(' + rgb + ',' + strength + ')');
    g.addColorStop(1, 'rgba(' + rgb + ',0)');
    x.fillStyle = g; x.fillRect(0, 0, 52, 52);
    return c;
  }
  glowFor(color){
    this._glows = this._glows || {};
    if (!this._glows[color]) this._glows[color] = this.glowSprite(color, 15, 0.30);
    return this._glows[color];
  }
  scrimG(ctx){
    if (!this._scrim){
      const g = ctx.createLinearGradient(0, 144, 0, 208);
      g.addColorStop(0, 'rgba(5,8,16,0)'); g.addColorStop(1, 'rgba(5,8,16,0.55)');
      this._scrim = g;
    }
    return this._scrim;
  }
  shoreG(ctx){
    if (!this._shore){
      const g = ctx.createLinearGradient(0, WATER_TOP, 0, WATER_TOP + 16);
      g.addColorStop(0, 'rgba(6,10,17,0.85)'); g.addColorStop(1, 'rgba(6,10,17,0)');
      this._shore = g;
    }
    return this._shore;
  }
  skyG(ctx){
    if (!this._sky){
      const g = ctx.createLinearGradient(0, 0, 0, 214);
      g.addColorStop(0, '#05070d');
      g.addColorStop(0.22, '#0a0d18');
      g.addColorStop(0.48, '#171426');
      g.addColorStop(0.70, '#2a1e2a');
      g.addColorStop(0.87, '#43291f');
      g.addColorStop(1, '#5c3a1d');
      this._sky = g;
    }
    return this._sky;
  }
  sodiumG(ctx){
    if (!this._sod){
      const g = ctx.createLinearGradient(0, 14, 0, 214);
      g.addColorStop(0, 'rgba(232,161,60,0)');
      g.addColorStop(0.30, 'rgba(232,161,60,0.055)');
      g.addColorStop(0.58, 'rgba(238,152,72,0.13)');
      g.addColorStop(0.84, 'rgba(248,166,82,0.24)');
      g.addColorStop(1, 'rgba(255,181,96,0.34)');
      this._sod = g;
    }
    return this._sod;
  }
  fogG(ctx){
    if (!this._fog){
      const g = ctx.createLinearGradient(0, QUAY - 30, 0, WATER_TOP + 16);
      g.addColorStop(0, 'rgba(150,172,194,0)');
      g.addColorStop(0.42, 'rgba(150,172,194,0.085)');
      g.addColorStop(0.78, 'rgba(150,172,194,0.10)');
      g.addColorStop(1, 'rgba(150,172,194,0)');
      this._fog = g;
    }
    return this._fog;
  }
  ledgeG(ctx){
    if (!this._ledge){
      const g = ctx.createLinearGradient(0, LEDGE, 0, H);
      g.addColorStop(0, '#161d27'); g.addColorStop(0.4, '#10161f'); g.addColorStop(1, '#080c13');
      this._ledge = g;
    }
    return this._ledge;
  }

  prerender(){
    this.lampGlow = this.glowSprite('#f2c14e', 18, 0.15);
    this.headBeam = this.glowSprite('#ffe9bf', 8, 0.30);
    this.fogPuff = this.glowSprite('#a8bccf', 22, 0.075);
    this._glows = {};
    this._scrim = this._shore = this._ledge = this._fog = this._sky = this._sod = null;
    this.sodiumPuff = this.glowSprite('#ffb15c', 24, 0.16);
    this.steamPuff = this.glowSprite('#f6fafd', 23, 0.72);
    this.skyGlows = [{x:110, y:172, a:0.9},{x:296, y:162, a:0.72},{x:448, y:176, a:1.0},{x:620, y:166, a:0.85}];

    // ---- background: sky-side towers + three receding layers
    this.bgC = this.buf();
    let x = this.bgC.getContext('2d');
    let P = this.px.bind(this, x);
    for (const tw of this.towers){
      const hg = x.createRadialGradient(tw.x + tw.wd/2, tw.top + 20, 2, tw.x + tw.wd/2, tw.top + 20, 62);
      hg.addColorStop(0, 'rgba(242,193,78,0.20)'); hg.addColorStop(1, 'rgba(242,193,78,0)');
      x.fillStyle = hg; x.fillRect(tw.x - 60, tw.top - 40, tw.wd + 120, 130);
      P(tw.x, tw.top, tw.wd, 200 - tw.top, '#141a27');
      P(tw.x, tw.top, 2, 200 - tw.top, '#1e2635');
      P(tw.x + tw.wd - 1, tw.top, 1, 200 - tw.top, '#0b0f17');
      tw.flick = [];
      for (const wn of tw.win){
        if (wn.f) tw.flick.push(wn);
        else P(wn.x, wn.y, 3, 3, '#f2c14e', 0.47);
      }
    }
    for (let li = 0; li < this.layers.length; li++){
      const L = this.layers[li], base = L.base;
      for (const b of L.b){
        P(b.x, b.top, b.wd, base - b.top, L.c, L.a);
        P(b.x, b.top, b.wd, 1, '#26303f', L.a * 0.8);
        if (b.cap === 'step' || b.cap === 'setback'){
          const sx2 = b.x + Math.round((b.wd - b.sbw)/2);
          P(sx2, b.top - b.sbh, b.sbw, b.sbh, L.c, L.a);
          P(sx2, b.top - b.sbh, b.sbw, 1, '#26303f', L.a * 0.8);
        }
        if (b.cap === 'tank') P(b.x + 3, b.top - 6, Math.min(11, b.wd - 6), 6, L.c, L.a);
        if (b.cap === 'mast'){
          P(b.x + Math.round(b.wd/2), b.top - b.mastH, 1, b.mastH, L.c, L.a * 0.9);
          P(b.x + Math.round(b.wd/2), b.top - b.mastH - 1, 1, 2, '#ff5a5a', L.a * 0.5);
        }
        for (const wn of b.win) P(wn.x, wn.y, wn.w, wn.h, wn.c, wn.a);
      }
      const hzg = x.createLinearGradient(0, 58, 0, 208);
      hzg.addColorStop(0, 'rgba(102,128,156,0)');
      hzg.addColorStop(0.45, 'rgba(102,128,156,' + (L.haze * 0.5).toFixed(3) + ')');
      hzg.addColorStop(1, 'rgba(102,128,156,' + (L.haze * 0.85).toFixed(3) + ')');
      x.fillStyle = hzg; x.fillRect(-OFF, 58, W + OFF*2, 150);
    }

    // ---- mid skyline
    this.midC = this.buf();
    x = this.midC.getContext('2d');
    P = this.px.bind(this, x);
    this.blinks = [];
    for (const b of this.mid){
      P(b.x, b.top, b.wd, 208 - b.top, '#121826');
      P(b.x, b.top, b.wd, 1, '#1b2334');
      P(b.x, b.top, 1, 208 - b.top, '#19212f');
      if (b.cap === 'step' || b.cap === 'setback'){
        const sx2 = b.x + Math.round((b.wd - b.sbw)/2);
        P(sx2, b.top - b.sbh, b.sbw, b.sbh, '#121826');
        P(sx2, b.top - b.sbh, b.sbw, 1, '#1b2334');
        if (b.cap === 'setback'){
          P(sx2 + 2, b.top - b.sbh - 8, 2, 8, '#0e1420');
          this.blinks.push({x: sx2 + 2, y: b.top - b.sbh - 9, r: 1.4});
        }
      }
      if (b.cap === 'pitch') for (let i = 0; i < 7; i++) P(b.x + i, b.top - 7 + i, b.wd - i*2, 1, '#121826');
      if (b.cap === 'tank'){
        const tw2 = Math.min(14, b.wd - 6);
        P(b.x + 3, b.top - 4, tw2, 4, '#0f1622');
        P(b.x + 3, b.top - 10, tw2, 6, '#161e2c');
        P(b.x + 3, b.top - 10, tw2, 1, '#222c3d');
      }
      if (b.cap === 'mast'){
        P(b.x + Math.round(b.wd/2), b.top - 18, 1, 18, '#0f1622');
        P(b.x + Math.round(b.wd/2) - 3, b.top - 12, 7, 1, '#0f1622');
        this.blinks.push({x: b.x + Math.round(b.wd/2), y: b.top - 19, r: 1.1});
      }
      if (b.cap === 'billboard'){
        const bx = b.x + Math.round((b.wd - b.bbw)/2);
        P(bx, b.top - b.bbh - 3, b.bbw, b.bbh, '#0d1420');
        P(bx + 1, b.top - b.bbh - 2, b.bbw - 2, b.bbh - 2, b.seed > 0.5 ? '#6fd3e0' : '#ff9e6d', 0.18);
        P(bx + 2, b.top - b.bbh + 1, b.bbw - 8, 1, '#ffffff', 0.22);
        P(bx + 2, b.top - b.bbh + 4, b.bbw - 12, 1, '#ffffff', 0.14);
      }
      for (const wn of b.win) P(wn.x, wn.y, wn.w, 2, wn.c, wn.a * 0.8);
    }

    // ---- waterfront
    this.wfC = this.buf();
    x = this.wfC.getContext('2d');
    P = this.px.bind(this, x);
    this.bankLights = [];
    for (const cr of this.cranes){
      P(cr.x, QUAY - cr.hh, 2, cr.hh, '#0c1119');
      P(cr.x + (cr.dir > 0 ? 2 : -cr.jib), QUAY - cr.hh, cr.jib, 2, '#0c1119');
      P(cr.x + (cr.dir > 0 ? cr.jib : -cr.jib), QUAY - cr.hh + 2, 1, 9, '#0c1119');
      P(cr.x - 3, QUAY - 3, 8, 3, '#0e141d');
    }
    for (const b of this.near){
      P(b.x, b.top, b.wd, QUAY - b.top, '#151d29');
      P(b.x + b.wd - 1, b.top, 1, QUAY - b.top, '#0a0f17');
      if (b.roof === 'pitch') for (let i = 0; i < 6; i++) P(b.x + i*2, b.top - 6 + i, b.wd - i*4, 1, '#151d29');
      if (b.roof === 'saw') for (let i = 0; i < b.wd - 6; i += 9){ P(b.x + i, b.top - 5, 5, 5, '#151d29'); P(b.x + i + 5, b.top - 5, 4, 1, '#6fd3e0', 0.3); }
      P(b.x, b.top, b.wd, 1, '#2a3546');
      for (const wn of b.win){
        P(wn.x, wn.y, 4, 3, '#e8a13c', wn.a);
        this.bankLights.push({x: wn.x, w: 3, c: '#e8a13c', a: wn.a * 0.8});
      }
      if (b.door){
        const dx = b.x + Math.round(b.wd/2) - 3;
        P(dx, QUAY - 10, 8, 10, '#060a10');
        P(dx + 1, QUAY - 9, 6, 9, '#f2c14e', 0.30);
        this.bankLights.push({x: dx + 1, w: 6, c: '#f2c14e', a: 0.5});
      }
    }
    // container stacks on the quay
    const CBOX = ['#4a352e','#2b4340','#4b3e25','#333a4a','#43283a','#364330'];
    for (const st of this.stacks){
      for (let r = 0; r < st.rows; r++)
        for (let cc = 0; cc < st.cols; cc++){
          const bx = st.x + cc * 12, by = QUAY - (r + 1) * 6;
          const col = CBOX[Math.floor((st.seed * 97 + r * 3 + cc * 7) % CBOX.length)];
          P(bx, by, 11, 5, col);
          P(bx, by, 11, 1, mix(col, '#ffffff', 0.22));
          P(bx + 10, by, 1, 5, mix(col, '#000000', 0.5));
          P(bx, by + 4, 11, 1, mix(col, '#000000', 0.35));
        }
    }
    // portal cranes: legs, portal beam, jib and backstay — all above the road
    this.craneBlinks = [];
    for (const bc of this.bigCranes){
      const apex = QUAY - bc.hh;
      const STEEL = '#43556e', STEELD = '#2a3648', KEY = '#080c13';
      P(bc.x - 1, apex, 4, bc.hh, KEY);
      P(bc.x + bc.span - 1, apex, 4, bc.hh, KEY);
      P(bc.x, apex, 2, bc.hh, STEEL);
      P(bc.x + bc.span, apex, 2, bc.hh, STEEL);
      P(bc.x + 1, apex, 1, bc.hh, STEELD);
      P(bc.x + bc.span + 1, apex, 1, bc.hh, STEELD);
      // diagonals only — horizontal rows every few pixels read as building floors
      for (let i = 4; i < bc.hh - 8; i += 10){
        const dn = (i / 10) % 2 === 0;
        for (let k = 0; k < bc.span - 2; k++){
          const dy = Math.round(k * (9 / (bc.span - 2)));
          P(bc.x + 2 + k, apex + i + (dn ? dy : 9 - dy), 1, 1, STEELD, 0.85);
        }
      }
      // legs foot on the quay
      P(bc.x - 4, QUAY - 3, 10, 3, '#101823');
      P(bc.x + bc.span - 4, QUAY - 3, 10, 3, '#101823');
      P(bc.x - 4, apex - 1, bc.span + 10, 5, KEY);
      P(bc.x - 3, apex, bc.span + 8, 3, STEEL);
      P(bc.x - 3, apex, bc.span + 8, 1, '#5b7291');
      // jib, out over the water
      const jy = apex - 9;
      P(bc.x - 9, jy - 1, bc.span + bc.jib + 16, 5, KEY);
      P(bc.x - 8, jy, bc.span + bc.jib + 14, 3, STEEL);
      P(bc.x - 8, jy, bc.span + bc.jib + 14, 1, '#5b7291');
      P(bc.x - 8, jy + 2, bc.span + bc.jib + 14, 1, STEELD);
      // A-frame and backstay cables
      P(bc.x + Math.round(bc.span/2) - 2, jy - 17, 5, 17, KEY);
      P(bc.x + Math.round(bc.span/2) - 1, jy - 16, 3, 16, STEEL);
      for (let i = 0; i < 18; i++) P(bc.x + Math.round(bc.span/2) + 2 + Math.round(i * (bc.jib / 18)), jy - 15 + Math.round(i * (15 / 18)), 1, 1, '#5b7291', 0.75);
      for (let i = 0; i < 10; i++) P(bc.x + Math.round(bc.span/2) - 2 - i, jy - 15 + Math.round(i * 1.5), 1, 1, '#5b7291', 0.6);
      // machine house
      P(bc.x - 7, jy - 8, 13, 8, KEY);
      P(bc.x - 6, jy - 7, 11, 7, '#26313f');
      P(bc.x - 5, jy - 6, 5, 3, '#f2c14e', 0.5);
      this.craneBlinks.push({x: bc.x + Math.round(bc.span/2), y: jy - 15, r: 1.6});
      bc._jy = jy;
    }

    // the quay road, running the length of the frontage in front of the warehouses
    P(-OFF, QUAY, W + OFF*2, WATER_TOP - QUAY, '#0f151d');
    P(-OFF, QUAY, W + OFF*2, 1, '#1d2735');
    for (let i = -OFF; i < W + OFF; i += 14) P(i, QUAY + 6, 7, 1, '#2b3543', 0.55);
    P(-OFF, WATER_TOP - 3, W + OFF*2, 1, '#232f3d');
    P(-OFF, WATER_TOP - 2, W + OFF*2, 2, '#0a1017');
    for (const q of this.quayLamps){
      P(q.x, QUAY - q.hh, 1, q.hh, '#0c1119');
      P(q.x - 1, QUAY - q.hh - 2, 3, 2, '#f2c14e', 0.9);
      P(q.x - 1, QUAY - 1, 3, 1, '#0c1119');
      this.bankLights.push({x: q.x - 1, w: 3, c: '#f2c14e', a: 0.6});
    }
    // hoist trolleys, cables and hanging containers — drawn after the road they cross
    for (const bc of this.bigCranes){
      const tx = bc.x + Math.round((bc.span + bc.jib) * bc.trolley);
      P(tx - 2, bc._jy + 3, 6, 2, '#2a3646');
      if (bc.load){
        P(tx, bc._jy + 5, 1, 208 - bc._jy - 3, '#39434f', 0.75);
        P(tx - 5, WATER_TOP + 2, 12, 6, '#4a3a30');
        P(tx - 5, WATER_TOP + 2, 12, 1, '#6a5442');
        P(tx - 5, WATER_TOP + 7, 12, 1, '#241b14');
      } else {
        P(tx, bc._jy + 5, 1, 16, '#39434f', 0.6);
        P(tx - 2, bc._jy + 20, 5, 2, '#2a3646');
      }
    }

    // moored ships, alongside and loading
    for (const m of this.moored){
      const my = WATER_TOP + 8, hh2 = 8;
      P(m.x + 3, my, m.len - 6, hh2, '#161f2b');
      P(m.x, my + 2, m.len, hh2 - 2, '#161f2b');
      P(m.x, my + 2, m.len, 1, '#2e3d4d');
      P(m.x + 1, my + hh2, m.len - 2, 1, '#080d14');
      P(m.x + 2, my + hh2 - 2, m.len - 4, 1, '#7a3b32', 0.55);
      const dh = m.flip ? m.x + m.len - 16 : m.x + 4;
      P(dh, my - 7, 14, 7, '#1d2734');
      P(dh, my - 7, 14, 1, '#33445a');
      for (let i = 0; i < 3; i++) P(dh + 2 + i * 4, my - 5, 2, 2, '#f2c14e', 0.5 + (i % 2) * 0.25);
      P(dh + 6, my - 12, 1, 5, '#1d2734');
      P(dh + 5, my - 13, 3, 2, '#8fc98a', 0.8);
      if (m.boxes){
        const bs = m.flip ? m.x + 6 : m.x + 22;
        for (let i = 0; i < 4; i++){
          const col = CBOX[(i * 2 + 1) % CBOX.length];
          P(bs + i * 10, my - 5, 9, 5, col);
          P(bs + i * 10, my - 5, 9, 1, mix(col, '#ffffff', 0.2));
        }
      }
      // mooring lines back to the quay
      for (let i = 0; i < 5; i++){
        P(m.x + 2 - i, my + 1 - i, 1, 1, '#2b3644', 0.8);
        P(m.x + m.len - 3 + i, my + 1 - i, 1, 1, '#2b3644', 0.8);
      }
    }

    for (const p2 of this.piers){
      // deck, edge shadow, side stringers, pilings under it
      P(p2.x, WATER_TOP + p2.len, p2.wd, 2, '#1b2635');
      P(p2.x, WATER_TOP + p2.len, p2.wd, 1, '#2c3b4d');
      P(p2.x, WATER_TOP + p2.len + 2, p2.wd, 1, '#070b12');
      P(p2.x + 1, WATER_TOP, 2, p2.len, '#0d131c');
      P(p2.x + p2.wd - 3, WATER_TOP, 2, p2.len, '#0d131c');
      for (let i = 2; i < p2.wd - 3; i += 5) P(p2.x + i, WATER_TOP + p2.len + 3, 1, 4, '#0b1018');
      if (p2.bollard){
        P(p2.x + p2.wd - 5, WATER_TOP + p2.len - 3, 2, 3, '#101823');
        P(p2.x + 3, WATER_TOP + p2.len - 3, 2, 3, '#101823');
      }
    }

    // ---- cobbles
    this.cobC = this.buf();
    x = this.cobC.getContext('2d');
    P = this.px.bind(this, x);
    let cy = LEDGE + 2, row = 0;
    while (cy < H){
      const cw = 3 + Math.round(row * 0.55), ch = Math.max(2, Math.round(2 + row * 0.32));
      const off = (row % 2) * Math.round(cw / 2);
      for (let cxx = -OFF + off; cxx < W + OFF; cxx += cw + 1){
        const n = Math.sin(cxx * 12.9898 + cy * 78.233) * 43758.5453;
        const v = n - Math.floor(n);
        P(cxx, cy, cw, ch, v > 0.82 ? '#232e3c' : (v > 0.5 ? '#1a2330' : '#141b26'));
        if (v > 0.94) P(cxx, cy, cw, 1, '#3b4c60', 0.5);
      }
      cy += ch + 1; row++;
    }
    // manhole cover: an ellipse in rows, ribbed, with vent holes
    for (const mh of this.manholes){
      const rows = [17, 25, 31, 34, 35, 35, 33, 29, 23, 15];
      for (let i = 0; i < rows.length; i++){
        const rw = rows[i], rx = mh.x - Math.round(rw / 2), ry = mh.y - 5 + i;
        P(rx, ry, rw, 1, i < 2 ? '#3a4a5d' : (i > 6 ? '#131b25' : '#232e3d'));
      }
      P(mh.x - 16, mh.y - 4, 32, 1, '#46586d', 0.7);
      for (let i = 1; i < 9; i++) P(mh.x - Math.round(rows[i]/2) + 1, mh.y - 5 + i, rows[i] - 2, 1, i % 2 ? '#1d2836' : '#212d3c');
      // rib pattern
      for (let k = -12; k <= 12; k += 5) P(mh.x + k, mh.y - 3, 1, 7, '#161f2b', 0.8);
      P(mh.x - 14, mh.y, 28, 1, '#161f2b', 0.6);
      P(mh.x - 12, mh.y + 3, 24, 1, '#161f2b', 0.45);
      // vent holes
      for (const hx of mh.holes){ P(mh.x + hx, mh.y - 2, 2, 1, '#070b11'); P(mh.x + hx, mh.y + 1, 2, 1, '#070b11'); }
      // wet ring around the rim
      P(mh.x - 20, mh.y - 6, 40, 1, '#0c131c', 0.5);
      P(mh.x - 20, mh.y + 5, 40, 1, '#0c131c', 0.5);
    }

    // ---- street clutter. Baked with the cobbles so it travels with them.
    {
      const r2 = mulberry32(70417);
      const crate = (bx, by, bw, bh, col) => {
        P(bx, by, bw, bh, col);
        P(bx, by, bw, 1, mix(col, '#ffffff', 0.24));
        P(bx + bw - 1, by, 1, bh, mix(col, '#000000', 0.5));
        P(bx, by + bh - 1, bw, 1, '#05070c');
        P(bx + 1, by + Math.round(bh/2), bw - 2, 1, mix(col, '#000000', 0.35));
      };
      // crates and a pallet, stacked against nothing in particular
      crate(214, 262, 9, 7, '#4a3a28');
      crate(219, 256, 7, 6, '#3f4436');
      crate(438, 270, 8, 6, '#43362c');
      crate(662, 258, 7, 5, '#3a4048');
      P(508, 272, 13, 2, '#3d3125');
      for (let i = 0; i < 5; i++) P(509 + i * 3, 269, 2, 3, '#463829');
      // bollards
      for (const bx of [268, 352, 574]){
        P(bx, 258, 3, 9, '#1a222e');
        P(bx - 1, 256, 5, 2, '#26313f');
        P(bx + 2, 258, 1, 9, '#0a0e15');
      }
      // a tipped barrel
      P(596, 268, 11, 6, '#40342a');
      P(596, 268, 11, 1, '#5b4b3a');
      P(596, 273, 11, 1, '#05070c');
      P(605, 268, 2, 6, '#2a221b');
      // drain grates
      for (const dx of [330, 690]){
        P(dx, 250, 8, 4, '#141c26');
        for (let i = 0; i < 3; i++) P(dx + 1 + i * 3, 251, 2, 2, '#070b11');
      }
      // broken and missing stones
      for (let i = 0; i < 9; i++){
        const cx2 = 190 + Math.floor(r2() * 520), cy2 = LEDGE + 6 + Math.floor(r2() * 32);
        P(cx2, cy2, 3 + Math.floor(r2()*3), 1 + Math.floor(r2()*2), '#0a1017', 0.9);
      }
      // litter: paper, cans, butts
      const LIT = ['#6a6455','#7a6a4a','#4d5560','#6b4a3c','#59614e'];
      for (let i = 0; i < 26; i++){
        const lx = 186 + Math.floor(r2() * 528), ly = LEDGE + 5 + Math.floor(r2() * 34);
        const lw2 = 1 + Math.floor(r2() * 2);
        P(lx, ly, lw2, 1, LIT[Math.floor(r2() * LIT.length)], 0.42 + r2() * 0.3);
      }
      // Rusted railing along the embankment edge. It runs from the right edge inward
      // and stops dead about halfway across, where it has been torn out — the break is
      // the point of the thing, so it gets bent rail, a leaning post and stubs.
      {
        const rustA = '#523726', rustB = '#6d4a30', rustD = '#2a1e16', rustL = '#7d573a';
        const railTop = LEDGE - 13, railMid = LEDGE - 7, BREAK = 368, END = W + OFF;
        const gaps = [[478, 494], [604, 611]];
        for (let x = BREAK + 11; x < END; x++){
          if (gaps.some(g => x >= g[0] && x < g[1])) continue;
          P(x, railTop, 1, 1, x % 7 === 0 ? rustB : rustA, 0.8);
          P(x, railTop + 1, 1, 1, rustD, 0.7);
          P(x, railMid, 1, 1, x % 5 === 0 ? rustD : rustA, 0.72);
        }
        for (let x = BREAK + 13; x < END; x += 17){
          P(x, railTop - 2, 2, LEDGE - railTop + 2, rustA);
          P(x, railTop - 2, 1, LEDGE - railTop + 2, rustB, 0.6);
          P(x + 1, railTop - 2, 1, LEDGE - railTop + 2, rustD, 0.85);
          P(x - 1, railTop - 3, 4, 1, rustL, 0.75);
          P(x - 1, LEDGE - 1, 4, 1, rustD);
        }
        // the torn end: rail sags and snaps off
        for (let i = 0; i < 11; i++) P(BREAK + i, railTop + 3 + Math.round(i * 0.5) - 5, 1, 1, rustA, 0.85);
        for (let i = 0; i < 13; i++) P(BREAK + 10 + Math.round(i * 0.42), LEDGE - i, 2, 1, i > 10 ? rustD : rustA);
        // stubs of the section that is gone, receding left
        P(BREAK - 24, LEDGE - 6, 2, 6, rustD);
        P(BREAK - 25, LEDGE - 7, 4, 1, rustA, 0.7);
        P(BREAK - 47, LEDGE - 3, 2, 3, rustD, 0.85);
        // rust bleeding down the stones under the posts
        for (let x = BREAK; x < END; x += 9) P(x + (x % 3), LEDGE, 1, 2, '#4a3324', 0.32);
      }

      // grit banked up along the kerb
      for (let i = 0; i < 40; i++){
        const gx = -OFF + Math.floor(r2() * (W + OFF * 2));
        P(gx, LEDGE + 2 + Math.floor(r2() * 3), 1, 1, '#2e3a49', 0.35 + r2() * 0.3);
      }
    }

    // puddle basins, baked
    for (let i = 0; i < 7; i++){
      const px2 = ((i * 149 + 30) % W), pw = 44 + i * 16, py = GROUND - 4 + (i % 4) * 9;
      const pg = x.createLinearGradient(0, py, 0, py + 14);
      pg.addColorStop(0, 'rgba(0,0,0,0.4)'); pg.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = pg; x.fillRect(px2, py, pw, 14);
    }
  }

  mkDrop(rnd, spread){
    const w = this.wx();
    const layer = rnd() > 0.62 ? 1 : 0;
    return {
      x: rnd()*(W + 90) - 45,
      y: spread ? rnd()*H : -10,
      len: layer ? 7 + rnd()*9 : 3 + rnd()*5,
      v: (layer ? 3.4 : 2.1) * w.speed * (0.8 + rnd()*0.5),
      layer
    };
  }

  toggleLow = () => {
    this.low = !this.low;
    try { localStorage.setItem('mud-menu-lowpower', this.low ? '1' : '0'); } catch(e){}
    this.setState({low:this.low});
    if (!this.low){ this.t0 = performance.now(); this.loop(); }
    else { cancelAnimationFrame(this.raf); this.draw(2.0); }
  };

  /* THE TRANSITION NOBODY EVER SAW (fixed v5.38.0). start() faded the menu and the
     wordmark out and scheduled them back in 3400ms later - but the game's own handler
     ran on the same click and hid #titlescreen immediately, so the fade played to an
     invisible screen and the run just began. Worse, the restore was still pending: come
     back via MENU inside those 3.4 seconds and the menu was still at opacity 0, then
     popped to 1 in front of you. That is the "disappears and reappears", and it was
     intermittent purely because it depended on how long you played.
     So the transition now HOLDS the door: see holdTheDoor() at the mount. And the
     restore is no longer a timer anybody can arrive in the middle of - see settleMenu(),
     which any return to the title screen calls. */
  start = () => {
    if (this.trans) return;
    this.trans = {t0: performance.now()};
    if (this.menu.current) this.menu.current.style.opacity = '0';
    if (this.mark.current) this.mark.current.style.transition = 'opacity .6s ease';
    if (this.mark.current) this.mark.current.style.opacity = '0';
    if (this.low){ this.t0 = performance.now(); this.loop(); }
  };

  /* PUT THE MENU BACK, NOW, WITHOUT A FADE. Called whenever the title screen is shown
     again. Cancelling the timer is the point: a restore that arrives on its own schedule
     is a restore the player can walk in on. */
  settleMenu = () => {
    clearTimeout(this.tTimer);
    this.trans = null;
    const m = this.menu.current, k = this.mark.current;
    if (m){ const t = m.style.transition; m.style.transition = 'none'; m.style.opacity = '1';
            void m.offsetHeight; m.style.transition = t; }
    if (k){ k.style.transition = 'none'; k.style.opacity = '1';
            void k.offsetHeight; k.style.transition = 'opacity .6s ease'; }
    if (this.low){ cancelAnimationFrame(this.raf); this.draw(2.0); }
  };

  loop = () => {
    const t = (performance.now() - this.t0) / 1000;
    this.draw(t);
    if (!this.low || this.trans) this.raf = requestAnimationFrame(this.loop);
  };

  px(ctx, x, y, w, h, c, a){ ctx.globalAlpha = a === undefined ? 1 : a; ctx.fillStyle = c; ctx.fillRect(x|0, y|0, w|0, h|0); ctx.globalAlpha = 1; }

  draw(t){
    const cv = this.cv.current; if (!cv) return;
    const dpr = 1;
    if (cv.width !== W){ cv.width = W * dpr; cv.height = H * dpr; }
    const ctx = cv.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const w = this.wx();
    const P = this.px.bind(this, ctx);

    /* ...and the belt to the guard's braces. The listener above cannot poison this any
       more, but a single non-finite frame from ANY future source would stick forever,
       and the failure is silent - no error, no blank screen, just a city that stops
       being drawn. Cheap to check every frame, impossible to recover from without it. */
    if (!isFinite(this.par.tx)) this.par.tx = 0;
    if (!isFinite(this.par.x))  this.par.x  = 0;
    this.par.x += (this.par.tx - this.par.x) * 0.055;
    const pr = this.par.x;

    // lightning
    if (w.bolt && !this.low && Math.random() < w.bolt) this.flash = 1;
    if (this.flash > 0) this.flash -= 0.08;
    const fl = Math.max(0, this.flash);

    // sky
    ctx.fillStyle = this.skyG(ctx); ctx.fillRect(0, 0, W, 214);
    // the city's own light thrown back down off the cloud base
    ctx.globalAlpha = Math.min(1, w.haze * 1.5);
    ctx.fillStyle = this.sodiumG(ctx); ctx.fillRect(0, 14, W, 200);
    ctx.globalAlpha = 1;
    // pooling brightest where the districts are densest
    for (const p3 of this.skyGlows){
      ctx.globalAlpha = Math.min(1, w.haze * 1.6) * p3.a;
      ctx.drawImage(this.sodiumPuff, p3.x - 150, p3.y - 78, 300, 156);
    }
    ctx.globalAlpha = 1;

    // background rain (behind the city)
    if (!this.low) this.rain(ctx, 0, w, t);

    // Static geometry is pre-rendered once into offscreen layers and blitted.
    // Drawing it live was ~5,600 fillRects and ~40 gradient allocations per frame.
    const blit = (buf, p) => ctx.drawImage(buf, Math.round(pr * p) - OFF, 0);

    blit(this.bgC, 3);
    // airlight: the same sodium wash laid over the far city so the glow reads as haze
    // hanging between the towers rather than a band of sky behind them
    ctx.globalAlpha = Math.min(1, w.haze * 1.15);
    ctx.fillStyle = this.sodiumG(ctx); ctx.fillRect(0, 14, W, 200);
    ctx.globalAlpha = 1;
    // tower beacons and the windows that flicker are the only live pixels up there
    ctx.save(); ctx.translate(Math.round(pr * 3), 0);
    for (const tw of this.towers){
      const bp = 0.55 + 0.45 * Math.abs(Math.sin(t * 0.9 + tw.x));
      P(tw.x + tw.wd/2 - 1, tw.top - 5, 2, 4, '#f2c14e', bp);
      P(tw.x + 3, tw.top, tw.wd - 6, 2, '#f2c14e', 0.5 * bp);
      for (const wn of tw.flick) P(wn.x, wn.y, 3, 3, '#f2c14e', (0.2 + 0.6 * Math.abs(Math.sin(t * wn.f + wn.x))) * 0.85);
    }
    ctx.restore();

    blit(this.midC, 6);
    ctx.save(); ctx.translate(Math.round(pr * 6), 0);
    for (const m of this.blinks) P(m.x, m.y, 1, 2, '#ff5a5a', 0.4 + 0.6*Math.abs(Math.sin(t * m.r + m.x)));
    for (const c of this.traffic){
      if (!this.low) c.x += c.s;
      if (c.x > W + 6) c.x = -6; if (c.x < -6) c.x = W + 6;
      P(c.x, c.y, 2, 1, c.c, 0.5);
    }
    for (const sg3 of this.signs){
      let a = w.neon;
      if (sg3.bad && !this.low){
        const n = Math.sin(t * 11 + sg3.ph) * Math.sin(t * 3.3 + sg3.ph * 2);
        a *= n > -0.75 ? 1 : 0.12;
      }
      a = Math.min(1, a);
      ctx.drawImage(this.glowFor(sg3.c), sg3.x + sg3.w/2 - 26, sg3.y + sg3.h/2 - 26);
      P(sg3.x, sg3.y, sg3.w, sg3.h, sg3.c, a);
      P(sg3.x, sg3.y, sg3.w, sg3.h, '#ffffff', a * 0.35);
    }
    ctx.restore();

    // street level sits in its own darkness so the cast reads against it
    ctx.fillStyle = this.scrimG(ctx); ctx.fillRect(0, 144, W, 64);

    // --- THE RIVER, drawn BEFORE anything standing in it ---
    P(0, WATER_TOP, W, LEDGE - WATER_TOP, '#090d15');
    // THE BANK, MIRRORED. Reflecting only the lamps left them floating as ribbons in a
    // flat band with a hard edge at the waterline. The river has to carry the whole
    // silhouette — warehouses, cranes, roofs and all — scanline by scanline, each row
    // displaced by its own ripple so the mirror breaks up as it recedes.
    const rows = LEDGE - WATER_TOP, bx = Math.round(pr * 8) - OFF, bw2 = this.wfC.width;
    for (let i = 0; i < rows; i++){
      const src = WATER_TOP - 2 - i;
      if (src < 0) break;
      const k = i / rows;
      const wob = Math.sin(t * 1.5 + i * 0.42) * (0.8 + k * 3.4) + Math.sin(t * 0.7 + i * 0.19) * 1.4;
      ctx.globalAlpha = 0.52 * Math.pow(1 - k, 1.25);
      ctx.drawImage(this.wfC, 0, src, bw2, 1, bx + wob, WATER_TOP + i, bw2, 1);
    }
    ctx.globalAlpha = 1;
    // cold cast over the whole reflection so the river reads as water, not more city
    P(0, WATER_TOP, W, rows, '#11304a', 0.26);
    // the waterline itself: wet stone, not a drawn edge
    ctx.fillStyle = this.shoreG(ctx); ctx.fillRect(0, WATER_TOP, W, 16);
    ctx.save(); ctx.translate(Math.round(pr * 10), 0);
    for (const sg4 of this.signs){
      const rip = Math.sin(t * 1.6 + sg4.x * 0.06) * 1.6;
      for (let i = 0; i < LEDGE - WATER_TOP; i++){
        const wob = Math.sin(t * 2.2 + i * 0.6 + sg4.x) * 1.3 + rip;
        P(sg4.x + wob, WATER_TOP + i, sg4.w, 1, sg4.c, 0.17 * (1 - i / (LEDGE - WATER_TOP)) * w.neon);
      }
    }
    ctx.restore();
    for (let i = 0; i < 9; i++){
      const ry = WATER_TOP + 4 + i * 3.6, amp = 0.4 + i * 0.22;
      for (let seg = 0; seg < W; seg += 24)
        P(seg, ry + Math.sin(t * 1.15 + i * 0.8 + seg * 0.045) * amp, 18, 1, '#3c5672', 0.10 + i * 0.006);
    }

    // far barges first — the moored ships and pilings then draw over them
    ctx.save(); ctx.translate(Math.round(pr * 8), 0);
    this.barges(ctx, 'far', t);
    ctx.restore();

    // --- THE WATERFRONT, standing in the river ---
    blit(this.wfC, 8);
    ctx.save(); ctx.translate(Math.round(pr * 8), 0);
    for (const cr of this.cranes) P(cr.x, QUAY - cr.hh - 2, 2, 2, '#ff5a5a', 0.35 + 0.4*Math.abs(Math.sin(t * 1.3 + cr.x)));
    for (const cb of this.craneBlinks) P(cb.x, cb.y, 2, 2, '#ff5a5a', 0.3 + 0.65*Math.abs(Math.sin(t * cb.r + cb.x)));
    for (const q of this.quayLamps) ctx.drawImage(this.lampGlow, q.x - 26, QUAY - q.hh - 26);
    ctx.restore();
    // soft fog sitting on the frontage and the road — a flat band plus slow wisps
    ctx.fillStyle = this.fogG(ctx); ctx.fillRect(0, QUAY - 30, W, WATER_TOP - QUAY + 46);
    for (let i = 0; i < 6; i++){
      const fx = ((t * (5 + i * 1.7) + i * 173) % (W + 300)) - 220;
      ctx.drawImage(this.fogPuff, fx, QUAY - 22 + (i % 3) * 9, 230 + i * 26, 34);
    }
    ctx.save(); ctx.translate(Math.round(pr * 8), 0);
    for (const v of this.vehicles){
      if (!this.low) v.x += v.s;
      if (v.x > W + 110) v.x -= v.ring; else if (v.x < -110) v.x += v.ring;
      this.vehicle(ctx, v, t, w);
    }
    this.dockers(ctx, t);
    this.barges(ctx, 'near', t);
    ctx.restore();

    // --- THE NEAR EMBANKMENT, then the street ---
    // without this the water butts straight onto cobbles with a drawn line between them
    P(0, LEDGE - 5, W, 5, '#0a1018');
    P(0, LEDGE - 5, W, 1, '#1c2a38');
    for (let i = 0; i < W; i += 17) P(i, LEDGE - 4, 9, 1, '#101a26');
    ctx.fillStyle = this.ledgeG(ctx); ctx.fillRect(0, LEDGE, W, H - LEDGE);
    P(0, LEDGE, W, 1, '#39485a');
    P(0, LEDGE + 1, W, 1, '#0c131c');
    blit(this.cobC, 16);
    ctx.save(); ctx.translate(Math.round(pr * 16), 0);
    for (let i = 0; i < 7; i++){
      const px2 = ((i * 149 + 30) % W), pw = 44 + i * 16, py = GROUND - 4 + (i % 4) * 9;
      const c2 = ['#6fd3e0','#ff9e6d','#e8a13c','#8fc98a'][i % 4];
      for (let k = 0; k < 10; k++)
        P(px2 + 4 + Math.sin(t * 1.7 + k * 0.8 + i) * 2, py + k, pw - 8, 1, c2, 0.11 * (1 - k / 10) * w.neon);
    }
    // steam creeping out of the manhole's vent holes
    {
      if (!this.low)
        for (const mh of this.manholes)
          if (Math.random() < 0.45)
            this.steam.push({x: mh.x + mh.holes[Math.floor(Math.random() * mh.holes.length)] + 1, y: mh.y - 1, a: 0, dx: w.wind * (0.5 + Math.random() * 0.7)});
      for (let i = this.steam.length - 1; i >= 0; i--){
        const sp = this.steam[i];
        sp.a += 0.0082;
        if (sp.a >= 1){ this.steam.splice(i, 1); continue; }
        if (!this.low){ sp.y -= 0.34 + sp.a * 0.30; sp.x += sp.dx + sp.dx * sp.a * 0.85 + Math.sin(t * 1.2 + sp.y * 0.22) * 0.16; }
        const sz = 7 + sp.a * 29;
        ctx.globalAlpha = Math.sin(sp.a * Math.PI) * 0.17;
        ctx.drawImage(this.steamPuff, sp.x - sz/2, sp.y - sz/2, sz, sz);
      }
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    // --- CAST ---
    const tr = this.trans ? (performance.now() - this.trans.t0) / 1000 : -1;
    ctx.save(); ctx.translate(pr * 16, 0);
    for (const c of this.cast){
      const isC = c.key === 'courier';
      let x = c.x, walk = -1, alpha = 1;
      if (isC && tr >= 0){
        if (tr < 0.45) walk = 0;                       // turning
        else if (tr < 2.0){ walk = tr - 0.45; x = c.x + (tr - 0.45) * 150; alpha = Math.max(0, 1 - (tr - 1.4) / 0.6); }
        else alpha = 0;
      }
      if (alpha <= 0) continue;
      const fy = c.footY;
      ctx.globalAlpha = alpha;
      // contact shadow, then a short smear on the wet stones — not a mirror
      ctx.save();
      ctx.globalAlpha = alpha * 0.5;
      const sg = ctx.createRadialGradient(x, fy, 1, x, fy, 16);
      sg.addColorStop(0, 'rgba(0,0,0,0.7)'); sg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sg; ctx.fillRect(x - 16, fy - 4, 32, 12);
      ctx.beginPath(); ctx.rect(0, fy, W, 14); ctx.clip();
      ctx.translate(0, fy * 2 + 2); ctx.scale(1, -1);
      ctx.globalAlpha = alpha * 0.13;
      this.figure(ctx, c, x + Math.sin(t * 1.8 + c.ph) * 0.8, fy, t, walk, true);
      ctx.restore();
      ctx.globalAlpha = alpha;
      // Soft white rim on every figure: the figure is stamped into a scratch buffer,
      // flattened to a white silhouette, and laid down at a ring of one- and two-pixel
      // offsets. Cheap, and it reads as light catching a wet coat rather than an outline.
      {
        const S = this.rimC || (this.rimC = Object.assign(document.createElement('canvas'), {width: 72, height: 128}));
        const sc = S.getContext('2d');
        sc.setTransform(1, 0, 0, 1, 0, 0);
        sc.clearRect(0, 0, 72, 128);
        sc.save(); sc.translate(36 - x, 118 - fy);
        this.rimPass = true;
        this.figure(sc, c, x, fy, t, walk, false);
        this.rimPass = false;
        sc.restore();
        sc.globalCompositeOperation = 'source-in';
        sc.fillStyle = '#eef4ff'; sc.fillRect(0, 0, 72, 128);
        sc.globalCompositeOperation = 'source-over';
        ctx.save();
        ctx.globalAlpha = alpha * 0.055;
        for (const o of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]])
          ctx.drawImage(S, x - 36 + o[0], fy - 118 + o[1]);
        ctx.restore();
        ctx.globalAlpha = alpha;
      }
      this.figure(ctx, c, x, fy, t, walk, false);
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    // --- FOREGROUND RAIN ---
    if (!this.low) this.rain(ctx, 1, w, t);

    // fog / atmosphere
    if (w.fog > 0){ P(0, 0, W, H, '#8fa3b8', w.fog * 0.16); }
    // lightning flash
    if (fl > 0) P(0, 0, W, H, '#dce9ff', fl * 0.20);
    // dim into the game
    if (tr >= 1.9) P(0, 0, W, H, '#05070b', Math.min(1, (tr - 1.9) / 0.7));
  }

  rain(ctx, layer, w, t){
    if (!w.drops) return;
    ctx.strokeStyle = layer ? 'rgba(206,230,248,0.52)' : 'rgba(158,184,210,0.24)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (const d of this.drops){
      if (d.layer !== layer) continue;
      d.y += d.v; d.x += w.wind * d.v * 0.5;
      if (d.y > H){ d.y = -8; d.x = Math.random()*(W+90) - 45; }
      if (d.x < -50) d.x = W + 40;
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + w.wind * d.len * 0.55, d.y + d.len);
    }
    ctx.stroke();
    // Splashes: each drop that lands on the stones opens a small ring and dies.
    if (layer){
      const spawn = Math.round(w.drops / 34);
      for (let i = 0; i < spawn; i++)
        this.splashes.push({x: Math.random() * W, y: LEDGE + 3 + Math.random() * (H - LEDGE - 5), a: 0});
      for (let i = this.splashes.length - 1; i >= 0; i--){
        const sp = this.splashes[i];
        sp.a += 0.085;
        if (sp.a >= 1){ this.splashes.splice(i, 1); continue; }
        const r = Math.round(sp.a * 4), fade = (1 - sp.a) * 0.5;
        this.px(ctx, sp.x - r, sp.y, 1, 1, '#c8e0f2', fade);
        this.px(ctx, sp.x + r, sp.y, 1, 1, '#c8e0f2', fade);
        if (sp.a < 0.45){
          this.px(ctx, sp.x, sp.y - 1 - r, 1, 2, '#dceaf6', fade * 1.3);
          this.px(ctx, sp.x, sp.y, 2, 1, '#dceaf6', fade);
        }
      }
    }
  }

  // Dockers — five pixels tall. Walkers shuffle on a two-frame leg cycle; standers
  // shift a pixel now and then, which at this scale reads as turning to look.
  dockers(ctx, t){
    const P = this.px.bind(this, ctx);
    for (const k of this.workers){
      if (k.s && !this.low){
        k.x += k.s;
        if (k.x > W + 100) k.x -= k.ring; else if (k.x < -100) k.x += k.ring;
      }
      const y = k.y;
      const turn = k.s ? 0 : (Math.sin(t * 0.5 + k.ph) > 0.72 ? 1 : 0);
      const x = Math.round(k.x) + turn;
      P(x, y - 5, 2, 3, '#080b11');
      P(x + (k.s > 0 ? 1 : 0), y - 6, 1, 1, '#080b11');
      if (k.s && !this.low){
        const step = Math.sin(t * 5.5 + k.ph) > 0;
        P(x + (step ? 0 : 1), y - 2, 1, 2, '#080b11');
        P(x + (step ? 1 : 0), y - 2, 1, 1, '#080b11');
      } else {
        P(x, y - 2, 1, 2, '#080b11');
        P(x + 1, y - 2, 1, 2, '#080b11');
      }
      if (k.hi) P(x, y - 4, 2, 1, '#c8d24a', 0.5);
    }
  }

  barges(ctx, lane, t){
    const P = this.px.bind(this, ctx);
    const far = lane === 'far';
    for (const sh of this.ships){
      if (sh.lane !== lane) continue;
      if (!this.low) sh.x += sh.drift;
      if (sh.x > W + 100) sh.x -= sh.ring; else if (sh.x < -100) sh.x += sh.ring;
      const sy2 = sh.y + Math.round(Math.sin(t * 0.8 + sh.ph));
      const hull = far ? '#121a24' : '#0e141d';
      P(sh.x, sy2, sh.w, sh.h, hull);
      P(sh.x, sy2 + sh.h, sh.w - 2, 1, '#060a10');
      P(sh.x + 1, sy2 - 1, sh.w - 2, 1, far ? '#1e2a35' : '#26333f');
      P(sh.x + Math.round(sh.w*0.5), sy2 - (far ? 3 : 4), sh.cab, far ? 3 : 4, '#141d28');
      P(sh.x + Math.round(sh.w*0.5) + 1, sy2 - (far ? 2 : 3), 2, 2, '#f2c14e', far ? 0.5 : 0.75);
      if (sh.mast && !far){ P(sh.x + 3, sy2 - 6, 1, 6, '#0e141d'); P(sh.x + 1, sy2 - 4, 5, 1, '#0e141d'); }
      if (sh.lamp){
        const ly = far ? sy2 - 4 : (sh.mast ? sy2 - 7 : sy2 - 6);
        P(sh.x + 2, ly, 2, 2, sh.lamp, far ? 0.6 : 0.95);
        if (!far) ctx.drawImage(this.glowFor(sh.lamp), sh.x + 3 - 26, ly + 1 - 26);
      }
      for (let i = 1; i < (far ? 3 : 5); i++)
        P(sh.x - i*3, sy2 + sh.h + i, 4, 1, '#3d556b', (far ? 0.10 : 0.16) / i);
    }
  }

  // Quay traffic: lorries, flatbeds, tankers and yard machinery. Built tail-to-nose and
  // mirrored by direction, so one description draws both lanes.
  vehicle(ctx, v, t, w){
    const P = this.px.bind(this, ctx);
    const right = v.s > 0;
    const at = (dx, wd) => right ? v.x + dx : v.x + v.len - dx - wd;
    const y = v.y, h = v.h, top = y - h;
    const dark = mix(v.body, '#000000', 0.45);
    const lit = mix(v.body, '#ffffff', 0.16);

    if (v.type === 'tanker'){
      const cabW = Math.round(v.len * 0.28);
      P(at(0, v.len - cabW - 1), top + 2, v.len - cabW - 1, h - 2, v.body);
      P(at(0, v.len - cabW - 1), top + 2, v.len - cabW - 1, 1, lit);
      P(at(1, v.len - cabW - 3), top + h - 2, v.len - cabW - 3, 1, dark);
      P(at(v.len - cabW, cabW), top, cabW, h, dark);
      P(at(v.len - cabW + 1, cabW - 2), top + 1, cabW - 2, 2, '#28323f');
    } else if (v.type === 'flatbed'){
      const cabW = Math.round(v.len * 0.3);
      P(at(0, v.len), y - 3, v.len, 3, dark);
      for (let i = 0; i < 3; i++)
        P(at(2 + i * Math.round((v.len - cabW) / 3), Math.round((v.len - cabW) / 3) - 2), top + (i % 2), Math.round((v.len - cabW) / 3) - 2, h - 3 + (i % 2 ? 0 : 1), i % 2 ? mix(v.body,'#000000',0.2) : v.body);
      P(at(v.len - cabW, cabW), top, cabW, h, mix(v.body, '#000000', 0.3));
    } else if (v.type === 'machine'){
      // yard machinery: tracked base, cab, and a jib that swings
      P(at(0, v.len - 4), y - 3, v.len - 4, 3, '#161d26');
      for (let i = 0; i < v.len - 6; i += 4) P(at(1 + i, 2), y - 2, 2, 2, '#0a0f16');
      P(at(2, Math.round(v.len * 0.5)), top + 1, Math.round(v.len * 0.5), h - 4, v.body);
      P(at(2, Math.round(v.len * 0.5)), top + 1, Math.round(v.len * 0.5), 1, v.trim);
      const swing = Math.sin(t * 0.6 + v.ph) * 3;
      for (let i = 0; i < 12; i++)
        P(at(Math.round(v.len * 0.5) + i, 1), top - 1 - Math.round(i * 0.75) + swing * 0.2, 1, 1, '#2a3542');
      P(at(Math.round(v.len * 0.5) + 12, 1), top - 9 + swing * 0.2, 1, 5, '#2a3542');
      // amber beacon
      P(at(4, 2), top - 2, 2, 2, '#f2c14e', Math.sin(t * 5 + v.ph) > 0 ? 0.95 : 0.15);
    } else {
      const cabW = Math.round(v.len * 0.3);
      P(at(0, v.len - cabW - 1), top, v.len - cabW - 1, h, v.body);
      P(at(0, v.len - cabW - 1), top, v.len - cabW - 1, 1, lit);
      P(at(1, v.len - cabW - 3), top + Math.round(h/2), v.len - cabW - 3, 1, v.trim, 0.55);
      P(at(v.len - cabW, cabW), top + 1, cabW, h - 1, dark);
      P(at(v.len - cabW + 1, cabW - 2), top + 2, cabW - 2, 2, '#2b3746');
    }

    // wheels
    P(at(2, 2), y, 2, 2, '#080c12');
    P(at(v.len - 5, 3), y, 3, 2, '#080c12');
    // lamps: white at the nose, red at the tail
    const nose = right ? v.x + v.len - 1 : v.x;
    const tail = right ? v.x : v.x + v.len - 1;
    P(nose - (right ? 0 : 1), y - 2, 2, 1, '#fff4d8', 0.95);
    P(tail, y - 2, 1, 1, '#ff5a5a', 0.8);
    ctx.drawImage(this.headBeam, nose - 26 + (right ? 6 : -6), y - 2 - 26);
    // headlamp caught on the wet river below
    for (let i = 0; i < 9; i++)
      P(nose + Math.sin(t * 2 + i) * 1.2, WATER_TOP + i * 1.5, 2, 1, '#ffe9bf', 0.10 * (1 - i / 9) * w.neon);
  }

  // parametric pixel humanoid — silhouette, rim light, face where it fits
  figure(ctx, c, x, footY, t, walk, isRefl){
    const P = this.px.bind(this, ctx);
    const h = c.h;
    const headH = Math.round(h * 0.15), headW = Math.round(h * 0.108 * c.build);
    const torsoH = Math.round(h * 0.46);
    const legH = h - headH - torsoH;
    const bw = Math.round(h * 0.245 * c.build);
    const walking = walk >= 0;
    const side = walking || c.facing === 'side';
    const bwx = side ? Math.round(bw * 0.66) : bw;

    // Coat hem only. A whole-body offset here pops every arm a full pixel at once,
    // which at five pixels of arm reads as flapping rather than breathing.
    const sway = side ? 0 : Math.sin(t * 0.55 + c.ph) * 1;
    const turn = Math.round(Math.sin(t * 0.31 + c.ph * 2.1) * 1.4);

    const legTop = footY - legH;
    // walk bob: a single pixel at twice the stride rate. Correct for walking — unlike
    // idle, where a body offset just makes the arms flap.
    const bob = walking ? (Math.abs(Math.sin(walk * 9)) > 0.68 ? -1 : 0) : 0;
    const torsoTop = legTop - torsoH + bob;
    const headTop = torsoTop - headH;
    const cx = x - bwx / 2;

    // legs — trousers read a step lighter than the coat so they clear the ledge
    const lw = Math.max(4, Math.round(bwx * 0.33));
    const legC = c.leg || '#2a3341', legD = '#151b24';
    // Legs pivot FROM THE HIP. Translating a whole leg column sideways by the stride
    // walks it out from under the torso and opens a wedge between body and leg; a
    // hip-anchored shear keeps the top of every leg inside the coat at all times.
    const swing = walking ? Math.sin(walk * 9) : 0;
    const hipL = cx + 2, hipR = cx + bwx - lw - 2;
    const reach = walking ? 5 : 0;
    const leg = (hipX, amt, col, front) => {
      for (let i = 0; i < legH; i++){
        const k = i / (legH - 1);
        const dx = Math.round(amt * k * k);
        P(hipX + dx, legTop + i, lw, 1, col);
        P(hipX + dx, legTop + i, 1, 1, legD, 0.75);
        if (front) P(hipX + dx + lw - 1, legTop + i, 1, 1, mix(col, c.accent, 0.22));
      }
      const fx = hipX + Math.round(amt);
      P(fx - 1, footY - 4, lw + 3, 4, front ? '#0d1117' : '#0b0f15');
    };
    if (side){
      // one pair of hips in profile: back leg trails, front leg leads, opposite phase
      const hip = cx + Math.round((bwx - lw) / 2);
      leg(hip, -swing * reach - (walking ? 0 : 1), legD, false);
      leg(hip,  swing * reach + (walking ? 0 : 4), legC, true);
    } else {
      P(hipL + lw, legTop + 2, hipR - hipL - lw, legH - 2, '#05070c', 0.85);
      leg(hipL, 0, legD, false);
      leg(hipR, 0, legC, true);
    }

    // Tapered coat with sloped shoulders, drawn row by row. A straight-sided rectangle
    // with square corners is a brick; the A-line hem and the shoulder slope are what
    // make it a garment. The light wrap is applied per row so it follows the taper.
    const hemW = bwx + Math.max(3, Math.round(bwx * 0.34));
    const rimA = mix(c.coat, c.accent, 0.44), rimB = mix(c.coat, c.accent, 0.18);
    const shadeL = mix(c.coat, '#000000', 0.45);
    const rows = torsoH + 5;
    for (let i = 0; i < rows; i++){
      const k = Math.min(1, i / torsoH);
      let wI = Math.round(bwx + (hemW - bwx) * k * k);
      if (i < 4) wI -= (4 - i) * 2;
      const hemSway = i > torsoH - 7 ? Math.round(sway) : 0;
      const xI = cx + Math.round((bwx - wI) / 2) + hemSway;
      P(xI, torsoTop + i, wI, 1, c.coat);
      P(xI, torsoTop + i, 1, 1, shadeL);
      P(xI + wI - 1, torsoTop + i, 1, 1, rimA);
      if (i > 3) P(xI + wI - 2, torsoTop + i, 1, 1, rimB);
    }
    P(cx + Math.round(sway) - 2, torsoTop + rows - 1, hemW + 4, 1, '#05070c', 0.75);
    // neck, drawn after the shoulders so the head is joined to the body
    const nkW = Math.max(4, Math.round(bwx * 0.34));
    const nkX = cx + Math.round((bwx - nkW) / 2) + (side ? 2 : 0);
    P(nkX, torsoTop - 3, nkW, 4, c.kind === 'chassis' ? c.plate : (c.facing === 'back' ? c.hair : c.skin));
    P(nkX, torsoTop - 3, nkW, 2, c.dark, 0.45);
    // coat opening — front view only; in profile it just reads as a stripe
    if (!side) P(cx + Math.round(bwx/2), torsoTop + 6, 1, torsoH - 9, c.dark, 0.5);
    if (c.apron) P(cx + 1, torsoTop + Math.round(torsoH * 0.4), bwx - 2, Math.round(torsoH * 0.6), c.apron, 0.85);
    // the one piece of real colour each of them carries
    if (c.kind !== 'chassis'){
      const scW = Math.round(bwx * 0.62), scX = cx + Math.round((bwx - scW) / 2) + (side ? 2 : 0);
      P(scX, torsoTop + 3, scW, 3, c.accent, 0.62);
      P(scX, torsoTop + 5, scW, 1, '#000000', 0.25);
    }

    if (c.kind === 'chassis'){
      P(cx + 1, torsoTop + 3, bwx - 2, 2, c.plate);
      P(cx + 1, torsoTop + Math.round(torsoH*0.5), bwx - 2, 2, c.plate);
      P(cx + bwx/2 - 1, torsoTop + Math.round(torsoH*0.28), 3, 3, c.accent, 0.55 + 0.45*Math.abs(Math.sin(t*1.6)));
    }

    // head
    const hx = cx + Math.round((bwx - headW)/2) + (side ? 1 : turn);
    const hy = headTop + (c.key === 'pia' ? -1 : 0);
    // local scrim: heads are the darkest thing in the figure and the city behind them
    // is lit, so they need their own separation rather than one bright edge pixel
    if (!isRefl){
      const hs = ctx.createRadialGradient(hx + headW/2, hy + headH/2, 1, hx + headW/2, hy + headH/2, headW * 1.9);
      hs.addColorStop(0, 'rgba(4,6,11,0.72)');
      hs.addColorStop(1, 'rgba(4,6,11,0)');
      ctx.fillStyle = hs;
      ctx.fillRect(hx - headW*2, hy - headH, headW*5, headH*3);
    }
    if (c.kind === 'chassis'){
      P(hx, hy + 2, headW, headH - 2, c.plate);
      P(hx + 1, hy + Math.round(headH*0.45), headW - 2, 2, '#0c1210');
      P(hx + headW - 4, hy + Math.round(headH*0.45), 2, 2, c.accent, 0.6 + 0.4*Math.abs(Math.sin(t*2.3)));
    } else if (c.facing === 'back' && !walking){
      P(hx, hy + 2, headW, headH - 2, c.hair);
      P(hx + 1, hy + 1, headW - 2, 1, c.hair);
      P(hx + 1, hy + headH - 3, headW - 2, 2, mix(c.hair, '#000000', 0.4));
      P(hx, hy + 1, headW, 1, mix(c.hair, c.accent, 0.3));
      if (c.hat === 'hood'){
        // a hood is a soft shape: narrow at the crown, flaring to the shoulders
        // the hood is pulled up over the head, so it is in its own shadow — the bright
        // coat colour here framed the face as a yellow rectangle
        const hood = mix(c.coat, '#0a0d14', 0.62);
        P(hx, hy - 1, headW, 2, hood);
        P(hx - 1, hy + 1, headW + 2, headH - 1, hood);
        P(hx - 2, hy + headH - 2, headW + 4, 4, mix(c.coat, '#0a0d14', 0.45));
        P(hx, hy + 2, headW, headH - 3, mix(c.hair, '#000000', 0.6));
      }
      if (c.hat === 'cap'){
        P(hx, hy, headW, 3, mix(c.coat, '#000000', 0.25));
        P(hx + 1, hy - 1, headW - 2, 1, mix(c.coat, '#000000', 0.25));
        P(hx - 2, hy + 3, headW + 3, 1, mix(c.coat, '#000000', 0.55));
      }
      if (c.hat === 'beanie'){
        const bh = Math.round(headH * 0.5);
        P(hx, hy, headW, bh, c.accent);
        P(hx + 1, hy - 1, headW - 2, 1, c.accent);
        P(hx - 1, hy + bh - 1, headW + 2, 2, mix(c.accent, '#000000', 0.35));
      }
      if (c.hat === 'bun'){ P(hx + headW - 2, hy - 1, 3, 3, c.hair); P(hx + headW - 1, hy, 1, 1, mix(c.hair, c.accent, 0.4)); }
      // collar, standing up against the rain — inset and sloped, not a slab
      P(cx + 1, torsoTop, bwx - 2, 3, mix(c.coat, '#000000', 0.42));
      P(cx + 2, torsoTop - 1, bwx - 4, 1, mix(c.coat, '#000000', 0.42));
      P(cx + 2, torsoTop - 1, bwx - 4, 1, mix(c.coat, c.accent, 0.26));
    } else {
      P(hx, hy + 2, headW, headH - 2, c.skin);
      P(hx, hy + 1, headW, Math.max(2, Math.round(headH*0.34)), c.hair);
      // eyes catch the neon
      const ey = hy + Math.round(headH * 0.56);
      if (side){
        // profile, looking out at the city
        P(hx, hy + 1, Math.max(3, Math.round(headW * 0.45)), headH - 2, c.hair);
        P(hx + headW - 3, ey, 2, 2, '#191012');
        P(hx + headW - 3, ey, 2, 1, c.accent, 0.8);
        P(hx + headW, ey + 1, 1, 2, c.skin);
        P(hx + headW - 4, ey + 4, 3, 1, '#7a5a4a', 0.6);
        P(hx + Math.round(headW * 0.4), hy + headH - 2, Math.round(headW * 0.5), 2, c.dark, 0.4);
      } else {
        P(hx + 1, ey, 2, 2, '#191012');
        P(hx + headW - 3, ey, 2, 2, '#191012');
        P(hx + 1, ey, 2, 1, c.accent, 0.75);
        P(hx + headW - 3, ey, 2, 1, c.accent, 0.75);
        P(hx + 2, ey + 4, headW - 4, 1, '#7a5a4a', 0.6);
        P(hx, hy + 2, 1, headH - 3, c.dark, 0.45);
      }
    }

    // rim light — the city is behind them
    // Light wrap, not a drawn line: the garment's OWN colour lifted toward the accent
    // across a two-step falloff. It stops at the hem — a rim that continues into the
    // legs makes any dark figure read as a lamppost.
    P(cx - 1, torsoTop + 1, bwx + 2, 1, mix(c.coat, c.accent, 0.30));
    const hairTone = c.kind === 'chassis' ? c.plate : (c.facing === 'back' && !walking ? c.hair : c.skin);
    P(hx + headW - 1, hy + 2, 1, headH - 3, mix(hairTone, c.accent, 0.42));
    P(hx, hy + 1, headW, 1, mix(hairTone, c.accent, 0.26));
    P(cx + 1, legTop, 1, legH - 3, '#0a0e14', 0.7);

    // arms LAST, so the rim light doesn't paint over the only pixels that show them
    const armH = Math.round(torsoH * 0.66);
    const armW = Math.max(3, Math.round(bwx * 0.26));
    // sleeve sits between coat and trouser so the arm never fuses with either
    const sleeve = c.kind === 'chassis' ? c.plate : mix(c.coat, c.leg || '#2a3341', 0.42);
    const gesture = c.key === 'marek' ? Math.round(Math.sin(t * 0.8) * 1) : 0;
    let handX, handY;
    if (side){
      // near arm sits a pixel proud of the coat's front edge so it silhouettes
      // the arm counter-swings against the legs
      const ax = cx + bwx - armW + 1 + (walking ? Math.round(-swing * 2) : 0);
      P(ax - 1, torsoTop + 4, armW + 2, armH + 2, '#05070c', 0.85);
      P(ax, torsoTop + 5, armW, armH, sleeve);
      P(ax + armW - 1, torsoTop + 6, 1, armH - 4, c.accent, 0.45);
      P(ax, torsoTop + 4 + armH, armW, 1, '#05070c', 0.8);
      handX = ax + armW - 3; handY = torsoTop + 5 + armH;
    } else {
      P(cx - armW - 2, torsoTop + 3 - gesture, armW + 2, armH + 2, '#05070c', 0.7);
      P(cx + bwx, torsoTop + 3, armW + 2, armH + 2, '#05070c', 0.7);
      P(cx - armW - 1, torsoTop + 4 - gesture, armW, armH, sleeve);
      P(cx + bwx + 1, torsoTop + 4, armW, armH, sleeve);
      P(cx + bwx + armW, torsoTop + 4, 1, armH, c.accent, 0.5);
      handX = cx + bwx + 1; handY = torsoTop + 4 + armH;
      if (c.kind !== 'chassis') P(cx - armW - 1, torsoTop + 4 + armH - gesture, 3, 3, c.skin);
    }
    if (c.kind !== 'chassis') P(handX, handY, 3, 3, c.skin);

    // Nine — the humming shard in the courier's hand
    if (c.key === 'courier' && !isRefl && !this.rimPass){
      const sx = handX, sy = handY - 1;
      const hum = 0.7 + 0.3 * Math.abs(Math.sin(t * 2.6));
      // The shard sits against a neon-yellow coat, so a warm gold glow had nothing to
      // separate it. It is cool now — cyan-white against yellow-green is the widest hue
      // gap available — and it is seated on a dark pocket so the bloom has something to
      // read against instead of smearing into the jacket.
      const sh = ctx.createRadialGradient(sx + 2, sy + 3, 0, sx + 2, sy + 3, 15);
      sh.addColorStop(0, 'rgba(8,6,4,0.6)');
      sh.addColorStop(1, 'rgba(8,6,4,0)');
      ctx.fillStyle = sh; ctx.fillRect(sx - 13, sy - 12, 30, 30);
      const gg = ctx.createRadialGradient(sx + 2, sy + 3, 0, sx + 2, sy + 3, 30);
      gg.addColorStop(0, 'rgba(255,236,196,' + (0.9 * hum).toFixed(3) + ')');
      gg.addColorStop(0.35, 'rgba(255,150,54,' + (0.5 * hum).toFixed(3) + ')');
      gg.addColorStop(1, 'rgba(255,120,30,0)');
      ctx.fillStyle = gg; ctx.fillRect(sx - 28, sy - 27, 60, 60);
      P(sx + 1, sy - 1, 2, 8, '#ff8c2b', hum);
      P(sx - 1, sy + 1, 6, 4, '#ff8c2b', hum * 0.9);
      P(sx, sy + 1, 4, 4, '#ffc266', hum);
      P(sx + 1, sy + 2, 2, 2, '#fff6e2', hum);
    }
  }

  renderVals(){
    const w = this.wx();
    const stage = this.props.castStage || 'full';
    const names = {day1:'DAY 1', early:'DAY 2', mid:'DAY 4', full:'DAY 9'};
    return {
      cv: this.cv, menu: this.menu, mark: this.mark,
      toggleLow: this.toggleLow,
      start: this.start,
      lowLabel: this.state.low ? 'LOW POWER · ON' : 'LOW POWER · OFF',
      readout: 'LOWER VELDT · 23:14 · ' + w.label,
      continueSub: (names[stage] || 'DAY 9') + ' — ' + (this.props.continueNote || 'the safehouse, and nobody sleeping')
    };
  }
}

  // --- mount onto the real title screen -------------------------------
  function mount(){
    const ts = document.getElementById('titlescreen');
    if (!ts || ts.querySelector('.veldt-art')) return;

    const art = document.createElement('div');
    art.className = 'veldt-art';
    art.innerHTML =
      '<canvas class="veldt-cv"></canvas>' +
      '<div class="veldt-vig"></div>' +
      '<div class="veldt-mark">' +
        '<div class="veldt-wordmark">MUDSKIPPERS</div>' +
        '<div class="veldt-tag">The Courier\u2019s Run \u2014 a story game with your AI at the table</div>' +
      '</div>' +
      '<div class="veldt-readout"></div>' +
      '<button type="button" class="veldt-low"></button>';
    ts.insertBefore(art, ts.firstChild);

    const inst = new Component({ weather:'rain', castStage:'full' });
    inst.cv.current   = art.querySelector('.veldt-cv');
    inst.mark.current = art.querySelector('.veldt-mark');
    inst.menu.current = ts.querySelector('.t-menu');

    const ro = art.querySelector('.veldt-readout');
    const lb = art.querySelector('.veldt-low');
    inst.sync = function(){
      const v = inst.renderVals();
      ro.textContent = v.readout;
      lb.textContent = v.lowLabel;
    };
    lb.addEventListener('click', inst.toggleLow);

    /* HOLD THE DOOR OPEN LONG ENOUGH TO SEE IT (v5.38.0). The game's handler is an
       onclick PROPERTY on the button, which runs in the target phase - so a capture
       listener here goes first, and stopImmediatePropagation stops the property handler
       too. We block the first click, play the transition, then re-issue the click with a
       one-shot flag that lets it straight through.
       1300ms, not the old 3400: the fade itself is .5s for the menu and .6s for the
       wordmark, so this is the fade plus a beat of clear city, and no longer than anyone
       wants to wait for a game they just asked to start. One constant, one place. */
    const ENTER_HOLD = 1300;
    function holdTheDoor(btn){
      if (!btn) return;
      btn.addEventListener('click', function(e){
        if (btn.__veldtGo){ btn.__veldtGo = false; return; }   /* the re-issue: let it by */
        e.preventDefault();
        e.stopImmediatePropagation();
        inst.start();
        setTimeout(function(){ btn.__veldtGo = true; btn.click(); }, ENTER_HOLD);
      }, true);
    }
    holdTheDoor(document.getElementById('t-new'));
    holdTheDoor(document.getElementById('t-continue'));

    /* ...AND PUT IT BACK THE MOMENT THE TITLE SCREEN RETURNS. The game shows #titlescreen
       by writing its style, so watching the attribute is the one signal that does not
       require the skin to know which of MENU, a walk-out or an ending brought us here. */
    const ts2 = document.getElementById('titlescreen');
    if (ts2 && window.MutationObserver){
      let wasHidden = getComputedStyle(ts2).display === 'none';
      new MutationObserver(function(){
        const hidden = getComputedStyle(ts2).display === 'none';
        if (wasHidden && !hidden) inst.settleMenu();
        wasHidden = hidden;
      }).observe(ts2, {attributes:true, attributeFilter:['style','class']});
    }

    relayoutMenu(ts);

    inst.componentDidMount();
    inst.sync();
    window.__veldtMenuInstance = inst;
  }

  /* The game builds one column of ten identical buttons. The design has two
     doors and a rack of chips. Same buttons, same ids, same handlers — they
     are only moved into two rows and re-labelled by class. */
  function relayoutMenu(ts){
    const menu = ts.querySelector('.t-menu');
    if (!menu || menu.dataset.veldt) return;
    menu.dataset.veldt = '1';

    const doors = document.createElement('div');
    doors.className = 'veldt-doors';
    const chips = document.createElement('div');
    chips.className = 'veldt-chips';

    const primary = ['t-continue', 't-new'];
    // the two author's tools read as a separate class of thing
    const tools = ['t-board', 't-reh'];

    for (const b of [...menu.children]){
      if (primary.includes(b.id)){ b.classList.add('veldt-door'); doors.appendChild(b); }
      else {
        b.classList.add('veldt-chip');
        if (tools.includes(b.id)) b.classList.add('veldt-tool');
        // chips carry the label only — the subtitle belongs to the doors
        const s = b.querySelector('small');
        if (s){ b.title = s.textContent.trim(); s.remove(); }
        chips.appendChild(b);
      }
    }
    // player's chips first, then a divider, then the author's tools
    const order = ['t-story','t-runs','t-settings','t-guide','t-install','t-board','t-reh'];
    for (const id of order){ const el = chips.querySelector('#' + id); if (el) chips.appendChild(el); }
    const rule = document.createElement('span');
    rule.className = 'veldt-rule';
    const firstTool = chips.querySelector('.veldt-tool');
    if (firstTool) chips.insertBefore(rule, firstTool);

    menu.appendChild(doors);
    menu.appendChild(chips);

    /* THE DEDICATION IS ALREADY IN THE GAME (v5.34.0). This used to append its own
       `.veldt-ded` reading "for Mr. Togan", and its guard only asked whether IT had
       added one - not whether index.html already carried the line. It does, as a
       sibling .t-foot div right under #t-foot, so on the real title screen the
       dedication rendered twice. The game's own line stays and this one goes: the
       skin restyles what is there and does not author it. */
  }

  /* --- consecutive lines from one speaker read as one block ------------
     The feed emits one .block per line, so a character saying three things
     in a row produced three separate boxes with the name repeated. Tag each
     block's position in its run and let the CSS collapse the seams. */
  function speakerOf(b){
    if (!b || b.nodeType !== 1 || !b.classList.contains('block')) return null;
    if (b.classList.contains('narr') || b.classList.contains('dmaside') || b.classList.contains('beatcard')) return null;
    const tag = b.firstElementChild;
    if (!tag || !tag.classList.contains('tag')) return null;
    if (!(tag.nextElementSibling && tag.nextElementSibling.tagName === 'SPAN')) return null;
    return tag.textContent.trim().toUpperCase();
  }
  function groupRuns(feed){
    const blocks = Array.from(feed.querySelectorAll('.block'));
    for (let i = 0; i < blocks.length; i++){
      const me = speakerOf(blocks[i]);
      if (!me){ blocks[i].removeAttribute('data-run'); continue; }
      const prev = speakerOf(blocks[i-1]) === me;
      const next = speakerOf(blocks[i+1]) === me;
      blocks[i].setAttribute('data-run', !prev && !next ? 'solo' : !prev ? 'first' : !next ? 'last' : 'mid');
    }
  }
  function watchFeed(){
    const feed = document.getElementById('feed');
    if (!feed) return false;
    groupRuns(feed);
    let queued = false;
    new MutationObserver(function(){
      if (queued) return;
      queued = true;
      requestAnimationFrame(function(){ queued = false; groupRuns(feed); });
    }).observe(feed, { childList:true, subtree:true, characterData:true });
    return true;
  }
  if (!watchFeed()){
    let ft = 0;
    const fiv = setInterval(function(){ if (watchFeed() || ++ft > 60) clearInterval(fiv); }, 200);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
  // the title screen is built before this file may land; retry briefly
  let tries = 0;
  const iv = setInterval(function(){ mount(); if (++tries > 40 || document.querySelector('.veldt-art')) clearInterval(iv); }, 150);
})();
