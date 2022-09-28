/*
 * @Author: ykx
 * @Date: 2022-05-30 09:19:41
 * @LastEditTime: 2022-07-13 16:13:47
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\locales\index.ts
 */
import type { App } from "vue";
import { createI18n } from "vue-i18n/index";
import { localeMap } from "./config";
import { useLocaleStoreWithOut } from "@/store/modules/locale";
async function createI18nOptions() {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};
  return {
    locale,
    fallbackLocale: localeMap.zh_CN,
    globalInjection: true,
    messages: {
      [locale]: message,
    },
  };
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  const i18n = createI18n(options);
  app.use(i18n);
}
