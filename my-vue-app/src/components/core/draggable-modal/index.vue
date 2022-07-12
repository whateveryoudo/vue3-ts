<!--
 * @Author: ykx
 * @Date: 2022-07-12 15:45:11
 * @LastEditTime: 2022-07-12 17:54:39
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\components\core\draggable-modal\index.vue
-->
<template>
  <a-modal
    v-bind="omit(props, ['visible', 'onCancel', 'onOk', 'onUpdate:visible'])"
    v-model:visible="visibleModel"
    @ok="emit('ok')"
    @cancel="emit('cancel')"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>

<script  lang="ts" setup>
import { watch } from 'vue'
import { modalProps } from "ant-design-vue/es/modal/Modal";
import { useVModel } from "@vueuse/core";
import { omit } from "lodash-es";
const props = defineProps({
  ...modalProps()
});
const emit = defineEmits(["update:visible", "ok", "cancel"]);
const visibleModel = useVModel(props, "visible", emit);
console.log(visibleModel);
</script>

<style scoped>
</style>
