I’ll draft a complete Feature issue body for "Exam Data Contract" that you can paste directly into a GitHub issue.

# Feature: Exam Data Contract

## Feature Description

Define a strict hardcoded exam data schema and validation workflow to protect countdown and state correctness across deployment cycles. Where schema fields drive UI state labels/treatment, verify expected mapping against stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- For UI-impacting contract fields, confirm expected rendering alignment with Stitch visual source.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Safe and repeatable exam-cycle data updates.
- KPIs / Signals:
  - 0 invalid contract regressions in release checks
  - <10 minutes for cycle data update validation
  - 100% coverage of required schema fields in docs

## Acceptance Criteria

- [ ] Required and optional fields are fully documented
- [ ] Allowed state values and examples are listed
- [ ] Validation checklist is included and usable
- [ ] UI-impact mapping expectations are documented

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

`feature`, `priority-high`, `value-high`, `logic`, `data-contract`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

S

## References

- PRD: (docs/ways-of-work/plan/countdown-logic-engine/exam-data-contract/PRD.md)
- Stitch Visual Source (for UI-impact mapping): (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/countdown-logic-engine/exam-data-contract/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/countdown-logic-engine/exam-data-contract/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/countdown-logic-engine/exam-data-contract/issues-checklist.md)

## Parent

- Epic: Countdown Logic Engine (#<add issue number here>)
