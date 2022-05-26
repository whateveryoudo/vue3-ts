/*
 * @Author: ykx
 * @Date: 2022-05-25 18:12:52
 * @LastEditTime: 2022-05-26 10:58:30
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\router\constant.ts
 */
export const LOGIN_NAME = 'Login';
export const whiteNameList = [LOGIN_NAME, 'error', 'error-404'] as const;
export type WhiteNameList = typeof whiteNameList;