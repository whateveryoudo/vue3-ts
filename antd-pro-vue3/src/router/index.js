/*
 * @Author: ykx
 * @Date: 2021-04-02 09:24:56
 * @LastEditTime: 2021-05-11 15:03:38
 * @LastEditors: your name
 * @Description: 路由配置
 * @FilePath: \antd-pro-vue3\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";
const Home = () => import("@/views/home.vue");
const routes = [
  {
    path: "/home",
    component: Home,
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
