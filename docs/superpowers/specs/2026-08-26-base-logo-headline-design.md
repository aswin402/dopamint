# Base Logo Headline Treatment

## Objective

Replace the letters `Base` inside the second-section headline `Intent-Based Agents` with the official Base wordmark while preserving the final lowercase italic `d`. The rendered phrase must still read naturally as `Intent-Based Agents`.

## Visual treatment

- Keep `Intent-` and `d Agents` in the existing serif italic headline style.
- Insert the Base wordmark inline between the hyphen and `d`.
- Size the wordmark relative to the heading's `em` size so it scales at every breakpoint.
- Align the wordmark optically to the text baseline and preserve the current two-line headline layout.
- Use the headline's existing green tone where the official asset permits monochrome treatment; otherwise use the official Base blue mark.

## Accessibility

- Give the visual wordmark an accessible text equivalent of `Base`.
- Ensure assistive technology reads the complete phrase once as `Intent-Based Agents` without duplicated logo text.

## Scope

- Change only the second-section headline in `src/pages/home/sections/Hero.tsx` and add the smallest required local brand asset/component.
- Leave the `Built on Base` subtitle unchanged.
- Do not change the hero reveal, section handoff, or surrounding typography.

## Verification

- Confirm desktop and mobile rendering in a browser.
- Confirm the heading remains two lines at desktop sizes without overlap.
- Run changed-file lint and the production build.
