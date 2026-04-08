I’ll draft a complete Feature issue body for "Top Bar and Date Anchor" that you can paste directly into a GitHub issue.

# Feature: Top Bar and Date Anchor

## Feature Description

Implement the fixed top app bar and date anchor section with exact label/content fidelity and hard-edge styling. This UI work must explicitly reference stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html during implementation and review.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source for all UI details in this feature.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Stable top-of-page structure that anchors user orientation and supports all downstream card rendering.
- KPIs / Signals:
  - 0 top-bar overlap defects across mobile breakpoints
  - 100% copy fidelity for top bar and date anchor labels
  - 100% parity pass on shell review checklist

## Acceptance Criteria

- [ ] Fixed top app bar renders with required left/right clusters
- [ ] Date anchor renders System_Status and Current_Date correctly
- [ ] Desktop nav behavior is correct at md breakpoint and above
- [ ] Visual parity check against Stitch reference is documented

## Subtasks (suggested)

- [ ] Follow implementation-plan.md steps end-to-end; commit in small chunks; open and link a PR
- [ ] Tests (happy path + 1-2 edge cases)
- [ ] Docs updated (README.md/DEVELOPMENT.md/copilot-instructions.md)
- [ ] Cross-check deliverables against PRD, project-plan.md, and issues-checklist.md; document any variances in PR

## Dependencies

- None

## Definition of Done

- [ ] Meets acceptance criteria
- [ ] Passes lint/build/preview smoke
- [ ] Performance impact considered
- [ ] Documentation updated
- [ ] Pull Request opened and linked; CI/build checks are green
- [ ] Work validated against PRD acceptance criteria and aligned with project-plan.md and issues-checklist.md

## Labels

`feature`, `priority-high`, `value-high`, `frontend`, `shell`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

M

## References

- PRD: (docs/ways-of-work/plan/deadline-machine-shell/topbar-date-anchor/PRD.md)
- Stitch Visual Source: (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/deadline-machine-shell/topbar-date-anchor/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/deadline-machine-shell/topbar-date-anchor/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/deadline-machine-shell/topbar-date-anchor/issues-checklist.md)

## Parent

- Epic: Deadline Machine Shell (#<add issue number here>)
