/*
 * @Author: ykx
 * @Date: 2022-04-27 10:12:42
 * @LastEditTime: 2022-09-28 17:42:42
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\api\account\model.d.ts
 */
declare namespace API {
  type Menu = {
    type: 0 | 1 | 2;
    id: number;
    parentId: number;
    router:string;
    isShow:boolean;
    keepalive: boolean;
    icon: string;
    name: string;
    viewPath: string;
    perms: string;
  };
  type PerMenu = {
    menus: Menu[];
    perms: string[];
  };
  type AdminUserInfo = {
    username: string;
    loginIp: string;
  };
}
