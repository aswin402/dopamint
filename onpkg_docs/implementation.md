# Technical Implementation Plan — Dopamint 💻

## 1. System Architecture & Tech Stack

- **Runtime & Package Manager:** [Bun](https://bun.sh) (Ultra-fast JavaScript & TypeScript runtime)
- **Framework:** [React 19](https://react.dev) + [Vite 8](https://vite.dev) (Modern ESM bundler)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/vite` plugin
- **Motion & Kinetic UI:** [Framer Motion](https://www.framer.com/motion/) + [GSAP 3](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **State Management:** [Zustand 5](https://github.com/pmndrs/zustand)
- **Icons & Visuals:** [Lucide React](https://lucide.dev) + Custom SVG Neural/Biometric assets
- **Data & Type Safety:** [TypeScript 5.8](https://www.typescriptlang.org) + [Zod 3.24](https://zod.dev)

---

## 2. Directory & File Organization

```
dopamint_new/
├── public/
│   ├── avatars/             # High-res creator portrait assets (aiko.jpg, serina.jpg, vale.jpg, etc.)
│   ├── videos/              # Intro video loops (Aiko.mp4, Serena.mp4, Sarang_Intro.mp4, video.mp4, etc.)
│   ├── favicon.svg          # Brand favicon
│   └── icons.svg            # SVG sprite
├── src/
│   ├── assets/              # Static vector illustrations & local images
│   ├── components/
│   │   ├── ui/              # Radix UI primitives (Button, Dialog, Accordion, Slider, Tabs)
│   │   ├── Navbar.tsx       # Frosted glass light-theme header with live status pill
│   │   ├── HeroSection.tsx  # Dynamic video hero with audio spectrum & quick switcher
│   │   ├── TwinExplorer.tsx # Interactive creator directory with filter tags & audio preview
│   │   ├── FaceTimeModal.tsx# Simulated WebRTC 1-on-1 video call modal with voice synthesis
│   │   ├── StudioWizard.tsx # 5-step interactive creator studio walkthrough
│   │   ├── LiveBroadcast.tsx# Twitch-style live twin broadcast player with dynamic chat feed
│   │   ├── RoiCalculator.tsx# Interactive creator revenue & time-saved calculator
│   │   ├── Architecture.tsx # 4-layer neural engine interactive deep dive
│   │   ├── CommunityFeed.tsx# Simulated Twitter/X creator community feed with live likes
│   │   ├── FaqSection.tsx   # Categorized accordion with security & ownership terms
│   │   ├── CtaBanner.tsx    # High-impact conversion closing banner
│   │   ├── Footer.tsx       # Light-theme luxury footer with newsletter capture
│   │   └── AudioWaveform.tsx# Canvas-based live audio frequency visualizer
│   ├── hooks/
│   │   ├── useAudioPlayer.ts# Voice sample player hook with synthesized waveforms
│   │   └── useLenisScroll.ts# Inertia smooth scrolling provider
│   ├── store/
│   │   └── useAppStore.ts   # Global state for active twin, modal visibility, and simulator data
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces for Twin, ChatMessage, StudioStep, etc.
│   ├── index.css            # Tailwind 4 theme tokens, light canvas utilities, custom scrollbars
│   ├── App.tsx              # Master layout composition with section anchors
│   └── main.tsx             # React DOM root hydration
├── onpkg_docs/              # AI Agent and Architecture Documentation
│   ├── prd.md
│   ├── content.md
│   ├── design.md
│   ├── implementation.md
│   └── todo.md
├── onpkg.json               # AI Agent manifest
├── package.json
└── vite.config.ts
```

---

## 3. Key Component Specifications & Data Flow

### A. Global State Store (`src/store/useAppStore.ts`)
- `selectedTwin: TwinProfile | null` — Currently active digital twin for preview or FaceTime.
- `isFaceTimeOpen: boolean` — Controls visibility of the FaceTime call simulator dialog.
- `isLiveMuted: boolean` — Audio mute toggle for background hero/stream videos.
- `activeCategory: string` — Filter category for Twin Explorer (`All`, `Musicians`, `Wellness`, etc.).
- `customTwins: TwinProfile[]` — User-created twins configured via the Creator Studio.

### B. Interactive FaceTime Call Simulator (`src/components/FaceTimeModal.tsx`)
- Renders an authentic mobile/desktop FaceTime interface.
- Streams the selected twin's real intro video (`/videos/<twin-video>.mp4`).
- Simulates real-time voice synthesis and interactive responses using the Web Speech API / synthesized audio waveform.
- Displays dynamic WebRTC latency telemetry, call timer (`00:32`), microphone toggle, camera swap, and full transcript.

### C. Live Stream Broadcast Simulator (`src/components/LiveBroadcast.tsx`)
- Mounts `/videos/Banner video.mp4` or `/videos/video.mp4` in a 16:9 theater container.
- Emits real-time simulated chat messages every 2.5 seconds from a randomized bank of fans.
- Provides interactive Superchat/Tip modal with animated confetti / particle rewards.

### D. Creator Studio 5-Step Wizard (`src/components/StudioWizard.tsx`)
- State machine managing steps 1 through 5 with back/next transitions.
- Step 1: Form state updates local twin configuration.
- Step 2: 5-angle biometric upload / camera snapshot simulation.
- Step 3: Interactive audio recording simulator with live frequency canvas.
- Step 4: Dropzone with simulated neural compilation terminal.
- Step 5: Test call trigger adding the new custom twin into `useAppStore`.

### E. Creator Revenue & ROI Calculator (`src/components/RoiCalculator.tsx`)
- Interactive dual sliders for Follower Count ($10K–$5M) and Subscription Price ($3–$49/mo).
- Calculates monthly gross, creator net (88%), and annual ARR using animated number transitions.

---

## 4. Verification, Testing & Build Script

```bash
# 1. Start development server
bun run dev

# 2. Typecheck & production bundle verification
bun run build

# 3. Preview production build
bun run preview
```
