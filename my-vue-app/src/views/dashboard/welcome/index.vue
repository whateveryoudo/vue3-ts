<!--
 * @Author: ykx
 * @Date: 2022-05-25 14:38:26
 * @LastEditTime: 2022-09-28 17:42:09
 * @LastEditors: your name
 * @Description: 首页-欢迎页
 * @FilePath: \my-vue-app\src\views\dashboard\welcome\index.vue
-->
<template>
   <a-descriptions title="系统信息" bordered>
      <a-descriptions-item key="IP" label="IP">
         {{loginIp}}
      </a-descriptions-item>
   </a-descriptions>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from '@vue/reactivity';
import { useUserStore } from '@/store/modules/user'

const loginIp = computed(() => {
   return useUserStore().userInfo?.loginIp;
})
</script>

<style scoped>

</style>
