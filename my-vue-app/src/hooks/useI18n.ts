/*
 * @Author: ykx
 * @Date: 2022-05-30 09:13:22
 * @LastEditTime: 2022-10-19 16:49:06
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\hooks\useI18n.ts
 */
import { i18n } from "@/locales";
import type { Composer } from "vue-i18n";
type I18nGlobalTranslation = Composer["t"];
type I18nTranslationRestParameters = [string, any];
function getKey(namespace: string | undefined, key: string) {
  if (!namespace) {
    return key;
  }
  if (key.startsWith(namespace)) {
    return key;
  }
  return `${namespace}.${key}`;
}
export function useI18n(namespace?: string): { t: I18nGlobalTranslation } {
  const { t } = i18n.global;
  const tFn: I18nGlobalTranslation = (key: string, ...args: any[]) => {
    if (!key) {
      return "";
    }
    if (!key.includes(".") && !namespace) {
      return key;
    }
    return t(
      getKey(namespace, key),
      ...(args as I18nTranslationRestParameters)
    );
  };
  console.log(i18n.global);
  return Object.assign(i18n.global, { t: tFn });
}
export const t = (key: string) => key;
