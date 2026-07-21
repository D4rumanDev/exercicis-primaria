// shared.js — Motor de gamificació i utilitats comunes a tots els exercicis
(function(){const t=localStorage.getItem('ex_theme');if(t)document.documentElement.setAttribute('data-theme',t);})();
window.addEventListener('message',function(e){if(e.data&&e.data.exTheme)document.documentElement.setAttribute('data-theme',e.data.exTheme);});
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

function _eKey(){return typeof EXER_KEY!=='undefined'&&EXER_KEY?EXER_KEY:null;}
function gLoad(){const today=new Date().toISOString().slice(0,10);try{const g=JSON.parse(localStorage.getItem(GAM))||{xp:0,ok:0,ko:0,streak:0,best:0,achs:[]};if(g.today!==today){if(g.today&&(g.todayOk||g.todayKo)){try{const h=JSON.parse(localStorage.getItem('ex_hist_v1')||'[]');h.push({d:g.today,ok:g.todayOk||0,ko:g.todayKo||0});h.sort((a,b)=>a.d<b.d?-1:1);localStorage.setItem('ex_hist_v1',JSON.stringify(h.slice(-90)));}catch(_){}}g.today=today;g.todayOk=0;g.todayKo=0;}return g;}catch(_){return{xp:0,ok:0,ko:0,streak:0,best:0,achs:[],today,todayOk:0,todayKo:0};}}
function gSave(g){localStorage.setItem(GAM,JSON.stringify(g));if(window.parent!==window)window.parent.postMessage({exGamUpdate:true},'*');}
function eLoad(){const k=_eKey();if(!k)return{};try{return JSON.parse(localStorage.getItem(k))||{};}catch(_){return{};}}
function eSave(e){const k=_eKey();if(k)localStorage.setItem(k,JSON.stringify(e));}
function gLv(xp){let l=GAM_LVS[0];for(const v of GAM_LVS)if(xp>=v.x)l=v;return l;}
function gNext(xp){for(const v of GAM_LVS)if(xp<v.x)return v;return null;}

let gStatsVisible=false,gAchsVisible=false;
function gRender(){
  const g=gLoad(),lv=gLv(g.xp),nx=gNext(g.xp);
  const pct=nx?Math.min(100,Math.round((g.xp-lv.x)/(nx.x-lv.x)*100)):100;
  const xpStr=g.xp+' XP'+(nx?' · fins '+nx.n+': '+(nx.x-g.xp)+' XP':' · Nivell màxim');
  const achH=GAM_ACHS.map(a=>{const e=g.achs.includes(a.id);
    return '<div class="ach-row'+(e?' earned':' locked')+'">'
      +'<div class="ach-sym">'+a.s+'</div>'
      +'<div><div class="ach-name">'+a.n+'</div><div class="ach-desc">'+a.d+'</div></div>'
      +(e?'<span class="ach-earn">✓</span>':'')+'</div>';
  }).join('');
  const extraH=typeof gStatsExtra==='function'?gStatsExtra(g):'';
  const el=document.getElementById('gam-bar');if(!el)return;
  el.innerHTML=
    '<div class="xp-block"><div class="xp-top"><span class="level-name">'+lv.n+(g.streak>1?'<span class="xp-streak"> 🔥'+g.streak+'</span>':'')+'</span><span class="xp-nums">'+xpStr+'</span></div>'
    +'<div class="xp-track"><div class="xp-fill" style="width:'+pct+'%"></div></div></div>'
    +'<div class="gam-tabs">'
    +'<button class="gam-tab'+(gStatsVisible?' on':'')+'" onclick="gToggleStats()">📊 Estadístiques</button>'
    +'<button class="gam-tab'+(gAchsVisible?' on':'')+'" onclick="gToggleAchs()">🏅 Assoliments</button>'
    +'</div>'
    +(gStatsVisible?'<div class="stats-row">'
      +'<div class="stat"><div class="stat-num">'+g.ok+'</div><div class="stat-lbl">✅ Encerts</div></div>'
      +'<div class="stat"><div class="stat-num">'+g.ko+'</div><div class="stat-lbl">❌ Errors</div></div>'
      +'<div class="stat"><div class="stat-num">'+g.streak+'</div><div class="stat-lbl">🔥 Ratxa</div></div>'
      +'<div class="stat"><div class="stat-num">'+g.achs.length+'</div><div class="stat-lbl">🏅 Assolim.</div></div>'
    +'</div>'+extraH+'<button class="reset-lnk" onclick="gReset()">Reiniciar progrés</button>':'')
    +(gAchsVisible?'<div class="ach-grid">'+achH+'</div>':'');
}
function gToggleStats(){gStatsVisible=!gStatsVisible;if(gStatsVisible)gAchsVisible=false;gRender();}
function gToggleAchs(){gAchsVisible=!gAchsVisible;if(gAchsVisible)gStatsVisible=false;gRender();}
function gReset(){
  if(!confirm('Vols reiniciar el progrés?'))return;
  localStorage.removeItem(GAM);
  localStorage.removeItem('ex_hist_v1');
  const k=_eKey();if(k)localStorage.removeItem(k);
  if(typeof gResetExtra==='function')gResetExtra();
  gRender();
}
function gNotif(text){
  let t=document.getElementById('gam-toast');
  if(!t){t=document.createElement('div');t.id='gam-toast';t.className='gam-toast';document.body.appendChild(t);}
  t.textContent=text;t.classList.add('show');clearTimeout(t._ti);t._ti=setTimeout(()=>t.classList.remove('show'),2500);
}
// gCorrect(xp, typeOrFn)
//   typeOrFn = string  → incrementa e[type] al per-exercise storage
//   typeOrFn = function → passa tryA al callback per assoliments personalitzats
//   hook gExtraAchs(g, tryA) → assoliments addicionals definits al fitxer
function gCorrect(xp=1,typeOrFn=null){
  const g=gLoad(),prevLv=gLv(g.xp).n;
  g.xp+=xp;g.ok++;g.todayOk=(g.todayOk||0)+1;g.streak++;if(g.streak>g.best)g.best=g.streak;
  const newA=[];
  const tryA=(id,cond)=>{if(!g.achs.includes(id)&&cond){g.achs.push(id);newA.push(id);}};
  tryA('first',g.ok>=1);tryA('s3',g.streak>=3);tryA('s5',g.streak>=5);tryA('s10',g.streak>=10);
  tryA('ok50',g.ok>=50);tryA('ok200',g.ok>=200);tryA('ok500',g.ok>=500);
  const e=eLoad();e.ok=(e.ok||0)+1;if(typeof typeOrFn==='string'&&typeOrFn)e[typeOrFn]=(e[typeOrFn]||0)+1;eSave(e);
  if(typeof typeOrFn==='function')typeOrFn(tryA);
  if(typeof gExtraAchs==='function')gExtraAchs(g,tryA);
  gSave(g);gRender();
  if(gLv(g.xp).n!==prevLv)gNotif('🎉 Nou nivell: '+gLv(g.xp).n+'!');
  newA.forEach(id=>{const a=GAM_ACHS.find(x=>x.id===id);if(a)gNotif(a.s+' '+a.n+'!');});
  boom();
}
function gWrong(){const g=gLoad();g.ko++;g.todayKo=(g.todayKo||0)+1;g.streak=0;gSave(g);gRender();const e=eLoad();e.ko=(e.ko||0)+1;eSave(e);}
// ZPD adaptive selection: pick from levels[] using challenge-zone weighting.
// statsFn(level) must return {c,e}. Peak weight at ~62% accuracy; mastered (>88%) → 0.3; unexplored (<4 tries) → 2.0.
function gAdapt(levels,statsFn){
  const w=levels.map(l=>{const s=statsFn(l)||{c:0,e:0},tot=(s.c||0)+(s.e||0);if(tot<4)return 2.0;const acc=(s.c||0)/tot;if(acc>0.88)return 0.3;if(acc<0.35)return 0.6;return 0.8+1.2*Math.sin(Math.PI*(acc-0.35)/0.53);});
  const tw=w.reduce((a,b)=>a+b,0);let r=Math.random()*tw;
  for(let i=0;i<levels.length;i++){r-=w[i];if(r<=0)return levels[i];}
  return levels[levels.length-1];
}
function boom(){
  const c=['#1d4ed8','#fbbf24','#16a34a','#dc2626','#7c3aed'];
  const vh=window.innerHeight;
  for(let i=0;i<30;i++){
    const e=document.createElement('div');e.className='cp';
    e.style.cssText=`left:${Math.random()*100}vw;top:-20px;background:${c[i%c.length]};border-radius:${Math.random()>.5?'50%':'2px'};animation:none`;
    document.body.appendChild(e);
    const delay=Math.random()*600, dur=800+Math.random()*800, rot=360+Math.random()*720;
    const t0=performance.now()+delay;
    (function frame(now){
      if(now<t0){requestAnimationFrame(frame);return;}
      const p=Math.min((now-t0)/dur,1);
      e.style.transform=`translateY(${p*(vh+20)}px) rotate(${p*rot}deg)`;
      e.style.opacity=String(1-Math.max(0,(p-.5)*2));
      if(p<1)requestAnimationFrame(frame);else e.remove();
    })(performance.now());
  }
}

const ri=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=arr=>arr[Math.floor(Math.random()*arr.length)];
function sh(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=ri(0,i);[b[i],b[j]]=[b[j],b[i]];}return b;}
function setFb(id,ok,msg){const el=document.getElementById(id);if(!el)return;el.className='fb '+(ok?'ok':'ko');el.textContent=msg;}
function renderOpts(containerId,opts,correctVal,onOk,onKo){
  const od=document.getElementById(containerId);if(!od)return;
  od.innerHTML='';
  opts.forEach(o=>{
    const b=document.createElement('button');b.className='aopt';b.textContent=o;
    b.onclick=()=>{
      od.querySelectorAll('.aopt').forEach(x=>x.disabled=true);
      if(o===correctVal){b.classList.add('ok');onOk(b);}
      else{b.classList.add('ko');b.classList.add('shk');od.querySelectorAll('.aopt').forEach(x=>{if(x.textContent===correctVal)x.classList.add('show');});onKo(b);}
    };
    od.appendChild(b);
  });
}
const OK=['Genial! ⭐','Perfecte! 🎉','Correcte! 🌟','Exacte! 🏆','Increïble! 💪','Bravo! 🎊'];
const KO=['Gairebé!','Continua practicant!','Ei! No era aquesta.','Intenta-ho la pròxima!'];
function renderProbs(pool,containerId,n,xp,onOk,onKo){
  n=n??3;xp=xp??5;
  const sel=sh([...Array(pool.length).keys()]).slice(0,n);
  document.getElementById(containerId).innerHTML=sel.map((qi,i)=>{
    const id='blc'+(i+1),p=pool[qi],opts=sh([...p.opts]);
    return `<div class="prob" id="${id}"><div class="prob-t">${p.text}</div>`
      +`<div class="prob-opts" id="${id}opts">`
      +opts.map(o=>`<button class="popt" onclick="ansBlc('${id}',${qi},event)">${o}</button>`).join('')
      +`</div><div class="fb" id="${id}fb"></div></div>`;
  }).join('');
  renderProbs._s={pool,xp,onOk:onOk||null,onKo:onKo||null};
}
function ansBlc(id,qi,e){
  const {pool,xp,onOk,onKo}=renderProbs._s,p=pool[qi],btn=e.target;
  document.querySelectorAll(`#${id}opts .popt`).forEach(b=>b.disabled=true);
  const fb=document.getElementById(id+'fb');
  if(btn.textContent===p.ans){
    btn.classList.add('ok');
    if(onOk)onOk(qi,fb);else{fb.className='fb ok';fb.textContent=pick(OK);gCorrect(xp);}
  }else{
    btn.classList.add('ko');
    document.querySelectorAll(`#${id}opts .popt`).forEach(b=>{if(b.textContent===p.ans)b.classList.add('show');});
    if(onKo)onKo(qi,fb);else{fb.className='fb ko';fb.textContent='Era '+p.ans;gWrong();}
  }
}
function checkInp(inputId,correct,fbId,xp){
  const el=document.getElementById(inputId);
  const ok=el.value.trim()===String(correct);
  el.classList.toggle('ok',ok);el.classList.toggle('ko',!ok);
  setFb(fbId,ok,ok?pick(OK):'Era '+correct);
  ok?gCorrect(xp??1):gWrong();
  return ok;
}
function clrInp(id){const el=document.getElementById(id);if(el){el.value='';el.classList.remove('ok','ko');}}
let _sid=0;const svgId=()=>++_sid;

function onEnter(inputId,fn){const el=document.getElementById(inputId);if(!el||el._enterBound)return;el._enterBound=true;el.addEventListener('keydown',e=>{if(e.key==='Enter')fn();});}
document.addEventListener('DOMContentLoaded',()=>{if(window.parent!==window)window.parent.postMessage({exTitle:document.title},'*');});
