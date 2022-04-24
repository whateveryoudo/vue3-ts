<!--
 * @Author: ykx
 * @Date: 2021-05-11 15:08:07
 * @LastEditTime: 2022-04-24 10:00:54
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\App.vue
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
