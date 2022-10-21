/*
 * @Author: ykx
 * @Date: 2022-10-17 18:04:51
 * @LastEditTime: 2022-10-21 15:56:35
 * @LastEditors: your name
 * @Description: 数据类型判断
 * @FilePath: \my-vue-app\src\utils\is.ts
 */
export const is = (target: unknown, type: string) => {
  return Object.prototype.toString.call(target) === `[object ${type}]`;
};
// 谓词使用 https://www.jianshu.com/p/57df3cb66d3d
export const isString = (target: unknown): target is string => {
  return is(target, "String");
};
export const isFunction = (target: unknown): target is Function => {
  return typeof target === "function";
};

export const isObject = (target: unknown): target is Object => {
  return target !== null && is(target, "Object");
};
export const isBoolean = (target: unknown): target is Boolean => {
  return typeof target === "boolean";
};
