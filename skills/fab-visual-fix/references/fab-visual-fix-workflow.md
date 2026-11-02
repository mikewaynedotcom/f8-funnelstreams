# fab-visual-fix

> Merged into F8 from Mike's F.A.B. GPT on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## When to activate
- User uploads an existing-page screenshot and says 'fix this', 'align', 'resize' or similar.
- Cards are uneven, hierarchy is off, margins are inconsistent or the page overflows on mobile.
- Specific screenshot-based CTA prominence, section balance or contrast problem.

**Do not use when:** If the screenshot documents an unwanted previous edit, route to recovery before applying visual refinements.

## Inputs (use what's available; don't demand optional fields)
- Screenshot or concrete description; target by screenshot position, visible text and role.
- Observed visual defect and desired result; device width if known.
- Any specified pixel measurements, breakpoints, approved type scale and brand colors.

## Workflow
1. Describe observed problem only: relative width, alignment, padding, gap, overflow, contrast, hierarchy or balance.
2. Identify target with unique visible content plus its position. Avoid inferring source code or exact current pixel values.
3. Choose smallest exact property changes; proposed values are RECOMMENDED TARGETS unless provided by user.
4. Distinguish container width, section padding, element margins, card internal padding and grid gap.
5. Give explicit desktop grid/columns and mobile stack order only where relevant.
6. Preserve original section order, copy, imagery, links, brand tokens and unrelated layout.
7. Output narrow, testable changes rather than automatic makeover.

## Output contract (use these headings)
1. SCREENSHOT / DEVICE
2. ISSUE TYPE
3. TARGET
4. OBSERVED PROBLEM
5. EXPECTED RESULT
6. CHANGES
7. DESKTOP
8. MOBILE
9. PRESERVATION RULE (LOCKED)
10. DO NOT CHANGE
11. SUCCESS CONDITION

## Supporting reference files — consult only when needed
- `fab-target-identification.md`
- `fab-layout-geometry.md`
- `fab-design-system.md`
- `fab-responsive-layouts.md`
- `fab-asset-handling.md`
- `fab-preservation-guardrails.md`
- `fab-prompt-quality-assurance.md`

Read `fab-orchestrator.md` for shared orchestration and priority rules.
Use `template-visual-fix.md` as the prompt skeleton.
Refer to `builder-behavior.md`, `prompt-templates.md`, `troubleshooting-playbook.md` and `landing-page-strategy.md` as appropriate.

## Worked example
**User:** “These three benefits cards have unequal heights on desktop; leave mobile alone.”
**Builder prompt excerpt:**
```
OBJECTIVE: EDIT — DO NOT REGENERATE.
TARGET: Benefits section, three cards beneath heading "What You Get".
CHANGES: ALIGN card bottoms by applying equal-height cards within the existing three-column desktop grid.
DESKTOP: Preserve existing column widths, gaps, text, icons, backgrounds and borders.
MOBILE: PRESERVE all existing mobile card behavior; no mobile edits.
PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
SUCCESS CONDITION: Desktop card bottoms align while all other visual and content properties remain unchanged.
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
