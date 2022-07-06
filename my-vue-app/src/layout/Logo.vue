<!--
 * @Author: ykx
 * @Date: 2022-05-27 09:20:12
 * @LastEditTime: 2022-07-06 15:59:57
 * @LastEditors: your name
 * @Description: 左侧标志,不换行，防止文字高度变化
 * @FilePath: \my-vue-app\src\layout\Logo.vue
-->
<template>
  <div class="logo-wrapper flex h-16 items-center pl-6 overflow-hidden whitespace-nowrap">
    <img
      class="h-8 mr-2"
      src="~@/assets/logo.png"
      alt=""
    />
    <h2 v-show="!collapsed">{{ $config.appName }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
defineProps({
  collapsed: { type: Boolean },
});
</script>

<style scoped lang="less">
.logo-wrapper {
  h2 {
    color: @primary-color;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
