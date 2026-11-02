# fab-patch-sequencing

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Split risky edits so each builder prompt has a constrained blast radius.

## Rules
1. Group tightly related edits within the same section if they share a safe target.
2. Split unrelated/high-risk changes into separate numbered patches.
3. Prefer sequence: structure/section movement → exact copy → layout → styling → responsive fixes.
4. For failed edits, restore the approved state before applying the requested correction.
5. Each patch gets its own target, preservation clause and success condition.
6. Say explicitly: 'Run these as separate patches in this order:'.

## Deliverable
Ordered independently pasteable prompts with validation checkpoints.

## Avoid
No multi-section bundled prompt that can regenerate approved elements.

## Mini-example
Patch 1 restores hero, patch 2 replaces hero CTA label; don't combine with footer redesign.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
