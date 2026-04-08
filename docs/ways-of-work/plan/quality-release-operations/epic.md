# Epic Name

Quality and Release Operations

## Goal

### Problem

The product is static and redeployed per exam cycle, so quality and release discipline determine reliability. Without explicit QA and release playbooks, visual parity regressions and deployment mistakes can bypass review and reduce trust in deadline data.

### Solution

Define repeatable visual QA, responsive validation, and release handoff procedures tied to PRD acceptance criteria.

### Impact

Teams can ship with confidence, detect parity regressions early, and perform fast exam-cycle refreshes with fewer defects.

## User Personas

- Student expecting consistent behavior across mobile and desktop.
- Maintainer responsible for cycle refresh and static deployment.

## High-Level User Journeys

- Validate key states and layout quickly before release.
- Execute a checklist-based release process for hardcoded date updates.
- Confirm production artifact reflects required copy, labels, and urgency behavior.

## Business Requirements

### Functional Requirements

- Define and run visual parity checks for shell and card states.
- Define responsive and overlap test scenarios for fixed bars and content.
- Define release checklist for data update, validation, and deployment sign-off.
- Ensure traceability between PRD acceptance criteria and release verification.
- For UI parity tasks in this epic, use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source.

### Non-Functional Requirements

- Test plan must be lightweight and executable in small teams.
- Release artifacts must be auditable and easy to repeat.

## Success Metrics

- >95% checklist completion before each release.
- 0 critical post-release visual parity defects.
- <30 minutes to perform cycle refresh validation.
- 100% mapping from release checks to PRD acceptance criteria.

## Out of Scope

- Automated backend monitoring systems.
- Analytics instrumentation pipelines.

## Business Value

Medium-High. This epic protects product quality and enables predictable release operations for each exam cycle.