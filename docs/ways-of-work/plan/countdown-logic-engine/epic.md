# Epic Name

Countdown Logic Engine

## Goal

### Problem

Countdown behavior and state thresholds are central to correctness, but implementation details are not yet split into tractable work. Without clear contracts for exam data and deterministic state calculation, teams can accidentally ship incorrect D-day labels, drifting timers, or unstable day-boundary behavior.

### Solution

Define a static exam data contract and build a deterministic client-side countdown and state transition engine aligned to PRD threshold rules.

### Impact

Reliable countdown output strengthens user trust and keeps visual urgency meaningful. A predictable engine also simplifies QA and future exam-cycle updates.

## User Personas

- Student relying on exact D-day labels for short-term revision prioritization.
- Maintainer who updates hardcoded exam dates between deployment cycles.

## High-Level User Journeys

- Page loads and computes all card states correctly from hardcoded data.
- Timer updates every second without drift or jarring UI jumps.
- State transitions at boundaries behave consistently across local time zones.

## Business Requirements

### Functional Requirements

- Provide a normalized hardcoded exam data shape with required fields.
- Calculate countdown values in days, hours, minutes, seconds.
- Determine state from threshold logic (far, approaching, critical, last24, today, missed).
- Expose computed state for rendering layer consumption.
- Where logic output affects visible UI states or labels, validate outcomes against Stitch asset Exam-Tracker-Deadline-Machine.html.

### Non-Functional Requirements

- Keep implementation client-side only and framework-light.
- Preserve deterministic output under frequent re-renders.
- Avoid unnecessary complexity and preserve maintainability.

## Success Metrics

- 100% rule coverage for state thresholds.
- 0 known boundary defects at D-0, D-1, D-2, D-5 transitions.
- Countdown updates every second with stable formatting.
- Hardcoded cycle update can be done in under 10 minutes by maintainer.

## Out of Scope

- Remote data fetching.
- User-level timezone preferences storage.

## Business Value

High. Correct countdown logic is foundational to product credibility and to all urgency-driven UI states.