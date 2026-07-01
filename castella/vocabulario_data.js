const VOC_POOL = [
  // ── Adjetivos ──
  {w:'ágil',         def:'Que se mueve con rapidez y facilidad.',                   ctx:'El gato es muy {w} y salta de un tejado a otro.',                opts:['torpe','lento','pesado'],            hint:'Lo contrario de torpe o lento'},
  {w:'valiente',     def:'Que no tiene miedo ante el peligro.',                     ctx:'La bombera fue muy {w} al entrar al edificio en llamas.',         opts:['cobarde','tranquilo','perezoso'],     hint:'Lo contrario de cobarde'},
  {w:'generoso',     def:'Que da o comparte lo que tiene sin pedir nada a cambio.', ctx:'Mi amigo es muy {w}: siempre comparte su merienda.',              opts:['egoísta','avaro','descuidado'],       hint:'Lo contrario de egoísta'},
  {w:'curioso',      def:'Que tiene ganas de saber y aprender cosas nuevas.',       ctx:'La niña {w} hacía preguntas sobre todo lo que veía.',             opts:['aburrido','callado','indiferente'],   hint:'Le encanta descubrir y preguntar'},
  {w:'paciente',     def:'Que espera sin enfadarse ni ponerse nervioso.',            ctx:'Hay que ser {w} cuando las cosas tardan en llegar.',              opts:['nervioso','impulsivo','brusco'],      hint:'Lo contrario de impaciente'},
  {w:'silencioso',   def:'Que no hace ningún ruido.',                               ctx:'La biblioteca era tan {w} que se oía el paso del tiempo.',        opts:['ruidoso','animado','caótico'],        hint:'Sin ningún sonido'},
  {w:'frágil',       def:'Que se rompe o estropea con mucha facilidad.',            ctx:'Maneja ese jarrón con cuidado, es muy {w}.',                      opts:['resistente','duro','sólido'],         hint:'Se puede romper fácilmente'},
  {w:'veloz',        def:'Que se mueve o actúa con gran rapidez.',                  ctx:'El guepardo es el animal más {w} de la Tierra.',                  opts:['lento','pausado','tranquilo'],        hint:'Sinónimo de rápido'},
  {w:'enorme',       def:'Que es mucho más grande de lo normal.',                   ctx:'El dinosaurio dejó una huella {w} en el barro.',                  opts:['diminuto','pequeño','mínimo'],        hint:'Lo contrario de pequeño'},
  {w:'diminuto',     def:'Que es muy pequeño, casi imperceptible.',                 ctx:'La hormiga es un insecto {w} pero increíblemente fuerte.',        opts:['enorme','gigante','inmenso'],         hint:'Muy, muy pequeño'},
  {w:'tímido',       def:'Que le cuesta relacionarse con personas que no conoce.',  ctx:'El niño {w} tardó mucho en hacer amigos en su clase nueva.',      opts:['atrevido','hablador','seguro'],       hint:'Le da vergüenza conocer gente nueva'},
  {w:'terco',        def:'Que no cambia de opinión aunque esté equivocado.',        ctx:'Era tan {w} que nunca admitía que se había confundido.',           opts:['flexible','obediente','dócil'],       hint:'No acepta que se equivoca'},

  // ── Verbos ──
  {w:'explorar',     def:'Recorrer un lugar desconocido para descubrirlo.',         ctx:'Los astronautas fueron los primeros en {w} la Luna.',             opts:['olvidar','construir','pintar'],       hint:'Ir a descubrir lugares nuevos'},
  {w:'proteger',     def:'Cuidar o defender algo o alguien de un peligro.',         ctx:'Es importante {w} el medioambiente para el futuro.',              opts:['dañar','ignorar','destruir'],         hint:'Defender o cuidar'},
  {w:'ahorrar',      def:'Guardar o no gastar más de lo necesario.',                ctx:'Es importante {w} energía apagando las luces.',                   opts:['gastar','derrochar','malgastar'],     hint:'Guardar para el futuro'},
  {w:'solucionar',   def:'Encontrar la respuesta o salida a un problema.',          ctx:'El científico trabajó toda la noche para {w} el misterio.',       opts:['empeorar','ignorar','complicar'],     hint:'Resolver o arreglar'},
  {w:'comparar',     def:'Observar semejanzas y diferencias entre dos cosas.',      ctx:'El profesor pidió {w} los dos mapas del libro.',                  opts:['copiar','borrar','olvidar'],          hint:'Ver qué se parece y qué no'},
  {w:'desperdiciar', def:'Gastar algo sin necesidad o tirar cosas útiles.',         ctx:'No debemos {w} el agua: hay que cerrar el grifo.',                opts:['guardar','ahorrar','cuidar'],         hint:'Tirar o malgastar algo útil'},

  // ── Sustantivos — naturaleza ──
  {w:'horizonte',    def:'Línea donde parece que el cielo y la tierra se tocan.',   ctx:'Desde la playa vimos el sol hundirse en el {w}.',                 opts:['techo','suelo','centro'],             hint:'Donde el cielo toca el mar o la tierra'},
  {w:'tormenta',     def:'Lluvia fuerte acompañada de rayos, truenos y viento.',    ctx:'La {w} nos sorprendió en el campo y nos mojamos.',                opts:['brisa','calma','neblina'],            hint:'Lluvia fuerte con rayos y truenos'},
  {w:'cosecha',      def:'Recogida de los frutos o productos del campo.',           ctx:'Este año la {w} de manzanas ha sido muy abundante.',              opts:['siembra','lluvia','riego'],           hint:'Recoger los frutos del campo'},
  {w:'ecosistema',   def:'Conjunto de seres vivos que conviven en un mismo lugar.', ctx:'El arrecife de coral es un {w} lleno de vida marina.',            opts:['edificio','desierto','mineral'],      hint:'Todos los seres vivos de un lugar'},

  // ── Sustantivos — objetos y conceptos ──
  {w:'herramienta',  def:'Objeto que se usa para realizar un trabajo manual.',      ctx:'El martillo es la {w} favorita del carpintero.',                  opts:['juguete','alimento','adorno'],        hint:'Lo que usa un trabajador para hacer su trabajo'},
  {w:'aventura',     def:'Hecho emocionante que implica cierto riesgo.',            ctx:'Los piratas buscaban la {w} en los siete mares.',                 opts:['rutina','descanso','aburrimiento'],   hint:'Algo emocionante y arriesgado'},
  {w:'laberinto',    def:'Lugar con caminos entrelazados donde es fácil perderse.', ctx:'El ratoncillo tardó mucho en salir del {w}.',                     opts:['jardín','pasillo','camino'],          hint:'Muchos caminos que confunden'},
  {w:'mascota',      def:'Animal doméstico que vive y convive con una familia.',    ctx:'Mi {w} favorita es un conejo blanco llamado Nieve.',              opts:['fiera','plaga','presa'],              hint:'Animal que tienes en casa como compañía'},
  {w:'invento',      def:'Objeto o idea nueva creada por alguien por primera vez.', ctx:'La rueda fue un {w} muy importante para la humanidad.',           opts:['copia','mapa','receta'],              hint:'Algo creado por primera vez'},
  {w:'frontera',     def:'Línea que separa dos países o territorios.',              ctx:'El río marcaba la {w} entre los dos países vecinos.',             opts:['camino','ciudad','capital'],          hint:'Límite entre dos países'},
];
