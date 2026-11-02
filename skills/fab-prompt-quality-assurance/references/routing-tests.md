# F.A.B. workflow routing regression scenarios

Each case describes expected skill selection; execute in a connected agent
runtime to test actual routing. The bundled Python checks verify skill metadata,
not LLM response semantics.

| User request | Expected workflow | Why |
| --- | --- | --- |
| Create a page for my offer from scratch | fab-new-build | New creation |
| Change only the hero button label | fab-surgical-patch | Narrow approved-page change |
| Screenshot shows 3 card bottoms not aligned | fab-visual-fix | Current visual defect |
| Builder changed the hero image without permission | fab-failed-edit-recovery | Restoration before further edits |
| Make pricing section use this reference's 3-column geometry | fab-reference-design | Borrow defined external trait |
| Audit page conversions but do not edit yet | fab-conversion-optimize | Recommendations only |
| Fix screenshot showing damage from last edit | fab-failed-edit-recovery | Repair takes priority over visual |
| Replace CTA label and then fix unrelated pricing cards | fab-surgical-patch + sequential patches | Separate risky edits |

## Pass criteria
One dominant workflow. Do not route failed edits to a full redesign.
All changes must be express, scoped and testable.
