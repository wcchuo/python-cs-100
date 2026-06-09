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

  <h3>🎨 The "whoa" moment — turn a loop into a circle</h3>
  <p>Change <code>range(4)</code> to bigger numbers with smaller turns:</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\nfor i in range(36):   # 36 tiny steps\n    t.forward(20)\n    t.right(10)        # 36 x 10 = 360 = full circle!\n\nturtle.done()')}

  <h3>🌀 The while loop — runs while something is true</h3>
  ${R('count = 5\nwhile count > 0:\n    print("Launch in", count)\n    count = count - 1\nprint("Blast off! 🚀")')}
  <div class="box brick"><div class="h">🐍 Snake callback</div>
    Your Snake game is one big <b>while loop</b>: "while the game is not over → move the snake, check
    for food, redraw." You just built the engine!</div>

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter</div>
  <ul><li>Draw a hexagon (6 sides). Hint: <code>range(6)</code> and turn 60.</li></ul>
  <div class="tier t-yellow">🟡 Medium</div>
  <ul><li>Use a loop to print the 7× table (7, 14, 21 … 70).</li></ul>
  <div class="tier t-red">🔴 Challenge — Spirograph</div>
  <ul><li>Draw a colorful repeating pattern using a loop. Try changing colors each turn.</li></ul>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\ncolors = ["red","orange","yellow","green","blue","purple"]\n\nfor i in range(36):\n    t.color(colors[i % 6])\n    t.forward(100)\n    t.right(80)   # try other angles!\n\nturtle.done()')}

  ${Q('Exit quiz', [
    {q:'<code>range(5)</code> produces which numbers?', a:[
      {t:'1,2,3,4,5', ok:false, fb:'It starts at 0!'}, {t:'0,1,2,3,4', ok:true}, {t:'0,1,2,3,4,5', ok:false}]},
    {q:'A while loop that never becomes false will…', a:[
      {t:'Run forever (infinite loop)', ok:true, fb:'Make sure something changes inside it!'},
      {t:'Run once', ok:false}, {t:'Skip itself', ok:false}]},
    {q:'To draw a 360° circle in 36 steps, each turn is…', a:[
      {t:'10 degrees', ok:true, fb:'360 ÷ 36 = 10.'}, {t:'36 degrees', ok:false}, {t:'90 degrees', ok:false}]},
  ])}

  <h3>🏠 Homework — "Spirograph Art"</h3>
  <p>Make your own colorful loop pattern (a flower or starburst). Experiment with the numbers:
  the angle, the forward distance, and the colors. Bring your favorite to show!</p>
  ${HW('# 🏠 HOMEWORK: Make a colorful pattern with ONE loop.\n# Change the angle, the distance, and the colors to make it your own.\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\ncolors = ["red", "orange", "gold", "green", "blue", "purple"]\n\nfor i in range(36):\n    t.color(colors[i % 6])\n    t.forward(120)\n    t.right(85)      # <- try 90, 120, 144, 170...\n\nturtle.done()\n\n# Expected result: a repeating starburst/flower of rainbow lines.', {origin:'center'})}

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

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter</div>
  <ul><li>Make a list of 3 friends' names and print each on its own line with a loop.</li></ul>
  <div class="tier t-yellow">🟡 Medium</div>
  <ul><li>Make a list of numbers and print their total using a loop and a <code>total</code> variable.</li></ul>
  <div class="tier t-red">🔴 Challenge — Connect the Dots</div>
  <ul><li>Store 5 coordinate pairs in a list, loop through them drawing lines, reveal a hidden shape.</li></ul>
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
  ])}

  <h3>🏠 Homework — "Connect the Dots Picture"</h3>
  <p>Design your own hidden shape with at least 6 points in a list, then loop through to draw it.
  Can a friend guess the picture before you run it?</p>
  ${HW('# 🏠 HOMEWORK: Store at least 6 points in a LIST, then connect them.\n# Change the numbers to draw your own hidden shape!\nimport turtle\nt = turtle.Turtle()\nt.speed(2)\n\npoints = [(0,0), (100,0), (150,80), (100,160), (0,160), (-50,80), (0,0)]\n\nt.penup(); t.goto(points[0]); t.pendown()\nfor p in points:        # loop over every point in the list\n    t.goto(p)\n\nturtle.done()\n\n# Expected result: a closed outline connecting all your points (here: a house-like hexagon).', {origin:'center'})}

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

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter — Traffic Light</div>
  <ul><li>Set <code>light = 2</code>. Use if/elif/else to print "Stop" (1), "Slow" (2), or "Go" (3).</li></ul>
  <div class="tier t-yellow">🟡 Medium</div>
  <ul><li>Draw a red circle if a number is even, a blue one if it's odd. Hint: <code>n % 2 == 0</code>.</li></ul>
  <div class="tier t-red">🔴 Challenge — Traffic Light drawing</div>
  ${R('import turtle\nt = turtle.Turtle()\nt.penup(); t.speed(0)\n\nlight = 3   # try 1, 2, or 3\n\nif light == 1:\n    t.color("red")\nelif light == 2:\n    t.color("yellow")\nelse:\n    t.color("green")\n\nt.dot(120)\nturtle.done()', {origin:'center'})}

  ${Q('Exit quiz', [
    {q:'<code>n % 2 == 0</code> is True when n is…', a:[
      {t:'even', ok:true, fb:'% gives the remainder; 0 means even.'}, {t:'odd', ok:false}, {t:'negative', ok:false}]},
    {q:'<code>if a or b:</code> runs when…', a:[
      {t:'at least one of a, b is true', ok:true}, {t:'both are true', ok:false}, {t:'neither is true', ok:false}]},
    {q:'<code>x = 5</code> inside an if condition (instead of <code>x == 5</code>) is…', a:[
      {t:'a common bug — that stores, not compares', ok:true}, {t:'totally fine', ok:false}, {t:'faster', ok:false}]},
  ])}

  <h3>🏠 Homework — "Number Sorter"</h3>
  <p>Write a program with a variable <code>n</code>. Print "big" if n &gt; 100, "medium" if between
  10 and 100, and "small" otherwise. Test it with three different values.</p>
  ${HW('# 🏠 HOMEWORK: Print "big", "medium", or "small" depending on n.\nn = 250        # <- try 250, then 50, then 5\n\n# write your if / elif / else here:\n\n\n# Expected output:\n#   n = 250  -> big\n#   n = 50   -> medium\n#   n = 5    -> small')}

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

  <h3>🏆 Challenges</h3>
  <div class="tier t-green">🟢 Starter</div>
  <ul><li>Write <code>def cheer(name):</code> that prints "Go [name], go!" and call it for 3 names.</li></ul>
  <div class="tier t-yellow">🟡 Medium — Shape Stamp Maker</div>
  <ul><li>Write <code>draw_polygon(sides, size)</code> and draw a triangle, square, and pentagon with the SAME function.</li></ul>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_polygon(sides, size):\n    angle = 360 / sides\n    for i in range(sides):\n        t.forward(size)\n        t.right(angle)\n\ndraw_polygon(3, 80)   # triangle\nt.penup(); t.forward(100); t.pendown()\ndraw_polygon(5, 60)   # pentagon\n\nturtle.done()')}
  <div class="tier t-red">🔴 Challenge</div>
  <ul><li>Write a function <code>area(width, height)</code> that returns width × height, and print the area of 3 rooms.</li></ul>

  ${Q('Exit quiz', [
    {q:'<code>return</code> does what?', a:[
      {t:'Sends an answer back to whoever called the function', ok:true},
      {t:'Prints to the screen', ok:false}, {t:'Ends the whole program', ok:false}]},
    {q:'You copy-pasted the same 5 lines three times. The fix is…', a:[
      {t:'Make it a function and call it 3 times', ok:true}, {t:'Leave it, copy-paste is fine', ok:false}, {t:'Delete two copies', ok:false}]},
    {q:'<code>draw_polygon(6, 50)</code> draws a…', a:[
      {t:'hexagon of size 50', ok:true}, {t:'circle', ok:false}, {t:'square', ok:false}]},
  ])}

  <h3>🏠 Homework — "Shape Stamp Maker"</h3>
  <p>Polish your <code>draw_polygon</code> function and use it to draw a whole row of different shapes
  in a loop, each a different color. Add a parameter for color too!</p>
  ${HW('# 🏠 HOMEWORK: Finish draw_polygon so it takes a COLOR too,\n# then draw a row of shapes with one loop.\nimport turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_polygon(sides, size, color):\n    t.color(color)\n    angle = 360 / sides\n    for i in range(sides):\n        t.forward(size)\n        t.right(angle)\n\n# call your function a few times (move between shapes with penup/forward):\ndraw_polygon(3, 60, "red")\n\n\nturtle.done()\n\n# Expected result: a row of different colored shapes (triangle, square, pentagon...).')}

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

  <h3>🏆 Challenge — Scene Builder</h3>
  <p>Build a picture where the main program is only 3–4 clean function calls. The messy turtle
  commands hide inside the functions above.</p>
  ${R('import turtle\nt = turtle.Turtle()\nt.speed(0)\n\ndef draw_ground():\n    t.penup(); t.goto(-200,-50); t.pendown()\n    t.color("green"); t.pensize(8); t.forward(400)\n\ndef draw_tree():\n    t.penup(); t.goto(-100,-50); t.pendown()\n    t.color("brown"); t.pensize(10)\n    t.left(90); t.forward(80)\n    t.color("darkgreen"); t.dot(70)\n\n# main:\ndraw_ground()\ndraw_tree()\n# add draw_sun() yourself!\n\nturtle.done()', {origin:'center'})}

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

  <h3>🏆 Challenge — Build a Blueprint</h3>
  <p>Make a <code>Balloon</code> class with a color and size, and a <code>pop()</code> method that prints
  a message. Create three different balloons.</p>
  ${R('class Balloon:\n    def __init__(self, color, size):\n        self.color = color\n        self.size = size\n\n    def pop(self):\n        print("The", self.color, "balloon goes POP! 🎈")\n\nb1 = Balloon("red", 10)\nb2 = Balloon("blue", 20)\nb3 = Balloon("green", 15)\nb1.pop()\nb2.pop()\nb3.pop()')}

  ${Q('Exit quiz', [
    {q:'<code>class Dog:</code> … then <code>rex = Dog()</code>. What is rex?', a:[
      {t:'an object (an instance of the Dog class)', ok:true}, {t:'a class', ok:false}, {t:'a function', ok:false}]},
    {q:'Methods are like…', a:[
      {t:'functions that belong to an object', ok:true}, {t:'variables', ok:false}, {t:'loops', ok:false}]},
    {q:'Why is the snake a class?', a:[
      {t:'It bundles the snake\'s data (body) AND actions (move) together', ok:true},
      {t:'Classes run faster', ok:false}, {t:'Python requires classes for games', ok:false}]},
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

  <h3>🎮 The full Build Day 1 game</h3>
  <p>This runs right here! (In real Python it uses arrow keys; this browser version moves on its own so
  you can watch the snake grow. Read every line — you understand all of it now.)</p>
  ${R('import turtle\nimport random\n\nscreen = turtle.Screen()\nscreen.setup(420, 420)\nscreen.bgcolor("black")\n\nclass Snake:\n    def __init__(self):\n        self.body = [(0,0)]        # LIST (S4)\n        self.dx, self.dy = 20, 0   # VARIABLES (S2)\n    def move(self):                # METHOD (S6/S8)\n        hx, hy = self.body[-1]\n        new_head = (hx + self.dx, hy + self.dy)\n        self.body.append(new_head) # grow head\n        self.body.pop(0)           # drop tail (slither)\n    def grow(self):\n        self.body.append(self.body[-1])  # eat -> longer!\n\ndef draw(snake, food, pen):\n    pen.clear()\n    for part in snake.body:        # LOOP (S3)\n        pen.goto(part); pen.color("lime"); pen.stamp()\n    pen.goto(food); pen.color("red"); pen.stamp()\n    screen.update()\n\nsnake = Snake()\nfood = (60, 0)\npen = turtle.Turtle(); pen.penup(); pen.hideturtle()\nscreen.tracer(0)\n\nfor step in range(20):             # game loop (20 frames here)\n    snake.move()\n    if snake.body[-1] == food:     # CONDITIONAL (S5): ate it?\n        snake.grow()\n        food = (random.randint(-5,5)*20, random.randint(-5,5)*20)\n    draw(snake, food, pen)\n\nturtle.done()', {origin:'center'})}

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
  ${HW('# 🏠 HOMEWORK: Tweak this mini-snake! Change the 3 marked spots.\nimport turtle\nimport random\nscreen = turtle.Screen(); screen.tracer(0)\n\nbody = [(0,0)]\ndx, dy = 20, 0\nfood = (60, 0)\npen = turtle.Turtle(); pen.penup(); pen.hideturtle()\n\nfor step in range(20):              # (1) try more steps\n    hx, hy = body[-1]\n    body.append((hx+dx, hy+dy)); body.pop(0)\n    if body[-1] == food:\n        body.append(body[-1])\n        food = (random.randint(-4,4)*20, random.randint(-4,4)*20)\n    pen.clear()\n    for part in body:\n        pen.goto(part); pen.color("lime"); pen.stamp()   # (2) change snake color\n    pen.goto(food); pen.color("red"); pen.stamp()        # (3) change food color\n    screen.update()\n\nturtle.done()\n\n# Expected result: a colored snake that slides right and grows when it hits the food.', {origin:'center'})}

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
