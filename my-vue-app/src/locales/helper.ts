/*
 * @Author: ykx
 * @Date: 2022-05-30 10:36:41
 * @LastEditTime: 2022-05-30 15:59:34
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\locales\helper.ts
 */
import { set } from "lodash-es";
export function genMessage(
  langs: Record<string, Record<string, any>>,
  prefix = "lang"
) {
  const obj: Recordable = {};
  console.log(langs);
  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default;
    let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
    const lastIndex = fileName.lastIndexOf(".");
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split("/");
    const moduleName = keyList.shift();
    const objKey = keyList.join(".");
    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });

  return obj;
}
