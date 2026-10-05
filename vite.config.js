import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite con soporte para React (Fast Refresh / JSX)
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
});
