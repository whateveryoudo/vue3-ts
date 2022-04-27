/*
 * @Author: ykx
 * @Date: 2022-04-27 10:09:11
 * @LastEditTime: 2022-04-27 10:48:38
 * @LastEditors: your name
 * @Description: 账号相关
 * @FilePath: \my-vue-app\src\api\account\index.ts
 */
import { request } from "@/utils/request";
export function getUserInfo() {
  return request<API.AdminUserInfo>({
    url: "account/info",
    method: "get",
  });
}

export function getMenus() {
  return request<API.PerMenu>({
    url: "account/permmenu",
    method: "get",
  });
}
