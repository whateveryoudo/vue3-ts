<!--
 * @Author: ykx
 * @Date: 2022-05-27 09:25:02
 * @LastEditTime: 2022-07-11 11:05:50
 * @LastEditors: your name
 * @Description: 侧边栏，顶部面包屑
 * @FilePath: \my-vue-app\src\layout\SideMenu\index.vue
-->
<template>
  <a-menu
    v-model:openKeys="state.openKeys"
    v-model:selectedKeys="state.selectedKeys"
    :mode="props.sideMenuMode"
    :theme="props.theme"
    :inline-collapsed="props.collapsed"
    @click="menuItemClick"
  >
    <template v-for="item in showMenus">
      <MenuItem :menuInfo="item" />
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "@vue/reactivity";
import { useUserStore } from "@/store/modules/user";
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";
import { LOGIN_NAME } from "@/router/constant";
const props = defineProps({
  collapsed: {
    type: Boolean,
  },
  sideMenuMode: {
    type: String,
    default: "inline",
  },
  theme: {
    type: String,
    default: "dark",
  },
});
const currentRoute = useRoute();
const router = useRouter();
const state = reactive({
  openKeys: [] as string[],
  selectedKeys: [currentRoute.name] as string[],
});
const userStore = useUserStore();
console.log(userStore.menus);
const menus = userStore.menus;
const showMenus = computed(() => {
  return menus
    .filter((item) => !item?.meta?.hideInMenu)
    .sort((a, b) => {
      return a?.meta?.orderNum || 0 - b?.meta?.orderNum || 0;
    });
});
const getTargetMenuByActiveMenuName = (activeMenu: string) => {
  return router.getRoutes().find((r) => [r.name, r.path].includes(activeMenu));
};
// 获取打开的子菜单
const getOpenKeys = () => {
  const meta = currentRoute.meta;
  if (meta?.activeMenu) {
    const targetMenu = getTargetMenuByActiveMenuName(meta.activeMenu);
    return targetMenu?.meta?.namePath ?? [meta.activeMenu];
  }
  return (
    meta?.hideInMenu
      ? state?.openKeys || []
      : currentRoute.meta?.namePath ??
        currentRoute.matched.slice(1).map((item) => item.name)
  ) as string[];
};
// 菜单点击
const menuItemClick = ({ key }) => {
  if (key === currentRoute.name) {
    return;
  }
  if (/http(s):/.test(key)) {
    window.open(key);
  } else {
    router.push({ name: key });
  }
};
watch(
  () => currentRoute.fullPath,
  () => {
    if (currentRoute.name === LOGIN_NAME || props.collapsed) {
      return;
    }
    console.log(currentRoute.meta);
    state.openKeys = getOpenKeys();
    const meta = currentRoute.meta;
    if (meta?.activeMenu) {
      const targetMenu = getTargetMenuByActiveMenuName(meta.activeMenu);
      state.selectedKeys = [targetMenu?.name ?? meta?.activeMenu] as string[];
    } else {
      state.selectedKeys = [currentRoute.name] as string[];
    }
  },
  {
    immediate: true,
  }
);
</script>

<style scoped></style>
