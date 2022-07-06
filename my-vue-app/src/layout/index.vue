<!--
 * @Author: ykx
 * @Date: 2022-05-25 09:56:30
 * @LastEditTime: 2022-07-06 15:49:49
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\layout\index.vue
-->
<template>
  <a-layout class="main-layout">
    <a-layout-sider
      collapsible
      v-model:collapsed="collapsed"
      v-if="themeStore.layout === 'sidemenu'"
      :trigger="null"
      :width="sideWidth"
      :theme="theme"
    >
      <Logo :collapsed="collapsed"/>
      <SideMenu :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <PageHeader v-model:collapsed="collapsed" />
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import SideMenu from "./SideMenu/index.vue";
import PageHeader from "./PageHeader/index.vue";
import { useThemeStore } from "@/store/modules/projectConfig";
import { ref, computed } from "@vue/reactivity";
const collapsed = ref<boolean>(false);
const themeStore = useThemeStore();
const sideWidth = computed(() => collapsed.value ? 80 : 220);
const theme = computed(() => themeStore.navTheme === 'light' ? 'light' : 'dark');
</script>

<style scoped lang="less">
.main-layout {
  @apply h-screen;
}
</style>
