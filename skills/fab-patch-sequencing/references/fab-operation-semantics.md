# fab-operation-semantics

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Translate vague instructions into small, exact builder operations.

## Rules
1. CREATE means new from scratch; ADD inserts without replacing.
2. EDIT modifies; REPLACE swaps a designated value or element only.
3. DELETE removes uniquely named material; MOVE places relative to named anchor.
4. RESIZE means dimensions/max-width; ALIGN means alignment only.
5. RESTYLE allows only properties explicitly listed; REORDER changes named sequence.
6. PRESERVE locks; RESTORE returns the target to previously approved state.
7. Turn 'make it cleaner' into named operation, target, property, constraints and success condition.

## Deliverable
Operation verb + unique target + explicit changed property + pass/fail test.

## Avoid
No broad regenerate/modernize/make-premium commands in surgical patches.

## Mini-example
RESIZE hero image max-width to recommended 480px; don't also change cropping.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
