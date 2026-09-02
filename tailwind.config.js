/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Map to WickUI CSS variables where useful
        wu: {
          bg: 'var(--wu-bg)',
          fg: 'var(--wu-fg)',
          border: 'var(--wu-border)',
          accent: 'var(--wu-accent)',
          muted: 'var(--wu-muted)',
        },
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
