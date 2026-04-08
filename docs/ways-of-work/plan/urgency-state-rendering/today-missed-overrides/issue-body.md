I’ll draft a complete Feature issue body for "Today and Missed Overrides" that you can paste directly into a GitHub issue.

# Feature: Today and Missed Overrides

## Feature Description

Implement dedicated TODAY and MISSED card override templates that suppress normal countdown behavior where required and match the reference state semantics. Use stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html as mandatory visual source.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as required visual source for TODAY and MISSED treatments.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Clear exceptional-state handling that prevents user confusion.
- KPIs / Signals:
  - 100% correctness for TODAY and MISSED state rendering
  - 0 countdown animation activity in MISSED state
  - 100% documented parity checks for override states

## Acceptance Criteria

- [ ] TODAY state renders COMMENCING_NOW override block
- [ ] TODAY visual hierarchy is high-contrast and correct
- [ ] MISSED state is muted, static, and de-emphasized
- [ ] Stitch parity comparison is documented

## Subtasks (suggested)

- [ ] Follow implementation-plan.md steps end-to-end; commit in small chunks; open and link a PR
- [ ] Tests (happy path + 1-2 edge cases)
- [ ] Docs updated (README.md/DEVELOPMENT.md/copilot-instructions.md)
- [ ] Cross-check deliverables against PRD, project-plan.md, and issues-checklist.md; document any variances in PR

## Dependencies

- Blocked by: State output from countdown/state engine

## Definition of Done

- [ ] Meets acceptance criteria
- [ ] Passes lint/build/preview smoke
- [ ] Performance impact considered
- [ ] Documentation updated
- [ ] Pull Request opened and linked; CI/build checks are green
- [ ] Work validated against PRD acceptance criteria and aligned with project-plan.md and issues-checklist.md

## Labels

`feature`, `priority-high`, `value-high`, `frontend`, `card-rendering`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

M

## References

- PRD: (docs/ways-of-work/plan/urgency-state-rendering/today-missed-overrides/PRD.md)
- Stitch Visual Source: (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/urgency-state-rendering/today-missed-overrides/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/urgency-state-rendering/today-missed-overrides/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/urgency-state-rendering/today-missed-overrides/issues-checklist.md)

## Parent

- Epic: Urgency State Rendering (#<add issue number here>)
