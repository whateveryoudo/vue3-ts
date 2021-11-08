<!--
 * @Author: ykx
 * @Date: 2021-04-06 14:18:11
 * @LastEditTime: 2021-04-06 15:32:38
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \antd-pro-vue3\src\components\MyMarker.vue
-->
<template>
  <button @click="changeGeolocation">我是内部切换</button>
  <div>{{userLocation}}--{{userGeolocation}}</div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const userLocation = inject("location", "south");
    const userGeolocation = inject("geolocation");
    const changeGeolocation = inject("changeGeolocation");
    return {
      userLocation,
      userGeolocation,
      changeGeolocation
    };
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>