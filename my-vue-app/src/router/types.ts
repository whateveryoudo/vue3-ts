/*
 * @Author: ykx
 * @Date: 2021-05-11 15:40:11
 * @LastEditTime: 2021-05-12 11:05:49
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\router\types.ts
 */
import type { RouteRecordRaw } from "vue-router";
import { defineComponent } from "vue";
export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);
export interface RouteMeta {}
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable; // ??如何理解Recordable
  fullPath?: string;
}
