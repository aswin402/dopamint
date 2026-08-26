# Base Logo Headline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render the second-section title as `Intent-[official Base lockup]d Agents` while preserving its responsive editorial layout and accessible reading order.

**Architecture:** Add the official two-color Base SVG as a local Vite asset and isolate the mixed text/logo lockup in a small presentational component. `Hero.tsx` will pass the imported asset URL to that component, while the component exposes a single accessible phrase and hides the decorative visual fragments from assistive technology.

**Tech Stack:** React 19, TypeScript, Vite asset imports, Tailwind CSS v4, Bun test, Playwright browser verification

## Global Constraints

- The visual phrase must be `Intent-[Base wordmark]d Agents`.
- Keep the final lowercase italic `d` outside the logo.
- Leave the `Built on Base` subtitle unchanged.
- Preserve the existing two-line desktop headline layout.
- Do not change hero reveal or section-handoff behavior.
- Use the official `Base_lockup_2color.svg` from `base/brand-kit`.

---

### Task 1: Accessible Base Headline Lockup

**Files:**
- Create: `src/assets/base-lockup-2color.svg`
- Create: `src/pages/home/sections/IntentBaseHeadline.tsx`
- Create: `src/pages/home/sections/IntentBaseHeadline.test.tsx`
- Modify: `src/pages/home/sections/Hero.tsx:221-230`

**Interfaces:**
- Consumes: `baseLogoSrc: string`, supplied by Vite's SVG asset import in `Hero.tsx`.
- Produces: `IntentBaseHeadline({ baseLogoSrc }: IntentBaseHeadlineProps): React.JSX.Element`.

- [ ] **Step 1: Add the official Base SVG asset**

Download the official two-color digital lockup from the Base brand-kit:

```bash
curl -fL \
  https://raw.githubusercontent.com/base/brand-kit/main/logo/Logotype/Digital/Base_lockup_2color.svg \
  -o src/assets/base-lockup-2color.svg
```

Expected: `src/assets/base-lockup-2color.svg` exists and begins with an `<svg` document.

- [ ] **Step 2: Write the failing component test**

Create `src/pages/home/sections/IntentBaseHeadline.test.tsx`:

```tsx
import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { IntentBaseHeadline } from './IntentBaseHeadline';

describe('IntentBaseHeadline', () => {
  test('renders the Base lockup inside one accessible headline phrase', () => {
    const html = renderToStaticMarkup(
      <IntentBaseHeadline baseLogoSrc="/base-lockup.svg" />,
    );

    expect(html).toContain('aria-label="Intent-Based Agents"');
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('src="/base-lockup.svg"');
    expect(html).toContain('alt=""');
    expect(html).toContain('Intent-');
    expect(html).toContain('d Agents');
  });
});
```

- [ ] **Step 3: Run the test and verify the red state**

Run:

```bash
bun test src/pages/home/sections/IntentBaseHeadline.test.tsx
```

Expected: FAIL because `./IntentBaseHeadline` does not exist.

- [ ] **Step 4: Implement the presentational component**

Create `src/pages/home/sections/IntentBaseHeadline.tsx`:

```tsx
interface IntentBaseHeadlineProps {
  baseLogoSrc: string;
}

export function IntentBaseHeadline({ baseLogoSrc }: IntentBaseHeadlineProps) {
  return (
    <span
      aria-label="Intent-Based Agents"
      className="block font-serif italic font-bold text-[#55604e]"
    >
      <span aria-hidden="true" className="whitespace-nowrap">
        Intent-
        <img
          src={baseLogoSrc}
          alt=""
          className="mx-[0.025em] inline-block h-[0.56em] w-auto align-[-0.04em]"
        />
        d Agents
      </span>
    </span>
  );
}
```

- [ ] **Step 5: Integrate the lockup into the second section**

In `src/pages/home/sections/Hero.tsx`, add:

```tsx
import baseLockup from '../../../assets/base-lockup-2color.svg';
import { IntentBaseHeadline } from './IntentBaseHeadline';
```

Replace the existing `Intent-Based Agents` span with:

```tsx
<IntentBaseHeadline baseLogoSrc={baseLockup} />
```

Do not modify the adjacent `Built on Base` paragraph.

- [ ] **Step 6: Run focused and full automated verification**

Run:

```bash
bun test src/pages/home/sections/IntentBaseHeadline.test.tsx
bun test
bunx eslint src/pages/home/sections/Hero.tsx src/pages/home/sections/IntentBaseHeadline.tsx src/pages/home/sections/IntentBaseHeadline.test.tsx
bun run build
```

Expected: component test passes, all Bun tests pass, changed-file lint exits 0, and the production build exits 0.

- [ ] **Step 7: Verify desktop and mobile rendering**

Start DopaMint on an unused local port and use Playwright at `1920x960` and `390x844`.

Verify:

- The accessible heading name is exactly `Intent-Based Agents`.
- The Base lockup is visible between `Intent-` and `d Agents`.
- The desktop heading remains on the existing second line without overlap.
- The mobile heading remains within the viewport without horizontal overflow.
- The `Built on Base` subtitle is unchanged.

- [ ] **Step 8: Commit the implementation**

```bash
git add src/assets/base-lockup-2color.svg \
  src/pages/home/sections/IntentBaseHeadline.tsx \
  src/pages/home/sections/IntentBaseHeadline.test.tsx \
  src/pages/home/sections/Hero.tsx
git commit -m "feat: add Base logo to agent headline"
```
