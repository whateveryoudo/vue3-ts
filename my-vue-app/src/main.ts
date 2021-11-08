/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2021-05-11 15:24:51
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
