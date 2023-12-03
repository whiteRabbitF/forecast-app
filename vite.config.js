import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/forecast-app',
  plugins: [vue()],
  // resolve:{
  //   alias:{
  //     '@': fileURLToPath( new URL('./src', import.meta.url))
  //   }
  // }
})
