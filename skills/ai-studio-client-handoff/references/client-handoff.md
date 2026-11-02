# Building apps for paying clients: a practical delivery standard

> Merged into F8 from Mike's AI Studio Website & App Builder skill (AI Content School, October 12, 2026) on Nov 1, 2026. Vendor names and links were replaced with FunnelStreams terms. Product how-to still comes from the FunnelStreams help library first (`searchArticles`, then `getArticle`).

Start with an agreed scope and acceptance definition before the build. A 10-question calculator and a multi-user portal with payments are different projects. Quote based on discovery, architecture, complexity, integrations, testing, and maintenance, not on the number of AI prompts.

## Written scope
- Business problem, user roles, pages, inputs, outputs and actions.
- Included integrations (FunnelStreams CRM, calendar, Cloud, payments), account ownership and third-party licenses.
- Excluded features and change-request policy.
- Privacy, consent, accessibility, security and industry-specific compliance review responsibilities.
- Hosting/domain/Cloud/storage/payment/AI credit costs; clarify recurring service fees.
- Test plan, client acceptance process, go-live criteria and support window.

## Demo and acceptance
Show the client's real use cases on mobile and desktop. Ask them to enter several examples and deliberately generate an error, a cancellation and, if applicable, a login failure. For lead capture, create a *test* CRM contact and inspect automation logs. For payments, use Test mode before any real sale. For multi-user apps, use two separate test accounts to verify they cannot read each other's information.

## Ownership and portability
- Identify the FunnelStreams sub-account holding the AI Studio project; grant role-appropriate access.
- Record registrar/domain access and who pays bills. Never share a master API key.
- Export current codebase ZIP and instructions for how to find prior code versions.
- Document Cloud project/database ownership separately from CRM contacts. Explain that data is **not** included in an AI Studio code ZIP and Cloud data does not follow app remix/clone by default.
- Explain backup reality: automatic Cloud database snapshot does not cover storage files or app code.
- Record third-party integration credentials in the client's secure account, not in a README.

## Ongoing service
Provide a realistic maintenance agreement covering bug fixes, routine monitoring, content edits, platform changes, subscriptions, data exports, and handoff. Say which are included and billed separately. For a prototype, label it prototype and don't imply it is production-hardened.

## Build vs buy comparison
Include subscription to replace, features actually used, estimated ongoing running spend, build and maintenance effort, reliability and vendor support, data portability, account permissions, and opportunity cost. A basic calculator may be sensible to self-build; a heavily regulated or business-critical service may not be.
