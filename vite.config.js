import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root base for hosting on platforms like Vercel.
  // The previous value '/My-Portfolio/' is useful for GitHub Pages but
  // breaks asset paths when deployed to a root Vercel domain.
  base: '/',
});
