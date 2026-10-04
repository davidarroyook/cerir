/* ============================================================
   worldmap.js — Planisferio de puntos + conexiones animadas
   Canvas 2D, sin dependencias. Reemplazable por un <video>
   (ver comentario en index.html, sección .hero__media).
   ============================================================ */
(function () {
  'use strict';

  /* -------------------------------------------------- Geografía
     Contornos simplificados en [lon, lat]. Suficientes para
     dibujar un planisferio punteado reconocible. */
  var LAND = [
    /* América del Norte */
    [[-168,65],[-165,60],[-160,58],[-152,58],[-145,60],[-135,58],[-130,54],[-124,48],
     [-124,40],[-120,34],[-114,30],[-110,24],[-105,20],[-97,16],[-92,15],[-88,16],
     [-87,21],[-90,25],[-94,29],[-97,28],[-93,30],[-88,30],[-82,25],[-80,27],[-81,32],
     [-76,36],[-74,40],[-70,42],[-67,45],[-64,47],[-60,47],[-55,50],[-57,54],[-64,58],
     [-68,60],[-78,62],[-80,70],[-90,70],[-95,68],[-105,68],[-115,70],[-125,70],
     [-135,69],[-145,70],[-155,71],[-165,68]],
    /* Groenlandia */
    [[-45,60],[-42,63],[-40,66],[-25,70],[-20,73],[-22,77],[-30,82],[-45,83],[-58,82],
     [-62,78],[-55,72],[-52,66]],
    /* América del Sur */
    [[-81,-4],[-79,-8],[-76,-14],[-71,-18],[-70,-23],[-71,-30],[-73,-37],[-75,-44],
     [-74,-50],[-70,-55],[-66,-55],[-65,-47],[-62,-40],[-57,-38],[-58,-34],[-53,-34],
     [-48,-25],[-40,-22],[-39,-13],[-35,-8],[-44,-2],[-50,0],[-52,5],[-60,8],[-68,11],
     [-72,12],[-77,8],[-79,9],[-78,1]],
    /* África */
    [[-17,15],[-16,20],[-13,28],[-10,31],[-6,36],[0,36],[10,37],[20,32],[25,32],[32,31],
     [35,28],[38,22],[43,12],[51,12],[51,5],[42,-1],[40,-10],[35,-20],[33,-26],[28,-33],
     [20,-35],[18,-34],[14,-23],[12,-17],[9,-1],[9,4],[3,6],[-5,5],[-8,4],[-13,9]],
    /* Europa */
    [[-10,36],[-9,43],[-2,43],[-1,46],[-4,48],[0,50],[4,52],[8,54],[10,57],[5,58],
     [8,63],[12,65],[15,69],[22,70],[28,71],[30,66],[25,60],[28,59],[30,55],[28,50],
     [30,46],[33,45],[28,43],[24,41],[23,40],[20,42],[18,40],[15,38],[16,41],[12,45],
     [13,45],[9,44],[4,43],[-3,36]],
    /* Asia */
    [[30,46],[40,44],[48,42],[50,45],[52,42],[53,38],[48,30],[48,29],[56,27],[60,25],
     [66,25],[68,22],[72,20],[73,16],[77,8],[80,6],[80,15],[85,20],[88,22],[92,21],
     [94,16],[98,8],[103,1],[104,10],[107,11],[109,15],[108,21],[112,22],[117,23],
     [120,25],[122,30],[121,37],[126,40],[129,35],[129,42],[135,45],[140,45],[142,53],
     [155,58],[160,60],[163,58],[170,60],[179,65],[179,70],[170,70],[160,70],[150,72],
     [140,73],[130,72],[120,74],[110,76],[100,76],[90,75],[80,73],[70,72],[60,70],
     [50,68],[40,66],[30,66],[30,60],[30,55],[28,50]],
    /* Australia */
    [[114,-22],[113,-26],[115,-32],[118,-35],[123,-34],[129,-32],[135,-35],[138,-35],
     [140,-38],[146,-39],[150,-37],[153,-32],[153,-27],[146,-19],[142,-11],[136,-12],
     [131,-11],[129,-15],[125,-14],[122,-18]],
    /* Nueva Guinea */
    [[131,-1],[141,-3],[150,-6],[147,-9],[138,-8],[132,-4]],
    /* Sumatra */
    [[95,5],[100,0],[106,-6],[103,-5],[98,2]],
    /* Borneo */
    [[109,2],[117,4],[119,-1],[116,-4],[110,-3]],
    /* Reino Unido / Irlanda */
    [[-5,50],[-3,54],[-6,58],[-5,58],[-2,57],[0,53],[1,51]],
    [[-10,52],[-6,55],[-10,55]],
    /* Islandia */
    [[-24,65],[-14,66],[-14,64],[-22,63]],
    /* Japón */
    [[130,32],[135,34],[137,37],[141,41],[145,44],[141,45],[140,40],[136,35],[132,34]],
    /* Madagascar */
    [[44,-16],[50,-15],[50,-25],[45,-25],[43,-20]],
    /* Nueva Zelanda */
    [[172,-34],[174,-37],[178,-38],[177,-40],[174,-41],[168,-46],[166,-46],[170,-43],[172,-40]],
    /* Filipinas */
    [[120,18],[124,18],[126,12],[122,6],[120,13]],
    /* Cuba / Antillas */
    [[-85,22],[-78,21],[-74,20],[-80,23]]
  ];

  /* Nodos de la red (el hub es Rosario, sede del CERIR) */
  var HUB = { lon: -60.65, lat: -32.95, name: 'Rosario' };
  /* Centroide aproximado de la masa continental de Sudamérica (promedio
     de los vértices de su contorno), usado para centrar el mapa */
  var SA_CENTER = { lon: -63.5, lat: -18.9 };
  var NODES = [
    { lon: -47.9,  lat: -15.8 },  /* Brasilia   */
    { lon: -70.6,  lat: -33.4 },  /* Santiago   */
    { lon: -77.0,  lat: -12.0 },  /* Lima       */
    { lon: -99.1,  lat:  19.4 },  /* CDMX       */
    { lon: -77.0,  lat:  38.9 },  /* Washington */
    { lon:  -3.7,  lat:  40.4 },  /* Madrid     */
    { lon:   4.35, lat:  50.85 }, /* Bruselas   */
    { lon:  37.6,  lat:  55.75 }, /* Moscú      */
    { lon:  28.0,  lat: -26.2 },  /* Johannesburgo */
    { lon:  77.2,  lat:  28.6 },  /* Nueva Delhi */
    { lon: 116.4,  lat:  39.9 },  /* Beijing    */
    { lon: 139.7,  lat:  35.7 },  /* Tokio      */
    { lon: 151.2,  lat: -33.9 }   /* Sídney     */
  ];

  var LAT_TOP = 80, LAT_BOTTOM = -58;
  var DOT_STEP = 10;                /* separación de la grilla en px */
  var PALETTE = {
    dot:    [150, 178, 238],
    arc:    [70, 116, 255],
    spark:  [255, 216, 77]
  };

  /* -------------------------------------------------- Utilidades */
  function pointInPoly(x, y, poly) {
    var inside = false, i, j;
    for (i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
  function qBezier(p0, pc, p1, t) {
    var u = 1 - t;
    return {
      x: u * u * p0.x + 2 * u * t * pc.x + t * t * p1.x,
      y: u * u * p0.y + 2 * u * t * pc.y + t * t * p1.y
    };
  }

  /* -------------------------------------------------- WorldMap */
  function WorldMap(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dots = [];
    this.links = [];
    this.pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    this.time = 0;
    this.visible = true;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.resize();
    this.bind();
    this.reduced ? this.draw(0) : this.loop();
  }

  WorldMap.prototype.project = function (lon, lat) {
    return {
      x: this.mx + ((lon + 180) / 360) * this.mw,
      y: this.my + ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * this.mh
    };
  };

  WorldMap.prototype.resize = function () {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var rect = this.canvas.getBoundingClientRect();
    this.w = Math.max(rect.width, 320);
    this.h = Math.max(rect.height, 400);
    this.canvas.width  = Math.round(this.w * dpr);
    this.canvas.height = Math.round(this.h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    /* Rectángulo del mapa: tamaño proporcional al viewport, ampliado para
       que el hemisferio sur tenga más presencia visual */
    this.mw = Math.max(this.w * 2.5875, this.h * 4.6125);
    this.mh = this.mw * (LAT_TOP - LAT_BOTTOM) / 360;

    /* Sudamérica se fija al centro exacto del hero (en vez de centrar el
       mapa en el meridiano de Greenwich). Como Rosario está dentro de ese
       continente, el punto de animación sigue coincidiendo con la ciudad. */
    var c0x = ((SA_CENTER.lon + 180) / 360) * this.mw;
    var c0y = ((LAT_TOP - SA_CENTER.lat) / (LAT_TOP - LAT_BOTTOM)) * this.mh;
    this.mx = this.w / 2 - c0x;
    this.my = this.h / 2 - c0y;

    this.buildDots();
    this.buildLinks();
  };

  WorldMap.prototype.buildDots = function () {
    var dots = [];
    var step = this.w < 700 ? DOT_STEP + 2 : DOT_STEP;
    var lonPerPx = 360 / this.mw;
    var latPerPx = (LAT_TOP - LAT_BOTTOM) / this.mh;

    for (var py = 0; py <= this.mh; py += step) {
      var lat = LAT_TOP - py * latPerPx;
      for (var px = 0; px <= this.mw; px += step) {
        var lon = px * lonPerPx - 180;
        for (var k = 0; k < LAND.length; k++) {
          if (pointInPoly(lon, lat, LAND[k])) {
            dots.push({ x: this.mx + px, y: this.my + py, n: Math.random() });
            break;
          }
        }
      }
    }
    this.dots = dots;
    this.dotR = step < 11 ? 1.15 : 1.35;
  };

  WorldMap.prototype.buildLinks = function () {
    var hub = this.project(HUB.lon, HUB.lat);
    this.hub = hub;
    this.links = NODES.map(function (n, i) {
      var p = this.project(n.lon, n.lat);
      var dx = p.x - hub.x, dy = p.y - hub.y;
      var dist = Math.hypot(dx, dy);
      /* punto de control desplazado perpendicularmente = arco */
      var lift = dist * 0.24 + 30;
      var mid = { x: (hub.x + p.x) / 2, y: (hub.y + p.y) / 2 };
      var nx = -dy / (dist || 1), ny = dx / (dist || 1);
      var side = p.x < hub.x ? -1 : 1;
      return {
        a: hub,
        b: p,
        c: { x: mid.x + nx * lift * side, y: mid.y + ny * lift * side },
        speed: 0.055 + (i % 5) * 0.012,
        phase: (i * 0.137) % 1,
        len: dist
      };
    }, this);
  };

  WorldMap.prototype.bind = function () {
    var self = this, rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { self.resize(); if (self.reduced) self.draw(0); }, 180);
    });

    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', function (e) {
        self.pointer.tx = (e.clientX / window.innerWidth - 0.5) * 26;
        self.pointer.ty = (e.clientY / window.innerHeight - 0.5) * 16;
      }, { passive: true });
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        self.visible = entries[0].isIntersecting;
      }, { threshold: 0 }).observe(this.canvas);
    }
  };

  WorldMap.prototype.loop = function () {
    var self = this, last = performance.now();
    (function frame(now) {
      var dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (self.visible) { self.time += dt; self.draw(self.time); }
      requestAnimationFrame(frame);
    })(last);
  };

  /* -------------------------------------------------- Render */
  WorldMap.prototype.draw = function (t) {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.w, this.h);

    /* parallax suavizado */
    this.pointer.x += (this.pointer.tx - this.pointer.x) * 0.05;
    this.pointer.y += (this.pointer.ty - this.pointer.y) * 0.05;
    ctx.save();
    ctx.translate(this.pointer.x, this.pointer.y);

    this.drawDots(t);
    this.drawLinks(t);

    ctx.restore();
  };

  WorldMap.prototype.drawDots = function (t) {
    var ctx = this.ctx, r = this.dotR;
    var BUCKETS = 7;
    var buckets = [];
    for (var b = 0; b < BUCKETS; b++) buckets.push([]);

    /* barrido horizontal que ilumina los puntos al pasar */
    var sweep = this.mx + (((t * 0.055) % 1.6) - 0.3) * this.mw;
    var spread = this.mw * 0.11;

    for (var i = 0; i < this.dots.length; i++) {
      var d = this.dots[i];
      var k = (d.x - sweep) / spread;
      var boost = Math.exp(-k * k);
      var a = 0.30 + d.n * 0.14 + boost * 0.56;
      var idx = Math.min(BUCKETS - 1, Math.max(0, Math.round((a - 0.30) / 0.70 * (BUCKETS - 1))));
      buckets[idx].push(d);
    }

    for (var j = 0; j < BUCKETS; j++) {
      var list = buckets[j];
      if (!list.length) continue;
      var alpha = 0.30 + (j / (BUCKETS - 1)) * 0.66;
      ctx.beginPath();
      for (var m = 0; m < list.length; m++) {
        ctx.rect(list[m].x - r, list[m].y - r, r * 2, r * 2);
      }
      ctx.fillStyle = rgba(PALETTE.dot, alpha);
      ctx.fill();
    }
  };

  WorldMap.prototype.drawLinks = function (t) {
    var ctx = this.ctx;

    /* arcos base */
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgba(PALETTE.dot, 0.16);
    this.links.forEach(function (l) {
      ctx.beginPath();
      ctx.moveTo(l.a.x, l.a.y);
      ctx.quadraticCurveTo(l.c.x, l.c.y, l.b.x, l.b.y);
      ctx.stroke();
    });

    /* pulsos viajando por cada arco */
    ctx.lineCap = 'round';
    this.links.forEach(function (l) {
      var p = (t * l.speed + l.phase) % 1;
      var tail = 0.22;
      var steps = 16;

      for (var s = 0; s < steps; s++) {
        var t0 = p - tail * (s + 1) / steps;
        var t1 = p - tail * s / steps;
        if (t1 <= 0) continue;
        t0 = Math.max(t0, 0);
        var f = 1 - s / steps;
        var q0 = qBezier(l.a, l.c, l.b, t0);
        var q1 = qBezier(l.a, l.c, l.b, t1);
        ctx.beginPath();
        ctx.moveTo(q0.x, q0.y);
        ctx.lineTo(q1.x, q1.y);
        ctx.lineWidth = 0.7 + f * 1.8;
        ctx.strokeStyle = rgba(PALETTE.arc, 0.10 + f * 0.75);
        ctx.stroke();
      }

      /* cabeza luminosa */
      var head = qBezier(l.a, l.c, l.b, p);
      var g = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 16);
      g.addColorStop(0, rgba(PALETTE.spark, 0.9));
      g.addColorStop(0.35, rgba(PALETTE.arc, 0.35));
      g.addColorStop(1, rgba(PALETTE.arc, 0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(head.x, head.y, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = rgba(PALETTE.spark, 0.95);
      ctx.beginPath();
      ctx.arc(head.x, head.y, 1.9, 0, Math.PI * 2);
      ctx.fill();

      /* nodo destino */
      ctx.fillStyle = rgba(PALETTE.dot, 0.85);
      ctx.beginPath();
      ctx.arc(l.b.x, l.b.y, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = rgba(PALETTE.dot, 0.28);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(l.b.x, l.b.y, 6 + Math.sin(t * 1.6 + l.phase * 6) * 2, 0, Math.PI * 2);
      ctx.stroke();
    });

    /* hub: Rosario */
    var hub = this.hub;
    var pulse = (t * 0.55) % 1;
    var hg = ctx.createRadialGradient(hub.x, hub.y, 0, hub.x, hub.y, 60);
    hg.addColorStop(0, rgba(PALETTE.spark, 0.28));
    hg.addColorStop(1, rgba(PALETTE.spark, 0));
    ctx.fillStyle = hg;
    ctx.beginPath();
    ctx.arc(hub.x, hub.y, 60, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = rgba(PALETTE.spark, 0.5 * (1 - pulse));
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(hub.x, hub.y, 8 + pulse * 42, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = rgba(PALETTE.spark, 1);
    ctx.beginPath();
    ctx.arc(hub.x, hub.y, 4, 0, Math.PI * 2);
    ctx.fill();
  };

  /* -------------------------------------------------- Init */
  window.initWorldMap = function () {
    var canvas = document.getElementById('worldMap');
    if (!canvas || canvas.closest('.hero__media').classList.contains('has-video')) return;
    window.__worldMap = new WorldMap(canvas);
    return window.__worldMap;
  };
})();
