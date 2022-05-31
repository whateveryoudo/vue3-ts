/*
 * @Author: ykx
 * @Date: 2022-04-29 11:03:46
 * @LastEditTime: 2022-05-27 10:08:47
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\asyncModules\system.ts
 */
export default {
  "views/system/permission/user": () => import("@/views/system/user/index.vue"),
};
