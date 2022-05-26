/*
 * @Author: ykx
 * @Date: 2022-05-25 18:14:18
 * @LastEditTime: 2022-05-26 11:07:02
 * @LastEditors: your name
 * @Description: 路由守卫
 * @FilePath: \my-vue-app\src\router\router-guards.ts
 */
import { type Router } from "vue-router";
import { type WhiteNameList, LOGIN_NAME } from "./constant";
import NProgress from "nprogress";
import Storage from "@/utils/Storage";
import { ACCESS_TOKEN_KEY } from "@/enums/cacheEnum";
import { useUserStore } from "@/store/modules/user";
NProgress.configure({ showSpinner: false });
const defaultRoutePath = "/dashboard/welcome";
export const createRouterGuards = (
  router: Router,
  whiteNameList: WhiteNameList
) => {
  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();
    NProgress.start();
    const token = Storage.get(ACCESS_TOKEN_KEY);
    if (token) {
      if (to.name === LOGIN_NAME) {
        next({ path: defaultRoutePath });
      } else {
        if (userStore.menus.length === 0) {
          await userStore.afterLogin();
          const hasRoute = router.hasRoute(to.name!);
          if (!hasRoute) {
            next({
              name: LOGIN_NAME,
              query: { redirect: to.fullPath },
              replace: true,
            });
          } else if (whiteNameList.some((n) => n === to.name) || hasRoute) {
            // 在免登录名单，直接进入
            next();
          }
        } else {
          const hasRoute = router.hasRoute(to.name!);
          if (!hasRoute) {
            next({
              name: LOGIN_NAME,
              query: { redirect: to.fullPath },
              replace: true,
            });
          } else if (whiteNameList.some((n) => n === to.name) || hasRoute) {
            // 在免登录名单，直接进入
            next();
          }
        }
      }
    } else {
      if (whiteNameList.some((n) => n === to.name)) {
        next();
      } else {
        next({
          name: LOGIN_NAME,
          query: { redirect: to.fullPath },
          replace: true,
        });
      }
    }
  });
  router.afterEach(() => {
    NProgress.done(); // finish progress bar
  })
};
