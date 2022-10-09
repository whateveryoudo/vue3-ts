/*
 * @Author: ykx
 * @Date: 2022-10-08 16:21:01
 * @LastEditTime: 2022-10-08 16:27:21
 * @LastEditors: your name
 * @Description: 示例
 * @FilePath: \my-vue-app\src\router\staticModules\demos.ts
 */
import { type RouteRecordRaw } from "vue-router";
import RouterView from "@/layout/routerView/index.vue";
import { t } from "@/hooks/userI18n";
const moduleName = "demos";
const routes: RouteRecordRaw[] = [
  {
    path: "/demos",
    name: moduleName,
    redirect: { name: `${moduleName}-form` },
    component: RouterView,
    meta: {
      title: t("routes.demo.demo"),
      icon: "icon-zhuomian",
    },
    children: [
      {
        path: "form",
        name: `${moduleName}-form`,
        redirect: { name: `${moduleName}-form-basic` },
        component: RouterView,
        meta: {
          title: t("routes.demo.form.demo"),
          icon: "icon-zhuomian",
        },
        children: [
          {
            path: "basic",
            name: `${moduleName}-form-basic`,
            component: () => import("@/views/demos/form/basic-form/index.vue"),
            meta: {
              title: t("routes.demo.form.basic"),
              icon: "icon-zhuomian",
            },
          },
        ],
      },
    ],
  },
];
export default routes;
