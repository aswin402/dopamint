# Base Logo Color and Size Refinement

## Goal

Make the Base lockup in the second-section headline more prominent and align it with Base blue, while preserving the current headline layout and accessibility.

## Approved Design

- Increase the inline logo height from `0.56em` to `0.64em` (about 14%).
- Set both SVG paths—the Base wordmark and square mark—to the exact color `#0000ff`.
- Preserve the current inline spacing, baseline alignment, no-wrap behavior, and accessible name `Intent-Based Agents`.
- Keep the surrounding headline typography and the `Built on Base` subtitle unchanged.

## Implementation

- Update `src/assets/base-lockup-2color.svg` so both paths explicitly use `#0000ff`.
- Update `src/pages/home/sections/IntentBaseHeadline.tsx` to use `h-[0.64em]`.
- Extend the focused component test to assert the new size class.

## Verification

- Run the focused headline test and complete test suite.
- Lint the changed component and test.
- Run the production build.
- Verify the revealed headline at desktop and mobile widths, checking visibility and horizontal overflow.
