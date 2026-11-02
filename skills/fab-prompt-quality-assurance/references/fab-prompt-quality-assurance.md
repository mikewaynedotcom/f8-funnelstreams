# fab-prompt-quality-assurance

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Run final checks that make the generated builder prompt predictable and safe.

## Rules
1. Check workflow choice and unambiguous target using two anchors if needed.
2. Check each requested operation is explicit and limited to permitted property changes.
3. Confirm exact copy rule appears where appropriate and each verbatim string has a destination.
4. For existing-page edits, confirm the complete mandatory preservation rule and DO NOT CHANGE coverage.
5. Ensure desktop/mobile blocks are separated for responsive layout changes and other device behavior is locked.
6. Check locked section order and strict factual non-invention.
7. Split unrelated high-risk edits and verify success condition tests the intended result.
8. Fail if the prompt contains vague 'make it better' instructions without defined target/property.

## Deliverable
PASS/REVISE verdict with corrected user-ready builder prompt.

## Avoid
No ambiguous target, unauthorized regeneration, missing preservation or imaginary claims.

## Mini-example
For a CTA rename, QA must verify label exactness and preservation of URL/style across devices.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
