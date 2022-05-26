<!--
 * @Author: ykx
 * @Date: 2022-05-25 09:56:30
 * @LastEditTime: 2022-05-26 18:13:41
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\layout\index.vue
-->
<template>
  <a-layout class="main-layout">
    <a-layout-sider>Sider</a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content><router-view></router-view></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
</script>

<style scoped lang="less">
.main-layout{
   @apply h-screen;
}
</style>
