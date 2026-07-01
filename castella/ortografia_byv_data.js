// ortografia_byv_data.js — Pool de palabras B y V (castellano 4º)
// e.w   = palabra con _ donde va B o V (siempre minúsculas)
// e.full = palabra completa
// e.ans  = 'b' | 'v'
// e.ctx  = frase con {w} — la palabra NO empieza la frase (evita mayúsculas)
// e.hint = regla

const BYV_POOL = [
  // ── Sustantivos con B ──
  {w:'_arco',     ans:'b', full:'barco',     ctx:'El {w} navegaba lentamente por el río.',             hint:'Sustantivo: barco → b'},
  {w:'_osque',    ans:'b', full:'bosque',    ctx:'Los animales vivían en el {w}.',                     hint:'Sustantivo: bosque → b'},
  {w:'_icicleta', ans:'b', full:'bicicleta', ctx:'Le regalaron una {w} roja para su cumpleaños.',      hint:'Sustantivo: bicicleta → b'},
  {w:'_allena',   ans:'b', full:'ballena',   ctx:'La {w} azul saltó muy alto fuera del agua.',         hint:'Animal: ballena → b'},
  {w:'_úho',      ans:'b', full:'búho',      ctx:'Un {w} vivía en el árbol más viejo del bosque.',     hint:'Animal: búho → b'},
  {w:'_razo',     ans:'b', full:'brazo',     ctx:'Se lastimó el {w} al caer de la bicicleta.',         hint:'Sustantivo: brazo → b'},
  {w:'_anco',     ans:'b', full:'banco',     ctx:'Descansó sentado en el {w} del parque.',             hint:'Sustantivo: banco → b'},
  {w:'_olsa',     ans:'b', full:'bolsa',     ctx:'Guardó los libros dentro de la {w}.',                hint:'Sustantivo: bolsa → b'},
  {w:'_ota',      ans:'b', full:'bota',      ctx:'Se puso la {w} para caminar por el barro.',          hint:'Sustantivo: bota → b'},
  {w:'_urro',     ans:'b', full:'burro',     ctx:'El {w} cargaba leña por el sendero.',                hint:'Animal: burro → b'},
  {w:'_risa',     ans:'b', full:'brisa',     ctx:'Una suave {w} refrescaba la tarde de verano.',       hint:'Sustantivo: brisa → b'},
  {w:'_ruja',     ans:'b', full:'bruja',     ctx:'En el cuento había una {w} con sombrero negro.',     hint:'Sustantivo: bruja → b'},
  {w:'_otón',     ans:'b', full:'botón',     ctx:'Se le cayó un {w} de la camisa al lavarlo.',         hint:'Sustantivo: botón → b'},
  {w:'_otella',   ans:'b', full:'botella',   ctx:'Bebió el zumo de la {w} de cristal.',                hint:'Sustantivo: botella → b'},
  {w:'_ar_a',     ans:'b', full:'barba',     ctx:'El abuelo tenía una larga {w} blanca.',              hint:'Sustantivo: barba → b'},
  {w:'_ur_uja',   ans:'b', full:'burbuja',   ctx:'Sopló la pajita y salieron muchas {w}s de jabón.',   hint:'Sustantivo: burbuja → b'},
  {w:'_arrio',    ans:'b', full:'barrio',    ctx:'En su {w} había una panadería muy famosa.',          hint:'Sustantivo: barrio → b'},
  {w:'_eso',      ans:'b', full:'beso',      ctx:'Le dio un {w} de buenas noches a su abuela.',        hint:'Sustantivo: beso → b'},
  {w:'_isonte',   ans:'b', full:'bisonte',   ctx:'El {w} americano es un animal enorme.',              hint:'Animal: bisonte → b'},
  {w:'_ola',      ans:'b', full:'bola',      ctx:'Lanzó la {w} al cesto y anotó un punto.',            hint:'Sustantivo: bola → b'},

  // ── Sustantivos con V ──
  {w:'_aca',      ans:'v', full:'vaca',      ctx:'La {w} pastaba tranquila en el prado.',              hint:'Animal: vaca → v'},
  {w:'_iento',    ans:'v', full:'viento',    ctx:'El {w} soplaba con mucha fuerza.',                   hint:'Sustantivo: viento → v'},
  {w:'_erano',    ans:'v', full:'verano',    ctx:'En {w} hace mucho calor en la playa.',               hint:'Estación del año: verano → v'},
  {w:'_olcán',    ans:'v', full:'volcán',    ctx:'El {w} echaba humo y cenizas.',                      hint:'Sustantivo: volcán → v'},
  {w:'_estido',   ans:'v', full:'vestido',   ctx:'Llevaba un bonito {w} azul.',                        hint:'Sustantivo: vestido → v'},
  {w:'_apor',     ans:'v', full:'vapor',     ctx:'La olla echaba {w} por la tapa.',                    hint:'Sustantivo: vapor → v'},
  {w:'_ela',      ans:'v', full:'vela',      ctx:'Encendieron una {w} cuando se fue la luz.',          hint:'Sustantivo: vela → v'},
  {w:'_enado',    ans:'v', full:'venado',    ctx:'Un {w} bebía agua en el río del bosque.',            hint:'Animal: venado → v'},
  {w:'_iolín',    ans:'v', full:'violín',    ctx:'Aprendió a tocar el {w} desde los cinco años.',      hint:'Sustantivo: violín → v'},
  {w:'_alor',     ans:'v', full:'valor',     ctx:'Hizo falta mucho {w} para hablar en público.',       hint:'Sustantivo: valor → v'},
  {w:'_ivienda',  ans:'v', full:'vivienda',  ctx:'Construyeron una nueva {w} junto al río.',           hint:'Sustantivo: vivienda → v'},
  {w:'_ista',     ans:'v', full:'vista',     ctx:'Desde la montaña la {w} era espectacular.',          hint:'Sustantivo: vista → v'},
  {w:'_eloz',     ans:'v', full:'veloz',     ctx:'El guepardo es el animal más {w} del planeta.',      hint:'Adjetivo: veloz → v'},
  {w:'_erdad',    ans:'v', full:'verdad',    ctx:'Siempre hay que decir la {w}.',                      hint:'Sustantivo: verdad → v'},
  {w:'_entana',   ans:'v', full:'ventana',   ctx:'Abrió la {w} para que entrase el aire fresco.',      hint:'Sustantivo: ventana → v'},
  {w:'_acío',     ans:'v', full:'vacío',     ctx:'El frasco estaba completamente {w}.',                hint:'Adjetivo: vacío → v'},
  {w:'_uelta',    ans:'v', full:'vuelta',    ctx:'Dio una {w} al parque corriendo.',                   hint:'Sustantivo: vuelta → v'},
  {w:'_entaja',   ans:'v', full:'ventaja',   ctx:'Llegar antes les dio una gran {w}.',                 hint:'Sustantivo: ventaja → v'},
  {w:'_aliente',  ans:'v', full:'valiente',  ctx:'El bombero fue muy {w} al entrar al fuego.',         hint:'Adjetivo: valiente → v'},

  // ── Imperfecto -aba → siempre b ──
  {w:'canta_a',   ans:'b', full:'cantaba',   ctx:'Ella {w} canciones mientras cocinaba.',              hint:'Imperfecto -aba: siempre b'},
  {w:'juga_a',    ans:'b', full:'jugaba',    ctx:'Pedro {w} en el parque con sus amigos.',             hint:'Imperfecto -aba: siempre b'},
  {w:'esta_a',    ans:'b', full:'estaba',    ctx:'El niño {w} muy cansado después del partido.',       hint:'Imperfecto -aba: siempre b'},
  {w:'mira_a',    ans:'b', full:'miraba',    ctx:'María {w} por la ventana cada tarde.',               hint:'Imperfecto -aba: siempre b'},
  {w:'ha_ía',     ans:'b', full:'había',     ctx:'Una vez {w} un dragón muy amable.',                  hint:'Imperfecto de «haber»: siempre b'},
  {w:'salta_a',   ans:'b', full:'saltaba',   ctx:'El canguro {w} sin parar por el campo.',             hint:'Imperfecto -aba: siempre b'},
  {w:'pinta_a',   ans:'b', full:'pintaba',   ctx:'Ella {w} cuadros muy coloridos en su estudio.',      hint:'Imperfecto -aba: siempre b'},
  {w:'nada_a',    ans:'b', full:'nadaba',    ctx:'El niño {w} muy bien en la piscina.',                hint:'Imperfecto -aba: siempre b'},
  {w:'escucha_a', ans:'b', full:'escuchaba', ctx:'Siempre {w} música mientras hacía los deberes.',     hint:'Imperfecto -aba: siempre b'},
  {w:'camina_a',  ans:'b', full:'caminaba',  ctx:'Por las mañanas {w} una hora con su perro.',         hint:'Imperfecto -aba: siempre b'},
  {w:'habla_a',   ans:'b', full:'hablaba',   ctx:'El maestro {w} muy despacio para que lo entendieran.',hint:'Imperfecto -aba: siempre b'},
  {w:'baila_a',   ans:'b', full:'bailaba',   ctx:'Toda la clase {w} en la fiesta de fin de curso.',    hint:'Imperfecto -aba: siempre b'},
  {w:'trabaja_a', ans:'b', full:'trabajaba', ctx:'Su padre {w} muchas horas en la tienda.',            hint:'Imperfecto -aba: siempre b'},
  {w:'llora_a',   ans:'b', full:'lloraba',   ctx:'El bebé {w} porque tenía hambre.',                   hint:'Imperfecto -aba: siempre b'},
  {w:'pensa_a',   ans:'b', full:'pensaba',   ctx:'La científica {w} en una solución al problema.',     hint:'Imperfecto -aba: siempre b'},
  {w:'compra_a',  ans:'b', full:'compraba',  ctx:'Cada sábado {w} fruta fresca en el mercado.',        hint:'Imperfecto -aba: siempre b'},
  {w:'espera_a',  ans:'b', full:'esperaba',  ctx:'La niña {w} el autobús bajo la lluvia.',             hint:'Imperfecto -aba: siempre b'},
  {w:'prepara_a', ans:'b', full:'preparaba', ctx:'La cocinera {w} el menú del día.',                   hint:'Imperfecto -aba: siempre b'},
  {w:'observa_a', ans:'b', full:'observaba', ctx:'El científico {w} el cielo con su telescopio.',      hint:'Imperfecto -aba: siempre b'},
  {w:'recorda_a', ans:'b', full:'recordaba', ctx:'Siempre {w} el día en que ganaron el partido.',      hint:'Imperfecto -aba: siempre b'},
  {w:'lleva_a',   ans:'b', full:'llevaba',   ctx:'Siempre {w} la mochila roja al colegio.',            hint:'Imperfecto -aba: siempre b'},
  {w:'conta_a',   ans:'b', full:'contaba',   ctx:'La abuela {w} cuentos antes de dormir.',             hint:'Imperfecto -aba: siempre b'},
  {w:'ayuda_a',   ans:'b', full:'ayudaba',   ctx:'Siempre {w} a sus compañeros con los deberes.',      hint:'Imperfecto -aba: siempre b'},

  // ── mb → siempre b ──
  {w:'tam_ién',   ans:'b', full:'también',   ctx:'El niño {w} quería venir al parque.',                hint:'mb → siempre b'},
  {w:'som_ra',    ans:'b', full:'sombra',    ctx:'Descansaron bajo la {w} del árbol.',                 hint:'mb → siempre b'},
  {w:'ham_re',    ans:'b', full:'hambre',    ctx:'Tenía mucha {w} después de clase.',                  hint:'mb → siempre b'},
  {w:'am_iente',  ans:'b', full:'ambiente',  ctx:'El {w} de la fiesta era muy alegre.',                hint:'mb → siempre b'},
  {w:'hom_re',    ans:'b', full:'hombre',    ctx:'El {w} llevaba una mochila muy pesada.',             hint:'mb → siempre b'},
  {w:'nom_re',    ans:'b', full:'nombre',    ctx:'¿Cuál es tu {w}? — Me llamo Lucía.',                 hint:'mb → siempre b'},
  {w:'cam_io',    ans:'b', full:'cambio',    ctx:'La temperatura sufrió un gran {w} por la noche.',    hint:'mb → siempre b'},
  {w:'bom_ero',   ans:'b', full:'bombero',   ctx:'El {w} apagó el incendio rápidamente.',              hint:'mb → siempre b'},
  {w:'tim_re',    ans:'b', full:'timbre',    ctx:'Pulsó el {w} de la puerta tres veces.',              hint:'mb → siempre b'},
  {w:'tum_a',     ans:'b', full:'tumba',     ctx:'El explorador encontró una antigua {w}.',            hint:'mb → siempre b'},
  {w:'lom_riz',   ans:'b', full:'lombriz',   ctx:'La {w} se movía por la tierra húmeda.',              hint:'mb → siempre b'},
  {w:'cum_re',    ans:'b', full:'cumbre',    ctx:'Llegaron a la {w} de la montaña al mediodía.',       hint:'mb → siempre b'},

  // ── nv → siempre v ──
  {w:'in_ierno',  ans:'v', full:'invierno',  ctx:'En {w} nieva mucho en la montaña.',                  hint:'nv → siempre v'},
  {w:'en_iar',    ans:'v', full:'enviar',    ctx:'Quiero {w} una carta a mi abuela.',                  hint:'nv → siempre v'},
  {w:'in_itar',   ans:'v', full:'invitar',   ctx:'Quiere {w} a todos sus amigos a la fiesta.',         hint:'nv → siempre v'},
  {w:'en_olver',  ans:'v', full:'envolver',  ctx:'Fue a {w} el regalo con papel de colores.',          hint:'nv → siempre v'},
  {w:'con_ocar',  ans:'v', full:'convocar',  ctx:'El director decidió {w} una reunión urgente.',       hint:'nv → siempre v'},
  {w:'in_ento',   ans:'v', full:'invento',   ctx:'El teléfono fue un gran {w} del siglo XIX.',         hint:'nv → siempre v'},
  {w:'en_ase',    ans:'v', full:'envase',    ctx:'Tiró el {w} de plástico al contenedor amarillo.',    hint:'nv → siempre v'},
  {w:'in_isible', ans:'v', full:'invisible', ctx:'El superhéroe se volvió {w} de repente.',            hint:'nv → siempre v'},

  // ── Verbos con V ──
  {w:'_ivía',     ans:'v', full:'vivía',     ctx:'La niña {w} en un castillo muy lejano.',             hint:'Verbo vivir → v'},
  {w:'_olver',    ans:'v', full:'volver',    ctx:'Prometió {w} a casa antes de las ocho.',             hint:'Verbo volver → v'},
];
