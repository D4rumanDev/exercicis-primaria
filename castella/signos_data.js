// Section 1: oración amb buit → tria el signe
// sent: oració amb _ on va el signe | ans: signe correcte | opts: opcions
const PUNCT_POOL = [
  // Punt (.)
  {sent:'Hoy es el primer día de clase_',                  ans:'.',    full:'Hoy es el primer día de clase.',                 opts:['.','?','!','...'],  hint:'Las oraciones enunciativas terminan con punto (.)'},
  {sent:'Los niños juegan en el parque_',                  ans:'.',    full:'Los niños juegan en el parque.',                 opts:['.','?','!','...'],  hint:'Las oraciones enunciativas terminan con punto (.)'},
  {sent:'Mi abuela hace una tarta deliciosa_',             ans:'.',    full:'Mi abuela hace una tarta deliciosa.',            opts:['.','?','!',','],    hint:'Las oraciones enunciativas terminan con punto (.)'},
  {sent:'El cielo estaba lleno de estrellas_',             ans:'.',    full:'El cielo estaba lleno de estrellas.',            opts:['.','?','!','...'],  hint:'Las oraciones enunciativas terminan con punto (.)'},
  {sent:'El perro ladró toda la noche_',                   ans:'.',    full:'El perro ladró toda la noche.',                  opts:['.','?','!','...'],  hint:'Las oraciones enunciativas terminan con punto (.)'},
  {sent:'La luna brillaba sobre el lago_',                 ans:'.',    full:'La luna brillaba sobre el lago.',                opts:['.','?','!',','],    hint:'Las oraciones enunciativas terminan con punto (.)'},

  // Interrogació (¿?)
  {sent:'¿Cómo te llamas_',                               ans:'?',    full:'¿Cómo te llamas?',                              opts:['?','.','!','...'],  hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},
  {sent:'¿Dónde has dejado las llaves_',                   ans:'?',    full:'¿Dónde has dejado las llaves?',                 opts:['?','.','!',','],    hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},
  {sent:'¿A qué hora empieza la película_',               ans:'?',    full:'¿A qué hora empieza la película?',              opts:['?','.','!','...'],  hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},
  {sent:'¿Sabes nadar_',                                   ans:'?',    full:'¿Sabes nadar?',                                 opts:['?','.','!',','],    hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},
  {sent:'¿Cuántos años tienes_',                           ans:'?',    full:'¿Cuántos años tienes?',                         opts:['?','.','!',','],    hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},
  {sent:'¿Por qué no viniste ayer_',                       ans:'?',    full:'¿Por qué no viniste ayer?',                     opts:['?','.','!','...'],  hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},
  {sent:'¿Has visto mi mochila_',                          ans:'?',    full:'¿Has visto mi mochila?',                        opts:['?','.','!',','],    hint:'Las preguntas directas llevan ¿ al inicio y ? al final'},

  // Exclamació (¡!)
  {sent:'¡Qué bonito día hace hoy_',                       ans:'!',    full:'¡Qué bonito día hace hoy!',                     opts:['!','.','?','...'],  hint:'Las exclamaciones llevan ¡ al inicio y ! al final'},
  {sent:'¡Cuidado con el escalón_',                        ans:'!',    full:'¡Cuidado con el escalón!',                      opts:['!','.','?',','],    hint:'Las exclamaciones llevan ¡ al inicio y ! al final'},
  {sent:'¡Qué sorpresa tan grande_',                       ans:'!',    full:'¡Qué sorpresa tan grande!',                     opts:['!','.','?','...'],  hint:'Las exclamaciones llevan ¡ al inicio y ! al final'},
  {sent:'¡Qué frío hace esta mañana_',                     ans:'!',    full:'¡Qué frío hace esta mañana!',                   opts:['!','.','?','...'],  hint:'Las exclamaciones llevan ¡ al inicio y ! al final'},
  {sent:'¡Feliz cumpleaños_',                              ans:'!',    full:'¡Feliz cumpleaños!',                            opts:['!','.','?',','],    hint:'Las exclamaciones llevan ¡ al inicio y ! al final'},
  {sent:'¡Ganamos el partido_',                            ans:'!',    full:'¡Ganamos el partido!',                          opts:['!','.','?','...'],  hint:'Las exclamaciones llevan ¡ al inicio y ! al final'},

  // Punts suspensius (...)
  {sent:'Quería decirte algo, pero_',                      ans:'...',  full:'Quería decirte algo, pero...',                  opts:['...','.',',','?'],   hint:'Los puntos suspensivos indican que la idea queda incompleta'},
  {sent:'Era una noche oscura y tormentosa_',              ans:'...',  full:'Era una noche oscura y tormentosa...',          opts:['...','.',',','!'],   hint:'Los puntos suspensivos crean suspense en la narración'},
  {sent:'No sé si decírtelo_',                             ans:'...',  full:'No sé si decírtelo...',                         opts:['...','.',',','?'],   hint:'Los puntos suspensivos indican duda o vacilación'},
  {sent:'No recuerdo dónde lo puse_',                      ans:'...',  full:'No recuerdo dónde lo puse...',                  opts:['...','.',',','?'],   hint:'Los puntos suspensivos indican duda o que la idea no acaba'},
  {sent:'Había una vez, en un bosque muy lejano_',         ans:'...',  full:'Había una vez, en un bosque muy lejano...',     opts:['...','.',',','!'],   hint:'Los puntos suspensivos crean suspense en la narración'},

  // Dos punts (:)
  {sent:'En la mochila llevo_',                            ans:':',    full:'En la mochila llevo: libros, lápices y regla.', opts:[':','.',',','...'],   hint:'Los dos puntos anuncian una lista o enumeración'},
  {sent:'Los planetas del sistema solar son_',             ans:':',    full:'Los planetas del sistema solar son: Mercurio, Venus, Tierra, Marte…', opts:[':','.',',','!'], hint:'Los dos puntos anuncian una lista o enumeración'},
  {sent:'La maestra dijo_',                                ans:':',    full:'La maestra dijo: «Abrid el libro por la página diez».',opts:[':','.',',','?'], hint:'Los dos puntos introducen las palabras de alguien'},
  {sent:'Los continentes son_',                            ans:':',    full:'Los continentes son: Europa, Asia, África, América y Oceanía.',opts:[':','.',',','!'], hint:'Los dos puntos anuncian una lista'},

  // Coma (,) — llista
  {sent:'Compré pan_ leche_ huevos y fruta.',              ans:',',    full:'Compré pan, leche, huevos y fruta.',            opts:[',','.',':','...'],   hint:'La coma separa los elementos de una lista'},
  {sent:'María_ Juan y Lucía son amigos.',                 ans:',',    full:'María, Juan y Lucía son amigos.',               opts:[',','.',':','...'],   hint:'La coma separa los elementos de una lista'},
  {sent:'Necesitamos harina_ azúcar_ mantequilla y huevos.',ans:',',  full:'Necesitamos harina, azúcar, mantequilla y huevos.',opts:[',','.',':','...'], hint:'La coma separa los elementos de una lista'},
  {sent:'Vimos leones_ cebras_ jirafas y elefantes.',      ans:',',    full:'Vimos leones, cebras, jirafas y elefantes.',    opts:[',','.',':','...'],   hint:'La coma separa los elementos de una lista'},

  // Coma (,) — connector
  {sent:'Sin embargo_ llegamos a tiempo.',                  ans:',',    full:'Sin embargo, llegamos a tiempo.',               opts:[',','.',':','?'],     hint:'La coma va después de "sin embargo", "además", "por lo tanto"…'},
  {sent:'Por lo tanto_ debemos estudiar más.',              ans:',',    full:'Por lo tanto, debemos estudiar más.',           opts:[',','.',':','!'],     hint:'La coma va después de "sin embargo", "además", "por lo tanto"…'},

  // Coma (,) — vocatiu
  {sent:'Lucía_ ven a cenar que ya está listo.',            ans:',',    full:'Lucía, ven a cenar que ya está listo.',         opts:[',','.',':','!'],     hint:'La coma separa el nombre de la persona a quien nos dirigimos'},
];

// Section 3: descripció de la regla → tria el signe
const RULE_POOL = [
  {rule:'Se usa al final de una oración que afirma o describe algo.',              ans:'.',    wrong:['¿?','¡!','...'],  hint:'Ejemplo: "El sol brilla hoy."'},
  {rule:'Va en preguntas directas: al inicio y al final de la oración.',           ans:'¿?',   wrong:['.','¡!','...'],  hint:'Ejemplo: "¿Qué hora es?"'},
  {rule:'Va en exclamaciones y órdenes: al inicio y al final.',                    ans:'¡!',   wrong:['.','¿?','...'],  hint:'Ejemplo: "¡Qué alegría verte!"'},
  {rule:'Separa los elementos de una lista (excepto antes del último "y").',       ans:',',    wrong:['.','¡!',':'],    hint:'Ejemplo: "pan, leche y huevos"'},
  {rule:'Anuncia una lista, una explicación o las palabras de alguien.',           ans:':',    wrong:['.','¿?',','],    hint:'Ejemplo: "Los colores son: rojo, azul y verde."'},
  {rule:'Indica que la frase queda sin terminar o crea suspense.',                 ans:'...',  wrong:['.','¡!',','],    hint:'Ejemplo: "Y de repente apareció..."'},
  {rule:'Va después de expresiones como "sin embargo", "además" o "por tanto".',  ans:',',    wrong:['.','¿?',':'],    hint:'Ejemplo: "Sin embargo, llegamos a tiempo."'},
  {rule:'Separa el nombre de la persona a quien nos dirigimos directamente.',      ans:',',    wrong:['.','¡!',':'],    hint:'Ejemplo: "Ana, ven aquí."'},
  {rule:'Indica duda o que el hablante no termina de decidirse.',                  ans:'...',  wrong:['.','¡!','¿?'],   hint:'Ejemplo: "No sé qué decir..."'},
  {rule:'Se escribe antes de explicar o citar algo que alguien dijo.',             ans:':',    wrong:['.','¿?','¡!'],   hint:'Ejemplo: "El maestro dijo: «Estudiad mucho»."'},
  // ── Nuevas entradas ──
  {rule:'Marca una pausa cuando el sujeto es largo, para claridad de la oración.',ans:',',    wrong:['.','¡!',':'],    hint:'Ejemplo: "El niño que llegó tarde, se disculpó."'},
  {rule:'Aparece al principio de una oración que expresa admiración o mandato.',   ans:'¡!',   wrong:['.','¿?','...'],  hint:'Ejemplo: "¡Qué maravilla de día!"'},
  {rule:'Señala el inicio y el final de una pregunta directa en español.',         ans:'¿?',   wrong:['.','¡!','...'],  hint:'Ejemplo: "¿Tienes hambre?"'},
  {rule:'Se escribe antes de dar una explicación o de citar las palabras exactas.',ans:':',   wrong:['.','¡!',','],    hint:'Ejemplo: "El maestro explicó: «Así se hace»."'},
  {rule:'Crea suspenso dejando la oración sin terminar, para intrigar al lector.', ans:'...',  wrong:['.','¡!','¿?'],   hint:'Ejemplo: "Si me lo cuentas, te diré lo que pasó..."'},
];
