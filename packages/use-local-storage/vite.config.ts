import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@spark/use-local-storage',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
