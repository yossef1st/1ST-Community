import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/1ST-Community/", // ضع اسم المستودع هنا
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
