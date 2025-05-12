import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Для GitLab Pages используем имя репозитория как базовый путь
const repositoryName = 'motostore';
const base = process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'public',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
