import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bac0cc6a-9c79-4862-a655-5bd9e4efe924-00-kgyaqyhp4r3k.riker.repl.co',
        changeOrigin: true,
      },
    }
  },
})
