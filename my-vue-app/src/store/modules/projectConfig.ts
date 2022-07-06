/*
 * @Author: ykx
 * @Date: 2022-07-05 10:31:55
 * @LastEditTime: 2022-07-06 10:13:02
 * @LastEditors: your name
 * @Description: 项目通用配置
 * @FilePath: \my-vue-app\src\store\modules\projectConfig.ts
 */

import { defineStore } from "pinia";
export type navTheme = "light" | "dark" | "realDark";
export type ThemeState = {
  navTheme: navTheme;
  layout: 'sidemenu' | 'topmenu'
};
export const defaultConfig: ThemeState = {
  navTheme: "dark",
  layout: 'sidemenu'
};
export const useThemeStore = defineStore({
  id: "theme",
  state: () => {
    return defaultConfig;
  },
});
