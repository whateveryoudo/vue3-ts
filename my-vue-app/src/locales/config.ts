/*
 * @Author: ykx
 * @Date: 2022-05-30 10:15:47
 * @LastEditTime: 2022-05-30 14:32:03
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\locales\config.ts
 */
export const localeMap = {
    zh_CN: 'zh_CN',
    en_US: 'en_US',
} as const;
export type LocaleType = keyof typeof localeMap