# Visual Regression and Responsive QA

**Visual source of truth:**
`stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`

All checks in this document must be executed by comparing the rendered page against the Stitch
reference HTML above. Open both side-by-side (browser + local preview) to judge parity.

**Run before every static release** after updating exam data or touching any UI component.

---

## 1. Pre-Requisites

| Step | Action |
|------|--------|
| 1 | Run `npm run build` — confirm zero build errors |
| 2 | Run `npm run preview` — open `http://localhost:4321` |
| 3 | Open the Stitch reference HTML in a second browser tab |
| 4 | Disable browser cache (DevTools → Network → "Disable cache") |
| 5 | Load both pages with no zoom (100 %) |

---

## 2. Visual Parity Checklist

> **PRD traceability:** PRD §Functional Requirements — "Create a visual parity checklist covering
> shell, card order, labels, and footer/nav behavior."

For each check: mark **PASS** ✅ or **FAIL** ❌ and add a note if failing.

### 2.1 Shell

| # | Element | Expected (Stitch reference) | Result | Notes |
|---|---------|---------------------------|--------|-------|
| S-1 | Page background | Near-black `#0e0e0e` (`--color-background`) | | |
| S-2 | Body text colour | Off-white `#ffffff` (`--color-on-surface`) | | |
| S-3 | Fonts loaded | Space Grotesk (headings/body) + JetBrains Mono (countdowns) visible | | |
| S-4 | No scrollbar on first load | Single-screen vertical flow on mobile; content fits without horizontal scroll | | |
| S-5 | Page title | Browser tab reads `DEADLINE_PROTOCOL` | | |

### 2.2 Top Bar

| # | Element | Expected (Stitch reference) | Result | Notes |
|---|---------|---------------------------|--------|-------|
| TB-1 | Position | Fixed at top, full-width, `z-50` — stays visible on scroll | | |
| TB-2 | Left cluster | `terminal` icon (pink `#ff85c9`) + `DEADLINE_PROTOCOL` heading (white, `font-black tracking-widest`) | | |
| TB-3 | Right cluster (mobile) | `history_toggle_off` icon button only; desktop nav hidden | | |
| TB-4 | Right cluster (desktop ≥ 768 px) | GRID / ADD / STATS / META nav links visible; GRID link pink (`--color-primary`) | | |
| TB-5 | Border | 4 px solid white bottom border | | |
| TB-6 | Hard shadow | White hard offset shadow below bar | | |

### 2.3 Date Anchor

| # | Element | Expected (Stitch reference) | Result | Notes |
|---|---------|---------------------------|--------|-------|
| DA-1 | Date display | Today's date in `DD-MM-YYYY` format, visible below top bar | | |
| DA-2 | Hydration | Date is populated client-side (not blank on first paint after JS loads) | | |

### 2.4 Exam Cards — Card Order and Layout

| # | Check | Expected | Result | Notes |
|---|-------|----------|--------|-------|
| C-1 | Card stacking | Cards render top-to-bottom in `EXAMS` array order | | |
| C-2 | Card spacing | Consistent vertical gap between cards (Tailwind `space-y` classes) | | |
| C-3 | Card width | Full-width within `max-w-2xl` centred container | | |
| C-4 | No horizontal overflow | No card element bleeds outside the viewport width | | |

### 2.5 Exam Cards — Urgency States

Each sub-section maps to a specific urgency state. Verify each with a real or simulated exam date.

#### 2.5.1 FAR state (`delta > 7 days`)

| # | Element | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| F-1 | Card border | 4 px `--color-outline-variant` (`#484847`) | | |
| F-2 | Badge | Top-right `D-<N>` badge; `--color-surface-variant` background; `--color-on-surface-variant` text | | |
| F-3 | Urgency label | `Urgency: Low` in `text-outline` colour | | |
| F-4 | Countdown | `DD:HH:MM` in `text-on-surface-variant`; smaller `:SS` suffix; `text-4xl` | | |
| F-5 | No hard shadow | FAR card has no coloured hard shadow | | |

#### 2.5.2 APPROACHING state (`3 < delta ≤ 7 days`) — Stitch ref: Card 3 (Stochastic)

| # | Element | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| A-1 | Card border | 4 px `--color-secondary` cyan (`#8debff`) | | |
| A-2 | Hard shadow | Cyan hard offset shadow | | |
| A-3 | Badge | Top-right `D-<N>`; cyan background; dark-cyan text | | |
| A-4 | Urgency label | `Urgency: Stable` in `text-secondary` | | |
| A-5 | Countdown | `DD:HH:MM:SS` in `text-secondary`; `text-4xl`; `font-bold` | | |
| A-6 | Progress rail | Thin cyan progress bar at bottom of card; width = `optionalProgressRatio × 100%` | | |

#### 2.5.3 CRITICAL state (`1 < delta ≤ 3 days`) — Stitch ref: Card 1 (Thermodynamics)

| # | Element | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| CR-1 | Card border | 4 px `--color-primary` pink (`#ff85c9`) | | |
| CR-2 | Hard shadow | Pink hard offset shadow | | |
| CR-3 | Badge | Top-right `D-<N>`; pink background; dark text | | |
| CR-4 | Urgency label | `Urgency: High` in `text-primary` | | |
| CR-5 | Countdown | `DD:HH:MM` in `text-primary`; `text-5xl font-black`; smaller `:SS` suffix at `text-xl` | | |
| CR-6 | Horizontal divider | 4 px `border-outline` rule above the countdown | | |
| CR-7 | REVIEW_DATA label | Pink pill/button reading `REVIEW_DATA` aligned right at card bottom; `aria-hidden` (decorative) | | |

#### 2.5.4 LAST 24 HOURS state (`0 < delta ≤ 1 day`) — Stitch ref: Card 2 (Quantum)

| # | Element | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| L-1 | Card border | 4 px `--color-error` red (`#ff6e84`) | | |
| L-2 | Hard shadow | Red hard offset shadow | | |
| L-3 | Badge | Top-right `D-1`; error-red background; dark text | | |
| L-4 | Urgency label | `Urgency: Critical` in `text-error` | | |
| L-5 | Countdown block | Segmented full-width error-container block; `text-4xl md:text-5xl font-mono font-black` | | |
| L-6 | Pulsing colons | Separator colons animate with `animate-pulse` | | |
| L-7 | Urgency rail | 5-block indicator row; first 3 filled with `bg-error`; last 2 `bg-surface` | | |

#### 2.5.5 TODAY state (`delta = 0`) — Stitch ref: Card 4 (Linear Algebra)

| # | Element | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| T-1 | Card wrapper | Inverted: `bg-on-surface text-surface`; 4 px `border-on-surface` | | |
| T-2 | Floating badge | `TODAY` badge at `-top-6 left-4`; `bg-error text-on-error`; 4 px `border-on-surface` | | |
| T-3 | Subject heading | `text-3xl font-black uppercase` | | |
| T-4 | Date + warning row | Date in `font-mono text-lg font-bold`; `warning` icon (filled, `text-4xl`) | | |
| T-5 | COMMENCING_NOW block | White-bordered inner block with centred `COMMENCING_NOW` in `font-mono text-4xl font-black` | | |
| T-6 | No countdown | Live timer is replaced — no `DD:HH:MM:SS` visible | | |

#### 2.5.6 MISSED state (`delta < 0`) — Stitch ref: Card 5 (Calculus III)

| # | Element | Expected | Result | Notes |
|---|---------|----------|--------|-------|
| M-1 | Card wrapper | `bg-surface-container-low border-4 border-outline`; `opacity-60 grayscale` | | |
| M-2 | Subject heading | `text-2xl font-black text-outline uppercase` | | |
| M-3 | MISSED badge | Small top-right `MISSED` label; `bg-outline text-surface` | | |
| M-4 | Date footer | `DATE: DD-MM-YYYY` in `font-mono text-sm text-outline` | | |
| M-5 | Icon | `event_busy` icon in `text-outline` at bottom-right | | |
| M-6 | No countdown | No timer, no animation | | |

### 2.6 Footer

| # | Element | Expected (Stitch reference) | Result | Notes |
|---|---------|---------------------------|--------|-------|
| FT-1 | Top divider | 8 px solid `--color-on-surface` (white) border-top | | |
| FT-2 | NO_EXCUSES heading | `text-6xl font-black font-headline italic tracking-tighter uppercase` | | |
| FT-3 | Microcopy | `font-mono text-outline text-xs uppercase leading-relaxed`; visible below heading | | |
| FT-4 | Bottom padding | Sufficient padding above the fixed bottom nav (no overlap) | | |

### 2.7 Mobile Bottom Navigation

| # | Element | Expected (Stitch reference) | Result | Notes |
|---|---------|---------------------------|--------|-------|
| N-1 | Visibility | Visible at `< 768 px`; hidden at `≥ 768 px` (`md:hidden`) | | |
| N-2 | Position | Fixed at bottom, `z-50`, full-width, height `h-20` | | |
| N-3 | Border | 4 px solid white top border | | |
| N-4 | Pink shadow | `box-shadow: 0px -4px 0px 0px var(--color-primary)` above bar | | |
| N-5 | Items | Four buttons: GRID, ADD, STATS, META with icons and labels | | |
| N-6 | Active state | GRID active by default: `bg-primary text-on-primary` tile | | |
| N-7 | Tap interaction | Tapping a nav item makes it active (pink bg); previous active reverts | | |

---

## 3. Responsive Viewport Matrix

> **PRD traceability:** PRD §Functional Requirements — "Create responsive QA scenarios for small
> mobile, typical mobile, tablet, and desktop widths."

Open DevTools (F12 → Toggle device toolbar) and test each viewport. For each cell mark **PASS** ✅
or **FAIL** ❌.

### Viewport definitions

| Label | Width | Representative device |
|-------|-------|-----------------------|
| SM — Small mobile | 320 px | iPhone SE (1st gen), Galaxy A series |
| MM — Typical mobile | 375 px | iPhone 14, Pixel 7 |
| TB — Tablet | 768 px | iPad portrait, Galaxy Tab |
| DT — Desktop | 1280 px | Laptop / monitor |

### 3.1 Top Bar

| Check | SM (320) | MM (375) | TB (768) | DT (1280) | Notes |
|-------|----------|----------|----------|-----------|-------|
| Fixed; stays on scroll | | | | | |
| Left cluster readable (no overflow) | | | | | |
| Desktop nav visible only at TB+ | | | | | |
| History icon not clipped | | | | | |

### 3.2 Exam Cards

| Check | SM (320) | MM (375) | TB (768) | DT (1280) | Notes |
|-------|----------|----------|----------|-----------|-------|
| No horizontal overflow | | | | | |
| Countdown text readable | | | | | |
| Urgency badge not clipped | | | | | |
| FAR card renders correctly | | | | | |
| APPROACHING card renders correctly | | | | | |
| CRITICAL card renders correctly | | | | | |
| LAST 24 HOURS card renders correctly | | | | | |
| TODAY card renders correctly | | | | | |
| MISSED card renders correctly | | | | | |

### 3.3 Fixed Element Overlap

> **PRD traceability:** PRD §Functional Requirements — "Include checks for fixed top bar and
> bottom nav overlap behavior."

| Check | SM (320) | MM (375) | TB (768) | DT (1280) | Notes |
|-------|----------|----------|----------|-----------|-------|
| First card not obscured by top bar | | | | | |
| Footer not obscured by bottom nav | | | | | |
| Bottom nav hidden at TB (768 px) | | | | N/A | |
| Page content (`main`) top offset clears fixed top bar | | | | | |

### 3.4 Footer

| Check | SM (320) | MM (375) | TB (768) | DT (1280) | Notes |
|-------|----------|----------|----------|-----------|-------|
| NO_EXCUSES heading readable, not clipped | | | | | |
| Microcopy readable; wraps within `max-w-xs` | | | | | |

### 3.5 Mobile Bottom Nav

| Check | SM (320) | MM (375) | TB (768) | DT (1280) | Notes |
|-------|----------|----------|----------|-----------|-------|
| All four items visible without scrolling | | | | N/A | |
| Items not overlapping or clipped | | | | N/A | |
| Hidden at 768 px+ | | | | N/A | |

---

## 4. State Coverage Summary

> **PRD traceability:** PRD §Functional Requirements — "Include state-specific checks for TODAY,
> D-1, D-2, D-5, MISSED."

| State | Urgency label | Checked in section | Confirmed |
|-------|--------------|-------------------|-----------|
| FAR (`D-10` example) | Urgency: Low | §2.5.1 | |
| APPROACHING (`D-5`) | Urgency: Stable | §2.5.2 | |
| CRITICAL (`D-2`) | Urgency: High | §2.5.3 | |
| LAST 24 HOURS (`D-1`) | Urgency: Critical | §2.5.4 | |
| TODAY | *(badge only)* | §2.5.5 | |
| MISSED | *(badge only)* | §2.5.6 | |

To trigger a specific state during QA without waiting for real dates, temporarily set
`examDateISO` in `src/data/exams.ts` to a past or near-future date and rebuild.

---

## 5. PRD Traceability Mapping

| PRD Acceptance Criterion | QA Sections covering it | Status |
|--------------------------|------------------------|--------|
| Visual parity checklist exists and maps to PRD requirements | §2 (all sub-sections) | |
| Responsive QA matrix includes required viewport classes | §3 | |
| Fixed element overlap checks are explicit and repeatable | §3.3 | |
| State coverage includes all required urgency states | §2.5, §4 | |
| Stitch-based comparison requirement is explicit in QA workflow | §0 (header), §2 preamble, all §2.5 state tables (Stitch ref column) | |

---

## 6. Evidence Report Template

Copy this template for each QA run and attach to the release PR or store in `docs/qa/runs/`.

```markdown
## QA Run Report

**Date:** YYYY-MM-DD
**Tester:**
**Build commit:** (git SHA)
**Preview URL:** http://localhost:4321

### Summary

| Section | Total checks | Passed | Failed |
|---------|-------------|--------|--------|
| Shell (§2.1) | 5 | | |
| Top Bar (§2.2) | 6 | | |
| Date Anchor (§2.3) | 2 | | |
| Card Order (§2.4) | 4 | | |
| FAR state (§2.5.1) | 5 | | |
| APPROACHING state (§2.5.2) | 6 | | |
| CRITICAL state (§2.5.3) | 7 | | |
| LAST 24 HOURS state (§2.5.4) | 7 | | |
| TODAY state (§2.5.5) | 6 | | |
| MISSED state (§2.5.6) | 6 | | |
| Footer (§2.6) | 4 | | |
| Mobile Nav (§2.7) | 7 | | |
| Responsive matrix (§3) | 22 | | |
| **TOTAL** | **87** | | |

### Failures

<!-- List any FAIL items with reproduction steps and screenshots -->

| ID | Description | Steps to reproduce | Screenshot |
|----|-------------|-------------------|------------|
| | | | |

### Sign-off

- [ ] All critical checks pass (S-*, TB-*, C-*, T-*, M-* groups)
- [ ] No viewport overflow failures at any breakpoint
- [ ] Fixed-element overlap checks pass on mobile (SM + MM)
- [ ] Ready for release: YES / NO
```

---

## 7. Workflow Diagram

```
npm run build (green?)
        │
        ▼
npm run preview
        │
        ▼
Open Stitch HTML in second tab
        │
        ▼
Visual Parity Checklist (§2) ──── FAIL → fix component → re-build
        │ PASS
        ▼
Responsive Viewport Matrix (§3) ─ FAIL → fix CSS → re-build
        │ PASS
        ▼
Evidence Report (§6) filled in
        │
        ▼
PRD Traceability confirmed (§5)
        │
        ▼
Release sign-off ✅
```

---

## 8. Known Edge Cases

| Edge case | What to check |
|-----------|--------------|
| Exam on same day as QA run | TODAY card renders `COMMENCING_NOW`; no countdown visible |
| All exams missed | Page renders all cards as MISSED (dimmed, grayscale); NO_EXCUSES footer still visible |
| Single exam in `EXAMS` array | Card centred in `max-w-2xl` container; no layout breakage |
| Very long subject name | Subject heading wraps cleanly; no overflow outside card bounds |
| Slow font load | JetBrains Mono fallback is a system monospace font; countdown stays readable |
