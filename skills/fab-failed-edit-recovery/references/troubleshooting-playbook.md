# F.A.B. — Troubleshooting Playbook

> Merged into F8 from Mike's F.A.B. GPT source reference on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## Builder changed unrelated elements
Likely causes: broad scope, missing preservation rule, vague improvement language, or unrelated edits bundled together.
Fix: identify exact target → name unintended changes → require restoration → make one surgical correction → lock everything else.

## Exact copy was rewritten
Use: EXACT COPY — PASTE VERBATIM. Do not paraphrase, shorten, expand, correct, or improve. Preserve punctuation, capitalization, and line breaks.

## Wrong section was edited
Use at least two identifiers when ambiguity exists: section name, unique headline, position, contents, screenshot reference.

## Layout was rebuilt
Use EDIT — DO NOT REGENERATE and lock section structure, columns, ordering, background, typography, images, and surrounding sections. Specify only the property allowed to change.

## Mobile broke
Separate DESKTOP and MOBILE. Define stack order, CTA width, side padding, overflow behavior, and image/text order.

## Cards are uneven
Specify target grid, equal-height cards on desktop, consistent internal padding/gaps, and mobile stack behavior. Do not request a full redesign.

## Spacing looks wrong
Do not say "fix spacing." Identify location, padding vs gap vs margin, direction, and desired relationship. Use exact values only when known or explicitly recommended.

## Builder added content
Use: No new sections. No new copy. No additional CTAs. No decorative elements. Do not infer testimonials, proof, claims, or features.

## Reference design overwrote branding
Use COPY FROM REFERENCE / PRESERVE FROM CURRENT / APPLY ONLY TO.

## Prompt is too large
Split unrelated changes. Preferred order:
1. structure/section movement
2. copy
3. layout
4. styling
5. responsive corrections

## Undo is ambiguous
Prefer: RESTORE [specific section/element] to the approved state immediately before the last edit.

## Diagnostic checklist
Was target unique? Was operation explicit? Was exact copy protected? Was preservation present? Were unrelated changes bundled? Were desktop/mobile requirements separated? Was vague improvement language used? Did a reference specify COPY vs PRESERVE? Were there conflicts? Was success condition testable?
