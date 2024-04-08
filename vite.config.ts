import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
      },
      plugins: [
        copy({
          targets: [
            {
              src: 'manifest.json', // Corrected path
              dest: 'dist'
            },
            {
              src: 'background.js', // Corrected path
              dest: 'dist'
            }
          ],
          hook: 'writeBundle',
          verbose: true,
        })
      ]
    }
  }
})