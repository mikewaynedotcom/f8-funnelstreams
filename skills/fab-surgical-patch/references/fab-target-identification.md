# fab-target-identification

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Resolve an exact edit location even when page elements repeat.

## Rules
1. Prefer official section title followed by unique visible headline.
2. Add page position and nearby copy if two elements have the same label.
3. Identify element role (headline, paragraph, button, image, pricing card, icon, etc.).
4. Use screenshot coordinates/relative quadrant only as supplements, never sole identifier when visible text exists.
5. For a section reorder, identify both moved section and target anchor.
6. If still ambiguous, do not guess a destructive deletion or replacement.

## Deliverable
TARGET line that describes a uniquely locatable element and its context.

## Avoid
No 'edit the CTA' without saying which CTA.

## Mini-example
Hero > CTA 'Get Started' under headline 'Grow With Confidence', not the identical footer button.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
