# Semestrio Presentation Website

Prezentacioni SPA sajt za B2B platformu u oblaku **Semestrio**, napravljen sa React + Vite + TypeScript + TailwindCSS + Framer Motion.

## Pokretanje

1. Instalacija zavisnosti:

```bash
npm install
```

2. Dev server:

```bash
npm run dev
```

3. Produkcioni build:

```bash
npm run build
```

4. Preview build-a:

```bash
npm run preview
```

## Logo i favicon asseti

Jedini izvor logotipa je:

- `public/logo.png`

Pre svakog `dev` i `build` pokretanja automatski se izvrsava:

- `scripts/generate-brand-assets.mjs`

Skripta iz `public/logo.png` generise standardne velicine i fajlove:

- `public/brand/logo.png`
- `public/brand/logo-16.png`
- `public/brand/logo-32.png`
- `public/brand/logo-48.png`
- `public/brand/logo-64.png`
- `public/brand/logo-72.png`
- `public/brand/logo-96.png`
- `public/brand/logo-128.png`
- `public/brand/logo-144.png`
- `public/brand/logo-152.png`
- `public/brand/logo-180.png`
- `public/brand/logo-192.png`
- `public/brand/logo-256.png`
- `public/brand/logo-384.png`
- `public/brand/logo-512.png`
- `public/favicon.ico`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/site.webmanifest`

Ako `public/logo.png` ne postoji ili nije validan image fajl, skripta ispisuje upozorenje i preskace generisanje.

## Napomene

- UI logo koristi `/logo.png`.
- Favicon setup koristi `favicon.ico`, PNG varijante i web manifest.
- Cene i FAQ sadrzaj su data-driven kroz `src/data/pricing.ts` i `src/data/faq.ts`.
- Pricing formula: `ukupno = max(minimalna cena paketa, broj_ucenika x cena_po_uceniku)`.
