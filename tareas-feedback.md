# CERIR — Listado de tareas por feedback del cliente

## Contexto

El cliente envió una ronda de comentarios tras revisar el sitio (pestañas de navegación, home con mapa, Institucional, Maestría/MICI, Publicaciones, Contacto). El pedido es armar un listado de tareas evaluadas y revisadas, cruzando cada comentario con el código real del sitio (`/Users/david/Sites/cerir`), para saber qué se puede ajustar directo, qué requiere información/assets del cliente, y qué queda fuera de alcance.

El sitio es HTML estático puro (sin framework, sin CMS, sin build): 12 páginas HTML independientes que repiten header/nav/footer manualmente, `assets/js/data.js` (datos de publicaciones y de un listado de miembros aún **de ejemplo**, no reales), `assets/js/inner.js` (render de páginas internas), `assets/js/worldmap.js` (mapa del hero), `assets/css/style.css`. No hay sistema de i18n ni de theming por datos — casi todo son ediciones de texto directas en cada HTML, repetidas página por página donde el bloque se repite (nav, footer).

Respuestas ya confirmadas con el cliente/usuario:
- **Mapa**: armar una preview del planisferio completo vs. el recorte actual antes de decidir (no hay ES/EN switch implementado, no existe hoy).
- **Switcher ES/EN**: dejar aclarado en el informe que el sitio multi-idioma no estaba en el alcance original; es viable pero son más horas de desarrollo. No se implementa ahora.
- **Duplicado MICI**: confirmado sacar la sección "últimos números" de `publicaciones.html` y dejarla solo en `maestria.html`.
- **Curso de Busso**: no aparece en el repo actual; revisar manualmente en el sitio en vivo antes de descartarlo del todo.

---

## 1. General / Home / Navegación

| # | Tarea | Acción | Archivos | Notas |
|---|---|---|---|---|
| 1.1 | Botón ES/EN junto a las pestañas | **Fuera de alcance por ahora** — el sitio no tiene ningún sistema de idiomas (grep sin resultados en todo el repo). Aclarar al cliente que es un desarrollo nuevo y más grande (duplicar/traducir las 12 páginas), no un ajuste de UI. | — | Dejar asentado en el informe de respuesta al cliente. |
| 1.2 | Mapa: ¿planisferio completo o recorte en Sudamérica? | **Resuelto.** Se armó una preview con `?map=full` para comparar; el cliente eligió el planisferio completo, pero pidió asegurar que incluya el sudeste asiático. Se cambió el centro de `SA_CENTER` a `FULL_CENTER` (`{lon:10, lat:-8}`, entre Sudamérica, África y el sur de Asia) para que el recorte horizontal inevitable caiga sobre el Pacífico en vez de cortar sudeste asiático/Oceanía, y se sacó el toggle temporal (`?map=full` ya no hace falta, es el comportamiento único). | `assets/js/worldmap.js` (`FULL_CENTER`, `resize()`) | Verificado: en desktop (1600×900 y similares) el rango visible de longitud queda ~[-153°, 173°], que incluye Sudamérica, África, sudeste asiático, Australia y Japón; solo se recorta Nueva Zelanda. En mobile portrait el formato sigue recortando más (esperable, como antes). |
| 1.3 | Reemplazar contenido viejo del home por fotos con cifras/conteos y novedades | Revisar qué bloques del `index.html` son "viejos" (placeholders, texto genérico) y cuáles deben quedar: contadores/cifras + novedades. Sacar el resto. | `index.html` | Necesito que el cliente indique qué cifras concretas quiere mostrar (o confirmar si ya existen contadores en `app.js`/home a reutilizar). |
| 1.4 | Curso de política exterior dictado por Busso (Facultad, no CERIR) | No se encontró ninguna mención en `institucional.html` ni en el resto del repo actual. Revisar manualmente en el sitio en vivo/producción (puede ser una versión no incluida en este repo) antes de dar por resuelto. | — (pendiente de localizar) | Acción: usuario confirma si sigue existiendo en el sitio publicado. |
| 1.5 | Menú mobile incompleto vs. desktop | **Bug confirmado**: "Maestría" no aparece en ningún overlay mobile (`<nav id="nav">`) de las 12 páginas HTML — solo existe en la barra desktop. Agregar el ítem "Maestría" al `nav__list` mobile en las 12 páginas. De paso, unificar la numeración de ítems (`01…05`) que hoy difiere levemente entre `contacto.html` y el resto. | `nav__list` repetido en las 12 páginas (`index.html:61-102` y equivalentes) | Edición repetitiva por no haber partials/includes — aplicar el mismo bloque en cada archivo. |

## 2. Pestaña A — Institucional

| # | Tarea | Acción | Archivos | Notas |
|---|---|---|---|---|
| 2.1 | Sacar numeración de subtítulos (`01`, `02`, `03`, `04`) | Quitar los `<span class="block__num">` de cada sección (Historia, Objetivos, Cooperación, Equipo). | `institucional.html` (líneas ~123, 155, 194, 237) | Edición de texto directa, sin lógica que recalcular (los números están hardcodeados, no son contadores automáticos). |
| 2.2 | Texto institucional: sacar "casi" | Cambiar "con casi cuatro décadas de trabajo…" → "con cuatro décadas de trabajo…". | `institucional.html:104-107` | — |
| 2.3 | Sección Equipo: reestructurar con categorías y sacar bajada genérica | Quitar el texto "Investigadoras e investigadores de la UNR y del CONICET…" y reorganizar el roster (hoy es una lista plana alfabética única) en los siguientes grupos con subtítulo propio: **Directoras** (Dra. Miryam Colacrai, Dra. Gladys Lechini), **Miembros titulares** (orden alfabético, sin agrupar por ahora — a definir más adelante), **Grupo joven** (ya existe como bloque aparte), **Miembros correspondientes** (ya existe como bloque aparte). | `institucional.html:233-472` (roster actual `<ul class="roster">` + bloques `team-sub` ya existentes para Grupo joven/Correspondientes) | Es edición manual de HTML (no hay data source). Falta definir con el cliente si "Miembros titulares" agrupados queda para otra iteración, tal como señalan ellos mismos ("debemos pensarlo un poco mejor"). |
| 2.4 | Galería: subir fotos reales | Reemplazar los 8 placeholders `picsum.photos` por las fotos reales que enviará el cliente: (1) foto académica India en CERIR, (2) fotos 25 años de la Maestría, (3) foto Belén y Miryam, (4) foto G20 Sudáfrica Gladys. | `institucional.html:477-529` | **Bloqueado — pendiente de recibir los archivos de imagen del cliente.** Verificar también si hace falta wirear un lightbox (no se encontró JS de lightbox para `#galeria` en la revisión). |

## 3. Pestaña B — Maestría (MICI)

| # | Tarea | Acción | Archivos | Notas |
|---|---|---|---|---|
| 3.1 | Sacar "MICI Revista" de Publicaciones | Eliminar la sección `id="mici" data-cat="mici"` de `publicaciones.html:168-213` y su entrada en el índice de esa página (línea ~110-115). Dejarla solo en `maestria.html` (ya existe en `id="maestria-revista"`/`id="mici"`, líneas 253-406). Ajustar `pubCategoryOrder` en `data.js:576` para sacar `'mici'` de esa lista. | `publicaciones.html`, `assets/js/data.js:576` | Confirmado por el cliente. |
| 3.2 | Homogeneizar "Magister" → "Mg." en todos los casos | Revisar y unificar abreviaturas inconsistentes: hoy coexisten "Mter." (`maestria.html:288-292`) y "Mg." (`maestria.html:437-443`) para las mismas personas. Buscar todas las variantes (Mter., Magíster, Mg) en `maestria.html`, `institucional.html`, `cupea.html` y dejar "Mg." en todos los casos. | `maestria.html`, `institucional.html`, `cupea.html` | Grep de "Mter." y "Magíster" antes de aplicar, para no dejar ninguna variante suelta. |
| 3.3 | Informes e inscripción: corregir dirección/datos | Reemplazar bloque actual (línea 143-151, que dice "Sede de Gobierno UNR... interno" con teléfono `0341-4201231`) por: "Sede de Gobierno UNR / Maipú 1065, Piso 3º, oficina 301 / Teléfono: +54 341 4201200 interno 215 / mici.cerir@gmail.com". | `maestria.html:139-151` | Nota: cambia también el teléfono (no solo formato) — confirmar que el interno pasa de 231 a 215 según lo pedido. |
| 3.4 | Revista MICI → remitir a sitio externo con capturas de últimos 3 números | Reemplazar el bloque actual de "últimos números" (carrusel propio, datos en `data.js:607-633`) por: (a) un link directo a `https://revista-mici.unr.edu.ar/index.php/revistamici`, y (b) capturas pequeñas de los últimos 3 números (en lugar de los ítems actuales). Recortar `mici.items` a los 3 últimos reales (o ajustar el `.slice` en `inner.js:338-340` si se decide mantener el componente carrusel). | `maestria.html:253-358`, `assets/js/data.js:607-633`, `assets/js/inner.js:317-342` | **Bloqueado — pendiente de capturas de pantalla** de los últimos 3 números y de confirmar los datos reales 2026 (hoy son de ejemplo). |
| 3.5 | Sacar email viejo `mici@unr.edu.ar` | Quitar todas las apariciones de `mici@unr.edu.ar` y dejar solo `mici.cerir@gmail.com`, tanto en la sección de la revista como en "Convocatoria para publicar en Informes y envíos". | `maestria.html` (secciones Revista ~264-278, Convocatoria ~409-446) | Grep de `mici@unr.edu.ar` para no dejar ninguna instancia. |
| 3.6 | Contacto de la revista (bloque final) | Dejar: "Maipú 1065, 3º piso, oficina 301 / 2000 Rosario, República Argentina / www.cerir.com.ar / mici.cerir@gmail.com". | `maestria.html` (bloque de contacto de la sección Revista) | Verificar si `www.cerir.com.ar` es el dominio correcto a enlazar (hoy no vi ese dominio usado en el repo — confirmar). |
| 3.7 | Cambiar Directora de la revista | Sacar "Mter. Marta G. Cabeza" como Directora y poner "Dra. Camila Abbondanzieri" en su lugar — tanto en el bloque "Directoras" de la sección Revista (línea 288-292) como en el bloque "Equipo" de Convocatoria (línea 437-443). | `maestria.html:288-292, 437-443` | Confirmar si "Vanesa I. Castello" (coDirectora actual) se mantiene o también cambia — el comentario del cliente no lo menciona. |
| 3.8 | Equipo editorial actualizado | Reemplazar el listado de "Equipo editorial" (línea 296-301) por: Lic. Diego Larrondo (UNR), Mg. Alicia Pía Morbiducci Ponce (Maestría MICI-UNR / Universidad de Chile), Bibliotecóloga Verónica V. Godoy (ISET N°18 Rosario y CERIR). Y en el bloque de Convocatoria, Editor = Lic. Diego Larrondo (ya no "Editora: Lic. Vanesa Castello"). | `maestria.html:296-301, 437-443` | Nota: "Abog. Alicia Pía Morbiducci Ponce" pasa a "Mg. Alicia Pía Morbiducci Ponce" — coherente con la tarea 3.2 de homogeneizar títulos. |

## 4. Pestaña C — Publicaciones

| # | Tarea | Acción | Archivos | Notas |
|---|---|---|---|---|
| 4.1 | Reordenar pestañas: CUPEA, Serie PEA, Libros (sacar Revista) | Cambiar `pubCategoryOrder` de `['cupea','mici','libros','serie']` a `['cupea','serie','libros']`, y reordenar las secciones `<section data-cat="...">` en `publicaciones.html` en ese mismo orden. Esto ya incluye sacar MICI (tarea 3.1). | `assets/js/data.js:576`, `publicaciones.html:110-309` | — |
| 4.2 | CUPEA: agregar indizaciones | Incorporar el listado completo de indizaciones (Latindex, DOAJ, etc. — el cliente debe pasar el listado concreto) en `cupea.html`, junto a la descripción/ISSN existente. | `cupea.html` | **Bloqueado — falta el listado de indizaciones** a enviar por el cliente. |
| 4.3 | CUPEA: reemplazar descripción | Reemplazar el texto descriptivo actual (`cupea.html:119-156`, incluye párrafo ES + EN duplicado) por el texto nuevo provisto ("Cuadernos de Política Exterior Argentina (CUPEA) es una publicación semestral…"). Evaluar si se mantiene la versión en inglés o se deja solo en español (dado que no hay switcher ES/EN real en el resto del sitio). | `cupea.html:119-156` | Point 1.1 también aplica acá: si no hay ES/EN global, no tiene sentido mantener un párrafo bilingüe aislado solo en esta página — a decidir. |
| 4.4 | CUPEA: dirección y datos del "archivo 3 enviado el 5 de octubre" | El cliente menciona un archivo adjunto (enviado 5/10) con la dirección/datos a incluir, que "no lo encontré con facilidad" de su lado. | `cupea.html` | **Bloqueado — pedir al cliente que reenvíe ese archivo**, no está disponible. |
| 4.5 | CUPEA: últimos 3 números + link a anteriores | Confirmar que `cupea.html` ya muestra los últimos números vía el mismo patrón `pubs-group`/carrusel de `data.js` (`publications.cupea.items`) y agregar explícitamente un link "Ver números anteriores" si no está. | `cupea.html`, `assets/js/data.js` (sección `cupea`) | Revisar si ya cumple o falta el link puntual a histórico completo. |
| 4.6 | Serie PEA: nuevo nombre y bajada | Renombrar la sección "Serie Política Exterior Argentina" (ya es casi ese nombre) agregando la bajada: "La colección histórica del centro, publicada desde 1991." | `publicaciones.html:264-309` (sección `data-cat="serie"`) | Confirmar si el nombre actual ya coincide exactamente o hace falta ajustar el label. |
| 4.7 | Libros de autores | Sin cambios de contenido pedidos más allá del reordenamiento (tarea 4.1); verificar que quede como 3ra pestaña. | `publicaciones.html:216-261` | — |

## 5. Pestaña E — Contacto

| # | Tarea | Acción | Archivos | Notas |
|---|---|---|---|---|
| 5.1 | Actualizar teléfono fijo | Cambiar el teléfono actual (`+54 341 480 2620`, línea 120 de `contacto.html`) por "+54 341 4201200 interno 215". Revisar también el teléfono repetido en el footer de las 12 páginas y en el nav overlay aside, para mantener consistencia. | `contacto.html:109-126`, footer repetido en las 12 páginas, nav aside | Mismo número que se usa ahora para Maestría (tarea 3.3) — confirmar si es realmente el mismo conmutador/interno para toda la institución o si Contacto debe llevar un interno distinto. |

---

## Resumen de bloqueos (requieren información o assets del cliente antes de poder cerrarse)

- **2.4** — Fotos reales de galería (India, 25 años Maestría, Belén/Miryam, G20 Sudáfrica Gladys).
- **3.4** — Capturas de los últimos 3 números de la revista MICI + confirmación de datos 2026.
- **4.2** — Listado completo de indizaciones de CUPEA.
- **4.4** — Reenvío del "archivo 3" del 5 de octubre con dirección/datos de CUPEA.
- **1.4** — Confirmación manual de si el curso de Busso sigue existiendo en el sitio publicado.
- **3.7** — Confirmar si Vanesa I. Castello se mantiene como coDirectora de la revista MICI.
- **3.6** — Confirmar dominio `www.cerir.com.ar` como el correcto a mostrar/enlazar.

## Fuera de alcance (a aclarar con el cliente en la respuesta)

- **1.1** — Switcher ES/EN: no existe ningún sistema de idiomas en el sitio hoy. Se puede construir, pero es un desarrollo aparte y más grande (traducir y mantener 12 páginas en dos idiomas), no estaba incluido en el alcance original.

## Verificación

Este listado es una evaluación de tareas a partir del feedback recibido — no implica cambios de código todavía. Antes de implementar cualquier tarea concreta de esta lista:
1. Confirmar con el cliente los puntos bloqueados/pendientes de arriba.
2. Priorizar qué tareas se implementan primero (sugerido: nav mobile 1.5 y numeración/texto 2.1-2.2 son triviales y sin bloqueos; MICI/Publicaciones 3.1/4.1 son el siguiente bloque sin bloqueos).
3. Para cada tarea implementada, abrir el sitio localmente (servir los HTML estáticos, p. ej. `python3 -m http.server` desde la raíz) y revisar visualmente desktop + mobile antes de dar por cerrada.
