// w: paraula base | syn: sinònim | ant: antònim
// syn_w: 3 falsos sinònims | ant_w: 3 falsos antònims
const SYN_POOL = [
  {w:'alegre',     syn:'contento',    ant:'triste',       syn_w:['veloz','brillante','silencioso'],   ant_w:['pequeño','rápido','suave']},
  {w:'rápido',     syn:'veloz',       ant:'lento',        syn_w:['tranquilo','oscuro','grande'],      ant_w:['alegre','bonito','fuerte']},
  {w:'grande',     syn:'enorme',      ant:'pequeño',      syn_w:['suave','frío','antiguo'],           ant_w:['caliente','rápido','oscuro']},
  {w:'bonito',     syn:'hermoso',     ant:'feo',          syn_w:['tranquilo','ruidoso','suave'],      ant_w:['limpio','grande','lento']},
  {w:'frío',       syn:'helado',      ant:'caliente',     syn_w:['dulce','brillante','suave'],        ant_w:['oscuro','pequeño','triste']},
  {w:'fácil',      syn:'sencillo',    ant:'difícil',      syn_w:['rápido','limpio','bonito'],         ant_w:['triste','pequeño','ruidoso']},
  {w:'valiente',   syn:'atrevido',    ant:'cobarde',      syn_w:['tranquilo','oscuro','rápido'],      ant_w:['triste','lento','sucio']},
  {w:'limpio',     syn:'aseado',      ant:'sucio',        syn_w:['silencioso','frío','rápido'],       ant_w:['pequeño','triste','lento']},
  {w:'fuerte',     syn:'robusto',     ant:'débil',        syn_w:['alegre','limpio','brillante'],      ant_w:['sucio','lento','oscuro']},
  {w:'oscuro',     syn:'tenebroso',   ant:'luminoso',     syn_w:['sucio','lento','triste'],           ant_w:['fuerte','alegre','rápido']},
  {w:'nuevo',      syn:'reciente',    ant:'antiguo',      syn_w:['limpio','pequeño','suave'],         ant_w:['grande','oscuro','triste']},
  {w:'comenzar',   syn:'empezar',     ant:'terminar',     syn_w:['subir','hablar','correr'],          ant_w:['cantar','volar','saltar']},
  {w:'subir',      syn:'ascender',    ant:'bajar',        syn_w:['correr','hablar','empezar'],        ant_w:['cantar','saltar','girar']},
  {w:'cerca',      syn:'próximo',     ant:'lejos',        syn_w:['limpio','pequeño','rápido'],        ant_w:['sucio','oscuro','triste']},
  {w:'generoso',   syn:'dadivoso',    ant:'egoísta',      syn_w:['tranquilo','veloz','brillante'],    ant_w:['limpio','alegre','pequeño']},
  {w:'silencioso', syn:'callado',     ant:'ruidoso',      syn_w:['oscuro','frío','lento'],            ant_w:['sucio','triste','pequeño']},
  {w:'ordenado',   syn:'organizado',  ant:'desordenado',  syn_w:['veloz','oscuro','fuerte'],          ant_w:['lento','frío','triste']},
  {w:'amable',     syn:'simpático',   ant:'grosero',      syn_w:['valiente','rápido','brillante'],    ant_w:['pequeño','oscuro','frío']},
  {w:'recordar',   syn:'rememorar',   ant:'olvidar',      syn_w:['saltar','cantar','gritar'],         ant_w:['cantar','correr','girar']},
  {w:'tranquilo',  syn:'calmado',     ant:'nervioso',     syn_w:['limpio','oscuro','suave'],          ant_w:['lento','frío','pequeño']},
];
