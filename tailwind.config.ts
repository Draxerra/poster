import { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: `var(--font-inter), ${fontFamily.sans}`
      }
    }
  },
  plugins: [],
}

export default config;
