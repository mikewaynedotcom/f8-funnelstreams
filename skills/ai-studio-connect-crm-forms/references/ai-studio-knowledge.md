# FunnelStreams AI Studio — practical knowledge and verified boundaries

> Merged into F8 from Mike's AI Studio Website & App Builder skill (AI Content School, verified October 12, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

**Checked against the 13 official KB pages on October 12, 2026.** Refer to `help-library-map.md` for the matching FunnelStreams help articles. All prose below is a synthesis, not copied documentation.

## 1. Scope and working model
AI Studio is a separate sub-account workspace in FunnelStreams for building and publishing web experiences from text, template, images, screenshots, or reference URLs. Projects include live preview, desktop/tablet/mobile modes, editable source, visual edits, version history, folders/starred projects and a publishing process. Web content can span pages and interactive flows. Agent Studio is a different product for constructing AI agents.

**Start:** open the sub-account → AI Studio in left navigation → describe the project or choose template; add brand assets if available. Projects can be renamed, organized, cloned in the same sub-account or to another sub-account you manage. Review cloning carefully because Cloud data handling is separate.

**Permissions:** AI Studio role choices are View (read-only) and View & Manage. If AI Studio is missing from the menu, access is controlled at the account level: ask the FunnelStreams account admin or open a support ticket.

## 2. Architectures: new vs. legacy
As of the September 22 KB update, new AI Studio apps use **TanStack Start** with server rendering and backend-capable code. Older Vite/React apps remain on their old stack and are not automatically rewritten. October Cloud docs document **Project Settings → Migrate to SSR** as an upgrade-copy route, which leaves the originally published project untouched. Test the copy. Migration does not provision or enable Cloud or Payments automatically.

Current full-stack concepts:
- **SSR:** server-produced HTML helps search pages and rich previews.
- **Server Function:** private backend logic called from the app's frontend, including secret-bearing provider API calls.
- **REST API route:** request endpoint such as `/api/...` for incoming webhooks or external clients. Implement request validation and authentication.
- **Secrets:** protected values needed by server-side logic. Never publish them into JavaScript or expose them through response data.
Choose server functions for own-frontend protected operations; choose REST routes for other systems invoking the app.

## 3. FunnelStreams Cloud (separate, explicit enablement)
**Path:** AI Studio project → More → Cloud → Overview → Enable Cloud. TanStack Start prerequisite. Backend is dedicated to the project and usually provisions in about a minute (not a guarantee). Cloud's visible sections are Overview, Database, Users, Storage and Secrets.

**Database:** tables, record counts, row management, row-level security policies, database backups; instruct AI Studio via chat to create/change schemas and RLS policies. You can view/add/edit/delete data rows in the dashboard. Optimize action triggers an AI Studio request and uses credits. Confirm policies isolate users' records.

**Backups:** automatic daily database schema+records snapshots. Restoring replaces the active database, may interrupt service and does **not** restore uploaded files or app code. Maintain separate exports/version backups.

**Users/auth:** email-and-password sign-in supported initially. Add/invite/remove users; choose whether signups allowed, password policy, breached-password checks, email confirmation, reset/redirect URLs. Auto-confirm email is testing-only. Define privacy and ownership checks server-side.

**Storage:** file buckets can be public (accessible to anyone holding file link) or private (subject to authenticated access controls). Buckets have immutable lowercase names, 3–63 chars with digits and hyphens. Default upload size limit 2 GB, maximum 5 GB. File rename changes its URL. RLS governs storage access.

**Billing/resources:** Tiny DB starts free, larger Mini through X-Large instances show hourly pricing in app. Allocated database storage only grows; charges may continue while Cloud is paused. File storage charged by actual stored amount. Wallet depletion can pause Cloud without deleting data. Permanent Remove Cloud deletes all app Cloud users, records, files. Never give a fixed hosting quote without checking actual app settings.

**Critical:** FunnelStreams CRM and Cloud DB are different data stores. Connected AI Studio CRM forms send data to the account CRM, **not automatically to Cloud**. When sharing/remixing an app, Cloud data is not copied; the new app might still point to the original Cloud, so verify separation and credentials before client handoff.

## 4. Forms, CRM tracking, workflows and booking
A generated on-screen form is only UI until the user tells AI Studio to **connect forms to CRM** or confirms connection in chat. Connected form data goes to CRM contacts and may appear in Sites → Forms → Submissions → External Forms. Test an actual published form.

Dedicated automation: Automation → Workflows → trigger **AI Studio Form Submitted** → optional filters by AI Studio project/form/page path/domain → actions → Publish workflow. Preconditions: published AI Studio project, connected form, test entry to populate filters. Old forms can still use External Tracking Event; to use the dedicated new trigger with an older connected form, tell AI Studio `Re-trigger form integration`, reconnect, republish and submit a new test entry.

Calendar experience: AI Studio may generate a branded booking interface, but must connect an existing calendar in the sub-account. Test bookable time slots and follow-up events against actual calendar configuration. AI Studio Payments currently cannot charge for AI Studio calendar experiences.

## 5. Native checkout and subscriptions
As of October 12 payments KB, **TanStack Start apps** can use FunnelStreams Payments. Entry path More → Payments → Enable Payments, or use the prompted approval during a build with sales intent. Use payment providers and products already defined in the sub-account; choose available fixed price or product variations. The builder starts in **Test** mode. Test a complete transaction/checkout and then switch to **Live** deliberately. FunnelStreams hosts collection of payment card data; the generated app does not store card numbers. Orders appear in the account's orders area with AI Studio source identification. Recurring subscriptions and supported post-purchase upsells are documented.

**Current limitations:** shipping and pickup are not supported; manual payments/cash on delivery are unsupported; payments are unavailable for AI Studio calendar experiences; arbitrary personalization fields cannot be added to orders; editing product definitions/prices/variations must occur in the native catalog. Do not promise integrations beyond the source docs.

## 6. Building/editing with quality control
Sources: main overview, Visual Edits, Code Editor.
- Start with succinct but detailed app goal; include audience, use cases, pages, copy, conversion goal, brand assets, responsiveness, validation and external systems.
- Project can inspect a URL or screenshot as inspiration, not an exact reproducible copy. Do not misrepresent copyrighted design as original.
- Follow-up prompt can target one area. Use Visual Edits for direct text, color, spacing, shadow, image source/alt text and Lucide icons. These direct edits do not spend AI tokens; prompting the AI does.
- Code Editor supports TypeScript/JSX/CSS/JSON editing, find/replace, project-wide search, auto-detected routes, error details, AI Try to fix and saved version history. Manual edits require Save; saved preview is not necessarily the public site.
- Version history supports viewing, bookmarking, restoring; codebase ZIP can be exported from Code/Project Settings or prior-version history.
- A live site changes only after republishing.

## 7. Publishing and SEO
Preview desktop, mobile and tablet first. Publish initial project to AI Studio-generated preview URL; then Publish → Add Custom Domain if needed. Configure provider DNS records and click Verify DNS. Multiple connected domains may redirect to a primary. AI Studio projects remain in its own workspace and cannot be moved/copied into legacy Funnels or Websites editors.

For older SPA sites, Advanced SEO pre-rendering requires publication plus a connected primary custom domain; More → SEO & AI search → Enable → republish. The pre-rendering guide covers social metadata and a prompt-based sitemap. For new SSR sites, confirm the rendered output, page titles/meta descriptions/OG/canonicals/sitemap rather than treating legacy pre-rendering as required. Search ranking is never guaranteed by enabling a toggle.

## 8. Analytics and source-of-truth testing
Published AI Studio project → More → Analytics → Overview for page views, unique views, opt-ins and rate, average time, exits, page/source/browser/device/location. More → Analytics → Form Submissions for submissions; Sites → Analytics → AI Studio allows consolidated filtering. Contact activity may show page and form events. Existing connected forms continue opt-in counts, but for richer pre-submission page attribution a reconnect + republish may be needed.

## 9. Cost control
Building is usage-based: complexity, iterations, AI-generated imagery and connection steps matter more than prompt count alone. Direct (non-AI) Visual Edits don't use AI credits; prompting does. Separate Cloud instance and storage fees may apply. Never quote a fixed price: check current AI pricing and usage limits in the account's billing settings, and send plan questions to FunnelStreams support.

## 10. Common misconceptions that the skill must correct
- 'All new projects are frontend only' — outdated for new TanStack Start projects.
- 'Cloud DB is the same as CRM' — false.
- 'A form displayed = connected' — false.
- 'Preview works = published live site works' — false.
- 'Payment button = tested native checkout' — false.
- 'Older React project gets new stack automatically' — false.
- 'I can transfer AI Studio projects into the regular Funnel builder' — not supported.
- 'Cloud data follows a clone/remix' — false; verify connections to original resources.
- 'AI Studio checkout currently supports shipping and calendar payments' — not documented as supported.
- 'The cost of an app is one flat fee or every prompt costs the same' — false.
- 'One click enables guaranteed Google ranking or regulatory compliance' — false.
