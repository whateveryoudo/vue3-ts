<!--
 * @Author: ykx
 * @Date: 2022-05-27 09:53:24
 * @LastEditTime: 2022-07-06 11:23:02
 * @LastEditors: your name
 * @Description: 单个组件渲染
 * @FilePath: \my-vue-app\src\layout\SideMenu\MenuItem.vue
-->
<template>
  <!-- 目录渲染 -->
  <template v-if="hasChild">
    <a-sub-menu :key="menuInfo.name">
      <template #title>
        <IconFont :type="menuInfo?.meta?.icon"/>
        <TitleI18n :title="menuInfo?.meta?.title" />
      </template>
      <template v-for="item in menuChildren" :key="item.name || item.fullPath">
        <SideMenuItem :menuInfo="item" />
      </template>
    </a-sub-menu>
  </template>
  <!-- 菜单渲染 -->
  <template v-else>
    <a-menu-item :key="menuInfo?.name">
      <IconFont :type="menuInfo?.meta?.icon"/>
      <TitleI18n :title="menuInfo?.meta?.title" />
    </a-menu-item>
  </template>
</template>

<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";
import { type RouteRecordRaw } from "vue-router";
import { type PropType } from "vue";
import { TitleI18n } from "@/components/basic/title-i18n";
import { IconFont } from '@/components/basic/icon-font'
defineOptions({
  name: "SideMenuItem",
});
const props = defineProps({
  menuInfo: {
    type: Object as PropType<RouteRecordRaw>,
  },
});
const menuChildren = computed(() => {
  return (props.menuInfo?.children || [])
    .filter((item) => !item?.meta?.hideInMenu)
    .sort((a, b) => {
      return a?.meta?.orderNum || 0 - b?.meta?.orderNum || 0;
    });
});
const hasChild = computed(() => {
  return (
    props.menuInfo?.meta?.type === 0 ||
    (!Object.is(props.menuInfo?.meta?.hideChildrenInMenu, true) &&
      props.menuInfo?.children?.length)
  );
});
</script>

<style scoped></style>
