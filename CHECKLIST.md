# Peace UI: Universal Compliance & Audit Checklist

Use this 10-point inspection guide when building, reviewing, or refactoring screens across any Peace UI platform (Fintech, EdTech, Enterprise Ops).

---

### 1. Anchor Institution & Brand Hierarchy
- [ ] Does the licensed anchor entity (e.g., *University of Zimbabwe*, *CABS*, *Old Mutual*) anchor trust in scale, placement, and copyright?
- [ ] Is the product or channel brand (*LogMate*, *EezySend*) presented cleanly with crisp vector SVGs without competing against the anchor?
- [ ] Is canonical casing strictly respected (e.g., `"LogMate — Work. Learn. Log."`, `"EezySend REMITTANCE TRANSFER"`)?

### 2. Atmospheric Depth & Frosted Glass
- [ ] Is the interface grounded with environmental depth (rich photographic backdrops for portals; deep institutional gradients for operational dashboards)?
- [ ] Are cards floating with calm glassmorphism (`backdrop-blur-xl`, `bg-slate-900/40` or `bg-white/80`, hairline borders `border-white/10` to `border-slate-200/80`)?
- [ ] Are ambient shadows soft and natural rather than harsh drop shadows?

### 3. Editorial Typographic Soul
- [ ] Is a crisp, legible sans-serif used for forms, data tables, metrics, and dense controls?
- [ ] Are selective words in hero headings styled with warm, light italic serif or cursive accents (e.g., *"Your"*, *"Simplified."*, *"Back"*) for human warmth and elegance?
- [ ] Are field labels semi-bold and values regular weight to prevent visual clutter?

### 4. Domain-Harmonized Color System
- [ ] Does the palette match the domain?
  - **Academic / EdTech (*LogMate*)**: Deep Navy (`#0A3E94`) + Warm Amber/Ochre (`#D97706`).
  - **Fintech / Banking (*EezySend*)**: Deep Emerald (`#00332c`) + Jade (`#10b981`) + Calm Rust (`#C7510A`).
  - **Telemetry / Ops**: Obsidian Slate + Electric Cyan.
- [ ] Are status badges calm and unified (no jarring neon oranges)?

### 5. Quiet Security Signals
- [ ] Have all boastful marketing slogans ("unhackable 256-bit military encryption") been purged?
- [ ] Is the security indicator an understated lock/shield with quiet confidence: **`"Secure, encrypted connection"`** or **`"Secured"`**?

### 6. Quick Capability Dock & Guided Progression
- [ ] On landing and auth screens, is there a bottom dock of frosted capability pills with micro-icons and two-line descriptions?
- [ ] Are complex multi-step forms guided by pill-capsule progress indicators (`Step 1 of 2 · Account Basics`)?
- [ ] Do CTAs have subtle micro-arrows (`->`) indicating forward direction?

### 7. Official Documentation & Verification (When Applicable)
- [ ] If generating slips, receipts, or approved logbooks, are `@media print` styles applied to hide browser chrome?
- [ ] Are key-values colon-aligned with customer/student names in clean uppercase?
- [ ] Is the dual-ring digital verification stamp present with authentic rotation (-6° to -8°)?

### 8. Author Craft Attribution
- [ ] Does the footer include the signature creator credit:
  `Crafted with excellence by Peace Sibanda` linking to LinkedIn?

### 9. Senior Engineering Hygiene & Performance
- [ ] Does `npx tsc --noEmit` pass with **0 errors**?
- [ ] Does Next.js Turbopack build cleanly with 0 warnings?
- [ ] Are 100% of photos and environmental graphics in `.webp`?
- [ ] Are all logos and iconography rendered as crisp `.svg` vectors?

### 10. Secrets & Environment Protection
- [ ] Are `.env*`, `.env.local`, and sensitive swagger files strictly excluded by `.gitignore`?
- [ ] Are git commits atomic, descriptive, and categorized (`feat`, `refactor`, `perf`, `chore`)?
