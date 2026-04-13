import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#131313',
        onSurface: '#e5e2e1',
        surfaceContainer: '#201f1f',
        surfaceContainerLow: '#1c1b1b',
        surfaceContainerHigh: '#2a2a2a',
        surfaceContainerLowest: '#0e0e0e',
        outlineVariant: '#4e4639',
        primary: '#e9c176',
        primaryContainer: '#4e3700',
        secondary: '#d2c4bf',
        background: '#131313',
      },
      fontFamily: {
        headline: ['Noto Serif', 'serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        luxe: '0 20px 80px -30px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};

export default config;
