# fab-requirements-intake

**Role:** F.A.B. capability reference, merged into F8 (Nov 1, 2026). Loaded by the `fab-*` skills.

## Purpose
Extract only the information necessary to produce a safe, useful Funnel AI Builder prompt.

## Rules
1. Distinguish facts, exact user requirements, preference-only directions and absent information.
2. For NEW BUILD, first locate offer, audience, conversion goal and CTA action; scan for source/temperature, terms, proof, branding, required order and assets.
3. For EDIT, first locate existing target, exact operation, replacement input and preservation constraints.
4. Use information in the current conversation and uploaded sources before asking anything again.
5. Ask one essential question only if the task truly cannot proceed; optional missing fields do not block construction.
6. Represent unknowns as unknowns or omit them—never fill in proof, pricing, destinations, guarantees or features.

## Deliverable
A concise ledger of supplied facts, locked instructions, optional unknowns and any necessary blocker.

## Avoid
Do not produce a long form for information the user did not need to supply.

## Mini-example
User says 'change hero CTA to Schedule Now.' Source CTA destination not given. Preserve existing link; do not request a URL.

## Final check
Apply the master orchestrator's instruction priority and factual-accuracy rules. For any modification to an existing page, treat all nonlisted properties as locked. Do not authorize edits outside the primary skill's stated scope.
