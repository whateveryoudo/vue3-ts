/*
 * @Author: ykx
 * @Date: 2022-05-25 10:09:14
 * @LastEditTime: 2022-05-31 17:39:02
 * @LastEditors: your name
 * @Description: 工作台
 * @FilePath: \my-vue-app\src\router\staticModules\dashborad.ts
 */
import { type RouteRecordRaw } from "vue-router";
import RouterView from "@/layout/routerView/index.vue";

import { t } from "@/hooks/userI18n";
const moduleName = "dashboard";
const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    name: moduleName,
    redirect: "/dashboard/welcome",
    component: RouterView,
    meta:{
      title: t("routes.dashboard.dashboard"),
      icon: 'icon-yibiaopan'
    },
    children: [
      {
        path: "welcome",
        name: `${moduleName}-welcome`,

        component: () => import("@/views/dashboard/welcome/index.vue"),
        meta: {
          title: t("routes.dashboard.workbench"),
          icon: 'icon-shouye',
        },
      },
    ],
  },
];
export default routes;
