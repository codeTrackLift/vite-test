import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  base: process.env.NODE_ENV === 'production' ? '/vite-test/' : '/',
})
