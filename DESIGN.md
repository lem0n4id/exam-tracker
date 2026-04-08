# Design System: The Unforgiving Editorial

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Digital Guillotine."** 

This is not a "friendly" productivity app; it is a high-stakes countdown that treats time as a finite, physical resource. We move beyond generic neo-brutalism by adopting a high-end editorial layout that mirrors a redacted government document or a brutalist architectural blueprint. 

The system rejects the "softness" of modern SaaS. We utilize intentional asymmetry, massive typographic scales, and "Heavy Object" physics—where every container feels like a solid block of granite dropped onto the screen. It is clean, unforgiving, and architecturally absolute.

## 2. Colors & The "Hard-Edge" Philosophy
The palette is rooted in a deep, void-like `surface` (#0e0e0e), punctuated by high-frequency pastel accents that serve as a visual "anxiety meter."

### The "Anti-Elevation" Rule
Standard UI uses shadows to imply light. This system uses shadows to imply **weight**. 
- **The Shadow Token:** All shadows are `surface_container_highest` or `surface_tint`, 100% opaque, with a hard 4px or 8px offset. 
- **No Gradients, No Blurs:** Any designer using a `linear-gradient` or a `blur` filter will be in violation of the system. Visual interest is created through "Stark Juxtaposition."

### Color Saturation Logic
As a deadline approaches, the interface shifts from "Pale/Dormant" to "Saturated/Critical."
- **Far Deadlines:** Use `tertiary` (Pale Yellow) and `secondary` (Pale Blue).
- **Imminent Deadlines:** Shift to `primary` (Pink) and `error` (Vibrant Red).
- **The Core:** Background is always `surface` (#0e0e0e); main text is always `on_surface` (#ffffff).

### Surface Hierarchy
Boundaries are defined by `outline` (4px+ solid strokes).
- **Nesting:** To separate content, nest a `surface_container` inside a `surface`. Do not use subtle shifts; use the 4px border to scream the transition.

## 3. Typography: The Grotesk & The Machine
We combine the human "shout" of a heavy Grotesk with the cold, "calculated" precision of a Monospace.

- **Display & Headlines (`Space Grotesk` Bold):** These must be set with tight tracking (-2% to -4%) and leading. They should feel like they are fighting for space within their containers.
- **The Timers (`Monospace` - Recommended: JetBrains Mono or Roboto Mono):** All countdowns must use monospace to prevent "jitter" as numbers change. This reinforces the "Machine" aspect of the system.
- **Labels:** Use `label-md` in all-caps with increased letter spacing (+10%) to provide an editorial, "stamped" look on top of solid color blocks.

## 4. Depth & The "Heavy Object" Principle
In this system, "Elevation" is a lie. We use **Tonal Stacking and Physical Offsets.**

- **The Stacking Principle:** Depth is achieved by placing a `primary` or `secondary` colored box behind a `surface_container` box, offset by 8px. This creates a "Hard Shadow" that feels like a physical layer of paper or metal.
- **The "Ghost Border" (Prohibited):** Do not use low-opacity borders. Use `outline` at 100% opacity. If the layout feels too "busy," increase the `surface` padding rather than thinning the line.
- **Interactive Weight:** On hover, components should "push down"—the offset shadow disappears (0px offset) and the element translates 4px or 8px to simulate a physical button being pressed into the floor.

## 5. Components

### Buttons (The Heavy Trigger)
- **Primary:** `primary` fill, 4px black `outline`, 8px hard offset shadow. Text in `on_primary_fixed`.
- **States:** On `active`, the shadow disappears, and the button shifts 8px down/right.
- **Shape:** Strictly 0px border radius.

### Input Fields (The Data Entry)
- **Style:** `surface_container_lowest` background with a 4px `outline`. 
- **Focus:** The border changes from `outline` to `secondary` or `primary` instantly. No transitions. No glows.

### Countdown Cards
- **Structure:** Forbid dividers. Use a 4px `outline` to wrap the entire card.
- **The "Saturation Bar":** A thick horizontal bar at the top of the card using `primary` or `tertiary`. As the deadline nears, this bar grows in height until it consumes the card background.

### Chips & Tags
- **Style:** Small, rectangular boxes with `on_surface` text on `surface_bright` backgrounds. Use 2px borders for these smaller elements to maintain legibility.

### Progress Gauges
- **Visual:** Use a "Segmented Block" approach. Instead of a smooth bar, use a series of 10 solid rectangles that fill up with `error` or `primary` color.

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Align your timers to the bottom-right and your headers to the top-left of a container.
- **Use Massive Type:** If a deadline is in 1 hour, the number should occupy at least 40% of the screen real estate.
- **Keep it Tight:** Use the `surface_container` tiers to "box in" information.

### Don't:
- **No Rounded Corners:** `border-radius: 0px` is the only value allowed in this system.
- **No Transitions:** Color changes and state changes should be "Snap" (0ms). It should feel mechanical, not organic.
- **No Soft Grays:** If you need a neutral, use `outline` (#767575) or `surface_bright`. Never use "smoke" or "whisper" grays that diminish the high-contrast impact.
- **No Icons without Borders:** If an icon is used, it must be encased in a square box with a 4px border. It is a "component," not an "embellishment."