// ortografia_lly_data.js — Pool de palabras LL e Y (castellano 4º)
// e.w   = palabra con _ donde va LL o Y (siempre minúsculas)
// e.full = palabra completa
// e.ans  = 'll' | 'y'
// e.ctx  = frase con {w} — la palabra NO empieza la frase (evita mayúsculas)
// e.hint = regla

const LLY_POOL = [
  // ── LL al inicio ──
  {w:'_amar',   ans:'ll', full:'llamar',   ctx:'Quería {w} a su amiga por teléfono.',               hint:'ll- al inicio de palabra → ll'},
  {w:'_over',   ans:'ll', full:'llover',   ctx:'Va a {w} toda la tarde, lleva el paraguas.',        hint:'ll- al inicio de palabra → ll'},
  {w:'_ave',    ans:'ll', full:'llave',    ctx:'Perdió la {w} de la puerta de casa.',               hint:'ll- al inicio de palabra → ll'},
  {w:'_eno',    ans:'ll', full:'lleno',    ctx:'El vaso estaba {w} hasta arriba.',                  hint:'ll- al inicio de palabra → ll'},
  {w:'_orar',   ans:'ll', full:'llorar',   ctx:'El niño empezó a {w} de alegría.',                  hint:'ll- al inicio de palabra → ll'},
  {w:'_uvia',   ans:'ll', full:'lluvia',   ctx:'La {w} mojó todos los paraguas del colegio.',       hint:'ll- al inicio de palabra → ll'},
  {w:'_egar',   ans:'ll', full:'llegar',   ctx:'Prometió {w} a tiempo a la reunión.',               hint:'ll- al inicio de palabra → ll'},
  {w:'_amar',   ans:'ll', full:'llamar',   ctx:'Fue a {w} a la puerta muy fuerte.',                 hint:'ll- al inicio de palabra → ll'},
  // ── LL en el medio ──
  {w:'ca_e',    ans:'ll', full:'calle',    ctx:'Cruzaron la {w} con mucho cuidado.',                hint:'ll en el interior → ll'},
  {w:'po_o',    ans:'ll', full:'pollo',    ctx:'Comieron {w} asado para cenar.',                    hint:'ll en el interior → ll'},
  {w:'si_a',    ans:'ll', full:'silla',    ctx:'Se sentó en la {w} de madera.',                     hint:'ll en el interior → ll'},
  {w:'bote_a',  ans:'ll', full:'botella',  ctx:'Bebió agua de la {w} de cristal.',                  hint:'ll en el interior → ll'},
  {w:'ga_eta',  ans:'ll', full:'galleta',  ctx:'Se comió una {w} de chocolate.',                    hint:'ll en el interior → ll'},
  {w:'e_a',     ans:'ll', full:'ella',     ctx:'Le contó a {w} todo lo que había pasado.',          hint:'ll en el interior → ll'},
  {w:'ro_o',    ans:'ll', full:'rollo',    ctx:'Compró un {w} de papel de cocina.',                 hint:'ll en el interior → ll'},
  {w:'panta_a', ans:'ll', full:'pantalla', ctx:'Miró la {w} del móvil antes de dormir.',            hint:'ll en el interior → ll'},
  {w:'toa_a',   ans:'ll', full:'toalla',   ctx:'Se secó con una {w} después del baño.',             hint:'ll en el interior → ll'},
  {w:'pasti_a', ans:'ll', full:'pastilla', ctx:'Tomó una {w} para el dolor de cabeza.',             hint:'ll en el interior → ll'},
  // ── Y al inicio ──
  {w:'_ema',    ans:'y',  full:'yema',     ctx:'La {w} del huevo es de color amarillo.',            hint:'y- al inicio de palabra → y'},
  {w:'_eso',    ans:'y',  full:'yeso',     ctx:'El médico le puso un {w} en el brazo roto.',        hint:'y- al inicio de palabra → y'},
  {w:'_ate',    ans:'y',  full:'yate',     ctx:'Navegaron por el mar en un gran {w}.',              hint:'y- al inicio de palabra → y'},
  {w:'_ugo',    ans:'y',  full:'yugo',     ctx:'El {w} unía a los dos bueyes.',                     hint:'y- al inicio de palabra → y'},
  // ── Y en el medio ──
  {w:'a_er',    ans:'y',  full:'ayer',     ctx:'Me contó que {w} fue al cine con su familia.',      hint:'y en el interior de sílaba → y'},
  {w:'ma_o',    ans:'y',  full:'mayo',     ctx:'En {w} hay muchas flores en el campo.',             hint:'y en el interior de sílaba → y'},
  {w:'ra_o',    ans:'y',  full:'rayo',     ctx:'Un {w} cruzó el cielo durante la tormenta.',        hint:'y en el interior de sílaba → y'},
  {w:'pla_a',   ans:'y',  full:'playa',    ctx:'Pasaron todo el verano en la {w}.',                 hint:'y en el interior de sílaba → y'},
  {w:'pa_aso',  ans:'y',  full:'payaso',   ctx:'El {w} hizo reír a todos los niños.',               hint:'y en el interior de sílaba → y'},
  {w:'a_udar',  ans:'y',  full:'ayudar',   ctx:'Fue corriendo a {w} a su compañero.',               hint:'y en el interior de sílaba → y'},
  {w:'le_enda', ans:'y',  full:'leyenda',  ctx:'Le contó una {w} muy antigua.',                     hint:'y en el interior de sílaba → y'},
  // ── Y al final ──
  {w:'ho_',     ans:'y',  full:'hoy',      ctx:'Me han dicho que {w} hace mucho sol.',              hint:'y al final de palabra → y'},
  {w:'re_',     ans:'y',  full:'rey',      ctx:'El {w} vivía en un castillo enorme.',               hint:'y al final de palabra → y'},
  {w:'le_',     ans:'y',  full:'ley',      ctx:'Hay que respetar siempre la {w}.',                  hint:'y al final de palabra → y'},
];
