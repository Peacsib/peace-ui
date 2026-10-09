---
name: peace-ui
description: Peace Sibanda's signature design engineering system and UI philosophy for high-trust institutional platforms, financial applications, academic portals (e.g. LogMate), and remittance systems (e.g. EezySend). Use when building or reviewing institutional dashboards, atmospheric glassmorphic layouts, editorial typography, authentic documentation/print slips, high-density workflows, or professional enterprise web apps.
---

# Peace UI: Institutional Design Engineering System & UI Philosophy

## Initial Response

When this skill is first invoked without a specific question, respond with:

> I'm ready to help you design and build interfaces using **Peace UI** — institutional authority, atmospheric depth, editorial typography, calm glassmorphism, and senior engineering precision across fintech, edtech, and enterprise platforms.

Do not provide extraneous commentary until the user asks a question or presents a task.

---

## The Philosophy of Peace UI

**Peace UI** is Peace Sibanda's signature design engineering philosophy, forged across mission-critical, high-trust platforms spanning **banking & remittances** (e.g., CABS EezySend, Old Mutual) and **higher education & work-related learning** (e.g., University of Zimbabwe LogMate).

Peace UI rejects generic template aesthetics, juvenile bouncy animations, and marketing buzzwords in favor of **quiet institutional authority, atmospheric visual depth, human typographic warmth, and rock-solid engineering hygiene**.

> *"True institutional software doesn't scream for attention. It inspires unshakeable confidence through precision, clarity, authentic authority, and thoughtful human craft."*

---

## Core Pillars of Peace UI

### 1. Institutional Dominance & Anchor Hierarchy
Every high-trust system is backed by an anchor institution (a licensed bank, premier university, healthcare authority, or enterprise parent).
- **The Anchor Dominates**: The licensed institution (e.g., *CABS*, *Old Mutual*, *University of Zimbabwe*) anchors trust in visual scale, placement, and copyright attribution.
- **Product Identity Provides Workflow**: The product or channel brand (e.g., *EezySend*, *LogMate*) delivers clear functional identity without eclipsing the anchor entity.
- **Monochromatic & Vector Purity**: Secondary channel logos must be crisp vector SVGs (white on dark, monochromatic on light), preventing competing clashes.
- **Exact Official Casing & Sacred Naming**:
  - Financial/Remittance: `"EezySend REMITTANCE TRANSFER"`, uppercase personal names (`JOHN DOE`).
  - Academic/Enterprise: `"LogMate — Work. Learn. Log."`, `"University of Zimbabwe"`, canonical roles (`Student`, `Supervisor`, `Operations Officer`).

### 2. Atmospheric Depth & The Frosted Glass Matrix
Peace UI interfaces feel grounded in real-world atmosphere rather than flat, sterile white space:
- **Layered Environmental Backdrops**:
  - For academic/field apps (*LogMate*): Rich golden-hour or twilight photography of real campus or professional environments with soft gradient masks.
  - For financial/dashboard systems (*EezySend*): Deep institutional gradient mesh (dignified navy-to-emerald or slate-to-cobalt).
- **Calm, High-Elevation Glassmorphism**:
  - Floating frosted card containers (`backdrop-blur-xl`, `bg-slate-900/40` or `bg-white/80`).
  - Subtle hairline borders (`border-white/10` to `border-white/60`, or `border-slate-200/80`).
  - Soft ambient shadows (`shadow-[0_12px_40px_rgba(0,0,0,0.12)]`).
  - Seamless dark/light contrast ensuring AAA accessibility.

### 3. Editorial Typographic Soul: Precision Meets Human Warmth
Enterprise software often suffers from cold, generic typography. Peace UI pairs high-density functional sans-serif with **selective, expressive italic serif or script accents**:
- **Workhorse UI Font**: Clean, modern geometric or grotesque sans-serif (Inter, Geist, Plus Jakarta Sans, SF Pro) for data tables, metrics, inputs, and controls.
- **Editorial Soul Accents**: Selective words in hero headers or welcome screens use warm, light italic serif or cursive styling (e.g., *"Your Work-Related Learning Journey, Simplified."* with *Your* and *Simplified.* in warm ochre serif italics; *"Welcome Back"* with *Back* highlighted).
- **Purpose**: Creates instant emotional connection and prestige without sacrificing enterprise density or legibility.

### 4. Domain-Adaptive Color Harmonies
Peace UI does not force a single palette onto every project. It defines **curated, high-trust chromatic systems** matched to the domain:

| Domain | Anchor Palette | Accent & Highlight | Status / Semantics | Representative Project |
| :--- | :--- | :--- | :--- | :--- |
| **Academic & Professional (EdTech)** | Deep Academic Navy (`#0A3E94`, `#082F6B`) | Warm Amber / Golden Ochre (`#D97706`, `#F59E0B`) | Emerald (Active), Ochre (Pending), Slate (Draft) | **LogMate** (University of Zimbabwe) |
| **Fintech & Remittances (Banking)** | Forest Emerald (`#00332c`), Slate Charcoal (`#0f172a`) | Jade Emerald (`#00a86b`, `#10b981`), Cobalt Blue | Rust Orange (`#C7510A` Awaiting), Emerald (Collected), Rose (Failed) | **EezySend** (CABS / Old Mutual) |
| **Telemetry & Cloud Ops** | Obsidian Slate (`#020617`, `#0f172a`) | Electric Cyan (`#06b6d4`), Precision Violet | Emerald (UP), Rust (`#C7510A` Degraded), Rose (DOWN) | Infrastructure Dashboards |

### 5. Bottom-Anchored Quick Capability Docks
On landing and authentication screens, Peace UI grounds the operator with a **horizontal dock of frosted capability pills**:
- Placed along the lower viewport on desktop (`grid grid-cols-2 md:grid-cols-4 gap-3`).
- Frosted glass capsule cards with subtle border, micro-icon, bold title, and single-line descriptive subtitle (e.g., `Track Placements`, `Keep Logbooks`, `Build Skills`, `Upload Evidence`).
- Subtle hover physics: `hover:-translate-y-0.5 transition-all duration-200`.

### 6. Multi-Step Form Progression & Guided Flows
Complex institutional inputs are broken down into calm, bite-sized steps:
- **Pill Capsule Step Indicators**: Clean horizontal indicator bars (`Step 1 of 2 · Account Basics`) with dual-capsule progress bar.
- **Contextual Input Hints & Glows**: Active inputs feature subtle amber or cobalt ring glows (`focus:border-amber-400 focus:ring-amber-400/20`), accompanied by format helpers (e.g., `Format: <regNumber>@uofzmail.uz.ac.zw` with a dot indicator).
- **Directional CTAs**: Action buttons include subtle micro-arrows (`Continue to Academic Info ->`, `Sign In ->`) conveying forward momentum.

### 7. Authentic Official Documentation & Digital Verification
When platforms generate official records (transcripts, logbook sign-offs, banking vouchers, remittance receipts):
- **Print Perfection**: Clean `@media print` rules hiding navigation and chrome.
- **Colon-Aligned Key-Value Layout**:
  ```text
  Student ID / Reg       : R2921428
  Full Name              : PEACE SIBANDA
  Academic Institution   : UNIVERSITY OF ZIMBABWE
  Placement Period       : 2026/2027 ACADEMIC YEAR
  Supervisor Status      : VERIFIED & SIGNED OFF
  ```
- **Dual-Ring Digital Verification Stamp**:
  - Dual concentric borders (`border-2 border-dashed`).
  - Rotated -6° to -8° for authentic ink-stamp presence.
  - Institution authority text: `"UNIVERSITY OF ZIMBABWE ELECTRONIC VERIFICATION"` or `"CABS ELECTRONIC VERIFICATION"`.

### 8. Quiet, Unpretentious Security Signals
Never shout marketing claims like *"256-bit unbreakable military-grade encryption"*.
- A clean padlock or shield icon with understated text: **`"Secure, encrypted connection"`** or **`"Secured"`**.
- Quiet confidence inspires institutional trust.

### 9. Author Signature & Human Craft Attribution
Peace UI values authorship and pride of craft:
- Subtle, dignified footer attribution:
  `Crafted with excellence by Peace Sibanda` (linking to [Peace Sibanda LinkedIn](https://www.linkedin.com/in/peacesibanda/)).

### 10. The 3-Tier Information Depth Rule
Operators are never stuck on a surface-level summary:
1. **Tier 1 — High-Density Table / Feed**: Scannable, search-filtered, paginated log with status pills, timestamps, and key identifiers.
2. **Tier 2 — Contextual Action Modal**: Quick breakdown, immediate actions (re-send, reverse, approve, print).
3. **Tier 3 — Full-View Record / Drawer**: Complete metadata breakdown, audit trail, carrier/network logs, attachments.
4. **Tier 4 — Official Export / Print Document**: PDF/XLSX export or thermal/A4 print slip with digital verification.

### 11. Senior Engineering Rigor & Zero-Fluff Code
- **Turbopack & Modern Next.js First**: Strict compatibility with Next.js App Router and Turbopack.
- **Zero Lint / Zero Warning Tolerance**: `npx tsc --noEmit` must pass with 0 errors.
- **Pure WebP & SVG Pipeline**: WebP for all photography; SVGs for all logos, stamps, and icons. Never commit uncompressed raster assets.
- **Clean Configuration**: Never track `.env*` or internal swagger schemas in git.

---

## Detailed Specifications & Patterns

- [Component Recipes](./RECIPES.md) — Production-ready TSX implementations of the Editorial Hero, Auth Card, Capability Dock, Digital Stamp, and Print Documents.
- [Universal Audit Checklist](./CHECKLIST.md) — Inspection checklist across both Fintech, EdTech, and Enterprise platforms.
