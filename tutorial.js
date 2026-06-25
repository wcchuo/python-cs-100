/* =====================================================================
   Code Quest — first-launch guided tutorial
   A 4-step spotlight tour. A dark overlay covers the screen while the
   highlighted element stays bright (box-shadow trick), with a word bubble
   + arrow. Skip/Finish is remembered in localStorage so it never shows
   again. Re-runnable via CodeQuestTutorial.start().
   ===================================================================== */
(function(){
  const KEY = 'codequest.tutorial.v1';
  function isDone(){ try{ return localStorage.getItem(KEY)==='done'; }catch(e){ return true; } }
  function markDone(){ try{ localStorage.setItem(KEY,'done'); }catch(e){} }

  function navBtn(id){
    if(typeof SESSIONS==='undefined') return null;
    const i = SESSIONS.findIndex(s=>s.id===id);
    return i>=0 ? document.querySelectorAll('.navbtn')[i] : null;
  }
  function scratch(){ return document.getElementById('scratchpad'); }

  const steps = [
    { target:()=>document.getElementById('sidebar'), placement:'right',
      title:'Jump around anytime 🧭',
      text:'This is your menu. Click any session here to hop straight to it — whenever you like.' },
    { target:()=>scratch(), placement:'left', delay:360,
      before:()=>{ const s=scratch(); if(s) s.classList.add('open'); },
      title:'Your Scratchpad 🐍',
      text:'Open this to write and run ANY Python you want. Whatever you type stays here — even after you refresh the page!' },
    { target:()=>navBtn('practice'), placement:'right', delay:400,
      before:()=>{ const s=scratch(); if(s) s.classList.remove('open'); const b=navBtn('practice'); if(b) b.scrollIntoView({block:'center'}); },
      title:'Practice coding 🧪',
      text:'Solve fun, bite-size coding challenges here — the tester checks your answer instantly.' },
    { target:()=>navBtn('progress'), placement:'right', delay:400,
      before:()=>{ const b=navBtn('progress'); if(b) b.scrollIntoView({block:'center'}); },
      title:'Track your progress 🏅',
      text:'Every challenge you solve earns a badge. Pop in here now and then to see how far you have come!' },
  ];

  let els=null, cur=0;

  function build(){
    const blocker=document.createElement('div'); blocker.id='tut-blocker';
    const spot=document.createElement('div'); spot.id='tut-spot';
    const bubble=document.createElement('div'); bubble.id='tut-bubble';
    bubble.innerHTML =
      '<div class="tut-arrow"></div>'+
      '<div class="tut-title"></div>'+
      '<div class="tut-text"></div>'+
      '<div class="tut-row"><span class="tut-step"></span>'+
      '<span><button class="tut-skip">Skip</button>'+
      '<button class="tut-next">Next →</button></span></div>';
    document.body.append(blocker, spot, bubble);
    bubble.querySelector('.tut-skip').onclick = finish;
    bubble.querySelector('.tut-next').onclick = ()=>{ cur>=steps.length-1 ? finish() : show(cur+1); };
    window.addEventListener('resize', reposition);
    return { blocker, spot, bubble };
  }
  function cleanup(){
    if(!els) return;
    window.removeEventListener('resize', reposition);
    els.blocker.remove(); els.spot.remove(); els.bubble.remove(); els=null;
    const s=scratch(); if(s) s.classList.remove('open');
  }
  function finish(){ markDone(); cleanup(); }

  function show(i){
    cur=i; const step=steps[i];
    if(step.before) step.before();
    els.bubble.querySelector('.tut-title').textContent = step.title;
    els.bubble.querySelector('.tut-text').textContent  = step.text;
    els.bubble.querySelector('.tut-step').textContent  = 'Step '+(i+1)+' of '+steps.length;
    els.bubble.querySelector('.tut-next').textContent  = i>=steps.length-1 ? 'Got it! 🎉' : 'Next →';
    setTimeout(()=>position(step), step.delay||60);   // wait out scroll / slide-in
  }
  function reposition(){ if(els) position(steps[cur]); }

  function position(step){
    const { spot, bubble } = els;
    const vw=window.innerWidth, vh=window.innerHeight;
    const t = step.target && step.target();
    if(!t){ spot.style.display='none'; bubble.style.left=(vw/2-150)+'px'; bubble.style.top='40px'; return; }
    const r = t.getBoundingClientRect(), pad=8;
    spot.style.display='block';
    spot.style.left=(r.left-pad)+'px'; spot.style.top=(r.top-pad)+'px';
    spot.style.width=(r.width+pad*2)+'px'; spot.style.height=(r.height+pad*2)+'px';

    const bw=bubble.offsetWidth||300, bh=bubble.offsetHeight||150;
    let place = step.placement==='left' ? 'left' : 'right';
    let bx = place==='left' ? r.left-bw-22 : r.right+22;
    if(place==='right' && bx+bw>vw-12){ bx=r.left-bw-22; place='left'; }
    if(place==='left'  && bx<12){ bx=r.right+22; place='right'; }
    bx = Math.min(Math.max(12, bx), vw-bw-12);
    const by = Math.min(Math.max(12, r.top + r.height/2 - bh/2), vh-bh-12);
    bubble.style.left=bx+'px'; bubble.style.top=by+'px';
    bubble.dataset.place=place;
    const arrow=bubble.querySelector('.tut-arrow');
    let at=(r.top + r.height/2) - by; at=Math.min(Math.max(18, at), bh-18);
    arrow.style.top=at+'px';
  }

  function start(){ cleanup(); els=build(); show(0); }
  function maybeStart(){ if(!isDone()) start(); }

  window.CodeQuestTutorial = { start, maybeStart };
})();
