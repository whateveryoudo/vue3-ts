/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-04-18 16:07:42
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import config from './config'
(() => import.meta.env.DEV && import('ant-design-vue/dist/antd.less'))();
import 'windi.css'
const app = createApp(App);
// function setupPlugins() {
// }
app.config.globalProperties.$config = config
// setupPlugins();
app.use(router).mount("#app");
