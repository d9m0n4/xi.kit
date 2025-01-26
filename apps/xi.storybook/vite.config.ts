import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   // Указываем путь к исходным файлам пакета
    //   '@xipkg/button': '../../packages/pkg.button',
    // },
    preserveSymlinks: true, // Обязательно для работы с исходниками при символических ссылках
  },
  optimizeDeps: {
    exclude: ['@xipkg/button'], // Исключаем из оптимизации
  },
});
