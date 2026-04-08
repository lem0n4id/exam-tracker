# Goal

Define and enforce a clear hardcoded exam data schema that can be safely edited per cycle and consumed by the countdown/state engine. Where schema values drive UI states, verification should reference stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Requirements

- Document data shape and accepted value ranges.
- Define lightweight validation procedure for release checks.
- Provide canonical sample records from PRD reference list.
- Align state-related values with rendering expectations.

## Technical Considerations

### System Architecture Overview

```mermaid
graph TD
    subgraph Frontend Layer
      F1[Card Renderer Consumer]
    end

    subgraph API Layer
      A1[None - Static Data]
    end

    subgraph Business Logic Layer
      B1[Schema Validator]
      B2[State Field Normalizer]
    end

    subgraph Data Layer
      D1[Hardcoded Exam Data]
      D2[Contract Specification]
      D3[Stitch Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Static Source Files]
      I2[Build-Time Checks]
    end

    D1 --> B1
    B1 --> B2
    B2 --> F1
    B2 --> D3
    D2 --> B1
    D1 --> I1
    I1 --> I2
```

### Database Schema Design

No database required.

### API Design

No API endpoints.

### Frontend Architecture

#### Component Hierarchy Documentation

```text
Data Module
└── ExamData Contract
    └── Consumed by Card Rendering and Countdown Logic
```

### Security Performance

- Validation should run in lightweight pre-release checks.
- Keep schema checks deterministic and human-auditable.
