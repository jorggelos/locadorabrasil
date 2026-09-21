import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Relativo: funciona em jorggelos.github.io/locadorabrasil/ e no domínio raiz.
  base: './',
  plugins: [react(), tailwindcss()],
})
