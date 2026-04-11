# exam-tracker

## Setup

### Prerequisites

- **Node.js** `>=18.14.1`
- **npm** (bundled with Node) — or **pnpm** with `.npmrc` `shamefully-hoist=true` (see [.npmrc](.npmrc))

### Install

```bash
npm install
```

### Commands

| Command           | Description                            |
|-------------------|----------------------------------------|
| `npm run dev`     | Start dev server at `localhost:3000`   |
| `npm start`       | Alias for `npm run dev`                |
| `npm run build`   | Build static site to `dist/`           |
| `npm run preview` | Preview the production build locally   |

> **Note:** No test script is assumed in `package.json` unless explicitly added.

### Environment notes

| Environment | Caveat |
|-------------|--------|
| **pnpm**    | Add `.npmrc` with `shamefully-hoist=true` |
| **StackBlitz** | Add `.stackblitzrc` with `ENABLE_CJS_IMPORTS=true` and `startCommand: "npm start"` |

---

## Project structure

```
exam-tracker/
├── astro.config.mjs          # Astro config — Tailwind v4 via @tailwindcss/vite
├── tsconfig.json
├── package.json              # engines: node >=18.14.1
├── .npmrc                    # shamefully-hoist=true (pnpm)
├── .stackblitzrc             # ENABLE_CJS_IMPORTS=true, start: npm start
├── DEVELOPMENT.md            # Exam data contract docs + validation checklist
├── public/
│   └── simplyCountdown.min.js   # Vendor countdown library (do NOT replace)
└── src/
    ├── data/
    │   └── exams.ts             # Exam data contract (Exam type, EXAMS array, validators)
    ├── pages/
    │   └── index.astro          # Main page (top bar, date anchor, schedule, footer, bottom nav)
    ├── components/
    │   └── Schedule.astro       # Exam card list + simplyCountdown bindings
    └── styles/
        ├── global.css           # Tailwind v4 @import + @theme design tokens
        └── home.css             # Page-specific utilities (hard shadows, countdown styles)
```

### Architecture conventions

- `src/pages` — page composition
- `src/components` — reusable UI components
- `src/styles` — global and page-level styles
- `public` — static browser assets (absolute-path references)
- Astro component order: **frontmatter → markup → style/script blocks**
- External browser scripts use `is:inline` where required

### Exam data contract

All exam records are defined in **`src/data/exams.ts`**.  
The file exports:

- `Exam` interface — required fields (`id`, `subjectName`, `examDateISO`, `examDateDisplay`, `accentState`) and optional fields (`optionalProgressRatio`).
- `AccentState` type — allowed urgency values: `far | approaching | critical | last24 | today | missed`.
- `EXAMS` — hardcoded array for the current deployment cycle.
- `validateExam` / `validateAllExams` — runtime validation helpers.

Update `EXAMS` at the start of each deployment cycle and run the pre-release
validation checklist documented in [DEVELOPMENT.md](DEVELOPMENT.md).

### Countdown integration

`public/simplyCountdown.min.js` is the vendor countdown library.  
Each exam card exposes `data-day`, `data-month`, `data-year` attributes
(derived from `examDateISO` in the data contract).  
The client script in `Schedule.astro` reads those attributes, determines the
urgency state, and initialises `simplyCountdown` per card.  
Date format for all displays: **DD-MM-YYYY** (`examDateDisplay` field).

### Visual reference

`stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`
is the authoritative visual source of truth for all UI implementation decisions.

### Visual Regression and Responsive QA

Run the QA workflow in [docs/qa/visual-regression-responsive-qa.md](docs/qa/visual-regression-responsive-qa.md)
before every release. It includes:

- Visual parity checklist (all urgency states vs. Stitch reference)
- Responsive viewport matrix (320 px → 1280 px)
- Fixed-element overlap checks
- Evidence report template

### Release Operations

Every cycle deployment follows the playbook in
[docs/release/playbook.md](docs/release/playbook.md). The playbook defines five sequential
phases: Pre-Check → Data Update → Verify → Approve → Publish, with an explicit rollback path.

When opening a release PR, copy and complete the
[Handoff Template](docs/release/handoff-template.md) into the PR body. The template captures:

- Pre-release checklist evidence (build, visual parity gate, QA report)
- Data update summary (changed subjects and date range)
- Known risks and mitigations
- Reviewer sign-off and rollback plan

---

## GitHub Agent Execution Order

Assign issues to GitHub Copilot in this exact order so dependencies are respected and work can run one issue at a time safely.

### Epic Order

1. Epic: Astro Tailwind Foundation - Issue #3
  https://github.com/lem0n4id/exam-tracker/issues/3
2. Epic: Deadline Machine Shell - Issue #5
  https://github.com/lem0n4id/exam-tracker/issues/5
3. Epic: Countdown Logic Engine - Issue #2
  https://github.com/lem0n4id/exam-tracker/issues/2
4. Epic: Urgency State Rendering - Issue #4
  https://github.com/lem0n4id/exam-tracker/issues/4
5. Epic: Quality and Release Operations - Issue #1
  https://github.com/lem0n4id/exam-tracker/issues/1

### Feature Order (One by One)

1. Feature: Astro Tailwind Latest Bootstrap - Issue #10
  https://github.com/lem0n4id/exam-tracker/issues/10
2. Feature: Top Bar and Date Anchor - Issue #9
  https://github.com/lem0n4id/exam-tracker/issues/9
3. Feature: Footer and Mobile Navigation - Issue #6
  https://github.com/lem0n4id/exam-tracker/issues/6
4. Feature: Exam Data Contract - Issue #11
  https://github.com/lem0n4id/exam-tracker/issues/11
5. Feature: Countdown and State Transition Engine - Issue #12
  https://github.com/lem0n4id/exam-tracker/issues/12
6. Feature: Active Urgency Cards (D-5, D-2, D-1) - Issue #8
  https://github.com/lem0n4id/exam-tracker/issues/8
7. Feature: Today and Missed Overrides - Issue #7
  https://github.com/lem0n4id/exam-tracker/issues/7
8. Feature: Visual Regression and Responsive QA - Issue #14
  https://github.com/lem0n4id/exam-tracker/issues/14
9. Feature: Deployment Playbook and Handoff - Issue #13
  https://github.com/lem0n4id/exam-tracker/issues/13

### Assignment Rule for GitHub Copilot

1. Assign only the current issue in the sequence.
2. Wait for Copilot to open and complete the linked PR.
3. Review and merge that PR.
4. Then assign the next issue.

## original prompt

```markdown
Design a **mobile-first, single-page web app UI** for a lightweight exam countdown tracker built with Astro.

## CONTEXT

* This is a **personal-use tool** shared among friends.
* Each deployment is a **new static page with hardcoded exam dates**.
* No backend, no auth, no persistence.
* The page displays:

  * Today's date
  * A list of subjects with exam dates
  * A live countdown timer for each subject (client-side JS)

## DESIGN GOAL

Create a **structured neo-brutalist interface** that is:

* Clean but bold
* Minimal in layout
* Emotionally intense
* Designed to create **urgency, pressure, and focus**

The UI should feel like:

> “This exam is coming. You cannot ignore it.”

---

## CORE UX PRINCIPLES

### 1. PSYCHOLOGICAL PRESSURE (CRITICAL)

Design must induce urgency:

* Countdown timers are the **primary visual anchor**
* Use:

  * High contrast
  * Large typography
  * Aggressive motion (but controlled)
* Introduce:

  * “D-3”, “D-1”, “TODAY”, “MISSED” states
  * Visual escalation as deadline approaches

---

### 2. MINIMAL INFORMATION DENSITY

* Only show:

  * Subject name
  * Exam date (dd-mm-yyyy)
  * Countdown
* No extra metadata, no clutter

---

### 3. MOBILE-FIRST LAYOUT

* Design for small screens first
* Vertical stacking
* Thumb-friendly spacing
* Sticky elements allowed

---

## LAYOUT STRUCTURE

### TOP BANNER

* Displays today's date (dd-mm-yyyy)
* Full-width block
* Brutalist style:

  * Hard edges
  * Thick borders
  * Slight offset shadows (not soft)

---

### EXAM LIST (MAIN SECTION)

Each subject is a **card/block**, stacked vertically.

Each card contains:

1. Subject name (bold, large)
2. Exam date (smaller, secondary)
3. Countdown timer (dominant element)

---

## COUNTDOWN DESIGN (MOST IMPORTANT)

Each countdown must:

* Be visually dominant
* Use **monospace or digital-style typography**
* Show:

  * Days
  * Hours
  * Minutes
  * Seconds

### STATE-BASED DESIGN

Define visual states:

#### FAR AWAY (>7 days)

* Calm pastel tone
* Low animation

#### APPROACHING (3–7 days)

* Increased contrast
* Subtle pulsing

#### CRITICAL (1–3 days)

* Strong color (pastel → saturated)
* Faster ticking animation
* Slight jitter or shake

#### LAST 24 HOURS

* Aggressive visuals:

  * Flashing separators
  * Background shifts
  * High contrast (almost warning state)

#### EXAM TODAY

* Replace countdown with:

  * “TODAY”
* Full-width emphasis
* Possibly inverted colors

#### MISSED

* Muted / greyed
* Label: “MISSED”
* No animation

---

## COLOR SYSTEM

### Base

* Black / off-black background
* White / off-white text

### Accent (PASTEL ONLY)

Use 2–3 pastel colors:

* Pastel pink
* Pastel blue
* Pastel yellow / green

### Behavior

* Each subject can have a unique accent
* Colors **intensify as deadline approaches**
* Avoid gradients — prefer solid fills

---

## TYPOGRAPHY

* Use bold, heavy grotesk or neo-brutalist fonts
* Combine with monospace for timers

Hierarchy:

* Subject → large, bold
* Timer → largest element
* Date → small, secondary

---

## SPACING & GRID

* Generous padding
* Strong alignment
* No decorative fluff
* Use:

  * Thick borders
  * Hard dividers
  * Occasional misalignment for brutalist feel (controlled)

---

## INTERACTIONS & MOTION

* Timers update every second
* Add:

  * Subtle jitter for urgency states
  * Pulse effect for critical exams
* Avoid smooth, soft easing — prefer **sharp transitions**

---

## GAMIFICATION / URGENCY CUES

Include:

* “D-X” labels (e.g., D-5, D-1)
* Progression feeling:

  * Cards visually “heat up” as time reduces
* Optional:

  * Progress bar shrinking toward exam date

---

## TECHNICAL CONSTRAINTS (IMPORTANT)

* This will be implemented in **Astro**
* Countdown is powered by an external script (`simplyCountdown`)
* Each timer is tied to:

  * A CSS class selector
  * A hardcoded date

DO NOT:

* Introduce backend features
* Assume dynamic data fetching
* Add complex state management

Design must be:

* Static-first
* Easily mapped to HTML + CSS + minimal JS

---

## OUTPUT FORMAT

Provide:

1. High-fidelity mobile UI design
2. Component breakdown (Top banner, Exam card, Timer)
3. Design tokens (colors, typography, spacing)
4. Interaction states for countdown
5. Optional microcopy for urgency labels

---

## KEY EMOTION

The interface should feel like:

* A **deadline machine**
* Slightly stressful, but motivating
* Clean, but unforgiving

Avoid:

* Playful design
* Friendly UI
* Soft, comforting aesthetics

---

## REFERENCE STYLE

* Structured neo-brutalism
* Modern portfolio brutalism
* Minimal but loud

---

Design something that makes the user think:

> “I need to start studying right now.”

```