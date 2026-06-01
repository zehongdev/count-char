import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  legacy({
    targets: ["ie>=11"]
  })
  ],
  base: './',
  build: {
    target: ['es2015', 'chrome63']
  }
})
