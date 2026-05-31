# 🐍 Code Quest: Build Your Own Game in Python

An **interactive, 10-session creative coding camp** for kids (~ages 10–14) that teaches
Computational Thinking by building a real, playable **Snake game** in Python.

Each session is ~1.5 hours and follows the same rhythm:
**🎯 Why it matters → 🧠 Learn → 🎨 Do → 🏆 Challenges → ❓ Quiz → 🏠 Homework → 💡 Tips**

Every homework is a **LEGO brick** that becomes one part of the final Snake game.

## ✨ What makes it interactive

- **Live Python in the browser** — every code box runs real Python (and `turtle` drawings!)
  right on the page via [Skulpt](https://skulpt.org). No install needed.
- **Instant-feedback quizzes** — click an answer, see why it's right or wrong, get a score.
- **Tiered challenges** (🟢 Starter → 🟡 Medium → 🔴 Challenge → 🌟 Boss) so everyone stays busy.

## 📚 The 10 sessions

| # | Topic | Snake brick it builds |
|---|-------|-----------------------|
| 1 | Hello, Turtle! (first drawing) | The game screen + snake's head |
| 2 | Variables | Score & position |
| 3 | Loops | The game loop + grid |
| 4 | Lists ⭐ | The snake's body |
| 5 | Conditionals | "Ate food? Hit wall?" |
| 6 | Functions | move(), grow(), draw_food() |
| 7 | Abstraction & Modularity | Clean, organized code |
| 8 | Classes | Snake & Food blueprints |
| 9 | Build Day 1 | A snake that moves & eats |
| 10 | Build Day 2 | Score, game over, showcase 🏆 |

## 🚀 How to run

It's a static site — just open `index.html`, or serve the folder:

```bash
python -m http.server 8753
# then open http://localhost:8753
```

> Tip: opening `index.html` directly via `file://` may block loading `content.js` in some
> browsers. Serving over `http://` (the command above) always works.

## 📂 Files

- `index.html` — the app shell: styling, the Skulpt code-runner, and the quiz engine.
- `content.js` — all course content (every session, quiz, challenge, and homework).
- `course-design/` — the original markdown curriculum and detailed Session 1 plan (instructor notes).

## 🛠 Built with

- [Skulpt](https://skulpt.org) — Python 3 in the browser, including turtle graphics
- Plain HTML/CSS/JS — no build step, no dependencies to install
