```markdown
# Design System Document: The Bespoke Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Silent Curator"**
The design system for ADEN is not a mere e-commerce interface; it is a digital atelier. It moves away from the frantic, grid-locked patterns of traditional retail and embraces the "Silent Curator"—a philosophy where the interface recedes to let the craftsmanship of the footwear take center stage. 

The system breaks the "template" look through **Intentional Asymmetry**. By utilizing generous white space (negative space) and overlapping elements, we mimic the layout of a high-end fashion editorial. The experience should feel cinematic, moving with a "slow-luxury" pace that rewards the user for lingering.

---

## 2. Colors: Tonal Depth & Soul
Our palette transitions away from "flat black" into a rich, obsidian-based luxury. The warmth comes from the gold and beige accents, reflecting the raw materials of fine leather and brass tools.

### The Palette (Material Design Mapping)
*   **Background / Surface:** `#131313` (The Infinite Void)
*   **Primary:** `#e9c176` (Signature Gold) – Used for critical actions and brand moments.
*   **Secondary:** `#d2c4bf` (Muted Parchment) – For supporting elements.
*   **Surface Tiers:** 
    *   `surface-container-lowest`: `#0e0e0e`
    *   `surface-container-high`: `#2a2a2a`
    *   `surface-container-highest`: `#353534`

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. A luxury experience feels seamless. Boundaries must be defined solely through background color shifts. For example, a product detail section in `surface-container-low` should sit directly against a `surface` background. The transition is the boundary.

### Signature Textures & Glass
To prevent the dark theme from feeling "heavy," use **Glassmorphism**. For floating navigation or modal overlays, use semi-transparent surface colors with a `backdrop-blur` (20px-40px). 
*   **CTA Soul:** Apply a subtle linear gradient from `primary` (#e9c176) to `primary-container` (#c5a059) at a 135-degree angle to give buttons a metallic, hand-polished sheen.

---

## 3. Typography: The Editorial Voice
The tension between the serif and sans-serif creates the "High-Fashion" friction required for exclusivity.

*   **Display & Headlines (Noto Serif):** These are your "Hero" moments. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to create an authoritative, editorial feel. These should often be center-aligned or dramatically offset.
*   **Body & Titles (Manrope):** The "Workhorse." Manrope provides a clean, technical contrast to the serif. It reflects the precision of bespoke measurements. 
*   **Labels:** Use `label-sm` (0.6875rem) with wide letter-spacing (0.1em) and all-caps for "Small Caps" elegance on categories or price tags.

---

## 4. Elevation & Depth: Tonal Layering
In this system, elevation is not a drop shadow; it is a change in light.

*   **The Layering Principle:** Treat the UI as stacked sheets of leather. Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" look. Place a `surface-container-highest` element to signify "lift."
*   **Ambient Shadows:** For floating elements (like a "Book Appointment" fab), use a shadow with a 60px blur, 10% opacity, and a color hex of `#e9c176` (Primary) rather than black. This creates a "Glow" rather than a shadow.
*   **The Ghost Border:** If a form field requires a container, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components: The Crafted UI

### Buttons (The "Signature" Stroke)
*   **Primary:** Gradient fill (Gold), no border, `sm` roundedness (0.125rem). On hover, implement a "Soft Scale" (1.05x) and an increased outer glow.
*   **Tertiary:** Text only in `primary`, but with a `label-md` uppercase style and a 1px underline that expands from the center on hover.

### Cards & Lists (The Editorial Grid)
*   **Constraint:** Absolutely no divider lines. 
*   **Spacing:** Use a 48px or 64px vertical gap to separate items. 
*   **Interactions:** Images in cards should have a subtle parallax effect on scroll. On hover, the image should scale slowly (1.1x over 800ms) to create a cinematic "zoom" feel.

### Input Fields
*   **Style:** Minimalist underline only using `outline-variant`. When focused, the label should transform using `label-sm` and the underline should transition to `primary` gold.

### Cinematic Overlays
*   **Contextual Tooltips:** Use `surface-bright` with `on-surface` text. These should fade in with a 20px upward slide.

---

## 6. Do’s and Don'ts

### Do:
*   **Do** embrace asymmetry. It is okay for a product image to be 100px off-center if it balances with a headline on the opposite side.
*   **Do** use "Micro-Interactions." A small gold dot appearing next to a hovered menu item is better than a background color change.
*   **Do** prioritize high-contrast imagery. The dark UI requires photography with strong highlights and deep shadows.

### Don’t:
*   **Don't** use "Card Shadows." Avoid the standard Material Design look. Use background tonal shifts instead.
*   **Don't** use standard rounding. Stick to `sm` (0.125rem) or `none` (0px) for a sharper, more architectural feel. Avoid the "bubbly" look of `lg` or `xl` radii.
*   **Don't** rush the user. Ensure all transitions (hover, page loads) have a duration of at least 400ms-600ms with a `cubic-bezier(0.2, 0, 0, 1)` easing.

---

## Director’s Final Note
This design system is about the "space between the notes." In luxury, what you leave out is as important as what you put in. Keep it breathable, keep it dark, and ensure every gold pixel feels earned.```