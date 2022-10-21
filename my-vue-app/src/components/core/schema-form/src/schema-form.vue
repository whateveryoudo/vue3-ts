<!--
 * @Author: ykx
 * @Date: 2022-10-08 16:44:10
 * @LastEditTime: 2022-10-21 15:51:18
 * @LastEditors: your name
 * @Description: 动态表单
 * @FilePath: \my-vue-app\src\components\core\schema-form\src\schema-form.vue
-->
<template>
  <a-form>
    <a-row>
      <a-slot name="formHeader"></a-slot>
      <template v-for="schemaItem in formSchemasRef" :key="schemaItem.field">
        <schema-form-item :schema="schemaItem"> </schema-form-item>
      </template>

      <a-slot name="formFooter"></a-slot>
    </a-row>
  </a-form>
</template>

<script setup lang="ts">
import { ref, reactive, useAttrs } from "vue";
import { useFormState } from "./hooks/useFormState";
import { schemaFormProps } from "./schema-form";
import SchemaFormItem from "./schema-form-item.vue";
const props = defineProps(schemaFormProps);
const attrs = useAttrs();
const formState = useFormState({
  props,
  attrs,
});
const { formSchemasRef } = formState;

</script>

<style scoped lang="less"></style>
