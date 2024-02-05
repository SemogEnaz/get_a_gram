import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Override the default output configuration
        entryFileNames: `main.js`, // Specifies the entry chunk file name pattern
        chunkFileNames: `assets/[name].js`, // Specifies non-entry chunk file names pattern
        assetFileNames: `assets/[name].[ext]` // Specifies other asset file names pattern
      }
    }
  }
})
