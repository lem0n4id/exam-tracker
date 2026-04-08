# Feature Name

Top Bar and Date Anchor

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/deadline-machine-shell/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/deadline-machine-shell/arch.md

## Goal

### Problem
The page shell must immediately orient users with identity and system context, but top-level framing details are easy to implement inconsistently without a focused feature spec. In this product, small layout differences in the top bar and date anchor can break visual parity and reduce urgency tone. The top bar and date anchor also control important fixed positioning and content rhythm for the rest of the page.

### Solution
Implement a fixed top app bar and date anchor section that strictly matches structure, copy, spacing behavior, and tokenized styling from the reference UI.

### Impact
This feature establishes a stable visual entry point for users and reduces rework in downstream card rendering and responsive spacing.

## User Personas

- Student opening the page for fast status checks.
- Student switching between mobile and desktop views.

## User Stories

- As a student, I want to see DEADLINE_PROTOCOL in a fixed top bar so that I instantly recognize the context.
- As a student, I want a readable date anchor with system and date info so that I can trust the page status.
- As a student on mobile, I want top content to stay legible while scrolling so that I can quickly scan cards below.

## Requirements

### Functional Requirements

- Render fixed top app bar with left icon and DEADLINE_PROTOCOL title.
- Render desktop nav items Grid, Add, Stats, Meta on md and above.
- Render history toggle affordance in right cluster.
- Render date anchor with System_Status OPERATIONAL and Current_Date value.
- Ensure main content starts with enough top offset to avoid overlap with fixed top bar.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source when implementing or refining these UI components.

### Non-Functional Requirements

- No rounded corners, gradients, blur, or soft shadows.
- Use Space Grotesk for headline/body and JetBrains Mono where mono date styling is required.
- Use design-system tokens, not ad hoc colors.
- Preserve accessibility contrast and semantic nav/header structure.

## Acceptance Criteria

- [ ] Top app bar is fixed and spans full width with required copy and icon placement.
- [ ] Desktop nav labels are exactly GRID, ADD, STATS, META at md+.
- [ ] Date anchor shows System_Status OPERATIONAL and Current_Date.
- [ ] Top bar and date anchor styling follows hard-edge tokenized design.
- [ ] No content overlaps fixed top bar at mobile or desktop widths.
- [ ] Implementation review explicitly compares against Stitch asset Exam-Tracker-Deadline-Machine.html.

## Out of Scope

- Exam card state rendering.
- Countdown computation logic.
- Bottom navigation and footer copy treatment.
