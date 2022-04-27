/*
 * @Author: ykx
 * @Date: 2022-04-27 10:12:42
 * @LastEditTime: 2022-04-27 10:47:58
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\api\account\model.d.ts
 */
declare namespace API {
  type Menu = {
    type: 0 | 1 | 2;
    id: number;
    parentId: number;
  };
  type PerMenu = {
    menus: Menu[];
    perms: string[];
  };
  type AdminUserInfo = {
    username: string;
  };
}
