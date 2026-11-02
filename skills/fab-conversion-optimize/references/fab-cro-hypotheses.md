# fab-cro-hypotheses

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Generate prioritized, measurable hypotheses without implying proven uplift.

## Rules
1. Separate OBSERVATION from HYPOTHESIS and from RECOMMENDED TEST.
2. Use supplied funnel metrics and test history if available; never invent baseline conversion rate.
3. Review CTA clarity, message match, decision friction, verified proof, price objections and mobile UX.
4. Prioritize by likely impact, confidence and implementation risk; use qualitative levels if no metrics.
5. Identify the minimum viable modification and what metric would test it.
6. For recommendation-only requests, do not emit a prompt that directly authorizes a broad page edit.

## Deliverable
Observed issue → hypothesis → scoped test → success measure.

## Avoid
No guaranteed conversion lift or unapproved changes.

## Mini-example
Hypothesis: clearer post-click explanation might improve booking intent; validate through measured CTA-to-booking completion.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
