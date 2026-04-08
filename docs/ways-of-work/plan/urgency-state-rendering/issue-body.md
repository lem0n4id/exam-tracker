I’ll draft a complete Epic issue body for "Urgency State Rendering" that you can paste directly into a GitHub issue.

# Epic: Urgency State Rendering

## Epic Description

Implement complete visual urgency state rendering for active and override exam cards with strict parity to the Deadline Machine reference language and hierarchy.

## Business Value

- Primary Goal: Deliver immediate visual comprehension of urgency states so users can prioritize action.
- Success Metrics (KPIs):
  - 100% correctness for state label rendering (D-5, D-2, D-1, TODAY, MISSED)
  - 100% accent mapping compliance by state
  - 0 active animations on MISSED state
  - <5% visual mismatch defects in card QA
- User Impact:
  - Users can identify the most urgent exam card at a glance.
  - Users receive clearer pressure cues that reinforce study prioritization.

## Epic Acceptance Criteria

- [ ] Active state cards render D-5, D-2, and D-1 with distinct treatments.
- [ ] TODAY state replaces countdown with COMMENCING_NOW treatment.
- [ ] MISSED state is muted and non-animated.
- [ ] Required urgency microcopy is preserved.
- [ ] State badges and card order follow PRD expectations.
- [ ] Animations are mechanical and limited to approved states.
- [ ] Token-driven accent mapping is preserved.
- [ ] UI implementation explicitly references Stitch visual source for each card treatment.
- [ ] Mobile legibility is maintained at narrow widths.
- [ ] Card primitives are reusable across states.

## Features in this Epic

- [ ] Feature: Active Urgency Cards
  - Docs: docs/ways-of-work/plan/urgency-state-rendering/active-urgency-cards
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md
- [ ] Feature: Today and Missed Overrides
  - Docs: docs/ways-of-work/plan/urgency-state-rendering/today-missed-overrides
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md

## Definition of Done

- [ ] All features completed and verified (dev, build, preview)
- [ ] Baseline behavior validated (e.g., HMR, mobile viewport)
- [ ] Performance budgets captured; initial metrics within targets
- [ ] Documentation updated and consistent (README.md, DESIGN.md, .github/copilot-instructions.md)
- [ ] Planning artifacts updated (project-plan.md, issues-checklist.md)
- [ ] Epic acceptance criteria met; linked feature issues closed

## Labels

`epic`, `priority-high`, `value-high`, `frontend`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

L

## References

- Epic PRD: (docs/ways-of-work/plan/urgency-state-rendering/epic.md)
- Architecture: (docs/ways-of-work/plan/urgency-state-rendering/arch.md)
- Stitch Visual Source (mandatory UI reference): (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - PRD: (docs/ways-of-work/plan/urgency-state-rendering/epic.md)
  - Implementation Plan: (not found in docs/ways-of-work/plan/urgency-state-rendering)
  - Project Plan: (not found in docs/ways-of-work/plan/urgency-state-rendering)
  - Issues Checklist: (not found in docs/ways-of-work/plan/urgency-state-rendering)
- Planning prompts:
  - Implementation plan: .github/prompts/breakdown-feature-implementation.prompt.md
  - Project planning: .github/prompts/breakdown-plan.prompt.md