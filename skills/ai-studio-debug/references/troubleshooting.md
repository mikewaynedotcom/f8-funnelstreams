# Troubleshooting playbook

> Merged into F8 from Mike's AI Studio Website & App Builder skill (AI Content School, October 12, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

## First: reproduce; isolate; fix least possible
Ask for the expected result, actual result, exact path to reproduce, whether preview or public site, and error details if available. Never wipe data, disable auth/RLS, paste secrets or regenerate the entire app as an automatic first step. In the Code Editor, inspect Details → Try to fix for build errors, review actual behavior, Save, and republish only after verifying preview.

| Symptom | First check | Practical next step |
|---|---|---|
| Button has no effect | Was it only styled as a button? Route/handler bound? | Add a real handler and explicit success/error state; test action |
| Preview works, public site outdated | Was the project republished after Save? | Publish current version; test in new browser session |
| Phone layout clipped | Fixed widths, overflowing grids/tables/images | Patch only affected breakpoints; retest at 320px, 375px, 430px |
| Form appears but no CRM contact | Is Connect to CRM tracking approved? Is site published? | Connect, republish, submit fresh live test, check contact and submissions |
| Workflow doesn't fire | Trigger published? Filter matches? Form integration old? | Re-trigger form integration for old forms, reconnect, republish and test execution log |
| Can't find form in trigger | No live submission to populate filters | Publish + send test, refresh workflow; filter project first |
| Booking displayed but no appointment | Calendar not selected/connected; availability mismatch | Choose existing calendar and test a real booking |
| Auth login fails | Redirect URLs, email confirmation, policy, session | Verify Site URL/redirect list, confirmation, user status and logs |
| User can see another user's data | Missing/wrong RLS or client-only ownership check | Pause release; enforce least-privilege DB/storage policy; regression test users |
| Server function fails | Input validation, protected Secret, network/provider issue | Check server operation + error handling; never log Secret |
| Webhook REST route fails | Wrong method/path, auth/signature, publish state | Verify request shape and security; test valid/invalid payloads |
| Checkout button fails | Payments enabled? provider/catalog configured? Test/Live mismatch? | More → Payments; verify supported TanStack project; test order |
| Payments unavailable | Old Vite/React project? | Consider Project Settings → Migrate to SSR and test upgraded copy |
| Cloud unavailable | Old project or Cloud not enabled | Migrate legacy if appropriate; More → Cloud → Overview → Enable Cloud |
| Cloud data lost after clone/remix | Cloud data isn't cloned; may point to source | Stop writing until new instance and data migration verified |
| App stops responding with Cloud | Wallet depleted/Cloud paused? DB resized? | Check Cloud status and wallet; Wake up/resume, never remove Cloud to 'fix' |
| SEO bot can't see page | Legacy SPA without custom domain/pre-render? wrong metadata? | Set primary custom domain, enable SEO & AI search if applicable; republish and verify |
| Cost rises unexpectedly | Repeated AI visuals, complex iterations, paid Cloud resources | Review AI usage and Cloud size, direct visual edits, set spending limits |

## Escalation
If none of the source-backed checks solves it, present an evidence bundle: reproducible steps, expected/actual, screenshots, relevant redacted error, project architecture/version, browser/device, specific integration, test timestamps and logs. Say `I cannot confirm` rather than hallucinate a platform fix.
