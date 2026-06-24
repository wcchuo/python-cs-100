/* =====================================================================
   Code Quest — course content
   Each page is registered with page(id, title, sidebar-subtitle, ()=>html)
   Helpers available (from index.html):
     R(codeString)  -> runnable Python editor (Skulpt + turtle)
     Q(title, [{q, a:[{t,ok,fb}]}])  -> interactive quiz
   ===================================================================== */

/* ---------- Homework workspace helper ----------
   A clearly-labeled blank editor for the kid's own homework attempt.
   The starter `code` carries short instructions + the expected result as
   comments, so they always know the goal and how to check themselves. */
function HW(code, opts){
  return `<div class="box brick"><div class="h">✍️ Your homework workspace</div>
    Write your answer here and press ▶ <b>Run</b>. The comments tell you the goal and the
    expected result — delete them once your code works!</div>` + R(code, opts);
}

/* ---------- WELCOME ---------- */
page('home','🏠 Welcome','Start here · how it works', ()=>`
  <h2>🐍 Code Quest: Build Your Own Game in Python</h2>
  <p class="lead">A 10-session creative coding camp · 1.5 hours each · ages ~10–14</p>

  <div class="box why"><div class="h">🎯 The promise</div>
    In 10 sessions you will build a <b>real, playable Snake game</b> — and you'll
    understand <i>every line</i> because <b>you</b> wrote it.</div>

  <h3>How this site works</h3>
  <ul>
    <li>📚 Use the menu on the left to jump between sessions.</li>
    <li>▶ Every code box is <b>alive</b> — edit it and click <b>Run</b> to see real Python (and turtle drawings!) happen right here in your browser. No install needed.</li>
    <li>❓ Quizzes give you <b>instant feedback</b> — click an answer and learn why.</li>
    <li>🧱 Each session's homework secretly builds one <b>brick</b> of the final Snake game.</li>
  </ul>

  <div class="runner"><div class="bar"><span>Try it now — click Run!</span></div></div>
  ${R('print("Hello, future game maker!")\nfor i in range(3):\n    print("Python is fun! x", i+1)')}

  <h3>🧱 Every homework is a LEGO brick</h3>
  <p>You never do random exercises. Each week you build one piece of Snake:</p>
  <table>
    <tr><th>Session</th><th>Topic</th><th>The brick → Snake part</th></tr>
    <tr><td>1</td><td>First Drawing</td><td>Game screen + the snake's head</td></tr>
    <tr><td>2</td><td>Variables</td><td>Score counter & position</td></tr>
    <tr><td>3</td><td>Loops</td><td>The game loop + the grid</td></tr>
    <tr><td>4</td><td><b>Lists ⭐</b></td><td><b>The snake's body!</b></td></tr>
    <tr><td>5</td><td>Conditionals</td><td>"Did I hit the wall? Eat food?"</td></tr>
    <tr><td>6</td><td>Functions</td><td>move(), grow(), draw_food()</td></tr>
    <tr><td>7</td><td>Abstraction & Modularity</td><td>Clean, organized game code</td></tr>
    <tr><td>8</td><td>Classes</td><td>The Snake & Food blueprints</td></tr>
    <tr><td>9</td><td>Build Day 1</td><td>A snake that moves & eats</td></tr>
    <tr><td>10</td><td>Build Day 2</td><td>Score, game-over, showcase 🏆</td></tr>
  </table>

  <div class="box tip"><div class="h">💡 Golden rule for the whole camp</div>
    <b>"Code a little, run a little."</b> Never write 20 lines then run. Write 1–2,
    run, watch it work, continue. And remember: <b>bugs are clues, not failures.</b></div>
`);

/* ===================================================================== */
/* SESSION 1 — TURTLE                                                     */
/* ===================================================================== */
page('s1','1 · Hello, Turtle!','Your first drawing', ()=>`
  <h2>🐢 Session 1 — Hello, Turtle!</h2>
  <p class="lead">What a program is · running code · forward / right / left · <i>order matters</i> · color</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    Programming is just <b>giving clear instructions to a very fast, very literal robot</b>.
    The robot has zero common sense — it does <i>exactly</i> what you say, in <i>exactly</i>
    the order you say it. Today the robot is a turtle that draws.</div>

  <div class="box brick"><div class="h">🧱 Today's brick</div>
    A drawing window + a moving turtle → this becomes the <b>game screen and the snake's head</b>.</div>

  <h3>🎬 Watch first — Meet the turtle</h3>
  <p>A quick, friendly video to see turtle drawing in action before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/FjuD-pOKiDE"
    title="Python Turtle" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — your first program</h3>
  <p>Type along. Each line is one instruction:</p>
  ${R('import turtle\n\nt = turtle.Turtle()\nt.forward(100)\n\nturtle.done()')}
  <table>
    <tr><th>Line</th><th>Kid translation</th></tr>
    <tr><td>import turtle</td><td>"open the box of turtle tools"</td></tr>
    <tr><td>t = turtle.Turtle()</td><td>"give birth to a turtle named t"</td></tr>
    <tr><td>t.forward(100)</td><td>"walk forward 100 steps, leaving a trail"</td></tr>
    <tr><td>turtle.done()</td><td>"don't slam the window shut — let us look!"</td></tr>
  </table>

  <h3>🪄 The three magic commands</h3>
  <table>
    <tr><th>Command</th><th>What it does</th></tr>
    <tr><td>t.forward(n)</td><td>walk forward n steps</td></tr>
    <tr><td>t.right(n)</td><td>spin clockwise n degrees</td></tr>
    <tr><td>t.left(n)</td><td>spin counter-clockwise n degrees</td></tr>
  </table>
  <p><b>Predict, then run:</b> what shape will this make?</p>
  ${R('import turtle\nt = turtle.Turtle()\n\nt.forward(100)\nt.right(90)\nt.forward(100)\n\nturtle.done()')}
  <details><summary>Show answer</summary>An <b>"L" / right-angle corner</b> — forward, then turn, just like a robot walking to a chair.</details>

  ${Q('Quiz #1 — Warm-up', [
    {q:'What does <code>import turtle</code> do?', a:[
      {t:'Draws a turtle on screen', ok:false, fb:'Not yet — it just brings in the tools.'},
      {t:'Opens the box of turtle drawing tools', ok:true, fb:'Yes! It loads the toolkit.'},
      {t:'Closes the program', ok:false}]},
    {q:'<code>t.forward(50)</code> does what?', a:[
      {t:'Moves the turtle forward 50 steps, drawing a line', ok:true},
      {t:'Turns the turtle 50 degrees', ok:false, fb:'That would be right()/left().'},
      {t:'Makes the turtle 50× bigger', ok:false}]},
    {q:'Your window flashes and disappears instantly. What is missing?', a:[
      {t:'import turtle', ok:false},
      {t:'turtle.done() at the end', ok:true, fb:'It keeps the window open.'},
      {t:'A bigger number', ok:false}]},
    {q:'<code>t.right(90)</code> will…', a:[
      {t:'Move 90 steps to the right', ok:false, fb:'right() turns, it does not move.'},
      {t:'Turn the turtle 90 degrees clockwise', ok:true},
      {t:'Draw 90 lines', ok:false}]},
  ])}

  <h3>🎨 Build a square together</h3>
  ${R('import turtle\nt = turtle.Turtle()\n\nt.forward(100)   # side 1\nt.right(90)\nt.forward(100)   # side 2\nt.right(90)\nt.forward(100)   # side 3\nt.right(90)\nt.forward(100)   # side 4\n\nturtle.done()')}
  <div class="box warn"><div class="h">🤔 Big realization</div>
    We typed "forward, right" <b>four times</b>. That's a lot of repeating… isn't there a
    lazier way? (Hold that thought — it's why <b>loops</b> exist in Session 3!)</div>

  <h3>🏆 Challenge Time (climb as far as you can)</h3>
  <div class="challenge">
    <div class="tier t-green">🟢 Starter</div>
    <ul><li>Draw a <b>rectangle</b> (two sides 150, two sides 75).</li>
    <li>Draw a <b>triangle</b> — hint: turn <code>right(120)</code> between sides, not 90!</li></ul>
    <div class="tier t-yellow">🟡 Medium</div>
    <ul><li>Draw the <b>first letter of your name</b> (easy ones: L, T, E, F, H, I).</li>
    <li>Draw a <b>staircase</b> of 3 steps going up-right.</li></ul>
    <div class="tier t-red">🔴 Challenge</div>
    <ul><li>Draw a <b>house</b>: a square with a triangle roof on top.</li>
    <li>Draw a <b>5-pointed star</b> — hint: <code>forward(120)</code> then <code>right(144)</code>, five times.</li></ul>
    <div class="tier t-star">🌟 Boss</div>
    <ul><li><b>Make your own</b>: a flag, robot face, or spaceship using forward/right/left.</li></ul>
  </div>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(6)\n\n# Your challenge here! Try the triangle:\nt.forward(100)\nt.right(120)\nt.forward(100)\nt.right(120)\nt.forward(100)\n\nturtle.done()')}

  <h3>🌈 Add color & flair</h3>
  ${R('import turtle\nt = turtle.Turtle()\n\nt.color("purple")   # pen color — quotes needed!\nt.pensize(5)        # thicker line\nt.speed(3)          # 1=slow, 10=fast, 0=instant\n\nfor i in range(4):\n    t.forward(100)\n    t.right(90)\n\nturtle.done()')}
  <div class="box warn"><div class="h">⚠ Super common bug</div>
    Color names go in <b>quotes</b>: <code>t.color("red")</code> — not <code>t.color(red)</code>.</div>

  ${Q('Quiz #2 — Exit ticket', [
    {q:'To draw a triangle, you turn right by how much between sides?', a:[
      {t:'90', ok:false}, {t:'120', ok:true, fb:'360 ÷ 3 = 120.'}, {t:'60', ok:false}]},
    {q:'Which line makes the turtle blue?', a:[
      {t:'t.color("blue")', ok:true}, {t:'t.blue()', ok:false}, {t:'color = blue', ok:false}]},
    {q:'If you swap the order of two commands, the drawing will…', a:[
      {t:'Always look the same', ok:false},
      {t:'Probably look different — order matters', ok:true},
      {t:'Always crash', ok:false}]},
    {q:'A square has 4 equal sides. Each turn is…', a:[
      {t:'90 degrees', ok:true, fb:'360 ÷ 4 = 90.'}, {t:'45 degrees', ok:false}, {t:'100 degrees', ok:false}]},
    {q:'Color names like red must be written…', a:[
      {t:'in quotes: t.color("red")', ok:true, fb:'Text always needs quotes.'},
      {t:'with no quotes: t.color(red)', ok:false, fb:'That makes Python look for a variable named red.'},
      {t:'in capitals: t.color(RED)', ok:false}]},
    {q:'<code>t.pensize(5)</code> changes the…', a:[
      {t:'thickness of the line', ok:true}, {t:'speed of the turtle', ok:false}, {t:'number of sides', ok:false}]},
    {q:'<code>t.left(90)</code> turns the turtle…', a:[
      {t:'counter-clockwise 90 degrees', ok:true}, {t:'clockwise 90 degrees', ok:false, fb:'That is right().'},
      {t:'forward 90 steps', ok:false}]},
    {q:'<code>t.speed(0)</code> draws…', a:[
      {t:'instantly (fastest)', ok:true, fb:'0 is the special "no animation" speed.'},
      {t:'the slowest', ok:false}, {t:'backwards', ok:false}]},
    {q:'A 5-pointed star turns <code>right(144)</code> between points. Why not 90?', a:[
      {t:'A star is not a square — each point needs a sharper turn', ok:true},
      {t:'90 only works for circles', ok:false},
      {t:'144 is the only number turtle allows', ok:false}]},
    {q:'You wrote the right commands but in the wrong order. The drawing will…', a:[
      {t:'probably look different — order matters', ok:true},
      {t:'look exactly the same', ok:false}, {t:'always crash', ok:false}]},
  ])}

  <div class="box brick"><div class="h">🐍 Snake callback</div>
    Your turtle is the snake's <b>head</b>. Pick its color now — you'll keep it for your game!</div>

  <h3>🏠 Homework — "My Turtle Name Sign"</h3>
  <ol>
    <li><b>Build:</b> draw the first letter of your name in your favorite color with a thick pen.
      Bonus ⭐: draw your whole initials.</li>
    <li><b>Predict, then test:</b> on paper, draw what the program below makes <i>before</i> running it.</li>
  </ol>
  ${R('import turtle\nt = turtle.Turtle()\nt.forward(100)\nt.left(90)\nt.forward(100)\nt.left(90)\nt.forward(100)\nturtle.done()')}
  <details><summary>Homework hint (don't peek too soon!)</summary>It draws 3 sides of a square (an open box). Add one more <code>left(90)</code> + <code>forward(100)</code> to close it.</details>
  ${HW('# 🏠 HOMEWORK: Draw the first letter of your name.\n# Use a color you like, a thick pen, and forward / right / left.\nimport turtle\nt = turtle.Turtle()\nt.color("blue")     # <- change to your favorite color\nt.pensize(5)\n\n# draw your letter below:\n\n\nturtle.done()\n\n# Expected result: a thick letter (e.g. an "L" or "T") in your color.')}

  <div class="box tip"><div class="h">💡 Tip to remember</div>
    "The computer does exactly what you say — not what you <i>meant</i>." Celebrate your first
    bug out loud. Bugs are normal, and finding them is the real skill.</div>
`);

/* ===================================================================== */
/* SESSION 2 — VARIABLES                                                  */
/* ===================================================================== */
page('s2','2 · Variables','Boxes that remember', ()=>`
  <h2>📦 Session 2 — Variables</h2>
  <p class="lead">Storing values · numbers vs text · updating · using variables to control the turtle</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    A program forgets nothing… <b>if you store it</b>. A <b>variable</b> is a labeled box that
    remembers a number or some words for later — like the <b>score</b> in a game, or
    <b>where the snake is</b>.</div>

  <h3>🎬 Watch first — Variables in 4 minutes</h3>
  <p>A quick, friendly video to see variables in action before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/ghCbURMWBD8"
    title="Python Variables" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — making boxes</h3>
  ${R('score = 0\nname = "Alex"\nprint(name, "has score", score)\n\nscore = score + 10   # update the box\nprint("New score:", score)')}
  <table>
    <tr><th>Type</th><th>Example</th><th>What it is</th></tr>
    <tr><td>Number (int)</td><td>score = 42</td><td>counts, positions, sizes</td></tr>
    <tr><td>Text (string)</td><td>name = "Alex"</td><td>words — always in quotes</td></tr>
    <tr><td>Decimal (float)</td><td>speed = 1.5</td><td>numbers with a dot</td></tr>
  </table>

  <div class="box warn"><div class="h">⚠ The #1 confusion</div>
    <code>score = score + 1</code> is NOT math that's "wrong". The <b>=</b> means
    "put the right side into the box." So it reads: "new score = old score + 1." Magic counter!</div>

  <h4>⚡ The shortcut every programmer uses: <code>+=</code></h4>
  <p>"Add to the box" is so common that Python has a shortcut. These two lines do exactly the same thing:</p>
  ${R('score = 0\n\nscore = score + 1   # the long way\nprint(score)\n\nscore += 1          # the SHORTCUT — same thing!\nprint(score)\n\n# they all work:\nscore += 10   # add 10\nscore -= 3    # subtract 3\nscore *= 2    # multiply by 2\nprint("Final:", score)')}
  <div class="box tip"><div class="h">💡 Read it like English</div>
    <code>score += 1</code> = "score, plus-equals one" = "add one to score." You'll see this
    everywhere — including in your Snake game.</div>

  <h3>💬 Comments — notes for humans, ignored by Python</h3>
  <p>Anything after a <code>#</code> on a line is a <b>comment</b>. Python skips it. Use comments to
  remind yourself (or a friend reading your code) what something does.</p>
  ${R('# This program greets the player\nname = "Maya"   # the player\'s name\nprint("Hi,", name)\n\n# print("This line is ignored — it\'s a comment!")')}

  <h3>📛 Naming rules — what Python allows (and what crashes)</h3>
  <p>Naming has two parts: <b>rules</b> (Python enforces) and <b>style</b> (you choose). Break the
  rules and Python crashes. Ignore the style and your future self gets lost.</p>
  <table>
    <tr><th>✅ Legal</th><th>❌ Illegal — crashes</th><th>Why</th></tr>
    <tr><td><code>score</code></td><td><code>2cool = 5</code></td><td>Can't start with a digit</td></tr>
    <tr><td><code>player_name</code></td><td><code>player name = "Sam"</code></td><td>No spaces — use <code>_</code></td></tr>
    <tr><td><code>lives3</code></td><td><code>for = 10</code></td><td><code>for</code> is a Python keyword</td></tr>
    <tr><td><code>HighScore</code></td><td><code>high-score = 100</code></td><td>The <code>-</code> means minus, not part of a name</td></tr>
  </table>
  <p>Try this — read the error message, then fix it:</p>
  ${R('# Pick ONE of these to uncomment and see the error.\n# Then fix it (e.g. change 2cool to cool2 or player2).\n\n# 2cool = 5\n# player name = "Sam"\n# for = 10\n\nprint("Now uncomment one above and run me!")')}

  <div class="box warn"><div class="h">⚠ Capital letters MATTER (case sensitivity)</div>
    To Python, <code>Score</code>, <code>score</code>, and <code>SCORE</code> are <b>three different boxes</b>.
    Pick one spelling and stick with it!</div>
  ${R('score = 5\nprint(score)   # works — same name\nprint(Score)   # 💥 NameError — capital S is a different box!')}

  <div class="box tip"><div class="h">💡 Style habit: <code>snake_case</code></div>
    Python programmers use <b>lowercase with underscores</b>: <code>player_name</code>,
    <code>high_score</code>, <code>is_game_over</code>. (Fitting, given our final project! 🐍)</div>

  ${Q('Quick check', [
    {q:'After <code>score = 5</code> then <code>score = score + 3</code>, what is score?', a:[
      {t:'5', ok:false}, {t:'3', ok:false}, {t:'8', ok:true, fb:'old (5) + 3 = 8.'}]},
    {q:'Which of these is text (a string)?', a:[
      {t:'"hello"', ok:true, fb:'Quotes = text.'}, {t:'42', ok:false}, {t:'size', ok:false}]},
    {q:'What is a good variable name for a player\'s points?', a:[
      {t:'x', ok:false, fb:'Too vague.'}, {t:'score', ok:true, fb:'Names should say what they hold.'}, {t:'thing2', ok:false}]},
    {q:'<code>score += 5</code> is the same as…', a:[
      {t:'score = score + 5', ok:true, fb:'+= is just the shortcut form.'},
      {t:'score = 5', ok:false, fb:'That would replace the box, not add.'},
      {t:'score == 5', ok:false, fb:'== compares — we\'ll meet it in Session 5.'}]},
    {q:'Which variable name is ILLEGAL in Python?', a:[
      {t:'player_name', ok:false}, {t:'lives3', ok:false},
      {t:'2players', ok:true, fb:'Names can\'t start with a digit.'}]},
    {q:'<code>score = 5</code> then <code>print(Score)</code> — what happens?', a:[
      {t:'Prints 5', ok:false, fb:'Different capitalisation = different box!'},
      {t:'NameError — Score (capital S) was never defined', ok:true},
      {t:'Prints "Score"', ok:false}]},
  ])}

  <h3>🔤 Putting words and variables together (this trips everyone up!)</h3>
  <p>A variable is only useful if you can <b>show it</b> and <b>mix it into sentences</b>.
  There are two main ways, and kids mix them up — so let's make it crystal clear.</p>

  <h4>Way 1: the comma <code>,</code> inside <code>print()</code> — the easy, safe way</h4>
  <p>Commas put a <b>space</b> between things and work with <b>any type</b> (words AND numbers).</p>
  ${R('name = "Maya"\nage = 11\nscore = 250\n\nprint("Hello", name)\nprint(name, "is", age, "years old")\nprint("Score:", score)')}
  <div class="box tip"><div class="h">💡 Why commas are friendly</div>
    Commas don't care if it's a word or a number — Python adds a space and prints them in a row.
    Great for quick messages.</div>

  <h4>Way 2: the plus <code>+</code> — glue strings into ONE word/string</h4>
  <p><code>+</code> <b>joins (concatenates)</b> strings with <b>no</b> automatic space. You add spaces yourself.</p>
  ${R('first = "Code"\nlast = "Quest"\n\nprint(first + last)         # CodeQuest  (no space!)\nprint(first + " " + last)   # Code Quest (we added " ")\n\ngreeting = "Hi, " + first\nprint(greeting)')}

  <div class="box warn"><div class="h">⚠ The error EVERY beginner hits</div>
    <code>+</code> can only glue <b>strings to strings</b>. Gluing a word to a number crashes!
    Run this and read the red error — then see the fix below.</div>
  ${R('age = 11\nprint("I am " + age + " years old")   # 💥 TypeError: can only concatenate str')}
  <p><b>The fix:</b> turn the number into a string with <code>str(...)</code> — OR just use commas.</p>
  ${R('age = 11\n\n# Fix A: str() turns a number into text so + works\nprint("I am " + str(age) + " years old")\n\n# Fix B: easier — just use commas\nprint("I am", age, "years old")')}

  <h4>✨ Pro shortcut: f-strings (put variables right inside the quotes)</h4>
  <p>Modern Python has a neat trick: put an <code>f</code> before the quotes, then drop variables in
  <code>{curly braces}</code>. No <code>+</code>, no <code>str()</code>, no spacing headaches.</p>
  ${R('name = "Maya"\nage = 11\nscore = 250\n\nprint(f"{name} is {age} and has {score} points!")\n\nmsg = f"GAME OVER, {name}! Final score: {score}"\nprint(msg)')}

  <table>
    <tr><th>Goal</th><th>Best tool</th><th>Example</th></tr>
    <tr><td>Quick message, mixed words + numbers</td><td>comma <code>,</code></td><td>print("Score:", score)</td></tr>
    <tr><td>Glue strings into one piece of text</td><td>plus <code>+</code></td><td>"Code" + " " + "Quest"</td></tr>
    <tr><td>Drop variables inside a sentence</td><td>f-string</td><td>f"Hi {name}!"</td></tr>
  </table>

  ${Q('Quiz — words + variables', [
    {q:'What does <code>print("Hi", name)</code> put between Hi and the name?', a:[
      {t:'A space', ok:true, fb:'Commas in print() add a space automatically.'},
      {t:'Nothing', ok:false}, {t:'A comma', ok:false}]},
    {q:'<code>"Code" + "Quest"</code> gives…', a:[
      {t:'"CodeQuest" (no space)', ok:true, fb:'+ glues with no space unless you add one.'},
      {t:'"Code Quest"', ok:false}, {t:'an error', ok:false}]},
    {q:'<code>"I am " + 11</code> does what?', a:[
      {t:'Crashes — you can\'t + a string and a number', ok:true, fb:'Use str(11) or a comma instead.'},
      {t:'Prints "I am 11"', ok:false}, {t:'Prints "I am  + 11"', ok:false}]},
    {q:'Which prints <code>Score: 250</code> with a number variable <code>score = 250</code>?', a:[
      {t:'print("Score:", score)', ok:true},
      {t:'print("Score:" + score)', ok:false, fb:'That crashes — would need str(score).'},
      {t:'print("Score: score")', ok:false, fb:'That prints the word "score", not the value.'}]},
    {q:'What does <code>f"Hi {name}"</code> print when <code>name = "Sam"</code>?', a:[
      {t:'Hi Sam', ok:true, fb:'f-strings drop the variable\'s value into the braces.'},
      {t:'Hi {name}', ok:false}, {t:'Hi name', ok:false}]},
  ])}

  <h3>🏆 Word challenges (try all three!)</h3>
  <div class="tier t-green">🟢 Starter — About Me</div>
  <ul><li>Make variables <code>name</code> and <code>age</code>, then print one sentence using <b>commas</b>, and the same sentence again using an <b>f-string</b>.</li></ul>
  <div class="tier t-yellow">🟡 Medium — Score Message</div>
  <ul><li>Make <code>score = 0</code>. Add 10 to it three times, then print <code>"Final score: 30"</code> using the variable (not the number 30!).</li></ul>
  <div class="tier t-red">🔴 Challenge — Mad Libs</div>
  <ul><li>Make variables for an <code>animal</code>, a <code>place</code>, and a <code>number</code>, then build a silly sentence that uses all three.</li></ul>
  ${R('# Your word challenges here!\nname = "Maya"\nage = 11\n\n# Starter: print with a comma, then with an f-string\nprint("My name is", name, "and I am", age)\nprint(f"My name is {name} and I am {age}")\n\n# Try the Medium and Challenge tasks below:\n')}

  <div class="box brick"><div class="h">🐍 Snake callback</div>
    Your game's <b>"Score: 7"</b> and <b>"GAME OVER, Maya!"</b> messages are exactly this:
    a word glued to a variable. You'll use <code>str(score)</code> or an f-string in Build Day 2!</div>

  <h3>🎙️ Asking the user — <code>input()</code></h3>
  <p>Until now you've <i>hard-coded</i> values like <code>name = "Maya"</code>. Real programs
  <b>ask the user</b>. <code>input()</code> pops up a prompt and stores what the user types into a variable.</p>
  ${R('name = input("What is your name? ")\nprint("Hello,", name, "— welcome to Code Quest!")')}
  <div class="box tip"><div class="h">💡 Try it</div>
    Click <b>Run</b>, type your name in the box that appears, and press Enter. The variable
    <code>name</code> now holds whatever you typed.</div>

  <h4>⚠ The catch: <code>input()</code> ALWAYS returns a string</h4>
  <p>Even if the user types <code>11</code>, Python sees the text <code>"11"</code> — not the number.
  Watch this fail:</p>
  ${R('age = input("How old are you? ")\nprint("Next year you will be", age + 1)   # 💥 TypeError — "11" + 1')}
  <p><b>The fix:</b> wrap it with <code>int(...)</code> to turn the text into a real number.</p>
  ${R('age = int(input("How old are you? "))   # int() turns "11" into 11\nprint("Next year you will be", age + 1)\nprint(f"In 5 years you\'ll be {age + 5}")')}
  <table>
    <tr><th>Convert</th><th>What it does</th></tr>
    <tr><td><code>int("11")</code></td><td>"11" → 11 (a whole number)</td></tr>
    <tr><td><code>float("3.14")</code></td><td>"3.14" → 3.14 (a decimal)</td></tr>
    <tr><td><code>str(42)</code></td><td>42 → "42" (text, so + works)</td></tr>
  </table>
  <div class="box warn"><div class="h">⚠ One more error to recognize</div>
    <code>int("hello")</code> crashes — Python can't turn a word into a number.
    Only digits work inside <code>int()</code>.</div>

  ${Q('Quiz — input & convert', [
    {q:'<code>input()</code> always returns a…', a:[
      {t:'string (text)', ok:true, fb:'Even "11" comes back as text "11", not the number 11.'},
      {t:'number', ok:false}, {t:'boolean', ok:false}]},
    {q:'You ask for an age and want to add 1 to it. You need…', a:[
      {t:'int(input("Age? "))', ok:true, fb:'int() converts the text into a real number.'},
      {t:'str(input("Age? "))', ok:false, fb:'input is already a string.'},
      {t:'just input("Age? ")', ok:false, fb:'You\'d get a TypeError when you add 1.'}]},
    {q:'What does <code>int("3.14")</code> do?', a:[
      {t:'Crashes — int() wants whole-number text', ok:true, fb:'Use float("3.14") for decimals.'},
      {t:'Gives 3.14', ok:false}, {t:'Gives 3', ok:false}]},
  ])}

  <h3>🐞 Two errors to recognize (your debug toolkit)</h3>
  <p>You've now met the two errors that cause 90% of beginner pain. Read the red message — it tells you the type:</p>
  <table>
    <tr><th>Error</th><th>What it means</th><th>Usually fixed by…</th></tr>
    <tr><td><b>TypeError</b></td><td>Wrong type of thing (e.g. <code>"age " + 11</code>)</td><td><code>str()</code> or <code>int()</code>, or use commas</td></tr>
    <tr><td><b>NameError</b></td><td>That box doesn't exist — typo or wrong capitals</td><td>Check spelling &amp; capital letters</td></tr>
  </table>
  ${R('# Trigger a NameError on purpose — read the message!\nscore = 5\nprint(scor)    # 💥 NameError: name \'scor\' is not defined')}

  <h3>🎁 Bonus — unpacking two boxes at once</h3>
  <p>You can fill two variables on one line. You'll see this in your Snake game!</p>
  ${R('x, y = 0, 0          # two boxes filled at once\nprint("Start at", x, y)\n\ndx, dy = 20, 0       # direction: 20 right, 0 up — exactly how Snake moves!\nprint("Next step:", x + dx, y + dy)')}

  <h3>🧩 Good-to-know extras</h3>
  <p>A few more things about boxes that come up all the time — skim these, then run each one.</p>

  <h4>✅ Booleans — the yes/no box (<code>True</code> / <code>False</code>)</h4>
  <p>Some boxes hold a number, some hold text, and some hold a simple <b>yes or no</b>. These are
  <b>Booleans</b>, and they're how a game remembers things like "is it game over yet?"</p>
  ${R('game_over = False     # a yes/no box — note the Capital F, no quotes!\nhas_key = True\n\nprint("Game over?", game_over)\nprint("Has key?", has_key)\n\nscore = 12\nyou_win = score > 10  # a comparison gives back True or False\nprint("Did you win?", you_win)')}
  <div class="box warn"><div class="h">⚠ Watch the spelling</div>
    It's <code>True</code> / <code>False</code> with a <b>capital</b> first letter and <b>no quotes</b>.
    <code>"True"</code> (with quotes) is just text, not a real yes/no box!</div>

  <h4>🔎 <code>type()</code> — peek inside a box</h4>
  <p>Not sure what's in a box (and why your <code>+</code> crashed)? Ask Python with <code>type()</code>.</p>
  ${R('print(type(42))       # a number (int)\nprint(type(3.14))     # a decimal (float)\nprint(type("hi"))     # text (str)\nprint(type(True))     # yes/no (bool)\n\nage = input("Age? ")  # remember: input is ALWAYS text\nprint("input gave me a:", type(age))')}

  <h4>🔄 A box can be refilled — even with a different kind of thing</h4>
  <p>A variable isn't locked. You can put a new value in any time — that's the whole point of a "score"
  that changes. You can even swap the <i>type</i> of thing inside (though usually you won't want to).</p>
  ${R('lives = 3\nprint(lives)\n\nlives = 2        # refilled with a new number\nprint(lives)\n\nlives = "none left!"   # even a different TYPE is allowed\nprint(lives)')}

  <h4>📌 ALL-CAPS = "please don't change me" (a constant)</h4>
  <p>When a value should stay fixed for the whole program — like the screen width — programmers write
  its name in <b>ALL_CAPS</b>. Python won't stop you changing it, but the capitals are a promise to
  yourself: "this one is a setting, leave it alone."</p>
  ${R('WIDTH = 400      # a setting — treat as fixed\nGRID = 20        # your Snake game will use exactly this idea!\n\nsquares_across = WIDTH / GRID\nprint("The grid is", squares_across, "squares wide")')}

  <h4>➖ Boxes can hold negative numbers</h4>
  <p>Positions can go below zero. On the turtle screen, negative x is <b>left</b> of center and negative
  y is <b>down</b>. Your Snake's walls live at <code>-200</code> and <code>200</code>!</p>
  ${R('x = -100      # 100 steps to the LEFT of center\ny = 50\nprint("Position:", x, y)\n\nx = x - 50    # move further left\nprint("Now at:", x)   # -150')}

  ${Q('Quiz — extras', [
    {q:'Which is a real Boolean (yes/no) value?', a:[
      {t:'True', ok:true, fb:'Capital T, no quotes.'},
      {t:'"True"', ok:false, fb:'Quotes make it text, not a Boolean.'},
      {t:'true', ok:false, fb:'Python needs a capital T.'}]},
    {q:'You want to check what kind of thing is in a box. You use…', a:[
      {t:'type(box)', ok:true}, {t:'kind(box)', ok:false}, {t:'check(box)', ok:false}]},
    {q:'A name in <code>ALL_CAPS</code> like <code>GRID</code> usually signals…', a:[
      {t:'a setting/constant you should not change', ok:true},
      {t:'a broken variable', ok:false}, {t:'a comment', ok:false}]},
    {q:'On the turtle screen, <code>x = -100</code> means the point is…', a:[
      {t:'100 steps left of center', ok:true}, {t:'100 steps right', ok:false}, {t:'off the screen', ok:false}]},
  ])}

  <h3>🎨 In class — a resizable square</h3>
  <p>Change <b>one number</b> and the whole square resizes. That's the power of variables.</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\nsize = 120        # <-- change ONLY this number!\n\nfor i in range(4):\n    t.forward(size)\n    t.right(90)\n\nturtle.done()')}

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter</div>
  <ul><li>Make two variables <code>width</code> and <code>height</code> and draw a rectangle from them.</li></ul>
  <div class="tier t-yellow">🟡 Medium</div>
  <ul><li>Make a <code>lives = 3</code> box. Print "Game start: 3 lives", then subtract 1 and print again.</li></ul>
  <div class="tier t-red">🔴 Challenge</div>
  <ul><li>Draw 3 squares in a row where each is bigger: start <code>size = 40</code>, after each square do <code>size = size + 40</code>.</li></ul>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\nsize = 40\n# square 1\nfor i in range(4):\n    t.forward(size); t.right(90)\n\nt.penup(); t.forward(size+20); t.pendown()\nsize = size + 40   # grow!\n# square 2 — your turn to repeat\n\nturtle.done()')}

  <div class="box brick"><div class="h">🐍 Snake callback</div>
    The snake needs to remember its <b>score</b>, its <b>direction</b>, and its <b>position</b>.
    Every one of those is a variable. You just learned the snake's memory!</div>

  ${Q('Exit quiz', [
    {q:'<code>x = 7</code> then <code>x = x * 2</code>. What is x?', a:[
      {t:'7', ok:false}, {t:'14', ok:true, fb:'7 × 2.'}, {t:'72', ok:false}]},
    {q:'Why give variables good names like <code>score</code> instead of <code>a</code>?', a:[
      {t:'It runs faster', ok:false},
      {t:'So you (and others) remember what it holds', ok:true, fb:'Good names are a gift to future-you.'},
      {t:'Python requires it', ok:false}]},
    {q:'Which stores text correctly?', a:[
      {t:'msg = hello', ok:false, fb:'Missing quotes — Python thinks hello is another variable.'},
      {t:'msg = "hello"', ok:true}, {t:'msg = (hello)', ok:false}]},
    {q:'<code>input()</code> always gives you back…', a:[
      {t:'text (a string), even if you typed a number', ok:true, fb:'That is why we use int() to convert.'},
      {t:'a number', ok:false}, {t:'a list', ok:false}]},
    {q:'To do math on a typed number, you must…', a:[
      {t:'wrap it in int(): age = int(input("Age? "))', ok:true},
      {t:'nothing — input gives numbers', ok:false},
      {t:'wrap it in str()', ok:false, fb:'str() makes text, not a number.'}]},
    {q:'<code>print("Score: " + 5)</code> crashes because…', a:[
      {t:'you cannot add text and a number — use str(5) or a comma', ok:true},
      {t:'5 is too small', ok:false}, {t:'print only takes one thing', ok:false}]},
    {q:'<code>f"Hi {name}!"</code> with <code>name = "Sam"</code> prints…', a:[
      {t:'Hi Sam!', ok:true, fb:'f-strings drop the variable right into the text.'},
      {t:'Hi {name}!', ok:false, fb:'That happens if you forget the f.'},
      {t:'Hi name!', ok:false}]},
    {q:'<code>print("3" + "4")</code> shows…', a:[
      {t:'34 — they are text, so they join', ok:true, fb:'Quotes make them text, not numbers.'},
      {t:'7', ok:false}, {t:'an error', ok:false}]},
    {q:'To Python, <code>Score</code> and <code>score</code> are…', a:[
      {t:'two different boxes — capitals matter', ok:true, fb:'Python is case-sensitive.'},
      {t:'the same box', ok:false}, {t:'both illegal names', ok:false}]},
    {q:'<code>score += 5</code> is a shortcut for…', a:[
      {t:'score = score + 5', ok:true}, {t:'score = 5', ok:false}, {t:'score == 5', ok:false}]},
  ])}

  <h3>🏠 Homework — "The Growing Spiral"</h3>
  <p>Start with <code>size = 10</code>, draw a line, then <code>size = size + 10</code>, turn, and repeat
  a few times. Watch a spiral grow! (This previews loops <i>and</i> the snake growing.)</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\nsize = 10\nt.forward(size); t.right(90)\nsize = size + 10\nt.forward(size); t.right(90)\nsize = size + 10\nt.forward(size); t.right(90)\n# keep going... add more!\n\nturtle.done()', {origin:'center'})}

  <h3>🏠 Homework #2 — "Mad Libs Story"</h3>
  <p>Make a silly story by storing words in variables and mixing them into sentences. Practice all
  three ways to combine words and variables — comma, <code>+</code>, and f-string.</p>
  ${HW('# 🏠 HOMEWORK: Fill the variables with silly words, then build a story.\nname = "Maya"\nanimal = "penguin"\nplace = "the moon"\nnumber = 7\n\n# 1) using commas:\nprint(name, "saw a", animal, "on", place)\n\n# 2) using + (remember str() for the number!):\nprint("It had " + str(number) + " hats.")\n\n# 3) using an f-string:\nprint(f"{name} and the {animal} laughed for {number} hours!")\n\n# Expected: three silly sentences using your words and numbers.')}

  <div class="box tip"><div class="h">💡 Tip</div>
    Name boxes for what they hold — <code>score</code>, not <code>x</code>. And remember:
    one <b>=</b> <i>stores</i>; you'll meet two <b>==</b> (compares) in Session 5.</div>
`);

/* ===================================================================== */
/* SESSION 3 — LOOPS                                                      */
/* ===================================================================== */
page('s3','3 · Loops','Do it again without retyping', ()=>`
  <h2>🔁 Session 3 — Loops</h2>
  <p class="lead">for loops · range() · indentation · while loops (the heart of every game)</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    Real programmers are wonderfully <b>lazy</b>. Why type "forward, turn" four times when you can say
    "do this 4 times"? And the game itself <b>never stops looping</b> — that's how it stays alive.</div>

  <h3>🎬 Watch first — Loops in a few minutes</h3>
  <p>A quick, friendly video to see loops in action before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/v-K-4KuA8mQ"
    title="Python Loops" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — the for loop</h3>
  <p>Remember the square's 8 repeated lines? Now it's <b>2</b>:</p>
  ${R('import turtle\nt = turtle.Turtle()\n\nfor i in range(4):   # repeat 4 times\n    t.forward(100)   # indented = "inside the loop"\n    t.right(90)\n\nturtle.done()')}
  <div class="box warn"><div class="h">⚠ Indentation is not decoration</div>
    The spaces in front of a line tell Python "this is <b>inside</b> the loop." Line them up neatly
    (4 spaces). Wrong indentation = wrong program.</div>

  ${Q('Loop basics', [
    {q:'<code>for i in range(3):</code> runs the inside block how many times?', a:[
      {t:'2', ok:false}, {t:'3', ok:true, fb:'range(3) → 0,1,2 = 3 times.'}, {t:'4', ok:false}]},
    {q:'What tells Python a line is "inside" the loop?', a:[
      {t:'A semicolon', ok:false}, {t:'The indentation (spaces in front)', ok:true}, {t:'Capital letters', ok:false}]},
    {q:'Which loop is best for "keep playing until the game ends"?', a:[
      {t:'for', ok:false, fb:'for is for a known number of repeats.'},
      {t:'while', ok:true, fb:'while runs as long as something is true.'}]},
  ])}

  <h3>🔢 The loop variable <code>i</code> — it counts for you</h3>
  <p>That <code>i</code> isn't decoration — it holds a <b>new number each time</b> the loop runs.
  You can print it, do math with it, or use it to make each turn different:</p>
  ${R('for i in range(5):\n    print("Step", i, "-> i times 2 is", i * 2)')}
  <div class="box tip"><div class="h">💡 range has 3 secret settings</div>
    <code>range(stop)</code> → 0…stop-1. &nbsp;<code>range(start, stop)</code> → start…stop-1.
    &nbsp;<code>range(start, stop, step)</code> → counts by <i>step</i> (even backwards with a negative step!).</div>
  ${R('print("Count to 10 by twos:")\nfor n in range(2, 11, 2):\n    print(n)\n\nprint("Countdown:")\nfor n in range(5, 0, -1):\n    print(n)')}

  <h3>📦 Loop over <b>things</b>, not just numbers</h3>
  <p>A for loop can walk through every letter of a word or every item in a list — no <code>range</code> needed.
  (This is exactly how your Snake will walk over every part of its body in Session 4!)</p>
  ${R('for letter in "SNAKE":\n    print(letter)\n\nfor food in ["apple", "cherry", "mango"]:\n    print("Yum,", food)')}

  <h3>➕ The accumulator — a loop that builds up an answer</h3>
  <p>The #1 way loops + variables team up: start a variable <i>before</i> the loop, then change it
  <i>inside</i>. This is how a game keeps a running <b>score</b>.</p>
  ${R('total = 0                  # start the box at 0\nfor n in range(1, 11):     # numbers 1..10\n    total = total + n      # add each one\nprint("1 + 2 + ... + 10 =", total)')}

  <h3>🎨 The "whoa" moment — turn a loop into a circle</h3>
  <p>Change <code>range(4)</code> to bigger numbers with smaller turns:</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\nfor i in range(36):   # 36 tiny steps\n    t.forward(20)\n    t.right(10)        # 36 x 10 = 360 = full circle!\n\nturtle.done()')}

  <h3>🪆 Loops inside loops (nested) — the secret to a grid</h3>
  <p>Put a loop <i>inside</i> another loop and the inner one runs all the way through <b>every</b> time
  the outer one ticks. That's how you build the Snake <b>grid</b> — rows × columns.</p>
  ${R('for row in range(3):       # 3 rows\n    for col in range(5):   # 5 columns each\n        print("*", end=" ")\n    print()                # new line after each row')}

  <h3>🚪 <code>break</code> and <code>continue</code> — escape & skip</h3>
  <p><code>break</code> jumps <b>out</b> of the loop right away. <code>continue</code> <b>skips</b> the rest
  of this turn and goes to the next one.</p>
  ${R('for n in range(1, 11):\n    if n == 6:\n        break          # stop the whole loop at 6\n    print(n)\n\nprint("---")\nfor n in range(1, 6):\n    if n == 3:\n        continue       # skip just the number 3\n    print(n)')}

  <div class="box warn"><div class="h">🐛 Common gotchas — read before you cry</div>
    <ul>
      <li><b>Off-by-one:</b> <code>range(5)</code> is <b>0,1,2,3,4</b> — it stops <i>before</i> 5, so 5 numbers but no "5".</li>
      <li><b>Forgot the colon</b> <code>:</code> at the end of the <code>for</code>/<code>while</code> line → <code>SyntaxError</code>.</li>
      <li><b>Wrong indentation:</b> a line that should be inside the loop isn't lined up → it runs only once, or Python errors.</li>
      <li><b>Infinite while loop:</b> if nothing inside ever makes the condition false, it never stops. Always change the counter!</li>
      <li><b>Changing a list while looping over it</b> can confuse Python — loop over a copy if you need to add/remove.</li>
    </ul></div>

  <h3>🌀 The while loop — runs while something is true</h3>
  ${R('count = 5\nwhile count > 0:\n    print("Launch in", count)\n    count = count - 1\nprint("Blast off! 🚀")')}
  <div class="box brick"><div class="h">🐍 Snake callback</div>
    Your Snake game is one big <b>while loop</b>: "while the game is not over → move the snake, check
    for food, redraw." You just built the engine!</div>

  ${Q('Going deeper', [
    {q:'<code>range(2, 8)</code> produces…', a:[
      {t:'2,3,4,5,6,7', ok:true, fb:'Starts at 2, stops before 8.'},
      {t:'2,3,4,5,6,7,8', ok:false, fb:'It stops BEFORE 8.'},
      {t:'0,1,2,3,4,5,6,7', ok:false}]},
    {q:'<code>range(10, 0, -2)</code> counts…', a:[
      {t:'down by 2: 10,8,6,4,2', ok:true, fb:'A negative step counts backwards.'},
      {t:'up by 2', ok:false}, {t:'it crashes', ok:false}]},
    {q:'In an accumulator like <code>total = total + n</code>, where must <code>total = 0</code> go?', a:[
      {t:'BEFORE the loop', ok:true, fb:'Set it up once, then the loop adds to it.'},
      {t:'Inside the loop', ok:false, fb:'Then it resets to 0 every turn!'},
      {t:'It doesn\'t matter', ok:false}]},
    {q:'<code>break</code> does what?', a:[
      {t:'Skips just this one turn', ok:false, fb:'That\'s continue.'},
      {t:'Jumps out of the whole loop', ok:true},
      {t:'Pauses the program', ok:false}]},
    {q:'<code>for c in "Hi":</code> — what is <code>c</code> on the first turn?', a:[
      {t:'the letter "H"', ok:true, fb:'A for loop walks over each character.'},
      {t:'the number 0', ok:false}, {t:'the whole word "Hi"', ok:false}]},
  ])}

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter</div>
  <ul>
    <li>Draw a hexagon (6 sides). Hint: <code>range(6)</code> and turn 60.</li>
    <li>Print your name 10 times using a loop instead of copy-paste.</li>
    <li>Use a loop to count down from 10 to 1, then print <code>"Liftoff!"</code>.</li>
  </ul>
  <div class="tier t-yellow">🟡 Medium</div>
  <ul>
    <li>Use a loop to print the 7× table (7, 14, 21 … 70).</li>
    <li>Add up all the even numbers from 2 to 20 with an accumulator. (Answer: 110.)</li>
    <li>Loop over the word <code>"PYTHON"</code> and print each letter on its own line, with its position number.</li>
  </ul>
  <div class="tier t-red">🔴 Challenge — Spirograph & a grid</div>
  <ul>
    <li>Draw a colorful repeating pattern using a loop. Try changing colors each turn.</li>
    <li><b>Stretch:</b> use a <i>nested</i> loop to stamp a 5×5 grid of dots — the start of the Snake board!</li>
  </ul>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\ncolors = ["red","orange","yellow","green","blue","purple"]\n\nfor i in range(36):\n    t.color(colors[i % 6])\n    t.forward(100)\n    t.right(80)   # try other angles!\n\nturtle.done()')}
  <p>Nested-loop grid starter (try it!):</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.penup(); t.speed(0); t.shape("circle")\n\nfor row in range(5):          # 5 rows\n    for col in range(5):      # 5 dots per row\n        t.goto(col*40 - 80, row*40 - 80)\n        t.stamp()\n\nturtle.done()', {origin:'center'})}

  ${Q('Exit quiz', [
    {q:'<code>range(5)</code> produces which numbers?', a:[
      {t:'1,2,3,4,5', ok:false, fb:'It starts at 0!'}, {t:'0,1,2,3,4', ok:true}, {t:'0,1,2,3,4,5', ok:false}]},
    {q:'A while loop that never becomes false will…', a:[
      {t:'Run forever (infinite loop)', ok:true, fb:'Make sure something changes inside it!'},
      {t:'Run once', ok:false}, {t:'Skip itself', ok:false}]},
    {q:'To draw a 360° circle in 36 steps, each turn is…', a:[
      {t:'10 degrees', ok:true, fb:'360 ÷ 36 = 10.'}, {t:'36 degrees', ok:false}, {t:'90 degrees', ok:false}]},
    {q:'You forgot the <code>:</code> at the end of your <code>for</code> line. Python will…', a:[
      {t:'Give a SyntaxError', ok:true, fb:'The colon is required!'},
      {t:'Run it anyway', ok:false}, {t:'Loop forever', ok:false}]},
    {q:'A nested loop with <code>range(3)</code> outside and <code>range(4)</code> inside runs the inner body…', a:[
      {t:'3 × 4 = 12 times', ok:true, fb:'Inner runs fully for each outer turn.'},
      {t:'7 times', ok:false}, {t:'4 times', ok:false}]},
    {q:'In <code>for i in range(3):</code>, the value of <code>i</code> on the three turns is…', a:[
      {t:'0, then 1, then 2', ok:true, fb:'It counts from 0.'},
      {t:'1, then 2, then 3', ok:false}, {t:'always 3', ok:false}]},
    {q:'<code>range(2, 11, 2)</code> produces…', a:[
      {t:'2,4,6,8,10 — counting by 2', ok:true, fb:'The third number is the step.'},
      {t:'2,3,4,…,11', ok:false}, {t:'2 and 11 only', ok:false}]},
    {q:'<code>for letter in "HI":</code> loops over…', a:[
      {t:'each letter: H, then I', ok:true, fb:'A for loop can walk a word, no range needed.'},
      {t:'the whole word "HI" once', ok:false}, {t:'numbers 0 and 1', ok:false}]},
    {q:'An accumulator like <code>total = total + n</code> should start…', a:[
      {t:'before the loop (e.g. total = 0)', ok:true, fb:'Otherwise it resets every turn.'},
      {t:'inside the loop', ok:false}, {t:'after the loop', ok:false}]},
    {q:'<code>continue</code> inside a loop…', a:[
      {t:'skips the rest of this turn, then keeps looping', ok:true},
      {t:'stops the whole loop', ok:false, fb:'That is break.'},
      {t:'restarts from the very beginning', ok:false}]},
  ])}

  <h3>🏠 Homework — "Spirograph Art"</h3>
  <p>Make your own colorful loop pattern (a flower or starburst). Experiment with the numbers:
  the angle, the forward distance, and the colors. Bring your favorite to show!</p>
  ${HW('# 🏠 HOMEWORK: Make a colorful pattern with ONE loop.\n# Change the angle, the distance, and the colors to make it your own.\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\ncolors = ["red", "orange", "gold", "green", "blue", "purple"]\n\nfor i in range(36):\n    t.color(colors[i % 6])\n    t.forward(120)\n    t.right(85)      # <- try 90, 120, 144, 170...\n\nturtle.done()\n\n# Expected result: a repeating starburst/flower of rainbow lines.', {origin:'center'})}

  <h3>🏠 Bonus homework — "Score Counter" (no turtle)</h3>
  <p>Practice the accumulator — the exact trick your Snake score will use. Finish the loop so it
  adds up the points and prints the final total.</p>
  ${HW('# 🏠 BONUS: Use a loop + accumulator to total up the points.\npoints = [10, 5, 20, 5, 50]   # points earned each turn\n\ntotal = 0                     # start the score box at 0\nfor p in points:\n    total = total + p         # add each one\n    print("Got", p, "-> score is now", total)\n\nprint("FINAL SCORE:", total)\n\n# Expected result: it counts up and prints FINAL SCORE: 90')}

  <div class="box tip"><div class="h">💡 Tip</div>
    Loops + variables together are unstoppable: a variable counts, the loop repeats. That's basically
    every game ever made.</div>
`);

/* ===================================================================== */
/* SESSION 4 — LISTS                                                      */
/* ===================================================================== */
page('s4','4 · Lists ⭐','One backpack, many things', ()=>`
  <h2>🎒 Session 4 — Lists <span class="pill">most important!</span></h2>
  <p class="lead">making lists · append() · indexing · len() · looping over a list</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    Imagine 100 separate boxes for 100 high scores — nightmare! A <b>list</b> is ONE backpack that
    holds many things, <b>in order</b>. This is the most important session because
    <b>the snake's body IS a list that grows every time it eats.</b></div>

  <h3>🎬 Watch first — Lists in a few minutes</h3>
  <p>A quick, friendly video to see lists in action before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/pNncmHowA0U"
    title="Python Lists" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — the backpack</h3>
  ${R('colors = ["red", "blue", "green"]\nprint(colors)\nprint("First item:", colors[0])   # counting starts at 0!\nprint("How many:", len(colors))\n\ncolors.append("purple")           # add to the end\nprint("After append:", colors)')}
  <table>
    <tr><th>Action</th><th>Code</th><th>Meaning</th></tr>
    <tr><td>Make a list</td><td>body = []</td><td>an empty backpack</td></tr>
    <tr><td>Add an item</td><td>body.append("x")</td><td>put x at the end</td></tr>
    <tr><td>Read by position</td><td>body[0]</td><td>the FIRST item (zero!)</td></tr>
    <tr><td>Count items</td><td>len(body)</td><td>how many are inside</td></tr>
  </table>
  <div class="box warn"><div class="h">⚠ Lists count from ZERO</div>
    Say the chant: "First item is number <b>zero</b>." So <code>colors[0]</code> is the first,
    <code>colors[1]</code> is the second.</div>

  ${Q('List basics', [
    {q:'<code>body.append("x")</code> does what?', a:[
      {t:'Adds "x" to the end of the list', ok:true}, {t:'Removes the last item', ok:false}, {t:'Counts items', ok:false}]},
    {q:'For <code>c = ["red","blue","green"]</code>, what is <code>c[0]</code>?', a:[
      {t:'"red"', ok:true, fb:'Position 0 = first.'}, {t:'"blue"', ok:false}, {t:'3', ok:false}]},
    {q:'What does <code>len(c)</code> give for that list?', a:[
      {t:'3', ok:true}, {t:'2', ok:false, fb:'len counts items, not the last index.'}, {t:'"green"', ok:false}]},
  ])}

  <h3>🎨 In class — a growing trail (this IS snake movement!)</h3>
  ${R('import turtle\nt = turtle.Turtle()\nt.penup(); t.speed(0)\n\nbody = [(-100,0), (-60,0), (-20,0)]   # a list of positions\n\nfor part in body:        # loop over every part\n    t.goto(part)\n    t.stamp()            # draw a block there\n\n# now the snake EATS -> grow the body:\nbody.append((20,0))\nt.goto(20,0); t.stamp()\n\nturtle.done()', {origin:'center'})}
  <div class="box brick"><div class="h">🐍 Snake callback</div>
    That loop just drew a snake! "Eat food → <code>.append()</code> → snake gets longer."
    The whole game lives in this idea.</div>

  <h3>✏️ Learn more — changing & removing items</h3>
  <p>A list isn't frozen — you can <b>change</b> an item, <b>remove</b> one, or pull off the last/first.
  These are the exact moves the snake makes every frame.</p>
  ${R('snake = ["head", "body", "tail"]\n\nsnake[1] = "belly"        # change item at position 1\nprint("Changed:", snake)\n\nlast = snake.pop()        # remove & return the LAST item\nprint("Popped:", last, "-> ", snake)\n\nsnake.pop(0)              # remove the FIRST item (by position)\nprint("After pop(0):", snake)\n\nsnake.remove("belly")     # remove by VALUE\nprint("After remove:", snake)')}
  <div class="box brick"><div class="h">🐍 This IS slithering</div>
    Every frame the snake does two things: <code>append()</code> a new head and <code>pop(0)</code> the tail.
    Add to the front, drop from the back → it looks like it's moving!</div>

  <h3>🔎 Learn more — peeking from the end & slicing</h3>
  <p>Negative numbers count from the <b>back</b>, and a <i>slice</i> grabs a chunk.
  <code>list[-1]</code> (the last item) is how the game always finds the snake's head.</p>
  ${R('nums = [10, 20, 30, 40, 50]\nprint("Last:", nums[-1])      # 50  (no need to know the length!)\nprint("2nd last:", nums[-2])  # 40\n\nprint("First three:", nums[0:3])  # [10, 20, 30]\nprint("From 2 on:", nums[2:])     # [30, 40, 50]')}

  <h3>❓ Learn more — "is it in there?" and counting</h3>
  <p>The <code>in</code> keyword checks membership — perfect for "did the snake hit its own body?"</p>
  ${R('body = [(0,0), (20,0), (40,0)]\nhead = (20, 0)\n\nprint("Did we hit ourselves?", head in body)   # True!\nprint("Body length:", len(body))\nprint("Where is (40,0)?", body.index((40,0)))  # position 2')}

  <div class="box warn"><div class="h">🐛 Common list gotchas — read before you cry</div>
    <ul>
      <li><b>Counting from zero:</b> the 3rd item is <code>list[2]</code>, not <code>list[3]</code>.</li>
      <li><b>Index out of range:</b> a 3-item list has no <code>list[3]</code> — the last is <code>list[2]</code> (or <code>list[-1]</code>).</li>
      <li><b>append vs add:</b> it's <code>.append()</code>, not <code>.add()</code>. And <code>append</code> adds <i>one</i> item — to join two lists use <code>+</code> or <code>.extend()</code>.</li>
      <li><b>It changes in place:</b> <code>.append()</code>/<code>.pop()</code> change the list itself and return <code>None</code>. Don't write <code>body = body.append(x)</code> — that erases your list!</li>
      <li><b>remove() needs the value</b>, <code>pop()</code> needs the position. Don't mix them up.</li>
      <li><b>Copies share:</b> <code>b = a</code> makes a second name for the <i>same</i> list. Change one, both change. Use <code>b = a.copy()</code> for a real copy.</li>
    </ul></div>

  ${Q('Going deeper', [
    {q:'For <code>n = [10,20,30,40]</code>, what is <code>n[-1]</code>?', a:[
      {t:'40', ok:true, fb:'-1 means the last item.'}, {t:'10', ok:false}, {t:'an error', ok:false}]},
    {q:'<code>snake.pop(0)</code> does what?', a:[
      {t:'Removes the FIRST item', ok:true, fb:'Position 0 = first. This drops the tail.'},
      {t:'Removes the last item', ok:false, fb:'That\'s pop() with no number.'},
      {t:'Adds an item', ok:false}]},
    {q:'Which adds an item to the end?', a:[
      {t:'list.add("x")', ok:false, fb:'Python lists don\'t have .add().'},
      {t:'list.append("x")', ok:true}, {t:'list.insert("x")', ok:false}]},
    {q:'<code>(20,0) in body</code> gives back…', a:[
      {t:'True or False', ok:true, fb:'in checks membership — great for collision checks!'},
      {t:'the position number', ok:false}, {t:'the whole list', ok:false}]},
    {q:'What does <code>nums[1:3]</code> grab from <code>[5,6,7,8]</code>?', a:[
      {t:'[6, 7]', ok:true, fb:'From index 1 up to (not including) 3.'},
      {t:'[6, 7, 8]', ok:false}, {t:'[5, 6, 7]', ok:false}]},
  ])}

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter</div>
  <ul>
    <li>Make a list of 3 friends' names and print each on its own line with a loop.</li>
    <li>Make a list of 5 numbers, then print the first one, the last one (use <code>[-1]</code>), and how many there are.</li>
    <li>Start with an empty list <code>[]</code> and <code>.append()</code> three favorite foods, then print the list.</li>
  </ul>
  <div class="tier t-yellow">🟡 Medium</div>
  <ul>
    <li>Make a list of numbers and print their total using a loop and a <code>total</code> variable.</li>
    <li>Find the biggest number in a list <i>without</i> using <code>max()</code> — loop and keep track.</li>
    <li>Make a "snake" list, <code>append()</code> a new head and <code>pop(0)</code> the tail, and print it before & after to watch it slither.</li>
  </ul>
  <div class="tier t-red">🔴 Challenge — Connect the Dots</div>
  <ul>
    <li>Store 5 coordinate pairs in a list, loop through them drawing lines, reveal a hidden shape.</li>
    <li><b>Stretch:</b> check with <code>in</code> whether a chosen point is already in your list before adding it (no duplicates!).</li>
  </ul>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(2)\n\ndots = [(0,0), (100,0), (100,100), (0,100), (0,0)]\n\nt.penup(); t.goto(dots[0]); t.pendown()\nfor point in dots:\n    t.goto(point)\n\nturtle.done()', {origin:'center'})}

  ${Q('Exit quiz', [
    {q:'How do you add an item to the end of a list?', a:[
      {t:'.add()', ok:false}, {t:'.append()', ok:true}, {t:'.plus()', ok:false}]},
    {q:'You ask for <code>nums[5]</code> but the list has only 3 items. What happens?', a:[
      {t:'Returns 0', ok:false}, {t:'An error (index out of range)', ok:true, fb:'There is no item at position 5.'}, {t:'Returns the last item', ok:false}]},
    {q:'Why is a list better than 100 separate variables?', a:[
      {t:'One container holds many items and can grow/shrink', ok:true},
      {t:'It is shorter to type only', ok:false},
      {t:'No real reason', ok:false}]},
    {q:'<code>body = body.append("x")</code> is a trap because…', a:[
      {t:'append returns None, so body becomes None', ok:true, fb:'Just write body.append("x") on its own line.'},
      {t:'it adds two items', ok:false}, {t:'it is perfectly fine', ok:false}]},
    {q:'To make the snake slither one step, you…', a:[
      {t:'append a new head AND pop(0) the tail', ok:true, fb:'Grow the front, drop the back!'},
      {t:'only append a head', ok:false, fb:'Then it would just grow forever.'},
      {t:'clear the whole list', ok:false}]},
    {q:'<code>b = a</code> then <code>b.append(9)</code>. What about list <code>a</code>?', a:[
      {t:'a also has 9 — they\'re the same list', ok:true, fb:'Use a.copy() if you want them separate.'},
      {t:'a is unchanged', ok:false}, {t:'a becomes empty', ok:false}]},
    {q:'The 3rd item in a list is at position…', a:[
      {t:'2 — because counting starts at 0', ok:true}, {t:'3', ok:false}, {t:'1', ok:false}]},
    {q:'<code>snake[1] = "belly"</code> does what?', a:[
      {t:'changes the item at position 1', ok:true, fb:'You can overwrite any item by its position.'},
      {t:'adds "belly" to the end', ok:false}, {t:'removes position 1', ok:false}]},
    {q:'<code>nums[1:3]</code> on <code>[5,6,7,8]</code> grabs…', a:[
      {t:'[6, 7] — from index 1 up to (not including) 3', ok:true},
      {t:'[6, 7, 8]', ok:false}, {t:'[5, 6, 7]', ok:false}]},
    {q:'<code>remove()</code> vs <code>pop()</code> —', a:[
      {t:'remove() takes a value, pop() takes a position', ok:true},
      {t:'they are exactly the same', ok:false},
      {t:'remove() takes a position, pop() takes a value', ok:false}]},
  ])}

  <h3>🏠 Homework — "Connect the Dots Picture"</h3>
  <p>Design your own hidden shape with at least 6 points in a list, then loop through to draw it.
  Can a friend guess the picture before you run it?</p>
  ${HW('# 🏠 HOMEWORK: Store at least 6 points in a LIST, then connect them.\n# Change the numbers to draw your own hidden shape!\nimport turtle\nt = turtle.Turtle()\nt.speed(2)\n\npoints = [(0,0), (100,0), (150,80), (100,160), (0,160), (-50,80), (0,0)]\n\nt.penup(); t.goto(points[0]); t.pendown()\nfor p in points:        # loop over every point in the list\n    t.goto(p)\n\nturtle.done()\n\n# Expected result: a closed outline connecting all your points (here: a house-like hexagon).', {origin:'center'})}

  <h3>🏠 Bonus homework — "Slithering Snake" (no turtle)</h3>
  <p>This is the real heart of your game. Finish the loop so the snake moves: each step,
  add a new head to the end and remove the tail from the front. Watch the list "walk."</p>
  ${HW('# 🏠 BONUS: Make the snake slither using append() + pop(0).\nsnake = [(0,0), (20,0), (40,0)]   # tail ... head\nmoves = [(60,0), (80,0), (100,0)] # where the head goes next\n\nprint("Start:", snake)\nfor new_head in moves:\n    snake.append(new_head)   # grow a new head at the end\n    snake.pop(0)             # drop the tail from the front\n    print("Step ->", snake)\n\n# Expected: the list stays length 3 but the numbers march forward.\n# That sliding is exactly how the snake moves!')}

  <div class="box tip"><div class="h">💡 Tip</div>
    Lists + loops are best friends. Whenever you have "a bunch of things," reach for a list.</div>
`);

/* ===================================================================== */
/* SESSION 5 — CONDITIONALS                                               */
/* ===================================================================== */
page('s5','5 · Conditionals','Teaching the computer to decide', ()=>`
  <h2>🚦 Session 5 — Conditionals</h2>
  <p class="lead">if / elif / else · comparisons (==, &lt;, &gt;) · combining with and / or</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    Games need to <b>judge</b> things: Did you eat the food? Did you crash into the wall? Did you win?
    <b>if</b> statements are forks in the road — they turn a drawing into a real <i>game</i>.</div>

  <h3>🎬 Watch first — Making decisions</h3>
  <p>A quick, friendly video to see if-statements in action before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/HQ3dCWjfRZ4"
    title="Python Conditionals" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — forks in the road</h3>
  ${R('score = 12\n\nif score > 10:\n    print("You win! 🏆")\nelif score > 5:\n    print("Almost there...")\nelse:\n    print("Keep trying!")')}
  <table>
    <tr><th>Symbol</th><th>Means</th></tr>
    <tr><td>==</td><td>is equal to (compare!)</td></tr>
    <tr><td>!=</td><td>is NOT equal to</td></tr>
    <tr><td>&gt; &lt;</td><td>greater / less than</td></tr>
    <tr><td>and</td><td>BOTH must be true</td></tr>
    <tr><td>or</td><td>EITHER can be true</td></tr>
  </table>
  <div class="box warn"><div class="h">⚠ The #1 beginner bug</div>
    One <b>=</b> <i>stores</i> a value. Two <b>==</b> <i>compares</i>. Chant it:
    "one equals stores, two equals compares!"</div>

  <div class="box tip"><div class="h">🤔 Which one do I use?</div>
    <ul>
      <li><b>Just <code>if</code></b> — one yes/no question, and nothing special happens on "no."
        <br><i>"If the score is over 10, print a trophy."</i></li>
      <li><b><code>if … else</code></b> — exactly <b>two</b> outcomes: a "yes" path and a "no" path. One of them <i>always</i> runs.
        <br><i>"If the door is locked, knock — otherwise, walk in."</i></li>
      <li><b><code>if … elif … else</code></b> — <b>three or more</b> choices where only one should win.
        <br><i>"Red? Stop. Yellow? Slow. Green? Go."</i> Add an <code>elif</code> for each extra case.</li>
    </ul>
    <b>Quick rule:</b> count your outcomes. <b>1</b> → <code>if</code>. <b>2</b> → <code>if/else</code>.
    <b>3+</b> → <code>if/elif/else</code>.
  </div>

  <div class="box brick"><div class="h">🧱 What every if/else needs</div>
    Whichever form you pick, the structure is always the same:
    <ul>
      <li>The word <code>if</code> (or <code>elif</code>/<code>else</code>) followed by a <b>condition</b> that is True or False
        — <code>else</code> has <b>no</b> condition.</li>
      <li>A <b>colon</b> <code>:</code> at the end of that line.</li>
      <li>At least one <b>indented</b> line underneath — that's the code that runs.
        Same indent (usually 4 spaces) for every line in the block.</li>
    </ul>
    <code>elif</code> and <code>else</code> are optional, but if you use them they must line up directly
    under their <code>if</code> — never on their own.
  </div>

  ${Q('Decision basics', [
    {q:'Which checks "are these equal"?', a:[
      {t:'=', ok:false, fb:'That stores a value.'}, {t:'==', ok:true}, {t:'=>', ok:false}]},
    {q:'<code>if score > 10 and lives > 0:</code> runs when…', a:[
      {t:'BOTH are true', ok:true}, {t:'Either one is true', ok:false}, {t:'Both are false', ok:false}]},
    {q:'<code>elif</code> means…', a:[
      {t:'"else, if this other thing is true"', ok:true}, {t:'end the program', ok:false}, {t:'a loop', ok:false}]},
  ])}

  <h3>🎨 In class — collision detection preview</h3>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(1); t.pensize(4)\n\nfor i in range(8):\n    t.forward(40)\n    x = t.xcor()                 # turtle\'s x position\n    if x > 100:\n        t.color("red")           # warning! near the edge\n    else:\n        t.color("green")\n\nturtle.done()')}
  <div class="box brick"><div class="h">🐍 Snake callback</div>
    "if snake_head == food_position → eat & grow" and "if head hits wall → game over."
    Every rule in Snake is an <code>if</code>.</div>

  <h3>🔗 Learn more — and, or, not (combining decisions)</h3>
  <p>Real games ask <b>several</b> questions at once. <code>and</code>, <code>or</code>, and <code>not</code>
  glue conditions together. The snake's "game over" check is really <i>"hit a wall <b>or</b> hit myself."</i></p>
  ${R('lives = 2\nscore = 80\n\n# and -> BOTH must be true\nif lives > 0 and score >= 50:\n    print("Still playing AND doing well!")\n\n# or -> EITHER is enough\nif lives == 0 or score < 0:\n    print("Game over")\nelse:\n    print("Keep going")\n\n# not -> flips True/False\ngame_over = False\nif not game_over:\n    print("The game is running")')}
  <table>
    <tr><th>Expression</th><th>True when…</th></tr>
    <tr><td>a <b>and</b> b</td><td>a is true <i>and</i> b is true (both)</td></tr>
    <tr><td>a <b>or</b> b</td><td>at least one of a, b is true</td></tr>
    <tr><td><b>not</b> a</td><td>a is false (it flips it)</td></tr>
  </table>

  <h3>🔢 Learn more — all the comparisons</h3>
  <p>Conditions are built from comparisons. Each one gives back <code>True</code> or <code>False</code>.</p>
  ${R('a = 7\nb = 10\nprint("a == b :", a == b)   # equal?\nprint("a != b :", a != b)   # not equal?\nprint("a <  b :", a < b)\nprint("a <= 7 :", a <= 7)    # less than OR equal\nprint("a >  b :", a > b)\n\n# you can chain them like math!\nscore = 75\nprint("Is 50-100? :", 50 <= score <= 100)')}
  <div class="box tip"><div class="h">💡 You can chain comparisons</div>
    <code>10 &lt; n &lt; 100</code> reads just like math and means "n is between 10 and 100." Neat for ranges!</div>

  <h3>🪆 Learn more — nested ifs (a question inside a question)</h3>
  ${R('logged_in = True\nis_admin = False\n\nif logged_in:\n    print("Welcome back!")\n    if is_admin:\n        print("You have admin powers")\n    else:\n        print("You are a normal player")\nelse:\n    print("Please log in first")')}

  <h3>📦 Learn more — <code>in</code>: is it on the list?</h3>
  <p><b>Analogy:</b> <code>in</code> is the <i>bouncer with a guest list</i>. Instead of asking
  "are you Sam? are you Alex? are you Jo?" one by one, the bouncer just checks: "is your name
  <b>on the list</b>?" — one quick question.</p>
  ${R('move = "up"\n\n# the long, tiring way:\nif move == "up" or move == "down" or move == "left" or move == "right":\n    print("Valid move!")\n\n# the bouncer way — much shorter:\nif move in ["up", "down", "left", "right"]:\n    print("Still valid! 🎮")\n\n# works on text too: is the letter inside the word?\nif "z" in "snake":\n    print("found a z")\nelse:\n    print("no z in snake")')}
  <div class="box tip"><div class="h">💡 Why you\'ll love it for Snake</div>
    Checking key presses (<code>if key in ["Up","Down","Left","Right"]</code>) becomes one clean line
    instead of four <code>or</code>s.</div>

  <h3>✅ Learn more — truthiness (empty means "no")</h3>
  <p><b>Analogy:</b> Python treats some values like an <i>empty lunchbox</i>. You don\'t have to ask
  "does the lunchbox have zero items?" — you just peek: empty lunchbox = "nope" (False),
  lunchbox with <i>anything</i> inside = "yep" (True).</p>
  <p>These all count as <b>False</b> (empty/nothing): <code>0</code>, <code>""</code> (empty text),
  <code>[]</code> (empty list), <code>None</code>. Almost everything else is <b>True</b>.</p>
  ${R('body = []          # the snake has no body yet\n\nif body:\n    print("The snake has", len(body), "parts")\nelse:\n    print("Empty! Time to grow 🐍")\n\nname = ""\nif name:\n    print("Hi", name)\nelse:\n    print("Please type your name")')}
  <div class="box warn"><div class="h">⚠ Read it out loud</div>
    <code>if body:</code> means "if the body has stuff in it." It is NOT the same as
    <code>if body == True</code> — don\'t compare to True, just use the value itself.</div>

  <h3>🔀 Learn more — <code>match</code> / <code>case</code> (Python\'s "switch")</h3>
  <p>Some languages have a <code>switch</code> statement. <b>Python does not</b> — but it has something
  even tidier called <code>match</code> (Python 3.10+).</p>
  <p><b>Analogy:</b> <code>match</code> is a <i>vending machine</i>. You press one button (the value),
  and it drops out the matching snack. Each <code>case</code> is one labeled slot, and <code>case _</code>
  (the underscore) is the "anything else" slot.</p>
  <pre class="show">light = 2

match light:
    case 1:
        print("Stop 🔴")
    case 2:
        print("Slow 🟡")
    case 3:
        print("Go 🟢")
    case _:            # _ means "anything else"
        print("Broken light!")</pre>
  <div class="box warn"><div class="h">⚠ Try this one at home</div>
    <code>match</code> is newer Python (3.10+), so the little in-browser ▶ runner here can\'t play it —
    that\'s why this box shows the code instead of a Run button. It works in real Python (like on your
    own computer or <a href="https://www.python.org" target="_blank" rel="noopener">python.org</a>).</div>
  <div class="box tip"><div class="h">💡 When to reach for it</div>
    Use <code>match</code> when you check <b>one variable</b> against <b>many fixed values</b>. For
    ranges or combined conditions (<code>and</code>/<code>or</code>), a normal <code>if/elif</code> chain
    is still the right tool.</div>

  <h3>🎚️ Learn more — the one-line if (ternary)</h3>
  <p><b>Analogy:</b> a <i>light switch with a label</i>. "Lights ON if it\'s dark, otherwise OFF" —
  said in a single breath. Python lets you pick one of two values on one line.</p>
  ${R('lives = 0\n\n# the normal way:\nif lives > 0:\n    status = "alive"\nelse:\n    status = "dead"\n\n# the one-line way (reads like English):\nstatus = "alive" if lives > 0 else "dead"\nprint("Player is", status)')}
  <div class="box tip"><div class="h">💡 Shape to remember</div>
    <code>VALUE_if_true <b>if</b> condition <b>else</b> VALUE_if_false</code>. Great for short choices —
    but if it gets long, go back to a full <code>if/else</code> so it stays readable.</div>

  <h3>🛑 Learn more — <code>break</code> &amp; <code>continue</code> (if inside a loop)</h3>
  <p>This is the bridge from "deciding" to "playing" — the game loop runs forever until an
  <code>if</code> decides to stop it.</p>
  <p><b>Analogy:</b> <code>break</code> is the <i>emergency stop button</i> — it ends the whole loop
  right now. <code>continue</code> is <i>"skip my turn"</i> — jump straight to the next round without
  finishing this one.</p>
  ${R('for step in range(1, 11):\n    if step == 4:\n        continue          # skip step 4, keep looping\n    if step == 7:\n        print("Crashed! Game over 💥")\n        break             # stop the loop completely\n    print("Step", step)')}
  <div class="box brick"><div class="h">🐍 Snake callback</div>
    The whole game is a <code>while True:</code> loop. Each frame an <code>if</code> asks
    "did I hit a wall or myself?" — and if yes, <code>break</code> ends the game.</div>

  <h3>🪞 Learn more — <code>==</code> vs <code>is</code> (a quick heads-up)</h3>
  <p><b>Analogy:</b> <code>==</code> asks "are these two things <i>the same value</i>?" — like two
  identical-looking water bottles. <code>is</code> asks "are these the <i>exact same object</i>?" —
  literally the one bottle, not a twin.</p>
  <p><b>Rule for now:</b> use <code>==</code> to compare values (numbers, text). Only use
  <code>is</code> for one special check: <code>if x is None:</code>.</p>
  ${R('a = "snake"\nb = "snake"\nprint("Same value? ", a == b)   # True — both say snake\n\nfood = None\nif food is None:\n    print("No food on the board yet")')}

  <div class="box warn"><div class="h">🐛 Common conditional gotchas — read before you cry</div>
    <ul>
      <li><b>One = vs two ==:</b> <code>if x = 5:</code> is an error — comparing needs <code>==</code>.</li>
      <li><b>Forgot the colon</b> <code>:</code> at the end of the <code>if</code>/<code>elif</code>/<code>else</code> line.</li>
      <li><b>Indentation:</b> the lines that belong to an <code>if</code> must be indented under it.</li>
      <li><b>elif vs many ifs:</b> a chain of <code>if/elif/else</code> picks <i>one</i> branch. Separate <code>if</code>s can all run — sometimes a surprise!</li>
      <li><b>and vs or mix-ups:</b> "between 10 and 100" is <code>n &gt; 10 and n &lt; 100</code> — using <code>or</code> here is true for almost everything.</li>
      <li><b>You can't say it like English:</b> <code>if x == 1 or 2:</code> does <i>not</i> work. Write <code>if x == 1 or x == 2:</code>.</li>
      <li><b>Case & quotes matter:</b> <code>"Red" == "red"</code> is <code>False</code>; <code>True</code> (the value) is different from <code>"True"</code> (text).</li>
    </ul></div>

  ${Q('Going deeper', [
    {q:'<code>not False</code> is…', a:[
      {t:'True', ok:true, fb:'not flips it.'}, {t:'False', ok:false}, {t:'an error', ok:false}]},
    {q:'You want "lives left AND score over 50". Which is right?', a:[
      {t:'lives > 0 and score > 50', ok:true},
      {t:'lives > 0 or score > 50', ok:false, fb:'or would pass with just one.'},
      {t:'lives > 0, score > 50', ok:false}]},
    {q:'<code>if x == 1 or 2:</code> — what\'s wrong?', a:[
      {t:'You must write x == 1 or x == 2', ok:true, fb:'Each side of or needs a full comparison.'},
      {t:'Nothing, it\'s fine', ok:false}, {t:'or should be and', ok:false}]},
    {q:'"n is between 10 and 100" is best written as…', a:[
      {t:'10 < n < 100', ok:true, fb:'Python lets you chain comparisons.'},
      {t:'10 < n > 100', ok:false}, {t:'n < 10 and n > 100', ok:false}]},
    {q:'A chain of <code>if / elif / else</code> runs…', a:[
      {t:'exactly ONE branch', ok:true, fb:'The first match wins; the rest are skipped.'},
      {t:'every branch that is true', ok:false},
      {t:'always the else', ok:false}]},
  ])}

  <h3>🏆 Challenges</h3>
  <p class="mini">Try them in order. Stuck on the shape of an if/else? Re-read the
  "🤔 Which one do I use?" and "🧱 What every if/else needs" tips above.</p>

  <div class="tier t-green">🟢 Starter — get the shape right (2 outcomes or simple chains)</div>
  <div class="box tip"><div class="h">🧪 These are auto-graded!</div>
    Each challenge below has its own editor. Write your code, press ▶ <b>Run Tests</b>, and a real Python
    tester checks it against several values (some <b>hidden</b>). Your code saves automatically.
    The value comes from <code>input()</code> — print <b>exactly</b> the word shown, nothing extra.</div>
  ${CH({
    id:'s5-hot', title:'Hot or Not', level:'Starter', mode:'stdout',
    prompt:'Read a temperature with <code>int(input())</code>. Print <code>Hot</code> if it is over 30, otherwise print <code>Nice</code>. (2 outcomes → <code>if/else</code>.)',
    starter:'temp = int(input())\n# print "Hot" if temp is over 30, else "Nice"\n',
    tests:[
      {stdin:'32\n', expected:'Hot'},
      {stdin:'30\n', expected:'Nice'},
      {stdin:'50\n', expected:'Hot'},
      {stdin:'5\n',  expected:'Nice'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-pass', title:'Password Check', level:'Starter', mode:'stdout',
    prompt:'Read a word with <code>input()</code>. If it equals <code>snake</code>, print <code>Correct</code>; otherwise print <code>Try again</code>. (Capital letters matter!)',
    starter:'name = input()\n# print "Correct" if name equals "snake", else "Try again"\n',
    tests:[
      {stdin:'snake\n', expected:'Correct'},
      {stdin:'dog\n',   expected:'Try again'},
      {stdin:'Snake\n', expected:'Try again'},
      {stdin:'snake2\n',expected:'Try again'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-sign', title:'Sign of a Number', level:'Starter', mode:'stdout',
    prompt:'Read a number with <code>int(input())</code>. Print <code>Positive</code> if it is above 0, <code>Zero</code> if it is exactly 0, otherwise <code>Negative</code>. (3 outcomes → <code>if/elif/else</code>.)',
    starter:'n = int(input())\n# print Positive / Zero / Negative\n',
    tests:[
      {stdin:'5\n',   expected:'Positive'},
      {stdin:'0\n',   expected:'Zero'},
      {stdin:'-3\n',  expected:'Negative'},
      {stdin:'100\n', expected:'Positive'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-light', title:'Traffic Light', level:'Starter', mode:'stdout',
    prompt:'Read a light number with <code>int(input())</code>. Print <code>Stop</code> for 1, <code>Slow</code> for 2, and <code>Go</code> for 3.',
    starter:'light = int(input())\n# 1 -> Stop, 2 -> Slow, 3 -> Go\n',
    tests:[
      {stdin:'1\n', expected:'Stop'},
      {stdin:'2\n', expected:'Slow'},
      {stdin:'3\n', expected:'Go'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-age', title:'Old Enough?', level:'Starter', mode:'stdout',
    prompt:'Read an age with <code>int(input())</code>. Print <code>You can play!</code> only when the age is from 10 to 14 (use <code>and</code>); otherwise print <code>Maybe next year</code>.',
    starter:'age = int(input())\n# "You can play!" if 10 to 14, else "Maybe next year"\n',
    tests:[
      {stdin:'12\n', expected:'You can play!'},
      {stdin:'10\n', expected:'You can play!'},
      {stdin:'14\n', expected:'You can play!'},
      {stdin:'9\n',  expected:'Maybe next year'},
      {stdin:'15\n', expected:'Maybe next year'},
    ], hiddenFrom:3,
  })}

  <div class="tier t-yellow">🟡 Medium — combine conditions &amp; input</div>
  <p class="mini">Also auto-graded. Some read <b>two</b> inputs — call <code>input()</code> once per line.
  Print exactly the word shown.</p>
  ${CH({
    id:'s5-evenodd', title:'Even or Odd', level:'Medium', mode:'stdout',
    prompt:'Read a number with <code>int(input())</code>. Print <code>Even</code> or <code>Odd</code>. Hint: <code>n % 2 == 0</code>.',
    starter:'n = int(input())\n# print "Even" or "Odd"\n',
    tests:[
      {stdin:'4\n',  expected:'Even'},
      {stdin:'7\n',  expected:'Odd'},
      {stdin:'0\n',  expected:'Even'},
      {stdin:'-3\n', expected:'Odd'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-fizzbuzz', title:'FizzBuzz Lite', level:'Medium', mode:'stdout',
    prompt:'Read a number. Print <code>FizzBuzz</code> if divisible by 3 <b>and</b> 5, else <code>Fizz</code> if by 3, else <code>Buzz</code> if by 5, else the number itself. <i>(Check "both" first!)</i>',
    starter:'n = int(input())\n# FizzBuzz / Fizz / Buzz / the number\n',
    tests:[
      {stdin:'15\n', expected:'FizzBuzz'},
      {stdin:'9\n',  expected:'Fizz'},
      {stdin:'10\n', expected:'Buzz'},
      {stdin:'7\n',  expected:'7'},
      {stdin:'30\n', expected:'FizzBuzz'},
    ], hiddenFrom:3,
  })}
  ${CH({
    id:'s5-login', title:'Login Check', level:'Medium', mode:'stdout',
    prompt:'Read a <b>password</b> (line 1) and the number of <b>tries</b> (line 2). Print <code>Access granted</code> only if the password equals <code>snake123</code> <b>and</b> tries is less than 3; otherwise print <code>Access denied</code>.',
    starter:'password = input()\ntries = int(input())\n# Access granted / Access denied\n',
    tests:[
      {stdin:'snake123\n1\n', expected:'Access granted'},
      {stdin:'snake123\n3\n', expected:'Access denied'},
      {stdin:'wrong\n1\n',    expected:'Access denied'},
      {stdin:'snake123\n0\n', expected:'Access granted'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-grade', title:'Report Card', level:'Medium', mode:'stdout',
    prompt:'Read a score with <code>int(input())</code>. Print a grade: <code>A</code> (90+), <code>B</code> (80+), <code>C</code> (70+), else <code>F</code>. Use one <code>if/elif/elif/else</code> chain.',
    starter:'score = int(input())\n# print A / B / C / F\n',
    tests:[
      {stdin:'95\n', expected:'A'},
      {stdin:'84\n', expected:'B'},
      {stdin:'72\n', expected:'C'},
      {stdin:'50\n', expected:'F'},
      {stdin:'90\n', expected:'A'},
      {stdin:'80\n', expected:'B'},
    ], hiddenFrom:3,
  })}
  ${CH({
    id:'s5-join', title:'Join the Camp?', level:'Medium', mode:'stdout',
    prompt:'Read an age. Print <code>Welcome!</code> if the age is 10 or more, otherwise <code>Too young</code>.',
    starter:'age = int(input())\n# Welcome! / Too young\n',
    tests:[
      {stdin:'10\n', expected:'Welcome!'},
      {stdin:'9\n',  expected:'Too young'},
      {stdin:'14\n', expected:'Welcome!'},
      {stdin:'5\n',  expected:'Too young'},
    ], hiddenFrom:2,
  })}

  <div class="tier t-red">🔴 Challenge — decisions that draw &amp; play</div>
  <p class="mini">The three logic puzzles are auto-graded. The two drawing ones use the turtle, so
  just run them and check with your eyes.</p>

  ${CH({
    id:'s5-crash', title:'Wall Crash', level:'Challenge', mode:'stdout',
    prompt:'Read <code>x</code> (line 1) and <code>y</code> (line 2). The screen edge is 200. Print <code>CRASH</code> if the head is off-screen — <code>abs(x) &gt; 200 or abs(y) &gt; 200</code> — otherwise <code>Safe</code>.',
    starter:'x = int(input())\ny = int(input())\n# CRASH if off-screen, else Safe\n',
    tests:[
      {stdin:'250\n0\n',  expected:'CRASH'},
      {stdin:'0\n0\n',    expected:'Safe'},
      {stdin:'0\n-300\n', expected:'CRASH'},
      {stdin:'100\n100\n',expected:'Safe'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s5-rps', title:'Rock · Paper · Scissors', level:'Challenge', mode:'stdout',
    prompt:'Read player 1 (line 1) and player 2 (line 2), each one of <code>rock</code>/<code>paper</code>/<code>scissors</code>. Print <code>Player 1</code>, <code>Player 2</code>, or <code>Tie</code>. (Rock beats scissors, scissors beats paper, paper beats rock.)',
    starter:'p1 = input()\np2 = input()\n# print "Player 1", "Player 2", or "Tie"\n',
    tests:[
      {stdin:'rock\nscissors\n',  expected:'Player 1'},
      {stdin:'scissors\nrock\n',  expected:'Player 2'},
      {stdin:'rock\nrock\n',      expected:'Tie'},
      {stdin:'paper\nrock\n',     expected:'Player 1'},
      {stdin:'rock\npaper\n',     expected:'Player 2'},
      {stdin:'scissors\npaper\n', expected:'Player 1'},
    ], hiddenFrom:3,
  })}
  ${CH({
    id:'s5-guess', title:'Guess the Number', level:'Challenge', mode:'stdout',
    prompt:'Read the <code>secret</code> (line 1) and the <code>guess</code> (line 2). Print <code>Too high</code> if the guess is bigger, <code>Too low</code> if smaller, or <code>Correct</code> if equal.',
    starter:'secret = int(input())\nguess = int(input())\n# Too high / Too low / Correct\n',
    tests:[
      {stdin:'7\n9\n',    expected:'Too high'},
      {stdin:'7\n5\n',    expected:'Too low'},
      {stdin:'7\n7\n',    expected:'Correct'},
      {stdin:'50\n100\n', expected:'Too high'},
    ], hiddenFrom:2,
  })}

  <p><b>Traffic light drawing.</b> Run the drawing below, then add a 4th case:
    if <code>light == 0</code>, make a gray dot ("off").</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.penup(); t.speed(0)\n\nlight = 3   # try 1, 2, or 3\n\nif light == 1:\n    t.color("red")\nelif light == 2:\n    t.color("yellow")\nelse:\n    t.color("green")\n\nt.dot(120)\nturtle.done()', {origin:'center'})}
  <p class="mini"><b>Danger zone (loop + if):</b> once you reach Session 3's loops, walk the turtle forward
    in a loop and color each step <b>red</b> when <code>x &gt; 100</code>, otherwise <b>green</b>.</p>

  ${Q('Exit quiz', [
    {q:'<code>n % 2 == 0</code> is True when n is…', a:[
      {t:'even', ok:true, fb:'% gives the remainder; 0 means even.'}, {t:'odd', ok:false}, {t:'negative', ok:false}]},
    {q:'<code>if a or b:</code> runs when…', a:[
      {t:'at least one of a, b is true', ok:true}, {t:'both are true', ok:false}, {t:'neither is true', ok:false}]},
    {q:'<code>x = 5</code> inside an if condition (instead of <code>x == 5</code>) is…', a:[
      {t:'a common bug — that stores, not compares', ok:true}, {t:'totally fine', ok:false}, {t:'faster', ok:false}]},
    {q:'For the snake, "game over" is best written as…', a:[
      {t:'hit_wall or hit_self', ok:true, fb:'Either one ends the game.'},
      {t:'hit_wall and hit_self', ok:false, fb:'That needs BOTH at once — too rare.'},
      {t:'not hit_wall', ok:false}]},
    {q:'<code>"Yes" == "yes"</code> gives…', a:[
      {t:'False — capital Y is different', ok:true, fb:'Text comparison is case-sensitive.'},
      {t:'True', ok:false}, {t:'an error', ok:false}]},
    {q:'<code>not (5 > 3)</code> is…', a:[
      {t:'False', ok:true, fb:'5>3 is True, and not flips it to False.'},
      {t:'True', ok:false}, {t:'5', ok:false}]},
    {q:'<code>move in ["up", "down"]</code> checks…', a:[
      {t:'whether move is one of the items in the list', ok:true, fb:'Like a bouncer checking the guest list.'},
      {t:'whether the list is empty', ok:false},
      {t:'whether move equals the whole list', ok:false}]},
    {q:'<code>if body:</code> when <code>body = []</code> (empty list) runs the…', a:[
      {t:'else branch — an empty list counts as False', ok:true, fb:'Empty lunchbox = "no".'},
      {t:'if branch — lists are always True', ok:false},
      {t:'neither — it crashes', ok:false}]},
    {q:'<code>status = "alive" if lives > 0 else "dead"</code> sets status to "dead" when…', a:[
      {t:'lives is 0 (or less)', ok:true, fb:'The part after else is the "false" choice.'},
      {t:'lives is more than 0', ok:false},
      {t:'always', ok:false}]},
    {q:'In a loop, <code>break</code> does what?', a:[
      {t:'stops the whole loop right away', ok:true, fb:'The emergency stop button.'},
      {t:'skips just this one round', ok:false, fb:'That is continue.'},
      {t:'restarts the loop from the top', ok:false}]},
  ])}

  <h3>🏠 Homework — "Number Sorter"</h3>
  <p>Auto-graded! Read a number and sort it into a size. This is the same idea your game uses to bucket values.</p>
  ${CH({
    id:'s5-sorter', title:'Number Sorter', level:'Homework', mode:'stdout',
    prompt:'Read a number with <code>int(input())</code>. Print <code>big</code> if it is over 100, <code>medium</code> if it is from 10 to 100, otherwise <code>small</code>.',
    starter:'n = int(input())\n# big (>100) / medium (10..100) / small (<10)\n',
    tests:[
      {stdin:'250\n', expected:'big'},
      {stdin:'50\n',  expected:'medium'},
      {stdin:'5\n',   expected:'small'},
      {stdin:'100\n', expected:'medium'},
      {stdin:'101\n', expected:'big'},
      {stdin:'9\n',   expected:'small'},
    ], hiddenFrom:3,
  })}

  <h3>🏠 Bonus homework — "Game Over Check"</h3>
  <p>A real Snake rule! The body is fixed at <code>[(0,0), (20,0), (40,0)]</code> and the walls are at
  ±100. Read the head's <code>x</code> (line 1) and <code>y</code> (line 2). Using <code>or</code> and
  <code>in</code>, print <code>GAME OVER</code> if the head hits a wall <b>or</b> its own body, else
  <code>Keep slithering</code>.</p>
  ${CH({
    id:'s5-gameover', title:'Game Over Check', level:'Homework', mode:'stdout',
    prompt:'Body is <code>[(0,0), (20,0), (40,0)]</code>, walls at ±100. Read <code>x</code> then <code>y</code>. Print <code>GAME OVER</code> if <code>abs(x) &gt; 100 or abs(y) &gt; 100</code> <b>or</b> the head <code>(x, y)</code> is <code>in</code> the body; otherwise <code>Keep slithering</code>.',
    starter:'body = [(0,0), (20,0), (40,0)]\nx = int(input())\ny = int(input())\nhead = (x, y)\n# GAME OVER if hit a wall or hit the body, else Keep slithering\n',
    tests:[
      {stdin:'120\n0\n', expected:'GAME OVER'},
      {stdin:'20\n0\n',  expected:'GAME OVER'},
      {stdin:'60\n0\n',  expected:'Keep slithering'},
      {stdin:'0\n-200\n',expected:'GAME OVER'},
    ], hiddenFrom:2,
  })}

  <div class="box tip"><div class="h">💡 Tip</div>
    Read your conditions out loud like English. If it makes sense as a sentence, it's probably right.</div>
`);

/* ===================================================================== */
/* SESSION 6 — FUNCTIONS                                                  */
/* ===================================================================== */
page('s6','6 · Functions','Name a trick, use it forever', ()=>`
  <h2>🪄 Session 6 — Functions</h2>
  <p class="lead">def · calling · parameters · return values · Don't Repeat Yourself (DRY)</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    A function is a <b>magic spell you name once and cast forever</b>. Instead of repeating "draw food"
    code everywhere, you write <code>draw_food()</code> once and call it whenever you need it.</div>

  <h3>🎬 Watch first — Functions explained</h3>
  <p>Start with this gentle intro, then watch the second video for more examples:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/UmNKiV7Lekk"
    title="Python Functions — intro" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>
  <div class="video"><iframe src="https://www.youtube.com/embed/KW6qncswzHw"
    title="Python Functions" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — define & call</h3>
  ${R('def greet(name):          # define the spell\n    print("Hi", name, "!")\n\ngreet("Sam")              # cast it\ngreet("Maria")            # cast again — no retyping!\ngreet("Pat")')}
  <p>Functions can <b>return</b> an answer:</p>
  ${R('def add(a, b):\n    return a + b\n\nresult = add(3, 4)\nprint("3 + 4 =", result)\nprint("Doubled:", add(10, 10))')}

  ${Q('Function basics', [
    {q:'What keyword defines a function?', a:[
      {t:'def', ok:true}, {t:'func', ok:false}, {t:'function', ok:false}]},
    {q:'Why use functions?', a:[
      {t:'To make code longer', ok:false},
      {t:'To reuse code and avoid repeating yourself', ok:true, fb:'DRY: Don\'t Repeat Yourself.'},
      {t:'They are required by Python', ok:false}]},
    {q:'In <code>def draw_square(size):</code>, what is <code>size</code>?', a:[
      {t:'a parameter — an input you pass in', ok:true}, {t:'a loop', ok:false}, {t:'the function name', ok:false}]},
  ])}

  <h3>🎨 In class — one function, many shapes</h3>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_square(size, color):\n    t.color(color)\n    for i in range(4):\n        t.forward(size)\n        t.right(90)\n\ndraw_square(60, "red")\nt.penup(); t.forward(80); t.pendown()\ndraw_square(90, "blue")\nt.penup(); t.forward(110); t.pendown()\ndraw_square(120, "green")\n\nturtle.done()')}
  <div class="box brick"><div class="h">🐍 Snake callback</div>
    Your game will be made of functions: <code>move()</code>, <code>grow()</code>,
    <code>draw_food()</code>, <code>check_collision()</code>. Functions are how big programs stay manageable.</div>

  <h3>🧩 Learn more — the anatomy: parameters vs arguments</h3>
  <p><b>Analogy:</b> think of a recipe that says "add ___ cups of flour." The blank "___ cups" is the
  <b>parameter</b> (the empty slot in the definition). When you actually bake and pour <i>2 cups</i>, that
  2 is the <b>argument</b> (the real value you pass in). Same slot, different word depending on which side
  you're on.</p>
  ${R('#        v-- parameters (the empty slots)\ndef power_up(player, points):\n    print(player, "gained", points, "points!")\n\n#        v-- arguments (the real values)\npower_up("Sam", 50)\npower_up("Maria", 100)')}
  <div class="box tip"><div class="h">💡 Default & named arguments</div>
    <b>Analogy:</b> a <b>default</b> is like a pizza that <i>comes with cheese</i> unless you say otherwise —
    you only mention the topping when you want to change it. Passing arguments <b>by name</b>
    (<code>color="green"</code>) is like writing the labels on a form so nothing gets filled in the wrong box.</div>
  ${R('def draw_dot(size, color="red"):   # color is optional (default red)\n    print("Drawing a", color, "dot of size", size)\n\ndraw_dot(20)                  # uses default -> red\ndraw_dot(20, "blue")          # by position\ndraw_dot(size=30, color="green")  # by name (clear!)')}

  <h3>▶️ Learn more — how a function actually runs</h3>
  <p><b>Analogy:</b> calling a function is like following a <i>bookmark</i>. You're reading along, you hit
  "see recipe on page 50," you flip there, do the steps, then flip <b>back</b> to your bookmark and keep
  going. Defining a function does <b>not</b> run it — it just writes the recipe on page 50. The code only
  runs when you <b>call</b> it; then Python jumps in, runs its lines, and jumps back to exactly where it was.</p>
  ${R('print("1. before")\n\ndef say_hi():\n    print("3. inside the function")\n\nprint("2. defined, but not run yet")\nsay_hi()                 # NOW it jumps in\nprint("4. back after the call")\n\n# Watch the numbers: 1, 2, 3, 4 — the jump in and out is clear.')}

  <h3>↩️ Learn more — return vs print (they are NOT the same!)</h3>
  <p><b>Analogy:</b> <code>print</code> is <i>saying the answer out loud</i> — everyone hears it, but it's
  gone in the air. <code>return</code> is <i>writing the answer on a sticky note and handing it back</i> —
  now you can keep it, add to it, or pass it to someone else. A returned value can be stored, added, or passed
  on; printed text can't.</p>
  ${R('def double_print(n):\n    print(n * 2)        # only shows it\n\ndef double_return(n):\n    return n * 2        # hands it back\n\na = double_print(5)     # shows 10, but a is empty (None)\nb = double_return(5)    # b actually holds 10\nprint("a is", a)\nprint("b is", b, "-> we can keep using it:", b + 1)')}
  <div class="box warn"><div class="h">🛑 return also ends the function</div>
    The moment Python hits <code>return</code>, it leaves the function immediately — any lines after it
    are skipped. A function with no <code>return</code> hands back <code>None</code>.</div>

  <h3>🎯 Learn more — one job per function (Single Responsibility)</h3>
  <p>The best functions do <b>one</b> thing and do it well. If you have to use the word "and" to describe
  what a function does ("it draws the food <i>and</i> moves the snake <i>and</i> checks the score"), it's
  doing too much — split it. Small single-job functions are easier to name, test, and reuse.</p>
  ${R('# 👎 one function doing everything\ndef do_turn_messy():\n    print("move snake"); print("check food"); print("update score")\n\n# 👍 one job each — main reads like a sentence\ndef move_snake():   print("move snake")\ndef check_food():   print("check food")\ndef update_score(): print("update score")\n\nmove_snake(); check_food(); update_score()')}

  <h3>🏠 Learn more — namespaces (where names live)</h3>
  <p><b>Analogy:</b> each function carries its own <i>backpack</i> of names. Whatever you put in the backpack
  (variables made inside) belongs only to that function and gets emptied the moment it finishes. A
  <b>namespace</b> is just "the list of names currently in scope." Variables made <i>inside</i> a function live
  in that function's own <b>local</b> backpack; names made outside live in the shared <b>global</b> one.</p>
  ${R('def make_score():\n    points = 100        # LOCAL — only exists inside this function\n    print("Inside, points =", points)\n\nmake_score()\nprint("Outside, points =", points)   # 💥 ERROR: points is not defined out here')}
  <div class="box tip"><div class="h">💡 Why have local namespaces at all?</div>
    They keep functions <b>self-contained and safe</b>. A function can use a variable named <code>i</code>
    or <code>total</code> without worrying that some <i>other</i> part of the program also uses that name —
    no accidental clashes. Each function gets its own clean workspace, wiped after it runs. To send a value
    back out, use <code>return</code> (not a sneaky shared variable).</div>
  ${R('def add(a, b):\n    answer = a + b      # local: this "answer" belongs only to add()\n    return answer       # the clean way to send it out\n\ntotal = add(3, 4)       # the OUTSIDE world catches it with return\nprint("total =", total)')}

  <div class="box warn"><div class="h">🐛 Common function gotchas — read before you cry</div>
    <ul>
      <li><b>Defining ≠ calling:</b> <code>def greet():</code> alone prints nothing. You must <i>call</i> it: <code>greet()</code>.</li>
      <li><b>Forgot the parentheses:</b> <code>greet</code> is the spell itself; <code>greet()</code> casts it.</li>
      <li><b>return vs print:</b> if you forget <code>return</code>, the caller gets <code>None</code>.</li>
      <li><b>Wrong number of arguments:</b> <code>def add(a, b)</code> called as <code>add(3)</code> → error. Slots must be filled.</li>
      <li><b>Using a local outside:</b> a variable made inside a function can't be seen outside — return it instead.</li>
      <li><b>Define before you call:</b> Python must read the <code>def</code> line before the call runs.</li>
    </ul></div>

  ${Q('Going deeper', [
    {q:'In <code>def hit(target):</code>, called as <code>hit("wall")</code> — which is the ARGUMENT?', a:[
      {t:'"wall"', ok:true, fb:'The real value passed in is the argument.'},
      {t:'target', ok:false, fb:'That\'s the parameter (the slot).'},
      {t:'hit', ok:false}]},
    {q:'When does the code inside a function run?', a:[
      {t:'Only when the function is called', ok:true, fb:'def just defines; the call runs it.'},
      {t:'As soon as you write the def', ok:false}, {t:'Never', ok:false}]},
    {q:'A function with no <code>return</code> hands back…', a:[
      {t:'None', ok:true, fb:'No return → None.'}, {t:'0', ok:false}, {t:'the last print', ok:false}]},
    {q:'A variable created inside a function is…', a:[
      {t:'local — gone when the function ends', ok:true},
      {t:'usable everywhere', ok:false}, {t:'saved to a file', ok:false}]},
    {q:'Why are local namespaces helpful?', a:[
      {t:'Functions don\'t clash over names like i or total', ok:true, fb:'Each function gets its own clean workspace.'},
      {t:'They make code run slower', ok:false}, {t:'They are required by law', ok:false}]},
    {q:'A function that "draws food AND moves snake AND scores" breaks which idea?', a:[
      {t:'Single Responsibility — one job per function', ok:true},
      {t:'DRY', ok:false}, {t:'None, that\'s great', ok:false}]},
  ])}

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter — define &amp; call</div>
  <div class="box tip"><div class="h">🧪 Auto-graded — and these <code>return</code>!</div>
    The tester <b>calls your function</b> with different inputs and checks what you <code>return</code>
    (not what you print). Write the <code>def</code>, press ▶ <b>Run Tests</b>, earn a 🏅.</div>
  ${CH({
    id:'s6-cheer', title:'Cheer Squad', level:'Starter', mode:'function', funcName:'cheer',
    prompt:'Write <code>cheer(name)</code> that <b>returns</b> the string <code>Go NAME, go!</code> (with the name filled in). Use an f-string.',
    starter:'def cheer(name):\n    # return "Go <name>, go!"\n    pass\n',
    tests:[
      {args:['Sam'],  expected:'Go Sam, go!'},
      {args:['Mia'],  expected:'Go Mia, go!'},
      {args:['Pat'],  expected:'Go Pat, go!'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-greet', title:'Greeting with a Default', level:'Starter', mode:'function', funcName:'greet',
    prompt:'Write <code>greet(name, mood="happy")</code> that <b>returns</b> <code>NAME is MOOD</code>. The <code>mood</code> has a <b>default</b> of "happy" — so <code>greet("Sam")</code> returns <code>Sam is happy</code>.',
    starter:'def greet(name, mood="happy"):\n    # return "<name> is <mood>"\n    pass\n',
    tests:[
      {args:['Sam'],         expected:'Sam is happy'},
      {args:['Sam','sad'],   expected:'Sam is sad'},
      {args:['Mia','sleepy'],expected:'Mia is sleepy'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-add', title:'Add Machine', level:'Starter', mode:'function', funcName:'add',
    prompt:'Write <code>add(a, b)</code> that <b>returns</b> <code>a + b</code>.',
    starter:'def add(a, b):\n    # return the sum\n    pass\n',
    tests:[
      {args:[3,4],   expected:7},
      {args:[10,10], expected:20},
      {args:[0,0],   expected:0},
      {args:[-5,2],  expected:-3},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-square', title:'Square It', level:'Starter', mode:'function', funcName:'square',
    prompt:'Write <code>square(n)</code> that <b>returns</b> <code>n * n</code>.',
    starter:'def square(n):\n    # return n times n\n    pass\n',
    tests:[
      {args:[4],  expected:16},
      {args:[9],  expected:81},
      {args:[0],  expected:0},
      {args:[-3], expected:9},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-tag', title:'Name Tag', level:'Starter', mode:'function', funcName:'tag',
    prompt:'Write <code>tag(name, age)</code> that <b>returns</b> <code>NAME is AGE</code> (two arguments, one f-string).',
    starter:'def tag(name, age):\n    # return "<name> is <age>"\n    pass\n',
    tests:[
      {args:['Sam',11], expected:'Sam is 11'},
      {args:['Mia',9],  expected:'Mia is 9'},
      {args:['Pat',13], expected:'Pat is 13'},
    ], hiddenFrom:2,
  })}
  <div class="tier t-yellow">🟡 Medium — return values</div>
  ${CH({
    id:'s6-iseven', title:'Even Checker', level:'Medium', mode:'function', funcName:'is_even',
    prompt:'Write <code>is_even(n)</code> that <b>returns</b> <code>True</code> or <code>False</code> (no printing). Hint: <code>n % 2 == 0</code>.',
    starter:'def is_even(n):\n    # return True if n is even, else False\n    pass\n',
    tests:[
      {args:[4],  expected:true},
      {args:[7],  expected:false},
      {args:[0],  expected:true},
      {args:[-2], expected:true},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-biggest', title:'Biggest of Three', level:'Medium', mode:'function', funcName:'biggest',
    prompt:'Write <code>biggest(a, b, c)</code> that <b>returns</b> the largest of the three — using <code>if/elif</code>, no <code>max()</code> needed.',
    starter:'def biggest(a, b, c):\n    # return the largest of a, b, c\n    pass\n',
    tests:[
      {args:[3,9,5],    expected:9},
      {args:[10,2,7],   expected:10},
      {args:[1,1,1],    expected:1},
      {args:[-5,-2,-9], expected:-2},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-points', title:'Points Lookup', level:'Medium', mode:'function', funcName:'points_for',
    prompt:'Write <code>points_for(food)</code> that <b>returns</b> 10 for <code>"apple"</code>, 20 for <code>"cherry"</code>, and 5 for anything else.',
    starter:'def points_for(food):\n    # 10 apple, 20 cherry, else 5\n    pass\n',
    tests:[
      {args:['apple'],  expected:10},
      {args:['cherry'], expected:20},
      {args:['banana'], expected:5},
      {args:['mango'],  expected:5},
    ], hiddenFrom:2,
  })}
  <p class="mini"><b>Turtle bonus (run &amp; look):</b> write <code>draw_polygon(sides, size)</code> and draw a
    triangle, square, and pentagon with the SAME function. Then add a <code>color</code> parameter so each
    shape can be a different color.</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_polygon(sides, size):\n    angle = 360 / sides\n    for i in range(sides):\n        t.forward(size)\n        t.right(angle)\n\ndraw_polygon(3, 80)   # triangle\nt.penup(); t.forward(100); t.pendown()\ndraw_polygon(5, 60)   # pentagon\n\nturtle.done()')}
  <div class="tier t-red">🔴 Challenge — build with functions</div>
  ${CH({
    id:'s6-area', title:'Room Area', level:'Challenge', mode:'function', funcName:'area',
    prompt:'Write <code>area(width, height)</code> that <b>returns</b> width × height.',
    starter:'def area(width, height):\n    # return width times height\n    pass\n',
    tests:[
      {args:[3,4],  expected:12},
      {args:[5,5],  expected:25},
      {args:[10,2], expected:20},
      {args:[1,1],  expected:1},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s6-countevens', title:'Helper Using a Helper', level:'Challenge', mode:'function', funcName:'count_evens',
    prompt:'Write <code>count_evens(numbers)</code> that <b>returns</b> how many numbers in the list are even. (Bonus: write a tiny <code>is_even</code> helper and call it inside the loop.)',
    starter:'def count_evens(numbers):\n    # return how many numbers are even\n    pass\n',
    tests:[
      {args:[[1,2,3,4]], expected:2},
      {args:[[2,4,6]],   expected:3},
      {args:[[1,3,5]],   expected:0},
      {args:[[]],        expected:0},
      {args:[[2,2,2,1]], expected:3},
    ], hiddenFrom:2,
  })}
  <p class="mini"><b>Build-it-yourself (not auto-graded):</b></p>
  <ul>
    <li><b>Clean main.</b> Split a messy program into 3 single-job functions, then write a short
      <code>main()</code> that calls them in order — make <code>main</code> read like a sentence.</li>
    <li><b>Dice roller.</b> Write <code>roll()</code> that <b>returns</b> a random number 1–6
      (<code>import random</code>; <code>random.randint(1, 6)</code>). Roll it 5 times in a loop.</li>
    <li><b>Stamp a row.</b> Write <code>draw_shape(sides, size, x)</code> that moves to position
      <code>x</code> and stamps a polygon. Call it in a loop to draw a whole row of growing shapes.</li>
  </ul>

  ${Q('Exit quiz', [
    {q:'<code>return</code> does what?', a:[
      {t:'Sends an answer back to whoever called the function', ok:true},
      {t:'Prints to the screen', ok:false}, {t:'Ends the whole program', ok:false}]},
    {q:'You copy-pasted the same 5 lines three times. The fix is…', a:[
      {t:'Make it a function and call it 3 times', ok:true}, {t:'Leave it, copy-paste is fine', ok:false}, {t:'Delete two copies', ok:false}]},
    {q:'<code>draw_polygon(6, 50)</code> draws a…', a:[
      {t:'hexagon of size 50', ok:true}, {t:'circle', ok:false}, {t:'square', ok:false}]},
    {q:'<code>def f(): print("hi")</code> — then you write just <code>f</code> (no parentheses). It…', a:[
      {t:'does NOT call it — you need f()', ok:true, fb:'Parentheses cast the spell.'},
      {t:'prints hi', ok:false}, {t:'errors', ok:false}]},
    {q:'<code>print("hi")</code> vs <code>return "hi"</code> — the difference is…', a:[
      {t:'print shows it; return hands it back to use', ok:true},
      {t:'they are identical', ok:false}, {t:'return is just a typo for print', ok:false}]},
    {q:'<code>def add(a, b)</code> called as <code>add(5)</code> will…', a:[
      {t:'error — b has no argument', ok:true, fb:'Every slot needs a value (unless it has a default).'},
      {t:'use 0 for b', ok:false}, {t:'work fine', ok:false}]},
    {q:'<code>def draw_dot(size, color="red"):</code> — calling <code>draw_dot(20)</code> makes color…', a:[
      {t:'"red" — the default value', ok:true, fb:'A default makes that argument optional.'},
      {t:'empty (None)', ok:false}, {t:'an error', ok:false}]},
    {q:'A <b>parameter</b> is the slot in the def; an <b>argument</b> is…', a:[
      {t:'the real value you pass in when calling', ok:true},
      {t:'the name of the function', ok:false}, {t:'the return value', ok:false}]},
    {q:'You call a function on line 1 but its <code>def</code> is on line 5. This…', a:[
      {t:'errors — Python must read the def before the call', ok:true},
      {t:'works fine', ok:false}, {t:'runs the def twice', ok:false}]},
    {q:'When Python hits <code>return</code>, the lines after it in the function…', a:[
      {t:'are skipped — return leaves the function right away', ok:true},
      {t:'still run', ok:false}, {t:'run twice', ok:false}]},
  ])}

  <h3>🏠 Homework — "Shape Stamp Maker"</h3>
  <p>Polish your <code>draw_polygon</code> function and use it to draw a whole row of different shapes
  in a loop, each a different color. Add a parameter for color too!</p>
  ${HW('# 🏠 HOMEWORK: Finish draw_polygon so it takes a COLOR too,\n# then draw a row of shapes with one loop.\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_polygon(sides, size, color):\n    t.color(color)\n    angle = 360 / sides\n    for i in range(sides):\n        t.forward(size)\n        t.right(angle)\n\n# call your function a few times (move between shapes with penup/forward):\ndraw_polygon(3, 60, "red")\n\n\nturtle.done()\n\n# Expected result: a row of different colored shapes (triangle, square, pentagon...).')}

  <h3>🏠 Bonus homework — "Score Helpers" (no turtle)</h3>
  <p>Practice <b>return</b> and the single-job idea. Finish two small functions: one that returns
  points for a food, and one that returns whether the player won. The main code uses what they return.</p>
  ${HW('# 🏠 BONUS: Write functions that RETURN values (don\'t print inside them).\n\ndef points_for(food):\n    # return 10 for "apple", 20 for "cherry", else 5\n    pass        # <- replace with your if/elif/else + return\n\ndef has_won(score):\n    # return True if score >= 100, else False\n    pass        # <- replace with a return\n\n# main program uses the returned values:\nscore = points_for("cherry") + points_for("apple")\nprint("Score:", score)\nif has_won(score):\n    print("You win!")\nelse:\n    print("Keep going!")\n\n# Expected with cherry+apple = 30 -> "Keep going!"\n# Make score >= 100 to see "You win!"')}

  <div class="box tip"><div class="h">💡 Tip</div>
    If you've copy-pasted code twice, that's a sign: turn it into a function. <b>DRY!</b></div>
`);

/* ===================================================================== */
/* SESSION 7 — ABSTRACTION & MODULARITY                                   */
/* ===================================================================== */
page('s7','7 · Abstraction','Hide the mess, organize the toys', ()=>`
  <h2>🧰 Session 7 — Abstraction & Modularity</h2>
  <p class="lead">hiding messy details · clean "main" code · organizing into named parts</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    You drive a car without knowing how the engine works — that's <b>abstraction</b> (hiding messy
    details behind a simple button). And you keep LEGO sorted in bins so you can find pieces — that's
    <b>modularity</b> (organizing code into named parts).</div>

  <h3>🎬 Watch first — Abstraction</h3>
  <p>A quick, friendly video to see the idea of hiding details before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/9oDAsFhSR5k"
    title="Abstraction" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — make "main" read like English</h3>
  <p>Compare a messy program to a clean one. Same drawing, but which is easier to read?</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_sun():\n    t.penup(); t.goto(80,80); t.pendown()\n    t.color("orange"); t.dot(60)\n\ndef draw_house():\n    t.penup(); t.goto(-80,-80); t.pendown()\n    t.color("brown")\n    for i in range(4):\n        t.forward(100); t.left(90)\n\n# The MAIN program reads like plain English:\ndraw_house()\ndraw_sun()\n\nturtle.done()', {origin:'center'})}
  <div class="box tip"><div class="h">💡 The test</div>
    If your <b>main</b> program is readable by your little sibling, you nailed abstraction.
    Good code reads like a recipe, not a wall of text.</div>

  ${Q('Concept check', [
    {q:'"Abstraction" means…', a:[
      {t:'Hiding complicated details behind a simple name', ok:true}, {t:'Deleting code', ok:false}, {t:'Making code harder', ok:false}]},
    {q:'Why split code into modules/functions?', a:[
      {t:'Easier to find, fix, and reuse', ok:true}, {t:'It always runs faster', ok:false}, {t:'It looks fancy', ok:false}]},
    {q:'A clean "main" program should…', a:[
      {t:'be a short list of well-named function calls', ok:true},
      {t:'contain every messy detail', ok:false}, {t:'have no functions', ok:false}]},
  ])}

  <h3>🪜 Learn more — layers: the button vs the wiring</h3>
  <p><b>Analogy:</b> a TV remote has a big red <b>power button</b> (simple to use) and a tangle of
  <i>wiring</i> inside (messy to build). Abstraction is drawing a line between the two: the
  <b>name you call</b> is the button; the code <b>inside</b> the function is the wiring. Users press the
  button and never see the wires.</p>
  ${R('# the "button" — a simple name anyone can press:\ndef draw_star():\n    # the "wiring" — messy details hidden inside:\n    import turtle\n    for i in range(5):\n        turtle.forward(100); turtle.right(144)\n\ndraw_star()   # press the button — no wiring in sight\nimport turtle; turtle.done()', {origin:'center'})}

  <h3>🏷️ Learn more — good names are labeled drawers</h3>
  <p><b>Analogy:</b> imagine a desk with drawers. Unlabeled drawers mean you open all of them to find a
  pencil. <b>Labeled</b> drawers (<code>pencils</code>, <code>tape</code>, <code>scissors</code>) mean you
  go straight to the right one. A good function name like <code>draw_house()</code> is a label — you
  instantly know what's inside without opening it.</p>
  ${R('# 👎 mystery names — what do these do?\ndef f1(): print("...")\ndef f2(): print("...")\n\n# 👍 labeled drawers — obvious at a glance\ndef draw_walls():  print("drawing walls")\ndef draw_roof():   print("drawing roof")\n\ndraw_walls(); draw_roof()')}

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter — name &amp; hide</div>
  <div class="box tip"><div class="h">🧪 Auto-graded — hide the calculation behind a name</div>
    Abstraction means wrapping a messy little calculation inside a clearly-named function. These check
    what you <code>return</code>. Saved automatically — earn a 🏅!</div>
  ${CH({
    id:'s7-minsec', title:'Minutes → Seconds', level:'Starter', mode:'function', funcName:'minutes_to_seconds',
    prompt:'Hide the magic number 60! Write <code>minutes_to_seconds(m)</code> that <b>returns</b> <code>m * 60</code>.',
    starter:'def minutes_to_seconds(m):\n    # return the number of seconds in m minutes\n    pass\n',
    tests:[ {args:[1],expected:60}, {args:[2],expected:120}, {args:[0],expected:0}, {args:[5],expected:300} ],
    hiddenFrom:2,
  })}
  ${CH({
    id:'s7-perim', title:'Square Perimeter', level:'Starter', mode:'function', funcName:'square_perimeter',
    prompt:'Write <code>square_perimeter(side)</code> that <b>returns</b> the distance around a square: <code>side * 4</code>.',
    starter:'def square_perimeter(side):\n    # return side times 4\n    pass\n',
    tests:[ {args:[10],expected:40}, {args:[3],expected:12}, {args:[1],expected:4}, {args:[0],expected:0} ],
    hiddenFrom:2,
  })}
  ${CH({
    id:'s7-stars', title:'Star Bar', level:'Starter', mode:'function', funcName:'stars',
    prompt:'Hide the repetition! Write <code>stars(n)</code> that <b>returns</b> a string of <code>n</code> stars. Hint: <code>"*" * n</code>.',
    starter:'def stars(n):\n    # return a string of n stars, e.g. stars(3) -> "***"\n    pass\n',
    tests:[ {args:[3],expected:'***'}, {args:[5],expected:'*****'}, {args:[1],expected:'*'}, {args:[0],expected:''} ],
    hiddenFrom:2,
  })}
  <p class="mini">Turtle warm-ups (run &amp; look — not auto-graded):</p>
  <ol>
    <li><b>One clean call.</b> Put any 3 turtle commands inside a function called <code>draw_line()</code>
      and call it once. The messy bits are now hidden.</li>
    <li><b>Label the drawer.</b> Rename a function called <code>f()</code> to a clear name that says what
      it does, then call it.</li>
    <li><b>Two helpers.</b> Write <code>draw_sun()</code> and <code>draw_ground()</code>, then a main of
      just those two calls.</li>
    <li><b>Readable main.</b> Write three functions so the main reads like a sentence:
      <code>draw_sky(); draw_hill(); draw_tree()</code>.</li>
    <li><b>Sibling test.</b> Show your main (just the calls) to someone and see if they can guess the
      picture without reading the details.</li>
  </ol>
  <div class="tier t-yellow">🟡 Medium — build on your helpers</div>
  ${CH({
    id:'s7-totalsec', title:'Total Seconds', level:'Medium', mode:'function', funcName:'total_seconds',
    prompt:'Write <code>total_seconds(minutes, seconds)</code> that <b>returns</b> the total seconds: <code>minutes * 60 + seconds</code>. (Reuse the idea from Minutes → Seconds.)',
    starter:'def total_seconds(minutes, seconds):\n    # return minutes*60 + seconds\n    pass\n',
    tests:[ {args:[1,30],expected:90}, {args:[2,0],expected:120}, {args:[0,45],expected:45}, {args:[3,15],expected:195} ],
    hiddenFrom:2,
  })}
  ${CH({
    id:'s7-boxvol', title:'Box Volume', level:'Medium', mode:'function', funcName:'box_volume',
    prompt:'Write <code>box_volume(w, h, d)</code> that <b>returns</b> <code>w * h * d</code> — one clean name for a 3-number calculation.',
    starter:'def box_volume(w, h, d):\n    # return w * h * d\n    pass\n',
    tests:[ {args:[2,3,4],expected:24}, {args:[1,1,1],expected:1}, {args:[5,2,2],expected:20}, {args:[10,0,3],expected:0} ],
    hiddenFrom:2,
  })}
  ${CH({
    id:'s7-describe', title:'Describe Rectangle', level:'Medium', mode:'function', funcName:'describe_rectangle',
    prompt:'Write <code>describe_rectangle(w, h)</code> that <b>returns</b> the sentence <code>Area is N</code> (with the area filled in) — a clean answer that hides the math inside.',
    starter:'def describe_rectangle(w, h):\n    # return "Area is <w*h>"\n    pass\n',
    tests:[ {args:[3,4],expected:'Area is 12'}, {args:[5,5],expected:'Area is 25'}, {args:[2,10],expected:'Area is 20'} ],
    hiddenFrom:2,
  })}
  <p class="mini">Turtle scene-builder (run &amp; look — not auto-graded):</p>
  <ol>
    <li><b>Full scene.</b> Build a picture where the main program is only 3–4 clean function calls
      (use the starter code below).</li>
    <li><b>Add a helper.</b> Add a <code>draw_cloud()</code> function and one line in main to place it.</li>
    <li><b>Reuse with a parameter.</b> Make <code>draw_tree(x)</code> take a position so you can draw a
      whole forest with several calls.</li>
    <li><b>Split the messy one.</b> Take a long 15-line drawing and break it into 3 named functions.</li>
    <li><b>Helper of helpers.</b> Write <code>draw_house()</code> that itself calls
      <code>draw_walls()</code> and <code>draw_roof()</code> — layers inside layers.</li>
  </ol>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_ground():\n    t.penup(); t.goto(-200,-50); t.pendown()\n    t.color("green"); t.pensize(8); t.forward(400)\n\ndef draw_tree():\n    t.penup(); t.goto(-100,-50); t.pendown()\n    t.color("brown"); t.pensize(10)\n    t.left(90); t.forward(80)\n    t.color("darkgreen"); t.dot(70)\n\n# main:\ndraw_ground()\ndraw_tree()\n# add draw_sun() yourself!\n\nturtle.done()', {origin:'center'})}
  <div class="tier t-red">🔴 Challenge — one name, a whole rule</div>
  ${CH({
    id:'s7-fence', title:'Fence Cost', level:'Challenge', mode:'function', funcName:'fence_cost',
    prompt:'Write <code>fence_cost(side, price)</code> that <b>returns</b> the cost to fence a square: the perimeter (<code>side * 4</code>) times the <code>price</code> per meter.',
    starter:'def fence_cost(side, price):\n    # return perimeter (side*4) times price\n    pass\n',
    tests:[ {args:[10,2],expected:80}, {args:[5,3],expected:60}, {args:[1,1],expected:4}, {args:[0,9],expected:0} ],
    hiddenFrom:2,
  })}
  ${CH({
    id:'s7-ticket', title:'Ticket Price', level:'Challenge', mode:'function', funcName:'ticket_price',
    prompt:'Hide a whole pricing <b>rule</b> behind one name. Write <code>ticket_price(age)</code> that <b>returns</b> <code>0</code> for under 5, <code>5</code> for under 13, and <code>10</code> for everyone else.',
    starter:'def ticket_price(age):\n    # 0 if under 5, 5 if under 13, else 10\n    pass\n',
    tests:[ {args:[3],expected:0}, {args:[10],expected:5}, {args:[13],expected:10}, {args:[40],expected:10}, {args:[5],expected:5} ],
    hiddenFrom:3,
  })}
  <p class="mini">Turtle layering (run &amp; look — not auto-graded):</p>
  <ol>
    <li><b>Whole village.</b> Write <code>draw_village()</code> that calls <code>draw_house(x)</code>
      three times at different positions.</li>
    <li><b>Snake preview.</b> Write empty functions <code>move_snake()</code>, <code>check_food()</code>,
      <code>draw_everything()</code> and a main loop that calls them — the shape of your real game.</li>
    <li><b>Hide the setup.</b> Put the turtle setup (<code>speed</code>, <code>pensize</code>, colors)
      into a <code>setup()</code> function so main starts with one clean <code>setup()</code> call.</li>
    <li><b>Rename for clarity.</b> Take a working but badly-named program and rename every function so a
      stranger could read the main and understand it.</li>
    <li><b>Two layers deep.</b> Build a scene where main calls <code>draw_scene()</code>, which calls
      <code>draw_house()</code>, which calls <code>draw_walls()</code> — three layers of buttons.</li>
  </ol>

  <div class="box brick"><div class="h">🐍 Snake callback</div>
    Next week your whole game's main loop will read like:
    <code>move_snake()</code> · <code>check_food()</code> · <code>draw_everything()</code>.
    All the messy bits hidden inside. That's a professional habit you'll have for life.</div>

  ${Q('Exit quiz', [
    {q:'Driving a car by pressing the gas pedal (not knowing the engine) is an example of…', a:[
      {t:'abstraction', ok:true}, {t:'a loop', ok:false}, {t:'a bug', ok:false}]},
    {q:'Modularity is like…', a:[
      {t:'sorting LEGO into labeled bins', ok:true}, {t:'dumping all LEGO in one pile', ok:false}, {t:'throwing LEGO away', ok:false}]},
    {q:'Well-named functions make code…', a:[
      {t:'self-explaining and easy to change', ok:true}, {t:'slower', ok:false}, {t:'longer to understand', ok:false}]},
    {q:'Abstraction is mainly about…', a:[
      {t:'hiding messy details behind a simple name', ok:true},
      {t:'deleting code you don\'t like', ok:false}, {t:'making code run faster', ok:false}]},
    {q:'A good <b>main</b> program should read like…', a:[
      {t:'a short recipe of well-named function calls', ok:true},
      {t:'one giant wall of detailed commands', ok:false}, {t:'a list of comments only', ok:false}]},
    {q:'You use <code>draw_house()</code> without knowing every turtle line inside it. That\'s…', a:[
      {t:'abstraction — the details are hidden', ok:true},
      {t:'a bug', ok:false}, {t:'a loop', ok:false}]},
    {q:'Splitting a big program into named functions is called…', a:[
      {t:'modularity', ok:true}, {t:'repetition', ok:false}, {t:'nesting', ok:false}]},
    {q:'A great test that your abstraction worked is…', a:[
      {t:'a beginner can read your main and guess what it does', ok:true},
      {t:'the file is as long as possible', ok:false}, {t:'there are zero comments', ok:false}]},
    {q:'Hiding details inside functions makes a program easier to…', a:[
      {t:'find, fix, and reuse', ok:true}, {t:'crash', ok:false}, {t:'forget', ok:false}]},
    {q:'In a clean game, the main loop reading <code>move_snake(); check_food(); draw_everything()</code> shows…', a:[
      {t:'good abstraction — messy bits hidden inside each call', ok:true},
      {t:'bad code — too short', ok:false}, {t:'an infinite loop', ok:false}]},
  ])}

  <h3>🏠 Homework — "My Clean Scene"</h3>
  <p>Make a picture (house + tree + sun, or your own idea) where the main program is just 3–4 named
  function calls. Show a grown-up your main program and see if they can guess what it draws — without
  reading the details!</p>
  ${HW('# 🏠 HOMEWORK: Build a scene. Hide the messy turtle code inside\n# named functions, so the MAIN part reads like plain English.\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_sun():\n    t.penup(); t.goto(120,120); t.pendown()\n    t.color("gold"); t.dot(70)\n\ndef draw_house():\n    t.penup(); t.goto(-120,-100); t.pendown()\n    t.color("brown")\n    for i in range(4):\n        t.forward(120); t.left(90)\n\n# write more functions, then call them here (this is your clean MAIN):\ndraw_house()\ndraw_sun()\n\nturtle.done()\n\n# Expected result: a scene where MAIN is just a few readable function calls.', {origin:'center'})}
`);

/* ===================================================================== */
/* SESSION 8 — CLASSES                                                    */
/* ===================================================================== */
page('s8','8 · Classes','Design your own thing', ()=>`
  <h2>🧁 Session 8 — Classes</h2>
  <p class="lead">class · __init__ (setup) · attributes (data) · methods (actions)</p>

  <div class="box why"><div class="h">🎯 Why it matters</div>
    A <b>class</b> is a cookie-cutter / blueprint. Stamp it once → make many cookies (objects), each
    with its own data. Our game's Snake and Food will each be built from a blueprint.</div>

  <h3>🎬 Watch first — Classes &amp; objects</h3>
  <p>A quick, friendly video to see classes in action before we dive in:</p>
  <div class="video"><iframe src="https://www.youtube.com/embed/ocWCzDAH5lI"
    title="Python Classes" frameborder="0" loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></div>

  <h3>🧠 Learn — a tiny Pet class</h3>
  ${R('class Pet:\n    def __init__(self, name):   # setup, runs when created\n        self.name = name        # an ATTRIBUTE (data it remembers)\n\n    def speak(self):            # a METHOD (something it can do)\n        print(self.name, "says hello!")\n\n# stamp the cookie-cutter twice:\np1 = Pet("Rex")\np2 = Pet("Luna")\np1.speak()\np2.speak()')}
  <table>
    <tr><th>Word</th><th>Means</th></tr>
    <tr><td>class</td><td>the blueprint / cookie-cutter</td></tr>
    <tr><td>object</td><td>an actual thing built from it (Rex)</td></tr>
    <tr><td>__init__</td><td>the setup that runs when you create one</td></tr>
    <tr><td>attribute</td><td>data the object remembers (self.name)</td></tr>
    <tr><td>method</td><td>an action the object can do (speak)</td></tr>
  </table>

  ${Q('Class basics', [
    {q:'A class is like…', a:[
      {t:'a blueprint / cookie-cutter for making objects', ok:true}, {t:'a loop', ok:false}, {t:'a single variable', ok:false}]},
    {q:'What does <code>__init__</code> do?', a:[
      {t:'Sets up a new object when it is created', ok:true}, {t:'Deletes the object', ok:false}, {t:'Ends the program', ok:false}]},
    {q:'<code>self.name</code> is an…', a:[
      {t:'attribute (data the object stores)', ok:true}, {t:'method', ok:false}, {t:'import', ok:false}]},
  ])}

  <div class="box tip"><div class="h">🍪 One analogy for each new word</div>
    <ul>
      <li><b>class</b> = the <i>cookie-cutter</i>. It's just the shape — you can't eat it.</li>
      <li><b>object</b> = an <i>actual cookie</i> you stamped out. You can make many, each its own cookie.</li>
      <li><b>__init__</b> = the <i>"new toy" setup card</i> — it runs once the moment a toy comes out of the
        box, filling in its starting details.</li>
      <li><b>attribute</b> = a <i>sticker on the toy</i> that records something about <i>this</i> one
        (its color, its name) — <code>self.color</code>.</li>
      <li><b>method</b> = a <i>button on the toy</i> — press it and the toy <i>does</i> something
        (<code>bark()</code>, <code>pop()</code>).</li>
      <li><b>self</b> = the word <i>"me"</i>. Inside the toy, <code>self</code> means "this very toy,"
        so <code>self.name</code> is "my own name."</li>
    </ul></div>

  <h3>🐍 Peek at the Snake blueprint</h3>
  <p>Look closely — <b>every concept from the whole camp lives inside this one class:</b></p>
  <pre class="show">class Snake:
    def __init__(self):
        self.body = [(0, 0)]       # a LIST        (Session 4!)
        self.direction = "Right"   # a VARIABLE    (Session 2!)

    def move(self):                # a METHOD      (Session 6!)
        head = self.body[-1]       # last item     (lists!)
        ...                        # uses loops & ifs too</pre>
  <div class="box brick"><div class="h">🧱 The big reveal</div>
    Variables, lists, loops, conditionals, functions — they all come together inside a class.
    You're ready to build the game.</div>

  <h3>🏆 Challenges</h3>
  <div class="box tip"><div class="h">🧪 Auto-graded — the tester builds your objects</div>
    The tester <b>makes objects from your class</b> and checks an attribute or a method's
    <code>return</code> value (shown like <code>Pet("Rex").speak()</code>). Make methods
    <b>return</b> their answer (not print). Saved automatically — earn a 🏅!</div>
  <p class="mini">Worked example — a Balloon class (run &amp; look):</p>
  ${R('class Balloon:\n    def __init__(self, color, size):\n        self.color = color\n        self.size = size\n\n    def pop(self):\n        print("The", self.color, "balloon goes POP! 🎈")\n\nb1 = Balloon("red", 10)\nb2 = Balloon("blue", 20)\nb1.pop()\nb2.pop()')}

  <div class="tier t-green">🟢 Starter — stamp your first cookies</div>
  ${CH({
    id:'s8-toy', title:'Read the Sticker', level:'Starter', mode:'expr',
    prompt:'Make a <code>Toy</code> class whose <code>__init__(self, color)</code> stores <code>self.color</code>. The tester reads the attribute directly.',
    starter:'class Toy:\n    def __init__(self, color):\n        # store color as an attribute\n        pass\n',
    tests:[
      {expr:'Toy("red").color',  expected:'red'},
      {expr:'Toy("blue").color', expected:'blue'},
      {expr:'Toy("gold").color', expected:'gold'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-pet', title:'Talking Pet', level:'Starter', mode:'expr',
    prompt:'Make a <code>Pet</code> class with <code>__init__(self, name)</code> and a method <code>speak(self)</code> that <b>returns</b> <code>NAME says hello</code>.',
    starter:'class Pet:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        # return "<name> says hello"\n        pass\n',
    tests:[
      {expr:'Pet("Rex").speak()',  expected:'Rex says hello'},
      {expr:'Pet("Luna").speak()', expected:'Luna says hello'},
      {expr:'Pet("Max").speak()',  expected:'Max says hello'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-greeter', title:'Greeter', level:'Starter', mode:'expr',
    prompt:'Make a <code>Greeter</code> class with <code>__init__(self, name)</code> and <code>hello(self)</code> that <b>returns</b> <code>Hi, NAME!</code>.',
    starter:'class Greeter:\n    def __init__(self, name):\n        self.name = name\n    def hello(self):\n        # return "Hi, <name>!"\n        pass\n',
    tests:[
      {expr:'Greeter("Sam").hello()', expected:'Hi, Sam!'},
      {expr:'Greeter("Mia").hello()', expected:'Hi, Mia!'},
      {expr:'Greeter("Pat").hello()', expected:'Hi, Pat!'},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-rect', title:'Rectangle Area', level:'Starter', mode:'expr',
    prompt:'Make a <code>Rectangle</code> class with <code>__init__(self, w, h)</code> and <code>area(self)</code> that <b>returns</b> <code>w * h</code>.',
    starter:'class Rectangle:\n    def __init__(self, w, h):\n        self.w = w\n        self.h = h\n    def area(self):\n        # return w * h\n        pass\n',
    tests:[
      {expr:'Rectangle(3,4).area()', expected:12},
      {expr:'Rectangle(5,5).area()', expected:25},
      {expr:'Rectangle(10,2).area()',expected:20},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-square', title:'Square Area', level:'Starter', mode:'expr',
    prompt:'Make a <code>Square</code> class with <code>__init__(self, side)</code> and <code>area(self)</code> that <b>returns</b> <code>side * side</code>.',
    starter:'class Square:\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        # return side * side\n        pass\n',
    tests:[
      {expr:'Square(5).area()', expected:25},
      {expr:'Square(3).area()', expected:9},
      {expr:'Square(1).area()', expected:1},
    ], hiddenFrom:2,
  })}
  <div class="tier t-yellow">🟡 Medium — give your objects memory</div>
  <p class="mini">These change the object's data, so the tester does a few steps first (shown in the label),
  then checks the result.</p>
  ${CH({
    id:'s8-counter', title:'Counter', level:'Medium', mode:'expr',
    prompt:'Make a <code>Counter</code> class that starts at <code>self.count = 0</code>, with <code>add(self)</code> that increases it by 1 and <code>value(self)</code> that <b>returns</b> the count.',
    starter:'class Counter:\n    def __init__(self):\n        self.count = 0\n    def add(self):\n        # add 1 to self.count\n        pass\n    def value(self):\n        # return the count\n        pass\n',
    tests:[
      {label:'new -> value()',                 setup:'c=Counter()',                         expr:'c.value()', expected:0},
      {label:'add twice -> value()',           setup:'c=Counter()\nc.add()\nc.add()',       expr:'c.value()', expected:2},
      {label:'add 5 times -> value()',         setup:'c=Counter()\nfor _ in range(5):\n    c.add()', expr:'c.value()', expected:5},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-robot', title:'Robot Power', level:'Medium', mode:'expr',
    prompt:'Make a <code>Robot</code> with <code>__init__(self, name, power)</code> and a <code>charge(self)</code> method that adds 10 to <code>self.power</code>.',
    starter:'class Robot:\n    def __init__(self, name, power):\n        self.name = name\n        self.power = power\n    def charge(self):\n        # add 10 to self.power\n        pass\n',
    tests:[
      {label:'charge once -> power', setup:'r=Robot("A",50)\nr.charge()',           expr:'r.power', expected:60},
      {label:'charge twice -> power',setup:'r=Robot("A",0)\nr.charge()\nr.charge()',expr:'r.power', expected:20},
      {label:'start power',          setup:'r=Robot("A",5)',                         expr:'r.power', expected:5},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-account', title:'Bank Account', level:'Medium', mode:'expr',
    prompt:'Make an <code>Account</code> with <code>__init__(self, balance)</code>, a <code>deposit(self, amount)</code> that adds, and a <code>spend(self, amount)</code> that subtracts from <code>self.balance</code>.',
    starter:'class Account:\n    def __init__(self, balance):\n        self.balance = balance\n    def deposit(self, amount):\n        # add to balance\n        pass\n    def spend(self, amount):\n        # subtract from balance\n        pass\n',
    tests:[
      {label:'deposit 50',        setup:'a=Account(100)\na.deposit(50)', expr:'a.balance', expected:150},
      {label:'spend 30',          setup:'a=Account(100)\na.spend(30)',   expr:'a.balance', expected:70},
      {label:'deposit then spend',setup:'a=Account(0)\na.deposit(100)\na.spend(40)', expr:'a.balance', expected:60},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-dogage', title:'Dog Birthday', level:'Medium', mode:'expr',
    prompt:'Make a <code>Dog</code> with <code>__init__(self, name, age)</code> and a <code>birthday(self)</code> method that adds 1 to <code>self.age</code>.',
    starter:'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def birthday(self):\n        # add 1 to self.age\n        pass\n',
    tests:[
      {label:'one birthday',   setup:'d=Dog("Rex",2)\nd.birthday()',           expr:'d.age', expected:3},
      {label:'two birthdays',  setup:'d=Dog("Rex",0)\nd.birthday()\nd.birthday()',expr:'d.age', expected:2},
    ], hiddenFrom:1,
  })}
  ${CH({
    id:'s8-own', title:'Each Its Own', level:'Medium', mode:'expr',
    prompt:'Make a <code>Score</code> class starting at <code>self.points = 0</code> with <code>add(self)</code> (+1). Two Scores must keep <b>separate</b> data — changing one does not change the other.',
    starter:'class Score:\n    def __init__(self):\n        self.points = 0\n    def add(self):\n        # add 1 to self.points\n        pass\n',
    tests:[
      {label:'add to a only -> [a, b]', setup:'a=Score()\nb=Score()\na.add()\na.add()', expr:'[a.points, b.points]', expected:[2,0]},
      {label:'add to b only -> [a, b]', setup:'a=Score()\nb=Score()\nb.add()',          expr:'[a.points, b.points]', expected:[0,1]},
    ], hiddenFrom:1,
  })}
  <div class="tier t-red">🔴 Challenge — objects that do real things</div>
  ${CH({
    id:'s8-player', title:'Player with Score', level:'Challenge', mode:'expr',
    prompt:'Make a <code>Player</code> with <code>__init__(self, name)</code> starting <code>self.score = 0</code>, an <code>eat(self)</code> that adds 10, and <code>has_won(self)</code> that <b>returns</b> True when score is 50 or more.',
    starter:'class Player:\n    def __init__(self, name):\n        self.name = name\n        self.score = 0\n    def eat(self):\n        # add 10 to score\n        pass\n    def has_won(self):\n        # return True if score >= 50\n        pass\n',
    tests:[
      {label:'eat once -> score',       setup:'p=Player("A")\np.eat()',                          expr:'p.score',     expected:10},
      {label:'fresh -> has_won()',      setup:'p=Player("A")',                                   expr:'p.has_won()', expected:false},
      {label:'eat 5x -> has_won()',     setup:'p=Player("A")\nfor _ in range(5):\n    p.eat()',  expr:'p.has_won()', expected:true},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-minisnake', title:'Mini Snake', level:'Challenge', mode:'expr',
    prompt:'Make a <code>Snake</code> class starting with <code>self.body = [(0,0)]</code> and a <code>grow(self)</code> method that appends one new part to <code>self.body</code>.',
    starter:'class Snake:\n    def __init__(self):\n        self.body = [(0,0)]\n    def grow(self):\n        # append one new part to self.body\n        pass\n',
    tests:[
      {label:'fresh -> length',     setup:'s=Snake()',                       expr:'len(s.body)', expected:1},
      {label:'grow once -> length', setup:'s=Snake()\ns.grow()',             expr:'len(s.body)', expected:2},
      {label:'grow twice -> length',setup:'s=Snake()\ns.grow()\ns.grow()',   expr:'len(s.body)', expected:3},
    ], hiddenFrom:2,
  })}
  ${CH({
    id:'s8-turn', title:'Method Using a Method', level:'Challenge', mode:'expr',
    prompt:'Make a <code>Player</code> (score starts 0) with <code>eat(self)</code> (+10), <code>has_won(self)</code> (True at 50+), and a <code>turn(self)</code> that calls <code>self.eat()</code> and <b>returns</b> <code>self.has_won()</code> — an object pressing its own buttons.',
    starter:'class Player:\n    def __init__(self):\n        self.score = 0\n    def eat(self):\n        self.score += 10\n    def has_won(self):\n        return self.score >= 50\n    def turn(self):\n        # call self.eat(), then return self.has_won()\n        pass\n',
    tests:[
      {label:'first turn',           setup:'p=Player()',                                       expr:'p.turn()', expected:false},
      {label:'5th turn wins',        setup:'p=Player()\nfor _ in range(4):\n    p.turn()',     expr:'p.turn()', expected:true},
    ], hiddenFrom:1,
  })}
  <p class="mini">Turtle / multi-object (run &amp; look — not auto-graded):</p>
  <ul>
    <li><b>Food blueprint.</b> Make a <code>Food</code> class with <code>x</code>, <code>y</code> and a
      <code>draw()</code> method that stamps a turtle dot there.</li>
    <li><b>Two objects talking.</b> Make a <code>Player</code> and a <code>Food</code>; if the player's
      position equals the food's position, call the player's <code>eat()</code>.</li>
  </ul>

  ${Q('Exit quiz', [
    {q:'<code>class Dog:</code> … then <code>rex = Dog()</code>. What is rex?', a:[
      {t:'an object (an instance of the Dog class)', ok:true}, {t:'a class', ok:false}, {t:'a function', ok:false}]},
    {q:'Methods are like…', a:[
      {t:'functions that belong to an object', ok:true}, {t:'variables', ok:false}, {t:'loops', ok:false}]},
    {q:'Why is the snake a class?', a:[
      {t:'It bundles the snake\'s data (body) AND actions (move) together', ok:true},
      {t:'Classes run faster', ok:false}, {t:'Python requires classes for games', ok:false}]},
    {q:'A class is like a cookie-cutter; an object is…', a:[
      {t:'an actual cookie stamped from it', ok:true},
      {t:'another cookie-cutter', ok:false}, {t:'the recipe book', ok:false}]},
    {q:'<code>__init__</code> runs…', a:[
      {t:'automatically when you create a new object', ok:true},
      {t:'every time the program ends', ok:false}, {t:'only if you call it by name', ok:false}]},
    {q:'<code>self.color = color</code> creates a…', a:[
      {t:'attribute — data the object remembers', ok:true},
      {t:'method', ok:false}, {t:'new class', ok:false}]},
    {q:'A <b>method</b> is…', a:[
      {t:'a function that belongs to the object', ok:true},
      {t:'a kind of list', ok:false}, {t:'a loop counter', ok:false}]},
    {q:'<code>self</code> in a method refers to…', a:[
      {t:'the specific object the method was called on', ok:true},
      {t:'the class blueprint', ok:false}, {t:'the whole program', ok:false}]},
    {q:'From <code>class Pet:</code> you make <code>p1 = Pet("Rex")</code> and <code>p2 = Pet("Luna")</code>. They…', a:[
      {t:'are two separate objects, each with its own data', ok:true},
      {t:'are the same object', ok:false}, {t:'share one name', ok:false}]},
    {q:'You call a method with <code>p1.speak()</code>. The dot means…', a:[
      {t:'"ask this object to run its speak action"', ok:true},
      {t:'multiply p1 by speak', ok:false}, {t:'create a new method', ok:false}]},
  ])}

  <h3>🏠 Homework — "Design Your Own Blueprint"</h3>
  <p>Invent a class for anything you like — a <code>Robot</code>, a <code>Wizard</code>, a
  <code>Car</code>. Give it at least 2 attributes and 2 methods. Make 3 different objects from it.</p>
  ${HW('# 🏠 HOMEWORK: Design your own class with 2 attributes and 2 methods.\nclass Robot:\n    def __init__(self, name, power):\n        self.name = name        # attribute 1\n        self.power = power      # attribute 2\n\n    def greet(self):           # method 1\n        print("Beep boop, I am", self.name)\n\n    def charge(self):          # method 2\n        self.power = self.power + 10\n        print(self.name, "power is now", self.power)\n\n# make 3 different objects:\nr1 = Robot("Bolt", 50)\n\n\n# Expected output (example):\n#   Beep boop, I am Bolt\n#   Bolt power is now 60')}
`);

/* ===================================================================== */
/* SESSION 9 — BUILD DAY 1                                                */
/* ===================================================================== */
page('s9','9 · Build Day 1 🐍','Snake comes alive', ()=>`
  <h2>🐍 Session 9 — BUILD DAY 1: Snake Comes Alive</h2>
  <p class="lead">Assemble the bricks: a snake that moves with arrow keys and eats food to grow</p>

  <div class="box why"><div class="h">🎯 Today's goal</div>
    No new concepts — today you <b>assemble</b> everything you've built. By the end: a snake that
    <b>moves</b> and <b>eats food to grow</b>.</div>

  <div class="box brick"><div class="h">🧱 Skills you'll reuse</div>
    variables (direction, score) · list (the body) · loop (the game loop) · conditionals (ate food?) ·
    functions/methods (move, grow) · class (Snake, Food). Find each one in the code below!</div>

  <h3>📖 First, read the story (what the code does)</h3>
  <p>Before you run it, here's the whole game in plain English — every step matches a line of code:</p>
  <div class="box why"><div class="h">🎬 The snake's life, step by step</div>
    <ol>
      <li><b>Set the stage:</b> open a black window and make a <code>Snake</code> (a list with one part).</li>
      <li><b>Drop some food</b> at a spot on the screen (a red dot).</li>
      <li><b>Repeat over and over (the game loop):</b>
        <ul>
          <li><b>Move:</b> add a new head in front, drop the tail — that's how it slithers.</li>
          <li><b>Did I eat?</b> If the head landed on the food → <code>grow()</code> (keep the tail this time)
            and put new food somewhere random.</li>
          <li><b>Redraw</b> every body part, then the food.</li>
          <li><b>Pause</b> a moment so your eyes can follow.</li>
        </ul></li>
    </ol>
  </div>

  <h3>🎮 The full Build Day 1 game</h3>
  <p>Now run it and <b>watch the printed story on the right</b> as the snake moves. The two
  <b>KNOBS</b> at the top are yours to play with — make <code>SPEED</code> bigger to slow it down,
  or <code>STEPS</code> bigger for a longer game. (In real Python you'd steer with the arrow keys;
  this browser version moves on its own so you can study it.)</p>
  ${R('import turtle\nimport random\nimport time\n\n# ====== KNOBS — change these and run again! ======\nSPEED = 0.4    # seconds each step is shown. BIGGER = SLOWER.\nSTEPS = 30     # how many moves the snake makes.\n# =================================================\n\nscreen = turtle.Screen()\nscreen.setup(420, 420)\nscreen.bgcolor("black")\nscreen.tracer(0)               # we draw each frame ourselves\n\nclass Snake:\n    def __init__(self):\n        self.body = [(0,0)]        # LIST (S4) — every body part\n        self.dx, self.dy = 20, 0   # VARIABLES (S2) — moving right\n    def move(self):                # METHOD (S6/S8)\n        hx, hy = self.body[-1]                 # head = last part\n        new_head = (hx + self.dx, hy + self.dy)\n        self.body.append(new_head)             # add a new head\n        self.body.pop(0)                       # drop the tail -> slither\n    def grow(self):\n        self.body.append(self.body[-1])        # eat -> one part longer\n\ndef draw(snake, food, pen):\n    pen.clear()\n    pen.shape("square")            # body parts look like blocks\n    for part in snake.body:        # LOOP (S3) over every part\n        pen.goto(part); pen.color("lime"); pen.stamp()\n    pen.shape("circle")            # food looks like a dot\n    pen.goto(food); pen.color("red"); pen.stamp()\n    screen.update()\n\nsnake = Snake()\nfood = (60, 0)\npen = turtle.Turtle(); pen.penup(); pen.hideturtle()\n\nfor step in range(STEPS):          # the GAME LOOP\n    snake.move()\n    head = snake.body[-1]\n    print("Step", step + 1, "- head moved to", head)\n    if head == food:               # CONDITIONAL (S5): did we eat?\n        snake.grow()\n        print("   YUM! ate the food - snake is now", len(snake.body), "long")\n        food = (random.randint(-5,5)*20, random.randint(-5,5)*20)\n    draw(snake, food, pen)\n    time.sleep(SPEED)              # <-- SLOW DOWN so you can watch\n\nturtle.done()', {origin:'center'})}

  <div class="box tip"><div class="h">🎛️ Try these one at a time (interaction!)</div>
    <ul>
      <li>Set <code>SPEED = 1.0</code> — watch each step in slow motion.</li>
      <li>Change <code>self.dx, self.dy = 20, 0</code> to <code>0, 20</code> — now it heads <b>up</b>
        instead of right. Try <code>-20, 0</code> (left) and <code>0, -20</code> (down).</li>
      <li>Change <code>"lime"</code> to your favorite snake color.</li>
      <li>Move the first food: change <code>food = (60, 0)</code> to <code>(0, 60)</code>.</li>
    </ul>
  </div>

  <h3>🧠 Find the bricks (discussion)</h3>
  <ul class="clean">
    <li>📦 Where are the <b>variables</b>? (<code>dx, dy, food, step</code>)</li>
    <li>🎒 Where is the <b>list</b>? (<code>self.body</code>)</li>
    <li>🔁 Where is the <b>loop</b>? (<code>for step in range(20)</code> and the draw loop)</li>
    <li>🚦 Where is the <b>conditional</b>? (<code>if snake.body[-1] == food</code>)</li>
    <li>🪄 Where are the <b>methods/functions</b>? (<code>move, grow, draw</code>)</li>
    <li>🧁 Where is the <b>class</b>? (<code>class Snake</code>)</li>
  </ul>

  ${Q('Build Day quiz', [
    {q:'When the snake moves, why do we <code>append</code> a new head AND <code>pop(0)</code> the tail?', a:[
      {t:'So it slithers — grows at the front, shrinks at the back, staying the same length', ok:true},
      {t:'To make it disappear', ok:false}, {t:'To change its color', ok:false}]},
    {q:'How does the snake get LONGER when it eats?', a:[
      {t:'grow() appends an extra body part so pop doesn\'t shrink it', ok:true},
      {t:'It changes the background', ok:false}, {t:'It speeds up', ok:false}]},
    {q:'<code>self.body[-1]</code> refers to…', a:[
      {t:'the last item — the head', ok:true}, {t:'the first item', ok:false}, {t:'an error', ok:false}]},
  ])}

  <h3>🏠 Homework — "Make it yours"</h3>
  <p>Change the snake's <b>color</b>, the food's <b>position</b>, or the number of steps. Bring <b>one
  idea</b> for a new feature to Build Day 2 (score? game over? speed up?).</p>
  ${HW('# 🏠 HOMEWORK: Tweak this mini-snake! Change the 4 marked spots.\nimport turtle\nimport random\nimport time\n\nSPEED = 0.4    # (1) seconds per step. Make it BIGGER to slow down.\nscreen = turtle.Screen(); screen.tracer(0)\n\nbody = [(0,0)]\ndx, dy = 20, 0\nfood = (60, 0)\npen = turtle.Turtle(); pen.penup(); pen.hideturtle()\n\nfor step in range(20):              # (2) try more steps\n    hx, hy = body[-1]\n    body.append((hx+dx, hy+dy)); body.pop(0)\n    print("Step", step + 1, "-> head at", body[-1])\n    if body[-1] == food:\n        body.append(body[-1])\n        print("   YUM! grew to", len(body))\n        food = (random.randint(-4,4)*20, random.randint(-4,4)*20)\n    pen.clear()\n    pen.shape("square")\n    for part in body:\n        pen.goto(part); pen.color("lime"); pen.stamp()   # (3) change snake color\n    pen.shape("circle")\n    pen.goto(food); pen.color("red"); pen.stamp()        # (4) change food color\n    screen.update()\n    time.sleep(SPEED)               # slow motion so you can watch\n\nturtle.done()\n\n# Expected result: a green snake that slides right, slowly, and grows when it hits the food.', {origin:'center'})}

  <div class="box tip"><div class="h">💡 Tip</div>
    Save often. Test after every small change — "code a little, run a little." If it breaks, you only
    changed one thing, so it's easy to find.</div>
`);

/* ===================================================================== */
/* SESSION 10 — BUILD DAY 2                                               */
/* ===================================================================== */
page('s10','10 · Build Day 2 🏆','Polish, play & showcase', ()=>`
  <h2>🏆 Session 10 — BUILD DAY 2: Polish, Play & Showcase</h2>
  <p class="lead">Turn the working snake into a real game — then celebrate!</p>

  <div class="box why"><div class="h">🎯 Today's goal</div>
    Add the features that make it a <b>real game</b>: a score, a game-over, and speeding up.
    Then everyone demos what they built.</div>

  <h3>🎮 The polished game (score + game over)</h3>
  ${R('import turtle\nimport random\n\nscreen = turtle.Screen()\nscreen.setup(420, 420)\nscreen.bgcolor("black")\nscreen.tracer(0)\n\nscore = 0\n\nclass Snake:\n    def __init__(self):\n        self.body = [(0,0)]\n        self.dx, self.dy = 20, 0\n    def move(self):\n        hx, hy = self.body[-1]\n        self.body.append((hx+self.dx, hy+self.dy))\n        self.body.pop(0)\n    def grow(self):\n        self.body.append(self.body[-1])\n\ndef hit_wall(head):\n    x, y = head\n    return x < -200 or x > 200 or y < -200 or y > 200\n\nsnake = Snake()\nfood = (60, 0)\npen = turtle.Turtle(); pen.penup(); pen.hideturtle()\nui  = turtle.Turtle(); ui.penup(); ui.hideturtle(); ui.color("white")\n\nfor step in range(25):\n    snake.move()\n    head = snake.body[-1]\n    if hit_wall(head):                 # GAME OVER check\n        ui.goto(0,0); ui.write("GAME OVER", align="center",\n                               font=("Arial",24,"bold"))\n        break\n    if head == food:                   # ate food\n        snake.grow()\n        score = score + 1\n        food = (random.randint(-4,4)*20, random.randint(-4,4)*20)\n    pen.clear()\n    for part in snake.body:\n        pen.goto(part); pen.color("lime"); pen.stamp()\n    pen.goto(food); pen.color("red"); pen.stamp()\n    ui.clear(); ui.goto(-190,180)\n    ui.write("Score: " + str(score), font=("Arial",16,"normal"))\n    screen.update()\n\nturtle.done()', {origin:'center'})}

  <h3>✨ Features to add (pick your level)</h3>
  <table>
    <tr><th>Feature</th><th>Skill it uses</th></tr>
    <tr><td>Score display going up</td><td>variables + text</td></tr>
    <tr><td>Game over on wall / self hit</td><td>conditionals + list check</td></tr>
    <tr><td>Speed up as score climbs</td><td>variable inside the loop</td></tr>
    <tr><td>Restart key</td><td>functions + conditionals</td></tr>
    <tr><td>Stretch: high-score memory, levels</td><td>everything!</td></tr>
  </table>

  ${Q('Final quiz — you know it all now!', [
    {q:'Which skill makes the score go up by 1 each time?', a:[
      {t:'a variable: score = score + 1', ok:true}, {t:'a new class', ok:false}, {t:'importing turtle', ok:false}]},
    {q:'Detecting "did the snake hit the wall?" uses…', a:[
      {t:'a conditional (if)', ok:true}, {t:'a list only', ok:false}, {t:'a comment', ok:false}]},
    {q:'The snake\'s whole body is stored as a…', a:[
      {t:'list', ok:true}, {t:'single number', ok:false}, {t:'string', ok:false}]},
    {q:'What keeps the game running frame after frame?', a:[
      {t:'a loop', ok:true}, {t:'a variable', ok:false}, {t:'a quiz', ok:false}]},
  ])}

  <div class="box brick"><div class="h">🎉 You did it!</div>
    You used <b>every</b> skill from the camp — variables, lists, loops, conditionals, functions,
    abstraction, and classes — to build a real, playable game. You're officially a
    <b>Python Game Developer</b>. 🏅</div>

  <h3>🚀 Keep going (homework forever)</h3>
  <ul>
    <li>Add a second food type worth more points.</li>
    <li>Make walls wrap around instead of ending the game.</li>
    <li>Add a two-player mode, or a high-score file.</li>
    <li>Invent a brand-new game using the same bricks!</li>
  </ul>

  <div class="box tip"><div class="h">💡 Final tip</div>
    "Done and playable beats perfect and unfinished." Ship your game, <i>then</i> dream up version 2.</div>
`);
