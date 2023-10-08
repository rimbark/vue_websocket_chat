import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line sort-imports
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig ({
  plugins: [vue ()],
  base: "./"
})
