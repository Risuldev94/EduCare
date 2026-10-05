---
name: Safe Transit Driver
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006e2d'
  on-secondary: '#ffffff'
  secondary-container: '#7cf994'
  on-secondary-container: '#007230'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#7ffc97'
  secondary-fixed-dim: '#62df7d'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  canvas-bg: '#F8FAFC'
  surface-subtle: '#F1F5F9'
  surface-card: '#FFFFFF'
  border-subtle: '#E2E8F0'
  text-primary: '#0F172A'
  text-secondary: '#475569'
  text-tertiary: '#94A3B8'
  brand-blue-surface: '#EFF6FF'
  success-green-vivid: '#16A34A'
  success-green-surface: '#DCFCE7'
  success-green-text: '#15803D'
  warning-amber-surface: '#FEF3C7'
  warning-amber-text: '#B45309'
  alert-coral-vivid: '#EF4444'
  alert-coral-surface: '#FEE2E2'
  alert-coral-text: '#B91C1C'
  vehicle-amber: '#FBBF24'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
  metric-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.25rem
  space-2xl: 1.5rem
---

## Brand & Style

The design system establishes a high-reliability, safety-first mobile application environment tailored specifically for school bus and transit drivers. Operating an active vehicle requires split-second recognition, minimal cognitive load, and immediate tactile clarity. The visual language evokes feelings of calm assurance, precision, and protective oversight.

The aesthetic blends **Modern Tactile Minimalism** with **Utility-Driven Operational Clarity**:
- Ultra-clean canvas surfaces in cool slate whites (`#F8FAFC`, `#F1F5F9`) prioritize daylight legibility under varying cabin glare.
- High-contrast typography in deep navy and slate reduces squinting and eye strain.
- Generous container radiuses paired with soft multi-layered diffusion communicate friendliness while preserving structural modularity.
- Color functions strictly as semantic status: energetic cobalt blue commands direction and primary navigation, emerald green affirms completion and boarding safety, soft amber commands caution or pending transit stages, and crisp vermillion marks urgent exceptions.

## Colors

The palette is engineered around high functional contrast, clear state delineation, and rapid scanning for drivers on the move.

### Primary Role (Action & Navigation)
- **Primary Cobalt (`#2563EB`)**: Drives active UI tabs, primary interactive switches, navigation routes, and key transactional triggers.
- **Brand Blue Surface (`#EFF6FF`)**: Applied to tinted icon backgrounds, selected segmented tab buttons, and active callout containers.

### Status Roles (Safety & Operational Tracking)
- **Success Emerald (`#16A34A`) / Soft Tint (`#DCFCE7`)**: Signals safe boarding, confirmed completions, live active trip banners, and verified stops. Text on subtle green badges uses `#15803D`.
- **Pending Amber (`#F59E0B`) / Soft Tint (`#FEF3C7`)**: Designates awaiting pickup, scheduled morning/return trips, and pending status tags. Text uses `#B45309`.
- **Critical Red / Delay Coral (`#EF4444`) / Soft Tint (`#FEE2E2`)**: Explicitly reserved for trip termination buttons, delay reports, and acute exception reporting. Text on alert backgrounds uses `#B91C1C`.

### Neutral Role (Canvas & Typography)
- **Deep Navy (`#0F172A`)**: Base heading color, high-contrast numeric indicators, and stop titles.
- **Secondary Slate (`#475569`)**: Subheads, route designations, and metadata values.
- **Muted Slate (`#94A3B8`)**: Inactive bottom navigation icons, assistive labels, and subtle divider strokes.
- **Canvas Base (`#F8FAFC`) & Card Pure White (`#FFFFFF`)**: Establishes contrast tiers so that floating operational cards instantly detach from the underlying route map and page backgrounds.

## Typography

Typography relies uniformly on **Plus Jakarta Sans** to capitalize on its generous aperture, sturdy x-height, and clean geometric curves. Because the user is frequently interacting with the device mounted on a dashboard dock, letterforms prioritize immediate identification at arm's-length distance.

- **Display Metrics & Stop Names**: Scaled between 18px (`headline-md`) and 22px (`headline-lg`) with `700` and `800` weights to ensure student counts and immediate location names stand out without visual confusion.
- **Numbers and Counters**: Formatted with heavy weights (`700`–`800`) to enable drivers to register pickup counts (e.g., `12 Boarded`, `6 Pending`) in a single glance.
- **Operational Badges & Tags**: Rendered using `label-md` (12px / bold) to maintain crisp edges against tinted pastel background containers.
- **Subtitles & Informational Hints**: Sized at 13px (`body-sm`) with slate-tinted weights (`#475569`) to maintain clear typographic hierarchy without competing with active calls-to-action.

## Layout & Spacing

The layout is optimized for an ergonomic, thumb-driven vertical mobile stack. The operational philosophy enforces: **One screen, one current trip, one obvious action at a time.**

- **Outer Margins**: Fixed at `1rem` (16px) on mobile viewports to maximize usable card width while avoiding edge clipping on curved bezel devices.
- **Card Padding**: Sized consistently at `1rem` to `1.25rem` (16px–20px) providing ample breathing room around lists, metrics rows, and interactive buttons.
- **Touch Target Density**: Minimum interactive hit target is strictly enforced at 48px × 48px. Action buttons (such as "Mark Boarded", "Start Morning Trip", and "Complete Stop") feature full container width or distinct block dimensions with a minimum height of 48px to prevent accidental taps during vehicle vibrations.
- **Vertical Card Rhythm**: Cards and informational clusters separate with `0.75rem` (12px) to `1rem` (16px) vertical gaps, preventing informational collisions between trip metadata, live map views, and student rosters.

## Elevation & Depth

The design system uses a gentle, ambient depth model to present information in clear physical layers without aggressive skeuomorphism or distracting dark drop shadows.

- **Level 0 (Canvas Base)**: `#F8FAFC`. The foundational backdrop for non-interactive application scaffolding.
- **Level 1 (Card & Module Layer)**: Pure `#FFFFFF` surface with an ultra-soft dual shadow:
  - `0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.03)`
  - Paired with a delicate border outline of `1px solid #F1F5F9` or `1px solid #E2E8F0` to maintain definition when overlaid across map views.
- **Level 2 (Active Trip Cards / Current Stop Hero)**:
  - `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 10px 20px -3px rgba(37, 99, 235, 0.06)`
  - Elevated slightly to highlight that the current stop requires live attention.
- **Level 3 (Sticky Bottom Navigation & Modals)**:
  - `0 -4px 16px rgba(15, 23, 42, 0.05)` with a pure white surface and a top border `1px solid #F1F5F9`. Ensures sticky controls stay visually distinct from scrollable content.

## Shapes

The interface embraces a friendly, tactile visual curvature using roundedness level `2`.

- **Primary Cards & Containers**: Standardized on `rounded-lg` (16px / `1rem`) and `rounded-xl` (20px / `1.25rem`), producing smooth, organic card perimeters that soften the dashboard feel.
- **Action Buttons & Segmented Pills**: Formatted with `10px` to `12px` corner radiuses for regular CTA buttons, while badge pills and segment toggles use full-radius pill silhouettes (`rounded-full` / 9999px) to indicate clickable state tags.
- **Avatar Containers & Icon Badges**: Feature rounded square framing (`12px` radius) for profile items, transportation badges, and list icons.
- **Bottom Navigation Bar**: Clean flat top with smooth rounded corners where active selection indicators seat beneath icons.

## Components

### 1. Buttons & Triggers
- **Primary CTA ("Start Morning Trip", "Complete Stop")**:
  - Background: `#16A34A` (Emerald) or `#2563EB` (Cobalt) depending on operational context.
  - Text: Pure white (`#FFFFFF`), `15px`, bold (`700`).
  - Height: Minimum 48px–52px. Icon aligned left (play symbol, checkmark). Full-width inside card footers.
- **Action Cell Button ("Mark Boarded")**:
  - Background: `#16A34A` with pure white text and icon.
  - Padding: 8px 16px; border radius: 10px.
- **Destructive/Critical Action ("End Trip")**:
  - Compact header button: Tinted `#FEE2E2` background, `#EF4444` square badge icon, and `#B91C1C` bold text.
- **Disabled State ("Starts in 6h 35m")**:
  - Background: `#F1F5F9`, Text: `#94A3B8`, Icon: `#94A3B8`. Non-clickable.

### 2. Status Badges & Chips
- **Scheduled / Upcoming**: Tinted `#FEF3C7` or `#EFF6FF` background with `#B45309` / `#2563EB` bold 12px text.
- **Waiting**: `#FEF3C7` background with amber bullet dot (`#F59E0B`) and `#B45309` typography.
- **Boarded / Active**: `#DCFCE7` background with solid green check or indicator dot and `#15803D` typography.
- **Role Badge ("Driver")**: Soft blue pill badge (`#EFF6FF` / `#2563EB`).

### 3. Student Roster Lists
- Contained in cards with distinct student avatar (circle or squircle with soft illustration), student name in bold navy (`#0F172A`), class/grade subtitle in slate (`#64748B`), centered status chip, and instant-action action button on the far right.
- High touch target row: 68px minimum height per item.

### 4. Segmented Mode Switches ("Boarding" vs "Dropping")
- Segmented container with `#F1F5F9` background, 10px radius.
- Active tab floats with `#2563EB` fill and `#FFFFFF` text, showing student count badge and icon.
- Inactive tab features `#475569` text with transparent background.

### 5. Metric Stat Strips
- Divided 3-column or 4-column counters within white containers:
  - Top or left icon with dedicated color coding (Blue for total students, Green for boarded, Orange clock for pending, Red for absent).
  - Bold metric display number (`20px`, `#0F172A`) over compact uppercase/sentence label (`12px`, `#64748B`).
  - Divided by clean vertical hairline strokes (`#F1F5F9`).

### 6. Quick Action Tiles & Secondary Cards
- Displayed in dual or triple grid layouts (e.g., "Report Delay", "Report Issue", "Contact School").
- Features a light pastel container (`#FEE2E2` for delay, `#EFF6FF` for reports), a vibrant monochrome icon container, and bold title with assistive text.

### 7. Bottom Navigation Bar
- Fixed at the bottom of the viewport with a frosted glass or pure white card elevation.
- Standard 3 items: Home, Trips, Profile.
- Active item uses `#2563EB` solid icon, bold label, and an active pill indicator underline.
- Inactive items use `#94A3B8` line-style icons.