/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['var(--font-sans)', ..._fontFamily.sans],
    },
  },
};
export const plugins = [];
