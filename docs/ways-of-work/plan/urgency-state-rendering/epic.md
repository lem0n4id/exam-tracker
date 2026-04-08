# Epic Name

Urgency State Rendering

## Goal

### Problem

The app’s core emotional effect depends on visual escalation by state, but state-specific card treatments are currently only described in the PRD. Without a dedicated epic to formalize state rendering, the implementation risks inconsistent badge language, wrong accent mapping, and diluted urgency intensity. That weakens the product’s primary purpose: pressure and focus.

### Solution

Define and implement a complete urgency card rendering system that covers active countdown states and non-countdown override states while preserving strict visual language.

### Impact

Users can infer urgency instantly from visual treatment alone, improving rapid comprehension and preserving the intended deadline pressure model.

## User Personas

- Student prioritizing near-term exams under time pressure.
- Student scanning multiple cards quickly for next action.

## High-Level User Journeys

- Scan all cards and identify D-1 and D-2 exams in under a few seconds.
- Distinguish active countdown cards from TODAY and MISSED cards immediately.
- Use the state treatment to decide which subject to review next.

## Business Requirements

### Functional Requirements

- Render D-5, D-2, and D-1 active cards with correct badges and accents.
- Render TODAY card with countdown replacement content.
- Render MISSED card in de-emphasized non-animated style.
- Preserve required microcopy for urgency labels and card actions.
- For all urgency-state UI component work, use Stitch asset Exam-Tracker-Deadline-Machine.html as mandatory visual source.

### Non-Functional Requirements

- No soft transitions; state changes are crisp and mechanical.
- Visual states must remain legible under small mobile widths.
- Animation must be limited to approved urgency emphasis behavior.

## Success Metrics

- 100% state label accuracy against PRD.
- 100% accent mapping correctness by urgency state.
- <5% QA defect rate for card-state visual mismatch.
- 0 animation activity in MISSED cards.

## Out of Scope

- Data authoring workflow.
- Backend-driven state computation.

## Business Value

High. This epic directly delivers the core differentiator of the product: urgency communication through brutalist state rendering.