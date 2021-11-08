/*
 * @Author: ykx
 * @Date: 2021-05-11 15:19:59
 * @LastEditTime: 2021-05-11 17:42:21
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\index.ts
 */
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import { basicRoutes } from './routes'

export default createRouter({
  history: createWebHashHistory(),
  routes: <RouteRecordRaw[]>(<unknown>basicRoutes),
});
