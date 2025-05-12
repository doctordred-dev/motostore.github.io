import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Для GitLab Pages используем базовый путь из переменной окружения или оставляем корневой
const base = process.env.NODE_ENV === 'production' ? '/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
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
