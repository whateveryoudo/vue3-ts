/*
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-05-30 14:35:29
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\main.ts
 */
import { createApp } from "vue";
import router from "./router";
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
  app.use(router).mount("#app");
}
setUpApp();
