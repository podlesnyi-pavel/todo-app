import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/todo-app/',
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
        replacement: fileURLToPath(new URL('./src/components/', import.meta.url)),
      },
    ],
  },
});
