import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './', // 👈 This is essential for Electron
  plugins: [react()],
});
