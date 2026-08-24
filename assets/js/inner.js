/* ============================================================
   inner.js — Renderiza las páginas internas (miembro / novedad)
   a partir de assets/js/data.js, resolviendo el registro por ?id=
   ============================================================ */
(function () {
  'use strict';

  var DATA = window.CERIR_DATA;
  if (!DATA) return;

  var $ = function (s, c) { return (c || document).querySelector(s); };

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function setMeta(title, description) {
    document.title = title;
    var m = $('meta[name="description"]');
    if (m && description) m.setAttribute('content', description);
  }

  function notFound(what, backHref, backLabel) {
    var main = $('#main');
    main.innerHTML =
      '<section class="not-found"><div class="container">' +
        '<p class="not-found__code">404</p>' +
        '<h1 class="not-found__title">No encontramos ' + esc(what) + '</h1>' +
        '<p class="not-found__text">El enlace puede estar desactualizado o el contenido ya no está publicado.</p>' +
        '<a class="btn btn--accent" href="' + backHref + '">' + esc(backLabel) + '</a>' +
      '</div></section>';
    setMeta('No encontrado — CERIR');
  }

  /* Retrato: si el registro no tiene foto real usamos un monograma.
     Alcanza con agregar `photo: 'assets/img/x.jpg'` al miembro en data.js. */
  function avatar(m, alt) {
    if (m.photo) {
      return '<img src="' + m.photo + '" alt="' + esc(alt || '') + '" loading="lazy">';
    }
    return '<span class="mono" aria-hidden="true">' + esc(DATA.initials(m.name)) + '</span>';
  }

  function chips(list, extraClass) {
    return list.map(function (t) {
      return '<li class="chip' + (extraClass || '') + '">' + esc(t) + '</li>';
    }).join('');
  }

  /* ============================================================
     Página de miembro
     ============================================================ */
  function renderMember() {
    var id = param('id');
    var members = DATA.members;
    var m = id ? DATA.member(id) : members[0];

    if (!m) { notFound('a esa persona', 'index.html#miembros', 'Ver todos los miembros'); return; }

    $('#pPhoto').outerHTML = avatar(m, 'Retrato de ' + m.name);
    $('#pTag').textContent = m.tag;
    $('#pName').textContent = m.name;
    $('#pRole').textContent = m.role;
    $('#pArea').textContent = m.area;
    $('#pLines').innerHTML = chips(m.lines);

    $('#pData').innerHTML = [
      ['Formación', m.degree],
      ['En el CERIR desde', m.since],
      ['Correo', '<a href="mailto:' + mailOf(m) + '">' + mailOf(m) + '</a>'],
      ['Ubicación', m.office]
    ].map(function (row) {
      return '<div class="data-list__row"><dt>' + esc(row[0]) + '</dt><dd>' + row[1] + '</dd></div>';
    }).join('');

    $('#pBio').innerHTML = m.bio.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');

    /* anterior / siguiente, con vuelta al principio */
    var i = members.indexOf(m);
    pager('#pPrev', members[(i - 1 + members.length) % members.length]);
    pager('#pNext', members[(i + 1) % members.length]);

    setMeta(m.name + ' — CERIR', m.name + ', ' + m.role + '. ' + m.area);
  }

  function mailOf(m) {
    return m.id.replace(/-/g, '.') + '@cerir.unr.edu.ar';
  }

  function pager(sel, m) {
    var el = $(sel);
    el.href = 'miembro.html?id=' + encodeURIComponent(m.id);
    $('.pager__name', el).textContent = m.name;
  }

  /* ============================================================
     Página de novedad (artículo)
     ============================================================ */
  function renderArticle() {
    var id = param('id');
    var all = DATA.news;
    var a = id ? DATA.article(id) : all[0];

    if (!a) { notFound('esa novedad', 'index.html#novedades', 'Ver todas las novedades'); return; }

    $('#aTags').innerHTML = chips([a.tag].concat(a.tags.filter(function (t) { return t !== a.tag; })), ' chip--light');
    $('#aTitle').textContent = a.title;
    $('#aSubtitle').textContent = a.subtitle;

    var date = $('#aDate');
    date.setAttribute('datetime', a.date);
    date.textContent = a.dateLabel;
    $('#aPlace').textContent = a.place;
    $('#aReadTime').textContent = readingTime(a.body) + ' min de lectura';

    $('#aImage').src = a.image;
    $('#aImage').alt = a.imageAlt;

    $('#aBody').innerHTML = renderBlocks(a.body);
    $('#aTagsFoot').innerHTML = chips(a.tags);

    /* autor */
    var author = DATA.member(a.author);
    if (author) {
      var href = 'miembro.html?id=' + encodeURIComponent(author.id);
      var pic = avatar(author, '');

      $('#aAuthor').href = href;
      $('#aAuthorAvatar').innerHTML = pic;
      $('#aAuthorName').textContent = author.name;
      $('#aAuthorRole').textContent = author.role;

      $('#acAvatar').innerHTML = pic;
      $('#acName').textContent = author.name;
      $('#acRole').textContent = author.role;
      $('#acBio').textContent = author.bio[0];
      $('#acLink').href = href;
    } else {
      $('#aAuthorCard').remove();
    }

    /* seguir leyendo */
    $('#aMore').innerHTML = all.filter(function (n) { return n.id !== a.id; })
      .slice(0, 3).map(moreCard).join('');

    setMeta(a.title + ' — CERIR', a.subtitle);
  }

  function moreCard(n) {
    return '' +
      '<a class="more__card" href="novedad.html?id=' + encodeURIComponent(n.id) + '">' +
        '<span class="more__media"><img src="' + n.image + '" alt="" loading="lazy" width="1600" height="900"></span>' +
        '<span class="more__tag">' + esc(n.tag) + '</span>' +
        '<span class="more__cardTitle">' + esc(n.title) + '</span>' +
        '<time class="more__date" datetime="' + n.date + '">' + esc(n.dateLabel) + '</time>' +
      '</a>';
  }

  function renderBlocks(body) {
    return body.map(function (b) {
      if (b.t === 'h2')    return '<h2>' + esc(b.v) + '</h2>';
      if (b.t === 'ul')    return '<ul>' + b.v.map(function (li) { return '<li>' + esc(li) + '</li>'; }).join('') + '</ul>';
      if (b.t === 'quote') return '<blockquote><p>' + esc(b.v) + '</p>' +
                                  (b.by ? '<cite>' + esc(b.by) + '</cite>' : '') + '</blockquote>';
      return '<p>' + esc(b.v) + '</p>';
    }).join('');
  }

  function readingTime(body) {
    var words = body.reduce(function (n, b) {
      var text = Array.isArray(b.v) ? b.v.join(' ') : b.v;
      return n + String(text).trim().split(/\s+/).length;
    }, 0);
    return Math.max(1, Math.round(words / 200));
  }

  /* ============================================================
     Página de publicaciones
     ============================================================ */
  var DOWNLOAD_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M12 4v11m0 0 5-5m-5 5-5-5M4 19h16" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '</svg>';

  function renderPublications() {
    var P = DATA.publications;
    if (!P) return;

    /* --- destacada: el último posteo de la colección principal --- */
    var f = P.serie.items[0];
    var fileName = 'cerir-' + f.id + '.pdf';

    $('#fCover').src = DATA.cover(f);
    $('#fCover').alt = 'Tapa de ' + f.title;
    $('#fCollection').textContent = P.serie.name;
    $('#fTitle').textContent = f.title;
    $('#fDesc').textContent = f.desc || f.short;
    $('#fMeta').innerHTML = metaItems(f);

    ['#fMedia', '#fDownload'].forEach(function (sel) {
      var el = $(sel);
      el.href = f.file;
      el.setAttribute('download', fileName);
    });

    /* --- carruseles --- */
    $('#pubsPrev').innerHTML = P.serie.items.slice(1).map(pubCard).join('');
    $('#pubsComp').innerHTML = P.complementarias.items.map(pubCard).join('');
  }

  function metaItems(p) {
    return [p.year, p.pages + ' páginas', 'PDF'].map(function (v) {
      return '<li>' + esc(v) + '</li>';
    }).join('');
  }

  function pubCard(p) {
    var name = 'cerir-' + p.id + '.pdf';
    return '' +
      '<li class="pub-card">' +
        '<span class="pub-card__badge" aria-hidden="true">PDF</span>' +
        '<span class="pub-card__meta">' + esc(p.year) + ' · ' + esc(p.pages) + ' páginas</span>' +
        '<h3 class="pub-card__title">' + esc(p.title) + '</h3>' +
        '<p class="pub-card__desc">' + esc(p.short) + '</p>' +
        '<a class="btn btn--dark btn--sm" href="' + p.file + '" download="' + name + '">' +
          DOWNLOAD_ICON + 'Descargar' +
        '</a>' +
      '</li>';
  }

  /* ============================================================
     Página de novedades: un carrusel por taxonomía
     ============================================================ */
  function renderNovedades() {
    var tracks = {
      maestria:  '#postsMaestria',
      cerir:     '#postsCerir',
      graduados: '#postsGraduados',
      tesis:     '#postsTesis'
    };

    Object.keys(tracks).forEach(function (group) {
      var track = $(tracks[group]);
      if (!track) return;
      var posts = DATA.newsByGroup(group);
      track.innerHTML = posts.length
        ? posts.map(postCard).join('')
        : '<li class="post-card post-card--empty">Todavía no hay novedades en esta categoría.</li>';
    });
  }

  function postCard(n) {
    var href = 'novedad.html?id=' + encodeURIComponent(n.id);
    return '' +
      '<li class="post-card">' +
        '<a class="post-card__link" href="' + href + '">' +
          '<span class="post-card__media">' +
            '<img src="' + n.image + '" alt="" loading="lazy" width="1600" height="900">' +
            '<span class="post-card__tag">' + esc(n.tag) + '</span>' +
          '</span>' +
          '<time class="post-card__date" datetime="' + n.date + '">' + esc(n.dateLabel) + '</time>' +
          '<span class="post-card__title">' + esc(n.title) + '</span>' +
          '<span class="post-card__excerpt">' + esc(n.subtitle) + '</span>' +
          '<span class="post-card__more">Leer más' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>' +
          '</span>' +
        '</a>' +
      '</li>';
  }

  /* ============================================================
     Boot — corre antes que app.js para que los [data-reveal]
     existan cuando se registran los ScrollTrigger.
     ============================================================ */
  function boot() {
    if ($('#profile')) renderMember();
    else if ($('.article')) renderArticle();
    else if ($('#pubFeature')) renderPublications();
    else if ($('#postsMaestria')) renderNovedades();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
