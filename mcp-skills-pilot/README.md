# FunnelStreams Skills MCP — pilot

**Scope:** one approved, public, guidance-only F8 skill, `funnel-plan` (v1.2.2). This service is independent of the live F8 chat and Help Library. It serves no CRM tools, contact data, private Dream Team content, payment actions or secrets.

## How it works
This is native Skills over MCP, not a ZIP-download tool. The official MCP TypeScript SDK advertises `io.modelcontextprotocol/skills`, publishes skill entries with content digests, and serves the exact approved files through resources. The source is the F8 skills repository at commit `770cc9b0a4594d9beab86e719e1f38cebb0d826f`, not a mutable branch URL. Both files match the original public submission package byte for byte. `catalog-lock.json` is the explicit release allowlist. A new release must be reviewed, pinned, tested and redeployed; a changed Git file cannot silently become approved content.

## Local installation (Claude Code)
Requires Node 22+ and npm. From this directory:

```sh
npm ci
npm test
claude mcp add --scope user --transport stdio funnelstreams-skills -- node /ABSOLUTE/PATH/TO/THIS/DIRECTORY/stdio.mjs
claude mcp add --scope user --transport http funnelstreams-help https://funnelstreamshelp.com/mcp
claude mcp list
```

The second connector supplies the existing searchArticles/getArticle knowledge tools required by the skill. If already connected, do not duplicate it. Both clients need native Skills over MCP support on an eligible model/session; the pilot does not change the Help endpoint. In Claude, confirm that the discovered skill is visible and approve its load when prompted. Ask: "What kind of funnel should I build for a $100 workshop with cold social traffic?" Check that the skill was loaded, live Help articles were searched and read, and citations match the returned article URLs. Ask a follow-up about AI Studio. Record the native host/model and exact results; do not count SDK tests as a live Claude answer.

## Remote deployment (Claude web/desktop custom connector)
Two artifacts are supported:

- Node container: `Dockerfile`, `npm start`. Set `HOST=0.0.0.0`, `PORT` and exact `ALLOWED_HOSTS` (e.g. the actual assigned hostname). Configure HTTPS and request size/rate limits at the trusted host.
- Cloudflare Worker: `npm ci && npm run build`; bundle `dist/worker.mjs`. Deploy as a new Worker, not to a current service. Set exact `ALLOWED_HOSTS` and, only if needed, exact `ALLOWED_ORIGINS` separated by commas. The Worker denies unconfigured hosts and origins and caps request bodies. Example origin configuration: `https://claude.ai`. Add ordinary platform-level rate limiting. No secrets are required for this public-only skill.

After HTTPS deployment, read `/health` for the pinned release and use `/mcp` as the remote address in Claude custom connectors. Connect the separate Help endpoint too. Verify native discovery, file verification, an actual Claude response grounded in articles, a second-turn follow-up, and a reviewed update with fresh client approval if required.

## Release workflow
1. Keep legacy files, standalone master and plugin artifacts in their canonical repositories. No rewriting or deletion.
2. Review only intended public guidance files and their dependencies. Copy exact bytes from an immutable Git commit and regenerate the path/size/SHA-256 allowlist. The current server fails closed if any unapproved or changed file is present.
3. Run `npm ci && npm test`; this builds and tests the Worker, tests both SDK transports, verifies both approved files, tests a synthetic version update, and confirms unlisted content is rejected.
4. Deploy only the reviewed release in the isolated environment, confirm /health and native client discovery. Keep the previous immutable deploy available for rollback.
5. Expand only after the pilot passes in the actual Claude host. Plan private authenticated catalogs separately. Preserve existing platform ZIPs. No broad public import of the 191 F8 skills or 28 Dream Team masters; do not expose proprietary or private instructions.

## Status before deployment
- Local SDK, stdio, real loopback HTTP, bundled Worker: tested.
- Real Claude account, new public HTTPS endpoint, real model answers and production version refresh: not tested/verified until access and deployment are available.
- F8 app, live Help and existing Download Library: unchanged.

References:
- https://modelcontextprotocol.io/extensions/skills/overview
- https://ts.sdk.modelcontextprotocol.io/v2/servers/skills
- https://code.claude.com/docs/en/mcp#use-skills-from-mcp-servers
