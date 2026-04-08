I’ll draft a complete Epic issue body for "Countdown Logic Engine" that you can paste directly into a GitHub issue.

# Epic: Countdown Logic Engine

## Epic Description

Define and implement deterministic client-side countdown and state logic using hardcoded exam data and PRD threshold rules.

## Business Value

- Primary Goal: Ensure countdown and D-state outputs are correct and stable for user trust and urgency signaling.
- Success Metrics (KPIs):
  - 100% threshold rule coverage in verification checklist
  - 0 known D-day boundary logic defects before release
  - Countdown updates every second with stable formatting
  - Exam cycle update can be completed by maintainer in under 10 minutes
- User Impact:
  - Users can reliably prioritize study based on correct countdown signals.
  - Maintainers can update exam cycles with minimal risk.

## Epic Acceptance Criteria

- [ ] Hardcoded exam data contract is defined and documented.
- [ ] Countdown engine computes days, hours, minutes, seconds.
- [ ] State evaluator supports far, approaching, critical, last24, today, missed.
- [ ] Today/missed edge handling follows PRD rules.
- [ ] State output is consumable by rendering layer.
- [ ] Per-second updates run without visible instability.
- [ ] Threshold boundaries are tested and documented.
- [ ] UI-facing output validation references Stitch visual source where rendering is affected.
- [ ] No backend or remote data dependencies are introduced.
- [ ] Update workflow for new exam cycle is documented.

## Features in this Epic

- [ ] Feature: Exam Data Contract
  - Docs: docs/ways-of-work/plan/countdown-logic-engine/exam-data-contract
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md
- [ ] Feature: Countdown and State Transition Engine
  - Docs: docs/ways-of-work/plan/countdown-logic-engine/countdown-state-transition-engine
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md

## Definition of Done

- [ ] All features completed and verified (dev, build, preview)
- [ ] Baseline behavior validated (e.g., HMR, mobile viewport)
- [ ] Performance budgets captured; initial metrics within targets
- [ ] Documentation updated and consistent (README.md, DESIGN.md, .github/copilot-instructions.md)
- [ ] Planning artifacts updated (project-plan.md, issues-checklist.md)
- [ ] Epic acceptance criteria met; linked feature issues closed

## Labels

`epic`, `priority-high`, `value-high`, `logic`

## Milestone

Exam Tracker v1 Deadline Machine

## Estimate

M

## References

- Epic PRD: (docs/ways-of-work/plan/countdown-logic-engine/epic.md)
- Architecture: (docs/ways-of-work/plan/countdown-logic-engine/arch.md)
- Stitch Visual Source (mandatory UI reference when logic impacts UI state): (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - PRD: (docs/ways-of-work/plan/countdown-logic-engine/epic.md)
  - Implementation Plan: (not found in docs/ways-of-work/plan/countdown-logic-engine)
  - Project Plan: (not found in docs/ways-of-work/plan/countdown-logic-engine)
  - Issues Checklist: (not found in docs/ways-of-work/plan/countdown-logic-engine)
- Planning prompts:
  - Implementation plan: .github/prompts/breakdown-feature-implementation.prompt.md
  - Project planning: .github/prompts/breakdown-plan.prompt.md