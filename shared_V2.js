// shared.js — Motor de gamificació i utilitats comunes a tots els exercicis
(function(){
  const t = localStorage.getItem('ex_theme');
  if(t) document.documentElement.setAttribute('data-theme', t);
})();

window.addEventListener('message', function(e){
  if(e.data && e.data.exTheme) document.documentElement.setAttribute('data-theme', e.data.exTheme);
});

const GAM = 'ex_gam_v1';
let GAM_LVS = [
  {n:'Principiant',x:0},{n:'Aprenent',x:75},{n:'Estudiant',x:200},
  {n:'Expert',x:450},{n:'Mestre',x:900}
];
let GAM_ACHS = [
  {id:'first',s:'🌟',n:'Primer Encert',d:'Primera resposta correcta'},
  {id:'s3',s:'🔥',n:'Ratxa x3',d:'3 encerts seguits'},
  {id:'s5',s:'⚡',n:'Ratxa x5',d:'5 encerts seguits'},
  {id:'s10',s:'💥',n:'Ratxa x10',d:'10 encerts seguits'},
  {id:'ok50',s:'🥉',n:'50 Encerts',d:'50 respostes correctes'},
  {id:'ok200',s:'🥈',n:'200 Encerts',d:'200 respostes correctes'},
  {id:'ok500',s:'🏆',n:'500 Encerts',d:'500 respostes correctes'}
];

const OK = ["Excel·lent!", "Molt bé!", "Correcte!", "Perfecte!", "Genial!"];
const KO = ["Torna-ho a provar", "No és correcte", "A gairebé", "Repassa-ho"];

const pick = a => a[Math.floor(Math.random()*a.length)];
const sh = a => {
  for(let i=a.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

let st = { xp:0, ok:0, ko:0, s:0, ms:0, achs:[] };

function gLoad(){
  try {
    const d = localStorage.getItem(GAM);
    if(d) {
      const p = JSON.parse(d);
      st = { ...st, ...p };
    }
  } catch(e) { console.error("Error carregant el dades de GAM", e); }
}

function gSave(){
  try {
    localStorage.setItem(GAM, JSON.stringify(st));
  } catch(e) { console.error("Error desant el dades de GAM", e); }
}

function gCorrect(xpAdd){
  st.xp += (xpAdd || 10);
  st.ok++;
  st.s++;
  if(st.s > st.ms) st.ms = st.s;
  gCheckAchs();
  gSave();
  gUpdateUI();
}

function gWrong(){
  st.ko++;
  st.s = 0;
  gSave();
  gUpdateUI();
}

function gCheckAchs(){
  let newA = [];
  autoAdd('first', st.ok >= 1);
  autoAdd('s3', st.ms >= 3);
  autoAdd('s5', st.ms >= 5);
  autoAdd('s10', st.ms >= 10);
  autoAdd('ok50', st.ok >= 50);
  autoAdd('ok200', st.ok >= 200);
  autoAdd('ok500', st.ok >= 500);

  function autoAdd(id, cond){
    if(cond && !st.achs.includes(id)){
      st.achs.push(id);
      newA.push(id);
    }
  }
  if(newA.length > 0) {
    newA.forEach(id => {
      const a = GAM_ACHS.find(x => x.id === id);
      if(a) gToast(`🏆 Assolit: ${a.n}`);
    });
  }
}

function gToast(txt){
  let t = document.getElementById('gam-toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'gam-toast';
    t.className = 'gam-toast';
    document.body.appendChild(t);
  }
  t.textContent = txt;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function gUpdateUI(){
  const xpB = document.getElementById('gam-bar');
  if(!xpB) return;
  
  let lv = GAM_LVS[0];
  for(let i=0; i<GAM_LVS.length; i++){
    if(st.xp >= GAM_LVS[i].x) lv = GAM_LVS[i];
  }
  const nxt = GAM_LVS[GAM_LVS.indexOf(lv)+1] || null;
  
  let pct = 100;
  let numStr = `${st.xp} XP`;
  if(nxt){
    const diff = nxt.x - lv.x;
    const cur = st.xp - lv.x;
    pct = Math.max(0, Math.min(100, (cur / diff) * 100));
    numStr = `${st.xp} / ${nxt.x} XP`;
  }

  xpB.innerHTML = `
    <div class="xp-block">
      <div class="xp-top">
        <span class="level-name">Nivell: ${lv.n}</span>
        ${st.s > 1 ? `<span class="xp-streak">🔥 Ratxa x${st.s}</span>` : ''}
        <span class="xp-nums">${numStr}</span>
      </div>
      <div class="xp-track"><div class="xp-fill" style="width:${pct}%"></div></div>
    </div>
  `;
}

function renderProbs(containerId, pool, count=5, xp=10, onOk=null, onKo=null){
  gLoad();
  gUpdateUI();
  if(!pool || pool.length === 0) return;
  
  let idxs = Array.from({length: pool.length}, (_,i)=>i);
  sh(idxs);
  const sel = idxs.slice(0, count);

  document.getElementById(containerId).innerHTML = sel.map((qi, i) => {
    const id = 'blc' + (i + 1);
    const p = pool[qi];
    const opts = sh([...p.opts]);
    return `
      <div class="prob" id="${id}">
        <div class="prob-t">${p.text}</div>
        <div class="prob-opts" id="${id}opts">
          ${opts.map(o => `<button class="popt" onclick="ansBlc('${id}', ${qi}, event)">${o}</button>`).join('')}
        </div>
        <div class="fb" id="${id}fb"></div>
      </div>
    `;
  }).join('');
  
  renderProbs._s = { pool, xp, onOk, onKo };
}

function ansBlc(id, qi, e){
  const { pool, xp, onOk, onKo } = renderProbs._s;
  const p = pool[qi];
  const btn = e.target;
  
  document.querySelectorAll(`#${id}opts .popt`).forEach(b => b.disabled = true);
  const fb = document.getElementById(id + 'fb');
  
  if(btn.textContent === p.ans){
    btn.classList.add('ok');
    if(onOk) {
      onOk(qi, fb);
    } else {
      fb.className = 'fb ok';
      fb.textContent = pick(OK);
      gCorrect(xp);
    }
  } else {
    btn.classList.add('ko');
    document.querySelectorAll(`#${id}opts .popt`).forEach(b => {
      if(b.textContent === p.ans) b.classList.add('show');
    });
    if(onKo) {
      onKo(qi, fb);
    } else {
      fb.className = 'fb ko';
      fb.textContent = `${pick(KO)}. La correcta era: ${p.ans}`;
      gWrong();
    }
  }
}