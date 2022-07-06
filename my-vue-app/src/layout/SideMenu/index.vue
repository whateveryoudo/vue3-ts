<!--
 * @Author: ykx
 * @Date: 2022-05-27 09:25:02
 * @LastEditTime: 2022-07-06 15:40:50
 * @LastEditors: your name
 * @Description: 侧边栏，顶部面包屑
 * @FilePath: \my-vue-app\src\layout\SideMenu\index.vue
-->
<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :mode="sideMenuMode"
    :theme="theme"
    :inline-collapsed="collapsed"
  >
    <template v-for="item in showMenus">
      <MenuItem :menuInfo="item" />
    </template>
  </a-menu>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "@vue/reactivity";
import { useUserStore } from "@/store/modules/user";
import MenuItem from "./MenuItem.vue";
const state = reactive({
  openKeys: [],
  selectedKeys: [],
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
defineProps({
  collapsed: {
    type: Boolean
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
</script>

<style scoped></style>
