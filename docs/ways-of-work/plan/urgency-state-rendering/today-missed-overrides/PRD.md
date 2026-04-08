# Feature Name

Today and Missed Overrides

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/urgency-state-rendering/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/urgency-state-rendering/arch.md

## Goal

### Problem
TODAY and MISSED states intentionally break normal countdown presentation, but these override behaviors can be implemented inconsistently without explicit requirements. Any drift here reduces clarity and weakens the urgency model.

### Solution
Implement dedicated override templates for TODAY and MISSED cards that replace or suppress countdown visuals exactly as specified.

### Impact
Users can immediately understand exceptional status states and avoid confusion about active versus historical exams.

## User Personas

- Student opening the app on exam day.
- Student reviewing already-missed exams without distraction.

## User Stories

- As a student, I want TODAY card messaging to replace countdown so that I can focus on immediate action.
- As a student, I want MISSED cards muted and non-animated so that they are clearly historical.

## Requirements

### Functional Requirements

- Render TODAY card with inverted treatment, floating TODAY badge, and COMMENCING_NOW block replacing countdown.
- Render MISSED card with reduced opacity/grayscale treatment and MISSED tag.
- Ensure MISSED card shows historical date and no active timer.
- Preserve ordering semantics from PRD card list.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source for TODAY and MISSED component details.

### Non-Functional Requirements

- No animation on MISSED card.
- Keep TODAY treatment high-contrast and highly legible.
- Preserve hard-edge style constraints.

## Acceptance Criteria

- [ ] TODAY card replaces countdown with COMMENCING_NOW presentation.
- [ ] TODAY badge and inverted style treatment match PRD intent.
- [ ] MISSED card appears muted and clearly de-emphasized.
- [ ] MISSED card has no active animation.
- [ ] Visual comparison to Stitch asset Exam-Tracker-Deadline-Machine.html is documented.

## Out of Scope

- Active urgency card variants.
- Countdown threshold logic engine internals.
