# Reusable prompts — paste into FunnelStreams AI Studio unless stated

> Merged into F8 from Mike's AI Studio Website & App Builder skill (AI Content School, October 12, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

Replace variables in square brackets. Do not feed real API secrets through a prompt. For sensitive, financial, health or regulated data, require specialist review before launch.

## 1. Fast discovery: idea → app blueprint (prompt to use with this Skill)

I want to build [app idea] for [specific user]. They need to [primary job]. The main successful outcome is [desired output/action]. Suggest the smallest useful first version: screens, specific fields and outputs, validation, sample data, storage/persistence needs, permission rules, integrations, costs to check and five acceptance tests. Distinguish must-have from later improvements. Tell me whether Claude Artifacts or FunnelStreams AI Studio is the better first choice and why. Do not assume I need authentication, subscriptions or a database unless the use case requires them.

## 2. Universal AI Studio master build prompt

Act as a senior product designer, UX designer, frontend engineer, and cautious application engineer. Build a clean, complete [website/app] inside FunnelStreams AI Studio.

PURPOSE AND AUDIENCE
- Product: [name], for [target user].
- Problem: [one sentence].
- Primary action: [one main action].
- Success: A real user can [observable completion].
- Access: [public / signed-in / admin+member].

SCREENS AND NAVIGATION
- [List every required screen and each one's purpose.]
- Provide sensible loading, empty, validation, error, and confirmation states.
- Every navigation item and button must have a real destination/behavior.

INPUT, OUTPUT AND BUSINESS LOGIC
- Inputs: [field name, type, required/optional, accepted range].
- Rules: [calculations/scoring/branching, units, edge cases].
- Result: [what the app shows, saves, submits or triggers].
- Validate inputs and avoid false success states.

DATA AND CONNECTIONS
- Storage: [none, FunnelStreams Cloud DB, FunnelStreams CRM connected form, or another approved resource].
- Sign-in: [not needed / required with defined user permissions].
- FunnelStreams CRM: [specific form and whether it needs explicit connection].
- Calendars: [specific calendar, if any, selected during connection].
- Payments: [none / existing account catalog products, test then live].
- Integrations: [approved external services only]. Never embed private credentials in client code; use server Secrets when needed.

DESIGN
- Style: intentional, refined, readable, not a generic AI template; coherent tokens, spacing, typography, button states and component patterns.
- Branding: [colors/font/voice/logo assets or 'create neutral defaults']; preserve my supplied copy verbatim.
- Responsive: start mobile-first; test narrow phones, tablet and desktop; no clipped content or horizontal scrolling.
- Accessibility: labels, keyboard use, focus visibility, helpful errors, sensible contrast.

IMPLEMENTATION AND TESTING
- Use supported current AI Studio architecture for a new project (TanStack Start). Only provision Cloud or Payments if requested and approved.
- Avoid fake integrations, fake testimonials, placeholder links that look functional or sample records that appear real. If a connection needs account approval, stop and ask me to choose it.
- Confirm the actual app behavior with example inputs, boundary cases, and failure cases. Don't claim a feature works without tests.
- Give a summary of what was built, what remains unconnected, what needs a live-site test, and what additional cost could apply.

## 3. Small-scope UI patch prompt

Work only on [component(s)/route(s)]. Keep approved copy, features, database schema, connected forms, links, and every other page unchanged. Fix these observed issues: [specific visible issues]. Use a coherent spacing scale, improve visual hierarchy, correct mobile overflow, and preserve accessibility. Before editing, identify which files/elements you will change. Afterward, describe what changed and how to confirm no regression. Do not redesign the entire project.

## 4. Make a working CRM form

Create/verify a [contact/intake/assessment] form containing [fields and validation]. Use AI Studio's supported **Connect to CRM** flow to connect the form to this FunnelStreams sub-account. Do not claim connected until the connection is approved and a test form submitted from the published app creates/updates a contact. Map each field deliberately and avoid overwriting unrelated contact fields. Tell me how to view Sites > Forms > Submissions > External Forms and how to add a dedicated AI Studio Form Submitted workflow trigger filtered to this project/form. Do not write private API tokens into client code.

## 5. Setup Cloud-backed user data

This is a TanStack Start AI Studio project. I want records for [entities] owned by [user roles]. First explain tables, relationships, user ownership, RLS, private/public storage buckets and tests. Ask for confirmation before provisioning or schema changes. Create the minimum useful schema and access policies through supported Cloud workflow. Make sure user A cannot read/write user B's records; verify unauthenticated actions fail safely. Keep secret values in server-side Secrets. Show me where to view Cloud > Database, Users, Storage, Secrets and verify backups. Do not write data automatically to FunnelStreams CRM unless I explicitly request it.

## 6. Native FunnelStreams payments

Use AI Studio's supported Payments feature for this TanStack Start project. Product(s): [existing catalog products]. Show purchase flows using configured product prices/variations, FunnelStreams-hosted checkout, proper success/cancel/failure states and order confirmation. Do not add shipping, pickup, custom engraving fields or calendar payments. First confirm provider/catalog readiness, then enable from More > Payments with my approval. Use Test mode until a complete test order is verified in FunnelStreams Orders. Require my explicit approval before switching to Live.

## 7. Debug a failed app

The app should [expected]. Instead [actual]. Steps to reproduce: [steps]. Device, browser and route: [details]. Console/build error: [error text if available]. Diagnose before rewriting. Identify likely causes and determine whether failure is in UI, state, validation, routing, Cloud/auth/RLS, form-to-CRM tracking, server function, REST endpoint, payment mode/provider, or deployment. Inspect error details and the running behavior, change the smallest relevant files, and report what test confirms the repair. If an integration cannot be verified, say so.

## 8. SEO/publishing audit

Audit this project for release on [domain]. Determine whether it's TanStack Start SSR or older Vite/React. Check responsive layout, route navigation, title/description per page, canonical URL, social previews, sitemap, accessibility, contact forms, actual checkout/booking if present, secure errors, and live published URLs. For legacy SPA only, check custom domain/primary-domain requirements for Advanced SEO pre-rendering. Do not claim indexing or search rank is guaranteed. Provide a pass/fail/untested table.

## 9. Client acceptance and handoff

Prepare a client handoff for [client / app]. Document delivered features, exclusions, access/permissions, ownership, third-party dependencies, connected Cloud vs CRM data, FunnelStreams product catalog and payment provider if used, ongoing costs, domain setup, backup and source-export method, support scope, privacy policy requirements, user walkthrough and agreed acceptance tests. Be explicit about what was manually tested on the published domain. Do not invent a compliance or security guarantee.

## 10. Claude Artifacts prototype prompt (use in Claude)

Create a small interactive [tool] for [user]. Use [input fields] to produce [output] via [exact rule]. Make the UI mobile-friendly, readable and accessible. Provide a clear reset action, input validation, example values, error and success states. Avoid requiring external services for the first version. Do not claim any permanent storage, connection to an external app or public availability unless the current Claude plan/permissions support it. Tell me exactly how to test with three example cases and what limits would apply if I later share this as a product.

## 11. Minimum viable app budget review

List one-time development cost drivers, AI Studio usage, Cloud instance/database storage/file storage, FunnelStreams payment processing, domains, support time, revisions and expected monthly running costs. Clearly label what is verified, what varies by usage, and what I must check in current account billing. Compare against the real subscription being replaced on total cost and functionality, not price alone.
