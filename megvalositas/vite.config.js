import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite + React — gyors HMR, statikus asset kiszolgálás a public/ mappából.
export default defineConfig({
  plugins: [react()],
  server: { open: true },
  build: {
    rollupOptions: {
      output: {
        // React + Router külön, ritkán változó vendor-chunkba (jobb cache ismételt látogatáskor)
        manualChunks: { react: ['react', 'react-dom', 'react-router-dom'] },
      },
    },
  },
})
