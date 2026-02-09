import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 5173,
    open: true, // abre o navegador automaticamente ao rodar npm run dev
    host: true, // permite acessar pelo IP na rede (ex: celular)
  },
})

