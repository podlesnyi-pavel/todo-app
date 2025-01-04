import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/todo-app/',
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@',
        replacement: fileURLToPath(
          new URL('./src/components/', import.meta.url)
        ),
      },
    ],
  },
});
