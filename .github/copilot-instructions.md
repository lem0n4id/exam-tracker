# Project Guidelines

## Code Style
- Preserve visual parity with [stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html](../stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html).
- Use a mobile-first layout and keep the page single-screen-flow (top bar, date anchor, exam cards, footer, bottom nav).
- Keep the neo-brutalist hard-edge system: no rounded corners, no gradients, no blur, no soft shadows.
- Use Space Grotesk for display/body and a monospace font (JetBrains Mono) for countdown values.
- Keep state transitions sharp and mechanical; avoid soft easing.
- Use design tokens from [stitch/2944944676816621264/asset-stub-assets-bec2fc49ba174badb530b03beed841d7-1775672181374/design-system.json](../stitch/2944944676816621264/asset-stub-assets-bec2fc49ba174badb530b03beed841d7-1775672181374/design-system.json) rather than ad hoc colors.

## Architecture
- This project is a static exam countdown page (no backend, no auth, no persistence).
- Treat exam data as hardcoded per deployment cycle.
- Keep countdown logic client-side and simple.
- Prioritize reusable page sections/components once implementation files are added.

## Build and Test
- The repository currently has no package manifest or runnable scripts.
- Before running build/test commands, check whether package scripts exist.
- If Astro tooling is scaffolded later, prefer standard commands: `npm run dev`, `npm run build`, `npm run preview`.

## Conventions
- Preserve urgency state behavior and labels: FAR, APPROACHING, CRITICAL, LAST 24 HOURS, TODAY, MISSED.
- Preserve key content voice and labels used in the reference UI (for example DEADLINE_PROTOCOL and NO_EXCUSES) unless explicitly requested to change.
- Keep information density minimal in exam cards: subject, exam date, countdown/status.
- Use thick borders and hard offset shadows for emphasis, matching the design language.

## References
- Product context: [README.md](../README.md)
- Design system narrative: [DESIGN.md](../DESIGN.md)
- Product requirements: [PRD.md](../PRD.md)
- Stitch design notes: [stitch/2944944676816621264/asset-stub-assets-bec2fc49ba174badb530b03beed841d7-1775672181374/design-system.md](../stitch/2944944676816621264/asset-stub-assets-bec2fc49ba174badb530b03beed841d7-1775672181374/design-system.md)
- Visual source of truth: [stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html](../stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html)
