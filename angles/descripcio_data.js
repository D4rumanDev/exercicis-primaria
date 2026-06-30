const VOCAB_POOL = [
  {display:'f_ir',       correct:'a', hint:'light coloured hair',          emoji:'🟡', opts:['a','e','i','u']},
  {display:'d_rk',       correct:'a', hint:'black or brown hair',           emoji:'🟤', opts:['a','e','i','o']},
  {display:'sh_rt',      correct:'o', hint:'not long — e.g. a boy\'s cut', emoji:'✂️', opts:['a','e','o','u']},
  {display:'l_ng',       correct:'o', hint:'not short — reaches the back',  emoji:'↕️', opts:['a','e','i','o']},
  {display:'c_rly',      correct:'u', hint:'hair with tight spirals',        emoji:'🌀', opts:['a','e','i','u']},
  {display:'str_ight',   correct:'a', hint:'hair with no curls or waves',   emoji:'➡️', opts:['a','e','i','o']},
  {display:'w_vy',       correct:'a', hint:'between curly and straight',    emoji:'〰️', opts:['a','e','i','u']},
  {display:'gl_sses',    correct:'a', hint:'you wear them on your nose',    emoji:'👓', opts:['a','e','i','o']},
  {display:'b_ard',      correct:'e', hint:'hair on a man\'s face/chin',    emoji:'🧔', opts:['a','e','i','o']},
  {display:'p_nytail',   correct:'o', hint:'long hair tied at the back',    emoji:'🎀', opts:['a','e','i','o']},
  {display:'m_ustache',  correct:'o', hint:'hair above the upper lip',      emoji:'👨', opts:['a','e','i','o']},
];

const AVATARS = [
  {id:0, name:'Alex',  pronoun:'he',  emoji:'👦',
   traits:{hair:'short', color:'dark', type:'straight', glasses:false, beard:false, moustache:false, ponytail:false}},
  {id:1, name:'Sara',  pronoun:'she', emoji:'👧',
   traits:{hair:'long',  color:'fair', type:'curly',    glasses:false, beard:false, moustache:false, ponytail:true}},
  {id:2, name:'Tom',   pronoun:'he',  emoji:'👨',
   traits:{hair:'short', color:'fair', type:'wavy',     glasses:true,  beard:false, moustache:true,  ponytail:false}},
  {id:3, name:'Laura', pronoun:'she', emoji:'👩',
   traits:{hair:'long',  color:'dark', type:'straight', glasses:true,  beard:false, moustache:false, ponytail:false}},
  {id:4, name:'Ben',   pronoun:'he',  emoji:'🧔',
   traits:{hair:'short', color:'dark', type:'curly',    glasses:false, beard:true,  moustache:false, ponytail:false}},
  {id:5, name:'Mia',   pronoun:'she', emoji:'👱‍♀️',
   traits:{hair:'long',  color:'fair', type:'wavy',     glasses:true,  beard:false, moustache:false, ponytail:true}},
];

const S4_POOL = [
  {words:["She","has","got","long","fair","curly","hair."],          correct:"She has got long fair curly hair."},
  {words:["Has","he","got","glasses?"],                              correct:"Has he got glasses?"},
  {words:["He","hasn't","got","a","beard."],                         correct:"He hasn't got a beard."},
  {words:["Has","she","got","a","ponytail?"],                        correct:"Has she got a ponytail?"},
  {words:["She","hasn't","got","straight","hair."],                  correct:"She hasn't got straight hair."},
  {words:["Has","he","got","dark","curly","hair?"],                  correct:"Has he got dark curly hair?"},
  {words:["He","has","got","short","wavy","fair","hair."],           correct:"He has got short wavy fair hair."},
  {words:["She","has","got","a","ponytail","and","glasses."],        correct:"She has got a ponytail and glasses."},
  {words:["Has","he","got","a","moustache?"],                        correct:"Has he got a moustache?"},
  {words:["He","hasn't","got","long","dark","hair."],                correct:"He hasn't got long dark hair."},
];
