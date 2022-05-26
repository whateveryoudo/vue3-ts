<!--
 * @Author: ykx
 * @Date: 2022-04-29 10:50:18
 * @LastEditTime: 2022-05-25 15:22:10
 * @LastEditors: your name
 * @Description: 空的容器
 * @FilePath: \my-vue-app\src\layout\routerView\index.vue
-->
<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <suspense>
          <component :is="Component" />
          <template #callback> <div>Loading</div> </template>
        </suspense>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
