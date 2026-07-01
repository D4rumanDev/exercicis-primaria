// svg.js — Biblioteca SVG compartida per a tots els exercicis
// Carrega's ABANS de shared.js: <script src="../svg.js"></script>

let _svgUid = 0;
const _uid = () => ++_svgUid;

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

  // ── cm (amb embed al regle) ──────────────────────────────────
  { id:'clip', nom:'clip de paper', cat:'cm', art:'el', min:3, max:4, icon:'📎',
    embed(x,y,w,h,col='#1d4ed8'){
      return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 20" preserveAspectRatio="none">
        <rect x="2" y="1.5" width="96" height="17" rx="8.5" fill="none" stroke="${col}" stroke-width="3.5"/>
        <rect x="16" y="7" width="80" height="7" rx="3.5" fill="none" stroke="${col}" stroke-width="2.5"/>
      </svg>`;
    },
    standalone(col='#1d4ed8'){
      return `<svg viewBox="0 0 100 42" style="width:200px;height:auto;display:block;margin:auto">
        <rect x="4" y="3" width="92" height="36" rx="18" fill="none" stroke="${col}" stroke-width="4.5"/>
        <rect x="22" y="14" width="74" height="16" rx="7" fill="none" stroke="${col}" stroke-width="3.5"/>
      </svg>`;
    }
  },

  { id:'goma', nom:'goma d\'esborrar', cat:'cm', art:'la', min:4, max:7, icon:'🧹',
    embed(x,y,w,h,col='#ec4899'){
      return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 20" preserveAspectRatio="none">
        <rect x="1" y="1.5" width="97" height="17" rx="3" fill="#fce7f3" stroke="#be185d" stroke-width="1.5"/>
        <rect x="79" y="1.5" width="20" height="17" fill="#7c3aed"/>
        <text x="36" y="12.5" font-size="7.5" fill="#9d174d" font-weight="700" text-anchor="middle" dominant-baseline="middle" font-family="'Segoe UI',sans-serif">GOMA</text>
      </svg>`;
    },
    standalone(col='#ec4899'){
      return `<svg viewBox="0 0 100 38" style="width:220px;height:auto;display:block;margin:auto">
        <rect x="3" y="3" width="94" height="32" rx="4" fill="#fce7f3" stroke="#be185d" stroke-width="2"/>
        <rect x="79" y="3" width="18" height="32" fill="#7c3aed"/>
        <text x="38" y="23" font-size="10" fill="#9d174d" font-weight="700" text-anchor="middle" dominant-baseline="middle" font-family="'Segoe UI',sans-serif">GOMA</text>
      </svg>`;
    }
  },

  { id:'llapis', nom:'llapis', cat:'cm', art:'el', min:10, max:17, icon:'✏️',
    embed(x,y,w,h,col='#fbbf24'){
      return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 20" preserveAspectRatio="none">
        <polygon points="0,10 8,2.5 8,17.5" fill="#c8956c"/>
        <rect x="8" y="2.5" width="5" height="15" fill="#c8956c"/>
        <rect x="13" y="1" width="71" height="18" fill="${col}"/>
        <rect x="84" y="1" width="9" height="18" fill="#d1d5db"/>
        <rect x="84" y="1" width="1.5" height="18" fill="#9ca3af"/>
        <rect x="91.5" y="1" width="1.5" height="18" fill="#9ca3af"/>
        <rect x="93" y="3.5" width="7" height="13" rx="1.5" fill="#fca5a5"/>
      </svg>`;
    },
    standalone(col='#fbbf24'){
      return `<svg viewBox="0 0 100 28" style="width:260px;height:auto;display:block;margin:auto">
        <polygon points="0,14 12,4 12,24" fill="#c8956c"/>
        <rect x="12" y="4" width="8" height="20" fill="#c8956c"/>
        <rect x="20" y="2" width="62" height="24" fill="${col}"/>
        <rect x="82" y="2" width="12" height="24" fill="#d1d5db"/>
        <rect x="82" y="2" width="2" height="24" fill="#9ca3af"/>
        <rect x="92" y="2" width="2" height="24" fill="#9ca3af"/>
        <rect x="94" y="5" width="6" height="18" rx="2" fill="#fca5a5"/>
      </svg>`;
    }
  },

  { id:'boligraf', nom:'bolígraf', cat:'cm', art:'el', min:12, max:16, icon:'🖊️',
    embed(x,y,w,h,col='#1d4ed8'){
      return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 20" preserveAspectRatio="none">
        <polygon points="0,10 6,6 6,14" fill="#9ca3af"/>
        <rect x="6" y="4.5" width="9" height="11" fill="#d1d5db"/>
        <rect x="15" y="2" width="71" height="16" rx="3" fill="${col}"/>
        <rect x="86" y="2" width="12" height="16" rx="3" fill="#1f2937"/>
        <rect x="91" y="0" width="3" height="20" rx="1" fill="#4b5563"/>
      </svg>`;
    },
    standalone(col='#1d4ed8'){
      return `<svg viewBox="0 0 100 22" style="width:260px;height:auto;display:block;margin:auto">
        <polygon points="0,11 8,7 8,15" fill="#9ca3af"/>
        <rect x="8" y="6" width="10" height="10" fill="#d1d5db"/>
        <rect x="18" y="3" width="65" height="16" rx="4" fill="${col}"/>
        <rect x="83" y="3" width="14" height="16" rx="4" fill="#1f2937"/>
        <rect x="88" y="1" width="3" height="20" rx="1" fill="#374151"/>
      </svg>`;
    }
  },

  { id:'targeta', nom:'targeta de crèdit', cat:'cm', art:'la', min:8, max:9, icon:'💳',
    embed(x,y,w,h,col='#7c3aed'){
      const id=_uid();
      return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 100 63" preserveAspectRatio="none">
        <defs><linearGradient id="tg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${col}"/>
          <stop offset="100%" stop-color="#4c1d95"/>
        </linearGradient></defs>
        <rect x="1" y="1" width="98" height="61" rx="5" fill="url(#tg${id})"/>
        <rect x="0" y="16" width="100" height="14" fill="#0f172a" opacity=".8"/>
        <rect x="8" y="35" width="20" height="15" rx="2" fill="#d4b44a"/>
      </svg>`;
    },
    standalone(col='#7c3aed'){
      const id=_uid();
      return `<svg viewBox="0 0 85 54" style="width:200px;height:auto;display:block;margin:auto">
        <defs><linearGradient id="tg${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${col}"/>
          <stop offset="100%" stop-color="#4c1d95"/>
        </linearGradient></defs>
        <rect x="2" y="2" width="81" height="50" rx="5" fill="url(#tg${id})"/>
        <rect x="0" y="14" width="85" height="11" fill="#0f172a" opacity=".8"/>
        <rect x="12" y="28" width="16" height="13" rx="2" fill="#d4b44a"/>
      </svg>`;
    }
  },

  { id:'moneda_diam', nom:'moneda (diàmetre)', cat:'cm', art:'la', min:2, max:3, icon:'🪙',
    embed(x,y,w,h,col='#d4b44a'){
      const id=_uid();
      return `<svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 20 20" preserveAspectRatio="none">
        <defs><radialGradient id="mg${id}" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.6)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.2)"/>
        </radialGradient></defs>
        <circle cx="10" cy="10" r="9.5" fill="#8b6914"/>
        <circle cx="10" cy="10" r="8.5" fill="${col}"/>
        <circle cx="10" cy="10" r="8.5" fill="url(#mg${id})"/>
        <text x="10" y="10" font-size="5" font-weight="900" text-anchor="middle" dominant-baseline="middle" fill="rgba(0,0,0,0.7)" font-family="'Segoe UI',sans-serif">1€</text>
      </svg>`;
    },
    standalone(col='#d4b44a'){
      const id=_uid();
      return `<svg viewBox="0 0 40 40" style="width:100px;height:auto;display:block;margin:auto">
        <defs><radialGradient id="mg${id}" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.6)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.2)"/>
        </radialGradient></defs>
        <circle cx="20" cy="20" r="19" fill="#8b6914"/>
        <circle cx="20" cy="20" r="17" fill="${col}"/>
        <circle cx="20" cy="20" r="17" fill="url(#mg${id})"/>
        <text x="20" y="20" font-size="12" font-weight="900" text-anchor="middle" dominant-baseline="middle" fill="rgba(0,0,0,0.7)" font-family="'Segoe UI',sans-serif">1€</text>
      </svg>`;
    }
  },

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
