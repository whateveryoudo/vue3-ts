/*
 * @Author: ykx
 * @Date: 2021-05-11 15:57:00
 * @LastEditTime: 2022-10-17 15:54:57
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\types\global.d.ts
 */
import type { PropType as VuePropType } from "vue";

declare global {
  // vue

  type PropType<T> = VuePropType<T>;
  type Recordable<T = any> = Record<string, T>;
}
