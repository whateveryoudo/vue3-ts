/*
 * @Author: ykx
 * @Date: 2022-04-25 17:05:38
 * @LastEditTime: 2022-04-25 18:04:27
 * @LastEditors: your name
 * @Description: 登录模块
 * @FilePath: \my-vue-app\src\store\modules\user.ts
 */
import { defineStore } from "pinia";
import Storage from "@/utils/Storage";
import { ACCESS_TOKEN_KEY } from "@/enums/cacheEnum";
import { login } from "@/api/login";
interface UserState {
  token: string;
  name: string;
}
export const useUserStore = () =>
  defineStore({
    id: "user",
    state: (): UserState => ({
      name: "admin",
      token: Storage.get(ACCESS_TOKEN_KEY),
    }),
    actions: {
      async login(params: API.LoginParams) {
        const { data } = await login(params);
        Storage.set(ACCESS_TOKEN_KEY, data.token);
        // this.afterLogin()
      },
    },
  });

export function useUserStoreWithOut() {
  return useUserStore();
}
