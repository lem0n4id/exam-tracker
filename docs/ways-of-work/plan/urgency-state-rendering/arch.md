# Epic Architecture Overview

This epic defines the visual state-rendering architecture for urgency-driven exam cards. Any UI component or visual state implementation in this epic must reference stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html as the visual source of truth.

## System Architecture Diagram

```mermaid
graph TD
    subgraph User Layer
      U1[Student on Mobile]
      U2[Student on Desktop]
    end

    subgraph Application Layer
      A1[Exam Card Renderer]
      A2[State Badge Renderer]
      A3[Countdown Panel Renderer]
      A4[Override Renderer TODAY/MISSED]
    end

    subgraph Service Layer
      S1[State-to-Style Mapping]
      S2[Microcopy Rules]
      S3[Animation Rules]
    end

    subgraph Data Layer
      D1[Computed Card State]
      D2[Design Tokens JSON]
      D3[Stitch Visual Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Static Frontend Bundle]
      I2[Browser Paint and Animation]
    end

    U1 --> A1
    U2 --> A1
    A1 --> A2
    A1 --> A3
    A1 --> A4
    A2 --> S1
    A3 --> S1
    A4 --> S2
    A3 --> S3
    S1 --> D2
    S1 --> D3
    S2 --> D3
    A1 --> I1
    I1 --> I2
```

## High-Level Features and Technical Enablers

### Features

- Active Urgency Cards (D-5, D-2, D-1)
- Today and Missed Overrides

### Technical Enablers

- Deterministic state-to-visual mapping table.
- Shared card primitives for border, shadow, badge, and timer layouts.
- Animation gating rules for high urgency versus missed states.

## Technology Stack

- Astro component composition.
- Tailwind CSS plus custom token classes.
- Lightweight JS class toggles for state-driven behaviors.

## Technical Value

High. This epic delivers the product’s defining urgency communication layer.

## T-Shirt Size Estimate

L