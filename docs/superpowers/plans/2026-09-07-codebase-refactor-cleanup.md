# Codebase Refactor & Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Eliminate hardcoded data, remove duplicated components and dead CSS/media, fix outstanding bugs and lints, and establish a clean, maintainable architecture across the Dopamint codebase.

**Architecture:** Centralize pipeline and conversation data into `src/data/`, extract shared components in `MemoryWallet/` (`IPhoneStatusBar`, `AgentAvatar`), de-duplicate capability pills in `EvidenceSection`, purge 438 lines of dead CSS and ~550KB of unused assets, and remove orphaned template starter pages (`AboutPage`, `ContactPage`, `LordIcon`).

**Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Bun.

---

## Global Constraints
- Zero breaking changes to visual presentation, animations, or responsive behavior.
- All unit tests (`bun test`) must pass at every task boundary.
- Zero TypeScript (`tsc -b`) errors and zero ESLint (`eslint .`) warnings/errors at completion.
- Production build (`vite build`) must succeed with no regressions.

---

### Task 1: Fix Bug in `TakeProfitCard.tsx` & ESLint Warning in `useBurnAnimation.ts`

**Files:**
- Modify: `src/pages/home/sections/MemoryWallet/TakeProfitCard.tsx:50-53`
- Modify: `src/components/ui/burn-transition/useBurnAnimation.ts:845-849`

**Interfaces:**
- Corrects typo `+142.36%)` to `+142.36%` in `TakeProfitCard`.
- Adds `canvasRef, containerRef` to `useEffect` dependency array in `useBurnAnimation`.

- [ ] **Step 1: Fix typo in TakeProfitCard.tsx**
Remove the unmatched closing parenthesis on line 51.

- [ ] **Step 2: Fix missing dependencies in useBurnAnimation.ts**
Update dependency array at line 847 from `[]` to `[canvasRef, containerRef]`.

- [ ] **Step 3: Verify with linter and tests**
Run: `npx eslint . && bun test`
Expected: 0 errors, 0 warnings; all 15 tests pass.

- [ ] **Step 4: Commit changes**
```bash
git add src/pages/home/sections/MemoryWallet/TakeProfitCard.tsx src/components/ui/burn-transition/useBurnAnimation.ts
git commit -m "fix: correct typo in TakeProfitCard and resolve ESLint hook dependency warning"
```

---

### Task 2: Prune Dead CSS from `src/index.css`

**Files:**
- Modify: `src/index.css:294-731`

**Interfaces:**
- Removes 438 lines of unreferenced CSS (`.isometric-cube-loader`, `.tower-loader`, `.mac-code-card`, `.metric-progress-card`).

- [ ] **Step 1: Remove unreferenced CSS classes in index.css**
Delete lines 294 through 731 containing the loaders and mac card styles.

- [ ] **Step 2: Verify build and styling**
Run: `npx vite build`
Expected: Succeeded, smaller CSS bundle size.

- [ ] **Step 3: Commit changes**
```bash
git add src/index.css
git commit -m "chore: prune 438 lines of unused loader and card CSS from index.css"
```

---

### Task 3: Delete Unused Media Assets from `src/assets/`

**Files:**
- Delete:
  - `src/assets/Div_Burn_out_image.webp`
  - `src/assets/logo-dark-purple.webp`
  - `src/assets/base-lockup-2color.svg`
  - `src/assets/integration_logos/solscan.png`
  - `src/assets/integration_logos/hyperliquid.ico`
  - `src/assets/integration_logos/google_pay.svg`
  - `src/assets/integration_logos/google_finance.svg`
  - `src/assets/integration_logos/yahoo_finance.svg`
  - `src/assets/crypto_logos/base.webp`
  - `src/assets/crypto_logos/logo_12.webp`
- Modify: `src/pages/home/HomePage.tsx:35` (clean up comment)

- [ ] **Step 1: Delete unused asset files**
Delete the 10 unreferenced media files.

- [ ] **Step 2: Clean up comment in HomePage.tsx**
Update comment referencing `Div_Burn_out_image.webp` to `div_burn.webp`.

- [ ] **Step 3: Verify build**
Run: `npx tsc -b && npx vite build`
Expected: 0 errors, successful build.

- [ ] **Step 4: Commit changes**
```bash
git add -u
git commit -m "chore: remove 10 unused media assets saving ~550KB"
```

---

### Task 4: Clean Up Orphaned Starter Pages & Unused Packages

**Files:**
- Delete:
  - `src/pages/AboutPage.tsx`
  - `src/pages/ContactPage.tsx`
  - `src/components/LordIcon.tsx`
  - `src/store/useThemeStore.ts`
- Modify: `src/App.tsx`
- Modify: `package.json`

**Interfaces:**
- `App.tsx`: Clean router with only `RootLayout`, `HomePage` (index), and `NotFoundPage` (`*`).
- `package.json`: Remove `@lordicon/react`, `imagesloaded`, `@types/imagesloaded`.

- [ ] **Step 1: Remove unused files**
Delete `AboutPage.tsx`, `ContactPage.tsx`, `LordIcon.tsx`, and `useThemeStore.ts`.

- [ ] **Step 2: Streamline router in App.tsx**
Remove `/about` and `/contact` lazy imports and routes.

- [ ] **Step 3: Remove unused packages in package.json**
Remove `@lordicon/react`, `imagesloaded`, and `@types/imagesloaded`. Run `bun install`.

- [ ] **Step 4: Verify build and test**
Run: `bun test && npx tsc -b && npx eslint . && npx vite build`
Expected: 0 errors, 0 warnings, no eval warning from lottie-web.

- [ ] **Step 5: Commit changes**
```bash
git add .
git commit -m "refactor: remove orphaned kinetic template pages, store, and unused dependencies"
```

---

### Task 5: Centralize Architecture Data & De-duplicate Evidence Section

**Files:**
- Create: `src/data/architecture.ts`
- Modify: `src/pages/home/sections/Evidence/EvidenceSection.tsx`

**Interfaces:**
- `architecture.ts` exports:
  - `PIPELINE_MILESTONES: string[]`
  - `PIPELINE_STEPS: PipelineStep[]`
  - `CAPABILITY_PILLS: CapabilityPill[]`
- `EvidenceSection.tsx`: maps over `CAPABILITY_PILLS` in both mobile and desktop views instead of duplicated inline cards.

- [ ] **Step 1: Create src/data/architecture.ts**
Define and export `PIPELINE_MILESTONES`, `PIPELINE_STEPS`, and `CAPABILITY_PILLS`.

- [ ] **Step 2: Refactor EvidenceSection.tsx**
Import data from `@/data/architecture` and map `CAPABILITY_PILLS` for mobile and desktop.

- [ ] **Step 3: Verify tests and type check**
Run: `bun test && npx tsc -b && npx eslint .`
Expected: PASS with 0 errors.

- [ ] **Step 4: Commit changes**
```bash
git add src/data/architecture.ts src/pages/home/sections/Evidence/EvidenceSection.tsx
git commit -m "refactor: centralize architecture pipeline data and eliminate capability pill duplication"
```

---

### Task 6: Centralize Memory Wallet Data & Extract Shared iPhone Components

**Files:**
- Create: `src/pages/home/sections/MemoryWallet/IPhoneStatusBar.tsx`
- Create: `src/pages/home/sections/MemoryWallet/AgentAvatar.tsx`
- Create: `src/data/chatConversation.ts`
- Modify: `src/pages/home/sections/MemoryWallet/LockScreen.tsx`
- Modify: `src/pages/home/sections/MemoryWallet/ChatScreen.tsx`

**Interfaces:**
- `IPhoneStatusBar`: renders status bar (clock, Dynamic Island, cellular, wifi, battery) in `dark` or `light` theme.
- `AgentAvatar`: renders the agent avatar with radial styling.
- `chatConversation.ts`: exports structured chat messages.

- [ ] **Step 1: Create IPhoneStatusBar and AgentAvatar components**
Extract the shared status bar and avatar into standalone components in `src/pages/home/sections/MemoryWallet/`.

- [ ] **Step 2: Create src/data/chatConversation.ts**
Extract chat message records and notification data.

- [ ] **Step 3: Refactor LockScreen.tsx and ChatScreen.tsx**
Consume `IPhoneStatusBar` and `AgentAvatar`.

- [ ] **Step 4: Verify tests and visual behavior**
Run: `bun test && npx tsc -b && npx eslint . && npx vite build`
Expected: 0 errors, build succeeds.

- [ ] **Step 5: Commit changes**
```bash
git add src/pages/home/sections/MemoryWallet/ src/data/chatConversation.ts
git commit -m "refactor: extract reusable IPhoneStatusBar and AgentAvatar, centralize chat messages"
```

---

### Task 7: Full Verification & Remote Push

**Files:**
- Repository-wide verification.

- [ ] **Step 1: Run comprehensive verification**
Run: `bun test && npx tsc -b && npx eslint . && npx vite build`
Expected: All 15 tests pass, 0 errors, 0 warnings, clean production bundle.

- [ ] **Step 2: Push commits to remote origin**
Run: `git push origin main`
Expected: Successfully pushed to GitHub.
