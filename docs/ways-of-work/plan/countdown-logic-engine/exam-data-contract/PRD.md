# Feature Name

Exam Data Contract

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/countdown-logic-engine/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/countdown-logic-engine/arch.md

## Goal

### Problem
Hardcoded exam data is updated each cycle, but without a strict contract maintainers can introduce invalid or inconsistent fields that break countdown rendering and state mapping.

### Solution
Define a minimal, validated exam data contract with required fields and clear semantics for each property.

### Impact
Cycle updates become predictable and low-risk, while rendering logic receives consistent inputs.

## User Personas

- Maintainer updating exam dates for each deployment cycle.
- Student consuming countdown outputs derived from this data.

## User Stories

- As a maintainer, I want a strict field contract so that I can update data safely.
- As a student, I want consistent card data so that countdown and labels are correct.

## Requirements

### Functional Requirements

- Define required fields: subjectName, examDateISO, examDateDisplay, accentState.
- Define optional fields: optionalProgressRatio.
- Document allowed values and examples for accentState.
- Provide validation checklist for contract correctness before release.
- When contract fields affect UI labels or state mapping, verify output against Stitch asset Exam-Tracker-Deadline-Machine.html.

### Non-Functional Requirements

- Keep contract simple and maintainable.
- Avoid introducing backend dependencies.
- Preserve human readability for manual cycle updates.

## Acceptance Criteria

- [ ] Data contract is documented with required and optional fields.
- [ ] Allowed state values are explicitly listed.
- [ ] Example dataset includes all reference exams.
- [ ] Pre-release validation checklist exists.
- [ ] UI-impacting fields are linked to Stitch parity validation expectations.

## Out of Scope

- Timer tick implementation.
- UI component styling implementation.
