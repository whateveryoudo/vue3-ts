<!--
 * @Author: ykx
 * @Date: 2021-04-06 14:17:38
 * @LastEditTime: 2021-05-12 15:30:23
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \antd-pro-vue3\src\components\MyMap.vue
-->
<template>
  <my-marker></my-marker>
  <button @click="changeGeolocation">点击切换坐标</button>
  <button @click="changeDir">点击切换方向</button>
</template>

<script>
import { provide, ref, toRef,unref, reactive, readonly } from "vue";
import MyMarker from "./MyMarker.vue";
export default {
  components: {
    MyMarker,
  },
  setup() {
    const geolocation = reactive({
      longitude: 50,
      latitude: 100,
    });
    const testObj = {
      dir: 'north'
    }
    // const direct = ref("north")
    const direct = toRef(testObj, 'dir');
    function changeDir () {
      direct.value = 'south';
      console.log(unref(direct));
    }
    provide("location", readonly(direct));
    provide("geolocation", readonly(geolocation));
    provide('changeGeolocation', () => {
      geolocation.longitude = (Math.random() * 100).toFixed(2);
      geolocation.latitude = (Math.random() * 100).toFixed(2);
    })
    return {
      geolocation,
      changeDir
    };
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    changeGeolocation() {
      Object.assign(this.geolocation, {
        longitude: (Math.random() * 100).toFixed(2),
        latitude: (Math.random() * 100).toFixed(2),
      })
    },
  },
};
</script>
<style scoped>
</style>