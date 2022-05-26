/*
 * @Author: ykx
 * @Date: 2022-05-26 11:18:19
 * @LastEditTime: 2022-05-26 11:23:06
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\staticModules\error.ts
 */
import { type RouteRecordRaw } from "vue-router";
export const notFound: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "notFound",
  meta: {
    title: "NotFound",
    hideInMenu: true,
    hideInTabs: true,
  },
  component: () => import("@/views/error/404.vue"),
};
