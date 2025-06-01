import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
///my-portFolio
// https://vite.dev/config/
export default defineConfig({
  base: "/my-portFolio",
  plugins: [react()]
})
