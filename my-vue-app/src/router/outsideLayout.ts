/*
 * @Author: ykx
 * @Date: 2021-05-11 15:38:21
 * @LastEditTime: 2022-05-25 14:52:13
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\outsideLayout.ts
 */
import { type RouteRecordRaw } from "vue-router";
// const Home = import("@/views/home/index.vue");

export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
  meta: {
    title: "登录页",
  },
};
export default [LoginRoute];
