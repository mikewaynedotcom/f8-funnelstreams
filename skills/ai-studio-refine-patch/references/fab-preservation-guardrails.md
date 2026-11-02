# fab-preservation-guardrails

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Lock all existing-page elements outside the explicit change set.

## Rules
1. PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
2. Always prefer EDIT — DO NOT REGENERATE for narrow modifications.
3. List unchanged text, sections, order, CTA URLs, images, fonts, palette and layout when high risk.
4. When a requested change is device-specific, explicitly lock the other device.
5. Treat DO NOT CHANGE as stronger than general best-practice suggestions.
6. A screenshot is evidence for an issue, not permission to redesign all visible components.

## Deliverable
A strict scope boundary with matching SUCCESS CONDITION.

## Avoid
Never make 'helpful' unsolicited changes to unrelated areas.

## Mini-example
Hero CTA label changed; typography, image, footer, nav, layout and both CTA destinations must remain.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
