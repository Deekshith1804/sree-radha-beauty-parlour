import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sree-radha-beauty-parlour/',
  server: {
    port: 3001,
    open: false,
  },
})
