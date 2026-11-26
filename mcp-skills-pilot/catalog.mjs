import { readFile, readdir, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SkillsExtension, memorySkillFiles } from '@modelcontextprotocol/server/ext/skills';

const dir = fileURLToPath(new URL('./skills/', import.meta.url));
const lock = JSON.parse(await readFile(new URL('./catalog-lock.json', import.meta.url), 'utf8'));
const bytes = Object.create(null);
async function walk(path, prefix = '') {
  for (const entry of await readdir(path)) {
    const full = join(path, entry), relative = prefix + entry;
    const stat = await lstat(full);
    if (stat.isDirectory()) await walk(full, relative + '/');
    else if (stat.isFile()) {
      if (!Object.hasOwn(lock.skills, relative)) throw new Error('Catalog contains an unapproved file');
      const data = await readFile(full);
      const expected = lock.skills[relative];
      if (data.byteLength !== expected.size || createHash('sha256').update(data).digest('hex') !== expected.sha256) {
        throw new Error('Catalog integrity check failed');
      }
      bytes[relative] = new Uint8Array(data);
    } else throw new Error('Catalog contains a non-regular file');
  }
}
await walk(dir);
if (Object.keys(bytes).length !== Object.keys(lock.skills).length) throw new Error('Incomplete catalog');
export const catalog = await SkillsExtension.load(memorySkillFiles(bytes));
export const release = Object.freeze({ source: lock.source, revision: lock.revision, visibility: lock.visibility, files: Object.keys(bytes).length });
