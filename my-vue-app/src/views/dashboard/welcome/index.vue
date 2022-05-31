<!--
 * @Author: ykx
 * @Date: 2022-05-25 14:38:26
 * @LastEditTime: 2022-05-31 09:49:43
 * @LastEditors: your name
 * @Description: 首页-欢迎页
 * @FilePath: \my-vue-app\src\views\dashboard\welcome\index.vue
-->
<template>
   <Test :info="info"/>
   <a-button @click="info.color='red'">点击</a-button>
</template>

<script setup lang="ts">
import  Test from './Test'
import { reactive, ref } from '@vue/reactivity';
const info = reactive({
   name: 'ykx',
   age: 20,
   color: 'blue'
})
</script>

<style scoped>

</style>
