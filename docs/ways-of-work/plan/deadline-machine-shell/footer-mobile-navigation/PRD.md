# Feature Name

Footer and Mobile Navigation

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/deadline-machine-shell/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/deadline-machine-shell/arch.md

## Goal

### Problem
The bottom section and mobile nav complete the page frame, but they often regress first in responsive implementations due to fixed positioning and spacing edge cases. If footer and bottom nav are not specified tightly, users can lose readability or see content overlap. This feature ensures the lower shell is explicit, testable, and aligned with the visual language.

### Solution
Implement footer messaging and fixed mobile bottom navigation with required labels, active tile styling, and non-overlapping layout behavior.

### Impact
Users receive a complete command-console-like layout and predictable mobile navigation experience, while maintainers gain clear acceptance criteria for bottom-section behavior.

## User Personas

- Student using one-handed mobile navigation.
- Student scrolling through cards to check status and urgency.

## User Stories

- As a student, I want NO_EXCUSES footer messaging so that urgency remains explicit.
- As a student on mobile, I want clear bottom navigation actions so that I can quickly switch context.
- As a student, I want content spacing that avoids nav overlap so that card data remains readable.

## Requirements

### Functional Requirements

- Render footer with thick top divider, NO_EXCUSES heading, and supporting microcopy.
- Render fixed mobile bottom nav with GRID, ADD, STATS, META items.
- Show active tile with pink background and black icon/text treatment.
- Hide bottom nav at md and above.
- Add bottom content spacing to prevent overlap on small screens.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source for footer and mobile nav UI implementation.

### Non-Functional Requirements

- Preserve hard-edge shape and hard-shadow language.
- Keep interactions sharp/mechanical, no soft easing.
- Ensure touch-target usability on mobile.

## Acceptance Criteria

- [ ] Footer block copy and hierarchy match PRD.
- [ ] Bottom nav is fixed and visible only below md breakpoint.
- [ ] All four nav labels render with correct active/inactive styling.
- [ ] Main content has sufficient bottom spacing to avoid overlap.
- [ ] UI implementation and review explicitly reference Stitch asset Exam-Tracker-Deadline-Machine.html.

## Out of Scope

- Top app bar implementation.
- Exam card state visuals.
- Countdown computation.
