# F8 on claude.ai: connector, Project and skills

Three pieces, set up in this order. Nothing here needs a key or a secret.

## 1. Add the F8 Knowledge connector (live help-library tools)

The tools `searchArticles` (argument `query`), `getArticle` (argument `ref`, e.g. `FS-KB-0195`) and
`listCategories` come from one public, read-only MCP server: `https://funnelstreamshelp.com/mcp`. **No key is
needed.**

- **Individual (Free, Pro, Max):** Customize > Connectors > + > Add custom connector. Name `F8 Knowledge`, URL
  `https://funnelstreamshelp.com/mcp`, no authentication. Free plans allow one custom connector.
- **Team or Enterprise (Owner):** Organization settings > Connectors > Add > Custom > Web. Name `F8 Knowledge`,
  URL `https://funnelstreamshelp.com/mcp`, authentication **No sign-in**. Members then enable it from
  Customize > Connectors.

In each chat, turn the connector on from the + menu > Connectors if it isn't on already.

## 2. Create a Project with F8's instructions

1. Projects > New project, name it `F8 — FunnelStreams AI Assistant`.
2. Open **Project instructions** and paste the whole of `claude-ai/PROJECT_INSTRUCTIONS.md`.
3. Optional, for when the connector isn't available: add `claude-ai/F8_SKILLS_REFERENCE.md` and
   `claude-ai/F8_BUILDER_REFERENCES.md` to **Project knowledge**. They are the same skills and FAST/FAB reference
   files as the plugin. Without the connector, F8 can plan, write prompts and run checklists, but must say
   "I cannot confirm from the live docs right now." for product steps. The Project never sees draft articles.

## 3. Upload skills (optional)

Skills load only when a request matches, so they keep long workflows out of every chat.

- **Individual:** run `python3 claude-ai/make_skill_zips.py` to get one ZIP per skill in `skill-zips/`, then
  Customize > Skills > + > Create skill > Upload a skill, one ZIP at a time. Start with the families you use
  most (for example the 16 `ai-studio-*` and 16 `fab-*` skills). Each ZIP already contains `F8_SYSTEM.md`.
- **Whole plugin from GitHub (easiest):** Customize > Plugins > Add > Add marketplace, enter
  `mikewaynedotcom/f8-funnelstreams`, then add F8 from the list. Its Connectors tab lists F8 Knowledge (no key).
- **Whole plugin, from the ZIP:** Customize > Plugins > Add > Upload plugin, and pick
  `f8-funnelstreams-claude.zip` as is (it has `.claude-plugin/plugin.json` at the root and every skill under
  `skills/`). Its Connectors tab lists F8 Knowledge; connect it there if you skipped step 1.
- **Team or Enterprise (Owner):** Organization settings > Plugins & skills > Add > Upload a plugin (ZIP under
  200 MB), then set its availability on the Inventory tab. Or Add > Upload a skill for single skill ZIPs; those
  are provisioned to everyone.
- Skills need code execution: Settings > Capabilities (individual) or Organization settings > Plugins & skills >
  Policy (Team/Enterprise).

Uploaded skills accept only `name`, `description` and `metadata` frontmatter, which is all F8's skills use.
