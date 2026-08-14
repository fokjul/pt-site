# Design Requirements — Yuliia Fok Fitness Website

Source: Figma file `dHMLoXkJaAN7mm9FUgmID1` (node 5:2), cross-checked against the exported
**Figma Make** project (`index.tsx`, 3182 lines, component `FitnessCentreWebsiteDesign`).
The component export is ground truth for what's actually built — it superseded and corrected
several assumptions from the raw Dev Mode CSS (see §0 and the inline "per source code" notes
below).

> **Note on scale:** The Figma frame root is 3202×5350px, but every section's real content
> sits inside a `max-width: 1536px` centered container with `16px` side padding. Treat
> **1536px as the design's content width** (a standard desktop/2xl breakpoint) and build
> responsively down from there — the 3202px outer frame is a Figma canvas artifact, not a
> literal breakpoint to implement.

---

## 0. Implementation Conventions

| Area | Spec |
|---|---|
| **Language: use JSX, not TSX** | ⚠️ Author components as plain JavaScript + JSX (`.jsx`), not TypeScript (`.tsx`/`.ts`). Concretely: `src/main.jsx` (entrypoint, imports `src/index.css`, mounts `<App />` into `#root`), `src/App.jsx` (primary component), and any split-out components as `.jsx`. Drop TypeScript-only syntax (type annotations, interfaces, `as` casts) when porting the exported component tree. |
| Path alias | `@/*` → `./src/*` |
| Formatting | `oxfmt` (`pnpm format`) |
| Package manager / toolchain | pnpm `10.34.3`, Node `22` (pinned in `.mise.toml`) |
| Entry HTML | `index.html` — Vite shell with `#root` div and `<script type="module" src="/src/main.jsx">` |
| Icons | Inline SVGs, 2–3.3px stroke, sourced from a shared path map (`svgPaths` object keyed by short IDs, e.g. `p1a1d7900`) — keep this pattern: a single `svgPaths.js` (or inline per-icon) module rather than an icon library dependency |
| Code quality rules (from `AGENTS.md`) | Use double quotes for strings containing apostrophes (e.g. `"we're here to help"`), or escape apostrophes in single-quoted strings — an unescaped apostrophe in a single-quoted string breaks the build. Ensure JSX tags are closed and braces balanced. Export components as default exports. |

---

## 1. Global Design Tokens

### 1.1 Color Palette

| Token | Hex / Value | Usage |
|---|---|---|
| `--color-primary` | `#E7000B` | Brand red — buttons, icon chips, badges, accents |
| `--color-black` | `#000000` | Header bg, Membership section bg, Footer bg |
| `--color-white` | `#FFFFFF` | Section backgrounds, text on dark |
| `--color-text-heading` | `#000000` | Headings on light backgrounds |
| `--color-text-body` | `#364153` | Primary paragraph text |
| `--color-text-muted` | `#4A5565` | Secondary text (e.g., stat captions) |
| `--color-text-subtle` | `#6A7282` | Tertiary text (card meta, testimonial roles) |
| `--color-border-light` | `#E5E7EB` | Card borders (reviews) |
| `--color-border-dark` | `#364153` | Pricing card borders |
| `--color-surface-alt` | `#F9FAFB` | Alternate section background |
| `--color-surface-muted` | `#D1D5DC` | Map placeholder background |
| `--color-input-bg` | `#F3F3F5` | Form input/select/textarea fill |
| `--color-input-placeholder` | `#717182` | Input placeholder text |
| `--color-input-label` | `#0A0A0A` | Form field labels |
| White overlays | `rgba(255,255,255,0.1 / 0.2 / 0.7 / 0.8 / 0.9)` | Glassmorphism cards on hero, footer text, muted labels |
| Black overlay | `rgba(0,0,0,0.55)` | Hero image darkening scrim |
| Header bg | `rgba(0,0,0,0.95)` | Sticky header |
| Header border | `rgba(231,0,11,0.2)` | Header bottom hairline (red @ 20%) |

### 1.2 Typography

Font family: **Inter** (all weights: 400 regular, 500 medium, 700 bold, plus one italic style).

| Style | Size / Line-height | Weight | Letter-spacing | Used for |
|---|---|---|---|---|
| H1 (Hero) | 72px / 72px | 400 | 0.12px | "Train Hard. Live Strong." |
| H2 (Section title) | 48px / 48px | 400 | 0.35px | Section headers: About, Membership, Reviews, Get In Touch |
| H3 (Card/Subsection) | 24px / 32px | 400 | 0.07px | "Contact Information", "Join Group Class Today" |
| H3 (Card title, small) | 20px / 28px | 400 | -0.45px | Program card titles |
| H4 (Stat number) | 36px / 40px | 400 | 0.37px | "10+" hero-overlay stat |
| H4 (Price) | 48px / 48px | 400 | 0.35px | "$125/month" |
| Body | 16px / 24px | 400 | -0.31px | Paragraphs, nav links (500 wt for nav) |
| Body lead | 20px / 28px | 400 | -0.45px | Hero subheading |
| Small | 14px / 20px | 400 | -0.15px | Card meta, footer links, testimonial role |
| Label | 14px / 14px | 500 | -0.15px | Form field labels |
| Button | 14–18px / 20–28px | 500 | -0.15 to -0.44px | All CTA buttons |
| Testimonial quote | 16px / 24px | 400 *italic* | -0.31px | Review text |

### 1.3 Spacing & Shape

- **Section vertical padding:** `80px 0`
- **Content container:** `max-width: 1536px`, horizontal padding `16px`, centered
- **Card border-radius:** `14px` (feature/pricing/review/testimonial/contact cards)
- **Image/media border-radius:** `10px`
- **Small button/icon-chip radius:** `4px`–`8px`
- **Icon chip size:** `48×48px` (red `#E7000B` bg, `4px` radius, white 2px-stroke icon centered)
- **Card gap in grids:** `24px`
- **Shadow (elevated cards, e.g. "Years of Excellence" badge, popular pricing card):**
  `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`

---

## 2. Page Structure (top to bottom)

**Confirmed against the actual `index.tsx` component tree** (`Header` + `Body > Section, Section1…Section5, Footer`):

1. Header / Sticky Navigation
2. Hero Section
3. About Section — variant A (image left) — **heading text says "About Kettlebell Classes"** (see flag below)
4. Membership / Pricing Section — **built, not hidden** (black bg, 3 tiers) — feature bullet lists are **not implemented** (see §3.5 flag)
5. Reviews / Testimonials Section (6 cards)
6. About Section — variant B (image right) — heading text says "About Yuliia Fok", body copy identical to variant A
7. Contact ("Get In Touch") Section
8. Footer — **3 columns only** (Brand, Quick Links, Follow Us) — no Support/legal column, 1 social icon only

> **Section removed vs. the raw Dev Mode export:** the "Our Programs" card grid (Yoga /
> Strength Training / CrossFit / Personal Coaching) that appeared `display:none` in the raw
> Figma CSS **does not exist at all** in the shipped component tree — it was fully removed,
> not just hidden. "Programs" only survives as a footer nav-link label and as testimonial
> role text ("Strength Training", "CrossFit Enthusiast", "Yoga & Wellness"). **Do not build
> a Programs section** unless the stakeholder asks for it back.

> **Flag — mismatched heading text:** Sections 3 and 6 are the same "About" block reused
> (image left vs. image right, identical body paragraphs and stat rows), but their **H2
> headings don't match**: variant A reads "About **Kettlebell Classes**", variant B reads
> "About **Yuliia Fok**". This looks like an unintentional edit in only one instance rather
> than a deliberate two-topic split. Confirm with the stakeholder which heading (or whether
> both instances) is correct before build — likely both should read "About Yuliia Fok," or
> the duplicate section should be removed/replaced with distinct content entirely.

---

## 3. Section-by-Section Specs

### 3.1 Header / Navigation
- **Background:** `rgba(0,0,0,0.95)`, sticky/fixed, height `80px`
- **Border:** `1px solid rgba(231,0,11,0.2)` bottom edge
- **Left:** Logo mark — red `40×40px` square with "IP" monogram + wordmark "IronPulse Gym" (white, 20px)
- **Center/Right nav (white, 16px, medium weight):** Home · Classes · Membership · Reviews · About Me · Contacts
- **CTA button:** "Join Now" — red `#E7000B` bg, white text, `8px` radius, padding `8px 16px`

### 3.2 Hero Section
- **Background:** full-bleed photo (`0809(22).png` gym/training image) with `rgba(0,0,0,0.55)` dark scrim overlay
- **Heading (H1):** "Train Hard. Live Strong." — white
- **Subcopy:** supporting sentence about transformation — white @ 90% opacity, max-width ~672px
- **Primary CTA button:** "Get free class" — red bg, white text, `8px` radius
- **Stat/feature strip (3 glass cards, equal width, gap ~24px):**
  Each card: `rgba(255,255,255,0.1)` fill, `1px solid rgba(255,255,255,0.2)` border, `10px` radius, `24px` padding, `40×40px` icon (red stroke), bold white title, muted white (80%) description.
  1. **Strength for daily life** — "Full-body training for all fitness levels" (icon: interlocking rings/target motif)
  2. **Small group coached classes** — same label as description (icon: people/group motif)
  3. **Community** — "Join a supportive fitness family" (icon: heart/checkmark motif)

### 3.3 About Section (appears twice — variants A & B) — *content confirmed from `index.tsx`*
- **Background:** white
- **Layout:** two-column, 728px image + 728px text, ~86px top offset on the text column so it sits mid-image
  - Variant A (Section1): image left, text right — heading "About **Kettlebell Classes**"
  - Variant B (Section4): image right, text left (mirrored) — heading "About **Yuliia Fok**"
  - See the heading-mismatch flag in §2 — resolve before implementing which text is correct.
- **Image:** gym interior photo (`imgImageGymInterior`, exported as a `.png` asset), `10px` radius
- **Overlaid stat badge on image:** red `#E7000B` card, `10px` radius, drop shadow, contains "**10+**" (white, 36px) / "Years of Excellence" (white, 16px)
- **Body copy (identical in both instances, verbatim from source):**
  1. "IronPulse Gym is more than just a fitness center – it's a community of driven individuals committed to pushing boundaries and achieving greatness. Founded in 2015, we've helped thousands transform their lives through fitness."
  2. "Our mission is simple: to provide world-class training, expert guidance, and an environment that inspires you to become the best version of yourself. Whether you're a beginner or an elite athlete, we have the tools and expertise to help you succeed."
- **Stat row (3 items, icon-chip + number + label):**
  - 👤 **5000+** — Members
  - 🏋 **50+** — Expert Trainers
  - 📅 **100+** — Classes Weekly
  Each stat: `48×48px` red icon chip (`4px` radius, white 2px stroke icon), number in 24px, label in 16px muted gray.

### 3.4 Programs Section — **not part of this build**
Confirmed absent from the shipped component tree (see §2). Do not implement unless
explicitly requested — this section's earlier "hidden" flag is resolved: it was removed,
not just visually hidden.

### 3.5 Membership / Pricing Section — *content confirmed from `index.tsx`, feature bullets confirmed absent*
- **Background:** `#000000`
- **Heading (H2, centered, white):** "Membership"
- **Subcopy (centered, white @ 80%):** "Choose the plan that fits your lifestyle and start…"
- **Pricing cards (3, centered row) — all three tiers ARE implemented:**
  1. **2x / week** — white card, `1px solid #364153` border, `14px` radius. Price "**$125**/month" (48px). Bottom banner button: "20% discount for first 10 members" (red bar, full width).
  2. **3x / week — "Most Popular"** *(featured/elevated card)* — same white card but scaled up (~1.05×), `2.1px` red border, stronger drop shadow, red "Most Popular" ribbon badge top-center. Price "**$159**/month" (larger, 50.4px). Same discount banner button.
  3. **Drop-in** — Price "**$20**/session". Same discount banner button.
  > **Confirmed, not a flag anymore:** unlike the raw Dev Mode export (which listed hidden
  > `display:none` bullet feature lists per tier — *Access to gym floor, Everything in
  > Basic, Unlimited personal training,* etc.), **the shipped component has no feature
  > bullet lists at all.** Each card is just: tier name → price → discount CTA button. Build
  > it exactly this way — do **not** add the bullet lists back in unless the stakeholder
  > asks for them, since they were deliberately dropped from the real implementation, not
  > just visually hidden.

### 3.6 Reviews / Testimonials Section
- **Background:** `#F9FAFB`
- **Heading (H2, centered):** "Reviews"
- **Subcopy (centered):** "Real stories from real people who transformed their…"
- **Card grid:** 6 cards, 3-column × 2-row, `485px` wide, `14px` radius, `1px solid #E5E7EB` border, white bg, `24px` padding
  Each card: 5 filled red star icons row, italic quote (16px, `#364153`), then name (16px, black) + role/category (14px, gray).
  1. Sarah Johnson — Weight Loss Transformation
  2. Mike Rodriguez — Strength Training
  3. Emily Chen — CrossFit Enthusiast
  4. David Thompson — Yoga & Wellness
  5. Lisa Martinez — Fitness Journey
  6. James Wilson — Premium Member

### 3.7 Contact Section — "Get In Touch"
- **Background:** `#F9FAFB`
- **Heading (H2, centered):** "Get In Touch"
- **Subcopy (centered):** "Ready to start your fitness journey? Fill out the…"
- **Two-column layout (552px each, 48px gap):**
  - **Left — Contact Information card:**
    - H3 "Contact Information"
    - 4 rows, each a `48×48px` red icon chip + label (16px black) + value (16px gray):
      - **Address** — 123 Fitness Avenue, Wellness District, New York, NY…
      - **Phone** — +1 (555) 123-4567
      - **Email** — info@ironpulsegym.com
      - **Opening Hours** — Mon–Fri 5:00 AM–11:00 PM · Sat–Sun 7:00 AM–…
    - Below: embedded map placeholder, `552×256px`, `#D1D5DC`/`#EEEEEE` fill, `10px` radius (swap for real map embed/iframe)
  - **Right — Contact form card:** white, `1px solid #E5E7EB` border, `14px` radius, `32px` padding
    - H3 "Join Group Class Today"
    - Fields (each: 14px/500wt label + input, input bg `#F3F3F5`, `8px` radius, `36px` height, placeholder text `#717182`):
      1. **Full Name** — text input, placeholder "John Doe"
      2. **Email** — email input, placeholder "john@example.com"
      3. **Phone Number** — tel input, placeholder "+1 (555) 123-4567"
      4. **Membership Option** — select/dropdown, placeholder "Select a plan"
      5. **Message (Optional)** — textarea (min-height 64px), placeholder "Tell us about your fitness goals..."
    - **Submit button:** "Submit Application" — full width, red bg, white text, `8px` radius

### 3.8 Footer — *confirmed 3-column layout from `index.tsx` (grid-cols 352px × 3)*
- **Background:** `#000000`
- **3-column grid** (the "Support" column and extra social icons speculated from the raw
  Dev Mode export are **not present** in the shipped component — build only these 3):
  1. **Brand block:** red 40×40 "YF" mark + "Yuliia Fok" wordmark, tagline paragraph (white @ 70%)
  2. **Quick Links:** Home, About Us, Programs, Membership
  3. **Follow Us:** **one** social icon button (36×36px, `rgba(255,255,255,0.1)` bg, `4px` radius, white stroke, Instagram-style camera/ring glyph). Confirm with stakeholder whether more platforms (Facebook, X, TikTok, etc.) should be added — as shipped, only one is wired up.
- **Divider:** `1px solid rgba(255,255,255,0.1)` top border, `32px` top padding
- **Copyright line (centered):** "© 2026 Yuliia Fok. All rights reserved." (white @ 70%, 14px)

---

## 4. Assets Needed

- Hero background photo (dark, gym/training scene) — exported as `imgBody` in `index.tsx`
- Gym interior photo (used in both About sections) — exported as `imgImageGymInterior`
- Icon set (line icons, 2–3.3px stroke, red or white depending on context) — already extracted
  in the uploaded `svg-zv3a0bbje3.ts` path map; reuse this file (rename/port to `.js` per the
  JSX convention in §0) rather than re-sourcing icons from a library: dumbbell/target
  (strength), people/group, heart-check (community), person, dumbbell-alt (trainers),
  calendar (classes), pin (address), phone, envelope, clock, checkmark, star (ratings),
  chevron-down (select), Instagram-style social icon
- Google Maps embed (or static map image) for Contact section — currently a plain
  `#D1D5DC`/`#EEEEEE` placeholder box in source, no live embed wired up
- ~~4 program photos (Yoga, Strength Training, CrossFit, Personal Coaching)~~ — not needed;
  Programs section is not part of this build (§3.4)

## 5. Interaction / State Notes

- Nav links, footer links, social icons — need hover states (not specified in static export; recommend subtle opacity/underline treatment consistent with brand red accent)
- "Most Popular" pricing card should read as visually elevated (larger scale, red border, shadow, ribbon) at all breakpoints
- Form inputs: define focus state (e.g., red 1–2px outline) — not present in static export
- Membership dropdown ("Select a plan") needs an accessible native or custom select component
- Confirm responsive behavior below 1536px: stat rows, pricing cards, and the 6-card review grid will need to reflow to 2-col / 1-col on tablet/mobile

## 6. Open Items for Stakeholder Confirmation

1. **Duplicate About section heading mismatch (3.3):** variant A says "About Kettlebell
   Classes," variant B says "About Yuliia Fok," same body copy in both. Which heading is
   correct — or should one instance be removed / given genuinely distinct content?
2. **Membership pricing cards (3.5):** confirmed no feature bullet lists ship in the real
   component — is that intentional (cards are meant to be minimal: name/price/CTA only), or
   should the plan-benefit bullets be added back in?
3. **Footer social links (3.8):** only one platform (Instagram-style icon) is wired up —
   should Facebook/X/TikTok/etc. be added?
4. Real Google Maps integration vs. keeping the static gray placeholder box for the Contact
   section's map area.
5. Confirm the "Programs" **link** should stay in header nav / footer Quick Links even
   though there's no Programs section on the page to link to (dead/placeholder link,
   presumably meant for a future page or anchor).

*(Resolved from the earlier draft, no longer open: the Programs section itself is confirmed
absent from the build — see §3.4 — and the footer's "Support" column is confirmed absent,
not just hidden — see §3.8.)*
