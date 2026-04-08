# Feature Name

Visual Regression and Responsive QA

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/quality-release-operations/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/quality-release-operations/arch.md

## Goal

### Problem
The project depends on strict visual parity and mobile behavior, but without a structured QA feature these checks become inconsistent and error-prone across release cycles.

### Solution
Define and operationalize a compact but comprehensive visual parity and responsive QA process mapped to PRD acceptance criteria.

### Impact
Teams can detect parity and layout regressions before release with predictable, repeatable checks.

## User Personas

- Maintainer performing release validation.
- Reviewer responsible for sign-off.

## User Stories

- As a maintainer, I want a deterministic parity checklist so that releases are consistent.
- As a reviewer, I want responsive checks for fixed bars and card legibility so that mobile UX remains reliable.

## Requirements

### Functional Requirements

- Create a visual parity checklist covering shell, card order, labels, and footer/nav behavior.
- Create responsive QA scenarios for small mobile, typical mobile, tablet, and desktop widths.
- Include checks for fixed top bar and bottom nav overlap behavior.
- Include state-specific checks for TODAY, D-1, D-2, D-5, MISSED.
- Every visual check must reference Stitch asset Exam-Tracker-Deadline-Machine.html as source of truth.

### Non-Functional Requirements

- Keep checklist execution practical for small teams.
- Ensure traceability to PRD functional and visual acceptance criteria.

## Acceptance Criteria

- [ ] Visual parity checklist exists and maps to PRD requirements.
- [ ] Responsive QA matrix includes required viewport classes.
- [ ] Fixed element overlap checks are explicit and repeatable.
- [ ] State coverage includes all required urgency states.
- [ ] Stitch-based comparison requirement is explicit in QA workflow.

## Out of Scope

- Build pipeline automation.
- Deployment handoff procedures.
