import { createServer } from 'node:http';
import { toNodeHandler, hostHeaderValidation, originValidation } from '@modelcontextprotocol/node';
import { handler, release } from './handler.mjs';
const host = process.env.HOST ?? '127.0.0.1';
const port = Number(process.env.PORT ?? '3000');
const allowedHosts = (process.env.ALLOWED_HOSTS ?? 'localhost,127.0.0.1,[::1]').split(',').map(s=>s.trim()).filter(Boolean);
const allowedOrigins = (process.env.ALLOWED_ORIGIN_HOSTS ?? 'localhost,127.0.0.1,[::1]').split(',').map(s=>s.trim()).filter(Boolean);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT');
if (!['127.0.0.1','::1','localhost'].includes(host) && !process.env.ALLOWED_HOSTS) throw new Error('Set exact ALLOWED_HOSTS for remote hosting');
const checkHost = hostHeaderValidation(allowedHosts), checkOrigin = originValidation(allowedOrigins);
const nodeHandler = toNodeHandler(handler);
const server = createServer((req,res) => {
  if (!checkHost(req,res) || !checkOrigin(req,res)) return;
  if (req.url === '/health' && req.method === 'GET') {
    res.writeHead(200, {'content-type':'application/json','cache-control':'no-store'});
    return res.end(JSON.stringify({status:'ok',...release}));
  }
  if (req.url !== '/mcp') { res.writeHead(404); return res.end(); }
  const len = Number(req.headers['content-length'] ?? 0);
  if (len > 65536) { res.writeHead(413); return res.end(); }
  void nodeHandler(req,res);
});
server.requestTimeout = 15_000;
server.headersTimeout = 10_000;
server.listen(port,host,()=>console.error(`FunnelStreams Skills MCP listening at ${host}:${port}/mcp`));
for (const sig of ['SIGTERM','SIGINT']) process.on(sig,async()=>{await handler.close();server.close(()=>process.exit(0));});
