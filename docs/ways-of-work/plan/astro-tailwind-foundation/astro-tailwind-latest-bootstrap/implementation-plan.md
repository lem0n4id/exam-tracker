# Goal

Implement a first-priority bootstrap baseline for latest Astro and latest Tailwind, including file structure, commands, environment setup constraints, and countdown integration details. This feature executes before all other implementation work.

## Requirements

- Create project scaffold with latest stable Astro.
- Add latest stable Tailwind using official Astro-recommended setup at implementation time.
- Establish files and structure:
  - src/pages/index.astro
  - src/components/Schedule.astro
  - src/styles/global.css
  - src/styles/home.css
  - public/simplyCountdown.min.js
- Keep Astro component structure convention (frontmatter, markup, style/script blocks).
- Keep date format dd-mm-yyyy for display.
- Keep simplyCountdown bindings synced with date entries.
- Add scripts and runtime details:
  - npm run dev or npm start at localhost:3000
  - npm run build
  - npm run preview
- Set engines Node >=18.14.1.
- Include environment caveats for pnpm hoist and StackBlitz.

## Technical Considerations

### System Architecture Overview

```mermaid
graph TD
    subgraph Frontend Layer
      F1[src/pages/index.astro]
      F2[src/components/Schedule.astro]
      F3[src/styles/global.css and home.css]
    end

    subgraph API Layer
      A1[None - Static Site]
    end

    subgraph Business Logic Layer
      B1[Exam Date Config]
      B2[Date Formatter dd-mm-yyyy]
      B3[simplyCountdown Initializer]
    end

    subgraph Data Layer
      D1[Hardcoded Exam Dates]
      D2[Selector to Timer Mapping]
      D3[public/simplyCountdown.min.js]
      D4[Stitch Reference HTML]
    end

    subgraph Infrastructure Layer
      I1[Node >=18.14.1]
      I2[npm install/dev/build/preview]
      I3[pnpm and StackBlitz Config]
    end

    F1 --> F2
    F2 --> B1
    F2 --> B2
    F2 --> B3
    B1 --> D1
    B3 --> D2
    B3 --> D3
    F1 --> D4
    F2 --> D4
    F1 --> I2
    F2 --> I2
    I2 --> I1
    I3 --> I2
```

### Database Schema Design

No database. Hardcoded static data only.

### API Design

No API endpoints.

### Frontend Architecture

#### Component Hierarchy Documentation

```text
index.astro
└── Schedule.astro
    ├── Date Banner
    ├── Subject Date List
    └── Countdown Timer Bindings
```

### Security Performance

- Keep client-side script footprint minimal and focused.
- Preserve static-first rendering and avoid unnecessary runtime dependencies.
