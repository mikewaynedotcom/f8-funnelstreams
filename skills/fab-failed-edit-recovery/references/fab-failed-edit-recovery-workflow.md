# fab-failed-edit-recovery

> Merged into F8 from Mike's F.A.B. GPT on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## When to activate
- The user says a prior builder edit broke or changed approved sections.
- The builder rewrote exact copy, added unauthorized content, changed CTA destination, or broke mobile.
- A screenshot comparison reveals undesired edits after an attempted surgical change.

**Do not use when:** Not for a clean initial edit or an improvement request without a failed change.

## Inputs (use what's available; don't demand optional fields)
- Original intended operation and uniquely identifiable target.
- List or screenshots of what changed unexpectedly.
- Description or screenshot of previously approved state.
- One correction to make after restoration.

## Workflow
1. Identify actual unintended changes and compare with known approved state; don't invent missing historical values.
2. Specify RESTORE for each named affected element, using 'approved state immediately before last edit' when exact values unavailable.
3. After restoration make only one narrow correction under CHANGE NOW.
4. Keep RESTORE and CHANGE NOW distinct. Authorized CHANGES consist of only the listed RESTORE actions plus CHANGE NOW; CHANGE NOW is the sole new edit.
5. Require exact copy fidelity, lock unrelated sections, styling, CTA URLs and devices.
6. Prefer one repair patch over regenerating a page; if multiple unrelated failure regions require separate prompts, sequence them.
7. Check restored regions match prior approval and the original intended change is present.

## Output contract (use these headings)
1. TARGET
2. INTENDED RESULT
3. WHAT CHANGED THAT SHOULD NOT HAVE
4. RESTORE
5. CHANGE NOW
6. EXACT COPY — PASTE VERBATIM (if applicable)
7. DESKTOP
8. MOBILE
9. PRESERVATION RULE (LOCKED)
10. SUCCESS CONDITION

## Supporting reference files — consult only when needed
- `fab-regression-diagnostics.md`
- `fab-patch-sequencing.md`
- `fab-target-identification.md`
- `fab-preservation-guardrails.md`
- `fab-exact-copy-control.md`
- `fab-responsive-layouts.md`

Read `fab-orchestrator.md` for shared orchestration and priority rules.
Use `template-failed-edit.md` as the prompt skeleton.
Refer to `builder-behavior.md`, `prompt-templates.md`, `troubleshooting-playbook.md` and `landing-page-strategy.md` as appropriate.

## Worked example
**User:** “I asked to rename the hero CTA but the builder also changed the hero layout.”
**Builder prompt excerpt:**
```
TARGET: Hero section, primary CTA originally labeled "Learn More".
INTENDED RESULT: Rename the CTA only.
WHAT CHANGED THAT SHOULD NOT HAVE: Hero image and text columns were reorganized.
RESTORE: RESTORE the hero's approved image/text column order, widths, spacing and alignment to the approved state immediately before the last edit.
CHANGE NOW: REPLACE only the target button label with "Book a Call".
DESKTOP: Restore all approved desktop hero geometry.
MOBILE: Preserve the previously approved mobile hero layout.
PRESERVATION RULE (LOCKED): Anything not explicitly listed under CHANGES must remain unchanged, including copy, layout, section structure, section order, colors, fonts, images, buttons, links, spacing, styling, and responsive behavior. Never make unrelated helpful improvements or redesign unless explicitly authorized.
SUCCESS CONDITION: Hero structure matches the approved pre-edit state; only the intended label differs.
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
