# Semestrio Presentation Website

Prezentacioni SPA sajt za B2B SaaS platformu **Semestrio**, napravljen sa React + Vite + TypeScript + TailwindCSS + Framer Motion.

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

## Logo sync

Pre svakog `dev` i `build` pokretanja automatski se izvrsava `scripts/sync-logo.mjs`.

Skripta trazi logo u root folderu po sledecem redosledu:

1. `logo.png`
2. `logo_new_1.png`
3. `semestrio-logo.png`

Ako pronadje fajl, kopira ga u:

- `public/brand/logo.png`

Ako ne pronadje nijedan, aplikacija nastavlja da radi, a UI prikazuje fallback tekst `Semestrio` gde je logo predvidjen.

## Napomene

- Favicon koristi isti put: `/brand/logo.png`.
- Cene i FAQ sadrzaj su data-driven kroz `src/data/pricing.ts` i `src/data/faq.ts`.
- Pricing formula: `ukupno = max(minimalna cena paketa, broj_ucenika x cena_po_uceniku)`.
