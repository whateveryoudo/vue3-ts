<!--
 * @Author: ykx
 * @Date: 2022-05-31 17:50:00
 * @LastEditTime: 2022-07-06 18:06:21
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\layout\PageHeader\index.vue
-->
<template>
  <a-layout-header
    :style="headerStyle"
    class="layout-header"
  >
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
              <a href="">{{route?.meta?.title}}</a>
              <template
                #overlay
                v-if="route?.children?.length"
              >
                <a-menu>
                  <a-menu-item
                    v-for="child in route.children"
                    :key="child.name"
                  >
                    <a :title="child.meta?.title">{{child.meta?.title}}</a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-breadcrumb-item>
          </template>
        </a-breadcrumb>
      </a-space>
    </a-space>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, computed, type CSSProperties } from "@vue/reactivity";

import {useThemeStore} from '@/store/modules/projectConfig'
import {useUserStore} from '@/store/modules/useUserStore'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useRoute } from "vue-router";
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
const menus = computed (() => {
  if (route.meta?.namepath) {
    let children = userStore.menus;
    const paths = route.meta?.namepath?.map(item => {
      const target = children.find(n => n.name === item.name);
      children = target.children || [];
      return target;
    })
    return [
      {  name: '__index', meta: {title: '首页'},children: userStore.menus,},
      ...paths
    ]
  }
  return route.matched;
})
</script>

<style scoped lang="less">
.layout-header {
  padding: 0 20px;
}
</style>
