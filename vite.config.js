import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Включает генерацию sourcemaps при сборке
  },
  css: {
    devSourcemap: true, // Включает генерацию sourcemaps для CSS в режиме разработки
  },
});
