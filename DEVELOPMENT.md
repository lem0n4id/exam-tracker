# Development Guide

## Exam Data Contract

All hardcoded exam data lives in **`src/data/exams.ts`**.  
Edit this file at the start of each deployment cycle to update exam dates.

---

### Field Reference

#### Required fields

| Field              | Type          | Description                                                                  | Example                       |
|--------------------|---------------|------------------------------------------------------------------------------|-------------------------------|
| `id`               | `string`      | Stable card identifier. Format: `"exam-N"` (N = 1-based integer).           | `"exam-1"`                    |
| `subjectName`      | `string`      | Human-readable subject label displayed on the exam card.                     | `"Advanced Thermodynamics"`   |
| `examDateISO`      | `string`      | ISO-8601 date string (`YYYY-MM-DD`). Used for countdown date arithmetic.     | `"2026-05-16"`                |
| `examDateDisplay`  | `string`      | Display-formatted date (`DD-MM-YYYY`). Rendered literally on the card.       | `"16-05-2026"`                |
| `accentState`      | `AccentState` | Urgency band at data-definition time. See [AccentState values](#accentstate-allowed-values). | `"far"` |

#### Optional fields

| Field                    | Type     | Description                                                                      | Example |
|--------------------------|----------|----------------------------------------------------------------------------------|---------|
| `optionalProgressRatio`  | `number` | Study-progress completion in `[0, 1]`. Drives the optional progress bar UI.      | `0.4`   |

---

### AccentState: Allowed Values

`AccentState` is a string union type exported from `src/data/exams.ts`.

| Value         | Urgency band             | Day-delta rule (whole days from today's midnight to exam midnight) |
|---------------|--------------------------|--------------------------------------------------------------------|
| `"far"`       | Low urgency              | delta > 7                                                          |
| `"approaching"` | Stable urgency         | delta > 3 and ≤ 7                                                  |
| `"critical"`  | High urgency             | delta > 1 and ≤ 3                                                  |
| `"last24"`    | Critical — final 24 hrs  | delta > 0 and ≤ 1                                                  |
| `"today"`     | Exam day                 | delta = 0                                                          |
| `"missed"`    | Past exam                | delta < 0                                                          |

> **Note:** The runtime urgency engine in `Schedule.astro` recomputes the live state from
> `examDateISO` on every page load, so the card display stays accurate even if `accentState`
> drifts from the live date. `accentState` in the data array documents the expected state at
> deployment time.

---

### UI-Impact Mapping

The following table maps `AccentState` values to the visual treatment applied by
the client-side urgency engine (see the `<script>` block in `src/components/Schedule.astro`).
The **Stitch reference** column shows which card in
`stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`
demonstrates each state.

| AccentState     | Badge label         | Border colour      | Badge bg colour   | Urgency label text | Countdown display      | Stitch reference card |
|-----------------|---------------------|--------------------|-------------------|--------------------|------------------------|-----------------------|
| `far`           | `D-<N>`             | `outline-variant`  | `surface-variant` | Urgency: Low       | Live countdown         | *(not shown)*         |
| `approaching`   | `D-<N>`             | `secondary`        | `secondary`       | Urgency: Stable    | Live countdown         | Card 3 (Stochastic)   |
| `critical`      | `D-<N>`             | `primary`          | `primary`         | Urgency: High      | Live countdown         | Card 1 (Thermodynamics) |
| `last24`        | `D-1`               | `error`            | `error`           | Urgency: Critical  | Live countdown         | Card 2 (Quantum)      |
| `today`         | `TODAY`             | `on-surface`       | `error`           | *(none)*           | `COMMENCING_NOW` label | Card 4 (Linear Algebra) |
| `missed`        | `MISSED`            | `outline`          | `outline`         | *(none)*           | Hidden (card dimmed)   | Card 5 (Calculus III) |

---

### Validation Checklist (Pre-Release Gate)

Run the following checks before every release when exam data has changed.

#### Manual checklist

- [ ] **id** — each record has a unique `id` matching `exam-N` pattern.
- [ ] **subjectName** — non-empty string for every record.
- [ ] **examDateISO** — matches `YYYY-MM-DD`; date is a valid calendar date.
- [ ] **examDateDisplay** — matches `DD-MM-YYYY`; consistent with `examDateISO`  
      (e.g., ISO `2026-05-16` → Display `16-05-2026`).
- [ ] **accentState** — one of `far | approaching | critical | last24 | today | missed`.
- [ ] **optionalProgressRatio** — if present, a number in `[0, 1]`.
- [ ] No two records share the same `id`.
- [ ] `examDateDisplay` and `examDateISO` refer to the same calendar date.
- [ ] All intended exams are present in the array (no missing subjects).
- [ ] `accentState` reflects the expected urgency at the planned deployment date.

#### Programmatic check

`src/data/exams.ts` exports `validateExam` (single record) and `validateAllExams`
(whole array). Add a quick check in a scratch script or your CI smoke test:

```ts
import { EXAMS, validateAllExams } from './src/data/exams';
validateAllExams(EXAMS); // throws if any record is invalid
console.log('All exam records are valid.');
```

---

### Updating Exam Data for a New Cycle

1. Open `src/data/exams.ts`.
2. Update the `EXAMS` array — change `examDateISO`, `examDateDisplay`, `accentState`,
   and `subjectName` as needed for the new cycle.
3. Run the validation checklist above.
4. Run `npm run build` to confirm the build is green.
5. Run `npm run preview` and visually confirm each card renders correctly.

---

## Build Commands

| Command           | Description                                   |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Start dev server at `localhost:3000`          |
| `npm run build`   | Build static site to `dist/`                  |
| `npm run preview` | Preview the production build locally           |

## Architecture Notes

- **No backend, no auth, no persistence.** All data is hardcoded in `src/data/exams.ts`.
- The countdown engine is implemented in `src/lib/countdown.ts` (pure logic) and consumed by
  the `useCountdown` React hook in `src/hooks/useCountdown.ts`. No third-party timer vendor library is used.
- Design tokens live in `src/styles/global.css` (`@theme` directive, Tailwind v4).
- Visual source of truth: `stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`.

---

## Stitch Parity: TODAY and MISSED Override States

The following table documents the verified parity between the component implementations
in `src/components/ExamCard.tsx` and the reference treatments in
`stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`
(Card 4 — Linear Algebra for TODAY; Card 5 — Calculus III for MISSED).

### TODAY card (`TodayCard` component)

| Element              | Stitch reference classes                                    | Implementation classes                                       | Match |
|----------------------|-------------------------------------------------------------|--------------------------------------------------------------|-------|
| Card wrapper         | `relative bg-on-surface text-surface p-6 border-4 border-on-surface` | same | ✅ |
| Floating badge       | `absolute -top-6 left-4 bg-error text-on-error px-4 py-1 font-black text-xl border-4 border-on-surface` | same | ✅ |
| Subject heading      | `text-3xl font-black font-headline leading-none mb-2`       | same (+ `uppercase` for design consistency)                  | ✅ |
| Date / warning row   | `flex justify-between items-center`                         | same                                                         | ✅ |
| Date span            | `font-mono text-lg font-bold`                               | same                                                         | ✅ |
| Warning icon         | `material-symbols-outlined text-4xl` + FILL variant setting | same + `aria-hidden="true"`                                  | ✅ |
| COMMENCING_NOW block | `mt-6 bg-surface text-on-surface p-4 border-4 border-on-surface` | same                                                    | ✅ |
| COMMENCING_NOW text  | `text-center font-mono text-4xl font-black tracking-tighter` | same                                                        | ✅ |
| Live timer           | *(absent — replaced by COMMENCING_NOW)*                     | No interval registered (`useCountdown` skips for `today`)    | ✅ |

### MISSED card (`MissedCard` component)

| Element          | Stitch reference classes                                    | Implementation classes                                         | Match |
|------------------|-------------------------------------------------------------|----------------------------------------------------------------|-------|
| Card wrapper     | `bg-surface-container-low border-4 border-outline p-6 opacity-60 grayscale` | same                               | ✅ |
| Header row       | `flex justify-between items-start mb-4`                     | same                                                           | ✅ |
| Subject heading  | `text-2xl font-black font-headline leading-tight text-outline` | same (+ `uppercase` for design consistency)                  | ✅ |
| MISSED badge     | `bg-outline text-surface px-2 py-1 font-black text-xs`      | same                                                           | ✅ |
| Footer row       | `flex justify-between items-end`                            | same                                                           | ✅ |
| Date label       | `font-mono text-sm text-outline`  (prefix `DATE:`)          | same                                                           | ✅ |
| event_busy icon  | `material-symbols-outlined text-outline`                    | same + `aria-hidden="true"`                                    | ✅ |
| Countdown timer  | *(absent — card is static)*                                 | No interval registered (`useCountdown` skips for `missed`)     | ✅ |
| Animations       | *(none)*                                                    | No `animate-*` classes; `useCountdown` suppresses ticking      | ✅ |
