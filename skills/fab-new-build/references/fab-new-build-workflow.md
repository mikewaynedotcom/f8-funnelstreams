# fab-new-build

> Merged into F8 from Mike's F.A.B. GPT on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## When to activate
- Create a new landing/sales/opt-in/booking page from a brief.
- Create an entirely new funnel or page with user-mandated sections.
- Translate offer and audience information into a builder-ready initial creation prompt.

**Do not use when:** Do not invoke for changing an existing approved page; use surgical/visual/recovery instead.

## Inputs (use what's available; don't demand optional fields)
- Business and actual offer; the primary conversion goal; audience, awareness and problem.
- Traffic source/temperature and upstream message when known.
- Primary CTA label and actual destination when supplied (never fabricate URLs).
- Real pricing, terms, deliverables, bonuses, guarantee, proof, objections, and differentiators.
- Required sections and mandatory order; supplied exact copy and image assets.
- Approved design tokens, compliance limits, desktop/mobile preferences.

## Workflow
1. Build a facts/unknowns ledger. If offer, goal or essential CTA action is truly missing, ask at most one necessary question; otherwise proceed without invented facts.
2. Choose AIDA, PAS, direct response, SaaS, story-based, or hybrid persuasion only after respecting locked user section order.
3. Map promises, problems, outcomes, offer inclusions, objections and verified proof to concrete sections.
4. Define SECTION ORDER (LOCKED — DO NOT REORDER) when user order is mandatory; default order only if not specified.
5. Write exact page content only when factually supported; treat user-supplied copy as verbatim.
6. Define design system, visual direction, content container and section layouts; desktop and mobile instructions separately.
7. Require correct CTA label and real destination; if no URL exists, leave destination unspecified for user configuration, not a fake link.
8. Inspect claims, mobile overflow, CTA prominence and section flow; return one complete prompt.

## Output contract (use these headings)
1. BUSINESS / OFFER
2. AUDIENCE
3. TRAFFIC SOURCE + TEMPERATURE
4. PAGE GOAL
5. PRIMARY CTA + DESTINATION
6. PRICE + TERMS
7. PROMISE
8. PROBLEMS
9. DESIRED OUTCOMES
10. DIFFERENTIATOR
11. PROOF
12. OBJECTIONS + ANSWERS
13. GUARANTEE
14. REQUIRED SECTIONS (LOCKED — DO NOT REORDER)
15. COPY RULES
16. DESIGN SYSTEM
17. VISUAL DIRECTION
18. DESKTOP LAYOUT
19. MOBILE BEHAVIOR
20. ASSETS
21. DO NOT INVENT
22. SUCCESS CONDITION

## Supporting reference files — consult only when needed
- `fab-requirements-intake.md`
- `fab-audience-message-match.md`
- `fab-offer-analysis.md`
- `fab-persuasion-frameworks.md`
- `fab-section-architecture.md`
- `fab-copy-composition.md`
- `fab-exact-copy-control.md`
- `fab-cta-conversion-path.md`
- `fab-design-system.md`
- `fab-responsive-layouts.md`
- `fab-claims-compliance.md`
- `fab-prompt-quality-assurance.md`

Read `fab-orchestrator.md` for shared orchestration and priority rules.
Use `template-new-build.md` as the prompt skeleton.
Refer to `builder-behavior.md`, `prompt-templates.md`, `troubleshooting-playbook.md` and `landing-page-strategy.md` as appropriate.

## Worked example
**User:** “Create an opt-in page for a free webinar on organizing invoices. The CTA is ‘Reserve My Seat’. Keep the sections Hero, What You'll Learn, Host, FAQ, Final CTA.”
**Builder prompt excerpt:**
```
OBJECTIVE: CREATE a new opt-in landing page for the free invoice-organization webinar.
PAGE GOAL: Webinar registration.
PRIMARY CTA: Reserve My Seat. Destination: use the registration destination supplied in the account; do not invent a URL.
SECTION ORDER (LOCKED — DO NOT REORDER):
1. Hero
2. What You'll Learn
3. Host
4. FAQ
5. Final CTA
COPY RULES: Do not invent the host biography, attendance counts, testimonials, or outcomes.
DESKTOP: Centered content container; clear hero CTA.
MOBILE: Stack content vertically in the same section order and prevent horizontal overflow.
SUCCESS CONDITION: Five sections appear in exactly the specified order and CTAs use the exact label.
```
No fake presenter profile or registration link is implied.

## Global quality and safety rules
- Never claim to have accessed or published a live FunnelStreams page.
- Never invent testimonials, prices, guarantees, business metrics, links or deadlines.
- Keep user-supplied exact copy character-for-character: EXACT COPY — PASTE VERBATIM. DO NOT PARAPHRASE, SHORTEN, EXPAND, CORRECT, OR IMPROVE.
- If builder behavior cannot be confirmed, state: `I cannot confirm that FunnelStreams Funnel AI supports this reliably.`
- The user has final authority over mandatory section order and permitted changes.
- Success conditions must specify an observable pass/fail result.
