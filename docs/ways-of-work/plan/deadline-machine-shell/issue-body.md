I’ll draft a complete Epic issue body for "Deadline Machine Shell" that you can paste directly into a GitHub issue.

# Epic: Deadline Machine Shell

## Epic Description

Deliver the fixed top and bottom shell structure for Exam Tracker, including top app bar, date anchor, footer block, and mobile bottom navigation with strict visual parity against the Stitch reference.

## Business Value

- Primary Goal: Establish stable layout anchors so all countdown cards render in the correct structural frame.
- Success Metrics (KPIs):
  - 0 shell overlap defects on common mobile viewports
  - 100% required labels and copy fidelity for DEADLINE_PROTOCOL and NO_EXCUSES
  - 100% compliance with hard-edge style constraints
  - <5% shell-related QA defect rate during release checks
- User Impact:
  - Users can orient immediately from top bar and date anchor without confusion.
  - Mobile users can navigate quickly with fixed bottom actions and stable touch targets.

## Epic Acceptance Criteria

- [ ] Fixed top app bar matches PRD structure and copy.
- [ ] Date anchor row renders status and current date with required styling.
- [ ] Footer block renders NO_EXCUSES headline and supporting copy.
- [ ] Mobile bottom nav renders four required actions and active state.
- [ ] Main content spacing avoids overlap with fixed bottom nav.
- [ ] Token-driven colors and typography are used for shell sections.
- [ ] No rounded corners, gradients, blur, or soft shadows.
- [ ] Implementation references Stitch visual source for all shell UI components.
- [ ] Responsive behavior aligns with PRD breakpoints.
- [ ] Shell sections are reusable and documented.

## Features in this Epic

- [ ] Feature: Top Bar and Date Anchor
  - Docs: docs/ways-of-work/plan/deadline-machine-shell/topbar-date-anchor
    - PRD.md, implementation-plan.md, project-plan.md, issues-checklist.md
- [ ] Feature: Footer and Mobile Navigation
  - Docs: docs/ways-of-work/plan/deadline-machine-shell/footer-mobile-navigation
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

M

## References

- Epic PRD: (docs/ways-of-work/plan/deadline-machine-shell/epic.md)
- Architecture: (docs/ways-of-work/plan/deadline-machine-shell/arch.md)
- Stitch Visual Source (mandatory UI reference): (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Sibling docs in same directory:
  - PRD: (docs/ways-of-work/plan/deadline-machine-shell/epic.md)
  - Implementation Plan: (not found in docs/ways-of-work/plan/deadline-machine-shell)
  - Project Plan: (not found in docs/ways-of-work/plan/deadline-machine-shell)
  - Issues Checklist: (not found in docs/ways-of-work/plan/deadline-machine-shell)
- Planning prompts:
  - Implementation plan: .github/prompts/breakdown-feature-implementation.prompt.md
  - Project planning: .github/prompts/breakdown-plan.prompt.md