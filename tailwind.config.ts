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
          name: 'jumpingmax',
          default: false,
          prefersdark: false,
          'color-scheme': 'dark',
          '--color-base-100': 'oklch(96% 0.018 272.314)',
          '--color-base-200': '#4169E2',
          '--color-base-300': '#4169E2',
          '--color-base-content': 'oklch(35% 0.144 278.697)',
          '--color-primary': '#4169E2',
          '--color-primary-content': 'oklch(97% 0.013 17.38)',
          '--color-secondary': '#4169E2',
          '--color-secondary-content': 'oklch(97% 0.014 254.604)',
          '--color-accent': '#4169E2',
          '--color-accent-content': 'oklch(97% 0.013 17.38)',
          '--color-neutral': '#4169E2',
          '--color-neutral-content': 'oklch(96% 0.018 272.314)',
          '--color-info': '#4169E2',
          '--color-info-content': 'oklch(98% 0.019 200.873)',
          '--color-success': '#4169E2',
          '--color-success-content': 'oklch(98% 0.031 120.757)',
          '--color-warning': '#4169E2',
          '--color-warning-content': 'oklch(98% 0.022 95.277)',
          '--color-error': '#4169E2',
          '--color-error-content': 'oklch(97% 0.013 17.38)',
          '--radius-selector': '0.25rem',
          '--radius-field': '1rem',
          '--radius-box': '0.5rem',
          '--size-selector': '0.25rem',
          '--size-field': '0.25rem',
          '--border': '1px',
          '--depth': '0',
          '--noise': '1',
        },
      },
    ],
  },
};

export default config;
