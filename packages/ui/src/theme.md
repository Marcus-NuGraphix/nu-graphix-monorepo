# NuGraphix UI Design Tokens

This document defines the **global design tokens** used by the NuGraphix UI library.

- Tokens are **semantic** (describe meaning, not specific hex colors).
- Each app (NuGraphix, Mannys, CMS, Portuguese Forum, Caravela, etc.) can
  override these tokens in its own `globals.css` to match its branding.
- Components should **only** reference these tokens (via CSS variables or Tailwind arbitrary values), never hard-coded colors or ad-hoc values.

> ❗ If you find yourself typing a raw hex color, pixel value, or timing into a component, stop and consider adding/using a token instead.

---

## 1. Color Tokens

Color tokens are grouped by **role**, not by specific hex value.  

They’re all CSS variables of the form `--color-*`.

### 1.1. Base / Global Colors

| Token                         | Description                                                                                   | Typical Usage                                                                 |
|------------------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| `--color-bg`                 | Main application background color.                                                            | `<body>` background, full-page sections.                                      |
| `--color-bg-muted`           | Slightly muted background.                                                                    | Striped rows, subtle panels, secondary sections.                              |
| `--color-surface`            | Default surface used for cards, panels, and containers.                                       | `Card`, `Popover`, panel backgrounds.                                        |
| `--color-surface-subtle`     | Very soft surface, slightly elevated from background.                                         | Subtle cards, list items, “soft” containers.                                  |
| `--color-surface-elevated`   | Stronger elevated surface.                                                                    | Modals, floating panels, important cards.                                     |
| `--color-backdrop`           | Dimmed overlay behind modals or side panels.                                                  | `Modal` backdrop, overlays.                                                   |

### 1.2. Text Colors

| Token                             | Description                                                            | Typical Usage                                                    |
|----------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------|
| `--color-foreground`             | Primary text color.                                                    | Body text, headings.                                             |
| `--color-foreground-muted`       | Muted/secondary text.                                                  | Helper text, subtitles, meta info.                               |
| `--color-foreground-inverted`    | Text on dark/strong backgrounds.                                       | Text inside primary buttons, toasts, banners.                    |
| `--color-foreground-danger`      | Text indicating errors or destructive actions.                         | Error messages, destructive labels.                             |
| `--color-foreground-success`     | Text indicating success.                                               | Success messages, badges.                                       |
| `--color-foreground-warning`     | Text indicating warnings.                                              | Warning messages, notices.                                      |

### 1.3. Border & Divider Colors

| Token                       | Description                                                           | Typical Usage                                   |
|----------------------------|-----------------------------------------------------------------------|-----------------------------------------------|
| `--color-border-subtle`    | Very light border.                                                     | Card borders, dividers, input borders.        |
| `--color-border-strong`    | Stronger border for emphasis.                                         | Important separators, focused containers.     |
| `--color-border-danger`    | Border used for error state.                                          | Invalid inputs, danger alerts.                |
| `--color-border-success`   | Border used for success state.                                        | Success banners, success cards.               |
| `--color-border-warning`   | Border used for warning state.                                        | Warning banners, warnings.                    |

### 1.4. Brand / Action Colors

These represent **main actions** and **secondary actions**.

| Token                           | Description                                                       | Typical Usage                                         |
|--------------------------------|-------------------------------------------------------------------|-------------------------------------------------------|
| `--color-primary`              | Primary brand color.                                              | Primary buttons, primary links, key highlights.       |
| `--color-primary-soft`         | Soft background for primary.                                      | Primary badges, soft callouts, subtle highlights.     |
| `--color-primary-foreground`   | Text/icon color on primary backgrounds.                           | Label inside primary buttons and chips.               |
| `--color-secondary`            | Secondary brand/neutral action color.                             | Secondary buttons, pills, tabs.                       |
| `--color-secondary-soft`       | Soft background for secondary.                                    | Secondary badges, secondary chips.                    |
| `--color-secondary-foreground` | Text/icon on secondary backgrounds.                               | Label inside secondary buttons/badges.                |

### 1.5. Semantic Status Colors

These are used **only for status states**, not for general decoration.

| Token                             | Description                                             | Typical Usage                                       |
|----------------------------------|---------------------------------------------------------|-----------------------------------------------------|
| `--color-success`                | Main success color.                                     | Success icons, strong success states.              |
| `--color-success-soft`           | Soft success background.                                | Success badges, success alerts.                    |
| `--color-success-foreground`     | Text/icon on success backgrounds.                       | Text inside success alerts and banners.            |
| `--color-warning`                | Main warning color.                                     | Warning icons, emphasize caution.                  |
| `--color-warning-soft`           | Soft warning background.                                | Warning badges, warning alerts.                    |
| `--color-warning-foreground`     | Text/icon on warning backgrounds.                       | Content inside warning messages.                   |
| `--color-danger`                 | Main destructive / error color.                         | Destructive buttons, error icons.                  |
| `--color-danger-soft`            | Soft destructive background.                            | Error badges, error alerts.                        |
| `--color-danger-foreground`      | Text/icon on danger backgrounds.                        | Text inside destructive buttons/alerts.            |
| `--color-info`                   | Informational color (optional, can map to primary).     | Info banners, neutral info states.                 |
| `--color-info-soft`              | Soft informational background.                          | Info badges, info cards.                           |
| `--color-info-foreground`        | Text/icon on info backgrounds.                          | Content inside info alerts.                        |

### 1.6. Focus & Selection

| Token                        | Description                                          | Typical Usage                          |
|-----------------------------|------------------------------------------------------|----------------------------------------|
| `--color-focus-ring`        | Color used for focus outlines and rings.            | Focus ring around buttons, inputs.     |
| `--color-selection-bg`      | Text selection background.                           | Global `::selection` background.       |
| `--color-selection-fg`      | Text selection foreground.                           | Global `::selection` color.            |

---

## 2. Typography Tokens

Typography tokens allow consistent text sizing and rhythm. Tailwind classes like `text-sm` can still be used, but **tokens should be used for custom CSS and component internals**.

All typography tokens are CSS variables.

### 2.1. Font Families

| Token          | Description                        | Typical Usage                     |
|----------------|------------------------------------|-----------------------------------|
| `--font-sans`  | Default sans-serif font stack.     | Body text, headings, UI elements. |
| `--font-mono`  | Monospaced font stack.            | Code blocks, numeric data, tags. |

### 2.2. Font Sizes

| Token             | Suggested Mapping      | Typical Usage                                 |
|-------------------|------------------------|-----------------------------------------------|
| `--font-size-xs`  | ~11–12px               | Captions, helper text.                        |
| `--font-size-sm`  | ~13–14px               | Secondary text, metadata.                     |
| `--font-size-md`  | ~15–16px               | Body text.                                    |
| `--font-size-lg`  | ~17–18px               | Emphasis text, subheadings.                   |
| `--font-size-xl`  | ~20–24px               | Small headings.                               |
| `--font-size-2xl` | ~24–30px               | Section headings.                             |
| `--font-size-3xl` | ~30–36px               | Page titles / hero.                           |
| `--font-size-4xl` | ~36–48px               | Landing hero headlines.                       |

### 2.3. Line Heights

| Token                   | Typical Usage                      |
|-------------------------|------------------------------------|
| `--line-height-tight`   | Short headings, large display.     |
| `--line-height-normal`  | Standard paragraphs.               |
| `--line-height-relaxed` | Long-form content.                 |

### 2.4. Font Weights

| Token                 | Typical Usage                       |
|-----------------------|-------------------------------------|
| `--font-weight-regular` | Most body text.                   |
| `--font-weight-medium`  | Buttons, labels, emphasis.        |
| `--font-weight-semibold`| Headings.                         |
| `--font-weight-bold`    | Strong emphasis, important labels.|

---

## 3. Spacing Tokens

Spacing tokens are used for **component internals** (padding, gaps) when we can’t or don’t want to rely only on Tailwind’s spacing scale.

| Token         | Approx. px | Typical Usage                            |
|---------------|------------|------------------------------------------|
| `--space-1`   | 4px        | Very tight padding/gaps.                 |
| `--space-2`   | 8px        | Small gaps between labels & inputs.      |
| `--space-3`   | 12px       | Internal card padding small.             |
| `--space-4`   | 16px       | Default internal padding.                |
| `--space-5`   | 20px       | Spacious sections inside cards.          |
| `--space-6`   | 24px       | Large sections, modals.                  |

---

## 4. Radius Tokens

Radii ensure consistent rounding across UI.

| Token           | Description                             | Typical Usage                                |
|-----------------|-----------------------------------------|----------------------------------------------|
| `--radius-xs`   | Very small rounding.                    | Badges, pills, small UI elements.           |
| `--radius-sm`   | Slight rounding.                        | Inputs, small buttons.                      |
| `--radius-md`   | Default rounding.                       | Standard buttons, cards.                    |
| `--radius-lg`   | Strong rounding.                        | Large cards, modals.                         |
| `--radius-xl`   | Extra strong rounding.                  | Special surfaces, feature sections.          |
| `--radius-full` | Fully rounded (pill/circle).            | Avatars, pill buttons, tags.                |

---

## 5. Shadow Tokens

| Token           | Description                           | Typical Usage                                  |
|----------------|---------------------------------------|-----------------------------------------------|
| `--shadow-xs`  | Very subtle shadow.                   | Small controls, minimal elevation.            |
| `--shadow-sm`  | Default low elevation.                | Standard cards, dropdowns.                    |
| `--shadow-md`  | Medium elevation.                     | Modals, popovers, important cards.            |
| `--shadow-lg`  | High elevation / floating.            | Overlays, floating action components.         |
| `--shadow-focus` | Shadow used for focus emphasis.     | Focused cards, interactive surfaces.          |

---

## 6. Motion Tokens (Transitions & Easing)

Motion tokens keep animation feeling consistent.

| Token                     | Description                          | Typical Usage                             |
|---------------------------|--------------------------------------|-------------------------------------------|
| `--transition-fast`       | Short durations (100–150ms).         | Hover states, quick feedback.             |
| `--transition-normal`     | Standard UI transitions (~200ms).    | Button presses, dropdowns.                |
| `--transition-slow`       | Longer transitions (~300ms).         | Modals, page transitions.                 |
| `--easing-standard`       | Default easing curve.                | Most UI transitions.                      |
| `--easing-emphasized`     | Stronger ease (ease-out-ish).        | Emphasized, primary interactions.         |

---

## 7. Layout Tokens (Optional)

If needed, we can define container widths as tokens too.

| Token                 | Description                          | Typical Usage                              |
|-----------------------|--------------------------------------|--------------------------------------------|
| `--container-width-sm`| Small content width.                 | Narrow forms, side panels.                 |
| `--container-width-md`| Default content width.               | Standard pages.                            |
| `--container-width-lg`| Wide content width.                  | Dashboards, data-heavy pages.             |
| `--container-width-xl`| Extra wide layouts.                  | Marketing pages, full-width sections.     |

---

## 8. Usage Guidelines

1. **Always use semantic tokens in components**  
   - ✅ `bg-[var(--color-primary)]`  
   - ❌ `bg-blue-600`

2. **Don’t mix raw values and tokens for the same purpose**  
   For example, if button border uses `--color-border-subtle`, all similar borders should too.

3. **Use semantic status tokens only for status UI**  
   - `--color-success*` → success states only  
   - `--color-danger*` → destructive/error actions/messages only

4. **Per-app theming**  
   - All apps import the shared `theme.css`.  
   - Each app can override tokens in its own `:root` (in `globals.css`) to match branding.

   ```css
   /* Example: Mannys app globals */
   @import "../../../packages/ui/theme.css";
   @import "tailwindcss";
   @source "../../../packages/ui/web/src";

   :root {
     --color-primary: #16a34a;            /* Manny’s green */
     --color-secondary: #ea580c;          /* Manny’s orange */
     --color-bg: #f9fafb;
     --color-surface: #ffffff;
   }
    ````

5. **If you need a new color/spacing/etc, add a token**
   Don’t hard-code; add a new token with a clear semantic name and document it here.

---

## 9. Implementation Notes

* In components, use tokens via Tailwind arbitrary values, e.g.:

  ```tsx
  className="bg-(--color-primary) text-(--color-primary-foreground)"
  ```

* Tokens should live in `packages/ui/theme.css`, imported by each app before Tailwind:

  ```css
  @import "../../../packages/ui/theme.css";
  @import "tailwindcss";
  @source "../../../packages/ui/web/src";
  ```

* Tailwind’s `@theme inline` should map `--color-background` and `--color-foreground` to our generic tokens:

  ```css
  @theme inline {
    --color-background: var(--color-bg);
    --color-foreground: var(--color-foreground);
    --font-sans: var(--font-sans);
    --font-mono: var(--font-mono);
  }
  ```

---

By following this token system, we can:

* Maintain a **single component library**.
* Rebrand each client/project by only changing **token values per app**.
* Keep visual language consistent and professional across all platforms.

---
