import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
} satisfies Config;
