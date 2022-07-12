/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-07-11 11:19:46
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from "vue";
import { setupRouter } from "./router";
import App from "./App.vue";
import config from "./config";
import { setupI18n } from "@/locales";
import { setupStore } from "./store";
(() => import.meta.env.DEV && import("ant-design-vue/dist/antd.less"))();
import "virtual:windi.css";
const app = createApp(App);
// function setupPlugins() {
// }
async function setUpApp() {
  setupStore(app);
  app.config.globalProperties.$config = config;
  // setupPlugins();
  await setupI18n(app);

  // 挂载路由
  await setupRouter(app);
  app.mount("#app");
}
setUpApp();
