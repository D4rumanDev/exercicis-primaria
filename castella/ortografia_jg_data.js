// ortografia_jg_data.js — Pool de palabras J y G (castellano 4º)
// e.w   = palabra con _ donde va J o G (siempre minúsculas)
// e.full = palabra completa
// e.ans  = 'j' | 'g'
// e.ctx  = frase con {w} — la palabra NO empieza la frase (evita mayúsculas)
// e.hint = regla

const JG_POOL = [
  // ── ja / jo / ju → siempre j ──
  {w:'_abón',     ans:'j', full:'jabón',     ctx:'Se lavó las manos con {w}.',                        hint:'ja → siempre j'},
  {w:'_oven',     ans:'j', full:'joven',     ctx:'El {w} corría muy rápido.',                         hint:'jo → siempre j'},
  {w:'_ugar',     ans:'j', full:'jugar',     ctx:'Le encantaba {w} al fútbol.',                       hint:'ju → siempre j'},
  {w:'_ardín',    ans:'j', full:'jardín',    ctx:'Las flores del {w} eran muy bonitas.',              hint:'ja → siempre j'},
  {w:'_irafa',    ans:'j', full:'jirafa',    ctx:'La {w} tenía el cuello muy largo.',                 hint:'ji → siempre j'},
  {w:'_efe',      ans:'j', full:'jefe',      ctx:'El {w} dio las instrucciones al equipo.',           hint:'je → j en palabras de este origen'},
  {w:'_inete',    ans:'j', full:'jinete',    ctx:'El {w} montaba el caballo con elegancia.',          hint:'ji → siempre j'},
  {w:'_arra',     ans:'j', full:'jarra',     ctx:'Sirvió el agua en una {w} de cristal.',             hint:'ja → siempre j'},
  {w:'_amón',     ans:'j', full:'jamón',     ctx:'El bocadillo de {w} es muy sabroso.',               hint:'ja → siempre j'},
  {w:'_aguar',    ans:'j', full:'jaguar',    ctx:'El {w} es el felino más grande de América.',        hint:'ja → siempre j'},
  {w:'_aula',     ans:'j', full:'jaula',     ctx:'El pájaro cantaba alegremente en su {w}.',          hint:'ja → siempre j'},
  {w:'_abalí',    ans:'j', full:'jabalí',    ctx:'Un {w} salió del bosque al caer la noche.',         hint:'ja → siempre j'},
  {w:'_oya',      ans:'j', full:'joya',      ctx:'Le regalaron una {w} brillante de oro.',            hint:'jo → siempre j'},
  {w:'_oroba',    ans:'j', full:'joroba',    ctx:'El camello tiene una {w} en la espalda.',           hint:'jo → siempre j'},
  {w:'_uguete',   ans:'j', full:'juguete',   ctx:'El niño rompió su {w} favorito.',                   hint:'ju → siempre j'},
  {w:'_ungla',    ans:'j', full:'jungla',    ctx:'El explorador se perdió en la {w} tropical.',       hint:'ju → siempre j'},
  {w:'_unio',     ans:'j', full:'junio',     ctx:'El verano empieza en el mes de {w}.',               hint:'ju → siempre j'},
  {w:'_uzgar',    ans:'j', full:'juzgar',    ctx:'No debemos {w} a los demás sin conocerlos.',        hint:'ju → siempre j'},
  {w:'_uicio',    ans:'j', full:'juicio',    ctx:'El juez tomó una decisión con mucho {w}.',          hint:'ju → siempre j'},
  {w:'_untos',    ans:'j', full:'juntos',    ctx:'Trabajaron {w} para resolver el problema.',         hint:'ju → siempre j'},
  {w:'_ersey',    ans:'j', full:'jersey',    ctx:'Se puso un {w} de lana porque hacía frío.',         hint:'je → j cuando suena fuerte'},

  // ── -aje / -eje → siempre j ──
  {w:'via_e',     ans:'j', full:'viaje',     ctx:'El {w} en tren fue muy divertido.',                 hint:'-aje → siempre j'},
  {w:'pasa_e',    ans:'j', full:'pasaje',    ctx:'Compró el {w} del barco.',                          hint:'-aje → siempre j'},
  {w:'persona_e', ans:'j', full:'personaje', ctx:'El {w} principal era un héroe valiente.',           hint:'-aje → siempre j'},
  {w:'mensa_e',   ans:'j', full:'mensaje',   ctx:'Le envió un {w} por el teléfono.',                  hint:'-aje → siempre j'},
  {w:'tra_e',     ans:'j', full:'traje',     ctx:'Se puso un {w} elegante para la fiesta.',           hint:'-aje → siempre j'},
  {w:'gara_e',    ans:'j', full:'garaje',    ctx:'El coche está guardado en el {w}.',                 hint:'-aje → siempre j'},
  {w:'equipa_e',  ans:'j', full:'equipaje',  ctx:'Facturó el {w} antes de subir al avión.',           hint:'-aje → siempre j'},
  {w:'lengua_e',  ans:'j', full:'lenguaje',  ctx:'El {w} es la forma que tenemos de comunicarnos.',   hint:'-aje → siempre j'},
  {w:'cora_e',    ans:'j', full:'coraje',    ctx:'Necesitó mucho {w} para subir al escenario.',       hint:'-aje → siempre j'},
  {w:'olea_e',    ans:'j', full:'oleaje',    ctx:'El {w} del mar era muy fuerte ese día.',            hint:'-aje → siempre j'},
  {w:'tatua_e',   ans:'j', full:'tatuaje',   ctx:'Dibujó un {w} de mentira en el brazo.',             hint:'-aje → siempre j'},
  {w:'pea_e',     ans:'j', full:'peaje',     ctx:'Pagaron el {w} para cruzar el puente.',             hint:'-aje → siempre j'},
  {w:'paisa_e',   ans:'j', full:'paisaje',   ctx:'El {w} de la montaña era impresionante.',           hint:'-aje → siempre j'},
  {w:'pluma_e',   ans:'j', full:'plumaje',   ctx:'El pavo real luce un bonito {w} de colores.',       hint:'-aje → siempre j'},
  {w:'venda_e',   ans:'j', full:'vendaje',   ctx:'La enfermera puso un {w} en la herida.',            hint:'-aje → siempre j'},
  {w:'maquilla_e',ans:'j', full:'maquillaje',ctx:'Se puso {w} para la obra de teatro del colegio.',   hint:'-aje → siempre j'},
  {w:'folla_e',   ans:'j', full:'follaje',   ctx:'El bosque tenía un {w} verde y espeso.',            hint:'-aje → siempre j'},
  {w:'roda_e',    ans:'j', full:'rodaje',    ctx:'El {w} de la película duró tres meses.',            hint:'-aje → siempre j'},
  {w:'camufla_e', ans:'j', full:'camuflaje', ctx:'El camaleón usa el {w} para esconderse.',           hint:'-aje → siempre j'},

  // ── ga / go / gu → siempre g ──
  {w:'_ato',      ans:'g', full:'gato',      ctx:'El {w} dormía en el sofá.',                         hint:'ga → siempre g'},
  {w:'_usano',    ans:'g', full:'gusano',    ctx:'Un {w} salió de la manzana.',                       hint:'gu → siempre g'},
  {w:'_ota',      ans:'g', full:'gota',      ctx:'Una {w} de agua cayó en su nariz.',                 hint:'go → siempre g'},
  {w:'_oma',      ans:'g', full:'goma',      ctx:'Necesitaba una {w} para borrar.',                   hint:'go → siempre g'},
  {w:'_alleta',   ans:'g', full:'galleta',   ctx:'Comió una {w} de chocolate.',                       hint:'ga → siempre g'},
  {w:'_allina',   ans:'g', full:'gallina',   ctx:'La {w} pone huevos todos los días.',                hint:'ga → siempre g'},
  {w:'_asolina',  ans:'g', full:'gasolina',  ctx:'Pararon en la gasolinera a poner {w}.',             hint:'ga → siempre g'},
  {w:'_anso',     ans:'g', full:'ganso',     ctx:'El {w} nadaba en el lago tranquilo.',               hint:'ga → siempre g'},
  {w:'_anar',     ans:'g', full:'ganar',     ctx:'El equipo quería {w} la final.',                    hint:'ga → siempre g'},
  {w:'_aviota',   ans:'g', full:'gaviota',   ctx:'La {w} volaba sobre las olas del mar.',             hint:'ga → siempre g'},
  {w:'_arbanzo',  ans:'g', full:'garbanzo',  ctx:'El cocido lleva {w}s, chorizo y verduras.',         hint:'ga → siempre g'},
  {w:'_orra',     ans:'g', full:'gorra',     ctx:'Se puso la {w} de lana para protegerse del frío.',  hint:'go → siempre g'},
  {w:'_orila',    ans:'g', full:'gorila',    ctx:'El {w} es un primate muy inteligente.',             hint:'go → siempre g'},
  {w:'_olpe',     ans:'g', full:'golpe',     ctx:'Dio un {w} en la puerta con los nudillos.',         hint:'go → siempre g'},
  {w:'_olosina',  ans:'g', full:'golosina',  ctx:'Compró una {w} en la tienda de dulces.',            hint:'go → siempre g'},
  {w:'_uante',    ans:'g', full:'guante',    ctx:'Se puso el {w} de portero antes del partido.',      hint:'gua → siempre g'},
  {w:'_uerra',    ans:'g', full:'guerra',    ctx:'En los cuentos siempre acaba bien tras la {w}.',    hint:'gue → siempre g'},
  {w:'_uitarra',  ans:'g', full:'guitarra',  ctx:'Tocó una canción a la {w} en la hoguera.',          hint:'gui → siempre g'},
  {w:'_uisante',  ans:'g', full:'guisante',  ctx:'El conejo comía {w}s del huerto.',                  hint:'gui → siempre g'},
  {w:'_uapo',     ans:'g', full:'guapo',     ctx:'Todos decían que era un niño muy {w}.',             hint:'gua → siempre g'},

  // ── ge / gi → g (sonido suave) ──
  {w:'_ente',     ans:'g', full:'gente',     ctx:'Había mucha {w} en la plaza.',                      hint:'ge → g cuando suena suave'},
  {w:'_irasol',   ans:'g', full:'girasol',   ctx:'El {w} siempre mira hacia el sol.',                 hint:'gi → g cuando suena suave'},
  {w:'_enio',     ans:'g', full:'genio',     ctx:'Era un {w} de las matemáticas.',                    hint:'ge → g cuando suena suave'},
  {w:'_igante',   ans:'g', full:'gigante',   ctx:'El castillo del {w} era enorme.',                   hint:'gi → g cuando suena suave'},
  {w:'_eranio',   ans:'g', full:'geranio',   ctx:'El {w} del balcón tenía flores rojas.',             hint:'ge → g cuando suena suave'},
  {w:'_esto',     ans:'g', full:'gesto',     ctx:'Hizo un {w} amable con la mano.',                   hint:'ge → g cuando suena suave'},
  {w:'_imnasio',  ans:'g', full:'gimnasio',  ctx:'Fue al {w} a entrenar después de clase.',           hint:'gi → g cuando suena suave'},
  {w:'_elatina',  ans:'g', full:'gelatina',  ctx:'De postre tomó una {w} de fresa.',                  hint:'ge → g cuando suena suave'},
  {w:'_irar',     ans:'g', full:'girar',     ctx:'La rueda de la noria empezó a {w}.',                hint:'gi → g cuando suena suave'},

  // ── je / ji → j (sonido fuerte con e/i) ──
  {w:'_eringa',   ans:'j', full:'jeringa',   ctx:'La enfermera usó una {w}.',                         hint:'je → j cuando suena fuerte'},
  {w:'_itomate',  ans:'j', full:'jitomate',  ctx:'Añadió {w} a la ensalada.',                         hint:'ji → j cuando suena fuerte'},

  // ── Mixto ──
  {w:'_ugo',      ans:'j', full:'jugo',      ctx:'Bebió un {w} de naranja.',                          hint:'ju → siempre j'},
  {w:'_imnasia',  ans:'g', full:'gimnasia',  ctx:'Hacía {w} cada mañana.',                            hint:'gi → g (préstamo del griego)'},
];
