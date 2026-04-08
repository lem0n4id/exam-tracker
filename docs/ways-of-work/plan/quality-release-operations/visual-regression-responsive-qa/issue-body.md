I’ll draft a complete Feature issue body for "Visual Regression and Responsive QA" that you can paste directly into a GitHub issue.

# Feature: Visual Regression and Responsive QA

## Feature Description

Define and execute a release-ready QA workflow for visual parity and responsive behavior across required viewport classes. All parity checks must compare with stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory baseline for visual QA checks.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Reduced release risk and consistent visual quality.
- KPIs / Signals:
  - >95% checklist completion rate before release
  - 0 critical parity regressions post-release
  - complete PRD acceptance criteria traceability

## Acceptance Criteria

- [ ] Visual parity checklist is complete and actionable
- [ ] Responsive viewport matrix is complete and actionable
- [ ] PRD traceability mapping is included
- [ ] Stitch comparison requirement is explicitly documented

## Subtasks (suggested)

- [ ] Follow implementation-plan.md steps end-to-end; commit in small chunks; open and link a PR
- [ ] Tests (happy path + 1-2 edge cases)
- [ ] Docs updated (README.md/DEVELOPMENT.md/copilot-instructions.md)
- [ ] Cross-check deliverables against PRD, project-plan.md, and issues-checklist.md; document any variances in PR

## Dependencies

- Depends on completion of core shell/card/countdown features for full validation

## Definition of Done

- [ ] Meets acceptance criteria
- [ ] Passes lint/build/preview smoke
- [ ] Performance impact considered
- [ ] Documentation updated
- [ ] Pull Request opened and linked; CI/build checks are green
- [ ] Work validated against PRD acceptance criteria and aligned with project-plan.md and issues-checklist.md

## Labels

`feature`, `priority-high`, `value-medium`, `quality`, `qa`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

S

## References

- PRD: (docs/ways-of-work/plan/quality-release-operations/visual-regression-responsive-qa/PRD.md)
- Stitch Visual Source: (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/quality-release-operations/visual-regression-responsive-qa/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/quality-release-operations/visual-regression-responsive-qa/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/quality-release-operations/visual-regression-responsive-qa/issues-checklist.md)

## Parent

- Epic: Quality and Release Operations (#<add issue number here>)
