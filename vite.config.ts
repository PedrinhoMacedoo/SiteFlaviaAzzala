import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  // Use '/' for Vercel, '/SiteFlaviaAzzala/' for GitHub Pages
  base: process.env.DEPLOY_TARGET === 'ghpages' ? '/SiteFlaviaAzzala/' : '/',
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    assetsInlineLimit: 4096,
  },
})
