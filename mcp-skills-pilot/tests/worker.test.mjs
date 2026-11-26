import test from 'node:test';
import assert from 'node:assert/strict';
import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client';
import { SkillsClient } from '@modelcontextprotocol/client/ext/skills';
import worker from '../dist/worker.mjs';
const env={ALLOWED_HOSTS:'pilot.example.com',ALLOWED_ORIGINS:'https://claude.ai'};
test('bundled deployable worker uses official native skills protocol',async()=>{
  const client=new Client({name:'worker-test',version:'1'},{versionNegotiation:{mode:'auto'}});
  const url='https://pilot.example.com/mcp';
  try{
    await client.connect(new StreamableHTTPClientTransport(new URL(url),{fetch:(url,init)=>worker.fetch(new Request(url,init),env)}));
    const skills=new SkillsClient(client);
    assert.equal(skills.supported,true);
    const {skills:[entry]}=await skills.list();
    assert.equal(entry.frontmatter.name,'funnel-plan');
    assert.equal((await skills.read(entry,'F8_SYSTEM.md')).verified,true);
    assert.equal((await skills.read(entry)).verified,true);
  }finally{await client.close();}
});
test('worker admits only configured hosts/origins and bounds request body',async()=>{
  assert.equal((await worker.fetch(new Request('https://other.example.com/health'),env)).status,403);
  assert.equal((await worker.fetch(new Request('https://pilot.example.com/health',{headers:{origin:'https://other.example.com'}}),env)).status,403);
  assert.equal((await worker.fetch(new Request('https://pilot.example.com/health'),env)).status,200);
  assert.equal((await worker.fetch(new Request('https://pilot.example.com/mcp',{method:'POST',body:'X'.repeat(65537)}),env)).status,413);
  assert.equal((await worker.fetch(new Request('https://pilot.example.com/unknown'),env)).status,404);
});
