import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('three') || id.includes('react-three')) {
              return 'vendor-animations';
            }
            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }
            if (id.includes('supabase')) {
              return 'vendor-supabase';
            }
            return 'vendor'; // all other packages
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true
  }
})
