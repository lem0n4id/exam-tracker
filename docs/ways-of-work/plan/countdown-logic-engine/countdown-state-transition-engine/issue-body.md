I’ll draft a complete Feature issue body for "Countdown and State Transition Engine" that you can paste directly into a GitHub issue.

# Feature: Countdown and State Transition Engine

## Feature Description

Implement the per-second countdown engine and deterministic state evaluator for far, approaching, critical, last24, today, and missed. Where logic outputs map to visible urgency labels and card states, verify expected outcomes against stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- Validate UI-facing state output expectations using Stitch visual source where applicable.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Accurate urgency labels and trustworthy countdown behavior.
- KPIs / Signals:
  - 100% threshold rule coverage in test matrix
  - 0 known boundary defects pre-release
  - stable one-second updates under normal usage

## Acceptance Criteria

- [ ] Countdown outputs days/hours/minutes/seconds correctly
- [ ] State transitions are correct at all defined thresholds
- [ ] Today/missed edge behavior is correct
- [ ] Boundary verification matrix is completed and attached

## Subtasks (suggested)

- [ ] Follow implementation-plan.md steps end-to-end; commit in small chunks; open and link a PR
- [ ] Tests (happy path + 1-2 edge cases)
- [ ] Docs updated (README.md/DEVELOPMENT.md/copilot-instructions.md)
- [ ] Cross-check deliverables against PRD, project-plan.md, and issues-checklist.md; document any variances in PR

## Dependencies

- Blocked by: Exam Data Contract

## Definition of Done

- [ ] Meets acceptance criteria
- [ ] Passes lint/build/preview smoke
- [ ] Performance impact considered
- [ ] Documentation updated
- [ ] Pull Request opened and linked; CI/build checks are green
- [ ] Work validated against PRD acceptance criteria and aligned with project-plan.md and issues-checklist.md

## Labels

`feature`, `priority-critical`, `value-high`, `logic`, `countdown`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

M

## References

- PRD: (docs/ways-of-work/plan/countdown-logic-engine/countdown-state-transition-engine/PRD.md)
- Stitch Visual Source (for UI-state mapping): (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/countdown-logic-engine/countdown-state-transition-engine/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/countdown-logic-engine/countdown-state-transition-engine/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/countdown-logic-engine/countdown-state-transition-engine/issues-checklist.md)

## Parent

- Epic: Countdown Logic Engine (#<add issue number here>)
