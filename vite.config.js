import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
// import path from 'path'

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), //設置別名
    },
  },
  base: './',
  // resolve: {
  //   alias: [
  //     {
  //       find: 'vue-dapp',
  //       replacement: resolve(__dirname, './src/index.ts'),
  //     },
  //   ],
  // },
})
