/*
 * @Author: ykx
 * @Date: 2022-04-25 16:55:10
 * @LastEditTime: 2022-04-25 16:59:14
 * @LastEditors: your name
 * @Description: 状态管理
 * @FilePath: \my-vue-app\src\store\index.ts
 */
import { createPinia } from "pinia";
import type { App } from "vue";

const store = createPinia();
export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
