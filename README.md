# exam-tracker

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