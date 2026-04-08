I’ll draft a complete Feature issue body for "Active Urgency Cards (D-5, D-2, D-1)" that you can paste directly into a GitHub issue.

# Feature: Active Urgency Cards (D-5, D-2, D-1)

## Feature Description

Implement all active countdown card variants with state-accurate badges, urgency microcopy, and timer emphasis. Use stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html as mandatory visual source for all UI choices.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source for every active-state card treatment.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Reliable urgency escalation across active exams.
- KPIs / Signals:
  - 100% correctness for D-1/D-2/D-5 labels and microcopy
  - 100% accent mapping accuracy by state
  - <5% active-card parity defects in QA

## Acceptance Criteria

- [ ] D-1 card renders with error-accent high-intensity treatment
- [ ] D-2 card renders with primary-accent high treatment and REVIEW_DATA action
- [ ] D-5 card renders with secondary-accent stable treatment and progress rail
- [ ] Documented parity check against Stitch visual source exists

## Subtasks (suggested)

- [ ] Follow implementation-plan.md steps end-to-end; commit in small chunks; open and link a PR
- [ ] Tests (happy path + 1-2 edge cases)
- [ ] Docs updated (README.md/DEVELOPMENT.md/copilot-instructions.md)
- [ ] Cross-check deliverables against PRD, project-plan.md, and issues-checklist.md; document any variances in PR

## Dependencies

- Blocked by: Countdown/state output from logic engine

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

- PRD: (docs/ways-of-work/plan/urgency-state-rendering/active-urgency-cards/PRD.md)
- Stitch Visual Source: (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/urgency-state-rendering/active-urgency-cards/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/urgency-state-rendering/active-urgency-cards/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/urgency-state-rendering/active-urgency-cards/issues-checklist.md)

## Parent

- Epic: Urgency State Rendering (#<add issue number here>)
