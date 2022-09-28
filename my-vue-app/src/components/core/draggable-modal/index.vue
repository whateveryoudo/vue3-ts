<!--
 * @Author: ykx
 * @Date: 2022-07-12 15:45:11
 * @LastEditTime: 2022-07-13 14:53:37
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\components\core\draggable-modal\index.vue
-->
<template>
  <div
    ref="modalWrapRef"
    class="custom-modal"
  >
    <a-modal
      v-bind="omit(props, ['visible', 'onCancel', 'onOk', 'onUpdate:visible'])"
      v-model:visible="visibleModel"
      @ok="emit('ok')"
      @cancel="emit('cancel')"
      :get-container="() => modalWrapRef"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script  lang="ts" setup>
import { nextTick, watch, ref } from "vue";
import { throttle } from "lodash-es";
import { modalProps } from "ant-design-vue/es/modal/Modal";
import { useVModel } from "@vueuse/core";
import { omit } from "lodash-es";

// 是否已经初始化过了
let inited = false;
const modalWrapRef = ref<HTMLDivElement>();
const props = defineProps({
  ...modalProps(),
  fullscreen: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:visible", "ok", "cancel"]);
const visibleModel = useVModel(props, "visible", emit);
const fullscreenModel = ref(props.fullscreen); // 是否全屏显示
console.log(visibleModel);
// 设置弹框居中
const setCenterModal = async () => {
  await nextTick();
  const modalEl =
    modalWrapRef.value?.querySelector<HTMLDivElement>(".ant-modal");
  if (modalEl && modalEl.getBoundingClientRect().left < 1) {
    // ??为啥这样判断
    modalEl.style.left = `${
      (document.documentElement.clientWidth - modalEl.offsetWidth) / 2
    }px`;
  }
};
// 头部拖拽
const registerDragTitle = (
  dragEl: HTMLDivElement,
  handleEl: HTMLDivElement
) => {
  handleEl.style.cursor = "move";
  handleEl.onmousedown = throttle((e: MouseEvent) => {
    if (fullscreenModel.value) {
      return;
    }
    document.body.style.userSelect = "none";
    const disX = e.clientX - dragEl.getBoundingClientRect().left; // 计算鼠标点到移动元素左边缘的距离
    const disY = e.clientY - dragEl.getBoundingClientRect().top;
    console.log(disX);
    const mousemove = (e: MouseEvent) => {
      if (fullscreenModel.value) {
        return;
      }
      let movedX = e.clientX - disX; // 移动元素左距离点
      let movedY = e.clientY - disY;
      const maxLeft = document.documentElement.clientWidth - dragEl.offsetWidth;
      const maxTop =
        document.documentElement.clientHeight - dragEl.offsetHeight;
      movedX <= 0 && (movedX = 0);
      movedX >= maxLeft && (movedX = maxLeft);
      movedY <= 0 && (movedY = 0);
      movedY >= maxTop && (movedY = maxTop);
      dragEl.style.left = `${movedX}px`;
      dragEl.style.top = `${movedY}px`;
    };
    const mouseup = () => {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
      document.body.style.userSelect = "auto";
    };
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
  }, 20);
};
const initDrag = async () => {
  await nextTick();
  const modalWrapRefElem = modalWrapRef.value!;
  const modalWrapElem =
    modalWrapRefElem.querySelector<HTMLDivElement>(".ant-modal-wrap");
  const modalElem =
    modalWrapRefElem.querySelector<HTMLDivElement>(".ant-modal");
  if (modalWrapElem && modalElem) {
    setCenterModal();
    // 获取头部元素
    const headerEl =
      modalElem.querySelector<HTMLDivElement>(".ant-modal-header");
    headerEl && registerDragTitle(modalElem, headerEl);
  }
};
// 初始化拖拽
watch(visibleModel, async (val) => {
  if ((val && Object.is(inited, false)) || props.destroyOnClose) {
    initDrag();
  }
});
</script>

<style lang="less">
.custom-modal {
  .ant-modal {
    position: fixed;
    padding: 0;
    min-height: 200px;
    min-width: 200px;
  }
}
</style>
