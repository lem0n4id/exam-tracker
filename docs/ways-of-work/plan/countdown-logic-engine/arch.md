# Epic Architecture Overview

This epic provides deterministic countdown and state transition logic for all exam cards. UI-facing output from this epic must still be validated against stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html wherever countdown output affects visual treatment.

## System Architecture Diagram

```mermaid
graph TD
    subgraph User Layer
      U1[Browser User]
    end

    subgraph Application Layer
      A1[Countdown Controller]
      A2[Per-Card Countdown Instance]
      A3[State Computation Adapter]
    end

    subgraph Service Layer
      S1[Time Difference Calculator]
      S2[State Threshold Evaluator]
      S3[Display Formatting Service]
    end

    subgraph Data Layer
      D1[Hardcoded Exam Data Array]
      D2[Current Local Datetime]
      D3[State Rules from PRD]
      D4[Stitch Visual Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Static JS Payload]
      I2[One-Second Tick Interval]
    end

    U1 --> A1
    A1 --> A2
    A2 --> S1
    S1 --> D2
    A2 --> S2
    S2 --> D3
    A2 --> S3
    S3 --> A3
    A3 --> D4
    A1 --> D1
    A1 --> I1
    I1 --> I2
```

## High-Level Features and Technical Enablers

### Features

- Exam Data Contract
- Countdown and State Transition Engine

### Technical Enablers

- Typed exam schema and validation rules.
- Centralized state threshold constants.
- Deterministic formatter for displayed countdown segments.

## Technology Stack

- Client-side JavaScript module for countdown/state.
- Astro page integration entrypoint.
- Tailwind/HTML rendering layer consumer.

## Technical Value

High. Correct logic protects trust in all urgency states and labels.

## T-Shirt Size Estimate

M