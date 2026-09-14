import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_GITHUB_PAGES === 'true' ? '/moon-platform/' : './',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/.vs/**'],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5080',
        changeOrigin: true,
      },
    },
  },
});
