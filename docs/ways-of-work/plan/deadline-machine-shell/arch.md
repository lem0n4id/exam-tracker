# Epic Architecture Overview

This epic delivers the shell layout foundation for the static Exam Tracker page. The architecture prioritizes deterministic rendering, reusable section composition, and strict visual parity with the Stitch asset at stitch/2944944676816621264/668a3253350e441690c92f6971809c95/Exam-Tracker-Deadline-Machine.html whenever implementing or adjusting UI components.

## System Architecture Diagram

```mermaid
graph TD
    subgraph User Layer
      U1[Mobile Browser]
      U2[Desktop Browser]
    end

    subgraph Application Layer
      A1[Astro Page Shell]
      A2[Top App Bar Section]
      A3[Date Anchor Section]
      A4[Footer Section]
      A5[Mobile Bottom Nav Section]
    end

    subgraph Service Layer
      S1[Section Composition Rules]
      S2[Token Mapping Rules]
      S3[Responsive Breakpoint Rules]
    end

    subgraph Data Layer
      D1[Hardcoded UI Labels]
      D2[Design Tokens JSON]
      D3[Stitch Visual Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Static Build Output]
      I2[Browser Runtime]
    end

    U1 --> A1
    U2 --> A1
    A1 --> A2
    A1 --> A3
    A1 --> A4
    A1 --> A5
    A2 --> S1
    A3 --> S1
    A4 --> S1
    A5 --> S3
    S2 --> D2
    S1 --> D1
    S1 --> D3
    A1 --> I1
    I1 --> I2
```

## High-Level Features and Technical Enablers

### Features

- Top Bar and Date Anchor
- Footer and Mobile Navigation

### Technical Enablers

- Shared shell section structure and naming conventions.
- Design-token-driven class mapping and no-soft-style safeguards.
- Responsive spacing contract to avoid fixed-nav overlap.

## Technology Stack

- Astro static page composition.
- Tailwind CSS utility styling and token extension.
- Minimal client-side JavaScript for date display behavior.

## Technical Value

High. A stable shell prevents downstream regressions and enables parallel feature development.

## T-Shirt Size Estimate

M