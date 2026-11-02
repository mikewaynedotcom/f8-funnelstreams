# FunnelStreams AI Studio: documented capabilities and remaining questions

> Merged into F8 from Mike's FAST GPT (capability reference dated September 11, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

> **Partly superseded.** The October 12, 2026 knowledge in `ai-studio-knowledge.md` and the help library (for example *Cloud Backend in AI Studio*) now document a Cloud backend with a database, app users and file storage, plus native payments, for new (TanStack Start) projects once they are enabled. Where this file says "I cannot confirm" for those items, the newer sources win. Everything else here still applies.

Reviewed September 11, 2026. Platform documentation: FunnelStreams AI Studio.

This review covers all 11 articles listed in the platform's AI Studio documentation folder, plus relevant sections of supporting articles on pricing, snapshots, external tracking, domains, and Agent Studio. These are documentation findings, not tests of any deployed project. Article modification dates below are not necessarily feature release dates.

The earlier blanket description of AI Studio as frontend-only should be retired. New projects support a frontend and application backend. Storage and app-user identity still require explicit scoping. Existing projects must be assessed by their actual architecture.

## 1. Complete AI Studio article inventory

| Article | Last modified | Coverage |
|---|---|---|
| AI Studio in FunnelStreams | September 1, 2026 | Creation, publishing, domains, cloning, access, and project management. |
| Connect Forms and Calendars | June 26, 2026 | Connecting generated components to account data and scheduling. |
| Code Editor | September 2, 2026 | Manual editing, search, error handling, versions, and preview. |
| Advanced SEO Support | September 2, 2026 | SPA prerendering, social metadata, and sitemap workflows. |
| Visual Edits | June 29, 2026 | Direct changes to supported page elements. |
| Form Submitted Workflow Trigger | July 29, 2026 | Dedicated trigger, filters, reconnection, and testing. |
| AI Studio Pricing | August 21, 2026 | Build-session costs and worked examples. |
| Success Pack Course | August 7, 2026 | Official training access and curriculum overview. |
| Download Codebase as ZIP | September 7, 2026 | Source export, earlier versions, and external development. |
| SSR, Server Functions, and Secrets | September 10, 2026 | New full-stack architecture and existing-project distinction. |

## 2. Architecture and backend

New projects use TanStack Start and support server-rendered pages, server functions, REST endpoints, and Secrets. Use server functions for the app’s own backend operations; use HTTP routes for external integrations and webhooks. Private credentials belong in Secrets. Existing Vite/React projects are not automatically migrated. The guide does not provide a migration procedure.

Server execution is distinct from durable storage. Likewise, keeping implementation code private is distinct from authorizing callers. Do not mark database persistence or user access controls complete merely because a project has server functions.

The supplied shell-execution announcement describes app inspection, diagnostics, controlled commands, and verification by the building agent. No separate shell article appears among the 11 listed documents. I cannot confirm a supported-command list, arbitrary Python execution, or production background workers from these documents.

## 3. Editing, publishing, and portability

**Visual editing is supported.** Users can directly edit text, buttons, images, icons, and section styling, including spacing and layout. Direct controls do not consume AI tokens; explicitly prompted changes invoke AI. Save applies changes to the project; leaving without saving discards them. This supports routine client edits, although suitability still depends on the project and the client’s access.

**Manual code editing is supported.** The editor handles TypeScript, JSX, CSS, JSON, and other text files; offers project search and find/replace; detects routes; and exposes build errors with an AI repair option. Each code save creates a version. Saving refreshes preview; publishing updates the public site. The article does not establish the old audit’s blanket prohibition on editing `package.json` or a universal protected-file list.

**Domains and cloning are documented.** Publish to a generated URL before connecting a custom domain. Primary-domain selection redirects other connected URLs. Clone within a sub-account or to another sub-account you manage, optionally including chat and version history. Standard Sites/Funnels import remains unsupported. The access controls described here govern builders, not visitors signing into a generated app.

**Source export is documented.** Download current code from Code or Project Settings, or export an earlier version through Version History. FunnelStreams permits external editing, hosting, and commercial use. Its documented return path is manually copying changed code sections into the editor; it does not describe ZIP re-import or Git synchronization. Exporting source does not establish automatic transfer of connected service data or credentials.

**Snapshots support reusable packages.** AI Studio projects are listed among snapshot assets, alongside workflows, calendars, forms, and other account configuration. Build the source sub-account first, then capture selected assets. This supports packaging repeatable installations; credential transfer and destination-specific reconnection still need verification.

## 4. Forms, calendars, and workflows

Generated forms require the Connect to CRM step. Their submissions are stored in the connected FunnelStreams account and can be viewed in Contacts and External Forms submissions. Calendar integration uses an existing sub-account calendar, its availability, and its configured follow-up behavior. This documents FunnelStreams booking integration; it does not document an automatic Google Sheets event-feed connection.

The dedicated **AI Studio Form Submitted** trigger filters by project, form, page path, and domain. Older forms can keep External Tracking. To adopt the dedicated trigger: request “Re-trigger form integration,” reconnect CRM tracking, republish, submit a test, and inspect workflow execution. A test submission also populates filter options.

External Tracking documents automatic detection of supported DOM forms after installation and matching against existing contact/custom fields. Standard form elements, named inputs, and an email field are relevant requirements. Iframe-based forms and widgets without exposed inputs are excluded from that tracking method. The old claim that every integration requires hand-authored API calls and manual field IDs is too broad. Exact internal endpoint paths in the earlier audit are not established as stable public contracts by these articles.

## 5. SEO for existing SPA projects

Advanced SEO remains relevant to older SPA projects. It serves rendered snapshots to supported bots while visitors receive the SPA. Setup requires a published project and connected primary custom domain. Enable it under More → SEO & AI search, then republish. The documented prerender system handles up to 150 routes; this is not a stated overall page limit or a limit established for new SSR apps. Social metadata and sitemap generation use prompts. Schema is not automatically injected by the SEO feature.

The September 2 SPA article and September 10 full-stack article address different architectures. Do not use the former to deny backend support in new projects, or the latter to assume an existing site has migrated. Rendered HTML also does not establish actual indexing or ranking of a particular site.

## 6. Costs and examples

AI Studio building is usage-based. What a build costs depends on complexity, iterations, AI-generated images and connection steps, and on the AI plan in the user's FunnelStreams account. F8 never quotes a price: send users to their account's billing and AI usage settings, and to FunnelStreams support for plan questions.

The pricing article's worked examples demonstrate a dependency installation and describes editable CMS collections, but does not identify their persistent storage, authentication, or editorial administration. A CMS example is insufficient evidence of an included general-purpose database.

If AI Studio is missing from a user's menu, access is controlled at the account level: they should ask their FunnelStreams account admin or open a support ticket.

For training, point users to FunnelStreams coworking (https://funnelstreams.com/coworking, Fridays 2 PM ET) and the help library.

## 7. What remains unconfirmed

The reviewed AI Studio documents do not establish the following as included platform services. Absence of documentation is not proof that a capability is impossible.

| Question | Status for planning |
|---|---|
| Native persistent SQL/NoSQL database | Superseded: Cloud (database) is documented for TanStack Start projects once enabled. Legacy projects: specify where records are stored. |
| Built-in app-user signup, login, roles, and tenant isolation | Superseded in part: Cloud Users documents email-and-password sign-in. Roles and tenant isolation still need RLS policies you define and test. Builder access is a separate feature. |
| Persistent end-user uploads and file permissions | Superseded in part: Cloud Storage buckets (public or private) are documented. Specify and test access behavior. |
| Cron, queues, long-running jobs, and WebSockets | I cannot confirm their production support or limits. |
| Server timeout, memory, concurrency, and request quotas | I cannot confirm numeric limits. |
| Runtime hosting charges and third-party API usage coverage | I cannot confirm from builder-session pricing. |
| Universal package support, exact package versions, strict TypeScript configuration | I cannot confirm without inspecting a project. |
| Automatic Google Sheets/Airtable connection in AI Studio | I cannot confirm a native connection workflow here. |
| Secrets behavior during cloning, snapshots, and ZIP export | I cannot confirm transfer semantics. |

## 8. How to use this in FunnelStreams build scopes

For each project, record the actual framework, where records persist, how users are identified, which integrations need credentials, and what must happen after submission. Define a small set of acceptance checks against the published app. For AI Content School (AICS) events, separately verify the data source, access method, field mapping, timezone interpretation, and refresh behavior. The existence of a booking interface does not prove an event feed is connected.

Two supporting documents were also checked for context: the general domain guide and Agent Studio setup guide. Product-specific AI Studio instructions govern this reference; capabilities belonging to Agent Studio are not assumed to be AI Studio features.
