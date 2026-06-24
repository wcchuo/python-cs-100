/* =====================================================================
   Code Quest — Practice problems (LeetCode-style)
   Data only. The Practice page + judging live in practice.js.

   A problem is plain data so anyone can add one without touching logic:
     id        unique slug (also the localStorage key suffix)
     title     short name
     level     'Starter' | 'Medium' | 'Challenge'  (just styling)
     prompt    HTML describing the task
     mode      'function'  -> we call funcName(*args) and check the return
               'stdout'    -> we feed stdin and compare what you print
     funcName  (function mode) the function the student must define
     starter   code pre-filled in the editor
     tests     [{args, expected}]            for function mode
               [{stdin, expected}]           for stdout mode
     hiddenFrom (optional) tests at this index and later are "hidden":
               the student sees pass/fail but not the input/expected.
   ===================================================================== */
const PROBLEMS = [
  {
    id:'double',
    title:'Double It',
    level:'Starter',
    mode:'function',
    funcName:'double',
    prompt:`Write a function <code>double(n)</code> that <b>returns</b> <code>n</code> times 2.
            <br><span class="mini">Remember: <code>return</code> the answer, don't <code>print</code> it.</span>`,
    starter:'def double(n):\n    # return n times 2\n    pass\n',
    tests:[
      {args:[3],  expected:6},
      {args:[10], expected:20},
      {args:[0],  expected:0},
      {args:[-4], expected:-8},
    ],
    hiddenFrom:2,
  },
  {
    id:'sum-list',
    title:'Sum a List',
    level:'Medium',
    mode:'function',
    funcName:'total',
    prompt:`Write <code>total(numbers)</code> that <b>returns</b> the sum of all numbers in the list
            — using a loop and an accumulator (no <code>sum()</code> needed, but it's allowed).`,
    starter:'def total(numbers):\n    # add up every number and return the total\n    pass\n',
    tests:[
      {args:[[1,2,3]],      expected:6},
      {args:[[10,20,30,40]],expected:100},
      {args:[[]],           expected:0},
      {args:[[-5,5,-5,5]],  expected:0},
      {args:[[7]],          expected:7},
    ],
    hiddenFrom:2,
  },
  {
    id:'greet',
    title:'Greeting Bot',
    level:'Starter',
    mode:'stdout',
    prompt:`Read a name with <code>input()</code> and <code>print</code> exactly:
            <code>Hi, NAME!</code> (replace NAME with what was typed).`,
    starter:'name = input()\n# print the greeting\n',
    tests:[
      {stdin:'Sam\n',  expected:'Hi, Sam!'},
      {stdin:'Maria\n',expected:'Hi, Maria!'},
      {stdin:'Pat\n',  expected:'Hi, Pat!'},
    ],
    hiddenFrom:2,
  },
];

/* ---------- Practice page (registered like any session) ---------- */
page('practice','🧪 Practice','Solve & test your code', ()=>{
  let html = `
  <h2>🧪 Practice Arena</h2>
  <p class="lead">Solve a problem, press <b>Run Tests</b>, and a real Python tester checks your
  answer against several cases — just like the big coding sites.</p>

  <div class="box why"><div class="h">🎯 How it works</div>
    Each problem has a few <b>test cases</b>. Your code must pass them all to get the 🏆.
    Some cases are <b>hidden</b> (you see pass/fail but not the numbers) so you can't guess —
    you have to actually solve it! Your code is <b>saved automatically</b>, so a refresh never
    loses your work.</div>
  `;
  PROBLEMS.forEach(p=>{
    const tierClass = p.level==='Starter' ? 't-green' : p.level==='Medium' ? 't-yellow' : 't-red';
    html += `
    <div class="problem" data-pid="${p.id}">
      <div class="tier ${tierClass}">${p.level}</div>
      <h3>${p.title}</h3>
      <p>${p.prompt}</p>
      <div class="runner">
        <div class="bar"><span>✍️ Your solution — saved as you type</span>
          <span><button class="resetbtn" data-psol-reset="${p.id}">↺ Reset</button>
          <button class="runbtn" data-runtests="${p.id}">▶ Run Tests</button></span></div>
        <textarea class="editor" id="sol_${p.id}" rows="${Math.max(6, p.starter.split('\n').length+2)}"
          spellcheck="false">${escapeHtml(p.starter)}</textarea>
        <div class="judge-out" id="judge_${p.id}"><span class="mini">Press ▶ Run Tests to check your answer.</span></div>
      </div>
    </div>`;
  });
  return html;
});
