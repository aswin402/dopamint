# Changelog

All notable changes to the **DopaMint** autonomous agent platform website are documented in this file.

## [Unreleased]

### 🏗️ Architecture Refactor (no behavior change)
- **Section-based landing architecture:** all Renaissance sections moved from flat `src/components/renaissance/*` to `src/pages/home/sections/*`, one component per scroll section; `HomePage` is now pure composition.
- **Monolith splits:**
  - `RenaissanceMemoryWallet` (972 LOC) → `sections/MemoryWallet/` (state-machine entry, `PhoneFrame`, `LockScreen`, `ChatScreen`, `TakeProfitCard`, `smoothScroll` util, `useConfettiCelebration` hook).
  - `BurnTransition` (932 LOC) → `ui/burn-transition/` folder module (`index` shell, `useBurnAnimation` WebGL engine hook, `mapping` utils).
  - `scroll-dissolve-reveal` (601 LOC) → `ui/scroll-dissolve-reveal/` folder module (`shaders`, `scenes`, `scrollLock`).
  - `RenaissanceEvidence` (561 LOC) → `sections/Evidence/` (`EvidenceSection` + `AgentNode`).
  - `RenaissanceAgentRoster` (668 LOC): 72-agent data array extracted to `src/data/agents.ts`.
- **README project structure synced to actual tree**; template scaffolding (About/Contact/NotFound) intentionally left untouched.

## [v0.0.1] - 2026-08-17

### 🚀 Initial Public Release

#### ✨ Design & Architecture (The Renaissance Edition)
- **Aesthetic Direction:** Inspired by high-fashion neoclassical editorial design (Shopify Editions *The Renaissance Edition*), featuring warm natural parchment tones (`#EBEAE5`, `#F4F3EE`), atmospheric full-bleed artwork canvases, and high-contrast typography.
- **Strict Monochromatic Font Palette:** Exclusively black (`#000000`, `#141820`), pure white (`#FFFFFF`), and neutral grayscale variants across all headings, body text, monograms, metadata, and controls.
- **Typography System:** High-editorial Italian/French serif display (`Playfair Display`, `Cormorant Garamond`) paired with modern grotesque sans (`Plus Jakarta Sans`) and crisp developer monospace (`JetBrains Mono`).
- **Smooth Inertia Scrolling:** Integrated `Lenis` smooth inertial momentum scrolling synchronized with GSAP ScrollTrigger.

#### 🤖 Complete Squad & Agent Roster
- **8 Production Autonomous Agents:**
  - **Sol (Trading):** 24/7 DEX liquidity watching and policy-scoped swap routing on Base L2.
  - **Iris (Onchain):** HTTP x402 machine-to-machine micropayments and onchain settlements.
  - **Kai (Finance):** Bounded portfolio management and MPC hardware enclave wallet rules.
  - **Ada (Travel):** Multi-leg trip planning, flight routing, and hotel bookings with strict budget enforcement.
  - **Eve (Calendar):** Cross-timezone scheduling, conflict resolution, and meeting logistics.
  - **Nora (Inbox):** Deterministic email triage, sender verification, and draft staging.
  - **Zara (Shopping):** Scoped procurement, price tracking, and receipt generation.
  - **Leo (Research):** Deep verifiable paper and technical documentation synthesis.
- **Web Speech Voice Synthesis:** Live voice auditions for agents with low-latency client-side audio rendering.

#### 🛡️ Trust Layer, Verification & Cryptographic Evidence
- **Interactive Policy Playground:** Real-time spending threshold slider ($5, $42, $180) evaluating `payments.send` under $100 limits with immediate `DECISION → EXECUTE` vs `BLOCKED` verdicts.
- **Action Receipt #8F72A:** Verifiable cryptographic receipt generation for autonomous bookings.
- **Tamper-Evident Merkle Hash Chain:** Interactive multi-block cryptographic ledger simulation with real-time hash invalidation detection.
- **Memory Provenance Atom:** Inspectable 6-dimension memory card (*Source, Timestamp, Confidence, Provenance, Integrity, Instant Revocation*).

#### 📱 Native Interfaces & Integrations
- **iOS iMessage Onboarding via Linq:** Interactive SMS/iMessage conversation thread showing direct natural language task resolution.
- **Voice Native iPhone Simulator:** iPhone calling interface featuring real-time harmonic audio frequency waveform canvas.
- **Onchain x402 Machine Settlements:** HTTP 402 challenge handling without human forms or checkout pages.
- **Ecosystem Matrix:** Integrations for Gmail, Telegram, WhatsApp, OKX, Base, Stripe, PayPal, Notion, and GitHub.
- **Developer Console & Policy Schema:** Live HUD telemetry dashboard and `policy.payments-v2.ts` code contract viewer.

#### 🛠️ Tech Stack & Tooling
- **Framework:** React 19 + TypeScript + Vite 8
- **Runtime & Package Manager:** Bun
- **Styling:** TailwindCSS v4 + Custom Design Tokens
- **Icons & Motion:** Lucide Icons, GSAP, Lenis, CSS Micro-animations
- **AI Agent Project Manifest:** Managed & synchronized with `onpkg`
