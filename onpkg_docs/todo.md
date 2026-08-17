# Dopamint — Renaissance Edition Implementation Plan & Milestone Todo ⚡

## Reference Aesthetic: Shopify Editions "The Renaissance Edition"
- **Canvas Base:** Soft warm parchment & natural editorial cream (`#EBEAE5`, `#E6E5DF`, `#F4F3EE`).
- **Sidebar:** Persistent fixed left chapter rail with Roman numerals (`I` to `XII`), active scrollspy dot, and brand mark.
- **Typography:** High-fashion Renaissance editorial serif (`Fraunces` / `Playfair Display` / `Cormorant Garamond`) paired with bold modern Grotesk (`Cabinet Grotesk` / `Plus Jakarta Sans`) and crisp monospace (`JetBrains Mono`).
- **Section Rhythm:** Full-bleed painterly chapter portal intros (`Agents`, `Authority`, `Voice`, `Onchain`, `Ecosystem`) followed by 2-column card showcases with floating prompt pills, iPhone voice mockups, and clean micro-feature grid footers.

---

## 10-Phase Milestone Checklist

- [x] **Phase 1: Video Reference & Visual Architecture Extraction**
  - Extract frames from `sample/Screencast from 2026-08-17 19-04-54.mp4`.
  - Analyze typography, fixed chapter sidebar, floating prompt cards, and chapter portals.

- [ ] **Phase 2: Renaissance Design System & CSS Tokens (`src/index.css`)**
  - Add warm parchment color palette (`--color-parchment: #EBEAE5`, `--color-canvas-subtle: #E5E4DE`, `--color-charcoal: #141820`).
  - Import Google Fonts: `Playfair Display` / `Cormorant Garamond` (Italic Serif) + `Plus Jakarta Sans` + `JetBrains Mono`.
  - Add noise overlay texture, painterly canvas styles, and frosted prompt glassmorphism.

- [ ] **Phase 3: Fixed Left Chapter Sidebar & Top Navigation**
  - Build `src/components/renaissance/ChapterSidebar.tsx` with Roman numerals `I` to `XII` and scrollspy active indicators.
  - Build `src/components/renaissance/RenaissanceNavbar.tsx` with `DopaMint Edition Winter '26`, `Chapters ⌵`, `Search Q`, and pill button.

- [ ] **Phase 4: Chapter I — The Renaissance Hero & Portal Intro**
  - Build `src/components/renaissance/RenaissanceHero.tsx` with classical neoclassical painterly composition, floating DopaMint Sol prompt pill (`"Swap 500 USDC to ETH when it drops under 3,400"`), and live limit badges.

- [ ] **Phase 5: Chapter II — Why We Built This & Real Work Track Record**
  - Build `src/components/renaissance/RenaissanceWhyWeBuilt.tsx` with Old World (Assistants) vs New World (Agents) diagram, formula, and investor ribbon.

- [ ] **Phase 6: Chapter III & IV — The Agent Squad & Authority Trust Layer**
  - Build `src/components/renaissance/RenaissanceAgentRoster.tsx` with 8 agents (Sol, Iris, Kai, Ada, Eve, Nora, Zara, Leo) and voice tests.
  - Build `src/components/renaissance/RenaissanceTrustSimulator.tsx` with floating prompt card and deterministic policy verification.

- [ ] **Phase 7: Chapter V & VI — Execution Isolation & Evidence Action Receipts**
  - Build `src/components/renaissance/RenaissanceEvidence.tsx` with Action Receipt #8F72A and interactive Merkle hash chain breakage test.
  - Build `src/components/renaissance/RenaissanceMemory.tsx` with inspectable memory card and 6 dimensions.

- [ ] **Phase 8: Chapter VII & VIII — iMessage Messaging & Voice Native**
  - Build `src/components/renaissance/RenaissanceMessaging.tsx` with Linq iMessage demo.
  - Build `src/components/renaissance/RenaissanceVoice.tsx` with live iPhone voice call simulation and audio waveform.

- [ ] **Phase 9: Chapter IX, X, XI, XII — Agency Payments, Onchain x402, Ecosystem & Principles**
  - Build `src/components/renaissance/RenaissanceOnchain.tsx` with swap, x402 machine payments, CEX orders, and ecosystem delegation.
  - Build `src/components/renaissance/RenaissanceFailureConsole.tsx` and 5 Principles.

- [ ] **Phase 10: Master Page Assembly & Build Verification**
  - Assemble in `src/pages/HomePage.tsx`.
  - Verify with `bun x tsc --noEmit` and `bun x vite build`.
  - Synchronize via `onpkg sync`.
