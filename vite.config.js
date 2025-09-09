import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    base: mode === 'production' ? '/vue-request-app/' : '/',
  }
});
