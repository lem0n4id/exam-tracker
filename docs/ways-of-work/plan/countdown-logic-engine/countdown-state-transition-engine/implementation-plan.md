# Goal

Build a deterministic client-side countdown engine that computes display segments and state transitions correctly for every exam card update tick. Whenever logic output drives visible urgency states, verify behavior against stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Requirements

- Implement per-exam countdown computation routine.
- Implement centralized state evaluator with explicit thresholds.
- Add formatter for segmented timer display.
- Handle day-boundary and same-day edge conditions.
- Expose a clean output contract for rendering layer.

## Technical Considerations

### System Architecture Overview

```mermaid
graph TD
    subgraph Frontend Layer
      F1[Countdown Tick Controller]
      F2[Card State Output Adapter]
    end

    subgraph API Layer
      A1[None - Client Only]
    end

    subgraph Business Logic Layer
      B1[Time Difference Calculator]
      B2[Threshold Evaluator]
      B3[Display Formatter]
    end

    subgraph Data Layer
      D1[Exam Data Contract]
      D2[Current Local Time]
      D3[PRD Threshold Rules]
      D4[Stitch Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Browser Interval Loop]
      I2[Static Build Output]
    end

    F1 --> B1
    B1 --> D1
    B1 --> D2
    F1 --> B2
    B2 --> D3
    F1 --> B3
    B3 --> F2
    F2 --> D4
    F1 --> I1
    F2 --> I2
```

### Database Schema Design

No database.

### API Design

No API endpoints.

### Frontend Architecture

#### Component Hierarchy Documentation

```text
Countdown Engine
├── Tick Loop
├── State Evaluator
└── Output Adapter (consumed by card renderer)
```

### Security Performance

- Keep interval logic lightweight to avoid frame drops.
- Use deterministic helper functions for testability and low regression risk.
