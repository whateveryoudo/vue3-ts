/*
 * @Author: ykx
 * @Date: 2022-05-30 10:13:05
 * @LastEditTime: 2022-05-30 14:44:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\store\modules\locale.ts
 */
import { defineStore } from "pinia";
import type { LocaleType } from "@/locales/config";
import Storage from "@/utils/Storage";
import { store } from '../index'
import { LOCALE_KEY } from "@/enums/cacheEnum";
interface LocaleState {
  locale: LocaleType;
}
export const useLocaleStore = defineStore({
  id: "locale",
  state: (): LocaleState => ({
    locale: Storage.get(LOCALE_KEY, "zh_CN"),
  }),
  getters: {
    getLocale(): LocaleType {
      return this.locale ?? "zh_CN";
    },
  },
  actions: {
    setLocale(locale: LocaleType) {
      Storage.set(LOCALE_KEY, locale);
      this.locale = locale;
    },
  },
});
export function useLocaleStoreWithOut () {
  return useLocaleStore(store);
}