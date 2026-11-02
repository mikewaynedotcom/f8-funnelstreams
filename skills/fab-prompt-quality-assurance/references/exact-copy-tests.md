# Exact copy regression tests

## Punctuation
User string: "Book Your Call!"
Expected output: same exclamation mark, title case, and words.

## Special symbols
User string: "Save $25 — No code needed."
Expected output: exact em dash, dollar amount, capitalization and period.
Do not invent the underlying offer; this is a string-fidelity test.

## Newlines
User string:
```
Your Next Step
Starts Here.
```
Expected output: identical line separation and punctuation.

## Placement
User says "Use 'Reserve My Seat' on hero CTA only."
Expected: exact copy mapped only to Hero > CTA; footer CTA unchanged.

## Pass criteria
Use:
EXACT COPY — PASTE VERBATIM. DO NOT PARAPHRASE, SHORTEN, EXPAND, CORRECT, OR IMPROVE.
No paraphrase, grammar correction or unrequested normalization.
