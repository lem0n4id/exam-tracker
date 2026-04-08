# Feature Name

Countdown and State Transition Engine

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/countdown-logic-engine/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/countdown-logic-engine/arch.md

## Goal

### Problem
Urgency rendering depends on accurate threshold transitions, but boundary logic can fail at day transitions and within the last 24 hours if not specified precisely.

### Solution
Implement deterministic per-second countdown computation and state transition logic based on PRD rules for far, approaching, critical, last24, today, and missed.

### Impact
Users receive reliable urgency labels and countdown output, preserving trust and planning quality.

## User Personas

- Student relying on countdown and D-state labels.
- Maintainer validating threshold behavior before release.

## User Stories

- As a student, I want countdown values to update accurately each second so that I can trust urgency signals.
- As a student, I want state transitions to happen correctly at boundaries so that labels reflect reality.

## Requirements

### Functional Requirements

- Compute remaining time in days, hours, minutes, seconds.
- Evaluate state rules:
  - far: >7 days
  - approaching: 3 to 7 days
  - critical: 1 to 3 days
  - last24: <24 hours and >0
  - today: calendar date match
  - missed: past date/time and not same-day active
- Expose computed state and formatted segments to rendering layer.
- Run updates every second.
- For logic that determines UI labels/states, validate rendered outcomes against Stitch asset Exam-Tracker-Deadline-Machine.html.

### Non-Functional Requirements

- Keep implementation simple and deterministic.
- Avoid drift and unstable formatting under repeated updates.
- Preserve client-side only architecture.

## Acceptance Criteria

- [ ] Countdown displays days/hours/minutes/seconds correctly.
- [ ] All six states transition correctly at threshold boundaries.
- [ ] Today and missed edge behavior is correct.
- [ ] One-second updates are stable.
- [ ] UI-visible state outcomes are checked against Stitch reference expectations.

## Out of Scope

- Backend synchronization.
- Persistent user preferences.
