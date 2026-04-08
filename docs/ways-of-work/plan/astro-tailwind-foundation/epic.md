# Epic Name

Astro Tailwind Foundation

## Goal

### Problem

The product PRD defines UI behavior and urgency states, but there is no dedicated implementation-first epic that standardizes project scaffolding, Astro and Tailwind setup, runtime scripts, and technical conventions. Without this foundation, feature teams can diverge on structure, dependency versions, and browser-script integration.

### Solution

Create a single first-priority foundation epic that establishes the latest stable Astro and latest stable Tailwind setup, baseline folder structure, runtime commands, environment constraints, and countdown integration conventions.

### Impact

This epic reduces setup ambiguity, prevents implementation drift, and allows all downstream UI features to execute on a consistent and production-ready baseline.

## User Personas

- Developer implementing the initial app shell and countdown page.
- Maintainer updating exam data and release artifacts each cycle.

## High-Level User Journeys

- Scaffold and run the app locally with a predictable command set.
- Implement page and component files in a consistent structure.
- Integrate simplyCountdown from public assets without replacing the library.
- Build and preview static output with no environment surprises.

## Business Requirements

### Functional Requirements

- Scaffold the app with latest stable Astro and latest stable Tailwind using the official Astro-recommended approach at implementation time.
- Establish baseline structure: src/pages, src/components, src/styles, public.
- Set single route entry at src/pages/index.astro and functional core at src/components/Schedule.astro.
- Preserve dd-mm-yyyy date display convention in schedule and banner content.
- Preserve public/simplyCountdown.min.js integration and class-selector binding pattern.
- Define run commands and expectations: npm install, npm run dev, npm start, npm run build, npm run preview.
- Set Node.js engine floor to >=18.14.1.
- Include environment notes for pnpm hoisting and StackBlitz behavior.
- For UI component implementation on top of this foundation, keep Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source.

### Non-Functional Requirements

- Keep architecture static-first with client-side countdown logic only.
- Keep setup reproducible across local and cloud browser IDE environments.
- Avoid introducing unnecessary dependencies beyond scaffold requirements.

## Success Metrics

- Bootstrap can be executed end-to-end in under 30 minutes.
- 100 percent of required folders and entry files are present and documented.
- 100 percent of command table items are valid and runnable in expected environments.
- 0 replacement of simplyCountdown integration.

## Out of Scope

- New urgency-state design changes.
- Backend, auth, persistence, or external data APIs.

## Business Value

High. This epic is a critical-path technical prerequisite and is scheduled to execute first before all other feature implementation work.
