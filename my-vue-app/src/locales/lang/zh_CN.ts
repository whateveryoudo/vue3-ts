/*
 * @Author: ykx
 * @Date: 2022-05-30 10:32:30
 * @LastEditTime: 2022-05-30 15:41:39
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\locales\lang\zh_CN.ts
 */
import antdLocale from "ant-design-vue/es/locale/zh_CN";
import { genMessage } from "../helper";
const modulesFiles = import.meta.globEager("./zh-CN/**/*.ts");
export default {
  message: {
    ...genMessage(modulesFiles, "zh-CN"),
    antdLocale,
  },
};
