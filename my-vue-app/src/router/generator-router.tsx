/*
 * @Author: ykx
 * @Date: 2022-04-28 17:27:43
 * @LastEditTime: 2022-04-29 18:06:39
 * @LastEditors: your name
 * @Description: 路由数据处理
 * @FilePath: \my-vue-app\src\router\generator-router.tsx
 */
import { type RouteRecordRaw } from "vue-router";
import { isUrl } from "@/utils";
import RouterView from "@/layout/routerView.vue";
import { constRouterComponent } from "./asyncModules";
export function filterAsyncRoute(
  routes: API.Menu[],
  parentRoute: API.Menu | null = null,
  lastMenuNamePath: string[] = []
): RouteRecordRaw[] {
  return routes
    .filter(
      (item) =>
        item.type !== 2 && item.isShow && item.parentId === parentRoute?.id
    )
    .map((item) => {
      const { router, type, viewPath, keepalive, name, icon } = item;
      let fullPath = "";
      if (isUrl(router)) {
        fullPath = router;
      } else {
        fullPath = router.startsWith("/") ? router : "/" + router;
      }
      let realRoutePath = router;
      if (parentRoute) {
        if (fullPath.startsWith(parentRoute?.router)) {
          realRoutePath = realRoutePath.split(parentRoute?.router)[1];
        }
      }
      realRoutePath = realRoutePath.startsWith("/")
        ? realRoutePath.split("/")[1]
        : realRoutePath;
      const route: Partial<RouteRecordRaw> = {
        path: realRoutePath,
        name: fullPath,
        meta: {
          title: name,
          keepAlive: keepalive,
          icon,
          type,
          namePath: lastMenuNamePath.concat(fullPath),
        },
      };
      if (type === 0) {
        // 目录
        const children = filterAsyncRoute(
          routes,
          item,
          lastMenuNamePath.concat(fullPath)
        );
        if (children?.length) {
          route.component = RouterView;
          route.children = children;
          route.redirect = { name: children[0]?.name }; // 取第一个作为重定向
        } else {
          console.log("目录不是真实界面，请添加子界面或者更改其类型");
        }
        return route;
      } else if (type === 1) {
        //界面(对象获取)
        const Component = constRouterComponent[viewPath];
        route.component = Component;
        // 添加perms字段
        const perms = routes
          .filter((n) => n.parentId === item.id)
          .flatMap((n) => n.perms?.split(","));
      }
      return undefined;
    })
    .filter((item): item is RouteRecordRaw => !!item);
}

export function generatorDynamicRouter(asyncMenus: API.Menu[]) {
  try {
    const routerList = filterAsyncRoute(asyncMenus);
  } catch (error) {
    console.log("路由处理出错", error);
    return {
      menus: [],
      routes: [],
    };
  }
}
