import vue from '@vitejs/plugin-vue'
// import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  // resolve: {
  //   alias: [
  //     {
  //       find: 'vue-dapp',
  //       replacement: resolve(__dirname, './src/index.ts'),
  //     },
  //   ],
  // },
})
