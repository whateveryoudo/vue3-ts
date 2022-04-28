/*
 * @Author: ykx
 * @Date: 2022-04-25 17:05:38
 * @LastEditTime: 2022-04-28 17:29:01
 * @LastEditors: your name
 * @Description: 登录模块
 * @FilePath: \my-vue-app\src\store\modules\user.ts
 */
import { defineStore } from "pinia";
import Storage from "@/utils/Storage";
import { ACCESS_TOKEN_KEY } from "@/enums/cacheEnum";
import { login } from "@/api/login";
import { getUserInfo, getMenus } from "@/api/account";
import { generatorDynamicRouter } from '@/router/generator-router'
interface UserState {
  token: string;
  name: string;
  // Partial:所有属性可选
  userInfo: Partial<API.AdminUserInfo>
}
export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    name: "admin",
    token: Storage.get(ACCESS_TOKEN_KEY),
    userInfo: {}
  }),
  actions: {
    async login(params: API.LoginParams) {
      const { data } = await login(params);
      Storage.set(ACCESS_TOKEN_KEY, data.token);
      this.token = data.token;
      this.afterLogin();
    },
    async afterLogin() {
      const [userInfo, {perms, menus}] = await Promise.all([getUserInfo(), getMenus()]);
      console.log(userInfo);
      this.userInfo = userInfo;
      // 路由生成
      const generatorResult = generatorDynamicRouter(menus);
      console.log(generatorResult);
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore();
}
