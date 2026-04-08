I’ll draft a complete Feature issue body for "Footer and Mobile Navigation" that you can paste directly into a GitHub issue.

# Feature: Footer and Mobile Navigation

## Feature Description

Implement the urgency footer block and mobile-only fixed bottom navigation with strict layout safety and token-driven styling. Use stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html as mandatory visual source for all UI decisions.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow the step-by-step instructions in implementation-plan.md (see References)
- Closely examine these source docs in the same directory and reconcile them:
  - PRD (requirements and acceptance criteria)
  - implementation-plan.md (step-by-step execution)
  - project-plan.md (sequencing/estimates/risks)
  - issues-checklist.md (task tracking)
  When conflicts arise, defer to PRD for scope/requirements and note discrepancies in the Pull Request.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as required visual source for footer and bottom nav UI parity.
- Implement changes in small, logically grouped commits with clear messages
- Open a Pull Request linking back to this issue; summarize changes and verification steps
- Ensure lint/build/preview checks pass before requesting review

## Business Value

- Outcome: Complete lower-shell framing and better mobile usability without overlap defects.
- KPIs / Signals:
  - 0 bottom-nav overlap defects on mobile
  - 100% footer and nav label fidelity
  - 100% parity pass against Stitch reference for bottom sections

## Acceptance Criteria

- [ ] Footer copy and hierarchy are correct
- [ ] Bottom nav behavior is mobile-only and fixed
- [ ] Active and inactive nav treatments match design language
- [ ] Visual parity against Stitch reference is recorded

## Subtasks (suggested)

- [ ] Follow implementation-plan.md steps end-to-end; commit in small chunks; open and link a PR
- [ ] Tests (happy path + 1-2 edge cases)
- [ ] Docs updated (README.md/DEVELOPMENT.md/copilot-instructions.md)
- [ ] Cross-check deliverables against PRD, project-plan.md, and issues-checklist.md; document any variances in PR

## Dependencies

- Related feature: Top Bar and Date Anchor

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

- PRD: (docs/ways-of-work/plan/deadline-machine-shell/footer-mobile-navigation/PRD.md)
- Stitch Visual Source: (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - Implementation Plan: (docs/ways-of-work/plan/deadline-machine-shell/footer-mobile-navigation/implementation-plan.md)
  - Project Plan: (docs/ways-of-work/plan/deadline-machine-shell/footer-mobile-navigation/project-plan.md)
  - Issues Checklist: (docs/ways-of-work/plan/deadline-machine-shell/footer-mobile-navigation/issues-checklist.md)

## Parent

- Epic: Deadline Machine Shell (#<add issue number here>)
