# Release Playbook — Exam Tracker Cycle Deployment

**Estimated execution time:** ≤ 30 minutes for a routine cycle update.

**Visual source of truth (required for all UI parity gates):**
`stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`

---

## Overview

This playbook defines the sequential phases for every static cycle deployment of Exam Tracker.
Complete each phase in order. Do not advance to the next phase until the current phase is signed
off. A failed gate is a **release blocker** — see [Rollback Guidance](#rollback-guidance).

```
Phase 1 — Pre-Check
      ↓
Phase 2 — Data Update
      ↓
Phase 3 — Verify (Build + Visual Parity Gate)
      ↓
Phase 4 — Approve
      ↓
Phase 5 — Publish
```

---

## Phase 1 — Pre-Check

> **Goal:** Confirm the working environment is clean and all dependencies are satisfied before
> touching any source files.

| Step | Action | Pass criteria |
|------|--------|---------------|
| 1.1 | Pull the latest `main` branch: `git pull origin main` | No merge conflicts; local repo is up-to-date |
| 1.2 | Install or update dependencies: `npm install` | Zero errors; `node_modules` is up-to-date |
| 1.3 | Confirm Node version: `node -v` | `>=18.14.1` |
| 1.4 | Confirm clean working tree: `git status` | No uncommitted changes on main |
| 1.5 | Collect QA outputs from the previous cycle (visual regression + responsive QA reports in `docs/qa/runs/`) | At least one completed QA run report exists |

---

## Phase 2 — Data Update

> **Goal:** Update `src/data/exams.ts` with the new cycle's exam dates and urgency states.

| Step | Action | Pass criteria |
|------|--------|---------------|
| 2.1 | Open `src/data/exams.ts` | File opens without errors |
| 2.2 | Update `examDateISO` (`YYYY-MM-DD`) for every exam in the `EXAMS` array | All dates are valid calendar dates in the new cycle |
| 2.3 | Update `examDateDisplay` (`DD-MM-YYYY`) to match each `examDateISO` | Display and ISO fields are consistent for every record |
| 2.4 | Update `accentState` to reflect the expected urgency band at deployment time | Values are one of: `far`, `approaching`, `critical`, `last24`, `today`, `missed` |
| 2.5 | Update `subjectName` if the exam subject has changed | Non-empty string for every record |
| 2.6 | Run the DEVELOPMENT.md manual data validation checklist | All checklist items pass; `validateAllExams()` returns no errors |
| 2.7 | Commit the data change: `git commit -m "data: update exams for cycle YYYY-MM"` | Commit is clean; only `src/data/exams.ts` changed |

**Reference:** See `DEVELOPMENT.md → Exam Data Contract → Validation Checklist` for the full
field-by-field checklist.

---

## Phase 3 — Verify

> **Goal:** Confirm the build is green and the rendered page matches the Stitch visual baseline.

### 3.1 Build Verification

| Step | Action | Pass criteria |
|------|--------|---------------|
| 3.1.1 | Run `npm run build` | Exit code 0; zero TypeScript/build errors |
| 3.1.2 | Inspect `dist/` output | `dist/index.html` exists; asset files present |
| 3.1.3 | Run `npm run preview` | Dev server starts at `http://localhost:4321` |

### 3.2 Visual Parity Gate *(Stitch reference required)*

> **⚠ All UI checks in this section must be performed side-by-side against the Stitch reference:**
> `stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html`
>
> Open the Stitch HTML in a separate browser tab alongside the local preview at `http://localhost:4321`.

Run the full visual parity and responsive QA workflow defined in
`docs/qa/visual-regression-responsive-qa.md`. At minimum, confirm:

| Check ID | Item | Stitch reference | Result |
|----------|------|-----------------|--------|
| VP-1 | Page background and font load | Stitch §Shell checks | |
| VP-2 | Top Bar layout and hard shadow | Stitch `TB-*` checks | |
| VP-3 | Date Anchor hydration | Stitch `DA-*` checks | |
| VP-4 | Each urgency state renders correctly (FAR → MISSED) | Stitch `§2.5` per-state checks | |
| VP-5 | Footer and bottom nav | Stitch `FT-*`, `N-*` checks | |
| VP-6 | Responsive: 320 px, 375 px, 768 px, 1280 px — no overflow | Stitch responsive matrix §3 | |

**Gate rule:** All VP-1 through VP-6 checks must be **PASS** before proceeding to Phase 4.
Any **FAIL** is a release blocker — follow [Rollback Guidance](#rollback-guidance).

### 3.3 Evidence Capture

| Step | Action |
|------|--------|
| 3.3.1 | Complete and save a QA run report using the template in `docs/qa/visual-regression-responsive-qa.md §6` |
| 3.3.2 | Save the report to `docs/qa/runs/YYYY-MM-DD-cycle-release.md` |
| 3.3.3 | Attach the report to the release PR |

---

## Phase 4 — Approve

> **Goal:** Obtain explicit sign-off from the designated reviewer before publishing.

### Sign-Off Criteria

All of the following must be confirmed before the reviewer approves the release:

- [ ] Phase 1 (Pre-Check) completed without issues
- [ ] Phase 2 (Data Update) committed and validated
- [ ] Phase 3 build is green (`npm run build` exits 0)
- [ ] Visual parity gate (VP-1 through VP-6) all **PASS**
- [ ] QA run report exists in `docs/qa/runs/` and is attached to the PR
- [ ] No open blocking issues on the PR
- [ ] PR title follows convention: `release: cycle YYYY-MM`

### Approval Action

| Role | Action |
|------|--------|
| Maintainer | Open PR against `main`; paste the completed handoff template (see `docs/release/handoff-template.md`) in the PR body |
| Reviewer | Review PR diff + QA report; approve PR only when all sign-off criteria above are checked |

---

## Phase 5 — Publish

> **Goal:** Merge the approved PR and confirm the deployment is live.

| Step | Action | Pass criteria |
|------|--------|---------------|
| 5.1 | Merge the approved PR into `main` (squash or merge commit — team preference) | PR merged; build passes on `main` |
| 5.2 | Confirm the static host redeploys (e.g., Vercel/Netlify build triggered) | Build log shows no errors; deployment URL is live |
| 5.3 | Open the live URL and perform a smoke check: page loads, countdowns tick, urgency states match expected | Live page matches Phase 3 verified preview |
| 5.4 | Record the deployed commit SHA and live URL in the handoff template | Handoff template is complete |
| 5.5 | Tag the release: `git tag release/YYYY-MM && git push origin release/YYYY-MM` | Tag visible on GitHub Releases |

---

## Rollback Guidance

Trigger rollback if any of the following occur:

- `npm run build` fails and cannot be fixed within the release window.
- One or more Visual Parity Gate checks (VP-*) fail and the fix is not straightforward.
- The live deployment produces a blank page, broken layout, or stale exam data after merge.

### Rollback Steps

| Step | Action |
|------|--------|
| R-1 | **Do not merge** the PR if failure is caught in Phase 3 or 4. Close the PR with a rollback note. |
| R-2 | If failure is caught post-merge (Phase 5): revert the merge commit — `git revert -m 1 <merge-SHA>` — and open a new PR with the revert. |
| R-3 | Redeploy `main` at the pre-release commit SHA via the hosting platform dashboard. |
| R-4 | Confirm the previous cycle's page is live and serving correctly. |
| R-5 | Document the failure, root cause, and corrective action in the `docs/qa/runs/` report and on the closed PR. |
| R-6 | Fix the root cause, re-run from Phase 1. |

---

## Quick Reference Checklist

Copy this checklist into the PR body or use `docs/release/handoff-template.md`.

```
### Release Checklist

**Phase 1 — Pre-Check**
- [ ] Latest main pulled; working tree clean
- [ ] Dependencies installed (`npm install`)
- [ ] Node >=18.14.1 confirmed
- [ ] Previous QA run report exists

**Phase 2 — Data Update**
- [ ] `examDateISO` updated for all exams
- [ ] `examDateDisplay` consistent with ISO dates
- [ ] `accentState` set correctly
- [ ] `subjectName` updated if needed
- [ ] DEVELOPMENT.md validation checklist passed
- [ ] Data change committed

**Phase 3 — Verify**
- [ ] `npm run build` passes (exit 0)
- [ ] `npm run preview` running at localhost:4321
- [ ] Visual parity gate VP-1 PASS (Shell)
- [ ] Visual parity gate VP-2 PASS (Top Bar)
- [ ] Visual parity gate VP-3 PASS (Date Anchor)
- [ ] Visual parity gate VP-4 PASS (All urgency states vs. Stitch baseline)
- [ ] Visual parity gate VP-5 PASS (Footer + Bottom Nav)
- [ ] Visual parity gate VP-6 PASS (Responsive matrix)
- [ ] QA run report saved to docs/qa/runs/

**Phase 4 — Approve**
- [ ] Handoff template completed in PR body
- [ ] Reviewer approved PR

**Phase 5 — Publish**
- [ ] PR merged to main
- [ ] Live deployment confirmed
- [ ] Smoke check passed
- [ ] Release tag created
```
