# DopaMint — The Renaissance Edition ⚡

> **"Give your AI some agency. Not a blank check."**  
> *Built in San Francisco · Agents that actually go.*

[![Version](https://img.shields.io/badge/version-v0.0.1-black.svg?style=flat-square)](./CHANGELOG.md)
[![Runtime](https://img.shields.io/badge/runtime-bun-black.svg?style=flat-square&logo=bun)](https://bun.sh)
[![Framework](https://img.shields.io/badge/framework-React_19_+_Vite-black.svg?style=flat-square&logo=react)](https://vitejs.dev)
[![Styling](https://img.shields.io/badge/styling-TailwindCSS_v4-black.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 🏛️ Overview

**DopaMint** is a modern autonomous agent platform where real-world agency is bounded by a deterministic, cryptographic trust layer. Rather than treating AI as passive text generation chatbots, DopaMint provides a squad of specialized agents capable of executing payments, onchain swaps, travel logistics, and communications — strictly within user-defined policy bounds.

Designed with a high-fashion neoclassical **Renaissance Edition** aesthetic (warm parchment tones, full-bleed atmospheric artwork portals, and strict monochromatic black/white typography).

---

## ✨ Features

- **🛡️ Deterministic Trust Layer:** The model proposes; the system decides. Capability tokens, scoped permissions, and hardware enclave enforcement.
- **📜 Verifiable Evidence & Action Receipts:** Every consequential action produces a cryptographic receipt tied to a forward-secure Merkle hash chain.
- **👥 8 Specialized Autonomous Agents:**
  - `Sol` · 24/7 DEX Liquidity & Swap Routing (Base L2)
  - `Iris` · HTTP x402 Machine Settlements & Micropayments
  - `Kai` · Bounded Portfolio & Enclave Policy
  - `Ada` · Travel Bookings & Multi-leg Itineraries
  - `Eve` · Calendar & Meeting Scheduling
  - `Nora` · Deterministic Inbox Triage & Sender Verification
  - `Zara` · Procurement & Price Tracking
  - `Leo` · Verifiable Deep Research & Paper Synthesis
- **🎙️ Voice Native & WebRTC Audio:** Real-time speech synthesis and live iPhone call simulator with dynamic frequency waveforms.
- **💬 iMessage Ubiquity via Linq:** Text directly to execute complex real-world workflows without downloading an app.
- **⛓️ Onchain x402 Machine Settlements:** Native machine-to-machine HTTP payments with instant receipt verification.
- **🧠 Memory Provenance:** Inspectable 6-dimension memory atoms with immediate user-directed revocation.
- **📊 Developer Console & Policy Engine:** Live runtime inspection and `policy.payments-v2.ts` code contract viewer.

---

## 🛠️ Tech Stack

- **Runtime & Package Manager:** [Bun](https://bun.sh)
- **Frontend Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** [Vite 8](https://vitejs.dev)
- **Styling:** TailwindCSS v4 + Custom Renaissance Parchment Tokens
- **Icons & Motion:** Lucide React, GSAP, Lenis Smooth Inertia Scroll
- **Manifest Management:** `onpkg` (Online Package & Template Manager)

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure [Bun](https://bun.sh) is installed on your system:
```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Start Development Server
```bash
bun run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
bun run build
```

### 5. Preview Production Bundle
```bash
bun run preview
```

---

## 📁 Project Structure

```text
dopamint_new/
├── onpkg.json                 # AI Agent Project Manifest
├── onpkg_docs/                # Architecture, design & milestone docs
├── public/                    # Static assets (sequence frames, videos, avatars)
├── src/
│   ├── components/
│   │   ├── LordIcon.tsx       # Lordicon animated icon wrapper
│   │   └── ui/                # Shared UI primitives
│   │       ├── button.tsx / Type1Button.tsx / staggered-grid.tsx
│   │       ├── burn-transition/       # WebGL burn-edge section transition
│   │       │   ├── index.tsx          # Public component
│   │       │   ├── useBurnAnimation.ts # WebGL engine hook
│   │       │   └── mapping.ts         # Color/param mapping utils
│   │       └── scroll-dissolve-reveal/ # WebGL scroll-jacked hero dissolve
│   │           ├── index.tsx          # Public component + scroll physics
│   │           ├── shaders.ts / scenes.tsx / scrollLock.ts
│   ├── data/
│   │   └── agents.ts          # 72-agent roster catalog
│   ├── layouts/
│   │   └── RootLayout.tsx     # Lenis smooth scroll inertia wrapper
│   ├── lib/                   # lenis singleton, cn() util
│   ├── pages/
│   │   ├── home/
│   │   │   ├── HomePage.tsx   # Landing page composition
│   │   │   └── sections/      # One folder per landing section
│   │   │       ├── Navbar.tsx / Hero.tsx / RealAsks.tsx / IMessageBubble.tsx
│   │   │       ├── AgentRoster.tsx / Authority.tsx / Roadmap.tsx / Footer.tsx
│   │   │       ├── Evidence/          # Architecture flow section
│   │   │       │   ├── EvidenceSection.tsx / AgentNode.tsx
│   │   │       └── MemoryWallet/      # iPhone chat lifecycle simulation
│   │   │           ├── MemoryWalletSection.tsx  # State machine + effects
│   │   │           ├── PhoneFrame.tsx / LockScreen.tsx / ChatScreen.tsx
│   │   │           └── TakeProfitCard.tsx / smoothScroll.ts / useConfettiCelebration.ts
│   │   ├── AboutPage.tsx / ContactPage.tsx / NotFoundPage.tsx
│   ├── index.css              # Renaissance typography & color tokens
│   └── main.tsx               # App entrypoint
├── CHANGELOG.md               # Release history
└── README.md
```

---

## 🏛️ Architecture Notes

- **Section-per-folder landing page:** `pages/home/sections/` owns one component per scroll section; `HomePage.tsx` is composition only.
- **Shared UI lives in `components/ui/`** as folder modules (`burn-transition/`, `scroll-dissolve-reveal/`) — consumers import the folder, internals stay private.
- **Pure data is extracted** to `src/data/` (`agents.ts`) so marquee content has no React coupling.
- **Scroll coordination:** `RootLayout` owns the global Lenis instance (module singleton in `lib/lenis.ts`); scroll-jacked components pause/resume it via `dataset.scrollLocked` so virtual scrolling never fights a locked overlay.

## 📄 License

MIT © 2026 DopaMint Inc. Built in San Francisco.
