I will draft a complete Feature issue body for "Astro Tailwind Latest Bootstrap" that you can paste directly into a GitHub issue.

# Feature: Astro Tailwind Latest Bootstrap

## Feature Description

Create a first-priority technical bootstrap baseline that captures latest Astro and Tailwind setup details, project structure, command workflow, and countdown integration conventions for this static exam tracker.

## Agent Instructions

This issue is a prompt for an LLM implementation agent. Follow these directives:

- Read and follow implementation-plan.md (see References).
- Reconcile PRD.md, implementation-plan.md, project-plan.md, and issues-checklist.md.
- If conflicts arise, defer to PRD for scope and acceptance criteria.
- Use latest stable Astro and latest stable Tailwind using official Astro guidance at implementation time.
- Preserve simplyCountdown integration from public and do not replace the library.
- Preserve dd-mm-yyyy date display and selector/date synchronization conventions.
- For UI implementation decisions, reference Stitch asset Exam-Tracker-Deadline-Machine.html.
- Implement in small logical commits and open a linked pull request with verification notes.

## Business Value

- Outcome: Reproducible setup baseline that enables downstream feature velocity.
- KPIs / Signals:
  - End-to-end setup under 30 minutes
  - 100 percent required file structure compliance
  - 100 percent command and environment documentation completeness

## Acceptance Criteria

- [ ] Latest Astro and Tailwind setup path is documented and implementation-ready.
- [ ] Required architecture files and folders are defined.
- [ ] Command workflow and Node floor are defined.
- [ ] pnpm and StackBlitz constraints are defined.
- [ ] simplyCountdown integration preservation is explicit.
- [ ] Stitch visual reference requirement is explicit for UI work.

## Subtasks (suggested)

- [ ] Follow implementation-plan.md end-to-end; commit in small chunks; open and link a pull request
- [ ] Verify dev/build/preview command workflow
- [ ] Update docs where required (README and project docs)
- [ ] Cross-check outputs against PRD and project-plan artifacts

## Dependencies

- None
- This feature must execute before downstream implementation epics

## Definition of Done

- [ ] Meets acceptance criteria
- [ ] Dev/build/preview workflow validated
- [ ] Documentation updated and consistent
- [ ] Pull request opened and linked with verification notes
- [ ] Work aligned with PRD, project-plan, and issues-checklist artifacts

## Labels

`feature`, `priority-critical`, `value-high`, `foundation`, `astro-tailwind`

## Milestone

Exam Tracker Foundation First Pass

## Estimate

S

## References

- PRD: (docs/ways-of-work/plan/astro-tailwind-foundation/astro-tailwind-latest-bootstrap/PRD.md)
- Implementation Plan: (docs/ways-of-work/plan/astro-tailwind-foundation/astro-tailwind-latest-bootstrap/implementation-plan.md)
- Project Plan: (docs/ways-of-work/plan/astro-tailwind-foundation/astro-tailwind-latest-bootstrap/project-plan.md)
- Issues Checklist: (docs/ways-of-work/plan/astro-tailwind-foundation/astro-tailwind-latest-bootstrap/issues-checklist.md)
- Stitch Visual Source: (stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
- Astro docs (latest): https://docs.astro.build/llms-full.txt

## Parent

- Epic: Astro Tailwind Foundation (#<add issue number here>)
