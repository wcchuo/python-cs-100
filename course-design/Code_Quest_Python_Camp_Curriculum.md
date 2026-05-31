# 🐍 Code Quest: Build Your Own Game in Python
### A 10-Session Creative Coding Camp for Kids (ages ~10–14)

**Format:** 10 sessions × 1.5 hours
**Tools:** Python 3 + the built-in `turtle` module (zero install beyond Python — instant visual feedback)
**The promise to every kid:** *"In 10 sessions, you will build a real, playable Snake game — and you'll understand every line of it because you wrote it."*

---

## 🎮 Why Snake is the final project (and not Gobang)

| | Snake 🐍 | Gobang / Gomoku ⚫⚪ |
|---|---|---|
| Teaches "why lists matter" | **Perfectly** — the snake's body *is* a list that grows | Yes (2D grid) but less obvious |
| Uses every topic in this course | ✅ all of them | ✅ most |
| Needs hard "AI" math | ❌ No | ⚠️ Yes (minimax) — tough for kids |
| Instant fun / recognizable | ✅ Huge | ✅ Good |
| Builds from weekly homework | ✅ Each week adds a piece | Harder to stage |

**Verdict:** Snake. Every concept maps to a visible part of the game, and there's no scary AI math wall at the end. (A simpler **Tic-Tac-Toe with a "smart" opponent** is offered as an alternate capstone for advanced groups in the Appendix.)

---

## 🗺️ The Big Idea: every homework is a LEGO brick

Kids don't do random exercises — each homework secretly builds one part of Snake. By Session 9 they're not starting from scratch; they're *assembling pieces they already made.*

| Session | Topic | The brick they build | Snake part it becomes |
|--------|-------|----------------------|----------------------|
| 1 | First Drawing | Move a turtle, draw shapes | The game screen + the snake's "head" |
| 2 | Variables | Remember a score & position | Score counter, snake position |
| 3 | Loops | Repeat actions | The game loop + drawing the grid |
| 4 | **Lists** | A growing collection | **The snake's body!** |
| 5 | Conditionals | Make decisions | "Did I hit the wall? Did I eat food?" |
| 6 | Functions | Name a reusable trick | `move()`, `grow()`, `draw_food()` |
| 7 | Abstraction & Modularity | Organize & hide messy bits | Clean, split-up game code |
| 8 | Classes | Design your own object | The `Snake` and `Food` blueprints |
| 9 | Build Day 1 | Assemble! | A working snake that moves & eats |
| 10 | Build Day 2 | Polish & play | Score, speed-up, game-over, showcase |

---

# 📚 The Sessions

Each session uses the same rhythm so kids always know what's coming:
**🎯 Why it matters → 🧠 Learn → 🎨 Do (in class) → 🏠 Homework → ❓ Quiz → 💡 Tips**

---

## Session 1 — Hello, Turtle! (Your First Drawing)

**🎯 Why it matters:** Programming is just *giving clear instructions to a very fast, very literal robot.* Today the robot is a turtle that draws.

**🧠 Learn:** What a program is, how to run one, `forward()`, `right()`, `left()`, and that **order matters** (the turtle does steps in sequence).

**🎨 In class:** Make the turtle draw a square together. Then a triangle. Then "draw your initial" (e.g. the letter L or T).

**🏠 Homework — "Draw Your Name":** Use turtle commands to draw the first letter of your name. Bonus: make it a color you like.
```python
import turtle
t = turtle.Turtle()
t.forward(100)
t.right(90)
t.forward(50)
turtle.done()
```

**❓ Quiz:**
1. What does `t.right(90)` do?
   - A) Moves the turtle 90 steps right
   - **B) Turns the turtle 90 degrees to the right ✅**
   - C) Draws a 90-pixel line
2. If you swap two lines of code, will the drawing always look the same?
   - A) Yes
   - **B) No — order matters ✅**

**💡 Tips:** "The computer does *exactly* what you say — not what you *meant*." Celebrate the first mistake out loud; bugs are normal and even fun.

---

## Session 2 — Variables (Boxes That Remember)

**🎯 Why it matters:** A program forgets nothing *if you store it.* Variables are labeled boxes that remember numbers and words for later — like the score in a game.

**🧠 Learn:** Creating variables, numbers vs. text (strings), updating a variable (`score = score + 1`), using a variable to control the turtle (`size = 100; t.forward(size)`).

**🎨 In class:** Draw a square where the side length is a variable. Change one number → the whole square resizes. Magic!

**🏠 Homework — "The Growing Spiral":** Start with `size = 10`, draw a line, then `size = size + 10`, turn, repeat a few times by copying lines. (This previews loops *and* the snake growing.)

**❓ Quiz:**
1. After `score = 5` then `score = score + 3`, what is `score`?
   - A) 5  B) 3  **C) 8 ✅**
2. Which is text (a string)?
   - **A) `"hello"` ✅**  B) `42`  C) `size`

**💡 Tips:** Name boxes for what they hold — `score`, not `x`. Good names are a gift to future-you.

---

## Session 3 — Loops (Do It Again, Without Retyping)

**🎯 Why it matters:** Real programmers are wonderfully lazy. Why type "draw a line, turn" four times when you can say "do this 4 times"? Loops are how games run forever.

**🧠 Learn:** `for` loops (`for i in range(4):`), indentation = "what's inside the loop," `while` loops (the heart of every game).

**🎨 In class:** Re-draw the square in 2 lines using a loop. Then a hexagon. Then change `range(4)` to `range(36)` with small turns → a circle appears. Big "whoa" moment.

**🏠 Homework — "Spirograph":** Use a loop to draw a colorful repeating pattern (a flower or star burst). Encourage experimenting with the numbers.

**❓ Quiz:**
1. `for i in range(3):` runs the inside block how many times?
   - A) 2  **B) 3 ✅**  C) 4
2. Which loop is best for "keep playing until the game ends"?
   - A) `for`  **B) `while` ✅**

**💡 Tips:** Indentation isn't decoration — Python *uses* it to know what's inside the loop. Line it up neatly.

---

## Session 4 — Lists (Why One Box Beats a Hundred) ⭐

**🎯 Why it matters:** Imagine 100 separate boxes for 100 high scores — nightmare. A **list** is ONE backpack holding many things, in order. This is the most important session: **the snake's body will be a list that grows every time it eats.**

**🧠 Learn:** Making a list `[]`, adding with `.append()`, reading by position (`body[0]`), length with `len()`, looping over a list (`for part in body:`).

**🎨 In class:** Keep a list of points; loop through it and stamp a turtle dot at each → draw a "trail." Then `.append()` a new point and redraw → the trail grew! (This *is* Snake movement in disguise.)

**🏠 Homework — "Connect the Dots":** Store 5 coordinate pairs in a list, loop through them, draw a line connecting each → reveal a hidden shape.

**❓ Quiz:**
1. What does `body.append("x")` do?
   - **A) Adds "x" to the end of the list ✅**  B) Removes the last item  C) Counts items
2. For `colors = ["red","blue","green"]`, what is `colors[0]`?
   - **A) "red" ✅**  B) "blue"  C) 3

**💡 Tips:** Lists count from **0**, not 1. Say it as a chant: "First item is number zero." Connect it loudly to the snake: "Eat food → `.append()` → snake gets longer."

---

## Session 5 — Conditionals (Teaching the Computer to Decide)

**🎯 Why it matters:** Games need to *judge* things: Did you eat the food? Did you crash into the wall? `if` statements are forks in the road.

**🧠 Learn:** `if` / `elif` / `else`, comparisons (`==`, `<`, `>`), combining with `and` / `or`.

**🎨 In class:** "Hot or Cold" turtle: if the turtle's x-position passes the edge, change its color to red (warning!); otherwise green. Live collision-detection preview.

**🏠 Homework — "Traffic Light":** Ask for a number 1–3 and draw a red, yellow, or green circle depending on the value using `if/elif/else`.

**❓ Quiz:**
1. Which checks "are these equal"?
   - A) `=`  **B) `==` ✅**  C) `=>`
2. `if score > 10 and lives > 0:` runs when…
   - **A) BOTH are true ✅**  B) Either one is true  C) Both are false

**💡 Tips:** One `=` *stores*, two `==` *compares*. The #1 beginner bug. Make it a callback joke all camp.

---

## Session 6 — Functions (Name a Trick, Cast It Anytime)

**🎯 Why it matters:** A function is a *magic spell you name once and reuse forever.* Instead of repeating "draw food" code everywhere, write `draw_food()` once and call it whenever.

**🧠 Learn:** Defining `def`, calling, parameters (`def draw_square(size):`), `return` values.

**🎨 In class:** Turn the square code into `draw_square(size, color)`. Now draw a whole row of different squares in one loop calling the function. Power!

**🏠 Homework — "Shape Stamp Maker":** Write a function `draw_polygon(sides, size)` and use it to draw a triangle, square, and pentagon with the *same* function.

**❓ Quiz:**
1. What keyword defines a function?
   - **A) `def` ✅**  B) `func`  C) `function`
2. Why use functions?
   - A) To make code longer  **B) To reuse code and avoid repeating yourself ✅**  C) They're required

**💡 Tips:** If you've copy-pasted code twice, that's a sign: turn it into a function. "Don't Repeat Yourself" (DRY).

---

## Session 7 — Abstraction & Modularity (Hide the Mess, Organize the Toys)

**🎯 Why it matters:** You drive a car without knowing how the engine works — that's **abstraction** (hiding messy details behind a simple button). And you keep LEGO sorted in bins so you can find pieces — that's **modularity** (organizing code into named parts).

**🧠 Learn:** Wrapping ugly details inside well-named functions so the "main" code reads like plain English; splitting code into sections/files; importing your own file.

**🎨 In class:** Refactor last week's drawings so the main program is just:
```python
draw_background()
draw_house()
draw_sun()
```
…and the messy turtle commands hide inside those functions. The kids *see* how readable code becomes.

**🏠 Homework — "Scene Builder":** Build a picture (house + tree + sun) where the main program is only 3–4 clean function calls. The details live in functions above.

**❓ Quiz:**
1. "Abstraction" means…
   - **A) Hiding complicated details behind a simple name ✅**  B) Deleting code  C) Making code harder
2. Why split code into modules/functions?
   - **A) Easier to find, fix, and reuse ✅**  B) It runs faster always  C) It looks fancy

**💡 Tips:** Good code reads like a recipe, not a wall of text. If your *main* program is readable by your little sibling, you nailed it.

---

## Session 8 — Classes (Design Your Own Thing) 🧁

**🎯 Why it matters:** A **class** is a cookie-cutter / blueprint. Stamp it once → make many cookies (objects), each with its own data. Our Snake will be built from a `Snake` blueprint and a `Food` blueprint.

**🧠 Learn:** `class`, `__init__` (the setup), attributes (data the object remembers, like `self.body`), methods (things the object can *do*, like `self.move()`).

**🎨 In class:** Build a tiny `Pet` class with a name and a `speak()` method. Make two pets — same blueprint, different names. Then peek at a `Snake` skeleton:
```python
class Snake:
    def __init__(self):
        self.body = [(0, 0)]       # a LIST (Session 4!)
        self.direction = "Right"   # a VARIABLE (Session 2!)
    def move(self):                # a METHOD (Session 6!)
        ...
```
Point out: **every concept from the whole camp lives inside this one class.**

**🏠 Homework — "Build a Blueprint":** Make a `Balloon` class with a color and size, and a `pop()` method that prints a message. Create three different balloons.

**❓ Quiz:**
1. A class is like…
   - **A) A blueprint/cookie-cutter for making objects ✅**  B) A loop  C) A variable
2. What does `__init__` do?
   - **A) Sets up a new object when it's created ✅**  B) Deletes the object  C) Ends the program

**💡 Tips:** "Class = blueprint, object = the actual thing built from it." A `Dog` class; *your* dog Rex is an object.

---

## Session 9 — BUILD DAY 1: Snake Comes Alive 🐍

**🎯 Goal:** Assemble the bricks. By end of session: a snake that **moves with arrow keys and eats food to grow.**

**🧠 Skills reused:** variables (direction, score), list (`self.body`), loop (game loop), conditionals (ate food?), functions/methods (`move`, `grow`), class (`Snake`, `Food`).

**🎨 Guided build (instructor-led, kids type along):**
1. Set up the screen and grid (Sessions 1 & 3)
2. Create the `Snake` object — body is a list (Sessions 4 & 8)
3. Game loop that moves the snake (Session 3)
4. Arrow-key controls (functions — Session 6)
5. Add `Food`; if snake reaches it → `.append()` to body + new food (Sessions 4 & 5)

**🏠 Homework — "Make it yours":** Change the snake's color, the food's shape, or the grid size. Bring one idea for a new feature to Day 2.

**💡 Tips:** Save often. Test after *every* small piece — "code a little, run a little." If it breaks, you only changed one thing, so it's easy to find.

---

## Session 10 — BUILD DAY 2: Polish, Play & Showcase 🏆

**🎯 Goal:** Turn the working snake into a *real game* and celebrate.

**🎨 Add features (pick based on group level):**
- **Score display** that goes up when you eat (variables + text)
- **Game over** when you hit the wall or yourself (conditionals + list check)
- **Speed up** as the score climbs (variables in the loop)
- **Restart** key
- Stretch: high-score memory, sound, levels

**🎉 Showcase:** Each kid demos their game and shows ONE thing they personally changed. Hand out a "Python Game Developer" certificate.

**🏠 "Homework" (forever):** Ideas to keep going — add a second food type, a wraparound wall, two-player mode. Point them to free resources.

**💡 Tips:** "Done and playable beats perfect and unfinished." Ship the game, *then* dream up version 2.

---

# 🧩 Built-in Teaching Devices (use throughout)

- **The "Why" hook first, always.** Never introduce a concept before answering "why would I ever need this?" Kids retain *purpose*, then mechanics.
- **Real-world analogy per topic:** box (variable), backpack (list), fork-in-road (if), spell (function), remote control (abstraction), LEGO bins (modularity), cookie-cutter (class).
- **"Code a little, run a little."** Never write 20 lines then run. Build the debugging habit early.
- **Celebrate bugs.** Reframe errors as clues, not failures. A "Bug of the Day" award keeps it light.
- **Callback jokes** that reinforce traps: "one equals stores, two equals compares," "lists start at zero."
- **The brick board:** keep a visible wall chart showing how each session's homework becomes a Snake part. Kids *see* the project assembling.

---

# 📝 Quiz Answer Key (quick reference)

| Session | Q1 | Q2 |
|---------|----|----|
| 1 | B | B |
| 2 | C | A |
| 3 | B | B |
| 4 | A | A |
| 5 | B | A |
| 6 | A | B |
| 7 | A | A |
| 8 | A | A |

---

# 📦 Appendix A — Alternate Capstone: Tic-Tac-Toe with a "Smart" Opponent
For advanced groups who want an opponent to beat. Uses a 2D list (the board), conditionals (win-checking), functions, and a simple rule-based "AI" (win if you can → block if you must → else pick center/corner). Avoids minimax math while still feeling smart. Maps to the same Sessions 1–8.

# 📦 Appendix B — What Each Session Needs
- Python 3 installed (or a browser-based Python like a school-approved online IDE)
- `turtle` (built into Python — nothing to install)
- A projector for live-coding
- The "brick board" wall chart
- Printed quizzes (or a quick show-of-hands/Kahoot-style game)

# 📦 Appendix C — Topic → Importance Cheat Sheet (for instructors)
- **Variables:** programs must *remember* state — score, position, lives.
- **Lists:** handle *many* things at once and let collections *grow* (the snake!).
- **Loops:** repetition without copy-paste; the engine that keeps a game running.
- **Conditionals:** decisions and rules — the difference between a drawing and a *game*.
- **Functions:** reuse, naming, and not repeating yourself (DRY).
- **Abstraction:** manage complexity by hiding details behind simple names.
- **Modularity:** organize so code is findable, fixable, and shareable.
- **Classes:** model real "things" (a snake, a balloon) bundling data + behavior together.
