# Example 4 — FAILED EDIT RECOVERY
Hypothetical input: A user requested an exact hero CTA label change; Funnel AI then altered the hero image and column layout.

TARGET:
Hero section; main CTA initially labeled "Learn More" and adjacent approved hero image.

INTENDED RESULT:
Only the CTA label should change to "Book a Call".

WHAT CHANGED THAT SHOULD NOT HAVE:
1. The approved hero image was replaced.
2. Existing image-left / text-right desktop columns were reversed.

RESTORE:
1. RESTORE the approved hero image that existed immediately before the last edit.
2. RESTORE image-left / text-right hero column order and all approved desktop spacing and sizing.

CHANGE NOW:
1. EDIT — DO NOT REGENERATE. REPLACE only the hero CTA text with exact supplied copy.

EXACT COPY — PASTE VERBATIM. DO NOT PARAPHRASE, SHORTEN, EXPAND, CORRECT, OR IMPROVE.
Destination: Hero > Primary CTA label
```
Book a Call
```

DESKTOP:
Restore the original approved hero geometry, image and CTA styling.
MOBILE:
Preserve the previously approved mobile hero; do not restructure it.

PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
For this recovery, CHANGES consists of the named RESTORE actions and the single CHANGE NOW operation; no other edits are authorized.

SUCCESS CONDITION:
Approved hero image/columns are recovered; only the intended CTA label differs from the original approved state.
