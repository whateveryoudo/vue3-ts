<!--
 * @Author: ykx
 * @Date: 2022-10-17 16:34:18
 * @LastEditTime: 2022-10-17 17:34:01
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\views\demos\form\basic-form\Test.vue
-->
<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { ref, reactive, computed, toRefs, defineComponent } from "vue";
export default defineComponent({
  props: {
    info: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { info } = props;
    const {obj} = info
    console.log(obj);
    return {
      obj,
      name: obj.name
    };
  },
});
</script>

<style scoped lang="less"></style>
