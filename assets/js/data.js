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
    {"id": "miryam-colacrai", "name": "Miryam Colacrai", "surname": "Colacrai", "givenNames": "Miryam", "tag": "Directora", "role": "Dra. en Ciencias Sociales (Universidad de Buenos Aires)", "area": "Antártida y política antártica argentina; relaciones políticas bilaterales Argentina–Chile; actores subnacionales; teoría de las Relaciones Internacionales y de la cooperación internacional", "degree": "Dra. en Ciencias Sociales (Universidad de Buenos Aires)", "email": "miryam.colacrai@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Antártida y política antártica argentina", "relaciones políticas bilaterales Argentina–Chile", "actores subnacionales", "teoría de las Relaciones Internacionales y de la cooperación internacional"], "bio": ["Información no disponible"]},
    {"id": "gladys-lechini", "name": "Gladys Lechini", "surname": "Lechini", "givenNames": "Gladys", "tag": "Directora", "role": "Doutor em Ciências: Sociologia (Faculdade de Filosofia, Letras e Ciências Humanas, Universidade de São Paulo, Brasil)", "area": "Relaciones Internacionales; política exterior argentina; estudios africanos; cooperación Sur–Sur; IBSA; BRICS; relaciones América Latina–África; política exterior argentina, brasileña y sudafricana", "degree": "Doutor em Ciências: Sociologia (Faculdade de Filosofia, Letras e Ciências Humanas, Universidade de São Paulo, Brasil)", "email": "gladystlechini@yahoo.com.ar / gladys.lechini@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Relaciones Internacionales", "política exterior argentina", "estudios africanos", "cooperación Sur–Sur", "IBSA", "BRICS", "relaciones América Latina–África", "política exterior argentina, brasileña y sudafricana"], "bio": ["Información no disponible"]},
    {"id": "maria-victoria-alvarez", "name": "María Victoria Álvarez", "surname": "Álvarez", "givenNames": "María Victoria", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Unión Europea; regionalismo latinoamericano; regionalismo comparado; relaciones UE–LAC; relaciones UE–Mercosur", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "maria.alvarez@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Unión Europea", "regionalismo latinoamericano", "regionalismo comparado", "relaciones UE–LAC", "relaciones UE–Mercosur"], "bio": ["Información no disponible"]},
    {"id": "sabrina-benedetto", "name": "Sabrina Benedetto", "surname": "Benedetto", "givenNames": "Sabrina", "tag": "Miembro titular", "role": "Mg. en Relaciones Internacionales (FLACSO)", "area": "Multilateralismo; cooperación al desarrollo", "degree": "Mg. en Relaciones Internacionales (FLACSO)", "email": "sabrinabenedetto@gmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Multilateralismo", "cooperación al desarrollo"], "bio": ["Información no disponible"]},
    {"id": "pilar-bueno", "name": "Pilar Bueno", "surname": "Bueno", "givenNames": "Pilar", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Políticas ambientales; cambio climático; política exterior argentina", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "maria.bueno@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Políticas ambientales", "cambio climático", "política exterior argentina"], "bio": ["Información no disponible"]},
    {"id": "anabella-busso", "name": "Anabella Busso", "surname": "Busso", "givenNames": "Anabella", "tag": "Miembro titular", "role": "Mg. en Ciencia Política (FLACSO)", "area": "Política exterior argentina; política exterior de Estados Unidos; relaciones bilaterales entre Argentina y Estados Unidos", "degree": "Mg. en Ciencia Política (FLACSO)", "email": "anabella.busso@gmail.com / anabella.busso@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política exterior argentina", "política exterior de Estados Unidos", "relaciones bilaterales entre Argentina y Estados Unidos"], "bio": ["Información no disponible"]},
    {"id": "marta-cabeza", "name": "Marta Cabeza", "surname": "Cabeza", "givenNames": "Marta", "tag": "Miembro titular", "role": "Mg. en Integración y Cooperación Internacional (UNR)", "area": "Estudios regionales", "degree": "Mg. en Integración y Cooperación Internacional (UNR)", "email": "marcabeza@yahoo.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Estudios regionales"], "bio": ["Información no disponible"]},
    {"id": "emilse-e-calderon", "name": "Emilse E. Calderón", "surname": "Calderón", "givenNames": "Emilse E.", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Seguridad internacional; tendencias sistémicas y de la región latinoamericana; cooperación en BRICS con foco en la política de Rusia; política de defensa argentina", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "emilsecalderon@hotmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Seguridad internacional", "tendencias sistémicas y de la región latinoamericana", "cooperación en BRICS con foco en la política de Rusia", "política de defensa argentina"], "bio": ["Información no disponible"]},
    {"id": "magdalena-carrancio", "name": "Magdalena Carrancio", "surname": "Carrancio", "givenNames": "Magdalena", "tag": "Miembro titular", "role": "Mg. en Cooperación e Integración Internacional (UNR)", "area": "Cooperación internacional; metodología de la investigación con apoyo de IA", "degree": "Mg. en Cooperación e Integración Internacional (UNR)", "email": "cerir@unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Cooperación internacional", "metodología de la investigación con apoyo de IA"], "bio": ["Información no disponible"]},
    {"id": "vanesa-castello", "name": "Vanesa Castello", "surname": "Castello", "givenNames": "Vanesa", "tag": "Miembro titular", "role": "Mg. en Integración y Cooperación Internacional (UNR)", "area": "Derecho del mar; explotación de recursos naturales en el Atlántico Sur", "degree": "Mg. en Integración y Cooperación Internacional (UNR)", "email": "vanesa.castello@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Derecho del mar", "explotación de recursos naturales en el Atlántico Sur"], "bio": ["Información no disponible"]},
    {"id": "maria-julieta-cortes", "name": "María Julieta Cortés", "surname": "Cortés", "givenNames": "María Julieta", "tag": "Miembro titular", "role": "Mg. en Ciencias Sociales con Orientación en Ciencia Política (FLACSO)", "area": "Internacionalización de la Educación Superior", "degree": "Mg. en Ciencias Sociales con Orientación en Ciencia Política (FLACSO)", "email": "maria.cortes@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Internacionalización de la Educación Superior"], "bio": ["Información no disponible"]},
    {"id": "paula-demarchi", "name": "Paula Demarchi", "surname": "Demarchi", "givenNames": "Paula", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Cooperación internacional en ciencia y tecnología; diplomacia científica", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "paulademarchi@hotmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Cooperación internacional en ciencia y tecnología", "diplomacia científica"], "bio": ["Información no disponible"]},
    {"id": "maria-noel-dussort", "name": "María Noel Dussort", "surname": "Dussort", "givenNames": "María Noel", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Transición energética de las potencias emergentes, con particular énfasis en Brasil, India y China; política exterior de las potencias emergentes vinculada a energía, con foco en América Latina", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "maria.dussort@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Transición energética de las potencias emergentes, con particular énfasis en Brasil, India y China", "política exterior de las potencias emergentes vinculada a energía, con foco en América Latina"], "bio": ["Información no disponible"]},
    {"id": "ornela-fabani", "name": "Ornela Fabani", "surname": "Fabani", "givenNames": "Ornela", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Política exterior argentina hacia Medio Oriente", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "ornela_fabani@hotmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política exterior argentina hacia Medio Oriente"], "bio": ["Información no disponible"]},
    {"id": "jose-fernandez-alonso", "name": "José Fernández Alonso", "surname": "Fernández Alonso", "givenNames": "José", "tag": "Miembro titular", "role": "Dr. en Relaciones Internacionales (UNR)", "area": "Economía Política Internacional; finanzas internacionales; finanzas verdes", "degree": "Dr. en Relaciones Internacionales (UNR)", "email": "josefernandezalonso@conicet.gov.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Economía Política Internacional", "finanzas internacionales", "finanzas verdes"], "bio": ["Información no disponible"]},
    {"id": "lidia-gatti", "name": "Lidia Gatti", "surname": "Gatti", "givenNames": "Lidia", "tag": "Miembro titular", "role": "Mg. en Integración y Cooperación Internacional (UNR)", "area": "Derecho Internacional Público", "degree": "Mg. en Integración y Cooperación Internacional (UNR)", "email": "lidiavgatti@hotmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Derecho Internacional Público"], "bio": ["Información no disponible"]},
    {"id": "clarisa-giaccaglia", "name": "Clarisa Giaccaglia", "surname": "Giaccaglia", "givenNames": "Clarisa", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Poderes emergentes; coaliciones multilaterales: BRICS; seguimiento de políticas exteriores de India, Brasil y Sudáfrica; gobernanza global de Internet e IA; salud global", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "clarisa.giaccaglia@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Poderes emergentes", "coaliciones multilaterales: BRICS", "seguimiento de políticas exteriores de India, Brasil y Sudáfrica", "gobernanza global de Internet e IA", "salud global"], "bio": ["Información no disponible"]},
    {"id": "maria-elena-lorenzini", "name": "María Elena Lorenzini", "surname": "Lorenzini", "givenNames": "María Elena", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Política exterior argentina; teoría de las Relaciones Internacionales; relaciones bilaterales Argentina–Chile; política exterior de Venezuela", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "maria.lorenzini@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política exterior argentina", "teoría de las Relaciones Internacionales", "relaciones bilaterales Argentina–Chile", "política exterior de Venezuela"], "bio": ["Información no disponible"]},
    {"id": "agustina-marchetti", "name": "Agustina Marchetti", "surname": "Marchetti", "givenNames": "Agustina", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Política exterior de China hacia África y América Latina; cooperación en infraestructura; gobernanza de IA", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "agustina.marchetti@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política exterior de China hacia África y América Latina", "cooperación en infraestructura", "gobernanza de IA"], "bio": ["Información no disponible"]},
    {"id": "elsa-marinucci", "name": "Elsa Marinucci", "surname": "Marinucci", "givenNames": "Elsa", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "elsa.marinucci@gmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "carla-morasso", "name": "Carla Morasso", "surname": "Morasso", "givenNames": "Carla", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Política exterior argentina; política exterior africana; cooperación al desarrollo", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "carla.morasso@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política exterior argentina", "política exterior africana", "cooperación al desarrollo"], "bio": ["Información no disponible"]},
    {"id": "alicia-pia-morbiducci-ponce", "name": "Alicia Pía Morbiducci Ponce", "surname": "Morbiducci Ponce", "givenNames": "Alicia Pía", "tag": "Miembro titular", "role": "Mg. en Integración y Cooperación Internacional (UNR)", "area": "Información no disponible", "degree": "Mg. en Integración y Cooperación Internacional (UNR)", "email": "piamorbiducci@hotmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "ruben-paredes-rodriguez", "name": "Rubén Paredes Rodríguez", "surname": "Paredes Rodríguez", "givenNames": "Rubén", "tag": "Miembro titular", "role": "Dr. en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Dr. en Relaciones Internacionales (UNR)", "email": "ruben.paredes@fcpolit.unr.edu.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "gisela-pereyra-doval", "name": "Gisela Pereyra Doval", "surname": "Pereyra Doval", "givenNames": "Gisela", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Política exterior argentina y brasileña; derechas radicales y civilizacionismo como clave de análisis del orden internacional", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "gpdoval@gmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política exterior argentina y brasileña", "derechas radicales y civilizacionismo como clave de análisis del orden internacional"], "bio": ["Información no disponible"]},
    {"id": "carolina-pesuto", "name": "Carolina Pesuto", "surname": "Pesuto", "givenNames": "Carolina", "tag": "Miembro titular", "role": "Dra. en Relaciones Internacionales (UNR)", "area": "Política internacional subnacional y paradiplomacia; inserción profesional de especialistas en Relaciones Internacionales", "degree": "Dra. en Relaciones Internacionales (UNR)", "email": "caropesuto@gmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": ["Política internacional subnacional y paradiplomacia", "inserción profesional de especialistas en Relaciones Internacionales"], "bio": ["Información no disponible"]},
    {"id": "hugo-daniel-ramos", "name": "Hugo Daniel Ramos", "surname": "Ramos", "givenNames": "Hugo Daniel", "tag": "Miembro titular", "role": "Dr. en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Dr. en Relaciones Internacionales (UNR)", "email": "ramoshugo78@gmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "patricia-rojo", "name": "Patricia Rojo", "surname": "Rojo", "givenNames": "Patricia", "tag": "Miembro titular", "role": "Mg. en Ciencia Política y Sociología (FLACSO)", "area": "Información no disponible", "degree": "Mg. en Ciencia Política y Sociología (FLACSO)", "email": "patriciaarojo@gmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "ricardo-juan-torres", "name": "Ricardo Juan Torres", "surname": "Torres", "givenNames": "Ricardo Juan", "tag": "Miembro titular", "role": "Dr. en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Dr. en Relaciones Internacionales (UNR)", "email": "rtorres1957@hotmail.com", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "jose-maria-vitta", "name": "José María Vitta", "surname": "Vitta", "givenNames": "José María", "tag": "Miembro titular", "role": "Mg. en Integración y Cooperación Internacional (UNR)", "area": "Información no disponible", "degree": "Mg. en Integración y Cooperación Internacional (UNR)", "email": "josemariavitta@eproecon.com.ar", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "camila-abbondanzieri", "name": "Camila Abbondanzieri", "surname": "Abbondanzieri", "givenNames": "Camila", "tag": "Grupo joven", "role": "Doctora en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Doctora en Relaciones Internacionales (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "luisa-badala", "name": "Luisa Badala", "surname": "Badala", "givenNames": "Luisa", "tag": "Grupo joven", "role": "Mg. en Integración y Cooperación Internacional (UNR)", "area": "Información no disponible", "degree": "Mg. en Integración y Cooperación Internacional (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "fabian-drisun", "name": "Fabián Drisun", "surname": "Drisun", "givenNames": "Fabián", "tag": "Grupo joven", "role": "Licenciado en Relaciones Internacionales (UNR). Cursando Maestría en Integración y Cooperación Internacional (UNR)", "area": "Información no disponible", "degree": "Licenciado en Relaciones Internacionales (UNR). Cursando Maestría en Integración y Cooperación Internacional (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "josefina-garcia", "name": "Josefina García", "surname": "García", "givenNames": "Josefina", "tag": "Grupo joven", "role": "Licenciada en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Licenciada en Relaciones Internacionales (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "martin-jorge", "name": "Martín Jorge", "surname": "Jorge", "givenNames": "Martín", "tag": "Grupo joven", "role": "Licenciado en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Licenciado en Relaciones Internacionales (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "carolina-martinez", "name": "Carolina Martínez", "surname": "Martínez", "givenNames": "Carolina", "tag": "Grupo joven", "role": "Licenciada en Relaciones Internacionales (UNR). Cursando Doctorado en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Licenciada en Relaciones Internacionales (UNR). Cursando Doctorado en Relaciones Internacionales (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "santiago-molfino", "name": "Santiago Molfino", "surname": "Molfino", "givenNames": "Santiago", "tag": "Grupo joven", "role": "Doctor en Relaciones Internacionales (UNR) y en Estudios Internacionales (L'Orientale di Napoli)", "area": "Información no disponible", "degree": "Doctor en Relaciones Internacionales (UNR) y en Estudios Internacionales (L'Orientale di Napoli)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "maricruz-scotta", "name": "Maricruz Scotta", "surname": "Scotta", "givenNames": "Maricruz", "tag": "Grupo joven", "role": "Licenciada en Relaciones Internacionales (UNR). Cursando Doctorado en Relaciones Internacionales (UNR)", "area": "Información no disponible", "degree": "Licenciada en Relaciones Internacionales (UNR). Cursando Doctorado en Relaciones Internacionales (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "eugenia-suvire", "name": "Eugenia Suvire", "surname": "Suvire", "givenNames": "Eugenia", "tag": "Grupo joven", "role": "Licenciada en Relaciones Internacionales (UNR). Cursando Maestría en Integración y Cooperación Internacional (UNR)", "area": "Información no disponible", "degree": "Licenciada en Relaciones Internacionales (UNR). Cursando Maestría en Integración y Cooperación Internacional (UNR)", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "francisco-aldecoa", "name": "Francisco Aldecoa", "surname": "Aldecoa", "givenNames": "Francisco", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — España", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "celestino-del-arenal", "name": "Celestino Del Arenal", "surname": "Del Arenal", "givenNames": "Celestino", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — España", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "renato-di-nubila", "name": "Renato Di Nubila", "surname": "Di Nubila", "givenNames": "Renato", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Italia", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "miguel-angel-espeche-gil", "name": "Miguel Ángel Espeche Gil", "surname": "Espeche Gil", "givenNames": "Miguel Ángel", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "vicente-espeche-gil", "name": "Vicente Espeche Gil", "surname": "Espeche Gil", "givenNames": "Vicente", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "paulo-vicentini", "name": "Paulo Vicentini", "surname": "Vicentini", "givenNames": "Paulo", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Brasil", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "pietro-massina", "name": "Pietro Massina", "surname": "Massina", "givenNames": "Pietro", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Italia", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "luis-maira", "name": "Luis Maira", "surname": "Maira", "givenNames": "Luis", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Chile", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "carlos-moneta", "name": "Carlos Moneta", "surname": "Moneta", "givenNames": "Carlos", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "antonio-nino-rodriguez", "name": "Antonio Niño Rodríguez", "surname": "Niño Rodríguez", "givenNames": "Antonio", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — España", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "carlos-perez-llana", "name": "Carlos Pérez Llana", "surname": "Pérez Llana", "givenNames": "Carlos", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "julio-perez-serrano", "name": "Julio Pérez Serrano", "surname": "Pérez Serrano", "givenNames": "Julio", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — España", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "fernando-enrique-petrella", "name": "Fernando Enrique Petrella", "surname": "Petrella", "givenNames": "Fernando Enrique", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "hugo-suppo", "name": "Hugo Suppo", "surname": "Suppo", "givenNames": "Hugo", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Brasil", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "roberto-russell", "name": "Roberto Russell", "surname": "Russell", "givenNames": "Roberto", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "miguel-g-vallone", "name": "Miguel G. Vallone", "surname": "Vallone", "givenNames": "Miguel G.", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "luciano-zaccara", "name": "Luciano Zaccara", "surname": "Zaccara", "givenNames": "Luciano", "tag": "Miembro correspondiente", "role": "Miembro correspondiente — Qatar", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "luis-beltran", "name": "Luis Beltrán", "surname": "Beltrán", "givenNames": "Luis", "tag": "In memoriam", "role": "In memoriam — España", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "luis-dallanegra-pedraza", "name": "Luis Dallanegra Pedraza", "surname": "Dallanegra Pedraza", "givenNames": "Luis", "tag": "In memoriam", "role": "In memoriam — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "wilson-nerys-fernandez", "name": "Wilson Nerys Fernández", "surname": "Fernández", "givenNames": "Wilson Nerys", "tag": "In memoriam", "role": "In memoriam — Uruguay", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "hector-gros-espiell", "name": "Héctor Gros Espiell", "surname": "Gros Espiell", "givenNames": "Héctor", "tag": "In memoriam", "role": "In memoriam — Uruguay", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "helio-jaguaribe-de-mattos", "name": "Helio Jaguaribe de Mattos", "surname": "Jaguaribe de Mattos", "givenNames": "Helio", "tag": "In memoriam", "role": "In memoriam — Brasil", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "francisco-pinon", "name": "Francisco Piñón", "surname": "Piñón", "givenNames": "Francisco", "tag": "In memoriam", "role": "In memoriam — Argentina", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]},
    {"id": "luciano-tomassini", "name": "Luciano Tomassini", "surname": "Tomassini", "givenNames": "Luciano", "tag": "In memoriam", "role": "In memoriam — Chile", "area": "Información no disponible", "degree": "Información no disponible", "email": "", "office": "Información no disponible", "since": "Información no disponible", "lines": [], "bio": ["Información no disponible"]}
  ];

  /* -------------------------------------------------- Ejes de investigación
     Agrupan a los miembros por área de trabajo (más amplios que el campo
     `lines` de cada miembro, que es demasiado granular para armar grupos). */
  var researchAxes = [
    {
      id: 'politica-exterior-argentina', name: 'Política exterior argentina e historia diplomática',
      members: ['anabella-busso', 'alejandro-simonoff', 'andres-lofiego']
    },
    {
      id: 'teoria-orden-internacional', name: 'Teoría y orden internacional',
      members: ['gustavo-marini', 'federico-merke']
    },
    {
      id: 'integracion-regional', name: 'Integración regional, Mercosur y paradiplomacia',
      members: ['gabriela-marchetti', 'julieta-zelicovich', 'valeria-iglesias', 'florencia-vitali']
    },
    {
      id: 'cooperacion-sur-sur', name: 'Cooperación internacional, Sur-Sur y gobernanza global',
      members: ['gladys-lechini', 'carla-morasso', 'emanuel-porcelli', 'lucrecia-fernandez']
    },
    {
      id: 'relaciones-bilaterales', name: 'Relaciones bilaterales: Brasil, Chile y potencias medias',
      members: ['esteban-actis', 'marcelo-videtta', 'maria-elena-lorenzini']
    },
    {
      id: 'seguridad-defensa', name: 'Seguridad, defensa y conflictos internacionales',
      members: ['ruben-paredes', 'diego-cannizzaro', 'camila-rios']
    },
    {
      id: 'recursos-naturales', name: 'Recursos naturales, energía y medio ambiente',
      members: ['sabrina-olivera', 'natalia-ceppi', 'juan-pablo-sosa']
    },
    {
      id: 'genero-migraciones', name: 'Género, migraciones y derechos humanos',
      members: ['paula-guerra', 'victoria-zapata']
    },
    {
      id: 'derecho-internacional', name: 'Derecho internacional y regímenes internacionales',
      members: ['silvia-rosales', 'miryam-colacrai']
    },
    {
      id: 'asia-pacifico', name: 'Asia-Pacífico, comercio exterior y cadenas globales',
      members: ['hernan-fernandez', 'martin-ruggiero']
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
      date: '2026-07-18', dateLabel: '18 de julio de 2026', place: 'Aula 3, Maipú 1065',
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
      date: '2026-03-19', dateLabel: '19 de marzo de 2026', place: 'Aula 5, Maipú 1065',
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
     Cuatro líneas editoriales del centro. En cada una, `items[0]` es
     la última edición y se muestra como card destacada; el resto
     alimenta el carrusel de "ediciones anteriores".
     `kind: 'pdf'` → el ítem descarga assets/pdf/<id>.pdf (archivos de
     muestra de una página). `kind: 'external'` (MICI) → el ítem no
     tiene PDF propio: `externalUrl` apunta al Portal de Revistas UNR. */
  var pubCategoryOrder = ['cupea', 'serie', 'libros'];

  var publications = {
    cupea: {
      slug: 'cupea', name: 'CUPEA', kind: 'pdf',
      lead: 'Revista semestral del CERIR. Desde el número 123 inicia su “nueva época”, con referato acreditado.',
      items: [
        {
          id: 'cupea-144', year: 2026, number: 144, title: 'CUPEA N.º 144',
          short: 'Edición correspondiente a diciembre de 2026.',
          cover: 'assets/img/cupea-num-144.jpg',
          file: 'assets/pdf/cupea-144.pdf'
        },
        {
          id: 'cupea-143', year: 2026, number: 143, title: 'CUPEA N.º 143',
          short: 'Edición correspondiente a junio de 2026.',
          cover: 'assets/img/cupea-num-143.jpg',
          file: 'assets/pdf/cupea-143.pdf'
        },
        {
          id: 'cupea-142', year: 2025, number: 142, title: 'CUPEA N.º 142',
          short: 'Edición correspondiente a diciembre de 2025.',
          cover: 'assets/img/cupea-num-142.jpg',
          file: 'assets/pdf/cupea-142.pdf'
        },
        {
          id: 'cupea-141', year: 2025, number: 141, title: 'CUPEA N.º 141',
          short: 'Edición correspondiente a junio de 2025.',
          cover: 'assets/img/cupea-num-141.jpg',
          file: 'assets/pdf/cupea-141.pdf'
        }
      ]
    },
    mici: {
      slug: 'mici', name: 'Revista Integración y Cooperación Internacional', kind: 'external',
      siteUrl: 'https://revista-mici.unr.edu.ar/index.php/revistamici',
      lead: 'Revista de la Maestría en Relaciones Internacionales, editada en el Portal de Revistas de la UNR.',
      items: [
        {
          id: 'mici-43', year: 2026, label: 'N.º 43', title: 'Integración y Cooperación Internacional — N.º 43',
          short: 'Edición correspondiente a julio-diciembre de 2026.',
          cover: 'assets/img/mici-43.jpg',
          externalUrl: 'https://revista-mici.unr.edu.ar/index.php/revistamici'
        },
        {
          id: 'mici-42', year: 2026, label: 'N.º 42', title: 'Integración y Cooperación Internacional — N.º 42',
          short: 'Edición correspondiente a enero-junio de 2026.',
          cover: 'assets/img/mici-42.jpg',
          externalUrl: 'https://revista-mici.unr.edu.ar/index.php/revistamici'
        },
        {
          id: 'mici-41', year: 2025, label: 'N.º 41', title: 'Integración y Cooperación Internacional — N.º 41',
          short: 'Edición correspondiente a julio-diciembre de 2025.',
          cover: 'assets/img/mici-41.jpg',
          externalUrl: 'https://revista-mici.unr.edu.ar/index.php/revistamici'
        },
        {
          id: 'mici-40', year: 2025, label: 'N.º 40', title: 'Integración y Cooperación Internacional — N.º 40',
          short: 'Edición correspondiente a enero-junio de 2025.',
          cover: 'assets/img/mici-40.jpg',
          externalUrl: 'https://revista-mici.unr.edu.ar/index.php/revistamici'
        }
      ]
    },
    libros: {
      slug: 'libros', name: 'Libros de autores', kind: 'pdf',
      lead: 'Libros individuales escritos por integrantes del CERIR.',
      items: [
        {
          id: 'libros-busso-2024', year: 2024, pages: 264, title: 'Estados Unidos y América Latina en el nuevo tablero global',
          short: 'Un recorrido por la relación hemisférica desde el fin de la Guerra Fría hasta la actualidad.',
          author: 'anabella-busso',
          file: 'assets/pdf/libros-busso-2024.pdf'
        },
        {
          id: 'libros-simonoff-2022', year: 2022, pages: 312, title: 'Historia de la política exterior argentina. Tradiciones en disputa',
          short: 'Las tradiciones autonomista, realista y liberal en la política exterior argentina del siglo XX.',
          author: 'alejandro-simonoff',
          file: 'assets/pdf/libros-simonoff-2022.pdf'
        },
        {
          id: 'libros-lechini-2020', year: 2020, pages: 238, title: 'Sur-Sur. Argentina, África y la cooperación como política',
          short: 'La cooperación Sur-Sur como categoría analítica y como práctica de política exterior.',
          author: 'gladys-lechini',
          file: 'assets/pdf/libros-lechini-2020.pdf'
        },
        {
          id: 'libros-zelicovich-2019', year: 2019, pages: 196, title: 'La Argentina en la OMC. Veinticinco años de negociaciones comerciales',
          short: 'Un balance de la participación argentina en el régimen multilateral de comercio.',
          author: 'julieta-zelicovich',
          file: 'assets/pdf/libros-zelicovich-2019.pdf'
        }
      ]
    },
    serie: {
      slug: 'serie', name: 'Serie Política Exterior Argentina', kind: 'pdf',
      lead: 'La colección histórica del centro, publicada desde 1991.',
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
    }
  };

  /* -------------------------------------------------- Helpers */
  function byId(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  return {
    members: members,
    researchAxes: researchAxes,
    news: news,
    newsGroups: newsGroups,
    /* posteos de una taxonomía, del más nuevo al más viejo */
    newsByGroup: function (groupId) {
      return news.filter(function (n) { return n.group === groupId; })
                 .sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    },
    publications: publications,
    pubCategoryOrder: pubCategoryOrder,
    pubCategory: function (slug) { return publications[slug] || null; },
    /* busca un ítem por id en todas las categorías */
    pubItem: function (id) {
      for (var key in publications) {
        var cat = publications[key];
        var item = byId(cat.items, id);
        if (item) return { item: item, category: cat };
      }
      return null;
    },
    /* usa la tapa real del ítem (`cover`) si existe; si no, una de muestra */
    cover: function (p) { return p.cover || 'https://picsum.photos/seed/pub-' + p.id + '/900/1200'; },
    member: function (id) { return byId(members, id); },
    /* otros miembros que comparten al menos un eje de investigación con `id` */
    relatedMembers: function (id) {
      var ids = [];
      researchAxes.forEach(function (axis) {
        if (axis.members.indexOf(id) === -1) return;
        axis.members.forEach(function (mid) {
          if (mid !== id && ids.indexOf(mid) === -1) ids.push(mid);
        });
      });
      return ids.map(function (mid) { return byId(members, mid); }).filter(Boolean);
    },
    article: function (id) { return byId(news, id); },
    initials: function (name) {
      return name.split(' ').slice(0, 2).map(function (p) { return p[0]; }).join('');
    }
  };
})();
