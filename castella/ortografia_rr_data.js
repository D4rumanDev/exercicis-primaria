const RR_POOL = [
  // ── RR entre vocales (sonido fuerte) ──
  {w:'ca_o',     ans:'rr', full:'carro',     ctx:'El {w} del granjero iba cargado de paja.',       hint:'Entre vocales, sonido fuerte → rr'},
  {w:'pe_o',     ans:'rr', full:'perro',     ctx:'El {w} mueve la cola cuando está contento.',      hint:'Entre vocales, sonido fuerte → rr'},
  {w:'to_e',     ans:'rr', full:'torre',     ctx:'Desde la {w} se veía todo el pueblo.',            hint:'Entre vocales, sonido fuerte → rr'},
  {w:'a_oz',     ans:'rr', full:'arroz',     ctx:'El {w} con leche es un postre delicioso.',        hint:'Entre vocales, sonido fuerte → rr'},
  {w:'ba_io',    ans:'rr', full:'barrio',    ctx:'Mi {w} tiene un parque muy grande.',              hint:'Entre vocales, sonido fuerte → rr'},
  {w:'co_eo',    ans:'rr', full:'correo',    ctx:'Mandó la carta por {w} postal.',                  hint:'Entre vocales, sonido fuerte → rr'},
  {w:'ja_a',     ans:'rr', full:'jarra',     ctx:'Puso la {w} de agua fría en la mesa.',            hint:'Entre vocales, sonido fuerte → rr'},
  {w:'go_a',     ans:'rr', full:'gorra',     ctx:'Se puso la {w} para protegerse del sol.',         hint:'Entre vocales, sonido fuerte → rr'},
  {w:'tie_a',    ans:'rr', full:'tierra',    ctx:'La {w} del jardín estaba húmeda tras la lluvia.', hint:'Entre vocales, sonido fuerte → rr'},
  {w:'sie_a',    ans:'rr', full:'sierra',    ctx:'Cortaron el tronco con una {w}.',                 hint:'Entre vocales, sonido fuerte → rr'},
  {w:'ba_o',     ans:'rr', full:'barro',     ctx:'Los niños jugaron en el {w} después de llover.',  hint:'Entre vocales, sonido fuerte → rr'},
  {w:'a_uga',    ans:'rr', full:'arruga',    ctx:'La camisa tenía una {w} enorme.',                 hint:'Entre vocales, sonido fuerte → rr'},

  // ── R entre vocales (sonido suave) ──
  {w:'pe_a',     ans:'r',  full:'pera',      ctx:'La {w} que compré estaba muy madura.',            hint:'Entre vocales, sonido suave → r'},
  {w:'ca_a',     ans:'r',  full:'cara',      ctx:'Tenía una {w} muy alegre y risueña.',             hint:'Entre vocales, sonido suave → r'},
  {w:'fa_o',     ans:'r',  full:'faro',      ctx:'El {w} guía a los barcos por la noche.',          hint:'Entre vocales, sonido suave → r'},
  {w:'ho_a',     ans:'r',  full:'hora',      ctx:'¿Qué {w} es? — Son las tres en punto.',           hint:'Entre vocales, sonido suave → r'},
  {w:'lo_o',     ans:'r',  full:'loro',      ctx:'El {w} repetía todo lo que escuchaba.',           hint:'Entre vocales, sonido suave → r'},
  {w:'a_o',      ans:'r',  full:'aro',       ctx:'El gimnasta saltó por el {w} de fuego.',          hint:'Entre vocales, sonido suave → r'},
  {w:'pu_o',     ans:'r',  full:'puro',      ctx:'El aire del campo es {w} y fresco.',              hint:'Entre vocales, sonido suave → r'},
  {w:'fo_o',     ans:'r',  full:'foro',      ctx:'Participó en el {w} de ciencias del colegio.',    hint:'Entre vocales, sonido suave → r'},

  // ── R al inicio de palabra (sonido fuerte, se escribe r) ──
  {w:'_osa',     ans:'r',  full:'rosa',      ctx:'Me regalaron una {w} roja muy bonita.',           hint:'Al inicio de palabra → siempre r'},
  {w:'_atón',    ans:'r',  full:'ratón',     ctx:'El {w} se escondió detrás del armario.',          hint:'Al inicio de palabra → siempre r'},
  {w:'_ío',      ans:'r',  full:'río',       ctx:'El {w} Ebro pasa por varias ciudades.',           hint:'Al inicio de palabra → siempre r'},
  {w:'_ueda',    ans:'r',  full:'rueda',     ctx:'Se pinchó una {w} de la bicicleta.',              hint:'Al inicio de palabra → siempre r'},
  {w:'_ey',      ans:'r',  full:'rey',       ctx:'El {w} vivía en un gran palacio.',                hint:'Al inicio de palabra → siempre r'},

  // ── R tras consonante (sonido fuerte, se escribe r) ──
  {w:'son_isa',  ans:'r',  full:'sonrisa',   ctx:'Su {w} iluminaba toda la habitación.',            hint:'Tras consonante, sonido fuerte → r'},
  {w:'en_edo',   ans:'r',  full:'enredo',    ctx:'Ese {w} de cables es difícil de deshacer.',       hint:'Tras consonante, sonido fuerte → r'},
  {w:'hon_ado',  ans:'r',  full:'honrado',   ctx:'Fue siempre un ciudadano {w} y trabajador.',      hint:'Tras consonante, sonido fuerte → r'},
  {w:'al_ededor',ans:'r',  full:'alrededor', ctx:'Pusieron flores {w} de la fuente del parque.',    hint:'Tras consonante, sonido fuerte → r'},
  {w:'is_ael',   ans:'r',  full:'Israel',    ctx:'{w} es un país situado en Oriente Medio.',        hint:'Tras consonante, sonido fuerte → r'},
];
