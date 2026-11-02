# fab-responsive-layouts

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Describe breakpoint-relevant behavior separately without inventing current CSS.

## Rules
1. DESKTOP: name grid/column structure, alignment, spacing and widths that are intentionally modified.
2. MOBILE: name vertical stacking order, CTA width, horizontal padding and overflow prevention when relevant.
3. If user supplies exact breakpoints, use them; otherwise avoid pretending to know the builder's breakpoint implementation.
4. Preserve unmentioned device behavior, including tablet, when possible.
5. For screenshot fixes distinguish visual symptom from assumed technical cause.
6. Watch clipping, huge margins, overflowing cards and off-screen CTAs.

## Deliverable
DESKTOP and MOBILE blocks with clear changed versus preserved behavior.

## Avoid
Do not change mobile CTA width as collateral damage from a desktop alignment edit.

## Mini-example
Desktop card heights aligned; mobile remains its approved vertical stack.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
