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

    /* Miembros similares: sólo si tiene alguno */
    var related = DATA.relatedMembers(m.id);
    var relatedSection = $('#relatedSection');
    if (relatedSection) {
      if (related.length) {
        $('#relatedTrack').innerHTML = related.map(relatedMemberCard).join('');
        relatedSection.hidden = false;
      } else {
        relatedSection.hidden = true;
      }
    }

    setMeta(m.name + ' — CERIR', m.name + ', ' + m.role + '. ' + m.area);
  }

  function mailOf(m) {
    return m.id.replace(/-/g, '.') + '@cerir.unr.edu.ar';
  }

  function relatedMemberCard(m) {
    return '' +
      '<li class="related-member">' +
        '<a class="member" href="miembro.html?id=' + encodeURIComponent(m.id) + '">' +
          '<span class="member__top">' +
            '<span class="member__avatar" aria-hidden="true">' + esc(DATA.initials(m.name)) + '</span>' +
            '<span>' +
              '<span class="member__name">' + esc(m.name) + '</span>' +
              '<span class="member__role">' + esc(m.role) + '</span>' +
            '</span>' +
          '</span>' +
          '<span class="member__area">' + esc(m.area) + '</span>' +
        '</a>' +
      '</li>';
  }

  /* ============================================================
     Índice de miembros (indice.html): todos, A-Z por apellido
     ============================================================ */
  function surname(name) {
    var parts = name.trim().split(' ');
    return parts[parts.length - 1];
  }
  function firstNames(name) {
    var parts = name.trim().split(' ');
    return parts.slice(0, -1).join(' ');
  }

  function renderMemberIndex() {
    var members = DATA.members.slice().sort(function (a, b) {
      return surname(a.name).localeCompare(surname(b.name), 'es');
    });

    var order = [];
    var groups = {};
    members.forEach(function (m) {
      var letter = surname(m.name).charAt(0).toUpperCase();
      if (!groups[letter]) { groups[letter] = []; order.push(letter); }
      groups[letter].push(m);
    });

    $('#indexList').innerHTML = order.map(function (letter) {
      return '' +
        '<div class="index-group">' +
          '<h2 class="index-group__letter">' + letter + '</h2>' +
          '<ul class="index-list">' +
            groups[letter].map(function (m) {
              return '' +
                '<li><a href="miembro.html?id=' + encodeURIComponent(m.id) + '">' +
                  '<span class="index-list__name">' + esc(surname(m.name)) + ', ' + esc(firstNames(m.name)) + '</span>' +
                  '<span class="index-list__role">' + esc(m.role) + '</span>' +
                '</a></li>';
            }).join('') +
          '</ul>' +
        '</div>';
    }).join('');
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
      $('#aAuthor').href = href;
      $('#aAuthorAvatar').innerHTML = avatar(author, '');
      $('#aAuthorName').textContent = author.name;
      $('#aAuthorRole').textContent = author.role;
      fillAuthorCard(author);
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
     Publicaciones: página general (4 colecciones), ficha de un
     ítem (publicacion.html) y colección completa (coleccion.html)
     ============================================================ */
  var DOWNLOAD_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M12 4v11m0 0 5-5m-5 5-5-5M4 19h16" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '</svg>';
  var ARROW_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M5 12h14m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8"/>' +
    '</svg>';

  /* ítems de meta (año, páginas/etiqueta, autor) según el tipo de colección */
  function pubMetaItems(p, cat) {
    var vals = [];
    if (cat.kind === 'external') {
      if (p.label) vals.push(p.label);
      vals.push(p.year);
      vals.push('Acceso abierto');
    } else {
      vals.push(p.year);
      if (p.pages) vals.push(p.pages + ' páginas');
      var m = p.author ? DATA.member(p.author) : null;
      if (m) vals.push(m.name);
    }
    return vals.map(function (v) { return '<li>' + esc(v) + '</li>'; }).join('');
  }

  function pubCardMeta(p, cat) {
    var bits = cat.kind === 'external' && p.label ? [p.label, p.year] : [p.year];
    if (cat.kind !== 'external' && p.pages) bits.push(p.pages + ' páginas');
    return bits.map(esc).join(' · ');
  }

  /* acción principal de un ítem: descargar el PDF o ir al sitio externo */
  function pubAction(p, cat) {
    if (cat.kind === 'external') {
      return { href: p.externalUrl || cat.siteUrl, external: true, label: 'Ver en el sitio de la revista', icon: ARROW_ICON };
    }
    return { href: p.file, external: false, download: 'cerir-' + p.id + '.pdf', label: 'Descargar PDF', icon: DOWNLOAD_ICON };
  }

  function pubCard(p, cat) {
    var href = 'publicacion.html?id=' + encodeURIComponent(p.id);
    return '' +
      '<li class="pub-card">' +
        '<a class="pub-card__link" href="' + href + '">' +
          '<span class="pub-card__media">' +
            '<img src="' + DATA.cover(p) + '" alt="" loading="lazy" width="900" height="1200">' +
            '<span class="pub-card__badge" aria-hidden="true">' + (cat.kind === 'external' ? 'WEB' : 'PDF') + '</span>' +
          '</span>' +
          '<span class="pub-card__meta">' + pubCardMeta(p, cat) + '</span>' +
          '<h3 class="pub-card__title">' + esc(p.title) + '</h3>' +
          '<p class="pub-card__desc">' + esc(p.short) + '</p>' +
          '<span class="pub-card__more">Ver detalle' + ARROW_ICON + '</span>' +
        '</a>' +
      '</li>';
  }

  function morePub(p, cat) {
    return '' +
      '<a class="more__card" href="publicacion.html?id=' + encodeURIComponent(p.id) + '">' +
        '<span class="more__media"><img src="' + DATA.cover(p) + '" alt="" loading="lazy" width="900" height="1200"></span>' +
        '<span class="more__tag">' + esc(cat.name) + '</span>' +
        '<span class="more__cardTitle">' + esc(p.title) + '</span>' +
      '</a>';
  }

  /* ficha de autor compartida por novedad.html y publicacion.html (ids #ac*) */
  function fillAuthorCard(member) {
    var href = 'miembro.html?id=' + encodeURIComponent(member.id);
    var pic = avatar(member, '');
    $('#acAvatar').innerHTML = pic;
    $('#acName').textContent = member.name;
    $('#acRole').textContent = member.role;
    $('#acBio').textContent = member.bio[0];
    $('#acLink').href = href;
  }

  /* --- publicaciones.html: las 4 colecciones, cada una con su
     última edición destacada y un carrusel de ediciones anteriores --- */
  function renderPublicationsOverview() {
    DATA.pubCategoryOrder.forEach(function (slug) {
      var root = document.querySelector('[data-cat="' + slug + '"]');
      var cat = DATA.pubCategory(slug);
      if (!root || !cat) return;

      $('.pubs-hero__lead', root).textContent = cat.lead;

      var f = cat.items[0];
      var detailHref = 'publicacion.html?id=' + encodeURIComponent(f.id);

      var media = $('.feature__media', root);
      media.href = detailHref;
      $('img', media).src = DATA.cover(f);
      $('img', media).alt = 'Tapa de ' + f.title;

      $('.feature__title', root).textContent = f.title;
      $('.feature__desc', root).textContent = f.desc || f.short;
      $('.feature__meta', root).innerHTML = pubMetaItems(f, cat);
      $('.feature__body .btn', root).href = detailHref;

      $('.carousel__track', root).innerHTML = cat.items.slice(1).map(function (p) {
        return pubCard(p, cat);
      }).join('');
    });
  }

  /* --- publicacion.html: ficha de un único ítem, resuelto por ?id= --- */
  function renderPublicationDetail() {
    var found = DATA.pubItem(param('id'));
    if (!found) { notFound('esa publicación', 'publicaciones.html', 'Ver todas las publicaciones'); return; }

    var p = found.item, cat = found.category;

    $('#pubBack').href = 'publicaciones.html#' + cat.slug;
    $('#pubBackLabel').textContent = cat.name;

    $('#pubCategory').textContent = cat.name;
    $('#pubTitle').textContent = p.title;
    $('#pubShort').textContent = p.short;
    $('#pubMeta').innerHTML = pubMetaItems(p, cat);
    $('#pubCover').src = DATA.cover(p);
    $('#pubCover').alt = 'Tapa de ' + p.title;
    $('#pubBody').innerHTML = '<p>' + esc(p.desc || p.short) + '</p>';

    var action = pubAction(p, cat);
    var actionEl = $('#pubAction');
    actionEl.href = action.href;
    if (action.download) actionEl.setAttribute('download', action.download);
    else actionEl.removeAttribute('download');
    if (action.external) { actionEl.target = '_blank'; actionEl.rel = 'noopener'; }
    $('#pubActionIcon').innerHTML = action.icon;
    $('#pubActionLabel').textContent = action.label;

    var member = p.author ? DATA.member(p.author) : null;
    if (member) fillAuthorCard(member);
    else $('#pubAuthorCard').remove();

    $('#pubMore').innerHTML = cat.items.filter(function (o) { return o.id !== p.id; })
      .slice(0, 3).map(function (o) { return morePub(o, cat); }).join('');

    setMeta(p.title + ' — CERIR', p.short);
  }

  /* --- coleccion.html: todos los ítems de una colección, resuelta por ?cat= --- */
  function renderPublicationCollection() {
    var cat = DATA.pubCategory(param('cat'));
    if (!cat) { notFound('esa colección', 'publicaciones.html', 'Ver todas las publicaciones'); return; }

    $('#colBack').href = 'publicaciones.html#' + cat.slug;
    $('#colTitle').textContent = cat.name;
    $('#colLead').textContent = cat.lead;
    $('#colGrid').innerHTML = cat.items.map(function (p) { return pubCard(p, cat); }).join('');

    setMeta(cat.name + ' — CERIR', cat.lead);
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
    else if ($('#pubTitle')) renderPublicationDetail();
    else if ($('#colGrid')) renderPublicationCollection();
    else if ($('[data-cat]')) renderPublicationsOverview();
    else if ($('#indexList')) renderMemberIndex();
    else if ($('#postsMaestria')) renderNovedades();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
