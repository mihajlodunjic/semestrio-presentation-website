import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: 'var(--brand-yellow-500)',
          600: 'var(--brand-yellow-600)',
          700: 'var(--brand-yellow-700)',
          gray: {
            200: 'var(--brand-gray-200)',
            500: 'var(--brand-gray-500)',
            700: 'var(--brand-gray-700)',
            800: 'var(--brand-gray-800)',
          },
        },
        surface: {
          bg: 'var(--bg)',
          soft: 'var(--bg-soft)',
          card: 'var(--card)',
          border: 'var(--border)',
        },
        text: {
          primary: 'var(--text)',
          muted: 'var(--text-muted)',
        },
      },
      boxShadow: {
        card: '0 6px 18px rgba(17, 17, 17, 0.04)',
        glow: '0 10px 30px rgba(243, 189, 71, 0.24)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
