import { McpServer, createMcpHandler } from '@modelcontextprotocol/server';
import { catalog, release } from './catalog.mjs';
export function factory() {
  const server = new McpServer({name:'funnelstreams-public-skills',version:'0.1.0'}, {
    instructions: 'Public guidance-only pilot. Connect the separate FunnelStreams Help Library at https://funnelstreamshelp.com/mcp for its live knowledge tools. No account actions, private materials or client data are exposed.'
  });
  catalog.attach(server);
  return server;
}
export const handler = createMcpHandler(factory, {responseMode:'json'});
export {release};
