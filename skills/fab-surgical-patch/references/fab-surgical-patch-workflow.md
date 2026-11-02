# fab-surgical-patch

> Merged into F8 from Mike's F.A.B. GPT on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## When to activate
- Change a specific headline, paragraph, CTA, icon or image.
- Add, delete, move, reorder, resize, align, restyle, or replace named existing elements.
- Make multiple tightly related edits within one identifiable section.

**Do not use when:** Do not invoke when the previous builder operation already damaged the page; use failed-edit recovery first.

## Inputs (use what's available; don't demand optional fields)
- Target: builder section name and unique text, or two other independent identifiers.
- Exact operation and properties to change; exact replacement text/asset if applicable.
- Supplied desktop/mobile behavior and optional known target measurements.
- Explicit do-not-change areas and any previous approved state.

## Workflow
1. Anchor the target by section name and unique visible text; disambiguate repeated buttons by nearby headings/position.
2. Begin `EDIT — DO NOT REGENERATE.` List requested property changes one-to-one under CHANGES.
3. Use exact operation verbs. For REPLACE, preserve the surrounding structure unless user expressly replaces it.
4. Include supplied copy verbatim, with destination and exact-copy rule.
5. If only desktop change is requested, lock mobile, and vice versa; separate device instructions where relevant.
6. Apply the complete preservation clause to page copy, sections, order, images, buttons, links, styling and responsiveness.
7. Split unrelated or high-risk edits into sequential patches; never hide multiple unrelated changes in one large instruction.
8. Test logically that success is limited to the intended target and nothing else changes.

## Output contract (use these headings)
1. OBJECTIVE
2. TARGET
3. CHANGES
4. EXACT COPY — PASTE VERBATIM
5. DESKTOP
6. MOBILE
7. PRESERVATION RULE (LOCKED)
8. DO NOT CHANGE
9. PRIORITY
10. SUCCESS CONDITION

## Supporting reference files — consult only when needed
- `fab-target-identification.md`
- `fab-operation-semantics.md`
- `fab-preservation-guardrails.md`
- `fab-exact-copy-control.md`
- `fab-responsive-layouts.md`
- `fab-patch-sequencing.md`
- `fab-prompt-quality-assurance.md`

Read `fab-orchestrator.md` for shared orchestration and priority rules.
Use `template-surgical-patch.md` as the prompt skeleton.
Refer to `builder-behavior.md`, `prompt-templates.md`, `troubleshooting-playbook.md` and `landing-page-strategy.md` as appropriate.

## Worked example
**User:** “Change the hero button label from ‘Learn More’ to ‘Book a Call’.”
**Builder prompt excerpt:**
```
OBJECTIVE: EDIT — DO NOT REGENERATE.
TARGET: Hero section, button currently labeled "Learn More", directly below the main headline.
CHANGES: REPLACE only that button's visible text with the exact text below.
EXACT COPY — PASTE VERBATIM:
Book a Call
DESKTOP: Keep the button size, position, and behavior unchanged.
MOBILE: Keep the button size, position, and behavior unchanged.
PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
DO NOT CHANGE: CTA destination URL, button styles, any other text, sections or links.
SUCCESS CONDITION: Only the target button label reads "Book a Call"; its existing URL and styling are identical.
```

## Global quality and safety rules
- Never claim to have accessed or published a live FunnelStreams page.
- Never invent testimonials, prices, guarantees, business metrics, links or deadlines.
- Keep user-supplied exact copy character-for-character: EXACT COPY — PASTE VERBATIM. DO NOT PARAPHRASE, SHORTEN, EXPAND, CORRECT, OR IMPROVE.
- If builder behavior cannot be confirmed, state: `I cannot confirm that FunnelStreams Funnel AI supports this reliably.`
- The user has final authority over mandatory section order and permitted changes.
- Success conditions must specify an observable pass/fail result.

## Mandatory existing-page lock
PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
