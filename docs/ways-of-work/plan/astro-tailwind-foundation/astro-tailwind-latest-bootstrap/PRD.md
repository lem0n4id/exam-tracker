# Feature Name

Astro Tailwind Latest Bootstrap

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/astro-tailwind-foundation/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/astro-tailwind-foundation/arch.md

## Goal

### Problem

The implementation needs a clear, modern Astro plus Tailwind baseline with explicit technical details, but current planning documents focus on product behavior rather than first-step scaffolding and environment guardrails.

### Solution

Deliver a single bootstrap feature that codifies scaffold setup, commands, architecture layout, countdown integration conventions, and operational pitfalls.

### Impact

Teams can implement quickly with fewer setup regressions and preserve the required exam-schedule and countdown behavior contract.

## User Personas

- Developer bootstrapping and maintaining the Astro project.
- Reviewer validating technical setup readiness before UI implementation.

## User Stories

- As a developer, I want a standard Astro and Tailwind baseline so that setup is fast and predictable.
- As a maintainer, I want command and environment details documented so that builds run consistently.
- As a reviewer, I want countdown integration conventions preserved so that behavior remains correct.

## Requirements

### Functional Requirements

- Scaffold using latest stable Astro and latest stable Tailwind with official Astro guidance.
- Preserve static functional model: exam schedule list plus live countdown per exam.
- Define top banner date rendering in dd-mm-yyyy format.
- Keep src/components/Schedule.astro as the functional core for exam dates and countdown bindings.
- Keep exam text date and timer config in sync per subject (label, date string, selector, simplyCountdown values).
- Keep public/simplyCountdown.min.js vendor integration and do not replace library.
- Define architecture conventions:
  - src/pages for page composition
  - src/components for reusable UI
  - src/styles for styles
  - public for static/browser assets with absolute paths
- Preserve Astro conventions: frontmatter first, then markup, then local style/script blocks.
- Keep external browser-script pattern with is:inline where needed.
- Preserve CSS conventions with clamp, CSS variables, and dark-mode media query where used.
- Define build/run commands:
  - npm install
  - npm run dev (or npm start)
  - npm run build
  - npm run preview
- Document that no test script is assumed in package.json unless explicitly added.
- Set Node.js floor to >=18.14.1.
- Document environment notes:
  - pnpm .npmrc shamefully-hoist=true
  - StackBlitz .stackblitzrc ENABLE_CJS_IMPORTS=true and npm start
- Keep Stitch asset Exam-Tracker-Deadline-Machine.html as visual source for UI component implementation.

### Non-Functional Requirements

- Setup documentation must be concise and executable.
- Scaffold must stay static-first and avoid backend coupling.
- Tooling choices should minimize friction in local and cloud IDEs.

## Acceptance Criteria

- [ ] Astro and Tailwind latest setup path is documented and implementation-ready.
- [ ] Required project architecture folders and key files are defined.
- [ ] Schedule and countdown coupling conventions are explicitly documented.
- [ ] Command workflow and Node engine requirements are explicitly documented.
- [ ] pnpm and StackBlitz caveats are explicitly documented.
- [ ] simplyCountdown integration from public is preserved and not replaced.
- [ ] Stitch visual-source requirement is present for UI implementation.

## Out of Scope

- New visual-state redesign.
- Backend services, auth, persistence, or external APIs.
