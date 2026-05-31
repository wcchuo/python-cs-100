# 🐢 Session 1 (Detailed) — Hello, Turtle! Your First Drawing

**Duration:** 90 minutes
**Topic:** What a program is • running code • `forward` / `right` / `left` • *order matters* • drawing shapes & color
**End-of-session brick 🧱:** A drawing window + a moving "head" turtle → this becomes the **game screen and the snake's head** later.
**The hook line for kids:** *"By the end of today, you'll command a robot turtle to draw anything you imagine."*

---

## ⏱️ Minute-by-Minute Plan (the instructor's map)

| Time | Block | What happens |
|------|-------|--------------|
| 0:00–0:05 | 1. Welcome & The Big Promise | Set the vibe, show a finished Snake game |
| 0:05–0:15 | 2. "Human Robot" (unplugged) | Kids learn *computers do EXACTLY what you say* |
| 0:15–0:25 | 3. Meet the Turtle + Run Your First Program | Type, run, see a line appear |
| 0:25–0:35 | 4. The Three Magic Commands | `forward`, `right`, `left` live demo |
| 0:35–0:40 | ⭐ Quiz #1 (warm-up) | 4 quick questions |
| 0:40–0:50 | 5. Build a Square Together | Guided, step-by-step |
| 0:50–0:53 | 🧠 Brain Break | Stretch / "turtle dance" |
| 0:53–1:13 | 6. Challenge Time (tiered) | 🟢🟡🔴🌟 levels — everyone stays busy |
| 1:13–1:21 | 7. Add Color & Flair | `color`, `pensize`, `speed` |
| 1:21–1:26 | ⭐ Quiz #2 (exit ticket) | 5 questions |
| 1:26–1:30 | 8. Wrap-up + Homework Brief | Recap + send-off |

---

## 🧱 Materials & Setup Checklist (do before class)

- [ ] Python 3 installed on every machine (or browser IDE approved by camp)
- [ ] Confirm `turtle` works: run a 3-line test program on each computer
- [ ] Projector mirrored for live coding
- [ ] Printed copy of **Quiz #1**, **Quiz #2**, and the **Homework Sheet** per kid
- [ ] Open space for the "Human Robot" activity
- [ ] A short clip/screenshot of a finished Snake game to show the goal

> 💡 **Instructor pro-tip:** Pre-type a "starter file" with `import turtle` and `turtle.done()` already in it, so kids only fill in the middle. Removes the #1 first-day frustration.

---

## Block 1 — Welcome & The Big Promise (0:00–0:05)

Say it out loud:
> "A computer is the fastest, most obedient robot in the world — but it has zero common sense. It does *exactly* what you tell it, in *exactly* the order you say. Learning to code is learning to give clear instructions. In 10 days you'll build a real Snake game. Today, step one: we make a turtle draw."

Show the finished Snake game for 20 seconds. **Plant the goal.** Then: "Everything you build today is the screen that game lives on."

---

## Block 2 — "Human Robot" Unplugged Activity (0:05–0:15)

**No computers yet.** This teaches the single most important idea of the whole camp.

**How to play:**
1. One volunteer is the "Robot." The instructor (or another kid) is the "Programmer."
2. Goal: guide the Robot from the door to a chair using ONLY these commands: *forward 1 step*, *turn left*, *turn right*.
3. The Robot must do *exactly* what's said — no guessing, no shortcuts. If the programmer says "go to the chair," the Robot freezes confused ("I don't know how!").

**The "aha" moments to call out:**
- Vague instructions fail → you must be **precise**.
- Saying the steps in the wrong **order** sends the robot the wrong way.
- The robot has no common sense → that's why bugs happen, and that's OK.

> 🎯 **Why this matters:** This is the mental model for *all* programming. The turtle is just a robot on screen. Kids who "get" this today debug better all camp.

---

## Block 3 — Meet the Turtle + Run Your First Program (0:15–0:25)

Type this together, line by line, explaining each:

```python
import turtle          # bring in the turtle drawing toolkit

t = turtle.Turtle()    # create our turtle and name it "t"
t.forward(100)         # move forward 100 steps, drawing a line

turtle.done()          # keep the window open so we can see it
```

Run it. **A line appears.** Cheer.

**Explain in kid words:**
- `import turtle` = "open the box of turtle tools."
- `t = turtle.Turtle()` = "give birth to a turtle named `t`."
- `t.forward(100)` = "turtle, walk forward 100 steps."
- `turtle.done()` = "don't slam the window shut — let us look!"

> 💡 **Tip to drill:** "If your window flashes and vanishes, you forgot `turtle.done()` at the end."

---

## Block 4 — The Three Magic Commands (0:25–0:35)

| Command | What it does | Kid translation |
|---------|--------------|-----------------|
| `t.forward(n)` | move forward `n` steps, drawing | "walk and leave a trail" |
| `t.right(n)` | turn right `n` degrees | "spin clockwise" |
| `t.left(n)` | turn left `n` degrees | "spin counter-clockwise" |

**Live demo — type and predict:** Before running each line, ask "what will happen?"

```python
import turtle
t = turtle.Turtle()

t.forward(100)
t.right(90)
t.forward(100)

turtle.done()
```

Run it → an **L-shape / corner** appears. Connect to the Human Robot: "forward, then turn — just like our robot walking to the chair."

**Key teaching point — degrees:** A full spin is 360°. A square corner is 90°. Draw a clock on the board to make `right`/`left` and degrees concrete.

---

## ⭐ Quiz #1 — Warm-Up (0:35–0:40)

*Show of hands or printed. Read each aloud.*

**1. What does `import turtle` do?**
- A) Draws a turtle
- ✅ **B) Opens the box of turtle drawing tools**
- C) Closes the program

**2. What does `t.forward(50)` do?**
- ✅ **A) Moves the turtle forward 50 steps, drawing a line**
- B) Turns the turtle 50 degrees
- C) Makes the turtle 50 times bigger

**3. Your turtle window flashes and disappears instantly. What's missing?**
- A) `import turtle`
- ✅ **B) `turtle.done()` at the end**
- C) A bigger number

**4. `t.right(90)` will…**
- A) Move 90 steps to the right
- ✅ **B) Turn the turtle 90 degrees clockwise**
- C) Draw 90 lines

> 🎉 **Score chant:** "Turtles forward, turtles spin — first quiz done, let's all dig in!"

---

## Block 5 — Build a Square Together (0:40–0:50)

Guided, everyone types along. Ask "what's next?" before each line.

```python
import turtle
t = turtle.Turtle()

t.forward(100)   # side 1
t.right(90)
t.forward(100)   # side 2
t.right(90)
t.forward(100)   # side 3
t.right(90)
t.forward(100)   # side 4

turtle.done()
```

**The big realization to surface:** "We typed *forward, right* four times. That's a lot of repeating… isn't there a lazier way?" (Seed for **Loops**, Session 3 — don't solve it yet, just plant the seed.)

---

## 🧠 Brain Break (0:50–0:53)
Stand up, do a "turtle dance": call out "forward!" (step forward), "right 90!" (quarter turn), etc. Re-energize and reinforce the commands physically.

---

## Block 6 — Challenge Time! Tiered Levels (0:53–1:13)

Kids work at their own pace. **Everyone starts at 🟢 and climbs as far as they can.** Print these on a card. Fast finishers never run out; strugglers still succeed at 🟢.

### 🟢 Starter (everyone should finish)
1. **Rectangle** — like the square, but two sides are 150 and two are 75.
2. **Triangle** — *hint:* turn `right(120)` between sides (not 90!).

### 🟡 Medium
3. **Your First Initial** — draw the first letter of your name (great ones: L, T, E, F, H, I).
4. **Staircase** — make 3 "steps" going up-right (forward, turn, forward, turn… repeating up).

### 🔴 Challenge
5. **A House** — draw a square, then a triangle roof on top.
   - *Hint:* after the square, move the turtle to the top corner, then draw the triangle. Try `t.left(60)` and `t.forward(100)` to start the roof slope.
6. **A 5-Pointed Star** — *hint:* `forward(120)` then `right(144)`, done 5 times. (Why 144? Tease it — they'll loop it in Session 3.)

### 🌟 Boss Level (free design)
7. **Make Your Own** — a flag, a robot face, a spaceship — anything using forward/right/left.

> 💡 **Instructor moves during challenges:**
> - Roam, don't rescue. Ask "what did you tell the turtle to do *right before* it went wrong?"
> - When a kid finishes early, give them the next tier instead of new instructions.
> - Spotlight 2–3 cool screens on the projector. Public wins fuel motivation.

---

## Block 7 — Add Color & Flair (1:13–1:21)

Now make it *pretty* — kids love this part.

```python
import turtle
t = turtle.Turtle()

t.color("purple")      # change the pen color
t.pensize(5)           # make the line thicker
t.speed(3)             # 1 = slow, 10 = fast, 0 = instant

t.forward(100)
t.right(90)
t.forward(100)

turtle.done()
```

Let them recolor their square/initial/house. Try `"red"`, `"blue"`, `"green"`, `"orange"`, `"hotpink"`.

> 💡 **Tip:** Color names go in quotes: `"red"`, not `red`. Forgetting quotes is a super common bug — call it out now.

**Snake callback 🐍:** "Remember — your turtle is the snake's *head*. Pick its color now; you'll keep it for your game."

---

## ⭐ Quiz #2 — Exit Ticket (1:21–1:26)

*Hand out; collect as they leave. Mix of recall + thinking.*

**1. To draw a triangle, you turn `right` by how much between each side?**
- A) 90  •  ✅ **B) 120**  •  C) 60

**2. Which line changes the turtle's color to blue?**
- ✅ **A) `t.color("blue")`**  •  B) `t.blue()`  •  C) `color = blue`

**3. If you swap the order of two commands, the drawing will…**
- A) Always look the same
- ✅ **B) Probably look different — order matters**
- C) Cause an error every time

**4. Predict the output — what shape does this make?**
```python
t.forward(100)
t.right(90)
t.forward(100)
```
- A) A straight line  •  B) A triangle  •  ✅ **C) An "L" / a right-angle corner**

**5. A square has 4 equal sides and 4 turns. Each turn is…**
- ✅ **A) 90 degrees**  •  B) 45 degrees  •  C) 100 degrees

> ✅ **Answer key:** 1-B, 2-A, 3-B, 4-C, 5-A

---

## Block 8 — Wrap-Up + Homework Brief (1:26–1:30)

**Recap in one breath:**
> "Today you learned that a computer does exactly what you say, in order. You met the turtle, ran your first program, and used `forward`, `right`, `left`, and `color` to draw shapes. You're officially writing code!"

**Preview the next session:** "We typed the same thing four times for a square. Next time we learn the lazy genius trick to never repeat ourselves: **variables**."

Hand out the homework sheet (below).

---

# 🏠 Homework Sheet — "My Turtle Name Sign"

**Goal:** Practice the commands + make something you're proud to show.

### Part A — Build (the main task)
Write a program that **draws the first letter of your name** in **your favorite color**, with a thick pen.
- Must use at least: `import turtle`, `t.color(...)`, `t.pensize(...)`, and several `forward` / `right` / `left` commands.
- End with `turtle.done()`.
- Bonus ⭐: draw your **whole initials** (first + last letter).

### Part B — Predict, Then Test (no computer needed first!)
Without running it, **draw on paper** what you think this makes. Then run it and check.
```python
import turtle
t = turtle.Turtle()
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
turtle.done()
```
*What shape did you predict? Were you right?* __________________

### Part C — Mini Quiz (circle the answer)
1. `t.left(90)` turns the turtle which way?  **(a) clockwise  (b) counter-clockwise**
2. Color names need to be in ______ .  **(a) quotes " "  (b) brackets [ ]**
3. A full circle of turning is ______ degrees.  **(a) 90  (b) 360**

### Part D — Think About It (one sentence)
> "Why do you think the order of commands matters?" Write your idea.

*(Homework answer key for instructor: B1 — Part B makes a square (open on one side until the 4th side); A1=b, A2=a, A3=b.)*

> 💡 **Bring next time:** Your name-sign program saved, so we can build on it!

---

# 📋 Instructor Troubleshooting Cheat Sheet

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| Window flashes and closes instantly | Missing `turtle.done()` | Add it as the last line |
| `NameError: name 'turtle' is not defined` | Missing `import turtle` | Add it as the first line |
| Nothing draws | Forgot to create `t = turtle.Turtle()` | Add the turtle creation line |
| Color does nothing / error | Color not in quotes, or misspelled | `t.color("red")` with quotes & correct spelling |
| Shape looks wrong | Turn angle off (used 90 for a triangle) | Triangle = 120, square = 90, star = 144 |
| Turtle draws too fast/slow to watch | Speed setting | `t.speed(3)` to slow down, `t.speed(0)` for instant |

> 🎯 **Golden rule to repeat all session:** *"Code a little, run a little."* Don't write ten lines then run — write one or two, run, see it work, continue.
