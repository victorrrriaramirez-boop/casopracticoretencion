(() => {
  'use strict';
  const chapters=[...document.querySelectorAll('.chapter')];
  const menu=document.getElementById('chapter-menu');
  const toggle=document.getElementById('menu-toggle');
  const motionButton=document.getElementById('motion');
  const full=document.getElementById('fullscreen');
  const status=document.getElementById('status');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let paused=reduced.matches,active=0,pending=false;
  try { const saved=localStorage.getItem('retencion-motion');if(saved!==null)paused=saved==='off'||reduced.matches;}catch{}
  function applyMotion(){
    document.body.dataset.motion=paused?'off':'on';
    motionButton.textContent=paused?'Activar movimiento':'Pausar movimiento';
    motionButton.setAttribute('aria-pressed',String(paused));
  }
  applyMotion();
  motionButton.addEventListener('click',()=>{paused=!paused;applyMotion();try{localStorage.setItem('retencion-motion',paused?'off':'on');}catch{}});
  reduced.addEventListener('change',e=>{paused=e.matches;applyMotion();});
  function closeMenu(restore=false){menu.hidden=true;toggle.setAttribute('aria-expanded','false');if(restore)toggle.focus();}
  toggle.addEventListener('click',()=>{const opening=menu.hidden;menu.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));});
  document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu();});
  menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
  function go(index){
    const next=Math.max(0,Math.min(chapters.length-1,index));
    chapters[next].scrollIntoView({behavior:paused||reduced.matches?'instant':'smooth',block:'start'});
  }
  document.getElementById('previous').addEventListener('click',()=>go(active-1));
  document.getElementById('next').addEventListener('click',()=>go(active+1));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){closeMenu(true);return;}
    if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.target.isContentEditable||e.altKey||e.ctrlKey||e.metaKey)return;
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(active+(e.key==='ArrowRight'?1:-1));}
  });
  full.addEventListener('click',async()=>{
    try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
    catch{status.textContent='No se ha podido activar la pantalla completa. Puedes utilizar la opción de pantalla completa de tu navegador.';}
  });
  document.addEventListener('fullscreenchange',()=>{full.textContent=document.fullscreenElement?'Salir de pantalla completa':'Pantalla completa';});
  if(!document.fullscreenEnabled)full.hidden=true;
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -20px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    document.documentElement.classList.add('enhanced');
  }
  const steps=[...document.querySelectorAll('.story-step')];
  const graph=document.querySelector('.sticky-chart');
  const phases=['2025 · Referencia','2026 · Primer semestre','2026 · Julio–septiembre'];
  function update(){
    pending=false;
    const marker=innerHeight*.28;
    let current=0;
    chapters.forEach((s,i)=>{if(s.getBoundingClientRect().top<=marker)current=i;});
    active=current;
    document.getElementById('chapter-counter').textContent=String(active+1).padStart(2,'0')+' / '+chapters.length;
    document.getElementById('previous').disabled=active===0;
    document.getElementById('next').disabled=active===chapters.length-1;
    document.querySelectorAll('[data-chapter]').forEach(a=>{if(Number(a.dataset.chapter)===active)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
    const max=document.documentElement.scrollHeight-innerHeight;
    document.getElementById('reading-progress').style.width=(max>0?Math.min(100,100*scrollY/max):0)+'%';
    if(!paused&&!reduced.matches&&scrollY<innerHeight*1.4)document.documentElement.style.setProperty('--orb-y',Math.min(scrollY*.08,50)+'px');
    let near=0,dist=Infinity;
    steps.forEach((s,i)=>{const r=s.getBoundingClientRect(),d=Math.abs(r.top+r.height*.5-innerHeight*.65);if(d<dist){near=i;dist=d;}});
    steps.forEach((s,i)=>s.classList.toggle('active',i===near));
    const stage=steps[0].parentElement.getBoundingClientRect();
    if(stage.top<innerHeight&&stage.bottom>0){graph.dataset.phase=String(near);document.getElementById('phase-label').textContent=phases[near];}
  }
  const queue=()=>{if(!pending){pending=true;requestAnimationFrame(update);}};
  addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue);update();
})();
