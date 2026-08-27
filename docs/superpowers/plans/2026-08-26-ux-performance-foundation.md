# UX Performance Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the highest-impact scrolling, motion-accessibility, and initial-loading friction without changing Dopamint's approved visual design.

**Architecture:** Introduce small pure state helpers for scroll ownership, section-boundary decisions, and motion policy so behavior can be tested without a browser. React components consume those helpers, while Playwright verifies the integrated desktop/mobile experience.

**Tech Stack:** React 19, TypeScript 6, Bun test, Framer Motion, Lenis, React Three Fiber, Vite 8.

## Global Constraints

- Preserve the existing visual composition, typography, copy, and section order.
- Keep the hero dissolve for users who have not requested reduced motion.
- Use native scrolling and skip the dissolve when `prefers-reduced-motion: reduce` matches.
- Do not add dependencies.
- Keep all current tests passing.

---

### Task 1: Ownership-safe global scroll locking

**Files:**
- Create: `src/components/ui/scroll-dissolve-reveal/scrollLockState.ts`
- Create: `src/components/ui/scroll-dissolve-reveal/scrollLockState.test.ts`
- Modify: `src/components/ui/scroll-dissolve-reveal/scrollLock.ts`
- Modify: `src/components/ui/scroll-dissolve-reveal/index.tsx`
- Modify: `src/components/ui/preloader/Preloader.tsx`

**Interfaces:**
- Produces: `nextScrollLockOwners(current, owner, action): Set<string>`.
- Produces: `lockPageScroll(owner: string)` and `unlockPageScroll(owner: string)`.

- [ ] **Step 1: Write the failing ownership test**

Test that unlocking `preloader` keeps `hero` in the returned owner set, and that the final owner unlock empties the set.

- [ ] **Step 2: Run the focused test and observe the missing-module failure**

Run: `bun test src/components/ui/scroll-dissolve-reveal/scrollLockState.test.ts`

- [ ] **Step 3: Implement the pure owner-set transition**

```ts
export type ScrollLockAction = 'lock' | 'unlock';

export function nextScrollLockOwners(
  current: ReadonlySet<string>,
  owner: string,
  action: ScrollLockAction,
): Set<string> {
  const next = new Set(current);
  if (action === 'lock') next.add(owner);
  else next.delete(owner);
  return next;
}
```

- [ ] **Step 4: Integrate named owners**

Keep a module-level owner set in `scrollLock.ts`. Apply hidden overflow and stop Lenis when the first owner locks; only restore overflow and restart Lenis when the set becomes empty. Use owner `hero-reveal` in the dissolve component and `preloader` in the preloader.

- [ ] **Step 5: Run the focused and complete test suites**

Run: `bun test src/components/ui/scroll-dissolve-reveal/scrollLockState.test.ts && bun test`

### Task 2: Boundary-aware mobile section handoff

**Files:**
- Modify: `src/components/ui/scroll-dissolve-reveal/handoff.ts`
- Modify: `src/components/ui/scroll-dissolve-reveal/handoff.test.ts`
- Modify: `src/components/ui/scroll-dissolve-reveal/index.tsx`

**Interfaces:**
- Produces: `getScrollBoundaryState(scrollTop, scrollHeight, clientHeight, tolerance?)` returning `{ atStart, atEnd }`.

- [ ] **Step 1: Write failing boundary tests**

Cover a scrollable element at its start, middle, and end, plus a non-scrollable desktop section that is simultaneously at start and end.

- [ ] **Step 2: Run the focused test and observe the missing-export failure**

Run: `bun test src/components/ui/scroll-dissolve-reveal/handoff.test.ts`

- [ ] **Step 3: Implement the pure boundary helper**

```ts
export function getScrollBoundaryState(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number,
  tolerance = 2,
) {
  return {
    atStart: scrollTop <= tolerance,
    atEnd: scrollTop + clientHeight >= scrollHeight - tolerance,
  };
}
```

- [ ] **Step 4: Gate wheel and touch transitions by the manifesto boundary**

Resolve `#manifesto` at event time. Allow native inner scrolling while it is between boundaries. Move to `#asks` only at the end, and reverse the hero only at the start.

- [ ] **Step 5: Run focused and complete tests**

Run: `bun test src/components/ui/scroll-dissolve-reveal/handoff.test.ts && bun test`

### Task 3: Shared reduced-motion policy

**Files:**
- Create: `src/lib/motionPolicy.ts`
- Create: `src/lib/motionPolicy.test.ts`
- Modify: `src/layouts/RootLayout.tsx`
- Modify: `src/components/ui/scroll-dissolve-reveal/index.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Produces: `createMotionPolicy(prefersReducedMotion: boolean)` returning booleans for `smoothScroll`, `heroDissolve`, and `decorativeMotion`.

- [ ] **Step 1: Write the failing policy test**

Assert that reduced motion disables all three motion features and normal mode enables them.

- [ ] **Step 2: Run the focused test and observe the missing-module failure**

Run: `bun test src/lib/motionPolicy.test.ts`

- [ ] **Step 3: Implement the policy**

```ts
export function createMotionPolicy(prefersReducedMotion: boolean) {
  return {
    smoothScroll: !prefersReducedMotion,
    heroDissolve: !prefersReducedMotion,
    decorativeMotion: !prefersReducedMotion,
  } as const;
}
```

- [ ] **Step 4: Integrate the policy**

Use `window.matchMedia('(prefers-reduced-motion: reduce)')` in `RootLayout`; do not create Lenis when reduced motion is requested. In the dissolve component, reveal the manifesto immediately, omit the Canvas, and do not register wheel/touch interception in reduced mode.

- [ ] **Step 5: Add the CSS safety net**

Inside `@media (prefers-reduced-motion: reduce)`, collapse animation and transition durations, stop the marquee classes, and disable smooth scrolling.

- [ ] **Step 6: Run focused and complete tests**

Run: `bun test src/lib/motionPolicy.test.ts && bun test`

### Task 4: Fast, homepage-only preloader

**Files:**
- Create: `src/components/ui/preloader/config.ts`
- Create: `src/components/ui/preloader/config.test.ts`
- Modify: `src/components/ui/preloader/useAssetPreloader.ts`
- Modify: `src/components/ui/preloader/Preloader.tsx`
- Modify: `src/layouts/RootLayout.tsx`

**Interfaces:**
- Produces constants `PRELOADER_MIN_DURATION_MS = 350`, `PRELOADER_TIMEOUT_MS = 1500`, `PRELOADER_COMPLETE_HOLD_MS = 80`, and `PRELOADER_EXIT_MS = 350`.

- [ ] **Step 1: Write the failing configuration test**

Assert that the successful minimum path is no more than 780 ms and the timeout path no more than 1,930 ms.

- [ ] **Step 2: Run the focused test and observe the missing-module failure**

Run: `bun test src/components/ui/preloader/config.test.ts`

- [ ] **Step 3: Add the timing constants and use them in the hook/component**

Remove the footer, planet, burn background, and chat video from the critical manifest. Keep fonts, crown, and hero metadata only. Replace hard-coded completion, hold, and exit timing with the constants.

- [ ] **Step 4: Scope the preloader to the homepage**

Use `useLocation()` in `RootLayout` and render `<Preloader />` only when `pathname === '/'`.

- [ ] **Step 5: Improve status semantics**

Give the progress/status region `role="status"`, `aria-live="polite"`, and an `aria-label` that communicates loading progress.

- [ ] **Step 6: Run focused and complete tests**

Run: `bun test src/components/ui/preloader/config.test.ts && bun test`

### Task 5: Integrated verification

**Files:**
- Modify only if verification reveals a regression in the files above.

- [ ] **Step 1: Run changed-file lint**

Run ESLint on every file changed by Tasks 1–4. Expected: zero errors and warnings.

- [ ] **Step 2: Run the full tests and production build**

Run: `bun test` and `bun run build`. Expected: tests pass and Vite completes successfully.

- [ ] **Step 3: Verify in a production browser**

At 1440×900 and 390×844, verify: the homepage preloader clears promptly; the hero remains locked until reveal completion; mobile manifesto content scrolls before handoff; reduced motion starts on the manifesto without Canvas or scroll interception; `/about` and `/contact` show no homepage preloader; and no horizontal overflow appears.

- [ ] **Step 4: Audit the final diff**

Run: `git diff --check` and confirm no generated output or temporary browser files are present in the working tree.
