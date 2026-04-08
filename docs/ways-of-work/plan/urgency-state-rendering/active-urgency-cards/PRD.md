# Feature Name

Active Urgency Cards (D-5, D-2, D-1)

## Epic

- Parent Epic PRD: docs/ways-of-work/plan/urgency-state-rendering/epic.md
- Parent Epic Architecture: docs/ways-of-work/plan/urgency-state-rendering/arch.md

## Goal

### Problem
The active urgency cards carry the main countdown pressure experience, but inconsistent treatment across D-5, D-2, and D-1 quickly breaks readability and emotional intensity. Without explicit feature-level requirements, teams can mismatch accents, badge placement, and timer weight.

### Solution
Implement deterministic visual treatments for APPROACHING, CRITICAL, and LAST 24 HOURS cards with the exact hierarchy, badges, and urgency microcopy required by the PRD.

### Impact
Users can identify urgency levels instantly and prioritize study actions based on visually reliable pressure cues.

## User Personas

- Student checking upcoming exams quickly on mobile.
- Student prioritizing what to study next from multiple cards.

## User Stories

- As a student, I want D-1 and D-2 cards to stand out strongly so that I focus on the most urgent exams.
- As a student, I want D-5 cards to appear less severe but clearly active so that I can plan ahead.
- As a student, I want timer blocks and badges to be readable at a glance so that I can act quickly.

## Requirements

### Functional Requirements

- Render LAST 24 HOURS card with error accent, D-1 badge, critical microcopy, and dominant segmented timer panel.
- Render CRITICAL card with primary accent, D-2 badge, high urgency microcopy, timer block, and REVIEW_DATA action.
- Render APPROACHING card with secondary accent, D-5 badge, stable urgency microcopy, and progress rail.
- Preserve required card order and label conventions from PRD.
- Use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source for component structure and styling choices.

### Non-Functional Requirements

- No rounded corners, gradients, blur, or soft shadows.
- Animation must remain sharp and limited to approved urgency behavior.
- Typography hierarchy must preserve timer dominance.

## Acceptance Criteria

- [ ] D-1, D-2, and D-5 cards each render distinct and correct visual treatment.
- [ ] Badge text and urgency microcopy are correct for each state.
- [ ] Accent colors map correctly to state severity.
- [ ] Countdown blocks remain legible on small mobile widths.
- [ ] Visual comparison to Stitch asset Exam-Tracker-Deadline-Machine.html is documented.

## Out of Scope

- TODAY and MISSED override states.
- Countdown threshold computation internals.
