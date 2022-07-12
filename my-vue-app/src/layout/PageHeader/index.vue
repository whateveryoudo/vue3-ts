<!--
 * @Author: ykx
 * @Date: 2022-05-31 17:50:00
 * @LastEditTime: 2022-07-12 17:20:10
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\layout\PageHeader\index.vue
-->
<template>
  <a-layout-header
    :style="headerStyle"
    class="layout-header"
  >
  <!-- 左侧展开收起 & 面包屑 -->
    <a-space :size="20">
      <a-space :size="20">
        <span
          class="menu-fold"
          @click="() => emit('update:collapsed', !collapsed)"
        >
          <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
        </span>
        <a-breadcrumb>
          <template v-for="(route, index) in menus">
            <a-breadcrumb-item>
              <title-i18n :title="route?.meta?.title" />
              <template
                #overlay
                v-if="route?.children?.length"
              >
                <a-menu :selected-keys="getSelectKeys(index)">
                  <a-menu-item
                    v-for="child in route.children"
                    :key="child.name"
                    @click="clickMenuItem(child)"
                  >
                    <title-i18n :title="child?.meta?.title" />
                  </a-menu-item>
                </a-menu>
              </template>
            </a-breadcrumb-item>
          </template>
        </a-breadcrumb>
      </a-space>
    </a-space>
    <!-- 右侧操作 -->
    <a-space :size="20">
      <g-search></g-search>
    </a-space>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from "@vue/reactivity";

import {useThemeStore} from '@/store/modules/projectConfig'
import {useUserStore} from '@/store/modules/user'
import { TitleI18n } from '@/components/basic/title-i18n'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter, RouteRecordRaw } from "vue-router";
import { GSearch } from './components'
defineProps({
  collapsed: {type: Boolean},
})
const emit = defineEmits(['update:collapsed']);
const themeStore = useThemeStore();
const userStore = useUserStore();
const headerStyle = computed<CSSProperties>(() => {
  const { navTheme, layout } = themeStore;
  const isDark = navTheme === 'dark' && layout === 'topmenu';
  return {
    backgroundColor: (navTheme === 'realDark' || isDark)  ? '' : 'rgba(255, 255, 255, 0.85)',
    color:  isDark ? 'rgba(255, 255, 255, 0.85)' : ''
  }
})
const route = useRoute();
const router = useRouter();
const menus = computed (() => {
  if (route.meta?.namePath) {
    let children = userStore.menus;
    const paths = route.meta?.namePath?.map(item => {
      const target = children.find(n => n.name === item);
      children = target?.children || [];
      return target;
    })
    return [
      {  name: '__index', meta: {title: '首页'},children: userStore.menus,},
      ...paths
    ]
  }
  return route.matched;
})
// 获取下一级的名称作为选中
const getSelectKeys = (index:number) => {
  return [menus.value[index + 1]?.name] as string[];
}
  const findLastChild = (route?: RouteRecordRaw) => {
    if (typeof route?.redirect === 'object') {
      const redirectValues = Object.values(route.redirect);
      if (route?.children?.length) {
        const target = route.children.find((n) =>
          redirectValues.some((m) => [n.name, n.path, n.meta?.fullPath].some((v) => v === m)),
        );
        return findLastChild(target);
      }
      return redirectValues.find((n) => typeof n === 'string');
    } else if (typeof route?.redirect === 'string') {
      if (route?.children?.length) {
        const target = route.children.find((n) =>
          [n.name, n.path, n.meta?.fullPath].some((m) => m === route?.redirect),
        );
        return findLastChild(target);
      }
      return route?.redirect;
    }
    return route;
  };
// 下拉菜单点击(这里部分含有子菜单，需要找到最后一层)
const clickMenuItem = (menuItem: RouteRecordRaw ) => {
  console.log(menuItem);
  const lastChild = findLastChild(menuItem);
  if (lastChild?.name === route.name) { return }
  if (/http(s)?:/.test(lastChild?.name)) {
    window.open(lastChild?.name);
  } else {
    router.push({name: lastChild.name})
  }
}
</script>

<style scoped lang="less">
.layout-header {
  padding: 0 20px;
  @apply  flex justify-between;
}
</style>
