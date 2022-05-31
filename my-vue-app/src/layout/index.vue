<!--
 * @Author: ykx
 * @Date: 2022-05-25 09:56:30
 * @LastEditTime: 2022-05-31 17:50:19
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\layout\index.vue
-->
<template>
  <a-layout class="main-layout">
    <a-layout-sider>
      <Logo/>
      <SideMenu/>
    </a-layout-sider>
    <a-layout>
      <PageHeader/>  
      <a-layout-content><router-view></router-view></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import SideMenu from './SideMenu/index.vue'
import PageHeader from './PageHeader/index.vue'
import { ref } from "@vue/reactivity";
</script>

<style scoped lang="less">
.main-layout{
   @apply h-screen;
}
</style>
