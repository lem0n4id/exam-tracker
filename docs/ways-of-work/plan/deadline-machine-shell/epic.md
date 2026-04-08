# Epic Name

Deadline Machine Shell

## Goal

### Problem

The current product requirement demands strict visual parity with the Deadline Machine reference, but the page-level shell behavior is not yet decomposed into implementation-ready work. Without an explicit shell epic, teams can build card logic while missing structural anchors like fixed top bar behavior, date anchor rhythm, and mobile nav spacing protection. That causes rework and visual drift. This epic defines the stable frame that all urgency content must sit inside.

### Solution

Implement the fixed top app bar, date anchor section, footer block, and mobile bottom navigation as reusable shell sections with hard-edge styling and token-driven theming.

### Impact

This reduces layout churn, enables parallel card implementation, and gives the team a validated baseline for mobile-first fidelity and navigation consistency.

## User Personas

- Student checking deadlines multiple times per day on mobile.
- Student reviewing the same page on desktop between classes.
- Friend sharing the same static deployment in a small cohort.

## High-Level User Journeys

- Open page and immediately recognize brand context and system status.
- Read current date without scrolling.
- Navigate via bottom mobile actions with no overlap or accidental taps.
- Reach footer messaging that reinforces urgency tone.

## Business Requirements

### Functional Requirements

- Provide a fixed top app bar with DEADLINE_PROTOCOL title and nav affordances.
- Provide a date anchor row with System_Status and Current_Date values.
- Provide a footer with NO_EXCUSES headline and support copy.
- Provide fixed mobile bottom nav with four actions and active state treatment.
- Ensure shell sections are reusable and do not interfere with exam card stacking.
- For all shell UI component work, use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source.

### Non-Functional Requirements

- Mobile-first behavior must be primary and stable below md breakpoint.
- No gradients, no blur, no rounded corners.
- Color and typography must use defined design tokens and approved fonts.
- Touch targets must remain usable and visually legible.

## Success Metrics

- 100% of shell sections visually match reference hierarchy.
- 0 viewport overlap defects between content and fixed bars on common mobile sizes.
- 100% of nav labels and brand copy match PRD wording.
- 0 soft-style violations (rounded corners, blur, gradient).

## Out of Scope

- Countdown algorithm behavior.
- Dynamic data editing.
- Notification or persistence features.

## Business Value

High. This epic provides the structural foundation for all other feature work and prevents expensive visual and responsive regressions.