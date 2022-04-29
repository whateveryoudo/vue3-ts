/*
 * @Author: ykx
 * @Date: 2022-04-29 11:07:24
 * @LastEditTime: 2022-04-29 17:43:21
 * @LastEditors: your name
 * @Description: vite实现
 * @FilePath: \my-vue-app\src\router\asyncModules\index.ts
 */
import { type RouteRecordRaw } from "vue-router";
export const constRouterComponent: Record<string, RouteRecordRaw["component"]> = {};
const modulesfiles = import.meta.globEager("./*.ts");

modulesfiles.keys.forEach((key: string) => {
  if (key.startsWith("./index")) {
    return;
  }
  const val = modulesfiles[key].default;
  Object.keys(val).forEach((comKey: string) => {
    constRouterComponent[comKey] = val[comKey];
  });
});
