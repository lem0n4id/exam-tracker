# Handoff Template — Exam Tracker Cycle Release

> **Instructions:** Copy this template into the body of every cycle release PR.  
> Complete every field before requesting reviewer approval.  
> Incomplete templates block the review gate — see `docs/release/playbook.md § Phase 4`.

---

## Release Metadata

| Field | Value |
|-------|-------|
| **Cycle** | YYYY-MM (e.g. `2026-05`) |
| **PR number** | # |
| **Maintainer** | @username |
| **Date prepared** | YYYY-MM-DD |
| **Build commit SHA** | (git short SHA) |
| **Preview URL** | http://localhost:4321 (during review) |
| **Live URL** | https://… (after merge) |

---

## Data Update Summary

| Field | Previous value | New value |
|-------|---------------|-----------|
| Exam count | | |
| Date range (earliest → latest) | | |
| Changed subjects (list names) | | |
| Removed subjects | | |
| Added subjects | | |

> Record the `EXAMS` array size and any structural changes made to `src/data/exams.ts`.

---

## Pre-Release Checklist Evidence

### Phase 1 — Pre-Check

- [ ] Latest `main` pulled; no merge conflicts
- [ ] `npm install` completed without errors
- [ ] Node `>=18.14.1` confirmed (`node -v` output: ______)
- [ ] Previous QA run report exists at `docs/qa/runs/`

### Phase 2 — Data Update

- [ ] `examDateISO` updated for all exams
- [ ] `examDateDisplay` is consistent with `examDateISO` for every record
- [ ] `accentState` set to expected urgency band at deployment time
- [ ] `subjectName` updated where applicable
- [ ] `DEVELOPMENT.md` manual data validation checklist completed without errors
- [ ] Data change committed in isolation (commit SHA: ______)

### Phase 3 — Verify

- [ ] `npm run build` passes — exit code 0 (no TS/build errors)
- [ ] `npm run preview` running — page visible at `http://localhost:4321`

#### Visual Parity Gate *(must reference Stitch baseline)*

> **Stitch reference:** `stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`  
> Open side-by-side with the local preview to verify each item.

| Check ID | Item | Result (PASS / FAIL) | Notes |
|----------|------|---------------------|-------|
| VP-1 | Shell — background, fonts, page title | | |
| VP-2 | Top Bar — layout, hard shadow, responsive nav | | |
| VP-3 | Date Anchor — hydration, format | | |
| VP-4 | FAR state card vs. Stitch reference | | |
| VP-4 | APPROACHING state card vs. Stitch Card 3 (Stochastic) | | |
| VP-4 | CRITICAL state card vs. Stitch Card 1 (Thermodynamics) | | |
| VP-4 | LAST 24 HOURS state card vs. Stitch Card 2 (Quantum) | | |
| VP-4 | TODAY state card vs. Stitch Card 4 (Linear Algebra) | | |
| VP-4 | MISSED state card vs. Stitch Card 5 (Calculus III) | | |
| VP-5 | Footer — NO_EXCUSES heading, microcopy | | |
| VP-5 | Mobile Bottom Nav — icons, active state, tap interaction | | |
| VP-6 | Responsive 320 px — no overflow | | |
| VP-6 | Responsive 375 px — no overflow | | |
| VP-6 | Responsive 768 px — desktop nav visible | | |
| VP-6 | Responsive 1280 px — layout correct | | |

**Gate result:** All VP checks PASS? — YES / NO

If NO, list blockers below and do not proceed to Phase 4 until resolved.

#### QA Run Report

- [ ] Full QA run completed using `docs/qa/visual-regression-responsive-qa.md`
- QA run report path: `docs/qa/runs/YYYY-MM-DD-cycle-release.md`
- Report attached to this PR: YES / NO

---

## Known Risks and Mitigations

> List any risks identified during this release cycle. If none, write "None identified."

| Risk | Severity (High / Med / Low) | Mitigation taken |
|------|-----------------------------|-----------------|
| | | |

---

## Release Notes

> Summarize what changed in this cycle for any future maintainer reading the PR history.

### Exam Data Changes

<!-- e.g. "Updated all exam dates to May 2026 cycle. Added Discrete Maths. Removed Networks." -->

### UI / Component Changes

<!-- e.g. "No component changes." or list any fixes/changes merged in this PR. -->

### Dependency Changes

<!-- e.g. "No dependency changes." or describe updates. -->

---

## Sign-Off

### Approval Criteria

The reviewer should approve this PR **only** when all of the following are satisfied:

- [ ] All Phase 1–3 checklist items above are checked
- [ ] All VP visual parity checks are **PASS**
- [ ] QA run report is attached to this PR
- [ ] No open blocking issues remain
- [ ] Known risks are documented (or explicitly noted as "None")

### Rollback Plan

If the live deployment is found to be broken after merge:

1. Revert the merge commit: `git revert -m 1 <merge-SHA>`
2. Open a new PR with the revert and merge immediately
3. Redeploy `main` at the pre-release SHA via the hosting dashboard
4. Document root cause and corrective action in `docs/qa/runs/` and on the closed PR

> Full rollback steps: `docs/release/playbook.md → Rollback Guidance`

### Approvals

| Role | GitHub username | Approved | Date |
|------|----------------|----------|------|
| Maintainer (author) | @ | *(author — no approval needed)* | |
| Reviewer | @ | [ ] | |

---

*This template is defined in `docs/release/handoff-template.md`.*  
*Playbook: `docs/release/playbook.md`.*
