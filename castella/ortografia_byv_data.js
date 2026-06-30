// ortografia_byv_data.js — Pool de palabras B y V (castellano 4º)
// e.w   = palabra con _ donde va B o V (siempre minúsculas)
// e.full = palabra completa
// e.ans  = 'b' | 'v'
// e.ctx  = frase con {w} — la palabra NO empieza la frase (evita mayúsculas)
// e.hint = regla

const BYV_POOL = [
  {w:'_arco',     ans:'b', full:'barco',     ctx:'El {w} navegaba lentamente por el río.',             hint:'Sustantivo: barco → b'},
  {w:'_osque',    ans:'b', full:'bosque',    ctx:'Los animales vivían en el {w}.',                     hint:'Sustantivo: bosque → b'},
  {w:'_icicleta', ans:'b', full:'bicicleta', ctx:'Le regalaron una {w} roja para su cumpleaños.',      hint:'Sustantivo: bicicleta → b'},
  {w:'_allena',   ans:'b', full:'ballena',   ctx:'La {w} azul saltó muy alto fuera del agua.',         hint:'Animal: ballena → b'},
  {w:'_úho',      ans:'b', full:'búho',      ctx:'Un {w} vivía en el árbol más viejo del bosque.',     hint:'Animal: búho → b'},
  {w:'_aca',      ans:'v', full:'vaca',      ctx:'La {w} pastaba tranquila en el prado.',              hint:'Animal: vaca → v'},
  {w:'_iento',    ans:'v', full:'viento',    ctx:'El {w} soplaba con mucha fuerza.',                   hint:'Sustantivo: viento → v'},
  {w:'_erano',    ans:'v', full:'verano',    ctx:'En {w} hace mucho calor en la playa.',               hint:'Estación del año: verano → v'},
  {w:'_olcán',    ans:'v', full:'volcán',    ctx:'El {w} echaba humo y cenizas.',                      hint:'Sustantivo: volcán → v'},
  {w:'_estido',   ans:'v', full:'vestido',   ctx:'Llevaba un bonito {w} azul.',                        hint:'Sustantivo: vestido → v'},
  {w:'canta_a',   ans:'b', full:'cantaba',   ctx:'Ella {w} canciones mientras cocinaba.',              hint:'Imperfecto -aba: siempre b'},
  {w:'juga_a',    ans:'b', full:'jugaba',    ctx:'Pedro {w} en el parque con sus amigos.',             hint:'Imperfecto -aba: siempre b'},
  {w:'esta_a',    ans:'b', full:'estaba',    ctx:'El niño {w} muy cansado después del partido.',       hint:'Imperfecto -aba: siempre b'},
  {w:'mira_a',    ans:'b', full:'miraba',    ctx:'María {w} por la ventana cada tarde.',               hint:'Imperfecto -aba: siempre b'},
  {w:'ha_ía',     ans:'b', full:'había',     ctx:'Una vez {w} un dragón muy amable.',                  hint:'Imperfecto de «haber»: siempre b'},
  {w:'tam_ién',   ans:'b', full:'también',   ctx:'El niño {w} quería venir al parque.',                hint:'mb → siempre b'},
  {w:'som_ra',    ans:'b', full:'sombra',    ctx:'Descansaron bajo la {w} del árbol.',                 hint:'mb → siempre b'},
  {w:'ham_re',    ans:'b', full:'hambre',    ctx:'Tenía mucha {w} después de clase.',                  hint:'mb → siempre b'},
  {w:'am_iente',  ans:'b', full:'ambiente',  ctx:'El {w} de la fiesta era muy alegre.',                hint:'mb → siempre b'},
  {w:'in_ierno',  ans:'v', full:'invierno',  ctx:'En {w} nieva mucho en la montaña.',                  hint:'nv → siempre v'},
  {w:'en_iar',    ans:'v', full:'enviar',    ctx:'Quiero {w} una carta a mi abuela.',                  hint:'nv → siempre v'},
  {w:'in_itar',   ans:'v', full:'invitar',   ctx:'Quiere {w} a todos sus amigos a la fiesta.',         hint:'nv → siempre v'},
  {w:'_ivía',     ans:'v', full:'vivía',     ctx:'La niña {w} en un castillo muy lejano.',             hint:'Verbo vivir → v'},
  {w:'_olver',    ans:'v', full:'volver',    ctx:'Prometió {w} a casa antes de las ocho.',             hint:'Verbo volver → v'},
];
