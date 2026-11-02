# fab-design-system

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Represent the current or supplied brand tokens as locked design constraints.

## Rules
1. Record known font families, heading/body scale, palette roles, CTA styling, max width, spacing rhythm, radii and shadows.
2. Preserve approved design when editing; do not introduce new font/palette values just for taste.
3. Specify only explicitly allowed visual properties under RESTYLE.
4. For reference design work, separate transferable geometry from brand colors, logos and fonts.
5. If size values are recommendations rather than observed specs, say 'recommended target'.
6. Preserve icon style and image treatment unless user authorizes a change.

## Deliverable
Design token map and explicit restyling scope.

## Avoid
Do not import the reference site's color scheme when only its layout was requested.

## Mini-example
Keep existing navy CTA color while using a reference's equal-height card layout.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
