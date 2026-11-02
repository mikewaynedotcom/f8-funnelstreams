# fab-reference-design

> Merged into F8 from Mike's F.A.B. GPT on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## When to activate
- User says 'use this reference layout' or 'make this section look like the example'.
- User gives external landing page imagery as a design reference for an existing page.
- User asks to borrow an explicitly named design characteristic from a reference.

**Do not use when:** Do not use for standalone screenshot defect fixes with no external reference; use visual-fix.

## Inputs (use what's available; don't demand optional fields)
- Current-page target and reference screenshot/link; whether reference is visual only.
- Exact traits to copy: grid, alignment, dimensions, card layout, etc.
- Current branding, content, links and visual assets to preserve.
- Desktop/mobile adaptation and exclusions.

## Workflow
1. Inspect reference for specific structural/stylistic properties, not assumed implementation.
2. Separate COPY FROM REFERENCE, PRESERVE FROM CURRENT PAGE, APPLY ONLY TO, and DO NOT COPY.
3. Map each allowed transfer to uniquely named current section; do not transfer content, branding or links by default.
4. Define desktop and mobile behavior for borrowed geometry.
5. State preservation clause and scope so the whole page is not reconstructed.
6. Require success test for permitted reference traits and excluded elements.

## Output contract (use these headings)
1. REFERENCE
2. COPY FROM REFERENCE
3. PRESERVE FROM CURRENT PAGE
4. APPLY ONLY TO
5. DO NOT COPY
6. CHANGES
7. DESKTOP
8. MOBILE
9. PRESERVATION RULE (LOCKED)
10. SUCCESS CONDITION

## Supporting reference files — consult only when needed
- `fab-design-system.md`
- `fab-layout-geometry.md`
- `fab-target-identification.md`
- `fab-asset-handling.md`
- `fab-responsive-layouts.md`
- `fab-preservation-guardrails.md`

Read `fab-orchestrator.md` for shared orchestration and priority rules.
Use `template-reference-design.md` as the prompt skeleton.
Refer to `builder-behavior.md`, `prompt-templates.md`, `troubleshooting-playbook.md` and `landing-page-strategy.md` as appropriate.

## Worked example
**User:** “Use the three-card pricing layout from this reference, but keep our brand.”
**Builder prompt excerpt:**
```
REFERENCE: Supplied example screenshot, pricing section only.
COPY FROM REFERENCE: Three equal-height cards in a centered horizontal grid.
PRESERVE FROM CURRENT PAGE: Current pricing copy, amounts, logos, fonts, color palette and CTA links.
APPLY ONLY TO: Current page's "Choose Your Plan" pricing section.
DO NOT COPY: Reference's product names, dollar amounts, logo, icons, guarantees or links.
CHANGES: RESTYLE the card container geometry only; do not regenerate individual card content.
DESKTOP: Three columns within existing content container.
MOBILE: Stack the existing cards in their existing order.
PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
SUCCESS CONDITION: Pricing layout borrows the reference grid while current content and branding remain identical.
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
