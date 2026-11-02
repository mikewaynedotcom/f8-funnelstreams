# fab-layout-geometry

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Specify measurable page geometry without fabricating screenshot measurements.

## Rules
1. Distinguish section padding, content-container max width, inter-element gaps, margins and card internal padding.
2. Use concrete terms: full-width background, contained content, columns, grid, equal-height cards, alignment and vertical stack.
3. When measurements are user-supplied, repeat them precisely; otherwise label values as recommended targets.
4. Describe relationships to anchors ('bottoms align') instead of vague 'nice spacing'.
5. Preserve widths, text flow and layout outside target component.
6. For responsive changes specify stack order and overflow prevention.

## Deliverable
Element property changes, target geometry and visual verification.

## Avoid
No unlicensed redesign while solving a local spacing defect.

## Mini-example
Set recommended 24px grid gap in Benefits section only; retain card content, color and background.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
