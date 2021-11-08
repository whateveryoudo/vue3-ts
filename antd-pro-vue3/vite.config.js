/*
 * @Author: ykx
 * @Date: 2021-04-02 16:45:21
 * @LastEditTime: 2021-04-02 17:30:07
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \antd-pro-vue3\vite.config.js
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    plugins: [vue()]
  })