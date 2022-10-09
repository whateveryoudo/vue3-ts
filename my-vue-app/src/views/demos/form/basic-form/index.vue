<!--
 * @Author: ykx
 * @Date: 2022-10-08 16:25:51
 * @LastEditTime: 2022-10-08 17:03:05
 * @LastEditors: your name
 * @Description: 基础表单
 * @FilePath: \my-vue-app\src\views\demos\form\basic-form\index.vue
-->
<template>
  <s-card>
    <SchemaForm/>
  </s-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useForm } from '@/hooks/core/schema-form'
const [SchemaForm] = useForm();
</script>

<style scoped lang="less"></style>


