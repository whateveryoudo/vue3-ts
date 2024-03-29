/*
 * @Author: ykx
 * @Date: 2021-05-11 15:19:59
 * @LastEditTime: 2022-07-11 11:18:23
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\index.ts
 */
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import { whiteNameList } from "./constant";
import outsideLayout from "./outsideLayout";
import type { App } from "vue";
import { createRouterGuards } from "./router-guards";
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    redirect: "/dashboard/welcome",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: "首页",
    },
    children: [],
  },
  ...outsideLayout,
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export async function setupRouter(app: App) {
  createRouterGuards(router, whiteNameList);
  app.use(router);
  await router.isReady();
}
export default router;
