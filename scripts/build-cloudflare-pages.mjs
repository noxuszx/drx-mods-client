import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = 'site';
const sourceRoot = 'minecraft/';

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, '.nojekyll'), '');

const result = spawnSync('git', ['ls-files', '-z', sourceRoot], {
  encoding: 'utf8',
  maxBuffer: 10 * 1024 * 1024
});

if (result.status !== 0) {
  throw new Error(result.stderr || result.error?.message || 'git ls-files failed');
}

const trackedFiles = result.stdout
  .split('\0')
  .filter(Boolean);

for (const file of trackedFiles) {
  if (!existsSync(file)) {
    continue;
  }

  const destination = join(outDir, file);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(file, destination);
}
