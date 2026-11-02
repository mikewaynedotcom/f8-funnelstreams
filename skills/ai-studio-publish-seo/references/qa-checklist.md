# Test checklist — do not call an app 'done' before evidence

> Merged into F8 from Mike's AI Studio Website & App Builder skill (AI Content School, October 12, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

Mark each item PASS / FAIL / NOT APPLICABLE / UNTESTED. User should actually reproduce tests on preview AND published URLs.

## Product and UX
- [ ] Purpose and primary task are unmistakable; main CTA acts correctly.
- [ ] All navigation, back buttons, reset buttons, tabs, forms and links work; no dead ends.
- [ ] Real examples produce correct outputs; calculation/logic checked independently.
- [ ] Required/optional fields, validation, units, min/max, duplicate submission handled.
- [ ] Loading, empty, no-result, failed-request, expired-session and success states are visible.
- [ ] Approved copy and design assets remain accurate; no fabricated testimonials or badges.

## Responsive and accessibility
- [ ] 320/375/430px phone widths; tablet; wide desktop; no horizontal scroll.
- [ ] Forms accessible via keyboard; focus clearly visible; labels tied to fields.
- [ ] Tap targets reasonable; headings in correct order; alt text for meaningful images.
- [ ] Accessible errors and no reliance solely on color to convey meaning.

## Persistence and privacy
- [ ] Decide where records belong: transient state, Claude text storage, FunnelStreams CRM or Cloud DB.
- [ ] If Cloud is used, verify RLS for owner, other user, signed-out visitor and admin.
- [ ] No credentials in client bundle, source code, logs, errors or URL parameters.
- [ ] Cloud uploaded private file unavailable to unauthorized user; public link behavior intentional.
- [ ] Authentication signup, confirmation, login, logout, reset, redirects all tested.
- [ ] Document retention, export, deletion and backup policy (Cloud DB backup excludes files/source).

## FunnelStreams integrations
- [ ] AI Studio form is explicitly connected to CRM tracking.
- [ ] Published form submission creates/updates the intended contact with correct field mapping.
- [ ] Form submission visible in dashboard; dedicated workflow published, right filters.
- [ ] Workflow execution log confirms a real test event; avoid duplicate emails or SMS.
- [ ] Calendar selected, availability/bookings verified against FunnelStreams schedule.
- [ ] Cloud DB data isn't incorrectly assumed to be CRM data.

## Payments
- [ ] TanStack Start architecture and preconfigured catalog/payment provider.
- [ ] Correct pricing/variation selected; test checkout in Test mode.
- [ ] Complete/cancel/failed payment behavior confirmed, plus order in FunnelStreams Orders.
- [ ] Subscription/upsell tested if included; no unsupported calendar checkout/shipping/pickup.
- [ ] Live-mode switch intentional and checked by client; no secret card handling in app code.

## Deployment and client delivery
- [ ] Code saved; project published **again** after final edits.
- [ ] Generated preview URL and custom-domain URL tested separately.
- [ ] DNS, primary canonical domain, HTTPS redirect, meta tags/OG/sitemap reviewed.
- [ ] Analytics detects the expected page visit and opt-in; form attribution checked.
- [ ] Old project vs migrated copy ownership/data destinations reviewed.
- [ ] Latest code ZIP exported; backup plan verified; app/platform dependencies documented.
- [ ] Client confirms acceptance steps and knows monthly charges and maintenance scope.
