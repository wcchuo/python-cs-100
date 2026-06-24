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

function problemById(id){ return PROBLEMS.find(p=>p.id===id); }

function setupPractice(){
  if(typeof PROBLEMS === 'undefined') return;   // problems.js not loaded
  PROBLEMS.forEach(p=>{
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
}

/* ---------- Run all tests for one problem ---------- */
async function runProblem(id){
  const p = problemById(id);
  const ed = document.getElementById('sol_'+id);
  const out = document.getElementById('judge_'+id);
  if(!p || !ed || !out) return;
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
}

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
