<!--
 * @Author: ykx
 * @Date: 2022-05-25 14:38:26
 * @LastEditTime: 2022-10-08 16:16:35
 * @LastEditors: your name
 * @Description: 首页-欢迎页
 * @FilePath: \my-vue-app\src\views\dashboard\welcome\index.vue
-->
<template>
  <div class="page-wrapper">
    <a-descriptions title="系统信息" bordered>
      <a-descriptions-item key="IP" label="IP">
        {{ loginIp }}
      </a-descriptions-item>
      <a-descriptions-item
        v-for="(value, key) in browserInfo"
        :key="key"
        :label="key"
      >
        {{ value }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "@vue/reactivity";
import { useUserStore } from "@/store/modules/user";
import BrowserType from "@/utils/browser-type";
const loginIp = computed(() => {
  return useUserStore().userInfo?.loginIp;
});
const browserInfo = BrowserType("zh-cn");
</script>

<style scoped lang="less">
.page-wrapper {
  background-color: #fff;
}
</style>
