<!--
 * @Author: ykx
 * @Date: 2022-07-12 15:27:10
 * @LastEditTime: 2022-07-12 17:01:17
 * @LastEditors: your name
 * @Description: 搜索
 * @FilePath: \my-vue-app\src\layout\PageHeader\components\search\index.vue
-->
<template>
  <a-tooltip
    :title="$t('common.searchText')"
    placement="bottom"
  >
    <slot>
      <SearchOutlined @click="visible = true" />
    </slot>
    <GDraggableModal
      v-model:visible="visible"
      title="搜索菜单"
      @cancel="handleClose"
      @ok="handleOk"
    />
  </a-tooltip>
</template>

<script  lang="ts" setup>
import { SearchOutlined } from "@ant-design/icons-vue";
import { GDraggableModal } from "@/components/core/draggable-modal";
import { ref } from "@vue/reactivity";
const visible = ref(false);
const handleClose = () => {
  visible.value = false;
};
const handleOk = () => {
  alert(111)
};
</script>

<style scoped>
</style>

