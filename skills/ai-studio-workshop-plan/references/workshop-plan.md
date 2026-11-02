# AI Content School — 90-minute app workshop guide

> Merged into F8 from Mike's AI Studio Website & App Builder skill (AI Content School, October 12, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

**Event context from organizer:** October 12, 2026, 7 PM ET. Workshop covers Claude Artifacts and FunnelStreams AI Studio. Registration includes lifetime replay and an AI App Skill. Suggested teaching structure below; this is a recommendation, not the organizer's finalized run of show.

| Minutes | Segment | What students see |
|---|---|---|
| 0–10 | What is an app? Build vs buy | Four simple categories: calculator, quiz, assessment, tool; one actual user problem and success measure |
| 10–18 | Pick the builder | Claude Artifacts for fast demos, FunnelStreams for CRM/Cloud/payments/domain; describe current paid-tier Claude storage/connector options accurately |
| 18–43 | Live build #1 with Claude | Choose a simple client assessment or calculator. Build the smallest useful version. Verify three cases, patch design and empty/error states. |
| 43–64 | AI Studio in action | Open AI Studio, show prompt-to-preview, visual edits and code editor. Build or adapt a landing page/quiz; explicitly connect a form to CRM or explain it needs connection. |
| 64–75 | What changed in Oct 2026 | Brief tour: TanStack SSR, Server Functions, Secrets, Managed Cloud, user login/database/RLS, native product payments, analytics; do not turn all on in 90-minute demo. |
| 75–83 | Costs, selling, and QA | Usage-based pricing, Cloud billing, honest build-vs-buy, client handoff and acceptance tests |
| 83–90 | AI App Skill + Q&A | Demonstrate Skill turning one student's idea into brief, builder choice, master prompt, five QA tests; answer questions |

**Safer single-demo option if time runs short:** Build a practical lead-qualifying mini-assessment first in Claude, then create a branded FunnelStreams landing page that introduces the assessment and collect a real lead with a connected CRM form. Don't imply a complete multi-tenant SaaS product can be safely built and deployed in a few minutes.

## Live demo idea: service quote estimator
Inputs: service category (3 choices), quantity, optional rush checkbox. Define prices in the prompt as classroom sample numbers. Show total, itemized breakdown, validation, reset and one summary CTA. No login, Cloud or payments for version 1. Real business pricing must be approved by the owner; do not frame estimates as binding quotes. For AI Studio, optionally add a 'request quote' form and show Connect to CRM + a test contact. This avoids exposing personal data or building payment logic during the workshop.

## Three student take-home exercises
1. Turn an idea into a one-page app blueprint: user, input, output, three must-haves, one limitation and five tests.
2. Build and patch a simple app with two targeted follow-up prompts; confirm it works on a phone.
3. Compare cost and maintenance of replacing one tool against continuing the existing subscription.

## Core teaching caveats to verbalize
- 'No coding experience required' means AI generates the first version; you still must understand and test what the app does.
- An app may look complete before its real data flows are connected.
- Storage/auth/payment capabilities vary by plan and platform; don't promise a free backend or universal access.
- Current Claude Artifacts are more capable than many older tutorials claim; paid tiers have connectors and text storage with a size cap.
- A prototype is not automatically a secure client-ready product.
