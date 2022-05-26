/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-05-25 14:47:13
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import config from "./config";
import { setupStore } from "./store";
(() => import.meta.env.DEV && import("ant-design-vue/dist/antd.less"))();
import "virtual:windi.css";
const app = createApp(App);
// function setupPlugins() {
// }
function setUpApp() {
  setupStore(app);
  app.config.globalProperties.$config = config;
  // setupPlugins();
  app.use(router).mount("#app");
}
setUpApp();
