// ortografia_jg_data.js — Pool de palabras J y G (castellano 4º)
// e.w   = palabra con _ donde va J o G (siempre minúsculas)
// e.full = palabra completa
// e.ans  = 'j' | 'g'
// e.ctx  = frase con {w} — la palabra NO empieza la frase (evita mayúsculas)
// e.hint = regla

const JG_POOL = [
  // ── ja / jo / ju → siempre j ──
  {w:'_abón',    ans:'j', full:'jabón',    ctx:'Se lavó las manos con {w}.',                        hint:'ja → siempre j'},
  {w:'_oven',    ans:'j', full:'joven',    ctx:'El {w} corría muy rápido.',                         hint:'jo → siempre j'},
  {w:'_ugar',    ans:'j', full:'jugar',    ctx:'Le encantaba {w} al fútbol.',                       hint:'ju → siempre j'},
  {w:'_ardín',   ans:'j', full:'jardín',   ctx:'Las flores del {w} eran muy bonitas.',              hint:'ja → siempre j'},
  {w:'_irafa',   ans:'j', full:'jirafa',   ctx:'La {w} tenía el cuello muy largo.',                 hint:'ji → siempre j (animal de origen africano)'},
  {w:'_efe',     ans:'j', full:'jefe',     ctx:'El {w} dio las instrucciones al equipo.',           hint:'je → j en palabras de origen no latino'},
  {w:'_inete',   ans:'j', full:'jinete',   ctx:'El {w} montaba el caballo con elegancia.',          hint:'ji → siempre j'},
  // ── -aje / -eje → siempre j ──
  {w:'via_e',    ans:'j', full:'viaje',    ctx:'El {w} en tren fue muy divertido.',                 hint:'-aje → siempre j'},
  {w:'pasa_e',   ans:'j', full:'pasaje',   ctx:'Compró el {w} del barco.',                          hint:'-aje → siempre j'},
  {w:'persona_e',ans:'j', full:'personaje',ctx:'El {w} principal era un héroe valiente.',           hint:'-aje → siempre j'},
  {w:'mensa_e',  ans:'j', full:'mensaje',  ctx:'Le envió un {w} por el teléfono.',                  hint:'-aje → siempre j'},
  // ── ga / go / gu → siempre g ──
  {w:'_ato',     ans:'g', full:'gato',     ctx:'El {w} dormía en el sofá.',                         hint:'ga → siempre g'},
  {w:'_usano',   ans:'g', full:'gusano',   ctx:'Un {w} salió de la manzana.',                       hint:'gu → siempre g'},
  {w:'_ota',     ans:'g', full:'gota',     ctx:'Una {w} de agua cayó en su nariz.',                 hint:'go → siempre g'},
  {w:'_oma',     ans:'g', full:'goma',     ctx:'Necesitaba una {w} para borrar.',                   hint:'go → siempre g'},
  {w:'_alleta',  ans:'g', full:'galleta',  ctx:'Comió una {w} de chocolate.',                       hint:'ga → siempre g'},
  // ── ge / gi → g (sonido suave) ──
  {w:'_ente',    ans:'g', full:'gente',    ctx:'Había mucha {w} en la plaza.',                      hint:'ge → g cuando suena suave'},
  {w:'_irasol',  ans:'g', full:'girasol',  ctx:'El {w} siempre mira hacia el sol.',                 hint:'gi → g cuando suena suave'},
  {w:'_enio',    ans:'g', full:'genio',    ctx:'Era un {w} de las matemáticas.',                    hint:'ge → g cuando suena suave'},
  {w:'_igante',  ans:'g', full:'gigante',  ctx:'El castillo del {w} era enorme.',                   hint:'gi → g cuando suena suave'},
  // ── je / ji → j (sonido fuerte amb e/i) ──
  {w:'_eringa',  ans:'j', full:'jeringa',  ctx:'La enfermera usó una {w}.',                         hint:'je → j cuando suena fuerte'},
  {w:'_itomate', ans:'j', full:'jitomate', ctx:'Añadió {w} a la ensalada.',                         hint:'ji → j cuando suena fuerte'},
  // ── Mixto ──
  {w:'_ugo',     ans:'j', full:'jugo',     ctx:'Bebió un {w} de naranja.',                          hint:'ju → siempre j'},
  {w:'_imnasia', ans:'g', full:'gimnasia', ctx:'Hacía {w} cada mañana.',                            hint:'gi → g (préstamo del griego: gymnos)'},
];
