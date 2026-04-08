I’ll draft a complete Epic issue body for "Quality and Release Operations" that you can paste directly into a GitHub issue.

# Epic: Quality and Release Operations

## Epic Description

Define repeatable quality validation and release handoff workflows for static exam-cycle deployments, including parity and responsive checks.

## Business Value

- Primary Goal: Reduce release risk and maintain visual/functional fidelity across exam cycles.
- Success Metrics (KPIs):
  - >95% release checklist completion before deployment
  - 0 critical post-release parity defects
  - <30 minutes to complete cycle refresh validation
  - 100% mapping of checks to PRD acceptance criteria
- User Impact:
  - Users experience consistent behavior across mobile and desktop.
  - Maintainers can execute predictable, low-risk release updates.

## Epic Acceptance Criteria

- [ ] Visual parity checklist exists and is executable.
- [ ] Responsive/overlap checks are documented and repeatable.
- [ ] Release checklist includes data refresh, verification, and sign-off.
- [ ] Acceptance criteria traceability matrix maps to PRD sections.
- [ ] Defect logging process is defined for pre-release issues.
- [ ] Exit criteria for release approval are explicit.
- [ ] QA workflow includes countdown boundary checks.
- [ ] UI parity checks explicitly compare against Stitch visual source.
- [ ] Handoff notes template is available for each release.
- [ ] Documentation updates are included in Definition of Done.

## Features in this Epic

- [ ] Feature: Visual Regression and Responsive QA
  - Docs: docs/ways-of-work/plan/quality-release-operations/visual-regression-responsive-qa
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md
- [ ] Feature: Deployment Playbook and Handoff
  - Docs: docs/ways-of-work/plan/quality-release-operations/deployment-playbook-handoff
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md

## Definition of Done

- [ ] All features completed and verified (dev, build, preview)
- [ ] Baseline behavior validated (e.g., HMR, mobile viewport)
- [ ] Performance budgets captured; initial metrics within targets
- [ ] Documentation updated and consistent (README.md, DESIGN.md, .github/copilot-instructions.md)
- [ ] Planning artifacts updated (project-plan.md, issues-checklist.md)
- [ ] Epic acceptance criteria met; linked feature issues closed

## Labels

`epic`, `priority-medium`, `value-medium`, `quality`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

S

## References

- Epic PRD: (docs/ways-of-work/plan/quality-release-operations/epic.md)
- Architecture: (docs/ways-of-work/plan/quality-release-operations/arch.md)
- Stitch Visual Source (mandatory for parity checks): (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - PRD: (docs/ways-of-work/plan/quality-release-operations/epic.md)
  - Implementation Plan: (not found in docs/ways-of-work/plan/quality-release-operations)
  - Project Plan: (not found in docs/ways-of-work/plan/quality-release-operations)
  - Issues Checklist: (not found in docs/ways-of-work/plan/quality-release-operations)
- Planning prompts:
  - Implementation plan: .github/prompts/breakdown-feature-implementation.prompt.md
  - Project planning: .github/prompts/breakdown-plan.prompt.md