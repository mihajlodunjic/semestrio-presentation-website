import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourceLogo = path.join(publicDir, 'logo.png');
const brandDir = path.join(publicDir, 'brand');

const sizes = [16, 32, 48, 64, 72, 96, 128, 144, 152, 180, 192, 256, 384, 512];

const standardTargets = [
  { size: 16, file: 'favicon-16x16.png' },
  { size: 32, file: 'favicon-32x32.png' },
  { size: 180, file: 'apple-touch-icon.png' },
  { size: 192, file: 'android-chrome-192x192.png' },
  { size: 512, file: 'android-chrome-512x512.png' },
];

async function ensureSourceLogo() {
  try {
    await fs.access(sourceLogo);
    return true;
  } catch {
    console.warn('[brand-assets] Missing source logo: public/logo.png. Skipping icon generation.');
    return false;
  }
}

async function generate() {
  const hasSource = await ensureSourceLogo();
  if (!hasSource) {
    return;
  }
  await fs.mkdir(brandDir, { recursive: true });

  const resized = new Map();
  try {
    for (const size of sizes) {
      const buffer = await sharp(sourceLogo)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();

      resized.set(size, buffer);
      await fs.writeFile(path.join(brandDir, `logo-${size}.png`), buffer);
    }

    await fs.copyFile(sourceLogo, path.join(brandDir, 'logo.png'));

    for (const target of standardTargets) {
      const buffer = resized.get(target.size);
      if (buffer) {
        await fs.writeFile(path.join(publicDir, target.file), buffer);
      }
    }

    const faviconBuffer = await pngToIco([resized.get(16), resized.get(32), resized.get(48)].filter(Boolean));
    await fs.writeFile(path.join(publicDir, 'favicon.ico'), faviconBuffer);

    const manifest = {
      name: 'Semestrio',
      short_name: 'Semestrio',
      icons: [
        { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      theme_color: '#F3BD47',
      background_color: '#FCFCFC',
      display: 'standalone',
    };

    await fs.writeFile(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

    console.log('[brand-assets] Generated logo sizes, favicon.ico and web manifest from public/logo.png');
  } catch (error) {
    console.warn('[brand-assets] Could not process public/logo.png. Skipping generated icons.');
    console.warn(`[brand-assets] ${error instanceof Error ? error.message : String(error)}`);
  }
}

generate().catch((error) => {
  console.error('[brand-assets] Failed:', error);
  process.exit(1);
});
