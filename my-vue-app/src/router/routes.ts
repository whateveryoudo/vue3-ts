/*
 * @Author: ykx
 * @Date: 2021-05-11 15:38:21
 * @LastEditTime: 2021-05-11 17:39:13
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\routes.ts
 */
import type { AppRouteRecordRaw } from "./types";
import { PageEnums } from "/@/enums/pageEnums";
const Login = import("/@/views/login/index.vue");
// const Home = import("@/views/home/index.vue");

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: 'Root',
  redirect: PageEnums.BASE_HOME,
  meta: {
    title: "Root",
  },
};
export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: Login,
  meta: {
    title: "登录页",
  },
};
export const basicRoutes = [LoginRoute, RootRoute];
