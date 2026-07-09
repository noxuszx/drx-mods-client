import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const minecraftDir = join(__dirname, '..', 'minecraft');

function fail(msg) {
  console.error(`[drx-index] ERROR: ${msg}`);
  process.exit(1);
}

function readToml(path) {
  const text = readFileSync(path, 'utf8');
  const result = {};
  let currentSection = null;

  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) continue;

    const sectionMatch = trimmed.match(/^\[([^\]]+)\]$/);
    if (sectionMatch) {
      currentSection = sectionMatch[1];
      result[currentSection] = result[currentSection] || {};
      continue;
    }

    const kvMatch = trimmed.match(/^([^=]+)=\s*(.+)$/);
    if (kvMatch) {
      const key = kvMatch[1].trim();
      let value = kvMatch[2].trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (currentSection) {
        result[currentSection][key] = value;
      } else {
        result[key] = value;
      }
    }
  }
  return result;
}

function readArrayOfTablesToml(path) {
  const text = readFileSync(path, 'utf8');
  const entries = [];
  let current = null;

  for (const line of text.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === '' || trimmed.startsWith('#')) continue;

    const tableMatch = trimmed.match(/^\[\[([^\]]+)\]\]$/);
    if (tableMatch) {
      if (current) entries.push(current);
      current = {};
      continue;
    }

    const kvMatch = trimmed.match(/^([^(\#]+?)=\s*(.+)$/);
    if (kvMatch && current) {
      const key = kvMatch[1].trim();
      let value = kvMatch[2].trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      current[key] = value;
    }
  }
  if (current) entries.push(current);
  return entries;
}

// Read pack.toml
const packTomlPath = join(minecraftDir, 'pack.toml');
if (!existsSync(packTomlPath)) fail('pack.toml not found');
const packToml = readToml(packTomlPath);

if (!packToml.index || !packToml.index.file) fail('pack.toml has no index file defined');
if (!packToml.versions) fail('pack.toml has no [versions] section');

// Read index.toml
const indexFilePath = join(minecraftDir, packToml.index.file);
if (!existsSync(indexFilePath)) fail(`index file not found: ${packToml.index.file}`);
const indexEntries = readArrayOfTablesToml(indexFilePath);

const indexHashFormat = packToml.index['hash-format'] || 'sha256';

// Build a lookup of indexed files by their 'file' path
const indexedByPath = new Map();
for (const entry of indexEntries || []) {
  if (entry.file) {
    indexedByPath.set(entry.file, entry);
  }
}

const mods = [];
const otherFiles = [];

// Process indexed mod entries (source of truth)
for (const [filePath, entry] of indexedByPath) {
  if (!filePath.startsWith('mods/')) continue;

  if (filePath.endsWith('.pw.toml')) {
    const pwPath = join(minecraftDir, filePath);
    if (!existsSync(pwPath)) fail(`mod manifest not found: ${filePath}`);

    const manifest = readToml(pwPath);

    const name = manifest.name || fail(`no name in ${filePath}`);
    const fileName = manifest.filename || fail(`no filename in ${filePath}`);
    const side = manifest.side || 'both';

    if (!manifest.download) fail(`no [download] section in ${filePath}`);
    if (!manifest.download['hash-format']) fail(`no download.hash-format in ${filePath}`);
    if (!manifest.download.hash) fail(`no download.hash in ${filePath}`);

    mods.push({
      name,
      fileName,
      manifestPath: filePath,
      side,
      hashFormat: manifest.download['hash-format'],
      hash: manifest.download.hash,
    });
  } else if (filePath.endsWith('.jar')) {
    mods.push({
      name: filePath.replace(/^mods\//, '').replace(/\.jar$/, ''),
      fileName: filePath.replace(/^mods\//, ''),
      manifestPath: null,
      side: 'both',
      hashFormat: indexHashFormat,
      hash: entry.hash,
    });
  }
}

// Collect non-mod indexed files (skip all metafiles)
for (const [filePath, entry] of indexedByPath) {
  if (filePath.startsWith('mods/')) continue;
  if (entry.metafile) continue;
  otherFiles.push({
    path: filePath,
    hashFormat: indexHashFormat,
    hash: entry.hash,
  });
}

// Sort for deterministic output
mods.sort((a, b) => {
  const ka = a.manifestPath || a.fileName;
  const kb = b.manifestPath || b.fileName;
  return ka.localeCompare(kb);
});
otherFiles.sort((a, b) => a.path.localeCompare(b.path));

const index = {
  schemaVersion: 1,
  pack: {
    name: packToml.name || 'DRX - Reforged',
    version: packToml.version || '0.0.0',
    minecraft: packToml.versions.minecraft,
    loader: {
      name: 'neoforge',
      version: packToml.versions.neoforge,
    },
  },
  mods,
  otherFiles,
};

const outPath = join(minecraftDir, 'drx-index.json');
writeFileSync(outPath, JSON.stringify(index, null, 2) + '\n');

console.log(`[drx-index] Wrote ${outPath}`);
console.log(`[drx-index]   mods: ${mods.length}`);
console.log(`[drx-index]   otherFiles: ${otherFiles.length}`);