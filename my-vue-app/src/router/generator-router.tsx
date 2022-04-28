/*
 * @Author: ykx
 * @Date: 2022-04-28 17:27:43
 * @LastEditTime: 2022-04-28 17:59:53
 * @LastEditors: your name
 * @Description: 路由数据处理
 * @FilePath: \my-vue-app\src\router\generator-router.tsx
 */

export function generatorDynamicRouter (asyncMenus: API.Menu[]) {
    try {
        const routerList = filterAsyncRoute(asyncMenus);
    } catch (error) {
        console.log('路由处理出错',error);
        return {
            menus: [],
            routes: []
        }
    }
}