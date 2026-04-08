# Epic Architecture Overview

This epic defines the implementation-first technical foundation for the exam tracker app using the latest stable Astro and Tailwind setup. It standardizes scaffold structure, static asset integration, and local run/build behavior before downstream feature work begins.

## System Architecture Diagram

```mermaid
graph TD
    subgraph User Layer
      U1[Developer]
      U2[Maintainer]
    end

    subgraph Application Layer
      A1[src/pages/index.astro]
      A2[src/components/Schedule.astro]
      A3[src/styles/global.css and home.css]
      A4[public/simplyCountdown.min.js]
    end

    subgraph Service Layer
      S1[Astro Runtime and Routing]
      S2[Tailwind Build Pipeline]
      S3[Countdown Binding Logic]
    end

    subgraph Data Layer
      D1[Hardcoded Exam Date Config]
      D2[Date Display dd-mm-yyyy]
      D3[Stitch Visual Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Node >=18.14.1]
      I2[npm dev/build/preview workflow]
      I3[pnpm hoist and StackBlitz config]
    end

    U1 --> A1
    U1 --> A2
    U2 --> D1
    A1 --> S1
    A2 --> S3
    A3 --> S2
    A4 --> S3
    S3 --> D1
    S3 --> D2
    A1 --> D3
    A2 --> D3
    S1 --> I2
    S2 --> I2
    I2 --> I1
    I3 --> I2
```

## High-Level Features and Technical Enablers

### Features

- Astro Tailwind Latest Bootstrap

### Technical Enablers

- Dependency and runtime baseline for latest Astro and latest Tailwind.
- Deterministic file layout and command conventions.
- Stable browser-side simplyCountdown integration from public assets.

## Technology Stack

- Astro latest stable release.
- Tailwind latest stable release using official Astro-recommended setup path.
- Client-side countdown initialization through bundled simplyCountdown script.

## Technical Value

High. This architecture is a prerequisite for predictable implementation velocity and low setup risk.

## T-Shirt Size Estimate

S
