// svg.js — Biblioteca SVG compartida per a tots els exercicis
// Carrega's ABANS de shared.js: <script src="../svg.js"></script>

let _svgUid = 0;
const _uid = () => ++_svgUid;

// Helper: genera embed() i standalone() a partir d'una sola funció de formes.
// innerFn(col) → contingut SVG intern · vb → viewBox · standW → amplada standalone en px
function _mkSVGObj(innerFn, vb, standW){
  return {
    embed(x,y,w,h,col){ return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${vb}" preserveAspectRatio="none">${innerFn(col)}</svg>`; },
    standalone(col){ return `<svg viewBox="${vb}" style="width:${standW}px;height:auto;display:block;margin:auto">${innerFn(col)}</svg>`; }
  };
}

// Formes de cada objecte (viewBox "0 0 100 36" pels allargats, altres per rodons/targeta)
const _clipShapes = col =>
  `<rect x="2" y="2" width="96" height="32" rx="16" fill="none" stroke="${col}" stroke-width="4.5"/>` +
  `<rect x="16" y="12" width="80" height="13" rx="6.5" fill="none" stroke="${col}" stroke-width="3"/>`;

const _gomaShapes = col =>
  `<rect x="1" y="1" width="98" height="34" rx="4" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>` +
  `<rect x="79" y="1" width="20" height="34" fill="#7c3aed"/>` +
  `<text x="36" y="19" font-size="12" fill="#9d174d" font-weight="700" text-anchor="middle" dominant-baseline="middle" font-family="'Segoe UI',sans-serif">GOMA</text>`;

const _llapisShapes = col =>
  `<polygon points="0,18 10,4 10,32" fill="#c8956c"/>` +
  `<rect x="10" y="4" width="7" height="28" fill="#c8956c"/>` +
  `<rect x="17" y="2" width="67" height="32" fill="${col}"/>` +
  `<rect x="84" y="2" width="9" height="32" fill="#d1d5db"/>` +
  `<rect x="84" y="2" width="1.5" height="32" fill="#9ca3af"/>` +
  `<rect x="91.5" y="2" width="1.5" height="32" fill="#9ca3af"/>` +
  `<rect x="93" y="6" width="7" height="24" rx="2" fill="#fca5a5"/>`;

// boligraf: cap final arriba exactament a x=100 (82+18=100)
const _boligrafShapes = col =>
  `<polygon points="0,18 8,9 8,27" fill="#9ca3af"/>` +
  `<rect x="8" y="8" width="10" height="20" fill="#d1d5db"/>` +
  `<rect x="18" y="4" width="64" height="28" rx="4" fill="${col}"/>` +
  `<rect x="82" y="4" width="18" height="28" rx="4" fill="#1f2937"/>` +
  `<rect x="88" y="2" width="3" height="32" rx="1" fill="#374151"/>`;

const _tarjetaShapes = col => {
  const id=_uid();
  return `<defs><linearGradient id="tg${id}" x1="0%" y1="0%" x2="100%" y2="100%">` +
    `<stop offset="0%" stop-color="${col}"/><stop offset="100%" stop-color="#4c1d95"/>` +
    `</linearGradient></defs>` +
    `<rect x="1" y="1" width="98" height="61" rx="5" fill="url(#tg${id})"/>` +
    `<rect x="0" y="16" width="100" height="14" fill="#0f172a" opacity=".8"/>` +
    `<rect x="8" y="35" width="20" height="15" rx="2" fill="#d4b44a"/>`;
};

const _monedaDiamShapes = col => {
  const id=_uid();
  return `<defs><radialGradient id="mg${id}" cx="35%" cy="30%" r="60%">` +
    `<stop offset="0%" stop-color="rgba(255,255,255,0.6)"/>` +
    `<stop offset="100%" stop-color="rgba(0,0,0,0.2)"/>` +
    `</radialGradient></defs>` +
    `<circle cx="20" cy="20" r="19" fill="#8b6914"/>` +
    `<circle cx="20" cy="20" r="17" fill="${col}"/>` +
    `<circle cx="20" cy="20" r="17" fill="url(#mg${id})"/>` +
    `<text x="20" y="20" font-size="10" font-weight="900" text-anchor="middle" dominant-baseline="middle" fill="rgba(0,0,0,0.7)" font-family="'Segoe UI',sans-serif">1€</text>`;
};

// ── OBJECTES DE LONGITUD ──────────────────────────────────────
// cat: 'mm' | 'cm' | 'm' | 'km'
// min/max: rang real típic en la seva unitat (enters)
// embed(x,y,w,h,col): <svg> aniuat per al regle (o null si no s'adapta)
// standalone(col): <svg> complet per a la secció "Quina unitat?"
const SVG_LONGITUD = [

  // ── mm ──────────────────────────────────────────────────────
  { id:'formiga', nom:'formiga', cat:'mm', art:'la', min:1, max:3, icon:'🐜',
    embed:null,
    standalone(col='#78350f'){
      return `<svg viewBox="0 0 90 44" style="width:180px;height:auto;display:block;margin:auto">
        <ellipse cx="22" cy="26" rx="8" ry="6" fill="${col}"/>
        <ellipse cx="33" cy="22" rx="6" ry="5" fill="${col}"/>
        <ellipse cx="43" cy="21" rx="8" ry="7" fill="${col}"/>
        <circle cx="51" cy="16" r="5" fill="${col}"/>
        <line x1="18" y1="24" x2="9" y2="17" stroke="${col}" stroke-width="1.3"/>
        <line x1="18" y1="27" x2="8" y2="27" stroke="${col}" stroke-width="1.3"/>
        <line x1="19" y1="30" x2="10" y2="35" stroke="${col}" stroke-width="1.3"/>
        <line x1="30" y1="22" x2="25" y2="14" stroke="${col}" stroke-width="1.3"/>
        <line x1="30" y1="26" x2="24" y2="30" stroke="${col}" stroke-width="1.3"/>
        <line x1="39" y1="23" x2="34" y2="15" stroke="${col}" stroke-width="1.3"/>
        <line x1="39" y1="27" x2="33" y2="31" stroke="${col}" stroke-width="1.3"/>
        <line x1="47" y1="24" x2="44" y2="17" stroke="${col}" stroke-width="1.3"/>
        <ellipse cx="54" cy="13" rx="3.5" ry="2.5" fill="none" stroke="${col}" stroke-width="1.2"/>
        <ellipse cx="49" cy="11" rx="2.5" ry="3.5" fill="none" stroke="${col}" stroke-width="1.2"/>
      </svg>`;
    }
  },

  { id:'ungla', nom:'ungla del dit', cat:'mm', art:'l\'', min:5, max:10, icon:'💅',
    embed:null,
    standalone(col='#f9a8d4'){
      return `<svg viewBox="0 0 60 65" style="width:100px;height:auto;display:block;margin:auto">
        <rect x="8" y="36" width="44" height="22" rx="3" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
        <path d="M8,36 Q8,10 30,8 Q52,10 52,36 Z" fill="${col}" stroke="#db2777" stroke-width="2"/>
        <path d="M15,33 Q15,18 30,15 Q45,18 45,33" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="1.8"/>
      </svg>`;
    }
  },

  { id:'moneda_gruix', nom:'moneda (gruix)', cat:'mm', art:'la', min:1, max:3, icon:'🪙',
    embed:null,
    standalone(col='#d4b44a'){
      return `<svg viewBox="0 0 80 32" style="width:180px;height:auto;display:block;margin:auto">
        <ellipse cx="40" cy="8" rx="32" ry="7.5" fill="${col}" stroke="#8b6914" stroke-width="1.5"/>
        <rect x="8" y="8" width="64" height="16" fill="${col}" stroke="#8b6914" stroke-width="1.5"/>
        <ellipse cx="40" cy="24" rx="32" ry="7.5" fill="${col}" stroke="#8b6914" stroke-width="1.5"/>
        <ellipse cx="40" cy="8" rx="26" ry="5" fill="rgba(255,255,255,0.22)"/>
        <text x="40" y="18" font-size="8.5" font-weight="700" text-anchor="middle" dominant-baseline="middle" fill="rgba(0,0,0,0.62)" font-family="'Segoe UI',sans-serif">1€</text>
      </svg>`;
    }
  },

  // ── cm (amb embed al regle) — formes definides una sola vegada via _mkSVGObj ──
  { id:'clip',        nom:'clip de paper',    cat:'cm', art:'el', min:3,  max:4,  icon:'📎', ..._mkSVGObj(_clipShapes,       '0 0 100 36', 200) },
  { id:'goma',        nom:"goma d'esborrar",  cat:'cm', art:'la', min:4,  max:7,  icon:'🧹', ..._mkSVGObj(_gomaShapes,       '0 0 100 36', 220) },
  { id:'llapis',      nom:'llapis',           cat:'cm', art:'el', min:10, max:17, icon:'✏️', ..._mkSVGObj(_llapisShapes,     '0 0 100 36', 260) },
  { id:'boligraf',    nom:'bolígraf',         cat:'cm', art:'el', min:12, max:16, icon:'🖊️', ..._mkSVGObj(_boligrafShapes,   '0 0 100 36', 260) },
  { id:'targeta',     nom:'targeta de crèdit',cat:'cm', art:'la', min:8,  max:9,  icon:'💳', ..._mkSVGObj(_tarjetaShapes,    '0 0 100 63', 200) },
  { id:'moneda_diam', nom:'moneda (diàmetre)',cat:'cm', art:'la', min:2,  max:3,  icon:'🪙', ..._mkSVGObj(_monedaDiamShapes, '0 0 40 40',  100) },

  // ── cm sense embed (massa ample o alt per al regle) ─────────
  { id:'telefon', nom:'telèfon mòbil', cat:'cm', art:'el', min:14, max:17, icon:'📱',
    embed:null,
    standalone(col='#1f2937'){
      return `<svg viewBox="0 0 50 100" style="width:80px;height:auto;display:block;margin:auto">
        <rect x="3" y="3" width="44" height="94" rx="7" fill="${col}" stroke="#374151" stroke-width="1.5"/>
        <rect x="8" y="10" width="34" height="58" rx="3" fill="#0ea5e9" opacity=".7"/>
        <rect x="16" y="6" width="18" height="3" rx="1.5" fill="#6b7280"/>
        <circle cx="25" cy="87" r="5" fill="#374151" stroke="#6b7280" stroke-width="1.2"/>
      </svg>`;
    }
  },

  // ── m ───────────────────────────────────────────────────────
  { id:'porta', nom:'porta', cat:'m', art:'la', min:2, max:3, icon:'🚪',
    embed:null,
    standalone(col='#92400e'){
      return `<svg viewBox="0 0 60 100" style="width:90px;height:auto;display:block;margin:auto">
        <rect x="4" y="5" width="52" height="90" rx="3" fill="#fde68a" stroke="${col}" stroke-width="3"/>
        <rect x="4" y="5" width="52" height="8" rx="2" fill="${col}" opacity=".4"/>
        <circle cx="44" cy="54" r="3.5" fill="${col}"/>
        <line x1="10" y1="50" x2="10" y2="78" stroke="${col}" stroke-width="1.5" stroke-dasharray="3,3" opacity=".5"/>
      </svg>`;
    }
  },

  { id:'cotxe', nom:'cotxe', cat:'m', art:'el', min:3, max:5, icon:'🚗',
    embed:null,
    standalone(col='#dc2626'){
      return `<svg viewBox="0 0 140 62" style="width:220px;height:auto;display:block;margin:auto">
        <rect x="5" y="30" width="130" height="26" rx="5" fill="${col}" stroke="#991b1b" stroke-width="2"/>
        <path d="M25,30 Q35,8 55,6 H90 Q110,8 120,30 Z" fill="${col}" stroke="#991b1b" stroke-width="2"/>
        <rect x="38" y="11" width="28" height="16" rx="2" fill="#bae6fd" opacity=".85"/>
        <rect x="73" y="11" width="27" height="16" rx="2" fill="#bae6fd" opacity=".85"/>
        <circle cx="32" cy="56" r="9" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>
        <circle cx="32" cy="56" r="4.5" fill="#6b7280"/>
        <circle cx="108" cy="56" r="9" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>
        <circle cx="108" cy="56" r="4.5" fill="#6b7280"/>
      </svg>`;
    }
  },

  { id:'taula', nom:'taula', cat:'m', art:'la', min:1, max:2, icon:'🪑',
    embed:null,
    standalone(col='#92400e'){
      return `<svg viewBox="0 0 120 80" style="width:180px;height:auto;display:block;margin:auto">
        <rect x="5" y="20" width="110" height="12" rx="3" fill="${col}" stroke="#78350f" stroke-width="2"/>
        <rect x="12" y="32" width="8" height="40" rx="3" fill="${col}" stroke="#78350f" stroke-width="1.5"/>
        <rect x="100" y="32" width="8" height="40" rx="3" fill="${col}" stroke="#78350f" stroke-width="1.5"/>
        <rect x="24" y="32" width="8" height="34" rx="3" fill="${col}" stroke="#78350f" stroke-width="1.5"/>
        <rect x="88" y="32" width="8" height="34" rx="3" fill="${col}" stroke="#78350f" stroke-width="1.5"/>
      </svg>`;
    }
  },

  // ── km ──────────────────────────────────────────────────────
  { id:'carretera', nom:'carretera', cat:'km', art:'la', min:1, max:10, icon:'🛣️',
    embed:null,
    standalone(col='#6b7280'){
      return `<svg viewBox="0 0 160 80" style="width:220px;height:auto;display:block;margin:auto">
        <rect x="0" y="32" width="160" height="48" fill="#374151"/>
        <polygon points="0,32 160,42 160,32" fill="#4b5563"/>
        <line x1="0" y1="57" x2="160" y2="57" stroke="#fbbf24" stroke-width="3" stroke-dasharray="20,14"/>
        <rect x="0" y="76" width="160" height="4" fill="#22c55e" opacity=".5"/>
        <text x="80" y="22" font-size="11" fill="${col}" text-anchor="middle" font-weight="700" font-family="'Segoe UI',sans-serif">1 km</text>
        <line x1="10" y1="30" x2="10" y2="14" stroke="${col}" stroke-width="1.5"/>
        <line x1="150" y1="30" x2="150" y2="14" stroke="${col}" stroke-width="1.5"/>
        <line x1="10" y1="22" x2="150" y2="22" stroke="${col}" stroke-width="1.5"/>
        <polygon points="10,18 4,22 10,26" fill="${col}"/>
        <polygon points="150,18 156,22 150,26" fill="${col}"/>
      </svg>`;
    }
  },

  { id:'marato', nom:'marató', cat:'km', art:'la', min:40, max:43, icon:'🏃',
    embed:null,
    standalone(){
      return `<svg viewBox="0 0 160 72" style="width:220px;height:auto;display:block;margin:auto">
        <text x="80" y="36" font-size="38" text-anchor="middle" dominant-baseline="middle">🏃</text>
        <rect x="20" y="54" width="120" height="8" rx="3" fill="#d1d5db"/>
        <text x="80" y="67" font-size="10" fill="#7c3aed" text-anchor="middle" font-weight="700" font-family="'Segoe UI',sans-serif">42,195 km</text>
      </svg>`;
    }
  },
];

function svgLongObj(id){ return SVG_LONGITUD.find(o=>o.id===id)||null; }

// ── AMPOLLES ─────────────────────────────────────────────────
// Centralitza bsvg() de mesures_capacitat.html
function svgBottle(ml, capMl=1000, col='#1d4ed8', W=44, H=100){
  const id=`sv${_uid()}`;
  const nX=17,nW=10,capH=8,sY=19,bX=5,bW=34;
  const path=`M${nX},${capH} H${nX+nW} C${nX+nW},${capH+5} ${bX+bW},${sY-3} ${bX+bW},${sY} V96 Q${bX+bW},100 22,100 Q${bX},100 ${bX},96 V${sY} C${bX},${sY-3} ${nX},${capH+5} ${nX},${capH} Z`;
  const fH=Math.round(82*Math.min(1,Math.max(0,ml/capMl))),fY=H-fH;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <clipPath id="${id}c"><path d="${path}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(255,255,255,.55)"/>
        <stop offset="70%" stop-color="rgba(255,255,255,0)"/>
      </linearGradient>
    </defs>
    <path d="${path}" fill="var(--bg-hi)" stroke="${col}" stroke-width="2" stroke-linejoin="round"/>
    ${fH>0?`<rect x="${bX}" y="${fY}" width="${bW}" height="${fH+5}" fill="${col}" opacity=".65" clip-path="url(#${id}c)"/>`:``}
    <rect x="${bX+2}" y="${sY+4}" width="4" height="68" rx="2" fill="url(#${id}g)" clip-path="url(#${id}c)"/>
    <rect x="${nX+1}" y="0" width="${nW-2}" height="${capH+1}" rx="2.5" fill="${col}" opacity=".85"/>
  </svg>`;
}

// ── MONEDES ──────────────────────────────────────────────────
// Versió portable de coinSVG() de diners.html per a altres exercicis
function svgCoin(cents, big=false){
  const id=`sv${_uid()}`;
  const copper={fill:'#c97c2f',stroke:'#7d4800'};
  const gold={fill:'#d4b44a',stroke:'#8b6914'};
  const m=cents<=5?copper:(cents<=50?gold:(cents===100?{fill:'#d4b44a',stroke:'#888',inner:'#a8a8a8'}:{fill:'#a8a8a8',stroke:'#666',inner:'#d4b44a'}));
  const S=big?90:74;
  const cx=S/2,cy=S/2,ro=S/2-2,rf=ro-4;
  const numTxt=cents<100?cents:cents/100, unitTxt=cents<100?'ct':'€';
  const nfs=big?17:14, ufs=big?10:8;
  const nY=(cy-(big?4:3)).toFixed(1), uY=(cy+(big?10:8)).toFixed(1);
  const ir=m.inner?Math.round(rf*0.52):0;
  const inner=m.inner
    ?`<circle cx="${cx}" cy="${cy}" r="${ir+2}" fill="${m.inner}" stroke="${m.stroke}" stroke-width="1.2"/>
       <circle cx="${cx}" cy="${cy}" r="${ir}" fill="${m.inner}"/>
       <circle cx="${cx}" cy="${cy}" r="${ir}" fill="url(#sh${id})" opacity="0.55"/>`:
    '';
  return `<svg width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
    <defs><radialGradient id="sh${id}" cx="33%" cy="26%" r="66%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.72)"/>
      <stop offset="65%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.3)"/>
    </radialGradient></defs>
    <circle cx="${cx}" cy="${cy}" r="${ro}" fill="${m.stroke}"/>
    <circle cx="${cx}" cy="${cy}" r="${rf}" fill="${m.fill}"/>
    ${inner}
    <circle cx="${cx}" cy="${cy}" r="${rf}" fill="url(#sh${id})" opacity="${m.inner?0.4:1}"/>
    <text x="${cx}" y="${nY}" font-size="${nfs}" font-weight="900" text-anchor="middle" dominant-baseline="middle" fill="rgba(0,0,0,0.78)">${numTxt}</text>
    <text x="${cx}" y="${uY}" font-size="${ufs}" font-weight="700" text-anchor="middle" fill="rgba(0,0,0,0.62)">${unitTxt}</text>
  </svg>`;
}

// ── ANGLES ───────────────────────────────────────────────────
// sweep=0 → CCW en SVG (y↓) = angle sobre la línia base ✓
function angleSVG(deg, size=170){
  const cx=size>>1, cy=Math.round(size*.72);
  const r=Math.round(size*.40), arcR=Math.round(size*.24);
  const clr=deg<90?'#f87171':deg===90?'#60a5fa':deg<180?'#fbbf24':'#a78bfa';
  if(deg===90){
    const sq=Math.round(arcR*.65);
    return `<svg width="${size}" height="${size}"><line x1="${cx-r}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="var(--t)" stroke-width="3" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy-r}" stroke="var(--t)" stroke-width="3" stroke-linecap="round"/><path d="M${cx+sq},${cy} L${cx+sq},${cy-sq} L${cx},${cy-sq} L${cx},${cy} Z" fill="${clr}" fill-opacity=".35" stroke="${clr}" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--t)"/></svg>`;
  }
  if(deg===180){
    return `<svg width="${size}" height="${size}"><line x1="${cx-r}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="var(--t)" stroke-width="3" stroke-linecap="round"/><path d="M${cx},${cy} L${cx+arcR},${cy} A${arcR},${arcR} 0 0 0 ${cx-arcR},${cy} Z" fill="${clr}" fill-opacity=".4" stroke="${clr}" stroke-width="1.5"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--t)"/></svg>`;
  }
  const rad=deg*Math.PI/180;
  const x2=(cx+r*Math.cos(rad)).toFixed(1), y2=(cy-r*Math.sin(rad)).toFixed(1);
  const ax=(cx+arcR*Math.cos(rad)).toFixed(1), ay=(cy-arcR*Math.sin(rad)).toFixed(1);
  const la=deg>180?1:0;
  return `<svg width="${size}" height="${size}"><line x1="${cx-r}" y1="${cy}" x2="${cx+r}" y2="${cy}" stroke="var(--t)" stroke-width="3" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="var(--t)" stroke-width="3" stroke-linecap="round"/><path d="M${cx},${cy} L${cx+arcR},${cy} A${arcR},${arcR} 0 ${la} 0 ${ax},${ay} Z" fill="${clr}" fill-opacity=".35" stroke="${clr}" stroke-width="1.5"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--t)"/></svg>`;
}
function angleType(deg){
  if(deg<90)return'Agut'; if(deg===90)return'Recte'; if(deg<180)return'Obtús'; if(deg===180)return'Pla'; return'Complet';
}

// ── TRANSPORTADOR ────────────────────────────────────────────
function protractorSVG(deg, W=240){
  const H=Math.round(W*.6),cx=W/2,cy=H-10,R=Math.round(W*.42);
  const pt=(d,r)=>{const rad=d*Math.PI/180;return[(cx+r*Math.cos(rad)).toFixed(1),(cy-r*Math.sin(rad)).toFixed(1)];};
  const bg=`<path d="M${cx+R},${cy} A${R},${R} 0 1 0 ${cx-R},${cy} Z" fill="var(--bg-lo)" stroke="var(--b)" stroke-width="1.5"/>`;
  let tks='';
  for(let d=0;d<=180;d+=10){
    const maj=d%30===0;
    const [x1,y1]=pt(d,R),[x2,y2]=pt(d,R-(maj?14:6));
    tks+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--m)" stroke-width="${maj?2:1}"/>`;
  }
  const arcR=Math.round(R*.28);
  const clr=deg<90?'#f87171':deg===90?'#60a5fa':deg<180?'#fbbf24':'#a78bfa';
  const [ax,ay]=pt(deg,arcR);
  const wedge=`<path d="M${cx},${cy} L${(cx+arcR).toFixed(1)},${cy} A${arcR},${arcR} 0 0 0 ${ax},${ay} Z" fill="${clr}" fill-opacity=".35" stroke="${clr}" stroke-width="1.5"/>`;
  const [armX,armY]=pt(deg,R-3);
  return `<svg width="${W}" height="${H}">${bg}<line x1="${(cx-R-4).toFixed(0)}" y1="${cy}" x2="${(cx+R+4).toFixed(0)}" y2="${cy}" stroke="var(--t)" stroke-width="2"/>${tks}${wedge}<line x1="${cx}" y1="${cy}" x2="${armX}" y2="${armY}" stroke="var(--t)" stroke-width="2.5" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="4" fill="var(--t)"/></svg>`;
}

// ── RELLOTGE ─────────────────────────────────────────────────
function clockSVG(h, m, size=160){
  const cx=size>>1, cy=size>>1, R=size/2-5;
  const toR=d=>(d-90)*Math.PI/180;
  const hDeg=(h%12)*30+m*.5, mDeg=m*6;
  const hL=R*.55, mL=R*.76;
  const hx=(cx+hL*Math.cos(toR(hDeg))).toFixed(1), hy=(cy+hL*Math.sin(toR(hDeg))).toFixed(1);
  const mx=(cx+mL*Math.cos(toR(mDeg))).toFixed(1), my=(cy+mL*Math.sin(toR(mDeg))).toFixed(1);
  let ticks='';
  for(let i=0;i<12;i++){
    const a=toR(i*30), r1=R-2, r2=i%3===0?R-11:R-6;
    ticks+=`<line x1="${(cx+r1*Math.cos(a)).toFixed(1)}" y1="${(cy+r1*Math.sin(a)).toFixed(1)}" x2="${(cx+r2*Math.cos(a)).toFixed(1)}" y2="${(cy+r2*Math.sin(a)).toFixed(1)}" stroke="var(--m)" stroke-width="${i%3===0?2.5:1.5}"/>`;
  }
  let nums='';
  [[12,0],[3,90],[6,180],[9,270]].forEach(([n,d])=>{
    const nr=R-18, a=toR(d);
    nums+=`<text x="${(cx+nr*Math.cos(a)).toFixed(1)}" y="${(cy+nr*Math.sin(a)+4).toFixed(1)}" font-size="11" font-weight="700" text-anchor="middle" fill="var(--m)">${n}</text>`;
  });
  const arcR=Math.round(R*.38);
  const clr=hDeg<90?'#f87171':hDeg===90?'#60a5fa':hDeg<180?'#fbbf24':hDeg===180?'#a78bfa':'#a78bfa';
  let arcEl='';
  if(hDeg<1||hDeg>=359){
    arcEl=`<circle cx="${cx}" cy="${cy}" r="${arcR}" fill="${clr}" fill-opacity=".35" stroke="${clr}" stroke-width="2"/>`;
  } else {
    const sa=toR(mDeg), ea=toR(hDeg);
    const sx=(cx+arcR*Math.cos(sa)).toFixed(1), sy=(cy+arcR*Math.sin(sa)).toFixed(1);
    const ex=(cx+arcR*Math.cos(ea)).toFixed(1), ey=(cy+arcR*Math.sin(ea)).toFixed(1);
    const sw=hDeg<=180?1:0;
    arcEl=`<path d="M${cx},${cy} L${sx},${sy} A${arcR},${arcR} 0 0 ${sw} ${ex},${ey} Z" fill="${clr}" fill-opacity=".35" stroke="${clr}" stroke-width="1.5"/>`;
  }
  return `<svg width="${size}" height="${size}"><circle cx="${cx}" cy="${cy}" r="${R}" fill="var(--s)" stroke="var(--b)" stroke-width="3"/>${ticks}${nums}${arcEl}<line x1="${cx}" y1="${cy}" x2="${hx}" y2="${hy}" stroke="var(--t)" stroke-width="5" stroke-linecap="round"/><line x1="${cx}" y1="${cy}" x2="${mx}" y2="${my}" stroke="var(--a)" stroke-width="3" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="4.5" fill="var(--t)"/></svg>`;
}

// ── TRIANGLES ────────────────────────────────────────────────
function rightAngleMark(V, P1, P2, sq=11){
  const dx1=P1.x-V.x, dy1=P1.y-V.y, l1=Math.sqrt(dx1*dx1+dy1*dy1)||1;
  const dx2=P2.x-V.x, dy2=P2.y-V.y, l2=Math.sqrt(dx2*dx2+dy2*dy2)||1;
  const u1x=dx1/l1*sq, u1y=dy1/l1*sq, u2x=dx2/l2*sq, u2y=dy2/l2*sq;
  return `<path d="M${(V.x+u1x).toFixed(1)},${(V.y+u1y).toFixed(1)} L${(V.x+u1x+u2x).toFixed(1)},${(V.y+u1y+u2y).toFixed(1)} L${(V.x+u2x).toFixed(1)},${(V.y+u2y).toFixed(1)}" fill="none" stroke="var(--t)" stroke-width="2"/>`;
}
function triSVG(pts, labels, labelType, rightAt, W=210, H=175){
  const pad=28;
  const xs=pts.map(p=>p.x),ys=pts.map(p=>p.y);
  const x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);
  const avW=W-2*pad,avH=H-2*pad,sc=Math.min(avW/((x1-x0)||1),avH/((y1-y0)||1));
  const dx=(avW-(x1-x0)*sc)/2+pad,dy=(avH-(y1-y0)*sc)/2+pad;
  const map=p=>({x:dx+(p.x-x0)*sc,y:H-dy-(p.y-y0)*sc});
  const [A,B,C]=pts.map(map);
  const col=pick(typeof TRI_COLORS!=='undefined'?TRI_COLORS:['#f87171','#34d399','#60a5fa','#f472b6','#fbbf24','#a78bfa']);
  const gx=(A.x+B.x+C.x)/3, gy=(A.y+B.y+C.y)/3;
  let extra='';
  if(rightAt>=0){const vs=[A,B,C];extra=rightAngleMark(vs[rightAt],vs[(rightAt+1)%3],vs[(rightAt+2)%3]);}
  let lbls='';
  if(labelType==='sides'){
    [[A,B,labels[0]],[B,C,labels[1]],[C,A,labels[2]]].forEach(([p1,p2,lbl])=>{
      const mx=(p1.x+p2.x)/2, my=(p1.y+p2.y)/2;
      const dx=mx-gx, dy=my-gy, len=Math.sqrt(dx*dx+dy*dy)||1;
      lbls+=`<text x="${(mx+dx/len*16).toFixed(0)}" y="${(my+dy/len*16+4).toFixed(0)}" font-size="11" font-weight="800" text-anchor="middle" fill="var(--t)">${lbl}</text>`;
    });
  } else {
    [[A,labels[0]],[B,labels[1]],[C,labels[2]]].forEach(([pt,lbl])=>{
      const dx=pt.x-gx, dy=pt.y-gy, len=Math.sqrt(dx*dx+dy*dy)||1;
      lbls+=`<text x="${(pt.x+dx/len*19).toFixed(0)}" y="${(pt.y+dy/len*19+4).toFixed(0)}" font-size="11" font-weight="800" text-anchor="middle" fill="var(--t)">${lbl}</text>`;
    });
  }
  return `<svg width="${W}" height="${H}"><polygon points="${A.x.toFixed(1)},${A.y.toFixed(1)} ${B.x.toFixed(1)},${B.y.toFixed(1)} ${C.x.toFixed(1)},${C.y.toFixed(1)}" fill="${col}" fill-opacity=".2" stroke="${col}" stroke-width="2.5"/>${extra}${lbls}</svg>`;
}

// ── POLÍGONS ─────────────────────────────────────────────────
function polygonSVG(pts, clr, W=220, H=180){
  const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]);
  const x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);
  const pad=18, avW=W-2*pad, avH=H-2*pad;
  const sc=Math.min(avW/((x1-x0)||1), avH/((y1-y0)||1));
  const ox=pad+(avW-(x1-x0)*sc)/2, oy=pad+(avH-(y1-y0)*sc)/2;
  const mp=pts.map(p=>[(ox+(p[0]-x0)*sc).toFixed(1),(oy+(p[1]-y0)*sc).toFixed(1)]);
  const pointsStr=mp.map(p=>p.join(',')).join(' ');
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%;height:auto"><polygon points="${pointsStr}" fill="${clr}" fill-opacity=".22" stroke="${clr}" stroke-width="2.5" stroke-linejoin="round"/></svg>`;
}

// ── FIGURES 2D ────────────────────────────────────────────────
function figSVG(type, W=200, H=170){
  const cx=W/2,cy=H/2,r=65;
  const c=pick(typeof FIG_CLR!=='undefined'?FIG_CLR:['#60a5fa','#34d399','#f87171','#fbbf24','#a78bfa','#f472b6']);
  const fill=c+'38'; const sw=2.5;
  const reg=(n,sa=-Math.PI/2)=>{
    const pts=[];
    for(let i=0;i<n;i++){const a=sa+i*2*Math.PI/n;pts.push([(cx+r*Math.cos(a)).toFixed(1),(cy+r*Math.sin(a)).toFixed(1)]);}
    return `<polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="${fill}" stroke="${c}" stroke-width="${sw}" stroke-linejoin="round"/>`;
  };
  const svg=inner=>`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%;height:auto">${inner}</svg>`;
  if(type==='circle')return svg(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);
  if(type==='ellipse')return svg(`<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${Math.round(r*.58)}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);
  if(type==='triangle')return svg(reg(3));
  if(type==='square'){const hs=Math.round(r*.72);return svg(`<rect x="${cx-hs}" y="${cy-hs}" width="${hs*2}" height="${hs*2}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);}
  if(type==='rectangle'){const hw=Math.round(r*.95),hh=Math.round(r*.52);return svg(`<rect x="${cx-hw}" y="${cy-hh}" width="${hw*2}" height="${hh*2}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);}
  if(type==='rhombus'){const rw=Math.round(r*.72);return svg(`<polygon points="${cx},${cy-r} ${cx+rw},${cy} ${cx},${cy+r} ${cx-rw},${cy}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);}
  if(type==='trapezoid'){const y1=(cy-r*.48).toFixed(1),y2=(cy+r*.48).toFixed(1);return svg(`<polygon points="${(cx-r*.5).toFixed(1)},${y1} ${(cx+r*.5).toFixed(1)},${y1} ${(cx+r*.9).toFixed(1)},${y2} ${(cx-r*.9).toFixed(1)},${y2}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);}
  if(type==='parallelogram'){const off=28,hh=Math.round(r*.45),hw=Math.round(r*.82);return svg(`<polygon points="${cx-hw+off},${cy-hh} ${cx+hw+off},${cy-hh} ${cx+hw-off},${cy+hh} ${cx-hw-off},${cy+hh}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>`);};
  if(type==='pentagon')return svg(reg(5));
  if(type==='hexagon')return svg(reg(6,0));
  if(type==='octagon')return svg(reg(8));
  return '';
}

// ── COSSOS 3D ────────────────────────────────────────────────
function solidSVG(type, W=200, H=170){
  const clr='#60a5fa', fill='rgba(96,165,250,0.18)', stroke=clr, sw=2.5;
  const iso=(x,y,z,ox,oy,s)=>{
    const px=ox+(x-z)*s*Math.cos(Math.PI/6);
    const py=oy-(y*s)+(x+z)*s*Math.sin(Math.PI/6);
    return[px.toFixed(1),py.toFixed(1)];
  };
  const poly=(pts,f,s,sw2)=>`<polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="${f}" stroke="${s}" stroke-width="${sw2}" stroke-linejoin="round"/>`;
  const line=(p1,p2,s,sw2,dash='')=>`<line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="${s}" stroke-width="${sw2}" stroke-dasharray="${dash}" stroke-linecap="round"/>`;
  if(type==='cube'||type==='box'){
    const [sx,sy,sz]=type==='cube'?[1,1,1]:[1.5,1,1];
    const ox=W/2, oy=H*.55, s=50;
    const A=iso(0,0,sz,ox,oy,s),B=iso(sx,0,sz,ox,oy,s),C=iso(sx,0,0,ox,oy,s),D=iso(0,0,0,ox,oy,s);
    const E=iso(0,sy,sz,ox,oy,s),F=iso(sx,sy,sz,ox,oy,s),G=iso(sx,sy,0,ox,oy,s),H2=iso(0,sy,0,ox,oy,s);
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%;height:auto">`
      +poly([E,F,B,A],fill,stroke,sw)+poly([F,G,C,B],fill,stroke,sw)+poly([E,H2,G,F],fill,stroke,sw)
      +line(D,A,stroke,sw,'4 3')+line(D,C,stroke,sw,'4 3')+line(D,H2,stroke,sw,'4 3')+'</svg>';
  }
  if(type==='triprism'){
    const ox=W/2, oy=H*.6, s=45;
    const A=iso(0,0,1,ox,oy,s),B=iso(1,0,1,ox,oy,s),C=iso(0.5,0,0,ox,oy,s);
    const D=iso(0,1,1,ox,oy,s),E=iso(1,1,1,ox,oy,s),F=iso(0.5,1,0,ox,oy,s);
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%;height:auto">`
      +poly([D,E,B,A],fill,stroke,sw)+poly([E,F,C,B],fill,stroke,sw)+poly([D,E,F],fill,stroke,sw)
      +line(A,C,stroke,sw,'4 3')+line(C,F,stroke,sw,'4 3')+'</svg>';
  }
  if(type==='sq_pyramid'){
    const ox=W/2, oy=H*.65, s=48;
    const A=iso(0,0,1,ox,oy,s),B=iso(1,0,1,ox,oy,s),C=iso(1,0,0,ox,oy,s),D=iso(0,0,0,ox,oy,s);
    const apex=iso(0.5,1.2,0.5,ox,oy,s);
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%;height:auto">`
      +poly([apex,B,A],fill,stroke,sw)+poly([apex,C,B],fill,stroke,sw)+poly([apex,D,C],fill,stroke,sw)
      +line(A,B,stroke,sw)+line(B,C,stroke,sw)+line(D,A,stroke,sw,'4 3')+line(D,C,stroke,sw,'4 3')
      +line(A,apex,stroke,sw)+line(B,apex,stroke,sw)+line(C,apex,stroke,sw)+line(D,apex,stroke,sw,'4 3')+'</svg>';
  }
  if(type==='tetra'){
    const ox=W/2, oy=H*.62, s=60;
    const A=iso(0,0,1,ox,oy,s),B=iso(1,0,1,ox,oy,s),C=iso(0.5,0,0,ox,oy,s);
    const apex=iso(0.5,1.1,0.5,ox,oy,s);
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="max-width:100%;height:auto">`
      +poly([apex,B,A],fill,stroke,sw)+poly([apex,C,B],fill,stroke,sw)
      +line(A,B,stroke,sw)+line(B,C,stroke,sw)+line(A,C,stroke,sw,'4 3')
      +line(A,apex,stroke,sw)+line(B,apex,stroke,sw)+line(C,apex,stroke,sw,'4 3')+'</svg>';
  }
  return '';
}

// ── GRÀFIC DE BARRES ─────────────────────────────────────────
// labels: string[], vals: number[], colors: string[]
function buildBarSVG(labels, vals, colors, W=320, H=160){
  const n=labels.length, PL=32, PR=8, PT=10, PB=36;
  const chartW=W-PL-PR, chartH=H-PT-PB;
  const maxV=Math.max(...vals), yTop=Math.ceil(maxV/10)*10;
  const barW=Math.floor((chartW/n)*.55), gap=chartW/n;
  let svg=`<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block" preserveAspectRatio="xMidYMin meet">`;
  const ySteps=yTop/10;
  for(let s=0;s<=ySteps;s++){
    const v=s*10, y=PT+chartH-(v/yTop)*chartH;
    svg+=`<line x1="${PL}" y1="${y}" x2="${W-PR}" y2="${y}" stroke="var(--b)" stroke-width="${s===0?1.5:.8}"/>`;
    svg+=`<text x="${PL-4}" y="${y+4}" text-anchor="end" font-size="9" fill="var(--m)" font-family="'Segoe UI',sans-serif">${v}</text>`;
  }
  for(let i=0;i<n;i++){
    const bh=(vals[i]/yTop)*chartH, bx=PL+gap*i+(gap-barW)/2, by=PT+chartH-bh;
    svg+=`<rect x="${bx}" y="${by}" width="${barW}" height="${bh}" rx="3" fill="${colors[i]}"/>`;
    svg+=`<text x="${bx+barW/2}" y="${by-3}" text-anchor="middle" font-size="9.5" fill="${colors[i]}" font-weight="700" font-family="'Segoe UI',sans-serif">${vals[i]}</text>`;
    const lx=PL+gap*i+gap/2, ly=H-PB+14;
    if(labels[i].length>7){
      const mid=Math.ceil(labels[i].length/2);
      svg+=`<text x="${lx}" y="${ly}" text-anchor="middle" font-size="9" fill="var(--t)" font-family="'Segoe UI',sans-serif">${labels[i].slice(0,mid)}</text>`;
      svg+=`<text x="${lx}" y="${ly+11}" text-anchor="middle" font-size="9" fill="var(--t)" font-family="'Segoe UI',sans-serif">${labels[i].slice(mid)}</text>`;
    } else {
      svg+=`<text x="${lx}" y="${ly}" text-anchor="middle" font-size="9.5" fill="var(--t)" font-family="'Segoe UI',sans-serif">${labels[i]}</text>`;
    }
  }
  svg+=`<line x1="${PL}" y1="${PT}" x2="${PL}" y2="${PT+chartH}" stroke="var(--m)" stroke-width="1.5"/>`;
  svg+=`<line x1="${PL}" y1="${PT+chartH}" x2="${W-PR}" y2="${PT+chartH}" stroke="var(--m)" stroke-width="1.5"/>`;
  svg+='</svg>';
  return svg;
}

// ── FRACCIONS ─────────────────────────────────────────────────
// th = {fill, empty, stroke}
function circleSVG(n, d, th, size=175, inter=false){
  const cx=size/2,cy=size/2,r=size/2-7;
  if(d===1)return`<svg width="${size}" height="${size}" class="${inter?'isv':''}"><circle cx="${cx}" cy="${cy}" r="${r}" fill="${th.fill}" stroke="${th.stroke}" stroke-width="3"/></svg>`;
  const ang=2*Math.PI/d;let paths='';
  for(let i=0;i<d;i++){
    const a0=-Math.PI/2+i*ang,a1=a0+ang;
    const x1=(cx+r*Math.cos(a0)).toFixed(3),y1=(cy+r*Math.sin(a0)).toFixed(3);
    const x2=(cx+r*Math.cos(a1)).toFixed(3),y2=(cy+r*Math.sin(a1)).toFixed(3);
    const la=ang>Math.PI?1:0,fill=i<n?th.fill:th.empty;
    const ic=inter?`onclick="sliceClick(this)" data-a="${i<n?1:0}" style="cursor:pointer"`:'';
    paths+=`<path ${ic} data-i="${i}" d="M${cx},${cy}L${x1},${y1}A${r},${r} 0 ${la} 1 ${x2},${y2}Z" fill="${fill}" stroke="white" stroke-width="3"/>`;
  }
  return`<svg width="${size}" height="${size}" class="${inter?'isv':''}">${paths}<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${th.stroke}" stroke-width="3"/></svg>`;
}

function barSVG(n, d, th, W=260, H=72, inter=false){
  const cw=Math.floor(W/d),tw=cw*d,rx=6;
  const cid=`sv${_uid()}`;
  let cells='';
  for(let i=0;i<d;i++){
    const fill=i<n?th.fill:th.empty;
    const ic=inter?`onclick="cellClick(this)" data-a="${i<n?1:0}" style="cursor:pointer"`:'';
    cells+=`<rect ${ic} data-i="${i}" x="${i*cw}" y="0" width="${cw}" height="${H}" fill="${fill}"/>`;
  }
  let divs='';
  for(let i=1;i<d;i++) divs+=`<line x1="${i*cw}" y1="0" x2="${i*cw}" y2="${H}" stroke="${th.stroke}" stroke-width="1.5"/>`;
  return`<svg width="${tw}" height="${H}" class="${inter?'isv':''}">`
    +`<defs><clipPath id="${cid}"><rect width="${tw}" height="${H}" rx="${rx}"/></clipPath></defs>`
    +`<g clip-path="url(#${cid})">${cells}${divs}</g>`
    +`<rect x="1" y="1" width="${tw-2}" height="${H-2}" rx="${rx-1}" fill="none" stroke="${th.stroke}" stroke-width="2"/>`
    +`</svg>`;
}

function dominoSVG(n, d, th, W=88){
  const cH=26,gap=5,px=8,py=4,cW=W-px*2;
  const H=py*2+d*cH+(d-1)*gap;
  let s='';
  for(let i=0;i<d;i++){
    const y=py+i*(cH+gap);
    s+=`<rect data-i="${i}" x="${px}" y="${y}" width="${cW}" height="${cH}" rx="6" fill="${i<n?th.fill:th.empty}" stroke="${th.stroke}" stroke-width="${i<n?'1.8':'1.2'}"/>`;
  }
  return`<svg width="${W}" height="${H}">${s}</svg>`;
}

function autoVis(n, d, th, size=175, inter=false){
  if(inter)return d<=6?circleSVG(n,d,th,size,true):barSVG(n,d,th,260,80,true);
  const r=Math.random();
  if(r<0.35)return circleSVG(n,d,th,size);
  if(r<0.70)return barSVG(n,d,th,260,72);
  return dominoSVG(n,d,th);
}

function gridSVG(d){
  const layout={2:[1,2],3:[1,3],4:[2,2],5:[1,5],6:[2,3],8:[2,4]};
  const cW=50,cH=50,gap=6;
  const [rows,cols]=layout[d]||[1,d];
  const W=cols*cW+(cols-1)*gap,H=rows*cH+(rows-1)*gap;
  let s='';
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const i=r*cols+c,x=c*(cW+gap),y=r*(cH+gap);
      s+=`<rect class="grid-cell" onclick="gridCellClick(this)" data-a="0" data-i="${i}" x="${x}" y="${y}" width="${cW}" height="${cH}" rx="5" fill="var(--b)" stroke="var(--m)" stroke-width="2"/>`;
    }
  }
  return`<svg viewBox="-2 -2 ${W+4} ${H+4}" style="max-width:100%;width:${W}px;height:${H}px">${s}</svg>`;
}
