/* ============================================================
   app.js — Interacciones de la home
   GSAP + ScrollTrigger
   ============================================================ */
(function () {
  'use strict';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';
  if (hasGsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ============================================================
     1. Datos — los miembros salen de assets/js/data.js
     ============================================================ */
  var MEMBERS = (window.CERIR_DATA && window.CERIR_DATA.members) || [];


  /* ============================================================
     2. Header: color al scrollear + auto-hide
     ============================================================ */
  function initHeader() {
    var header = $('#header');
    var bar = $('#scrollProgress');
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;

      header.classList.toggle('is-scrolled', y > 40);

      if (!document.body.classList.contains('is-locked')) {
        if (y > lastY + 6 && y > 260) header.classList.add('is-hidden');
        else if (y < lastY - 6) header.classList.remove('is-hidden');
      }

      if (bar) bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';

      lastY = y;
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });

    update();
  }

  /* ============================================================
     3. Menú overlay (offset -110%)
     ============================================================ */
  function initNav() {
    var burger = $('#burger');
    var nav = $('#nav');
    var header = $('#header');
    var items = $$('.nav__item a');
    var blocks = $$('.nav__block');
    var open = false;
    var tl = null;

    if (hasGsap) {
      /* y: 0 explícito — si no, GSAP toma el translateY(-110%) del CSS
         como transform base y el menú nunca llega a 0. */
      gsap.set(nav, { y: 0, yPercent: -110 });
      gsap.set(items, { yPercent: 110, opacity: 0 });
      gsap.set(blocks, { y: 24, opacity: 0 });

      tl = gsap.timeline({
        paused: true,
        onStart: function () { nav.classList.add('is-open'); },
        onReverseComplete: function () { nav.classList.remove('is-open'); }
      })
        .to(nav, { yPercent: 0, duration: 0.85, ease: 'expo.inOut' })
        .to(items, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.055, ease: 'expo.out' }, '-=0.45')
        .to(blocks, { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out' }, '-=0.45');
    }

    function setOpen(state) {
      open = state;
      burger.classList.toggle('is-open', state);
      burger.setAttribute('aria-expanded', String(state));
      burger.setAttribute('aria-label', state ? 'Cerrar menú' : 'Abrir menú');
      nav.setAttribute('aria-hidden', String(!state));
      header.classList.toggle('is-navOpen', state);
      document.body.classList.toggle('is-locked', state);

      if (!state) {
        $$('.nav__item--dropdown.is-open').forEach(function (el) {
          el.classList.remove('is-open');
          var toggle = $('.nav__subToggle', el);
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
      }

      if (tl) { state ? tl.play() : tl.reverse(); }
      else {
        nav.classList.toggle('is-open', state);
        nav.style.transform = state ? 'translateY(0)' : 'translateY(-110%)';
      }
    }

    burger.addEventListener('click', function () { setOpen(!open); });

    $$('.nav__subToggle').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var parent = btn.closest('.nav__item--dropdown');
        if (!parent) return;
        var isOpen = parent.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) setOpen(false);
    });

    items.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = $(link.getAttribute('href'));
        setOpen(false);
        if (target) {
          e.preventDefault();
          setTimeout(function () {
            target.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
          }, 520);
        }
      });
    });
  }

  /* ============================================================
     4. Hero: intro + reveals genéricos
     ============================================================ */
  function initHero() {
    if (!$('.hero')) return;   /* las páginas internas no tienen hero */

    /* Envolvemos cada línea del título para el efecto máscara */
    $$('.hero__title .line').forEach(function (line) {
      var inner = document.createElement('span');
      inner.className = 'line__inner';
      inner.innerHTML = line.innerHTML;
      line.innerHTML = '';
      line.appendChild(inner);
    });

    if (!hasGsap || REDUCED) return;

    var tl = gsap.timeline({ delay: 0.25, defaults: { ease: 'expo.out' } });
    tl.from('.hero__eyebrow', { y: 26, opacity: 0, duration: 0.9 })
      .from('.hero__title .line__inner', { yPercent: 112, duration: 1.15, stagger: 0.1 }, '-=0.65')
      .from('.hero__lead', { y: 26, opacity: 0, duration: 0.9 }, '-=0.75')
      .from('.hero__scroll', { opacity: 0, duration: 0.8 }, '-=0.6');
  }

  function initReveals() {
    if (!hasGsap || !window.ScrollTrigger || REDUCED) return;

    $$('[data-reveal]').forEach(function (el) {
      if (el.closest('.hero')) return;   /* el hero tiene su propia intro */
      gsap.from(el, {
        y: 34, opacity: 0, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }

  /* ============================================================
     5. Contadores
     ============================================================ */
  function initCounters() {
    var fmt = new Intl.NumberFormat('es-AR');

    $$('.stat__num').forEach(function (el) {
      var end = parseFloat(el.dataset.count) || 0;
      var suffix = el.dataset.suffix || '';

      if (!hasGsap || !window.ScrollTrigger || REDUCED) {
        el.textContent = fmt.format(end) + suffix;
        return;
      }

      var obj = { v: 0 };
      gsap.to(obj, {
        v: end,
        duration: 2.4,
        ease: 'power2.out',
        onUpdate: function () { el.textContent = fmt.format(Math.round(obj.v)) + suffix; },
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });
  }

  /* ============================================================
     5b. Slider de imágenes de cifras
     ============================================================ */
  function initStatsSlider() {
    var root = $('#statsSlider');
    if (!root) return;

    var imgs = $$('.stats__sliderImg', root);
    if (imgs.length < 2) return;

    var index = 0;
    var DELAY = 4500;

    setInterval(function () {
      imgs[index].classList.remove('is-active');
      index = (index + 1) % imgs.length;
      imgs[index].classList.add('is-active');
    }, DELAY);
  }

  /* ============================================================
     6. Slider de novedades
     ============================================================ */
  function initSlider() {
    var root = $('#newsSlider');
    if (!root) return;

    var slides = $$('.slide', root);
    var dotsWrap = $('#newsDots');
    var current = $('#newsCurrent');
    var total = $('#newsTotal');
    var prev = $('#newsPrev');
    var next = $('#newsNext');
    var index = 0;
    var busy = false;
    var timer = null;
    var DELAY = 6500;

    if (!slides.length) return;

    var pad = function (n) { return String(n + 1).padStart(2, '0'); };
    if (total) total.textContent = pad(slides.length - 1);

    /* dots */
    var dots = slides.map(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'slider__dot' + (i === 0 ? ' is-active' : '');
      b.setAttribute('aria-label', 'Novedad ' + (i + 1));
      b.addEventListener('click', function () { go(i); });
      dotsWrap.appendChild(b);
      return b;
    });

    if (hasGsap) {
      gsap.set(slides, { autoAlpha: 0 });
      gsap.set(slides[0], { autoAlpha: 1 });
    }

    function sync() {
      dots.forEach(function (d, i) {
        d.classList.toggle('is-active', i === index);
        d.setAttribute('aria-current', String(i === index));
      });
      slides.forEach(function (s, i) {
        s.classList.toggle('is-active', i === index);
        s.setAttribute('aria-hidden', String(i !== index));
      });
      if (current) current.textContent = pad(index);
    }

    function go(i, dir) {
      i = (i + slides.length) % slides.length;
      if (i === index || busy) return;
      var from = slides[index];
      var to = slides[i];
      var d = dir || (i > index ? 1 : -1);
      index = i;
      sync();
      restart();

      if (!hasGsap || REDUCED) {
        slides.forEach(function (s) { s.style.visibility = 'hidden'; s.style.opacity = 0; });
        to.style.visibility = 'visible'; to.style.opacity = 1;
        return;
      }

      busy = true;
      var tl = gsap.timeline({ onComplete: function () { busy = false; } });
      tl.to(from, { autoAlpha: 0, duration: 0.5, ease: 'power2.inOut' })
        .fromTo(to, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, ease: 'power2.out' }, 0.12)
        .fromTo($('.slide__media img', to),
          { scale: 1.12, xPercent: 3 * d },
          { scale: 1, xPercent: 0, duration: 1.2, ease: 'expo.out' }, 0.12)
        .fromTo($$('.slide__body > *', to),
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.06, ease: 'expo.out' }, 0.22);
    }

    function restart() {
      clearInterval(timer);
      if (REDUCED) return;
      timer = setInterval(function () { go(index + 1, 1); }, DELAY);
    }

    prev && prev.addEventListener('click', function () { go(index - 1, -1); });
    next && next.addEventListener('click', function () { go(index + 1, 1); });

    root.addEventListener('mouseenter', function () { clearInterval(timer); });
    root.addEventListener('mouseleave', restart);
    root.addEventListener('focusin', function () { clearInterval(timer); });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var r = root.getBoundingClientRect();
      if (r.bottom < 120 || r.top > window.innerHeight - 120) return;  /* sólo si está a la vista */
      go(index + (e.key === 'ArrowLeft' ? -1 : 1), e.key === 'ArrowLeft' ? -1 : 1);
    });

    /* swipe táctil */
    var sx = 0, sy = 0, tracking = false;
    root.addEventListener('touchstart', function (e) {
      sx = e.touches[0].clientX; sy = e.touches[0].clientY; tracking = true;
    }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (!tracking) return;
      tracking = false;
      var dx = e.changedTouches[0].clientX - sx;
      var dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    }, { passive: true });

    sync();
    restart();
  }

  /* ============================================================
     7. Texto que se revela con el scroll
     ============================================================ */
  function initManifesto() {
    var root = $('#manifestoText');
    if (!root) return;

    /* partimos en palabras */
    $$('p', root).forEach(function (p) {
      p.innerHTML = p.textContent.trim().split(/\s+/).map(function (w) {
        return '<span class="word">' + w + '</span>';
      }).join(' ');
    });

    var words = $$('.word', root);
    if (!hasGsap || !window.ScrollTrigger || REDUCED) {
      words.forEach(function (w) { w.classList.add('is-lit'); });
      return;
    }

    gsap.fromTo(words,
      { color: 'rgba(255,255,255,0.16)' },
      {
        color: 'rgba(255,255,255,1)',
        ease: 'none',
        stagger: 1,
        scrollTrigger: {
          trigger: root,
          start: 'top 72%',
          end: 'bottom 55%',
          scrub: 0.35
        }
      }
    );
  }

  /* ============================================================
     8. Marquesinas de miembros (4 filas)
     ============================================================ */
  function initMarquees() {
    var wrap = $('#marquees');
    if (!wrap || !MEMBERS.length) return;

    var ROWS = 4;
    var perRow = Math.ceil(MEMBERS.length / ROWS);
    var durations = [52, 44, 58, 48];

    function initials(name) {
      return name.split(' ').slice(0, 2).map(function (p) { return p[0]; }).join('');
    }

    function card(m) {
      return '' +
        '<a class="member" href="miembro.html?id=' + encodeURIComponent(m.id) + '" tabindex="0">' +
          '<span class="member__top">' +
            '<span class="member__avatar" aria-hidden="true">' + initials(m.name) + '</span>' +
            '<span>' +
              '<span class="member__name">' + m.name + '</span>' +
              '<span class="member__role">' + m.role + '</span>' +
            '</span>' +
          '</span>' +
          '<span class="member__area">' + m.area + '</span>' +
          '<span class="member__foot">' +
            '<span class="member__tag">' + m.tag + '</span>' +
            '<svg class="member__arrow" viewBox="0 0 24 24" aria-hidden="true">' +
              '<path d="M5 12h14m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" stroke-width="2"/>' +
            '</svg>' +
          '</span>' +
        '</a>';
    }

    for (var r = 0; r < ROWS; r++) {
      var slice = MEMBERS.slice(r * perRow, (r + 1) * perRow);
      if (!slice.length) break;

      var cards = slice.map(card).join('');
      /* las copias no deben ser navegables ni leídas por el lector de pantalla */
      var clone = cards.replace(/tabindex="0"/g, 'tabindex="-1"');
      var row = document.createElement('div');
      row.className = 'marquee';
      row.style.setProperty('--duration', durations[r % durations.length] + 's');
      row.style.setProperty('--direction', r % 2 ? 'reverse' : 'normal');
      /* 3 pistas idénticas = loop sin costuras incluso en pantallas ultra anchas */
      row.innerHTML =
        '<div class="marquee__track">' + cards + '</div>' +
        '<div class="marquee__track" aria-hidden="true">' + clone + '</div>' +
        '<div class="marquee__track" aria-hidden="true">' + clone + '</div>';
      wrap.appendChild(row);
    }

    /* Fallback para navegadores sin :has() — pausa por JS */
    var supportsHas = CSS && CSS.supports && CSS.supports('selector(:has(*))');
    if (!supportsHas) {
      $$('.marquee', wrap).forEach(function (row) {
        row.addEventListener('mouseover', function (e) {
          if (e.target.closest('.member')) row.classList.add('is-paused');
        });
        row.addEventListener('mouseout', function (e) {
          if (e.target.closest('.member')) row.classList.remove('is-paused');
        });
      });
    }

    /* pausa también con foco de teclado */
    $$('.marquee', wrap).forEach(function (row) {
      row.addEventListener('focusin', function () { row.classList.add('is-paused'); });
      row.addEventListener('focusout', function () { row.classList.remove('is-paused'); });
    });

    /* entrada escalonada de las filas */
    if (hasGsap && window.ScrollTrigger && !REDUCED) {
      gsap.from($$('.marquee', wrap), {
        opacity: 0, y: 40, duration: 1, stagger: 0.12, ease: 'expo.out',
        scrollTrigger: { trigger: wrap, start: 'top 85%', once: true }
      });
    }
  }

  /* ============================================================
     8a2. Ejes de investigación: acordeón con los miembros de c/u
     ============================================================ */
  function initAxes() {
    var list = $('#axesList');
    var DATA = window.CERIR_DATA;
    if (!list || !DATA || !DATA.researchAxes) return;

    function memberCard(m) {
      return '' +
        '<a class="member member--plain" href="miembro.html?id=' + encodeURIComponent(m.id) + '">' +
          '<span class="member__name">' + m.name + '</span>' +
          '<span class="member__area">' + m.area + '</span>' +
        '</a>';
    }

    list.innerHTML = DATA.researchAxes.map(function (axis, i) {
      var members = axis.members.map(DATA.member).filter(Boolean);
      var panelId = 'axisPanel' + i;
      return '' +
        '<li class="axis">' +
          '<button class="axis__head" type="button" aria-expanded="false" aria-controls="' + panelId + '">' +
            '<span class="axis__name">' + axis.name + '</span>' +
            '<span class="axis__count">' + members.length + ' miembro' + (members.length === 1 ? '' : 's') + '</span>' +
            '<svg class="axis__chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>' +
          '</button>' +
          '<div class="axis__panel" id="' + panelId + '">' +
            '<div class="axis__panelInner">' +
              '<div class="axis__members">' + members.map(memberCard).join('') + '</div>' +
            '</div>' +
          '</div>' +
        '</li>';
    }).join('');

    $$('.axis__head', list).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var axis = btn.closest('.axis');
        var open = axis.classList.contains('is-open');
        axis.classList.toggle('is-open', !open);
        btn.setAttribute('aria-expanded', String(!open));
      });
    });
  }

  /* ============================================================
     8b. Carruseles genéricos (scroll-snap nativo)
     Se vinculan por nombre: [data-carousel="x"] con
     [data-carousel-prev="x"] / [data-carousel-next="x"].
     ============================================================ */
  function initCarousels() {
    $$('[data-carousel]').forEach(function (root) {
      var name = root.dataset.carousel;
      var track = $('.carousel__track', root);
      var bar = $('.carousel__bar span', root);
      var prev = $('[data-carousel-prev="' + name + '"]');
      var next = $('[data-carousel-next="' + name + '"]');
      if (!track) return;

      /* avanza tantas tarjetas como haya visibles */
      function step() {
        var item = track.firstElementChild;
        if (!item) return track.clientWidth;
        var w = item.getBoundingClientRect().width;
        var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        var perView = Math.max(1, Math.round(track.clientWidth / (w + gap)));
        return (w + gap) * perView;
      }

      function update() {
        var max = track.scrollWidth - track.clientWidth;
        var x = track.scrollLeft;
        if (prev) prev.disabled = x <= 2;
        if (next) next.disabled = x >= max - 2;
        if (bar) bar.style.transform = 'scaleX(' + (max > 1 ? Math.min(1, x / max) : 1) + ')';
      }

      function go(dir) {
        track.scrollBy({ left: dir * step(), behavior: REDUCED ? 'auto' : 'smooth' });
      }

      prev && prev.addEventListener('click', function () { go(-1); });
      next && next.addEventListener('click', function () { go(1); });

      var ticking = false;
      track.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; update(); }); }
      }, { passive: true });

      window.addEventListener('resize', update);
      update();
    });
  }

  /* ============================================================
     8c. Galería con lightbox
     ============================================================ */
  function initGallery() {
    var gallery = $('#gallery');
    if (!gallery) return;

    var buttons = $$('.gallery__btn', gallery);
    if (!buttons.length) return;

    var ICON = {
      close: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="1.8"/>',
      prev:  '<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8"/>',
      next:  '<path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8"/>'
    };
    function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; }

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Imagen ampliada');
    box.setAttribute('aria-hidden', 'true');
    box.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Cerrar">' + svg(ICON.close) + '</button>' +
      '<button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="Imagen anterior">' + svg(ICON.prev) + '</button>' +
      '<figure class="lightbox__figure"><img src="" alt=""><figcaption></figcaption></figure>' +
      '<button class="lightbox__nav lightbox__nav--next" type="button" aria-label="Imagen siguiente">' + svg(ICON.next) + '</button>' +
      '<span class="lightbox__counter"></span>';
    document.body.appendChild(box);

    var img = $('img', box);
    var cap = $('figcaption', box);
    var counter = $('.lightbox__counter', box);
    var btnClose = $('.lightbox__close', box);
    var index = 0;
    var lastFocus = null;

    function show(i) {
      index = (i + buttons.length) % buttons.length;
      var source = $('img', buttons[index]);
      img.src = source.src;
      img.alt = source.alt;
      cap.textContent = buttons[index].dataset.caption || source.alt;
      counter.textContent = (index + 1) + ' / ' + buttons.length;
    }

    function open(i, trigger) {
      /* guardamos la miniatura que abrió, no activeElement: si el clic no
         dejó foco, al cerrar hay que volver igual a la imagen de origen */
      lastFocus = trigger || document.activeElement;
      show(i);
      box.classList.add('is-open');
      box.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-locked');
      btnClose.focus();
    }

    function close() {
      box.classList.remove('is-open');
      box.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-locked');
      if (lastFocus) lastFocus.focus();
    }

    buttons.forEach(function (b, i) {
      b.addEventListener('click', function () { open(i, b); });
    });

    btnClose.addEventListener('click', close);
    $('.lightbox__nav--prev', box).addEventListener('click', function () { show(index - 1); });
    $('.lightbox__nav--next', box).addEventListener('click', function () { show(index + 1); });

    /* clic en el fondo cierra */
    box.addEventListener('click', function (e) {
      if (e.target === box) close();
    });

    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
      /* foco atrapado dentro del diálogo */
      if (e.key === 'Tab') {
        var focusables = $$('button', box);
        var first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    /* entrada escalonada de las imágenes */
    if (hasGsap && window.ScrollTrigger && !REDUCED) {
      gsap.from($$('.gallery__item', gallery), {
        opacity: 0, y: 30, duration: .9, stagger: .05, ease: 'expo.out',
        scrollTrigger: { trigger: gallery, start: 'top 88%', once: true }
      });
    }
  }

  /* ============================================================
     9. Newsletter
     ============================================================ */
  function initNewsletter() {
    var form = $('#newsletterForm');
    if (!form) return;
    var input = $('#email', form);
    var msg = $('#newsletterMsg');
    var re = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    function say(text, error) {
      msg.textContent = text;
      msg.classList.add('is-visible');
      form.classList.toggle('is-error', !!error);
    }

    input.addEventListener('input', function () {
      msg.classList.remove('is-visible');
      form.classList.remove('is-error');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();

      if (!re.test(value)) {
        say('Ingresá un correo electrónico válido.', true);
        if (hasGsap && !REDUCED) gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,0.35)' });
        input.focus();
        return;
      }

      /* Acá iría el POST al backend / servicio de mailing */
      say('¡Listo! Te suscribimos con ' + value + '.', false);
      input.value = '';
      input.blur();
    });
  }

  /* ============================================================
     9b. Formulario de contacto
     ============================================================ */
  function initContactForm() {
    var form = $('#contactForm');
    if (!form) return;

    var status = $('#contactStatus');
    var EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    var rules = [
      { id: 'cName',    msg: 'Ingresá tu nombre y apellido.',
        test: function (v) { return v.length >= 3; } },
      { id: 'cEmail',   msg: 'Ingresá un correo electrónico válido.',
        test: function (v) { return EMAIL.test(v); } },
      { id: 'cMessage', msg: 'Contanos un poco más: al menos 10 caracteres.',
        test: function (v) { return v.length >= 10; } }
    ];

    function setError(input, msg) {
      var field = input.closest('.form__field');
      field.classList.toggle('has-error', !!msg);
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      $('.form__error', field).textContent = msg || '';
    }

    function say(text, ok) {
      status.textContent = text;
      status.classList.add('is-visible');
      status.classList.toggle('is-ok', !!ok);
    }

    /* mientras escribe sólo limpiamos, no molestamos con errores nuevos */
    rules.forEach(function (r) {
      var input = $('#' + r.id);
      input.addEventListener('input', function () {
        if (input.closest('.form__field').classList.contains('has-error')) {
          setError(input, r.test(input.value.trim()) ? '' : r.msg);
        }
      });
      input.addEventListener('blur', function () {
        if (input.value.trim()) setError(input, r.test(input.value.trim()) ? '' : r.msg);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;

      rules.forEach(function (r) {
        var input = $('#' + r.id);
        var ok = r.test(input.value.trim());
        setError(input, ok ? '' : r.msg);
        if (!ok && !firstBad) firstBad = input;
      });

      if (firstBad) {
        say('Revisá los campos marcados.', false);
        firstBad.focus();
        if (hasGsap && !REDUCED) {
          gsap.fromTo(form, { x: -6 }, { x: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' });
        }
        return;
      }

      /* Acá iría el POST al backend o al servicio de formularios */
      say('¡Gracias! Recibimos tu mensaje y te respondemos a la brevedad.', true);
      form.reset();
      rules.forEach(function (r) { setError($('#' + r.id), ''); });
    });
  }

  /* ============================================================
     10. Varios
     ============================================================ */
  function initMisc() {
    var year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ============================================================
     Bootstrap
     ============================================================ */
  function boot() {
    initHeader();
    initNav();
    initHero();
    initReveals();
    initCounters();
    initStatsSlider();
    initSlider();
    initManifesto();
    initMarquees();
    initAxes();
    initCarousels();
    initGallery();
    initNewsletter();
    initContactForm();
    initMisc();

    if (typeof window.initWorldMap === 'function') window.initWorldMap();

    if (window.ScrollTrigger) {
      window.addEventListener('load', function () { ScrollTrigger.refresh(); });
    }
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
