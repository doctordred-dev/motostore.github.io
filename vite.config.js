import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Для GitLab Pages используем имя репозитория как базовый путь
const repositoryName = 'kukh_homework';
const base = process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'public', // GitLab Pages по умолчанию ищет папку 'public'
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
