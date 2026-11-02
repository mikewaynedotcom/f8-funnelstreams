# fab-regression-diagnostics

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Identify what a builder did wrong and produce minimally invasive restoration.

## Rules
1. Compare user's original intent, observed result and prior approved state, in that order.
2. Classify errors: wrong section, rewritten exact copy, regenerated layout, mobile overflow, invented content or branding drift.
3. Name each unwanted change and target for restoration, not generic 'undo'.
4. If earlier state is not visible, refer to the approved state immediately before the last edit without pretending to know values.
5. Then isolate one intended CHANGE NOW operation.
6. Demand both restored state and targeted new result in SUCCESS CONDITION.

## Deliverable
Diagnosis table and RESTORE → CHANGE NOW builder prompt.

## Avoid
Never instruct wholesale regeneration just to fix one property.

## Mini-example
Unwanted extra CTA deleted; approved card styles restored; original requested headline change remains.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
