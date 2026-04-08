# Goal

Implement the active urgency card family (D-5, D-2, D-1) as reusable state-aware card variants that preserve strict visual hierarchy and pressure escalation. All UI component decisions must be validated against stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html.

## Requirements

- Create variant card primitives for APPROACHING, CRITICAL, and LAST 24 HOURS.
- Implement per-variant badge, microcopy, border/shadow accent, and timer layout.
- Add variant-specific sections (progress rail, review action, segmented urgency block) as required.
- Preserve order and naming conventions from PRD.

## Technical Considerations

### System Architecture Overview

```mermaid
graph TD
    subgraph Frontend Layer
      F1[ExamCard Base]
      F2[Approaching Variant]
      F3[Critical Variant]
      F4[Last24 Variant]
    end

    subgraph API Layer
      A1[None - Static App]
    end

    subgraph Business Logic Layer
      B1[State-to-Variant Mapper]
      B2[Urgency Copy Mapper]
    end

    subgraph Data Layer
      D1[Computed State Input]
      D2[Token Definitions]
      D3[Stitch Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Static Bundle]
      I2[Browser Runtime]
    end

    F1 --> F2
    F1 --> F3
    F1 --> F4
    F2 --> B2
    F3 --> B2
    F4 --> B2
    B1 --> D1
    F2 --> D2
    F3 --> D2
    F4 --> D2
    F2 --> D3
    F3 --> D3
    F4 --> D3
    F1 --> I1
    I1 --> I2
```

### Database Schema Design

No database required.

### API Design

No API endpoints.

### Frontend Architecture

#### Component Hierarchy Documentation

```text
Exam Cards List
├── Last24Card (D-1)
├── CriticalCard (D-2)
└── ApproachingCard (D-5)
```

### Security Performance

- Keep variant switching class-based and lightweight.
- Avoid expensive layout reflow from unnecessary animations.
