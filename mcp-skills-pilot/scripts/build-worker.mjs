import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
const lock=JSON.parse(await readFile('catalog-lock.json','utf8'));
const files={};
for(const [name,expected] of Object.entries(lock.skills)){
  if(!/^[a-z0-9-]+\/[A-Za-z0-9_.-]+(?:\/[A-Za-z0-9_.-]+)*$/.test(name)||name.split('/').some(x=>x==='..'||x==='.') ) throw Error('Invalid reviewed path');
  const bytes=await readFile('skills/'+name);
  if(bytes.length!==expected.size||createHash('sha256').update(bytes).digest('hex')!==expected.sha256)throw Error('Catalog integrity mismatch');
  const decoded=new TextDecoder('utf-8',{fatal:true}).decode(bytes);
  if(!Buffer.from(decoded).equals(bytes))throw Error('Non-roundtrip UTF8');
  files[name]=decoded;
}
await mkdir('dist',{recursive:true});
await writeFile('dist/catalog.generated.mjs', 'export const files='+JSON.stringify(files)+';\nexport const release='+JSON.stringify({source:lock.source,revision:lock.revision,visibility:lock.visibility,files:Object.keys(files).length})+';\n');
await build({entryPoints:['worker.mjs'],bundle:true,format:'esm',platform:'browser',conditions:['workerd','worker','browser'],outfile:'dist/worker.mjs',target:'es2022',logLevel:'warning'});
