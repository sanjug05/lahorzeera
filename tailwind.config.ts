import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        zeera: {
          ink: '#1A0D00',
          cola: '#2B1100',
          amber: '#A94F00',
          saffron: '#FF9D00',
          fizz: '#F9E7B7'
        }
      },
      backgroundImage: {
        'glass-gradient': 'radial-gradient(circle at top, rgba(255,170,70,0.15), rgba(26,13,0,0.95))',
        'liquid-wave': 'linear-gradient(135deg, #2B1100 0%, #5E2200 45%, #A94F00 100%)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 157, 0, 0.35)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
