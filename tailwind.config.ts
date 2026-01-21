import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        swimmingflower: {
          'color-scheme': 'dark',

          'base-100': '#4169E2',
          'base-200': '#4169E2',
          'base-300': '#4169E2',
          'base-content': 'oklch(96% 0.003 264.542)',

          primary: '#4169E2',
          'primary-content': 'oklch(14% 0.004 49.25)',

          secondary: '#FF6A14',
          'secondary-content': 'oklch(26% 0.079 36.259)',

          accent: '#FF6A14',
          'accent-content': 'oklch(28% 0.141 291.089)',

          neutral: '#FF6A14',
          'neutral-content': 'oklch(98% 0.002 247.839)',

          info: '#4169E2',
          'info-content': 'oklch(97% 0.014 254.604)',

          success: '#4169E2',
          'success-content': 'oklch(98% 0.031 120.757)',

          warning: '#4169E2',
          'warning-content': 'oklch(98% 0.016 73.684)',

          error: '#4169E2',
          'error-content': 'oklch(96% 0.015 12.422)',

          '--radius-selector': '2rem',
          '--radius-field': '2rem',
          '--radius-box'  : '2rem',

          '--size-selector': '0.25rem',
          '--size-field': '0.25rem',

          '--border': '1px',
          '--depth': '1',
          '--noise': '0',
        },
      },
    ],
  },
};

export default config;
