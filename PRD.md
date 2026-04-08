# Exam Tracker - Product Requirements Document

## 1. Document Control

| Field | Value |
|---|---|
| Product Name | Exam Tracker |
| Product Type | Mobile-first, single-page static web app UI |
| Deployment Model | Static build per exam cycle with hardcoded data |
| Implementation Target | Astro page with Tailwind CSS and minimal client-side JavaScript |
| Source of Truth | Initial prompt in README + final visual reference in Stitch asset Exam-Tracker-Deadline-Machine.html |
| PRD Version | 1.0 |
| Date | 2026-04-09 |

## 2. Product Vision

Exam Tracker is a personal exam countdown interface designed to induce urgency and focus. The interface must feel strict, high-pressure, and utilitarian, like a command console for academic deadlines. Every visual and interaction choice reinforces one message: exam dates are approaching and action is required now.

## 3. Goals and Non-Goals

### 3.1 Goals

1. Present current date and exam deadline status at a glance.
2. Make countdown timers the strongest visual element in each active exam card.
3. Encode urgency through explicit deadline states (D-5, D-2, D-1, TODAY, MISSED).
4. Match the final design reference exactly in structure, tone, typography, color behavior, and component hierarchy.
5. Remain static-first and simple to redeploy with new hardcoded dates.

### 3.2 Non-Goals

1. No authentication.
2. No backend.
3. No persistence or CRUD storage.
4. No external data fetching.
5. No advanced app state management.

## 4. Users and Usage Context

1. Primary users are students using a personal/shared countdown page.
2. Usage pattern is frequent short checks on mobile throughout the day.
3. Typical user intent is urgency tracking, not planning or note taking.

## 5. Core Product Principles

1. Psychological pressure first: urgency must be continuously visible.
2. Minimal information density: only subject, date, and countdown-critical status.
3. Mobile-first readability with desktop enhancement.
4. Neo-brutalist hard-edge visual language: thick borders, hard shadows, no softness.
5. Countdown state progression: visuals intensify as deadlines approach.

## 6. Scope

### 6.1 In Scope

1. Top app bar with brand identity and lightweight nav affordances.
2. Date and system status anchor section.
3. Multiple exam cards with distinct urgency states.
4. Live countdown rendering logic per exam in client-side JavaScript.
5. Mobile bottom navigation with large touch targets.
6. Strong color-token-driven design system integration.

### 6.2 Out of Scope

1. Real-time collaboration.
2. Calendar sync.
3. Notifications.
4. Analytics dashboards with historical storage.

## 7. Information Architecture and Page Structure

The page is a single vertical flow with fixed top and bottom anchors:

1. Fixed TopAppBar
2. Main content container
3. Date anchor section
4. Exam cards stacked vertically
5. Motivational footer statement
6. Fixed mobile bottom nav

## 8. Exact UI Specification (Final Reference Parity)

The final app must visually and structurally match the Stitch reference screen in Exam-Tracker-Deadline-Machine.html.

### 8.1 Global Frame

1. Dark mode class is active on html root.
2. Body background is surface black (#0e0e0e), foreground white.
3. Body uses antialiased text and bottom spacing to avoid overlap with fixed mobile nav.
4. Main content max width is constrained to 2xl and centered on larger viewports.

### 8.2 Top App Bar

1. Fixed to top with full width and high z-index.
2. Left cluster:
	1. Terminal icon in primary pink.
	2. Title text DEADLINE_PROTOCOL in uppercase, heavy headline font, wide tracking.
3. Right cluster:
	1. Desktop nav links: Grid, Add, Stats, Meta.
	2. History toggle icon.
4. Styling:
	1. 4px white bottom border.
	2. Hard pink offset shadow.
	3. No rounded corners.

### 8.3 Date Anchor Section

1. Two-column horizontal row.
2. Left: System_Status label and OPERATIONAL value.
3. Right: Current_Date label and date in mono primary color.
4. Bottom divider with 4px outline stroke.

### 8.4 Exam Cards and Visual States

Order of cards and state semantics must match final design:

1. TODAY card (Linear Algebra)
2. LAST 24 HOURS card (Quantum Mechanics, D-1)
3. CRITICAL card (Advanced Thermodynamics, D-2)
4. APPROACHING card (Stochastic Processes, D-5)
5. MISSED card (Calculus III)

### 8.5 Card Details

#### TODAY Card

1. Inverted card treatment: white container on dark page.
2. Floating TODAY badge at top-left in error red.
3. Subject title in black heavy headline.
4. Date row with warning icon.
5. Countdown area replaced by COMMENCING_NOW block.

#### LAST 24 HOURS Card (D-1)

1. Error-accent border and hard-shadow-error.
2. Top-right D-1 corner badge.
3. Urgency microcopy: Urgency: Critical.
4. Dominant countdown panel with segmented mono time display.
5. Flash-like visual emphasis via animated separator colons.
6. Bottom segmented urgency/progress blocks.

#### CRITICAL Card (D-2)

1. Primary pink-accent border and hard-shadow-primary.
2. Top-right D-2 badge.
3. Urgency microcopy: Urgency: High.
4. Large mono timer with centisecond suffix.
5. Divider above timer.
6. Review action button: REVIEW_DATA.

#### APPROACHING Card (D-5)

1. Secondary blue-accent border and hard-shadow-secondary.
2. Top-right D-5 badge.
3. Urgency microcopy: Urgency: Stable.
4. Medium prominence timer.
5. Horizontal progress rail with partial fill.

#### MISSED Card

1. Reduced emphasis via opacity and grayscale.
2. Neutral border and muted text.
3. MISSED status tag.
4. Date displayed as historical value, no active countdown.

### 8.6 Footer Block

1. Thick top white divider.
2. Large italic uppercase headline: NO_EXCUSES.
3. Supporting microcopy in small uppercase mono text.

### 8.7 Mobile Bottom Navigation

1. Fixed bottom nav, visible only on mobile.
2. Four items: GRID, ADD, STATS, META.
3. Active tile highlighted in pink with black icon/text.
4. Remaining items are white with lowered opacity and hover inversion.
5. 4px white top border and pink upper shadow accent.

## 9. Data Model and Content Requirements

Exam data is hardcoded per deployment. No remote schema or storage.

Minimum shape:

1. subjectName
2. examDateISO
3. examDateDisplay (dd-mm-yyyy)
4. accentState (far, approaching, critical, last24, today, missed)
5. optionalProgressRatio

Reference content for final visual parity:

1. LINEAR ALGEBRA - 14-05-2026 - TODAY
2. QUANTUM MECHANICS - 15-05-2026 - D-1
3. ADVANCED THERMODYNAMICS - 16-05-2026 - D-2
4. STOCHASTIC PROCESSES - 19-05-2026 - D-5
5. CALCULUS III - 10-05-2026 - MISSED

## 10. Countdown and State Logic

Countdown is client-side and updates every second.

### 10.1 Time Unit Display

1. Days
2. Hours
3. Minutes
4. Seconds

For the final visual style, timer typography can include a smaller trailing unit segment for sub-second-like emphasis even if driven by second-level updates.

### 10.2 State Rules

1. Far away: more than 7 days remaining.
2. Approaching: 3 to 7 days remaining.
3. Critical: 1 to 3 days remaining.
4. Last 24 hours: less than 24 hours and greater than 0.
5. Today: calendar date match for local user date.
6. Missed: exam date/time is in the past and not same-day active state.

### 10.3 State Rendering Behavior

1. Far away: calmer tertiary/secondary styling, minimal animation.
2. Approaching: clearer accent and subtle pulse potential.
3. Critical: stronger accent saturation, high visual weight.
4. Last 24 hours: maximum intensity, blinking separators, warning treatment.
5. Today: countdown replaced with explicit TODAY/COMMENCING_NOW messaging.
6. Missed: grayscale, muted, animation disabled.

## 11. Visual Design System Requirements

### 11.1 Typography

1. Headline and body families: Space Grotesk.
2. Timer family: JetBrains Mono.
3. Heavy weights and uppercase labels dominate hierarchy.
4. Tight tracking for major headlines.

### 11.2 Shape and Borders

1. Default border radius is 0.
2. Thick border usage (2px to 8px depending on component role).
3. Hard-edge corners for all cards and controls.

### 11.3 Shadow System

1. Hard-shadow-primary: 8px 8px 0 #ff85c9.
2. Hard-shadow-secondary: 8px 8px 0 #8debff.
3. Hard-shadow-error: 8px 8px 0 #ff6e84.
4. No blur shadows.

### 11.4 Color Token Set (Authoritative)

The following named tokens are required to preserve fidelity with Stitch assets:

| Token | Value |
|---|---|
| background | #0e0e0e |
| surface | #0e0e0e |
| surface_container | #1a1a1a |
| surface_container_low | #131313 |
| surface_container_lowest | #000000 |
| surface_container_high | #20201f |
| surface_container_highest | #262626 |
| surface_bright | #2c2c2c |
| surface_variant | #262626 |
| on_surface | #ffffff |
| on_surface_variant | #adaaaa |
| outline | #767575 |
| outline_variant | #484847 |
| primary | #ff85c9 |
| primary_container | #f672be |
| primary_dim | #f36fbc |
| primary_fixed | #fd77c4 |
| primary_fixed_dim | #ed6ab6 |
| on_primary | #5e0041 |
| on_primary_container | #490032 |
| on_primary_fixed | #15000c |
| on_primary_fixed_variant | #620045 |
| secondary | #8debff |
| secondary_container | #006877 |
| secondary_dim | #7edcf0 |
| secondary_fixed | #8debff |
| secondary_fixed_dim | #7edcf0 |
| on_secondary | #005763 |
| on_secondary_container | #eafbff |
| on_secondary_fixed | #00424c |
| on_secondary_fixed_variant | #00616f |
| tertiary | #f9ffb1 |
| tertiary_container | #eaf385 |
| tertiary_dim | #dbe479 |
| tertiary_fixed | #eaf385 |
| tertiary_fixed_dim | #dbe479 |
| on_tertiary | #5d6400 |
| on_tertiary_container | #555b00 |
| on_tertiary_fixed | #434800 |
| on_tertiary_fixed_variant | #5f6600 |
| error | #ff6e84 |
| error_container | #a70138 |
| error_dim | #d73357 |
| on_error | #490013 |
| on_error_container | #ffb2b9 |
| inverse_surface | #fcf9f8 |
| inverse_on_surface | #565555 |
| inverse_primary | #a52f79 |
| surface_tint | #ff85c9 |

## 12. Responsive Behavior

1. Mobile is the primary layout target.
2. Cards stack vertically with generous spacing.
3. Top desktop nav links appear at md breakpoint and above.
4. Bottom nav appears only below md breakpoint.
5. Main content remains centered with max-width cap for desktop readability.

## 13. Interaction and Motion Requirements

1. Countdown values update every second.
2. Last-24-hour state uses visibly animated separators.
3. Button and touch interactions use sharp, non-soft active translation.
4. Transition style remains strict and minimal (no soft easing aesthetic).

## 14. Accessibility and Usability

1. Maintain strong contrast between text and background in all active states.
2. Use semantic HTML where possible for headers, sections, and nav.
3. Keep icon-only actions recognizable with contextual placement.
4. Ensure touch targets are comfortably usable on mobile.

## 15. Technical Constraints and Implementation Notes

1. Must be implementable as Astro static page output.
2. No backend dependencies.
3. Data is hardcoded in source for each deployment.
4. Countdown logic runs in browser only.
5. Styling can be implemented with Tailwind utility classes and custom token extension.
6. External font dependencies are allowed as in reference implementation.
7. Material Symbols can be used for iconography.

## 16. Acceptance Criteria

### 16.1 Functional

1. Page renders current date display section.
2. Each exam card displays subject and target date.
3. Active cards display live countdown behavior by state.
4. TODAY and MISSED states override countdown with proper status treatment.
5. No server calls are required for runtime rendering.

### 16.2 Visual

1. Overall visual tone matches the reference Deadline Machine screen.
2. Top bar, card order, badges, typography hierarchy, and footer copy are preserved.
3. Hard borders and hard shadows are used exactly as the design language requires.
4. Accent color mapping by urgency state is preserved (error, primary, secondary, muted).
5. Mobile and desktop breakpoints reflect the same behavior as reference assets.

### 16.3 Content Fidelity

1. Brand/title text is DEADLINE_PROTOCOL.
2. Footer headline is NO_EXCUSES.
3. Navigation labels are GRID, ADD, STATS, META.
4. State labels include TODAY, D-1, D-2, D-5, MISSED.

## 17. Test and QA Checklist

1. Verify countdown accuracy against local time zone.
2. Verify state transitions at threshold boundaries.
3. Verify no overlap between bottom nav and main content on small screens.
4. Verify top app bar remains fixed and readable while scrolling.
5. Verify cards remain legible under reduced viewport width.
6. Verify MISSED cards are non-animated and clearly de-emphasized.
7. Verify typography fallback behavior if web fonts fail.

## 18. Future Enhancements (Not in Current Scope)

1. Lightweight local editing mode for exam dates before static export.
2. Optional progress analytics panel.
3. Optional reminder notifications via client-side APIs.

## 19. Final Requirement Statement

This PRD defines a static, mobile-first deadline tracker whose final production UI must match the Deadline Machine reference design exactly in layout, styling language, urgency states, and emotional tone while preserving the original project constraints: no backend, no persistence, hardcoded exam data, and client-side countdown behavior.

## 20. Delivery Breakdown (Epic -> Feature)

This PRD is decomposed into 5 epics and 9 features under docs/ways-of-work/plan.

### 20.1 Epic and Feature Map

1. Astro Tailwind Foundation (Execute First)
	1. Astro Tailwind Latest Bootstrap
2. Deadline Machine Shell
	1. Top Bar and Date Anchor
	2. Footer and Mobile Navigation
3. Urgency State Rendering
	1. Active Urgency Cards (D-5, D-2, D-1)
	2. Today and Missed Overrides
4. Countdown Logic Engine
	1. Exam Data Contract
	2. Countdown and State Transition Engine
5. Quality and Release Operations
	1. Visual Regression and Responsive QA
	2. Deployment Playbook and Handoff

### 20.2 Planning and Issue Artifacts

Each epic folder contains:

1. epic.md
2. arch.md
3. issue-body.md

Each feature folder contains:

1. PRD.md
2. implementation-plan.md
3. project-plan.md
4. issues-checklist.md
5. issue-body.md

### 20.3 Visual Source Enforcement

For every UI-related story, enabler, checklist item, implementation step, and issue body in this breakdown, the Stitch asset Exam-Tracker-Deadline-Machine.html is a mandatory visual source of truth.
