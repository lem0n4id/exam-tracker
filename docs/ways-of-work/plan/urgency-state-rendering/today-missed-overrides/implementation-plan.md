# Goal

Deliver robust TODAY and MISSED override rendering paths that intentionally diverge from active countdown card behavior while preserving visual language consistency. All UI output must be cross-checked against stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Requirements

- Build TODAY override card template and content slots.
- Build MISSED override card template with muted static treatment.
- Gate countdown rendering off for both override states as required.
- Ensure override templates compose cleanly within main card stack.

## Technical Considerations

### System Architecture Overview

```mermaid
graph TD
    subgraph Frontend Layer
      F1[Card Router]
      F2[TodayCard Template]
      F3[MissedCard Template]
    end

    subgraph API Layer
      A1[None - Static App]
    end

    subgraph Business Logic Layer
      B1[Override State Detector]
      B2[Countdown Suppression Rule]
    end

    subgraph Data Layer
      D1[Computed Card State]
      D2[Copy and Label Constants]
      D3[Stitch Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Static Bundle]
      I2[Browser Runtime]
    end

    F1 --> B1
    B1 --> D1
    F1 --> F2
    F1 --> F3
    F2 --> B2
    F3 --> B2
    F2 --> D2
    F3 --> D2
    F2 --> D3
    F3 --> D3
    F1 --> I1
    I1 --> I2
```

### Database Schema Design

No database changes.

### API Design

No APIs required.

### Frontend Architecture

#### Component Hierarchy Documentation

```text
Exam Cards List
├── TodayCard Override
└── MissedCard Override
```

### Security Performance

- Disable unnecessary timer updates for MISSED state to avoid wasted work.
- Keep override routing branch simple and deterministic.
