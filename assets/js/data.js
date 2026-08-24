/* ============================================================
   data.js — Fuente de datos única del sitio.

   ⚠️ CONTENIDO DE MUESTRA. Los nombres corresponden a personas
   reales del ámbito académico, pero las biografías, formación,
   correos, oficinas y fechas son texto de relleno para maquetar.
   Reemplazar por los datos reales (o por el CMS) antes de publicar.
   ============================================================ */
window.CERIR_DATA = (function () {
  'use strict';

  /* -------------------------------------------------- Miembros */
  var members = [
    {
      id: 'anabella-busso', name: 'Anabella Busso', tag: 'Directora',
      role: 'Investigadora — CONICET', area: 'Política exterior argentina y relaciones con EE.UU.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 12 — Riobamba 250 bis',
      since: 1991, lines: ['Política exterior argentina', 'Relaciones hemisféricas', 'Democracia y agenda externa'],
      bio: ['Dirige el CERIR y coordina la serie histórica sobre política exterior argentina que el centro publica desde fines de los años ochenta. Su trabajo se concentra en la relación entre los procesos políticos internos y las decisiones de inserción internacional del país, con especial atención al vínculo bilateral con los Estados Unidos.',
            'Dicta seminarios de grado y posgrado en la Facultad de Ciencia Política y Relaciones Internacionales de la UNR y participa habitualmente en instancias de formación de becarios del centro.']
    },
    {
      id: 'miryam-colacrai', name: 'Miryam Colacrai', tag: 'Titular',
      role: 'Investigadora — CONICET', area: 'Régimen antártico y política internacional polar.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 12 — Riobamba 250 bis',
      since: 1989, lines: ['Régimen antártico', 'Regímenes internacionales', 'Cooperación científica'],
      bio: ['Su línea de trabajo aborda el Tratado Antártico como caso de estudio sobre la construcción y la durabilidad de los regímenes internacionales, y el lugar que ocupan los países del hemisferio sur en esa arquitectura.',
            'Integra el centro desde sus primeros años y participa en la formación de tesistas sobre cooperación científica y espacios de gobernanza global.']
    },
    {
      id: 'gladys-lechini', name: 'Gladys Lechini', tag: 'Titular',
      role: 'Profesora titular — UNR', area: 'Cooperación Sur-Sur y relaciones con África.',
      degree: 'Doctorado en Ciencia Política', office: 'Oficina 8 — Riobamba 250 bis',
      since: 1990, lines: ['Relaciones Argentina–África', 'Cooperación Sur-Sur', 'Estudios africanos'],
      bio: ['Trabaja sobre los vínculos entre América Latina y África y sobre la cooperación Sur-Sur como categoría analítica y como práctica de política exterior. Impulsó la incorporación de los estudios africanos a la agenda de investigación y de enseñanza de la Facultad.']
    },
    {
      id: 'alejandro-simonoff', name: 'Alejandro Simonoff', tag: 'Adjunto',
      role: 'Investigador — UNR', area: 'Historia de la política exterior argentina.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 8 — Riobamba 250 bis',
      since: 1998, lines: ['Historia diplomática', 'Autonomía', 'Doctrinas de política exterior'],
      bio: ['Investiga las continuidades y rupturas de la política exterior argentina en el largo plazo, con foco en el modo en que las distintas tradiciones de pensamiento —autonomistas, realistas, liberales— se traducen en decisiones concretas.']
    },
    {
      id: 'gustavo-marini', name: 'Gustavo Marini', tag: 'Titular',
      role: 'Profesor — UNR', area: 'Teoría de las relaciones internacionales.',
      degree: 'Magíster en Relaciones Internacionales', office: 'Oficina 5 — Riobamba 250 bis',
      since: 1994, lines: ['Teoría de las RR.II.', 'Epistemología', 'Orden internacional'],
      bio: ['Dicta los seminarios de teoría del centro y trabaja sobre los debates epistemológicos de la disciplina, en particular sobre cómo las categorías producidas en los centros académicos del norte se usan —y se tensionan— para leer la política internacional desde la periferia.']
    },
    {
      id: 'carla-morasso', name: 'Carla Morasso', tag: 'Adjunta',
      role: 'Investigadora — CONICET', area: 'Relaciones económicas internacionales y BRICS.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 10 — Riobamba 250 bis',
      since: 2008, lines: ['BRICS', 'Cooperación Sur-Sur', 'Recursos naturales'],
      bio: ['Estudia la inserción económica internacional de la Argentina y el papel de las potencias emergentes, con trabajos sobre el bloque BRICS, el financiamiento para el desarrollo y la disputa por los recursos naturales.']
    },
    {
      id: 'esteban-actis', name: 'Esteban Actis', tag: 'Adjunto',
      role: 'Investigador — UNR', area: 'Economía política internacional y potencias medias.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 10 — Riobamba 250 bis',
      since: 2011, lines: ['Economía política internacional', 'Potencias medias', 'Brasil'],
      bio: ['Su investigación cruza economía política internacional y política exterior comparada, con foco en el comportamiento de las potencias medias sudamericanas y en el impacto de la competencia entre grandes potencias sobre los márgenes de acción de la región.']
    },

    {
      id: 'maria-elena-lorenzini', name: 'María Elena Lorenzini', tag: 'Adjunta',
      role: 'Investigadora — CONICET', area: 'Política exterior de Chile y vínculos bilaterales.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 11 — Riobamba 250 bis',
      since: 2004, lines: ['Relaciones Argentina–Chile', 'Política exterior comparada', 'Integración'],
      bio: ['Trabaja sobre la política exterior chilena y sobre la relación bilateral con la Argentina, atendiendo a los mecanismos institucionales de la vecindad: integración física, acuerdos fronterizos y coordinación en foros regionales.']
    },
    {
      id: 'julieta-zelicovich', name: 'Julieta Zelicovich', tag: 'Adjunta',
      role: 'Investigadora — CONICET', area: 'Negociaciones comerciales y régimen multilateral.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 11 — Riobamba 250 bis',
      since: 2010, lines: ['OMC y comercio', 'Negociaciones internacionales', 'Mercosur'],
      bio: ['Investiga el régimen multilateral de comercio y las negociaciones en las que participa la Argentina, tanto en la Organización Mundial del Comercio como en los acuerdos del Mercosur con terceros socios.']
    },
    {
      id: 'gabriela-marchetti', name: 'Gabriela Marchetti', tag: 'JTP',
      role: 'Docente — UNR', area: 'Integración regional y Mercosur.',
      degree: 'Magíster en Integración Regional', office: 'Oficina 5 — Riobamba 250 bis',
      since: 2007, lines: ['Mercosur', 'Integración regional', 'Instituciones'],
      bio: ['Acompaña las materias de integración regional y trabaja sobre el desarrollo institucional del Mercosur, sus instancias de participación social y las tensiones entre las agendas comercial y política del bloque.']
    },
    {
      id: 'emanuel-porcelli', name: 'Emanuel Porcelli', tag: 'Asociado',
      role: 'Investigador asociado', area: 'Instituciones regionales y gobernanza global.',
      degree: 'Doctorado en Ciencias Sociales', office: 'Investigador asociado — sin oficina asignada',
      since: 2015, lines: ['Gobernanza global', 'Organismos regionales', 'Educación superior'],
      bio: ['Aporta al centro una mirada sobre las instituciones regionales y los procesos de gobernanza global, con trabajos sobre organismos multilaterales y sobre la internacionalización de la educación superior.']
    },
    {
      id: 'ruben-paredes', name: 'Rubén Paredes', tag: 'Titular',
      role: 'Profesor — UNR', area: 'Medio Oriente y estudios de seguridad.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 7 — Riobamba 250 bis',
      since: 1996, lines: ['Medio Oriente', 'Estudios de seguridad', 'Conflictos armados'],
      bio: ['Coordina el área de Medio Oriente del centro y trabaja sobre los conflictos de la región, las dinámicas de seguridad regional y su lectura desde América Latina.']
    },
    {
      id: 'sabrina-olivera', name: 'Sabrina Olivera', tag: 'Becaria',
      role: 'Becaria doctoral', area: 'Diplomacia climática y agenda ambiental.',
      degree: 'Doctorado en curso — Relaciones Internacionales', office: 'Sala de becarios — Riobamba 250 bis',
      since: 2021, lines: ['Diplomacia climática', 'Régimen ambiental', 'Negociaciones COP'],
      bio: ['Desarrolla su tesis doctoral sobre la participación argentina en las negociaciones climáticas multilaterales y sobre el modo en que los compromisos ambientales se articulan con la política exterior económica.']
    },
    {
      id: 'federico-merke', name: 'Federico Merke', tag: 'Invitado',
      role: 'Investigador invitado', area: 'Orden internacional y política exterior comparada.',
      degree: 'Doctorado en Ciencias Sociales', office: 'Investigador invitado — sin oficina asignada',
      since: 2019, lines: ['Orden internacional', 'Política exterior comparada', 'Teoría'],
      bio: ['Participa en los seminarios del centro con trabajos sobre las transformaciones del orden internacional y sobre el estudio comparado de las políticas exteriores latinoamericanas.']
    },

    {
      id: 'lucrecia-fernandez', name: 'Lucrecia Fernández', tag: 'Becaria',
      role: 'Becaria posdoctoral', area: 'Cooperación técnica y desarrollo internacional.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Sala de becarios — Riobamba 250 bis',
      since: 2019, lines: ['Cooperación internacional', 'Desarrollo', 'Cooperación triangular'],
      bio: ['Su investigación posdoctoral aborda la cooperación técnica argentina y los esquemas de cooperación triangular, con atención a los criterios que definen prioridades y socios.']
    },
    {
      id: 'marcelo-videtta', name: 'Marcelo Videtta', tag: 'JTP',
      role: 'Docente — UNR', area: 'Política exterior brasileña.',
      degree: 'Magíster en Relaciones Internacionales', office: 'Oficina 7 — Riobamba 250 bis',
      since: 2009, lines: ['Brasil', 'Relaciones bilaterales', 'Política regional'],
      bio: ['Trabaja sobre la política exterior de Brasil y su impacto en la agenda regional, con foco en los ciclos de acercamiento y distanciamiento del vínculo bilateral con la Argentina.']
    },
    {
      id: 'natalia-ceppi', name: 'Natalia Ceppi', tag: 'Adjunta',
      role: 'Investigadora — CONICET', area: 'Recursos naturales y política internacional.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 9 — Riobamba 250 bis',
      since: 2009, lines: ['Recursos naturales', 'Bolivia y Paraguay', 'Energía'],
      bio: ['Investiga la dimensión internacional de los recursos naturales en América del Sur, con trabajos sobre hidrocarburos, energía y las relaciones de la Argentina con Bolivia y Paraguay.']
    },
    {
      id: 'paula-guerra', name: 'Paula Guerra', tag: 'Adjunta',
      role: 'Investigadora — UNR', area: 'Género y relaciones internacionales.',
      degree: 'Doctorado en Ciencia Política', office: 'Oficina 9 — Riobamba 250 bis',
      since: 2013, lines: ['Género y RR.II.', 'Política exterior feminista', 'Derechos humanos'],
      bio: ['Coordina la línea de género del centro y trabaja sobre la incorporación de la perspectiva de género en la política exterior y en las agencias de cooperación, así como sobre los debates en torno a las políticas exteriores feministas.']
    },
    {
      id: 'diego-cannizzaro', name: 'Diego Cannizzaro', tag: 'Becario',
      role: 'Becario doctoral', area: 'Defensa y política de seguridad regional.',
      degree: 'Doctorado en curso — Relaciones Internacionales', office: 'Sala de becarios — Riobamba 250 bis',
      since: 2022, lines: ['Política de defensa', 'Seguridad regional', 'Fuerzas armadas'],
      bio: ['Su tesis analiza la coordinación en materia de defensa entre los países del Cono Sur y las dificultades de sostener agendas comunes frente a ciclos políticos divergentes.']
    },
    {
      id: 'victoria-zapata', name: 'Victoria Zapata', tag: 'JTP',
      role: 'Docente — UNR', area: 'Migraciones internacionales y derechos humanos.',
      degree: 'Magíster en Derechos Humanos', office: 'Oficina 6 — Riobamba 250 bis',
      since: 2012, lines: ['Migraciones', 'Derechos humanos', 'Políticas migratorias'],
      bio: ['Trabaja sobre movilidad humana en la región y sobre la relación entre las políticas migratorias nacionales y los compromisos internacionales en materia de derechos humanos.']
    },
    {
      id: 'hernan-fernandez', name: 'Hernán Fernández', tag: 'Asociado',
      role: 'Investigador asociado', area: 'Asia-Pacífico y vínculos con China.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Investigador asociado — sin oficina asignada',
      since: 2016, lines: ['China', 'Asia-Pacífico', 'Comercio e inversiones'],
      bio: ['Estudia la presencia china en América del Sur —comercio, inversiones, financiamiento— y los dilemas que plantea para las estrategias de inserción internacional de los países de la región.']
    },

    {
      id: 'camila-rios', name: 'Camila Ríos', tag: 'Becaria',
      role: 'Becaria doctoral', area: 'Multilateralismo y Naciones Unidas.',
      degree: 'Doctorado en curso — Relaciones Internacionales', office: 'Sala de becarios — Riobamba 250 bis',
      since: 2023, lines: ['Naciones Unidas', 'Multilateralismo', 'Operaciones de paz'],
      bio: ['Investiga la participación argentina en el sistema de Naciones Unidas, con foco en las operaciones de mantenimiento de la paz y en las candidaturas a organismos multilaterales.']
    },
    {
      id: 'andres-lofiego', name: 'Andrés Lofiego', tag: 'JTP',
      role: 'Docente — UNR', area: 'Historia diplomática latinoamericana.',
      degree: 'Magíster en Historia', office: 'Oficina 6 — Riobamba 250 bis',
      since: 2011, lines: ['Historia diplomática', 'América Latina', 'Archivos'],
      bio: ['Acompaña las materias de historia de las relaciones internacionales y trabaja con fuentes de archivo sobre la diplomacia latinoamericana del siglo XX.']
    },
    {
      id: 'silvia-rosales', name: 'Silvia Rosales', tag: 'Titular',
      role: 'Profesora — UNR', area: 'Derecho internacional público.',
      degree: 'Doctorado en Derecho', office: 'Oficina 4 — Riobamba 250 bis',
      since: 1997, lines: ['Derecho internacional', 'Tratados', 'Solución de controversias'],
      bio: ['Aporta la dimensión jurídica a los proyectos del centro, con trabajos sobre derecho de los tratados y sobre los mecanismos de solución de controversias en los que interviene la Argentina.']
    },
    {
      id: 'martin-ruggiero', name: 'Martín Ruggiero', tag: 'Adjunto',
      role: 'Investigador — CONICET', area: 'Comercio agroindustrial y agenda global.',
      degree: 'Doctorado en Relaciones Internacionales', office: 'Oficina 10 — Riobamba 250 bis',
      since: 2014, lines: ['Comercio agroindustrial', 'Cadenas globales', 'Sostenibilidad'],
      bio: ['Analiza la inserción del complejo agroindustrial argentino en las cadenas globales de valor y el impacto de las nuevas exigencias ambientales de los mercados de destino.']
    },
    {
      id: 'florencia-vitali', name: 'Florencia Vitali', tag: 'Becaria',
      role: 'Becaria posdoctoral', area: 'Ciudades y paradiplomacia.',
      degree: 'Doctorado en Ciencia Política', office: 'Sala de becarios — Riobamba 250 bis',
      since: 2020, lines: ['Paradiplomacia', 'Ciudades', 'Redes internacionales'],
      bio: ['Estudia la acción internacional de gobiernos locales y provincias, y el modo en que ciudades como Rosario construyen agendas propias en redes internacionales.']
    },
    {
      id: 'juan-pablo-sosa', name: 'Juan Pablo Sosa', tag: 'JTP',
      role: 'Docente — UNR', area: 'Integración energética sudamericana.',
      degree: 'Magíster en Relaciones Internacionales', office: 'Oficina 4 — Riobamba 250 bis',
      since: 2015, lines: ['Energía', 'Integración física', 'Infraestructura'],
      bio: ['Trabaja sobre los proyectos de integración energética e infraestructura en América del Sur y sobre las condiciones políticas que explican sus avances y estancamientos.']
    },
    {
      id: 'valeria-iglesias', name: 'Valeria Iglesias', tag: 'Asociada',
      role: 'Investigadora asociada', area: 'Unión Europea y política de vecindad.',
      degree: 'Doctorado en Estudios Europeos', office: 'Investigadora asociada — sin oficina asignada',
      since: 2017, lines: ['Unión Europea', 'Mercosur–UE', 'Política comercial'],
      bio: ['Investiga la política externa de la Unión Europea y la larga negociación del acuerdo con el Mercosur, atendiendo tanto a los intereses comerciales como a las condicionalidades regulatorias.']
    }
  ];

  /* -------------------------------------------------- Novedades */
  var news = [
    {
      id: 'politica-exterior-argentina-1983-2025', group: 'cerir',
      tag: 'Seminario',
      title: 'Política exterior argentina: continuidades y rupturas 1983–2025',
      subtitle: 'Cuatro encuentros abiertos para revisar cuarenta años de inserción internacional argentina desde el retorno democrático.',
      date: '2026-08-12', dateLabel: '12 de agosto de 2026',
      place: 'Aula Magna, FCPolit',
      author: 'anabella-busso',
      image: 'https://picsum.photos/seed/cerir-a/1600/900',
      imageAlt: 'Mesa de debate en la Facultad de Ciencia Política',
      tags: ['Política exterior', 'Democracia'],
      body: [
        { t: 'p', v: 'El ciclo que abre el CERIR este mes propone una pregunta sencilla de formular y difícil de responder: ¿cuánto de la política exterior argentina de los últimos cuarenta años puede leerse como una línea continua y cuánto como una serie de rupturas? La respuesta importa, porque de ella depende el modo en que se piensan los márgenes de acción disponibles hoy.' },
        { t: 'p', v: 'Cada encuentro combina una exposición inicial a cargo de investigadores del centro con un comentario abierto y una discusión con el público. La entrada es libre y no requiere inscripción previa.' },
        { t: 'h2', v: 'Un problema de largo plazo' },
        { t: 'p', v: 'Desde 1983 la Argentina atravesó al menos cuatro configuraciones distintas de su vínculo con el mundo. Los cambios de gobierno explicaron parte de esas variaciones, pero no todas: hubo desplazamientos que se produjeron dentro de una misma administración y decisiones que sobrevivieron a alternancias políticas profundas.' },
        { t: 'quote', v: 'La política exterior no se explica solo por quién gobierna, sino por lo que el país puede sostener en el tiempo.', by: 'Anabella Busso' },
        { t: 'p', v: 'Ese es el punto de partida del seminario: separar lo que responde a la coyuntura de lo que responde a condiciones estructurales —la inserción económica, la relación con los organismos financieros, la geografía de las alianzas regionales— y que tiende a reaparecer con independencia del signo político de turno.' },
        { t: 'h2', v: 'Programa de los encuentros' },
        { t: 'ul', v: [
          'Primer encuentro — 1983 a 1989: la reconstrucción del vínculo externo y el retorno a los foros multilaterales.',
          'Segundo encuentro — 1990 a 2001: alineamiento, reformas y el precio de la previsibilidad.',
          'Tercer encuentro — 2003 a 2015: regionalismo, deuda y autonomía declarada.',
          'Cuarto encuentro — 2016 a 2025: fragmentación del orden internacional y márgenes de maniobra.'
        ] },
        { t: 'p', v: 'Los materiales de lectura de cada encuentro se publican una semana antes en la sección de publicaciones del centro, junto con la bibliografía complementaria y las fuentes documentales utilizadas.' },
        { t: 'h2', v: 'Para quién es' },
        { t: 'p', v: 'El ciclo está pensado para estudiantes avanzados de Relaciones Internacionales y Ciencia Política, pero también para quienes trabajan en gestión pública, cooperación internacional o periodismo y necesitan un marco para ordenar la discusión sobre la agenda externa argentina.' },
        { t: 'p', v: 'Los encuentros se graban y quedan disponibles en el canal del centro. Quienes asistan a los cuatro pueden solicitar un certificado de asistencia en la secretaría de la Facultad.' }
      ]
    },
    {
      id: 'politica-exterior-argentina-tomo-xii', group: 'cerir',
      tag: 'Publicación',
      title: 'La política exterior argentina, tomo XII: agenda multilateral',
      subtitle: 'Nueva entrega de la serie histórica del CERIR: diez capítulos sobre Mercosur, Antártida, Malvinas, comercio y organismos internacionales.',
      date: '2026-07-03', dateLabel: '3 de julio de 2026',
      place: 'UNR Editora',
      author: 'miryam-colacrai',
      image: 'https://picsum.photos/seed/cerir-b/1600/900',
      imageAlt: 'Publicación institucional del CERIR',
      tags: ['Multilateralismo', 'Mercosur'],
      body: [
        { t: 'p', v: 'La serie que el CERIR publica desde 1991 llega a su tomo doce. Como en las entregas anteriores, el volumen reúne capítulos escritos por investigadores del centro sobre los distintos frentes de la política exterior argentina durante el período analizado.' },
        { t: 'h2', v: 'Qué incluye el volumen' },
        { t: 'p', v: 'La primera parte reconstruye la participación argentina en los foros multilaterales: Naciones Unidas, la Organización Mundial del Comercio y los organismos financieros. La segunda se ocupa de las agendas de largo plazo —Antártida, Malvinas, cuencas hídricas compartidas— que atraviesan gobiernos y programas.' },
        { t: 'ul', v: [
          'Cuatro capítulos sobre organismos multilaterales y negociaciones comerciales.',
          'Tres capítulos sobre las agendas de soberanía y territorio.',
          'Dos capítulos sobre integración regional y vecindad.',
          'Un capítulo metodológico sobre el uso de fuentes diplomáticas.'
        ] },
        { t: 'quote', v: 'Documentar es también una forma de discutir: sin registro no hay debate posible sobre lo que el país hizo.', by: 'Miryam Colacrai' },
        { t: 'p', v: 'El tomo cierra con un anexo documental y una cronología de las principales decisiones del período, pensada como herramienta de trabajo para docentes y tesistas.' },
        { t: 'h2', v: 'Cómo conseguirlo' },
        { t: 'p', v: 'La edición impresa se distribuye a través de UNR Editora y de la librería de la Facultad. La versión digital queda disponible en acceso abierto en el repositorio institucional de la Universidad, seis meses después de la publicación en papel.' }
      ]
    },
    {
      id: 'becas-iniciacion-investigacion-2027', group: 'cerir',
      tag: 'Convocatoria',
      title: 'Becas de iniciación en investigación 2027',
      subtitle: 'Abierta la inscripción para estudiantes avanzados que quieran integrarse a los proyectos acreditados del centro.',
      date: '2026-06-18', dateLabel: '18 de junio de 2026',
      place: 'Secretaría de Ciencia y Técnica',
      author: 'paula-guerra',
      image: 'https://picsum.photos/seed/cerir-c/1600/900',
      imageAlt: 'Jornada de investigación con becarios',
      tags: ['Becas', 'Formación'],
      body: [
        { t: 'p', v: 'El centro abre seis lugares para estudiantes avanzados de las carreras de Relaciones Internacionales y Ciencia Política que quieran sumarse a un equipo de investigación en funcionamiento. La beca tiene una duración de doce meses, con posibilidad de renovación.' },
        { t: 'h2', v: 'Requisitos' },
        { t: 'ul', v: [
          'Tener el setenta por ciento de la carrera aprobado al momento de la inscripción.',
          'Presentar un plan de trabajo de dos páginas asociado a una de las líneas del centro.',
          'Contar con el aval de un investigador o investigadora que oficie de director.',
          'Disponibilidad de veinte horas semanales.'
        ] },
        { t: 'p', v: 'No se exige experiencia previa en investigación. La convocatoria está pensada justamente como primera instancia de formación: buena parte de los investigadores que hoy integran el centro empezó por acá.' },
        { t: 'quote', v: 'La beca de iniciación no es un premio a un recorrido: es el comienzo de uno.', by: 'Paula Guerra' },
        { t: 'h2', v: 'Cómo inscribirse' },
        { t: 'p', v: 'La documentación se presenta por correo electrónico a la secretaría del centro hasta el último día hábil de septiembre. Las entrevistas se realizan durante octubre y los resultados se publican en esta misma sección antes del inicio del ciclo lectivo.' }
      ]
    },
    {
      id: 'xvi-congreso-nacional-relaciones-internacionales', group: 'cerir',
      tag: 'Congreso',
      title: 'XVI Congreso Nacional de Relaciones Internacionales',
      subtitle: 'Rosario recibe a más de trescientos investigadores de América Latina para discutir orden internacional, regionalismo y desarrollo.',
      date: '2026-05-29', dateLabel: '29 de mayo de 2026',
      place: 'Centro Cultural Fontanarrosa',
      author: 'esteban-actis',
      image: 'https://picsum.photos/seed/cerir-d/1600/900',
      imageAlt: 'Congreso internacional de relaciones internacionales',
      tags: ['Orden internacional', 'Regionalismo'],
      body: [
        { t: 'p', v: 'Durante tres días la ciudad concentra la discusión académica sobre política internacional en América Latina. El congreso reúne mesas temáticas, presentaciones de libros y talleres de posgrado, con sede principal en el Centro Cultural Fontanarrosa y actividades paralelas en la Facultad.' },
        { t: 'h2', v: 'Ejes de trabajo' },
        { t: 'p', v: 'La convocatoria organizó las ponencias en torno a tres ejes: las transformaciones del orden internacional y el lugar de las potencias medias; el estado del regionalismo sudamericano después de una década de crisis institucional; y la relación entre política exterior y modelos de desarrollo.' },
        { t: 'quote', v: 'Discutir la inserción internacional de la región exige discutir, al mismo tiempo, qué desarrollo se persigue.', by: 'Esteban Actis' },
        { t: 'p', v: 'A los ejes principales se suman mesas sobre género y relaciones internacionales, migraciones, agenda climática y estudios sobre Asia, que en las últimas ediciones concentraron una parte creciente de las presentaciones.' },
        { t: 'h2', v: 'Actividades abiertas' },
        { t: 'ul', v: [
          'Conferencia de apertura, con entrada libre hasta agotar la capacidad de la sala.',
          'Presentaciones de libros publicados por centros de la red durante el último año.',
          'Taller de escritura académica para tesistas de doctorado.',
          'Mesa de cierre con directores de centros de investigación de la región.'
        ] },
        { t: 'p', v: 'El programa completo, con horarios y asignación de salas, se publica quince días antes del inicio. Las ponencias aceptadas se compilan en un volumen digital con ISBN que edita el comité organizador.' }
      ]
    },

    /* ---------------- Maestría ---------------- */
    {
      id: 'maestria-inscripcion-cohorte-2027', group: 'maestria', tag: 'Inscripción',
      title: 'Abre la inscripción a la cohorte 2027 de la Maestría',
      subtitle: 'Dos años de cursada con orientación en política exterior y estudios regionales.',
      date: '2026-08-05', dateLabel: '5 de agosto de 2026', place: 'Secretaría de Posgrado',
      author: 'gustavo-marini', image: 'https://picsum.photos/seed/cerir-m1/1600/900',
      imageAlt: 'Aula de posgrado durante una clase', tags: ['Posgrado', 'Inscripciones'],
      body: [
        { t: 'p', v: 'La Maestría en Relaciones Internacionales abre la inscripción para la cohorte que inicia en marzo de 2027. La cursada es presencial, de dos años, con dos encuentros semanales y un tramo final destinado al trabajo de tesis.' },
        { t: 'h2', v: 'Perfil de ingreso' },
        { t: 'p', v: 'Está dirigida a graduados de carreras de ciencias sociales, derecho, economía e historia. No se exige experiencia previa en investigación, pero sí un anteproyecto de dos páginas que se discute en la entrevista de admisión.' },
        { t: 'p', v: 'La documentación se presenta en la Secretaría de Posgrado de la Facultad hasta el 30 de noviembre. Hay un cupo de becas de reducción de arancel para docentes de la universidad.' }
      ]
    },
    {
      id: 'maestria-seminario-internacional-orden-global', group: 'maestria', tag: 'Seminario',
      title: 'Seminario internacional: el orden global en disputa',
      subtitle: 'Tres semanas intensivas con profesores invitados de Brasil, México y España.',
      date: '2026-07-18', dateLabel: '18 de julio de 2026', place: 'Aula 3, Riobamba 250 bis',
      author: 'esteban-actis', image: 'https://picsum.photos/seed/cerir-m2/1600/900',
      imageAlt: 'Profesor invitado dando una clase de posgrado', tags: ['Posgrado', 'Orden internacional'],
      body: [
        { t: 'p', v: 'El seminario de verano de la Maestría reúne a tres profesores invitados para discutir las transformaciones del orden internacional y sus efectos sobre las políticas exteriores latinoamericanas.' },
        { t: 'h2', v: 'Modalidad' },
        { t: 'p', v: 'Cada semana está a cargo de un docente distinto y combina lectura previa obligatoria con discusión en clase. Los maestrandos entregan un ensayo final de ocho páginas que acredita el seminario como optativo.' },
        { t: 'p', v: 'Las vacantes remanentes se abren a doctorandos de otras unidades académicas y a investigadores del centro.' }
      ]
    },
    {
      id: 'maestria-nuevo-plan-de-estudios', group: 'maestria', tag: 'Académico',
      title: 'Se aprobó el nuevo plan de estudios de la Maestría',
      subtitle: 'Incorpora seminarios sobre agenda climática, Asia-Pacífico y género en las relaciones internacionales.',
      date: '2026-06-02', dateLabel: '2 de junio de 2026', place: 'Consejo Directivo',
      author: 'paula-guerra', image: 'https://picsum.photos/seed/cerir-m3/1600/900',
      imageAlt: 'Reunión del cuerpo docente de la maestría', tags: ['Posgrado', 'Plan de estudios'],
      body: [
        { t: 'p', v: 'El Consejo Directivo de la Facultad aprobó la actualización del plan de estudios de la Maestría, la primera desde su última acreditación. El cambio suma tres seminarios optativos y reordena el tramo metodológico.' },
        { t: 'h2', v: 'Qué cambia' },
        { t: 'ul', v: [
          'Nuevo seminario sobre agenda climática y negociaciones ambientales.',
          'Nuevo seminario sobre Asia-Pacífico y vínculos con China.',
          'Nuevo seminario sobre género y relaciones internacionales.',
          'El taller de tesis pasa a dictarse desde el primer año.'
        ] },
        { t: 'p', v: 'Los cambios se aplican desde la cohorte 2027. Quienes están cursando pueden acreditar los nuevos seminarios como optativos.' }
      ]
    },
    {
      id: 'maestria-defensa-trabajos-finales', group: 'maestria', tag: 'Defensas',
      title: 'Calendario de defensas de trabajos finales',
      subtitle: 'Once maestrandos defienden entre septiembre y noviembre; las mesas son abiertas al público.',
      date: '2026-05-14', dateLabel: '14 de mayo de 2026', place: 'Sala de posgrado',
      author: 'maria-elena-lorenzini', image: 'https://picsum.photos/seed/cerir-m4/1600/900',
      imageAlt: 'Mesa de defensa de un trabajo final de maestría', tags: ['Posgrado', 'Defensas'],
      body: [
        { t: 'p', v: 'Se publicó el calendario de defensas de los trabajos finales de la Maestría para el segundo semestre. Once maestrandos de las cohortes 2023 y 2024 presentan sus investigaciones ante jurados integrados por docentes del centro y evaluadores externos.' },
        { t: 'h2', v: 'Mesas abiertas' },
        { t: 'p', v: 'Todas las defensas son públicas. Se recomienda a los maestrandos de cohortes en curso asistir al menos a dos como parte de su formación en el taller de tesis.' }
      ]
    },

    /* ---------------- Graduados ---------------- */
    {
      id: 'graduados-encuentro-anual-2026', group: 'graduados', tag: 'Encuentro',
      title: 'Encuentro anual de graduados del centro',
      subtitle: 'Una jornada para compartir trayectorias profesionales y armar red entre generaciones.',
      date: '2026-08-01', dateLabel: '1 de agosto de 2026', place: 'Patio de la Facultad',
      author: 'gabriela-marchetti', image: 'https://picsum.photos/seed/cerir-gr1/1600/900',
      imageAlt: 'Graduados conversando durante el encuentro anual', tags: ['Graduados', 'Red'],
      body: [
        { t: 'p', v: 'El encuentro anual reúne a graduados de distintas cohortes que hoy trabajan en cancillería, organismos internacionales, gobiernos provinciales, consultoras y universidades del país y del exterior.' },
        { t: 'h2', v: 'Formato' },
        { t: 'p', v: 'La jornada combina mesas cortas donde cinco graduados cuentan su recorrido con un espacio abierto de vinculación para estudiantes avanzados que están definiendo su salida laboral.' },
        { t: 'p', v: 'La inscripción es libre y se realiza por correo a la secretaría del centro.' }
      ]
    },
    {
      id: 'graduados-programa-mentorias', group: 'graduados', tag: 'Programa',
      title: 'Arranca el programa de mentorías para estudiantes',
      subtitle: 'Veinte graduados acompañan durante un semestre a estudiantes de los últimos años.',
      date: '2026-06-26', dateLabel: '26 de junio de 2026', place: 'Modalidad mixta',
      author: 'victoria-zapata', image: 'https://picsum.photos/seed/cerir-gr2/1600/900',
      imageAlt: 'Reunión de mentoría entre un graduado y una estudiante', tags: ['Graduados', 'Mentorías'],
      body: [
        { t: 'p', v: 'El programa pone en contacto a estudiantes de los dos últimos años de la carrera con graduados que trabajan en el área que a ellos les interesa. El acompañamiento dura un semestre e incluye cuatro encuentros mínimos.' },
        { t: 'h2', v: 'Cómo participar' },
        { t: 'p', v: 'Los estudiantes se postulan con una carta breve donde explican qué buscan del acompañamiento. Los graduados que quieran sumarse como mentores pueden anotarse en cualquier momento del año.' }
      ]
    },
    {
      id: 'graduados-insercion-laboral-informe', group: 'graduados', tag: 'Informe',
      title: 'Informe de inserción laboral de graduados',
      subtitle: 'Resultados de la encuesta a 240 graduados de los últimos diez años.',
      date: '2026-04-22', dateLabel: '22 de abril de 2026', place: 'Publicación digital',
      author: 'martin-ruggiero', image: 'https://picsum.photos/seed/cerir-gr3/1600/900',
      imageAlt: 'Gráficos del informe de inserción laboral', tags: ['Graduados', 'Informes'],
      body: [
        { t: 'p', v: 'El centro publicó los resultados de la encuesta de inserción laboral que releva la trayectoria de los graduados de la última década: en qué sectores trabajan, cuánto tardaron en insertarse y qué competencias reconocen como más útiles.' },
        { t: 'h2', v: 'Principales hallazgos' },
        { t: 'ul', v: [
          'El sector público concentra la mayor proporción de inserciones.',
          'Crece la participación en organismos internacionales y cooperación.',
          'La formación en metodología aparece como la competencia más valorada.'
        ] },
        { t: 'p', v: 'El informe completo está disponible en acceso abierto en el repositorio de la universidad.' }
      ]
    },
    {
      id: 'graduados-taller-escritura-academica', group: 'graduados', tag: 'Taller',
      title: 'Taller de escritura académica para graduados',
      subtitle: 'Cuatro encuentros para convertir la tesis en un artículo publicable.',
      date: '2026-03-19', dateLabel: '19 de marzo de 2026', place: 'Aula 5, Riobamba 250 bis',
      author: 'julieta-zelicovich', image: 'https://picsum.photos/seed/cerir-gr4/1600/900',
      imageAlt: 'Taller de escritura académica en curso', tags: ['Graduados', 'Formación'],
      body: [
        { t: 'p', v: 'El taller está pensado para graduados que ya defendieron su tesis y quieren transformarla en un artículo para revista con referato. Se trabaja sobre los textos propios de los participantes.' },
        { t: 'h2', v: 'Contenidos' },
        { t: 'p', v: 'Selección de la revista destino, reformulación del recorte, estructura del artículo, manejo del estado del arte y respuesta a los comentarios de los evaluadores.' },
        { t: 'p', v: 'El cupo es de doce participantes y se asigna por orden de inscripción.' }
      ]
    },

    /* ---------------- Tesis defendidas ---------------- */
    {
      id: 'tesis-diplomacia-climatica-argentina', group: 'tesis', tag: 'Doctorado',
      title: 'Tesis: la diplomacia climática argentina en las negociaciones multilaterales',
      subtitle: 'Defendida con recomendación de publicación por unanimidad del jurado.',
      date: '2026-07-28', dateLabel: '28 de julio de 2026', place: 'Sala de posgrado',
      author: 'sabrina-olivera', image: 'https://picsum.photos/seed/cerir-t1/1600/900',
      imageAlt: 'Defensa de tesis doctoral ante el jurado', tags: ['Tesis', 'Agenda climática'],
      body: [
        { t: 'p', v: 'La tesis analiza la participación argentina en las negociaciones climáticas multilaterales desde el Acuerdo de París y el modo en que los compromisos ambientales se articulan —o entran en tensión— con la política exterior económica del país.' },
        { t: 'h2', v: 'Aporte principal' },
        { t: 'p', v: 'El trabajo reconstruye las posiciones argentinas a partir de documentos de negociación y entrevistas a funcionarios, y muestra que la coordinación entre las carteras de ambiente, producción y relaciones exteriores explica buena parte de la variación en las posiciones asumidas.' },
        { t: 'p', v: 'El jurado recomendó su publicación por unanimidad.' }
      ]
    },
    {
      id: 'tesis-defensa-cono-sur', group: 'tesis', tag: 'Doctorado',
      title: 'Tesis: coordinación en defensa entre los países del Cono Sur',
      subtitle: 'Un estudio sobre por qué las agendas comunes de defensa no logran sostenerse en el tiempo.',
      date: '2026-06-10', dateLabel: '10 de junio de 2026', place: 'Sala de posgrado',
      author: 'diego-cannizzaro', image: 'https://picsum.photos/seed/cerir-t2/1600/900',
      imageAlt: 'Defensa de tesis sobre política de defensa regional', tags: ['Tesis', 'Seguridad regional'],
      body: [
        { t: 'p', v: 'La investigación examina los mecanismos de coordinación en materia de defensa entre Argentina, Brasil y Chile, y las razones por las cuales las iniciativas conjuntas tienden a discontinuarse cuando cambian los ciclos políticos nacionales.' },
        { t: 'h2', v: 'Metodología' },
        { t: 'p', v: 'El trabajo compara tres períodos y combina análisis documental con entrevistas a responsables de las carteras de defensa de los tres países.' }
      ]
    },
    {
      id: 'tesis-paradiplomacia-rosario', group: 'tesis', tag: 'Maestría',
      title: 'Tesis: la acción internacional de la ciudad de Rosario',
      subtitle: 'Veinte años de paradiplomacia municipal analizados desde las redes de ciudades.',
      date: '2026-05-07', dateLabel: '7 de mayo de 2026', place: 'Sala de posgrado',
      author: 'florencia-vitali', image: 'https://picsum.photos/seed/cerir-t3/1600/900',
      imageAlt: 'Defensa de tesis sobre paradiplomacia municipal', tags: ['Tesis', 'Paradiplomacia'],
      body: [
        { t: 'p', v: 'La tesis reconstruye la agenda internacional de Rosario en las últimas dos décadas: participación en redes de ciudades, hermanamientos, captación de cooperación descentralizada y promoción de exportaciones.' },
        { t: 'h2', v: 'Hallazgo central' },
        { t: 'p', v: 'La continuidad de la acción internacional dependió menos de la orientación política de cada gestión que de la existencia de una estructura técnica estable dentro del municipio.' }
      ]
    },
    {
      id: 'tesis-mercosur-union-europea', group: 'tesis', tag: 'Maestría',
      title: 'Tesis: la negociación Mercosur — Unión Europea',
      subtitle: 'Veinticinco años de negociación leídos desde la economía política internacional.',
      date: '2026-04-03', dateLabel: '3 de abril de 2026', place: 'Sala de posgrado',
      author: 'valeria-iglesias', image: 'https://picsum.photos/seed/cerir-t4/1600/900',
      imageAlt: 'Defensa de tesis sobre la negociación Mercosur-Unión Europea', tags: ['Tesis', 'Comercio'],
      body: [
        { t: 'p', v: 'El trabajo analiza las distintas etapas de la negociación entre el Mercosur y la Unión Europea, con foco en cómo los intereses sectoriales de cada bloque explican los bloqueos y las reaperturas del proceso.' },
        { t: 'h2', v: 'Enfoque' },
        { t: 'p', v: 'La tesis combina el análisis de los textos de negociación con el seguimiento de las posiciones de las cámaras empresarias y de las federaciones agrarias de ambos bloques.' }
      ]
    }
  ];

  /* -------------------------------------------------- Taxonomías de novedades
     El orden acá define el orden de las pastillas y de los carruseles. */
  var newsGroups = [
    { id: 'maestria',  name: 'Maestría',
      lead: 'Inscripciones, seminarios y defensas de la Maestría en Relaciones Internacionales.' },
    { id: 'cerir',     name: 'CERIR',
      lead: 'Actividades, publicaciones y convocatorias del centro.' },
    { id: 'graduados', name: 'Graduados',
      lead: 'Encuentros, mentorías e inserción profesional de nuestros graduados.' },
    { id: 'tesis',     name: 'Tesis defendidas',
      lead: 'Investigaciones de doctorado y maestría defendidas en los últimos meses.' }
  ];

  /* -------------------------------------------------- Publicaciones
     Dos taxonomías. `serie` es la colección principal: su primer
     elemento es el último posteo y se muestra como card destacada.
     Los PDF de assets/pdf/ son archivos de muestra de una página. */
  var publications = {
    serie: {
      name: 'La política exterior argentina',
      items: [
        {
          id: 'pea-tomo-12', year: 2026, pages: 218, title: 'La política exterior argentina, tomo XII',
          short: 'Agenda multilateral: organismos internacionales, comercio y agendas de soberanía.',
          desc: 'Duodécima entrega de la serie histórica que el centro publica desde 1991. Diez capítulos sobre la participación argentina en los foros multilaterales, las negociaciones comerciales y las agendas de largo plazo —Antártida, Malvinas, cuencas compartidas—, más un anexo documental y una cronología de las principales decisiones del período.',
          file: 'assets/pdf/pea-tomo-12.pdf'
        },
        {
          id: 'pea-tomo-11', year: 2021, pages: 196, title: 'La política exterior argentina, tomo XI',
          short: 'El ciclo 2015-2019: reinserción financiera, Mercosur y realineamiento hemisférico.',
          file: 'assets/pdf/pea-tomo-11.pdf'
        },
        {
          id: 'pea-tomo-10', year: 2017, pages: 184, title: 'La política exterior argentina, tomo X',
          short: 'El ciclo 2011-2015: restricción externa, litigios internacionales y diversificación de socios.',
          file: 'assets/pdf/pea-tomo-10.pdf'
        },
        {
          id: 'pea-tomo-09', year: 2013, pages: 172, title: 'La política exterior argentina, tomo IX',
          short: 'El ciclo 2007-2011: crisis global, regionalismo sudamericano y agenda energética.',
          file: 'assets/pdf/pea-tomo-09.pdf'
        },
        {
          id: 'pea-tomo-08', year: 2009, pages: 165, title: 'La política exterior argentina, tomo VIII',
          short: 'El ciclo 2003-2007: renegociación de la deuda, UNASUR y política de derechos humanos.',
          file: 'assets/pdf/pea-tomo-08.pdf'
        }
      ]
    },
    complementarias: {
      name: 'Publicaciones complementarias',
      items: [
        {
          id: 'cuaderno-14', year: 2026, pages: 64, title: 'Cuadernos de Política Exterior N.º 14',
          short: 'Diplomacia climática: la participación argentina en las negociaciones ambientales.',
          file: 'assets/pdf/cuaderno-14.pdf'
        },
        {
          id: 'dt-09', year: 2025, pages: 38, title: 'Documentos de Trabajo N.º 9',
          short: 'Cooperación Sur-Sur: instrumentos, socios y criterios de asignación.',
          file: 'assets/pdf/dt-09.pdf'
        },
        {
          id: 'anuario-2025', year: 2025, pages: 142, title: 'Anuario de Relaciones Internacionales 2025',
          short: 'Balance del año en la agenda externa argentina y regional.',
          file: 'assets/pdf/anuario-2025.pdf'
        },
        {
          id: 'dossier-antartida', year: 2024, pages: 88, title: 'Dossier Antártida',
          short: '65 años del Tratado Antártico: régimen, ciencia y disputas pendientes.',
          file: 'assets/pdf/dossier-antartida.pdf'
        },
        {
          id: 'informe-mercosur-ue', year: 2024, pages: 52, title: 'Informe Mercosur — Unión Europea',
          short: 'Estado de la negociación y escenarios de ratificación.',
          file: 'assets/pdf/informe-mercosur-ue.pdf'
        }
      ]
    }
  };

  /* -------------------------------------------------- Helpers */
  function byId(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  return {
    members: members,
    news: news,
    newsGroups: newsGroups,
    /* posteos de una taxonomía, del más nuevo al más viejo */
    newsByGroup: function (groupId) {
      return news.filter(function (n) { return n.group === groupId; })
                 .sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    },
    publications: publications,
    /* portada de muestra: reemplazar por la tapa real del PDF */
    cover: function (p) { return 'https://picsum.photos/seed/pub-' + p.id + '/900/1200'; },
    member: function (id) { return byId(members, id); },
    article: function (id) { return byId(news, id); },
    initials: function (name) {
      return name.split(' ').slice(0, 2).map(function (p) { return p[0]; }).join('');
    }
  };
})();
