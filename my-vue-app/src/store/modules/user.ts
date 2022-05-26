/*
 * @Author: ykx
 * @Date: 2022-04-25 17:05:38
 * @LastEditTime: 2022-05-26 11:11:01
 * @LastEditors: your name
 * @Description: 登录模块
 * @FilePath: \my-vue-app\src\store\modules\user.ts
 */
import { defineStore } from "pinia";
import Storage from "@/utils/Storage";
import { type RouteRecordRaw } from "vue-router";
import { ACCESS_TOKEN_KEY } from "@/enums/cacheEnum";
import { login } from "@/api/login";
import { getUserInfo, getMenus } from "@/api/account";
import { generatorDynamicRouter } from "@/router/generator-router";
interface UserState {
  token: string;
  name: string;
  menus: RouteRecordRaw[];
  // Partial:所有属性可选
  userInfo: Partial<API.AdminUserInfo>;
}
export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    name: "admin",
    token: Storage.get(ACCESS_TOKEN_KEY),
    userInfo: {},
    menus: [],
  }),
  getters: {},
  actions: {
    async login(params: API.LoginParams) {
      try {
        const { data } = await login(params);
        Storage.set(ACCESS_TOKEN_KEY, data.token);
        this.token = data.token;
        return this.afterLogin();
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLogin() {
      try {
        const [userInfo, { perms, menus }] = await Promise.all([
          getUserInfo(),
          getMenus(),
        ]);
        console.log(userInfo);
        this.userInfo = userInfo;
        // 路由生成
        const generatorResult = generatorDynamicRouter(menus);
        console.log(generatorResult);
        this.menus = generatorResult.menus.filter(
          (item) => !item.meta?.hideInMenu
        );
        return {
          menus,
          perms,
          userInfo,
        };
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore();
}
