import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset resolution for GitHub Pages & static hosting
  server: {
    port: 3000,
    open: true
  }
});
