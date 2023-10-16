import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Disable WebSocket for HMR
    hmr: {
      protocol: 'ws' // Set this to null or an empty string to disable WebSocket
    }
  }
})
