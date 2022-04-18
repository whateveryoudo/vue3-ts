/*
 * @Author: ykx
 * @Date: 2022-04-18 15:35:44
 * @LastEditTime: 2022-04-18 15:36:48
 * @LastEditors: your name
 * @Description: 全局配置
 * @FilePath: \my-vue-app\src\config\index.ts
 */
const { VITE_APP_TITLE } = import.meta.env; 
export default {
    appName: VITE_APP_TITLE
}
