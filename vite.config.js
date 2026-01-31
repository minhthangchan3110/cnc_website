import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  theme: {
    extend: {
      fontFamily: {
        be: ['"Be Vietnam Pro"', 'sans-serif'],
      },
    },
  },
})
