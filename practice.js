/* =====================================================================
   Code Quest — Practice page wiring
   STEP 1 (this commit): per-problem solution persistence in localStorage.
   STEP 2 (next commit): real Python test runner (Pyodide in a Web Worker)
                         is attached to window.Judge and called from here.
   ===================================================================== */
const SOL_PREFIX = 'codequest.sol.';            // localStorage key per problem
const solKey = (id)=> SOL_PREFIX + id;
function loadSolution(id){
  try{ return localStorage.getItem(solKey(id)); }catch(e){ return null; }
}
function saveSolution(id, code){
  try{ localStorage.setItem(solKey(id), code); }catch(e){/* quota/blocked */}
}

// problemById() and the registry (ALL_PROBLEMS) live in problems.js.

/* ---------- Solved state (persisted) ---------- */
const SOLVED_PREFIX = 'codequest.solved.';
const solvedKey = (id)=> SOLVED_PREFIX + id;
function isSolved(id){ try{ return localStorage.getItem(solvedKey(id))==='1'; }catch(e){ return false; } }
function markSolved(id){ try{ localStorage.setItem(solvedKey(id), '1'); }catch(e){} }
function solvedCount(){ return (typeof ALL_PROBLEMS!=='undefined') ? ALL_PROBLEMS.filter(p=>isSolved(p.id)).length : 0; }
// Add the 🏅 chip to a problem card (once).
function addSolvedBadge(id){
  const head = document.querySelector(`.problem[data-pid="${id}"] h4`);
  if(head && !head.querySelector('.solved-badge')){
    const b=document.createElement('span'); b.className='solved-badge'; b.textContent='🏅 Solved';
    head.appendChild(b);
  }
}

function setupPractice(){
  if(typeof ALL_PROBLEMS === 'undefined') return;   // problems.js not loaded
  ALL_PROBLEMS.forEach(p=>{
    if(isSolved(p.id)) addSolvedBadge(p.id);         // restore earned badges
    const ed = document.getElementById('sol_'+p.id);
    if(!ed) return;
    // Restore the kid's saved work (fall back to the starter code).
    const saved = loadSolution(p.id);
    if(saved != null) ed.value = saved;
    // Debounced auto-save so a refresh never loses work.
    let t=null;
    ed.addEventListener('input', ()=>{
      clearTimeout(t);
      t=setTimeout(()=>saveSolution(p.id, ed.value), 300);
    });
  });

  // Reset a solution back to its starter code (and persist that).
  document.addEventListener('click',(e)=>{
    const rt = e.target.closest('[data-runtests]');
    const rs = e.target.closest('[data-psol-reset]');
    if(rs){
      const id = rs.dataset.psolReset, p = problemById(id);
      const ed = document.getElementById('sol_'+id);
      if(p && ed){ ed.value = p.starter; saveSolution(id, p.starter);
        document.getElementById('judge_'+id).innerHTML =
          '<span class="mini">Reset. Press ▶ Run Tests to check your answer.</span>'; }
    }
    if(rt){ runProblem(rt.dataset.runtests); }
  });

  renderProgress();
  // Re-render the progress dashboard whenever the kid navigates to it.
  window.addEventListener('hashchange', renderProgress);
}

// Show "🏅 done/total" on the My Progress sidebar button.
function updateNavBadge(){
  if(typeof SESSIONS==='undefined' || typeof ALL_PROBLEMS==='undefined') return;
  const idx = SESSIONS.findIndex(s=>s.id==='progress');
  if(idx<0) return;
  const btn = document.querySelectorAll('.navbtn')[idx];
  if(!btn) return;
  let badge = btn.querySelector('.navcount');
  if(!badge){ badge=document.createElement('span'); badge.className='navcount'; btn.appendChild(badge); }
  badge.textContent = `🏅 ${solvedCount()}/${ALL_PROBLEMS.length}`;
}

/* ---------- Progress dashboard ---------- */
function renderProgress(){
  updateNavBadge();
  const root = document.getElementById('progress-root');
  if(!root || typeof ALL_PROBLEMS==='undefined') return;
  const total = ALL_PROBLEMS.length;
  const done = solvedCount();
  const pct = total ? Math.round(done/total*100) : 0;
  // Motivating message that grows with progress.
  let cheer;
  if(done===0)            cheer = "Every coder starts at zero. Press ▶ Run Tests on a challenge to earn your first 🏅!";
  else if(done===total)   cheer = "🎉 INCREDIBLE! You've solved EVERY challenge. You're a true Python coder!";
  else if(pct>=75)        cheer = "🔥 So close! You're crushing it — just a few left.";
  else if(pct>=50)        cheer = "💪 Over halfway! Keep that streak going.";
  else if(pct>=25)        cheer = "🚀 Great start — you're building real coding muscles.";
  else                    cheer = "🌱 Nice — your first badges are in! One challenge at a time.";

  let html = `
    <div class="prog-hero">
      <div class="prog-big">${done} <span class="prog-of">/ ${total}</span></div>
      <div class="prog-sub">challenges conquered</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%"></div></div>
      <div class="prog-cheer">${cheer}</div>
    </div>
    <div class="prog-grid">`;
  ALL_PROBLEMS.forEach(p=>{
    const ok = isSolved(p.id);
    html += `<div class="prog-chip ${ok?'done':''}">
      <span class="prog-ic">${ok?'🏅':'⬜'}</span>
      <span class="prog-name">${p.title}</span>
      <span class="pill">${p.level}</span></div>`;
  });
  html += `</div>`;
  root.innerHTML = html;
}

/* ---------- Run all tests for one problem ---------- */
async function runProblem(id){
  const p = problemById(id);
  const ed = document.getElementById('sol_'+id);
  const out = document.getElementById('judge_'+id);
  if(!p || !ed || !out) return;
  FX.warm();                                    // unlock audio during the click gesture
  saveSolution(id, ed.value);                   // make sure latest is stored

  if(!window.Judge){                            // STEP 2 attaches this
    out.innerHTML = '<span class="mini">⏳ The Python tester isn\'t loaded yet.</span>';
    return;
  }
  out.innerHTML = '<span class="mini">⏳ Warming up Python and running tests…</span>';
  try{
    const results = await window.Judge.runTests(ed.value, p);
    renderResults(out, p, results);
  }catch(err){
    out.innerHTML = '<div class="jrow jerr">⚠ Tester error: '+escapeHtml(String(err))+'</div>';
  }
}

/* ---------- Render pass/fail rows ---------- */
function renderResults(out, p, results){
  const passed = results.filter(r=>r.status==='PASS').length;
  const total = results.length;
  const allPass = passed===total;
  let html = `<div class="jsummary ${allPass?'jpass':'jfail'}">`
    + (allPass ? `🏆 All ${total} tests passed!` : `${passed} / ${total} tests passed — keep going!`)
    + `</div>`;
  results.forEach((r,i)=>{
    const hidden = (p.hiddenFrom!=null && i>=p.hiddenFrom);
    const cls = r.status==='PASS' ? 'jpass' : r.status==='FAIL' ? 'jfail' : 'jerr';
    const icon = r.status==='PASS' ? '✓' : r.status==='FAIL' ? '✗' : '⚠';
    let detail;
    if(r.status==='ERROR'){
      detail = `<span class="jmsg">${escapeHtml(r.message||'error')}</span>`;
    } else if(hidden){
      detail = `<span class="mini">hidden test</span>`;
    } else {
      const input = p.mode==='function'
        ? `${p.funcName}(${(r.args||[]).map(a=>JSON.stringify(a)).join(', ')})`
        : `input: ${JSON.stringify(r.stdin||'')}`;
      detail = `<code>${escapeHtml(input)}</code> → expected <code>${escapeHtml(r.expected)}</code>`
        + (r.status==='FAIL' ? `, got <code>${escapeHtml(r.got)}</code>` : '');
    }
    html += `<div class="jrow ${cls}"><span class="jicon">${icon}</span>
      <span class="jlabel">Test ${i+1}</span> ${detail}</div>`;
  });
  out.innerHTML = html;
  // 🎉 Reward feedback: celebrate a full pass, gently buzz otherwise.
  if(allPass){
    const fresh = !isSolved(p.id);
    markSolved(p.id); addSolvedBadge(p.id); renderProgress();
    FX.celebrate(out);
    if(fresh){
      const note=document.createElement('div'); note.className='jearned';
      note.textContent='🏅 New badge earned! See the Progress page.';
      out.appendChild(note);
    }
  } else { FX.buzz(); }
}

/* =====================================================================
   FX — fun feedback. Sounds are synthesized with the Web Audio API
   (no downloads, works offline); confetti is drawn on a throwaway canvas.
   ===================================================================== */
const FX = (function(){
  let actx = null;
  function ctx(){                       // lazily create + unlock the audio context
    try{
      if(!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if(actx.state === 'suspended') actx.resume();
      return actx;
    }catch(e){ return null; }
  }
  function tone(c, freq, t0, dur, type, vol){
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.02);
  }
  function buzz(){                       // short descending "error" beep
    const c = ctx(); if(!c) return; const t = c.currentTime;
    tone(c, 196, t,        0.18, 'square', 0.16);
    tone(c, 138, t + 0.16, 0.24, 'square', 0.16);
  }
  function tada(){                       // little rising fanfare into a major chord
    const c = ctx(); if(!c) return; const t = c.currentTime;
    tone(c, 523.25, t,        0.12, 'triangle', 0.18);  // C5
    tone(c, 659.25, t + 0.10, 0.12, 'triangle', 0.18);  // E5
    tone(c, 783.99, t + 0.20, 0.55, 'triangle', 0.20);  // G5
    tone(c, 1046.5, t + 0.20, 0.55, 'triangle', 0.14);  // C6
  }
  function confetti(originEl){
    const cv = document.createElement('canvas');
    cv.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth, H = window.innerHeight;
    cv.width = W*dpr; cv.height = H*dpr; cv.style.width = W+'px'; cv.style.height = H+'px';
    document.body.appendChild(cv);
    const g = cv.getContext('2d'); g.scale(dpr, dpr);
    const colors = ['#ffd166','#5ee6a0','#5cc8ff','#b388ff','#ff6b8a'];
    // Burst from the results box if we can find it, else screen center.
    let ox = W/2, oy = H*0.3;
    if(originEl){ const r = originEl.getBoundingClientRect(); ox = r.left + r.width/2; oy = r.top + 20; }
    const parts = [];
    for(let i=0;i<130;i++){
      const a = Math.random()*Math.PI*2, sp = 3 + Math.random()*7;
      parts.push({ x:ox, y:oy, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp - 4,
        gr:0.16+Math.random()*0.12, w:6+Math.random()*6, h:8+Math.random()*8,
        rot:Math.random()*Math.PI, vr:(Math.random()-0.5)*0.35, color:colors[i%colors.length] });
    }
    const start = performance.now(), LIFE = 1800;
    (function frame(now){
      const el = now - start;
      g.clearRect(0,0,W,H);
      parts.forEach(p=>{ p.vy += p.gr; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
        g.save(); g.translate(p.x, p.y); g.rotate(p.rot);
        g.globalAlpha = Math.max(0, 1 - el/LIFE); g.fillStyle = p.color;
        g.fillRect(-p.w/2, -p.h/2, p.w, p.h); g.restore(); });
      if(el < LIFE) requestAnimationFrame(frame); else cv.remove();
    })(start);
  }
  return {
    warm: ctx,                          // call during a click so audio can play later
    buzz,
    celebrate(originEl){ tada(); confetti(originEl); },
  };
})();

/* =====================================================================
   STEP 2 — the Python test runner (Pyodide in a Web Worker).
   window.Judge.runTests(code, problem) -> Promise<results[]>
   - First call lazily boots the worker (downloads Python once).
   - A timeout terminates a runaway worker (kills infinite loops), then the
     next run boots a fresh one.
   ===================================================================== */
(function(){
  const EXEC_TIMEOUT_MS = 6000;     // per Run Tests, AFTER Python is loaded
  let worker=null, readyPromise=null, readyResolve, readyReject, seq=0;
  const pending = {};

  function makeWorker(){
    worker = new Worker('judge.worker.js');
    worker.onmessage = (e)=>{
      const m = e.data;
      if(m.type==='ready'){ readyResolve && readyResolve(); }
      else if(m.type==='error' && m.fatal){ readyReject && readyReject(new Error(m.error)); }
      else if(m.type==='result'){ const p=pending[m.reqId]; if(p){ delete pending[m.reqId]; p(m); } }
    };
    worker.onerror = (ev)=>{ readyReject && readyReject(new Error(ev.message||'worker failed')); };
  }
  function ensureReady(){
    if(!readyPromise){
      readyPromise = new Promise((res,rej)=>{ readyResolve=res; readyReject=rej; });
      makeWorker();
      worker.postMessage({ type:'init' });
    }
    return readyPromise;
  }
  function resetWorker(){
    try{ worker && worker.terminate(); }catch(e){}
    worker=null; readyPromise=null;
    for(const k in pending) delete pending[k];
  }

  async function runTests(code, problem){
    await ensureReady();
    const reqId = ++seq;
    const result = new Promise((resolve)=>{ pending[reqId]=resolve; });
    // problem must be structured-clone-safe; it's plain data already.
    worker.postMessage({ type:'run', reqId, code, problem });
    const timeout = new Promise((resolve)=> setTimeout(()=>resolve({timeout:true}), EXEC_TIMEOUT_MS));
    const winner = await Promise.race([result, timeout]);
    if(winner.timeout){
      resetWorker();   // kill the runaway; next run boots fresh
      return problem.tests.map(()=>({ status:'ERROR', message:'Timed out — is there an infinite loop?' }));
    }
    if(!winner.ok) throw new Error(winner.error || 'tester failed');
    return winner.results;
  }

  window.Judge = { runTests };
})();
