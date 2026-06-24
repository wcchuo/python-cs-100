/* =====================================================================
   Code Quest — judge worker
   Runs REAL Python (CPython via Pyodide/WebAssembly) off the main thread,
   so a heavy run never freezes the UI and a runaway loop can be killed by
   terminating the worker.

   Protocol (messages from the main thread):
     {type:'init'}                       -> loads Pyodide, replies {type:'ready'}
     {type:'run', reqId, code, problem}  -> runs every test, replies
                                            {type:'result', reqId, ok, results}
   ===================================================================== */
const PYODIDE_VERSION = 'v0.26.4';
let pyodide = null;

async function init(){
  importScripts(`https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/pyodide.js`);
  pyodide = await loadPyodide({ indexURL:`https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/` });
}

// Pull the meaningful last line out of a Python traceback for kid-friendly errors.
function oneLineError(msg){
  const lines = String(msg).trim().split('\n').filter(l=>l.trim());
  return lines.length ? lines[lines.length-1] : String(msg);
}

// Convert a Python return value to a plain JS value, cleaning up the proxy.
function toJsSafe(v){
  if(v && typeof v === 'object' && typeof v.toJs === 'function'){
    const j = v.toJs({ create_proxies:false });
    if(typeof v.destroy === 'function') v.destroy();
    return j;
  }
  return v;
}

function deepEqual(a, b){
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b));
}
// Maps (from toJs) -> objects; everything else passes through.
function normalize(x){
  if(x instanceof Map) return Object.fromEntries([...x.entries()].map(([k,v])=>[k, normalize(v)]));
  if(Array.isArray(x)) return x.map(normalize);
  return x;
}

function runFunctionCase(code, problem, tc){
  const ns = pyodide.toPy({});
  let pyArgs = null;
  try{
    pyodide.runPython(code, { globals: ns });          // define the function
    if(pyodide.runPython(`'${problem.funcName}' in dir()`, { globals: ns }) === false){
      return { status:'ERROR', message:`No function named ${problem.funcName}() found.` };
    }
    pyArgs = pyodide.toPy(tc.args);
    ns.set('__args__', pyArgs);
    const res = pyodide.runPython(`${problem.funcName}(*__args__)`, { globals: ns });
    const got = toJsSafe(res);
    const status = deepEqual(got, tc.expected) ? 'PASS' : 'FAIL';
    return { status, args: tc.args, expected: JSON.stringify(tc.expected), got: JSON.stringify(got) };
  }catch(e){
    return { status:'ERROR', args: tc.args, message: oneLineError(e.message || e) };
  }finally{
    if(pyArgs && pyArgs.destroy) pyArgs.destroy();
    ns.destroy();
  }
}

function runStdoutCase(code, problem, tc){
  const ns = pyodide.toPy({});
  const lines = pyodide.toPy((tc.stdin || '').split('\n'));
  try{
    ns.set('__inbuf__', lines);
    pyodide.runPython(
      'import sys, io, builtins\n' +
      '__it__ = iter(__inbuf__)\n' +
      'builtins.input = lambda *a, **k: next(__it__)\n' +
      'sys.stdout = io.StringIO()\n', { globals: ns });
    let got = '', status, message;
    try{
      pyodide.runPython(code, { globals: ns });
      got = pyodide.runPython('sys.stdout.getvalue()', { globals: ns });
    }catch(e){
      message = oneLineError(e.message || e); status = 'ERROR';
    }
    pyodide.runPython('sys.stdout = sys.__stdout__', { globals: ns });
    if(status !== 'ERROR'){
      const norm = s => String(s).replace(/\s+$/,'');   // ignore trailing whitespace/newlines
      status = norm(got) === norm(tc.expected) ? 'PASS' : 'FAIL';
    }
    return { status, stdin: tc.stdin, expected: tc.expected, got: String(got).trim(), message };
  }finally{
    if(lines && lines.destroy) lines.destroy();
    ns.destroy();
  }
}

// expr mode: run the user's code (e.g. a class), optionally run a few setup
// statements, then evaluate one expression and compare its value. Great for
// classes:  setup "c=Counter()\nc.add()" , expr "c.value()".
function runExprCase(code, problem, tc){
  const ns = pyodide.toPy({});
  try{
    pyodide.runPython(code, { globals: ns });
    if(tc.setup) pyodide.runPython(tc.setup, { globals: ns });
    const res = pyodide.runPython(tc.expr, { globals: ns });
    const got = toJsSafe(res);
    const status = deepEqual(got, tc.expected) ? 'PASS' : 'FAIL';
    return { status, expr: (tc.label || tc.expr), expected: JSON.stringify(tc.expected), got: JSON.stringify(got) };
  }catch(e){
    return { status:'ERROR', expr: (tc.label || tc.expr), message: oneLineError(e.message || e) };
  }finally{
    ns.destroy();
  }
}

function runCase(code, problem, tc){
  if(problem.mode === 'stdout') return runStdoutCase(code, problem, tc);
  if(problem.mode === 'expr')   return runExprCase(code, problem, tc);
  return runFunctionCase(code, problem, tc);
}

self.onmessage = async (e)=>{
  const m = e.data;
  if(m.type === 'init'){
    try{ await init(); self.postMessage({ type:'ready' }); }
    catch(err){ self.postMessage({ type:'error', fatal:true, error: String(err) }); }
    return;
  }
  if(m.type === 'run'){
    try{
      const results = m.problem.tests.map(tc => runCase(m.code, m.problem, tc));
      self.postMessage({ type:'result', reqId: m.reqId, ok:true, results });
    }catch(err){
      self.postMessage({ type:'result', reqId: m.reqId, ok:false, error: String(err) });
    }
  }
};
