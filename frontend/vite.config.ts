import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build', sourcemap: true },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    port: 8080, // Changer le numéro de port selon vos besoins
  },
});

