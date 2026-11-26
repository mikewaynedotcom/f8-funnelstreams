import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { Client, StreamableHTTPClientTransport } from '@modelcontextprotocol/client';
import { StdioClientTransport } from '@modelcontextprotocol/client/stdio';
import { SkillsClient } from '@modelcontextprotocol/client/ext/skills';
const identity={name:'f8-transport-test',version:'1'};
const opts={versionNegotiation:{mode:'auto'}};
test('stdio transport exposes native skill manifest and verifies instructions',async()=>{
  const client=new Client(identity,opts);
  try{
    await client.connect(new StdioClientTransport({command:process.execPath,args:['stdio.mjs']}));
    const skills=new SkillsClient(client);
    assert.equal(skills.supported,true);
    const {skills:[entry]}=await skills.list();
    assert.equal(entry.frontmatter.name,'funnel-plan');
    assert.equal((await skills.read(entry)).verified,true);
  } finally { await client.close(); }
});
test('HTTP transport works on loopback and only serves configured paths and hosts',async()=>{
  const port=39147;
  const p=spawn(process.execPath,['server.mjs'],{env:{...process.env,PORT:String(port),HOST:'127.0.0.1'},stdio:['ignore','ignore','pipe']});
  const client=new Client(identity,opts);
  try{
    await Promise.race([new Promise((resolve,reject)=>{p.stderr.on('data',s=>{if(s.toString().includes('listening at'))resolve()});p.on('exit',()=>reject(new Error('server exited')))}),new Promise((_,reject)=>setTimeout(()=>reject(new Error('server startup timeout')),7000).unref())]);
    let base='http://127.0.0.1:'+port;
    const health=await fetch(base+'/health'); assert.equal(health.status,200);
    assert.equal((await health.json()).status,'ok');
    assert.equal((await fetch(base+'/other')).status,404);
    // Defensive check: the server's configured origin policy is enforced.
    assert.equal((await fetch(base+'/health',{headers:{origin:'https://unapproved.example'}})).status,403);
    await client.connect(new StreamableHTTPClientTransport(new URL(base+'/mcp')));
    const skills=new SkillsClient(client);
    assert.equal(skills.supported,true);
    const {skills:[entry]}=await skills.list();
    assert.equal(entry.resources.length,2);
    assert.equal((await skills.read(entry,'F8_SYSTEM.md')).verified,true);
  } finally{
    await client.close();
    p.kill('SIGTERM');
    await once(p,'exit').catch(()=>{});
  }
});
