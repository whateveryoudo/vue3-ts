/*
 * @Author: ykx
 * @Date: 2022-04-29 11:03:46
 * @LastEditTime: 2022-04-29 15:10:19
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\asyncModules\system.ts
 */
export default {
  "views/system/permission/user": () => import("@/views/system/permission/user/index.vue"),
};
