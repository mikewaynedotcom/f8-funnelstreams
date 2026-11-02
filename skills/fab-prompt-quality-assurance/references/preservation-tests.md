# F.A.B. preservation tests

## A. Label only
Given existing CTA "Learn More" linking to an approved booking URL.
Request: "Rename to Book a Call."
Expected: REPLACE visible text; same link, size, font, color, hover and behavior.

## B. Desktop only
Given a desktop benefits-card alignment screenshot.
Request: "Equalize card heights on desktop; no mobile change."
Expected: desktop card height alignment; mobile strictly PRESERVE.

## C. Button width
Request: "Make the final CTA 240px wide."
Expected: RESIZE named button only; do not change text, icon, URL, color or section.

## D. High-risk multi-edit
Request: "Move FAQ above Pricing; also change the hero image and rewrite the footer."
Expected: separate sequential prompts, each limited to one section/order operation,
with independent success conditions and the mandatory locked rule.

## E. Exact preservation required
The following full line must be in existing-page prompts:
PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.

## Pass criteria
Nothing outside explicit CHANGES is authorized.
