# Design System: The Unforgiving Editorial

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Digital Guillotine."**

This is not a "friendly" productivity app; it is a high-stakes countdown that treats time as a finite, physical resource. We move beyond generic neo-brutalism by adopting a high-end editorial layout that mirrors a redacted government document or a brutalist architectural blueprint.

The system rejects the "softness" of modern SaaS. We utilize intentional asymmetry, massive typographic scales, and "Heavy Object" physics where every container feels like a solid block of granite dropped onto the screen. It is clean, unforgiving, and architecturally absolute.

## 2. Colors & The "Hard-Edge" Philosophy
The palette is rooted in a deep, void-like surface (#0e0e0e), punctuated by high-frequency pastel accents that serve as a visual "anxiety meter."

### The "Anti-Elevation" Rule
Standard UI uses shadows to imply light. This system uses shadows to imply **weight**.
- The Shadow Token: All shadows are surface_container_highest or surface_tint, 100% opaque, with a hard 4px or 8px offset.
- No Gradients, No Blurs: Any designer using a linear-gradient or a blur filter will be in violation of the system. Visual interest is created through "Stark Juxtaposition."

### Color Saturation Logic
As a deadline approaches, the interface shifts from "Pale/Dormant" to "Saturated/Critical."
- Far Deadlines: Use tertiary (Pale Yellow) and secondary (Pale Blue).
- Imminent Deadlines: Shift to primary (Pink) and error (Vibrant Red).
- The Core: Background is always surface (#0e0e0e); main text is always on_surface (#ffffff).

### Surface Hierarchy
Boundaries are defined by outline (4px+ solid strokes).
- Nesting: To separate content, nest a surface_container inside a surface. Do not use subtle shifts; use the 4px border to scream the transition.

## 3. Typography: The Grotesk & The Machine
We combine the human "shout" of a heavy Grotesk with the cold, "calculated" precision of a Monospace.

- Display & Headlines (Space Grotesk Bold): Set with tight tracking (-2% to -4%) and leading.
- The Timers (Monospace): All countdowns should use monospace to prevent jitter.
- Labels: Use label-md in all-caps with increased letter spacing (+10%).

## 4. Depth & The "Heavy Object" Principle
In this system, elevation is a lie. We use tonal stacking and physical offsets.

- The Stacking Principle: Place a primary or secondary colored box behind a surface_container box, offset by 8px.
- The Ghost Border (Prohibited): Do not use low-opacity borders. Use outline at 100% opacity.
- Interactive Weight: On hover, components should push down; shadow disappears and element translates 4px or 8px.

## 5. Components

### Buttons (The Heavy Trigger)
- Primary: primary fill, 4px black outline, 8px hard offset shadow. Text in on_primary_fixed.
- States: On active, shadow disappears and button shifts 8px down/right.
- Shape: border-radius 0px.

### Input Fields (The Data Entry)
- Style: surface_container_lowest background with a 4px outline.
- Focus: Border changes instantly to secondary or primary. No transitions.

### Countdown Cards
- Structure: Use a 4px outline around the card.
- Saturation Bar: Thick top bar using primary or tertiary; grows with urgency.

### Chips & Tags
- Style: Small rectangular boxes with on_surface text on surface_bright, 2px borders.

### Progress Gauges
- Visual: Segmented block approach with 10 solid rectangles.

## 6. Do's and Don'ts

### Do
- Embrace asymmetry.
- Use massive type for urgent deadlines.
- Use surface_container tiers to box information.

### Don't
- No rounded corners.
- No transitions.
- No soft grays.
- No icons without borders.
