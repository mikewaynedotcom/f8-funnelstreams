import { McpServer, createMcpHandler } from '@modelcontextprotocol/server';
import { SkillsExtension, memorySkillFiles } from '@modelcontextprotocol/server/ext/skills';
import { files, release } from './dist/catalog.generated.mjs';
const catalog = await SkillsExtension.load(memorySkillFiles(files));
const handler=createMcpHandler(()=>{
  const server=new McpServer({name:'funnelstreams-public-skills',version:'0.1.0'},{instructions:'Public guidance-only pilot. Connect https://funnelstreamshelp.com/mcp separately for current FunnelStreams Help Library knowledge tools. No account actions.'});
  catalog.attach(server);return server;
});
export default {async fetch(request, env={}) {
  const url=new URL(request.url);
  const hosts=(env.ALLOWED_HOSTS||'').split(',').map(x=>x.trim()).filter(Boolean);
  const origins=(env.ALLOWED_ORIGINS||'').split(',').map(x=>x.trim()).filter(Boolean);
  if(!hosts.includes(url.hostname)) return new Response('Host not configured',{status:403});
  const origin=request.headers.get('origin');
  if(origin&&!origins.includes(origin))return new Response('Origin not allowed',{status:403});
  if(request.method==='GET'&&url.pathname==='/health') return Response.json({status:'ok',...release},{headers:{'cache-control':'no-store'}});
  if(url.pathname!=='/mcp')return new Response('Not found',{status:404});
  if(request.method==='POST'){
    if(Number(request.headers.get('content-length')||0)>65536)return new Response('Request too large',{status:413});
    // A streamed request may omit content-length. Bound the bytes before passing it to the MCP SDK.
    const reader=request.body?.getReader();
    if(!reader)return new Response('Missing request body',{status:400});
    let size=0;const chunks=[];
    for(;;){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>65536){await reader.cancel();return new Response('Request too large',{status:413});}chunks.push(value);}
    const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
    request=new Request(request.url,{method:'POST',headers:request.headers,body:bytes});
  }
  return handler.fetch(request);
}};
