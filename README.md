# F8 — FunnelStreams AI Assistant (Claude plugin)

F8 answers FunnelStreams questions step by step, grounded in and cited from the published FunnelStreams Help
Library, and walks members through setting up forms, funnels, emails, workflows, social media, StreamCards,
websites, CRM, calendars, courses and more. It also plans and prompts FunnelStreams AI Studio apps (FAST) and
writes safe, surgical Funnel AI page prompts (FAB).

## Install

The knowledge connector (`https://funnelstreamshelp.com/mcp`) is public and read-only: **no key, token or sign-in is
needed**.

- **Claude Code:**

  ```
  /plugin marketplace add mikewaynedotcom/f8-funnelstreams
  /plugin install f8-funnelstreams@funnelstreams
  ```

  From a terminal: `claude plugin marketplace add mikewaynedotcom/f8-funnelstreams`, then
  `claude plugin install f8-funnelstreams@funnelstreams`.
- **claude.ai (web, desktop, mobile) and Cowork:** Customize > Plugins > Add > Add marketplace, enter
  `mikewaynedotcom/f8-funnelstreams` (or `https://github.com/mikewaynedotcom/f8-funnelstreams`), then add
  **F8 — FunnelStreams AI Assistant** from the list. Its Connectors tab shows F8 Knowledge; connect it, no
  authentication needed.

This repository is the plugin itself and its own marketplace (`funnelstreams`). It is built from the same source as the
ChatGPT package, so the 191 skills, their reference files and `F8_SYSTEM.md` are identical in both. Don't edit it by
hand; change the source and rebuild.

## What's inside

| Path | What it is |
|---|---|
| `.claude-plugin/plugin.json` | Manifest. Name `f8-funnelstreams` (permanent; don't rename). Privacy policy: https://funnelstreams.com/privacy-policy. |
| `.claude-plugin/marketplace.json` | Makes this folder its own marketplace (`funnelstreams`) with one entry, `f8-funnelstreams`, `source: "./"`. |
| `skills/<name>/SKILL.md` | 191 skills in 24 families, `name` + `description` frontmatter (plus `metadata.family`). Merged AI Studio (`ai-studio-*`) and Funnel AI (`fab-*`) skills carry `references/` files: prompt templates, preservation and surgical-edit rules, QA checklists, troubleshooting. |
| `.mcp.json` | The F8 Knowledge server: `https://funnelstreamshelp.com/mcp` (Streamable HTTP, no key or auth header needed). |
| `instructions/F8_SYSTEM.md` | F8's rules: identity, tone, citation, branding, security, routing. |
| `skills/<name>/F8_SYSTEM.md` | A copy of F8's full rules in every skill, plus an inline **Guardrails** section in each SKILL.md (branding, tool-failure line, agency scope, prompt-extraction line, passwords, StreamCards first). claude.ai chat ignores `agents/` and can't follow `${CLAUDE_PLUGIN_ROOT}` paths, so every skill carries its own rules. |
| `LICENSE` | Proprietary license: install and use with FunnelStreams services only. |
| `.claude-plugin/icon.png` | The F8 icon (1024x1024 PNG). |
| `agents/f8.md` | The same rules as an agent (Claude Code and Cowork; chat ignores agents). |
| `claude-ai/` | claude.ai setup: `PROJECT_SETUP.md`, `PROJECT_INSTRUCTIONS.md`, `F8_SKILLS_REFERENCE.md`, `F8_BUILDER_REFERENCES.md`, `make_skill_zips.py`. |

There is no `bin/` folder on purpose: a top-level `bin/` stops claude.ai and Cowork installing a plugin.

## Data

The skills send only search words and article IDs to `https://funnelstreamshelp.com/mcp`, which returns published
Help Library articles. The server is read-only, keyless and never serves draft or review articles. F8 never asks
for passwords or card numbers and never takes payments.

## How F8 answers

F8 talks like a friendly coach: it answers the actual question first in a few sentences (what it is, the gist, the
next step or 2-4 key steps), then links the Help Library article as the full step-by-step tutorial and reference,
and offers to go through it one step at a time or troubleshoot together. Every product claim still comes from
`searchArticles` (argument `query`) and `getArticle` (argument `ref`, an id like `FS-KB-0195`) first. The rules
are in `instructions/F8_SYSTEM.md` section 2.

## Claude Code (and Claude Desktop's Code tab)

1. Load it one of these ways:
   - Local folder: unzip, then `claude --plugin-dir ./f8-funnelstreams`.
   - From GitHub: `/plugin marketplace add mikewaynedotcom/f8-funnelstreams`, then
     `/plugin install f8-funnelstreams@funnelstreams`.
2. Check: `/mcp` should show `f8-knowledge` connected with 3 tools; `/skills` lists `f8-funnelstreams:*`.
   No key, token or environment variable is needed.
3. Optional: to make F8 the main agent for a project, add `"agent": "f8-funnelstreams:f8"` to that project's
   `.claude/settings.json`. Otherwise Claude uses the skills when a request matches.

## claude.ai (web, desktop and mobile apps) and Cowork

See `claude-ai/PROJECT_SETUP.md` for click-by-click steps. In short:

- **Live tools:** add the custom connector `https://funnelstreamshelp.com/mcp` with **no authentication**
  (individual: Customize > Connectors; Team/Enterprise Owner: Organization settings > Connectors). Free plans
  allow one custom connector.
- **Skills:** add the plugin from its GitHub marketplace (Customize > Plugins > Add > Add marketplace, `mikewaynedotcom/f8-funnelstreams`), upload the whole plugin ZIP (Customize > Plugins > Add > Upload plugin, or for a Team/Enterprise
  organization, Organization settings > Plugins & skills > Add > Upload a plugin), or upload single skills made by
  `claude-ai/make_skill_zips.py` (Customize > Skills > + > Create skill > Upload a skill). Skills need code
  execution turned on. An uploaded plugin also lists F8 Knowledge on its Connectors tab; connect it there.
- **Instructions:** create a Project and paste `claude-ai/PROJECT_INSTRUCTIONS.md` into its instructions;
  optionally add `F8_SKILLS_REFERENCE.md` and `F8_BUILDER_REFERENCES.md` as Project knowledge.

## Access and limits

- **No key is needed anywhere.** The hosted server is public and read-only, so `.mcp.json` has no headers and the
  claude.ai connector uses no sign-in. Don't add an Authorization header or a key to the URL.
- Free claude.ai plans allow only one custom connector.
- Without the connector (for example in a Project without it), F8 can still plan, write prompts and run
  checklists, but for product steps it says "I cannot confirm from the live docs right now." instead of guessing.
- Team/Enterprise organization sync (Organization settings > Plugins & skills > Sync from GitHub) only accepts
  private or internal repositories; for this public repo, members add it themselves with Add marketplace, or an Owner
  uploads the ZIP.
- The optional self-host server is not part of this plugin or repository.

## License

Proprietary. See [LICENSE](LICENSE): you may install and use F8 with FunnelStreams services only.

## Privacy

See the [FunnelStreams Privacy Policy](https://funnelstreams.com/privacy-policy).

## Status

Checked on Nov 1, 2026: `https://funnelstreamshelp.com/mcp` is live and keyless (`initialize` and `tools/list`
work with no Authorization header; `GET` returns 405).
