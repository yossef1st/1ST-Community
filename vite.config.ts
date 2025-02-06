import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/1ST-Community/', // أضف هذا السطر (يجب أن يكون مطابقًا لاسم المستودع)
});
