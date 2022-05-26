/*
 * @Author: ykx
 * @Date: 2022-05-25 10:09:14
 * @LastEditTime: 2022-05-25 14:42:05
 * @LastEditors: your name
 * @Description: 工作台
 * @FilePath: \my-vue-app\src\router\staticModules\dashborad.ts
 */
import { type RouteRecordRaw} from 'vue-router'
import RouterView from '@/layout/routerView/index.vue'
const moduleName = 'dashboard';
const routes: RouteRecordRaw[] = [
    {
        path: '/dashboard',
        name: moduleName,
        redirect: '/dashboard/welcome',
        component: RouterView,
        children: [
            {
                path: 'welcome',
                name: `${moduleName}-welcome`,
                component: () => import("@/views/dashboard/welcome/index.vue")
            }
        ]
    }
]
export default routes