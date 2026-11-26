import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client';
import { SkillsClient } from '@modelcontextprotocol/client/ext/skills';
import { McpServer, createMcpHandler } from '@modelcontextprotocol/server';
import { SkillsExtension, memorySkillFiles } from '@modelcontextprotocol/server/ext/skills';
import { handler, release } from '../handler.mjs';

const callbacks = [];
async function connect(h = handler) {
  const client = new Client({name:'fs-pilot-tests',version:'1.0.0'}, {versionNegotiation:{mode:'auto'}});
  const seen = [];
  await client.connect(new StreamableHTTPClientTransport(new URL('http://test.local/mcp'), {
    fetch: (url,init) => { if(init?.body && typeof init.body==='string') {try{seen.push(JSON.parse(init.body).method)}catch{}} return h.fetch(new Request(url,init));}
  }));
  callbacks.push(()=>client.close());
  return {client,skills:new SkillsClient(client),seen};
}
test('real MCP SDK client discovers one public skill and verifies both exact source files',async()=>{
  const {client,skills,seen}=await connect();
  const all = await skills.list();
  assert.equal(all.skills.length,1);
  assert.equal(all.invalid.length,0);
  assert.equal(all.cacheScope,'private');
  const e=all.skills[0];
  assert.equal(e.frontmatter.name,'funnel-plan');
  assert.equal(e.frontmatter.metadata.version,'1.2.2');
  assert.equal(e.resources.length,2);
  assert.equal(e.uri,'skill://funnel-plan/SKILL.md');
  assert.ok(!seen.includes('resources/read'));
  const got = await skills.get(e.uri); assert.deepEqual(got.skill,e);
  for (const file of ['SKILL.md','F8_SYSTEM.md']) {
    const expected=await readFile(new URL('../skills/funnel-plan/'+file,import.meta.url));
    const result=await skills.read(e,file);
    assert.equal(result.verified,true);
    assert.deepEqual(Buffer.from(result.bytes),expected);
    const match=e.resources.find(x=>x.uri.endsWith('/'+file));
    assert.equal(match.size,expected.length);
    assert.equal(match.digest,'sha256:'+createHash('sha256').update(expected).digest('hex'));
  }
  assert.equal(release.visibility,'public-guidance-only');
  if(skills.directoryRead) assert.equal((await skills.readDirectory('skill://funnel-plan')).resources.length,2);
  await assert.rejects(()=>skills.read(e,'not-in-catalog.md'));
  await assert.rejects(()=>skills.get('skill://unknown/SKILL.md'));
  assert.ok(!(await client.getServerCapabilities())?.tools);
});
test('version promotion changes the manifest and rejects a stale manifest',async()=>{
  const data = {'demo/SKILL.md':'---\nname: demo\ndescription: Example public test skill.\n---\nVersion A\n'};
  const c=await SkillsExtension.load(memorySkillFiles(data));
  const h=createMcpHandler(()=>{const s=new McpServer({name:'synthetic-release',version:'1'});c.attach(s);return s;});
  const {skills}=await connect(h);
  const a=(await skills.list()).skills[0];
  assert.equal((await skills.read(a)).verified,true);
  data['demo/SKILL.md']='---\nname: demo\ndescription: Example public test skill.\n---\nVersion B changed\n';
  await c.reload();
  const b=(await skills.get(a.uri,{cacheMode:'refresh'})).skill;
  assert.notEqual(a.resources[0].digest,b.resources[0].digest);
  assert.equal((await skills.read(b)).verified,true);
  await assert.rejects(()=>skills.read(a),/size|digest|verification/i);
  await h.close();
});
test.after(async()=>{for(const fn of callbacks) await fn();await handler.close();});
