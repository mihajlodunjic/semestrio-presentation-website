import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const candidates = ['logo.png', 'logo_new_1.png', 'semestrio-logo.png'];
const targetDir = path.join(root, 'public', 'brand');
const targetFile = path.join(targetDir, 'logo.png');

const source = candidates
  .map((name) => path.join(root, name))
  .find((filePath) => fs.existsSync(filePath));

fs.mkdirSync(targetDir, { recursive: true });

if (source) {
  fs.copyFileSync(source, targetFile);
  console.log(`[sync-logo] Copied ${path.basename(source)} -> public/brand/logo.png`);
} else {
  console.warn(
    '[sync-logo] No root logo found (logo.png, logo_new_1.png, semestrio-logo.png). UI fallback text "Semestrio" will be used until logo is added.',
  );
}
