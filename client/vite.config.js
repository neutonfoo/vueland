import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

const PRODUCTION_PROXY = process.env.PRODUCTION_PROXY ?? false

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  server: {
    port: '8080',
    strictPort: true,
    proxy: {
      '/api': {
        target: PRODUCTION_PROXY ? 'http://server:3000' : 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
